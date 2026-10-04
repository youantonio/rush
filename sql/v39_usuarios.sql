-- v39 · Tabla de usuarios para varios negocios
-- Qué arregla:
--   1) La tabla vieja solo aceptaba los roles admin, mesero y cocina. Por eso Barra, Repartidor
--      y Editor de carta marcaban error al crearlos.
--   2) El nombre de usuario era único en TODA la plataforma: si The Rush ya tiene "lubin",
--      ningún otro negocio podía usar "lubin". Ahora solo debe ser único dentro de cada negocio.
-- No borra a nadie: copia todos los usuarios a la tabla nueva con sus mismas contraseñas.
-- Dónde se corre: Cloudflare → D1 → rush-pos-db → Console (pegar todo y Ejecutar).

CREATE TABLE users_v39 (
  id TEXT PRIMARY KEY,
  username TEXT NOT NULL,
  name TEXT NOT NULL,
  role TEXT NOT NULL CHECK(role IN ('admin','mesero','cocina','barra','repartidor','editor')),
  password_hash TEXT NOT NULL,
  password_salt TEXT NOT NULL,
  active INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  approved INTEGER NOT NULL DEFAULT 1,
  password TEXT,
  whatsapp TEXT,
  wa_notify INTEGER DEFAULT 1,
  tenant_id TEXT NOT NULL DEFAULT 'rush',
  UNIQUE (tenant_id, username)
);
INSERT INTO users_v39 (id, username, name, role, password_hash, password_salt, active, created_at, updated_at, approved, password, whatsapp, wa_notify, tenant_id)
  SELECT id, username, name, role, password_hash, password_salt, active, created_at, updated_at, approved, password, whatsapp, wa_notify, COALESCE(tenant_id, 'rush') FROM users;
DROP TABLE users;
ALTER TABLE users_v39 RENAME TO users;

-- Revisión (debe salir el mismo número de usuarios que antes):
SELECT tenant_id, COUNT(*) AS usuarios FROM users GROUP BY tenant_id;
