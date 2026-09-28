// Prueba de punta a punta de las notificaciones push (con un "servicio push" falso).
import { DatabaseSync } from 'node:sqlite';
let pass = 0, fail = 0;
const check = (l, c) => { if (c) pass++; else { fail++; console.log('❌ FALLÓ:', l); } };

const raw = new DatabaseSync(':memory:');
raw.exec(`
CREATE TABLE users (id TEXT PRIMARY KEY, username TEXT, name TEXT, role TEXT, password_hash TEXT, password_salt TEXT, active INTEGER, created_at TEXT, updated_at TEXT, approved INTEGER, whatsapp TEXT, wa_notify INTEGER DEFAULT 1, tenant_id TEXT DEFAULT 'rush');
CREATE TABLE orders (id TEXT PRIMARY KEY, custom_folio TEXT, table_id TEXT, customer_name TEXT, customer_phone TEXT, notes TEXT, items TEXT, subtotal REAL, total REAL, status TEXT DEFAULT 'pendiente', channel TEXT, loyalty_consent INTEGER, created_at TEXT DEFAULT (datetime('now')), updated_at TEXT, created_by TEXT, created_by_name TEXT, delivered_at TEXT, delivered_by_name TEXT, tracking_token TEXT, driver_id TEXT, delivery_status TEXT, delivery_lat REAL, delivery_lng REAL, shipping_cost REAL, delivery_address TEXT, receiver_name TEXT, payment_status TEXT, payment_method TEXT, closed_at TEXT, tenant_id TEXT DEFAULT 'rush');
CREATE TABLE menu_items (id TEXT PRIMARY KEY, name TEXT, category TEXT, category_id TEXT, price REAL, description TEXT, destination TEXT, active INTEGER DEFAULT 1, sort_order INTEGER DEFAULT 0, image TEXT, sold_out INTEGER DEFAULT 0, tenant_id TEXT DEFAULT 'rush');
CREATE TABLE tables (id TEXT, name TEXT, active INTEGER DEFAULT 1, tenant_id TEXT DEFAULT 'rush');
CREATE TABLE payments (id INTEGER PRIMARY KEY, order_id TEXT, method TEXT, amount REAL, cash_amount REAL, card_amount REAL, terminal_amount REAL, created_by TEXT, created_at TEXT DEFAULT (datetime('now')), tenant_id TEXT DEFAULT 'rush');
`);
const wrap = (sql) => { let a = []; const o = { bind: (...x) => { a = x; return o; }, run: async () => { raw.prepare(sql).run(...a); return {}; }, first: async () => raw.prepare(sql).get(...a) ?? null, all: async () => ({ results: raw.prepare(sql).all(...a) }) }; return o; };
// Llaves VAPID temporales, generadas al vuelo solo para esta prueba (nunca se usan llaves reales aquí).
const vk = await crypto.subtle.generateKey({ name: 'ECDSA', namedCurve: 'P-256' }, true, ['sign', 'verify']);
const vjwk = await crypto.subtle.exportKey('jwk', vk.privateKey);
const vraw = new Uint8Array(await crypto.subtle.exportKey('raw', vk.publicKey));
const env = {
  DB: { prepare: wrap, batch: async (st) => { for (const x of st) await x.run(); return []; } },
  ASSETS: { fetch: () => new Response('x') },
  VAPID_PUBLIC_KEY: Buffer.from(vraw).toString('base64url'),
  VAPID_PUBLIC_X: vjwk.x,
  VAPID_PUBLIC_Y: vjwk.y,
  VAPID_PRIVATE_KEY: vjwk.d,
};
const pending = [];
const ctx = { waitUntil: (p) => { pending.push(p); } };
const flush = async () => { while (pending.length) await pending.shift(); };

// "Servicio push" falso: captura cada envío
const captured = [];
const realFetch = globalThis.fetch;
globalThis.fetch = async (url, opts) => {
  if (String(url).startsWith('https://push.test/')) { captured.push({ url: String(url), opts }); return new Response(null, { status: 201 }); }
  return realFetch(url, opts);
};

