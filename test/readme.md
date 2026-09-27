# Pruebas automáticas de RUSH POS

Estos scripts simulan D1 y R2 con una base de datos en memoria (SQLite),
sin necesitar internet ni una cuenta real de Cloudflare. Sirven para
detectar errores **antes** de subir una versión nueva — no reemplazan
probarlo en producción, pero atrapan la mayoría de los errores de código.

## Cómo correrlas
Necesitas Node.js 22 o más nuevo instalado en tu computadora.

```bash
cd rush-pos/tests
node regresion.mjs
```

Si todo sale bien, no debe haber ninguna línea con "Error" o un código
que no sea el esperado (200, 201...). Cualquier `[ 500, ... ]` inesperado
es una pista de que algo se rompió.

## Qué cubre
- Login y sesiones (incluyendo que un token de un negocio no sirva en otro)
- Menú: crear, listar, editar
- Órdenes: crear, cobrar, ver en caja
- Multi-negocio: que un negocio nuevo no vea los datos de otro
- Lealtad: unirse, dar sellos, ver el panel
- Canchas y reservaciones
- Turnos, anulación de cobros

## Cuándo correrlas
Después de CUALQUIER cambio en `server.js`, antes de subirlo a Cloudflare.
Si le pides a Claude un cambio nuevo, pídele también que actualice este
archivo con una prueba para lo que acaba de agregar.
