// Prueba de regresión de RUSH POS — corre en Node, simula D1/R2 en memoria.
// Uso: node regresion.mjs   (desde la carpeta tests/)
import { DatabaseSync } from 'node:sqlite';

let pass = 0, fail = 0;
function check(label, cond) {
  if (cond) { pass++; }
  else { fail++; console.log('❌ FALLÓ:', label); }
}

const raw = new DatabaseSync(':memory:');
raw.exec(`
CREATE TABLE users (id TEXT PRIMARY KEY, username TEXT, name TEXT, role TEXT, password_hash TEXT, password_salt TEXT, active INTEGER, created_at TEXT, updated_at TEXT, approved INTEGER, whatsapp TEXT, wa_notify INTEGER DEFAULT 1, tenant_id TEXT DEFAULT 'rush');
CREATE TABLE orders (id TEXT PRIMARY KEY, custom_folio TEXT, table_id TEXT, customer_name TEXT, customer_phone TEXT, notes TEXT, items TEXT, subtotal REAL, total REAL, status TEXT DEFAULT 'pendiente', channel TEXT, loyalty_consent INTEGER, created_at TEXT DEFAULT (datetime('now')), updated_at TEXT, created_by TEXT, created_by_name TEXT, delivered_at TEXT, delivered_by_name TEXT, tracking_token TEXT, driver_id TEXT, delivery_status TEXT, delivery_lat REAL, delivery_lng REAL, shipping_cost REAL, delivery_address TEXT, receiver_name TEXT, payment_status TEXT, payment_method TEXT, closed_at TEXT, tenant_id TEXT DEFAULT 'rush');
CREATE TABLE menu_items (id TEXT PRIMARY KEY, name TEXT, category TEXT, category_id TEXT, price REAL, description TEXT, destination TEXT, active INTEGER DEFAULT 1, sort_order INTEGER DEFAULT 0, image TEXT, sold_out INTEGER DEFAULT 0, tenant_id TEXT DEFAULT 'rush');
CREATE TABLE tables (id TEXT, name TEXT, active INTEGER DEFAULT 1, tenant_id TEXT DEFAULT 'rush');
CREATE TABLE payments (id INTEGER PRIMARY KEY, order_id TEXT, method TEXT, amount REAL, cash_amount REAL, card_amount REAL, terminal_amount REAL, created_by TEXT, created_at TEXT DEFAULT (datetime('now')), tenant_id TEXT DEFAULT 'rush');
`);
const store = new Map();
const R2 = {
  put: async (k, v, o) => { store.set(k, { v, ct: o?.httpMetadata?.contentType }); },
  get: async k => store.has(k) ? { body: store.get(k).v, httpMetadata: { contentType: store.get(k).ct } } : null,
  head: async k => store.has(k) ? {} : null,
};
const wrap = (sql) => {
  let args = [];
  const o = {
    bind: (...a) => { args = a; return o; },
    run: async () => { raw.prepare(sql).run(...args); return { success: true }; },
    first: async () => raw.prepare(sql).get(...args) ?? null,
    all: async () => ({ results: raw.prepare(sql).all(...args) }),
  };
  return o;
};
const env = {
  DB: { prepare: wrap, batch: async (st) => { for (const x of st) await x.run(); return []; } },
  ASSETS: { fetch: () => new Response('x') },
  PHOTOS: R2,
};
const ctx = { waitUntil: p => p };
const mod = (await import('../server.js')).default;
const call = async (path, method = 'GET', body, tok) => {
  const r = await mod.fetch(new Request('http://x' + path, {
    method,
    headers: { 'Content-Type': 'application/json', ...(tok ? { Authorization: 'Bearer ' + tok } : {}) },
    body: body ? JSON.stringify(body) : undefined,
  }), env, ctx);
  return [r.status, await r.json().catch(() => ({}))];
};