const mod = (await import('../server.js')).default;
const call = async (path, method = 'GET', body, tok) => {
  const r = await mod.fetch(new Request('http://x' + path, { method, headers: { 'Content-Type': 'application/json', ...(tok ? { Authorization: 'Bearer ' + tok } : {}) }, body: body ? JSON.stringify(body) : undefined }), env, ctx);
  return [r.status, await r.json().catch(() => ({}))];
};

// Simula la suscripción de un navegador real
async function fakeBrowserSub(id) {
  const k = await crypto.subtle.generateKey({ name: 'ECDH', namedCurve: 'P-256' }, true, ['deriveBits']);
  const pub = new Uint8Array(await crypto.subtle.exportKey('raw', k.publicKey));
  const auth = crypto.getRandomValues(new Uint8Array(16));
  const b64 = (b) => Buffer.from(b).toString('base64url');
  return { privateKey: k.privateKey, pubRaw: pub, authSecret: auth, sub: { endpoint: 'https://push.test/' + id, keys: { p256dh: b64(pub), auth: b64(auth) } } };
}
async function decrypt(bytes, br) {
  const salt = bytes.slice(0, 16), keyLen = bytes[20], serverPub = bytes.slice(21, 21 + keyLen), cipher = bytes.slice(21 + keyLen);
  const sk = await crypto.subtle.importKey('raw', serverPub, { name: 'ECDH', namedCurve: 'P-256' }, false, []);
  const shared = new Uint8Array(await crypto.subtle.deriveBits({ name: 'ECDH', public: sk }, br.privateKey, 256));
  const hk = async (s, ikm, info, n) => new Uint8Array(await crypto.subtle.deriveBits({ name: 'HKDF', hash: 'SHA-256', salt: s, info }, await crypto.subtle.importKey('raw', ikm, 'HKDF', false, ['deriveBits']), n * 8));
  const cat = (...a) => { const o = new Uint8Array(a.reduce((n, x) => n + x.length, 0)); let p = 0; for (const x of a) { o.set(x, p); p += x.length; } return o; };
  const prk = await hk(br.authSecret, shared, new ArrayBuffer(0), 32);
  const ikm = await hk(salt, prk, cat(new TextEncoder().encode('WebPush: info\0'), br.pubRaw, serverPub), 32);
  const cek = await hk(salt, ikm, new TextEncoder().encode('Content-Encoding: aes128gcm\0'), 16);
  const nonce = await hk(salt, ikm, new TextEncoder().encode('Content-Encoding: nonce\0'), 12);
  const plain = new Uint8Array(await crypto.subtle.decrypt({ name: 'AES-GCM', iv: nonce }, await crypto.subtle.importKey('raw', cek, 'AES-GCM', false, ['decrypt']), cipher));
  let e = plain.length; while (e > 0 && plain[e - 1] === 0) e--;
  return JSON.parse(new TextDecoder().decode(plain.slice(0, e - 1)));
}

// --- Escenario ---
let [, lg0] = await call('/api/login', 'POST', { username: 'admin', password: 'admin' });
// Un admin REAL en la base (como en producción); el "admin/admin" de emergencia no cuenta como usuario.
await call('/api/users', 'POST', { name: 'Jefe', username: 'jefe', password: '1234', role: 'admin' }, lg0.token);
let [, lg] = await call('/api/login', 'POST', { username: 'jefe', password: '1234' });
const adminTok = lg.token;
await call('/api/users', 'POST', { name: 'Coci', username: 'coci', password: '1234', role: 'cocina' }, adminTok);
await call('/api/users', 'POST', { name: 'Barri', username: 'barri', password: '1234', role: 'barra' }, adminTok);
let [, lc] = await call('/api/login', 'POST', { username: 'coci', password: '1234' });
let [, lb] = await call('/api/login', 'POST', { username: 'barri', password: '1234' });

