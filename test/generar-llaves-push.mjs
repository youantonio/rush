// Genera un par de llaves nuevo para las notificaciones push. NO guarda nada: solo lo imprime.
// Uso:  node generar-llaves-push.mjs
import crypto from 'node:crypto';
const { publicKey, privateKey } = crypto.generateKeyPairSync('ec', { namedCurve: 'prime256v1' });
const jp = publicKey.export({ format: 'jwk' }), jk = privateKey.export({ format: 'jwk' });
const spki = publicKey.export({ type: 'spki', format: 'der' });
console.log('VAPID_PUBLIC_KEY =', spki.subarray(spki.length - 65).toString('base64url'), '   (va en wrangler.toml)');
console.log('VAPID_PUBLIC_X   =', jp.x, '   (va en wrangler.toml)');
console.log('VAPID_PUBLIC_Y   =', jp.y, '   (va en wrangler.toml)');
console.log('VAPID_PRIVATE_KEY =', jk.d, '   (SECRETO: solo en Cloudflare, NUNCA en GitHub)');