// ---- 1) Rush: login, menú, orden, cobro ----
let [s1, l1] = await call('/api/login', 'POST', { username: 'admin', password: 'admin' });
check('rush: login funciona', s1 === 200 && l1.user?.role === 'admin');
const rushTok = l1.token;

let [s2, p1] = await call('/api/menu', 'POST', { name: 'Taco de prueba', price: 40, destination: 'cocina' }, rushTok);
check('rush: crear producto', s2 === 201);

let [, menu1] = await call('/api/menu', 'GET', null, rushTok);
check('rush: el producto aparece en el menú', menu1.some(p => p.name === 'Taco de prueba'));

let [, ord1] = await call('/api/orders', 'POST', { customer_name: 'Mesa 1', items: [{ menu_item_id: menu1[0].id, name: menu1[0].name, qty: 1, unit_price: menu1[0].price, destination: 'cocina' }] }, rushTok);
check('rush: crear orden', !!ord1.id);

let [, pay1] = await call(`/api/orders/${ord1.id}/payments`, 'POST', { method: 'efectivo' }, rushTok);
check('rush: cobrar orden', pay1.paid === 40);

let [, dash1] = await call('/api/dashboard', 'GET', null, rushTok);
check('rush: la venta aparece en caja', dash1.today.sales === 40);

// ---- 2) Multi-negocio: registro y aislamiento ----
let [ss, signup] = await call('/api/signup', 'POST', {
  business_name: 'Negocio de Prueba', slug: 'negocio-prueba', admin_name: 'Prueba', contact_phone: '7710000000',
  admin_username: 'pruebaadmin', admin_password: '1234', modules: { cocina: true },
});
check('signup: crea negocio nuevo', ss === 201 && signup.slug === 'negocio-prueba');

let [sl2, l2] = await call('/t/negocio-prueba/api/login', 'POST', { username: 'pruebaadmin', password: '1234' });
check('negocio nuevo: login funciona', sl2 === 200);
const otroTok = l2.token;

let [, menuOtro] = await call('/t/negocio-prueba/api/menu', 'GET', null, otroTok);
check('negocio nuevo: empieza sin productos de Rush', menuOtro.length === 0);

let [, crossCheck] = await call('/t/negocio-prueba/api/menu', 'GET', null, rushTok);
check('token de rush no sirve en otro negocio', crossCheck.error !== undefined);

// ---- 3) Lealtad ----
let [, join1] = await call('/api/loyalty-join', 'POST', { name: 'Cliente Prueba', phone: '7719998888' });
check('lealtad: unirse sin pedir', !!join1.card_token);

let [, loyDash] = await call('/api/loyalty-dashboard', 'GET', null, rushTok);
check('lealtad: panel responde', loyDash.active_wallets >= 1);

// ---- 4) Canchas y reservaciones ----
let [, court1] = await call('/api/courts', 'POST', { name: 'Cancha de prueba', hourly_rate: 300 }, rushTok);
check('canchas: crear cancha', !!court1.id);

let [, res1] = await call('/api/reservations', 'POST', { court_id: court1.id, customer_name: 'Juan', customer_phone: '7717776666', date: '2026-12-01', start_time: '18:00', hours: 1, total_price: 300 }, rushTok);
check('canchas: crear reservación', !!res1.id);

let [, resList] = await call('/api/reservations', 'GET', null, rushTok);
check('canchas: la reservación aparece', resList.some(r => r.id === res1.id));

// ---- 5) Turnos ----
let [, shiftsStatus] = await call('/api/shifts-status', 'GET', null, rushTok);
check('turnos: endpoint responde', shiftsStatus.current_shift !== undefined);

// ---- Resultado ----
console.log(`\n${pass} pruebas bien, ${fail} fallaron.`);
if (fail > 0) process.exit(1);
// ---- Resultado ----
console.log(`\n${pass} pruebas bien, ${fail} fallaron.`);
if (fail > 0) process.exit(1);