const bAdmin = await fakeBrowserSub('admin'), bCoci = await fakeBrowserSub('coci'), bBarri = await fakeBrowserSub('barri');
check('vapid key pública disponible', (await call('/api/push-vapid-key', 'GET', null, adminTok))[1].key === env.VAPID_PUBLIC_KEY);
check('admin se suscribe', (await call('/api/push-subscribe', 'POST', { subscription: bAdmin.sub }, adminTok))[0] === 200);
check('cocina se suscribe', (await call('/api/push-subscribe', 'POST', { subscription: bCoci.sub }, lc.token))[0] === 200);
check('barra se suscribe', (await call('/api/push-subscribe', 'POST', { subscription: bBarri.sub }, lb.token))[0] === 200);
check('suscripción inválida se rechaza', (await call('/api/push-subscribe', 'POST', { subscription: { endpoint: 'x' } }, adminTok))[0] === 400);

let [, item] = await call('/api/menu', 'POST', { name: 'Taco', price: 40, destination: 'cocina' }, adminTok);
let [, menu] = await call('/api/menu', 'GET', null, adminTok);

// 1) Comanda solo de cocina → avisa a cocina y admin, NO a barra
captured.length = 0;
let [, ord] = await call('/api/orders', 'POST', { customer_name: 'Mesa 1', custom_folio: 'T-1', items: [{ menu_item_id: menu[0].id, name: 'Taco', qty: 1, unit_price: 40, destination: 'cocina' }] }, adminTok);
await flush();
const urls = captured.map(c => c.url).sort();
check('comanda de cocina llega a admin y cocina', urls.includes('https://push.test/admin') && urls.includes('https://push.test/coci'));
check('comanda de cocina NO llega a barra', !urls.includes('https://push.test/barri'));
const toCoci = captured.find(c => c.url.endsWith('/coci'));
check('encabezados Web Push correctos', toCoci.opts.headers['Content-Encoding'] === 'aes128gcm' && toCoci.opts.headers.Authorization.startsWith('vapid t='));
const msg = await decrypt(new Uint8Array(await new Response(toCoci.opts.body).arrayBuffer()), bCoci);
check('el mensaje descifrado dice "Nueva comanda"', msg.title.includes('Nueva comanda') && msg.title.includes('T-1'));

// 2) Alimentos listos → avisa al admin (y al mesero que la creó, aquí el mismo admin)
captured.length = 0;
await call('/api/orders/' + ord.id, 'PATCH', { ready: 'cocina' }, lc.token);
await flush();
const readyMsg = captured.length ? await decrypt(new Uint8Array(await new Response(captured[0].opts.body).arrayBuffer()), bAdmin) : null;
check('aviso de "listos" llega', captured.length > 0 && readyMsg?.title.includes('listos'));

// 3) Cobro → avisa a admins
captured.length = 0;
await call(`/api/orders/${ord.id}/payments`, 'POST', { method: 'efectivo' }, adminTok);
await flush();
const payMsg = captured.length ? await decrypt(new Uint8Array(await new Response(captured[0].opts.body).arrayBuffer()), bAdmin) : null;
check('aviso de cobro llega al admin', payMsg?.title.includes('Cobro'));

// 4) Suscripción muerta (410) se elimina sola
globalThis.fetch = async (url, opts) => String(url).startsWith('https://push.test/') ? new Response(null, { status: 410 }) : realFetch(url, opts);
await call('/api/orders', 'POST', { customer_name: 'Mesa 2', items: [{ menu_item_id: menu[0].id, name: 'Taco', qty: 1, unit_price: 40, destination: 'cocina' }] }, adminTok);
await flush();
const left = raw.prepare('SELECT endpoint FROM pos_push_subs').all().map(r => r.endpoint);
check('suscripciones caducadas (410) se borran solas (solo queda la de barra, a la que no se le avisó)', left.length === 1 && left[0].endsWith('/barri'));

// 5) Sin llaves configuradas, el sistema sigue funcionando (no truena)
delete env.VAPID_PRIVATE_KEY;
let [so] = await call('/api/orders', 'POST', { customer_name: 'Mesa 3', items: [{ menu_item_id: menu[0].id, name: 'Taco', qty: 1, unit_price: 40, destination: 'cocina' }] }, adminTok);
check('sin llaves configuradas, crear orden sigue funcionando', so === 201);

console.log(`\n${pass} pruebas bien, ${fail} fallaron.`);
if (fail) process.exit(1);
