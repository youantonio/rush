RUSH POS v38.0 — "The Rush: Club · Café · Cocina"
Fecha: 25 de septiembre de 2026
Plataforma: Cloudflare Workers + D1 (`rush-pos-db`)
Estado de las versiones
Versión	Estado
v24.1 – v25.0	Base funcional completa: comandas por persona, catálogo tipo Starbucks, usuarios, caja, inventario, lealtad, página pública, pedidos externos.
v26.0	Rediseño, repartidores, envío, WhatsApp local.
v26.1	Emparejador de fotos por nombre, aceptar URLs además de subir archivo.
v26.2	19 fotos identificadas y renombradas en Drive.
v26.3	Candidata a estable. Corrige que los pedidos externos no sumaban sello de lealtad, y que la tarjeta digital no se actualizaba sola. 19 fotos sin nombre revisadas una por una e identificadas visualmente; 16 quedaron renombradas en tu Drive y agregadas al catálogo (118 fotos en total). Las 3 restantes eran duplicados de fotos que ya tenías. Fotos de Drive emparejadas automáticamente por nombre; ahora las fotos también se pueden pegar como URL, no solo subir archivo. Rediseño visual del menú público, fotos de producto, repartidores con ubicación en vivo (gratis), envío automático, plantillas de WhatsApp, canje de recompensa, notas por producto. Probada con pruebas automatizadas del servidor y regresión completa de versiones anteriores. Falta confirmarla en producción.
v26.4	Candidata a estable. WhatsApp de pedidos según el admin en turno, configurable en el panel. Corrige el mensaje de WhatsApp roto del menú público, precios manipulables, folios repetidos y la ventana de WhatsApp bloqueada en iPhone. Agrega mesa/cancha. Falta confirmarla en producción.
v27.0	Candidata a estable. Fotos en Cloudflare R2 (con respaldo automático desde Drive), rol Editor de carta, y carta pública rediseñada con la base de Gemini conectada a todo el sistema. Falta confirmarla en producción.
v27.1	Candidata a estable. Carta con diseño Gemini intacto cuando no hay foto, fotos por 3 rutas, subida de fotos en lote por nombre, prueba de fotos y opción para ocultarlas.
v27.2	Candidata a estable. Avisos por WhatsApp entre el equipo: comanda a Cocina/Barra/Admin y "listo" al mesero y admins. Se ve quién envió cada orden.
v27.3	Candidata a estable. Anular cobros (ej. de prueba) con contraseña del admin en turno + clave del sistema; historial de anulaciones.
v27.4	Candidata a estable. Cadena completa de avisos por WhatsApp (comanda → listo → entregado → ticket cobrado) y pantalla de Turnos con recordatorio diario.
v28.0	Primer paso a SaaS multi-negocio. The Rush sigue funcionando exactamente igual (sin prefijo en la URL). Nuevo: registro público, cada negocio en /t/<slug>/, asistente de módulos, bloqueo automático a los 30 días de prueba, panel de plataforma para Antonio.
v29.0	Panel de lealtad estilo Almendro (KPIs, QR para unirse, feed en vivo) + corrección crítica: el panel y la carta de un negocio nuevo escribían por error en los datos de The Rush.
v30.0	Quita "RUSH POS" de las pantallas genéricas (login, registro, plataforma) → ahora dicen "Artmmx", ya que ese texto lo ve cualquier negocio nuevo, no solo The Rush. Agrega `MAPA-LINEAS.md`.
v31.0	Separa la marca de registro de "rush.artmmx.workers.dev": ahora cualquier dirección que NO empiece con "rush." muestra el registro público en la raíz "/". Agrega `wrangler-app.toml` para el segundo Worker.
v31.1	Agrega `run_worker_first = true` a los dos wrangler.toml — sin esto, Cloudflare servía `index.html` directo y nunca dejaba que el código decidiera mostrar el registro en la raíz de "app".
v32.0	Diseño responsivo para el panel admin (`index.html`) y ajuste móvil en `registro.html`. La carta pública ya era responsiva desde antes.
v33.0	Nuevo "Hub de enlaces" pÃºblico (`hub.html`), inspirado en el concepto de stand NFC+QR: menú, promociones, reseñas, redes, WiFi y más en una sola página, configurable por negocio.
v33.1	El hub de enlaces ahora muestra su propio código QR en el panel, listo para imprimir o descargar.
v34.0	Menú reorganizado en grupos (Operación / Negocio / Admin). Arregla Canchas y Reservas, que nunca tuvieron backend. Aislamiento multi-negocio en el 100% de los endpoints activos. Agrega `tests/` con pruebas automáticas reutilizables.
v35.0	Sellos de lealtad manuales: el admin puede darle un sello a cualquier cliente (ligado por WhatsApp), con motivo, sin necesidad de una compra.
v36.0	"Sellos" ahora se llaman "estrellas" en todo el sistema — panel, tarjeta y páginas públicas. De paso, corrige que la tarjeta digital tenía "THE RUSH" escrito a mano, lo cual se le hubiera visto a cualquier otro negocio de la plataforma.
v37.0	En Venta, el WhatsApp del cliente ya no es obligatorio — nueva casilla "El cliente quiere la tarjeta de lealtad" (apagada por default). Si no la marca, al enviar el pedido se le puede invitar después, sin presionar.
v38.0	App instalable (PWA) con notificaciones push automáticas y con sonido: comandas nuevas, pedidos listos, entregas, cobros y pedidos en línea llegan directo al celular, sin tocar "enviar".
No hay versión marcada como estable todavía.
---
1. Menú público — rediseño completo (`/menu.html`)
El bug que reportaste: al tocar "Estoy en el club" no pasaba nada visible. Corregido: ahora hace scroll automático directo al menú.
El rediseño visual: cambié la estructura completa, no solo colores:
Encabezado tipo "hero" con degradado y tipografía serif para los títulos (Fraunces), inspirado en apps de delivery como Uber Eats/Rappi, pero con la paleta verde+dorado de "The Rush".
Tarjetas de producto grandes, con foto (o un degradado de color con ícono si aún no subes foto — nunca se ve una casilla vacía y gris).
Al tocar un producto se abre una ficha con foto grande, descripción y selector de cantidad, en vez de agregarse de golpe sin avisar.
Buscador, secciones y categorías con la misma jerarquía que ya usas en el admin.
Fotos de producto — cómo se cargan: en Menú → Nuevo producto, hay un campo para subir una foto desde tu celular o computadora. Se comprime automáticamente en el navegador antes de guardarse (para no saturar la base de datos) y se ve de inmediato en el menú público. También puedes subir o cambiar la foto de un producto ya existente, desde la tabla de clasificación.
Nota honesta: las fotos se guardan directo en la base de datos (D1), lo cual es gratis y funciona bien para un menú de tamaño normal. Si algún día suben cientos de fotos en alta resolución, seguirá una migración a almacenamiento de archivos (Cloudflare R2) — te aviso si tu catálogo llega a ese punto, no es algo que debas resolver ahora.
Nombre del producto bien escrito: al escribir el nombre de un producto nuevo (ej. "taco de arrachera"), aparece abajo una sugerencia en mayúsculas/minúsculas correctas ("Taco de Arrachera") que aceptas con un clic. Ya no dependes de escribirlo bien a mano.
2. Repartidores y envío a domicilio (Fase B/C/D, con opciones gratuitas)
Fase B — WhatsApp (versión local, sin API de pago, como pediste)
En Órdenes, cualquier pedido que llegó por la página web tiene un botón 💬 Responder por WhatsApp con 4 plantillas listas para editar y enviar:
📝 Confirmación de pedido
💳 Método de pago (usa los datos de transferencia que guardes en Configuración)
🛵 Va en camino
✅ Entregado
Cada plantilla se arma sola con los datos del pedido (folio, total, dirección) y la puedes editar antes de mandarla — abre WhatsApp con el mensaje listo.
Fase C — Repartidores
Nuevo rol de usuario: Repartidor (se crea igual que los demás, en Usuarios).
En Órdenes, cada pedido a domicilio tiene una barra para asignar repartidor y avanzar su estatus: Recibido → Preparando → Salió → En camino → Entregado.
El repartidor entra con su usuario y ve 🛵 Mis entregas: sus pedidos asignados, con un botón para avanzar al siguiente estatus.
Fase D — Envío automático y mapa en vivo, 100% gratis
Costo de envío automático: al escribir su dirección, el cliente toca "Ubicar mi dirección" y el sistema calcula la distancia real desde el club (usando el buscador gratuito de OpenStreetMap) y aplica tu tarifa base + $/km, configurables en Configuración → Envío a domicilio.
Mapa en vivo, sin apps ni SDKs de pago: el repartidor activa "📍 Compartir mi ubicación" en su pantalla de Mis entregas — usa el GPS que ya trae su celular, sin instalar nada. El cliente entra a su link de seguimiento (`/seguimiento.html`, se genera solo con cada pedido) y ve su pedido avanzando de estatus, y si el repartidor está compartiendo ubicación, lo ve como un punto en un mapa gratuito.
Límite honesto: esto solo funciona mientras el repartidor mantiene esa pantalla abierta (pantalla prendida). No sigue en segundo plano como una app nativa — eso sí requeriría inversión en una app aparte.
Dirección estructurada: el pedido a domicilio ahora pide, como pediste: calle, número, colonia, referencia (por si se pierden), nombre de quien recibe, y confirma el WhatsApp.
3. Notas por producto (ya no solo por comanda completa)
En Venta, cada línea del carrito tiene un botón 📝 para ponerle una nota a ESE producto específico (ej. "sin cebolla" solo en el taco de la Persona 2, no en toda la comanda). Se ve en Cocina, Barra, Órdenes y en el ticket, junto al producto exacto.
4. Canje de recompensa integrado
En Órdenes, junto al botón de tarjeta, ahora hay 🎁 Canjear: si el cliente ya ganó una recompensa de lealtad, se descuenta con un clic (antes solo existía el endpoint, sin botón).
---
Fotos de Drive — cómo se cargan en v26.1
Conectaste Google Drive y leí tu carpeta completa: 131 fotos. De esas, 102 tienen nombre de platillo reconocible (bebidas y comida: gringas, volcanes, burritos, tacos, hamburguesas) y quedaron mapeadas dentro del sistema. Las ~20 restantes se guardaron como `IMG_46xx.JPG` (nombre de cámara) y no se pueden emparejar solas — habría que renombrarlas en Drive con el nombre del platillo, o subirlas a mano.
Cómo aplicarlas: en Menú, nuevo botón 📷 Sugerir fotos desde Drive. Compara el nombre de cada producto sin foto contra el catálogo de 102 fotos (ignora tamaños como "16 oz" o "450 ml", acentos y mayúsculas), te muestra las coincidencias con miniatura, puedes quitar las que no te convenzan, y con un clic las aplica todas.
Importante sobre las fotos: quedan enlazadas directo a tu Google Drive (no se copian a la base de datos). Eso significa:
Si mueves, renombras o eliminas el archivo en Drive, la foto deja de verse en el menú.
El archivo debe seguir compartido como "cualquiera con el enlace puede ver" para que se muestre en la página pública (ya lo está, por cómo compartiste la carpeta).
Si algún día prefieres que las fotos vivan dentro del sistema (más seguro a largo plazo, no depende de Drive), es la misma migración a Cloudflare R2 que ya mencioné — se las subes una vez, y de ahí en adelante el sistema no depende de tu Drive.
El campo de imagen ahora acepta dos formas: subir un archivo (se guarda comprimido dentro del sistema) o pegar/aplicar una URL como la de Drive. Puedes mezclar ambas según el producto.
D1: qué cambia en la base de datos
No tienes que correr SQL. El Worker crea/agrega solo:
Columna `image` en `menu_items`
Columnas `delivery_status`, `driver_id`, `delivery_lat`, `delivery_lng`, `shipping_cost`, `tracking_token`, `delivery_address`, `receiver_name` en `orders`
Tabla `pos_driver_locations`
Configuración nueva: ubicación del negocio, tarifa de envío, datos de pago
Rol `repartidor` disponible en Usuarios
No modifica ni borra nada existente.
Cómo desplegar
Sube todos los archivos (`server.js`, `wrangler.toml`, `public/index.html`, `public/menu.html`, `public/tarjeta.html`, `public/seguimiento.html`) y despliega.
Entra como admin → Configuración: revisa/ajusta la ubicación del negocio (o deja Pachuca centro por default), tarifa de envío, y datos de transferencia.
Menú: sube al menos una foto de prueba y usa la sugerencia de nombre en un producto nuevo.
Usuarios: crea un usuario de prueba con rol Repartidor.
Haz un pedido de prueba a domicilio desde `/menu.html`, asígnale el repartidor de prueba desde Órdenes, y activa "Compartir ubicación" desde el usuario repartidor para ver el flujo completo en `/seguimiento.html`.
Pendiente
Cargar las fotos de tu carpeta de Drive (pendiente de que conectes el acceso).
Costo de envío con ruta real por calle (hoy es línea recta) — requeriría un servicio de rutas, hay opciones gratuitas con límites que podemos evaluar si la línea recta no es suficientemente precisa para ti.
Clon de Uber para Pachuca (proyecto aparte, en pausa, listo para retomar).

v26.2 — Las 19 fotos sin nombre, revisadas una por una
Descargué y vi cada una de las 19 fotos que quedaron como `IMG_46xx.JPG`. 16 eran platillos nuevos que no tenías nombrados; las renombré directo en tu Google Drive y las agregué al catálogo del sistema:
Nombre nuevo
Moca helado
Matcha con foam de moras
Matcha con foam de caramelo
Matcha con foam de vainilla
Matcha con foam de taro
Matcha tradicional ceremonial
Frappe de maracuya
Enchiladas de pollo
Chilaquiles verdes tradicionales
Chilaquiles verdes con huevo
Chilaquiles verdes con arrachera
Molletes de pollo
Molletes con tocino
Torrejas francesas con frutos rojos
Omelette con tocino
Sándwich de huevo, tocino y queso
Las otras 3 (`IMG_4618`, dos copias de `IMG_4616`) resultaron ser fotos duplicadas de "Strawberry Matcha" y "Mango Matcha", que ya tenías nombradas — las dejé como "(alterna)" en Drive para no perderlas, pero no hacía falta agregarlas de nuevo al catálogo.
El catálogo de fotos ya tiene 118 platillos. El botón 📷 Sugerir fotos desde Drive en Menú ahora busca contra las 118, no solo las 102 originales.

v26.3 — Bug: pedidos externos no sumaban sello de lealtad
Lo que reportaste: cobraste un pedido (ej. Dulce) y su tarjeta digital no se actualizó con la visita.
Causa real, confirmada con una prueba: el formulario 🛵 Capturar pedido externo (Rappi/Uber/directo) nunca preguntaba ni guardaba el consentimiento de lealtad — se guardaba en "no" sin que se viera en pantalla. Por eso, al cobrar esos pedidos, el sistema no sumaba el sello: no tenía permiso guardado para hacerlo. Los pedidos hechos desde Venta (mesero) o desde la página pública sí funcionaban bien, porque esos dos sí llevaban la casilla.
Corregido:
El modal de pedido externo ahora tiene la misma casilla ✅ "Inscribir a tarjeta de lealtad" que ya tenían los otros dos flujos.
Probé el escenario exacto: pedido externo con lealtad → cobrar → la tarjeta pasa de 0 a 1 sello correctamente.
Además corregí que la tarjeta no se refrescaba sola. Si el mesero le mostraba el link al cliente antes de cobrar, la página se quedaba congelada en "0 sellos" aunque el cobro sí hubiera sumado el sello por dentro — solo hacía falta recargar. Ahora `/tarjeta.html` se actualiza sola cada 15 segundos y tiene un botón "↻ Actualizar" para revisarlo al instante.

v26.4 — WhatsApp del admin en turno + correcciones
Fecha: 25 de septiembre de 2026
Nuevo: WhatsApp según el admin en turno
Usuarios: cada administrador tiene su WhatsApp (botón 📱 WhatsApp, o al crear el usuario).
Configuración → 📲 Admin en turno: eliges quién recibe los pedidos, o tocas 🙋 Tomar el turno yo.
Arriba, junto a tu nombre, se ve a quién le están llegando los pedidos. Tócalo para ir a Configuración.
Si nadie está en turno (o su número se borra), los pedidos llegan al WhatsApp general de respaldo.
Errores corregidos
Mensaje de WhatsApp roto: el menú público mandaba el texto con `\n` literales en vez de saltos de línea. Corregido.
Teléfono con espacios: "771 123 4567" se rechazaba. Ahora se limpia solo.
Precios manipulables: el servidor aceptaba el precio que mandaba el navegador (alguien podía pedir a $0). Ahora el precio siempre sale de D1.
WhatsApp bloqueado en iPhone: Safari bloqueaba la ventana que se abría sola. Ahora sale una pantalla de "¡Pedido recibido!" con botón para enviar.
Link de seguimiento perdido: antes aparecía 2 segundos en un aviso. Ahora queda en la pantalla de confirmación.
Folios repetidos: dos pedidos en el mismo minuto tenían el mismo folio, y la hora salía en UTC. Ahora usa hora de México + 2 letras (ej. `WEB-2509-1917-2E`).
Mesa o cancha: el pedido "Estoy en el club" ahora pregunta mesa/cancha y se ve en Cocina/Barra.
D1
No tienes que correr SQL. El Worker agrega solo la columna `whatsapp` en `users` y la configuración `whatsapp_on_duty`.
Prueba rápida
Usuarios → 📱 WhatsApp a tu usuario admin.
Configuración → 🙋 Tomar el turno yo.
Haz un pedido desde `/menu.html` → debe abrir WhatsApp hacia tu número, con saltos de línea bien.

---
v27.0 — Fotos en R2, Editor de carta y carta rediseñada
Fecha: 25 de septiembre de 2026
⚠️ Paso 1 ANTES de desplegar: crear el bucket de R2
Cloudflare → R2 Object Storage → Create bucket.
Nombre exacto: `rush-fotos` → Create.
Ya está en `wrangler.toml` (binding `PHOTOS`). Ahora sí, sube los archivos y despliega.
Si despliegas sin crear el bucket, Cloudflare marca error. Si prefieres esperar, borra el bloque `[[r2_buckets]]` de `wrangler.toml`: las fotos seguirán viéndose por el proxy, solo que sin R2.
Paso 2: copiar las fotos a R2 (una sola vez)
Admin → Configuración → 📦 Fotos en Cloudflare R2 → Copiar todas las fotos a R2.
Va de 8 en 8 y te muestra el avance. Al final te dice si alguna no se pudo copiar.
Cómo funcionan las fotos ahora
Por qué no se veían: Google rompió el formato `uc?export=view`. Ya no se usa.
Proxy: cualquier link de Drive se muestra como `/img/drive/ID` desde tu Worker. El Worker la trae de Drive (formato `thumbnail`, y si falla, `lh3`), la guarda en caché 30 días y la copia sola a R2 la primera vez que alguien la ve.
Fotos nuevas: al subir desde Menú o Editar carta, se guardan directo en R2 (`/img/r2/...`), ya no dentro de la base D1.
Sin R2 conectado: todo sigue funcionando como antes (las subidas se guardan en D1).
Nuevo rol: Editor de carta
Usuarios → crear con rol Editor de carta.
Al entrar solo ve 🖼️ Editar carta: subir o pegar link de foto, quitar foto, cambiar nombre y descripción.
No puede cambiar precios, agotados, categorías, usuarios ni nada más (el servidor lo bloquea, no solo la pantalla).
El admin también tiene esta vista.
Carta pública rediseñada (`/menu.html`)
Base visual de Gemini (verde esmeralda + ámbar, Playfair + Montserrat), conectada a todo:
Secciones como botones grandes (salen de tus secciones del admin) + categorías como pastillas.
Tarjetas con foto grande; si no hay foto, un fondo de color con ícono.
Modo noche automático después de las 2 PM, con botón 🌙/☀️.
Comanda separada por Barra y Cocina, con cantidades y 📝 nota por producto.
Notas separadas: las de cocina llegan solo a cocina y las de barra solo a barra.
En el club (mesa/cancha) · A domicilio directo (con costo de envío) · Rappi · Uber Eats.
WhatsApp al admin en turno, seguimiento de entrega y link a la tarjeta de lealtad al terminar.
Frase de bienvenida y horario editables en Configuración → Carta pública.
D1
No tienes que correr SQL. El Worker agrega solo las configuraciones `menu_tagline` y `business_hours`.
Prueba rápida
Crea el bucket y despliega.
Abre `/menu.html`: las fotos de Drive ya deben verse.
Configuración → Copiar fotos a R2.
Crea un usuario Editor de carta, entra con él y cambia una foto.
Haz un pedido de prueba con una bebida y un platillo, con nota en cada estación.

---
v27.1 — Carta Gemini al 100 % + fotos confiables
Fecha: 25 de septiembre de 2026
Carta
Si una foto no carga, la tarjeta queda exactamente como el diseño de Gemini (etiqueta Barra/Cocina, nombre, descripción, precio). Ya no hay cuadros de color vacíos.
En celular vuelve a una columna con descripción visible, como en el diseño original.
Configuración → Mostrar fotos en la carta pública: apágalo y la carta queda 100 % estilo Gemini.
Fotos: 3 rutas antes de rendirse
Tu Worker (R2 o caché).
Drive `thumbnail`, pedido directo desde el celular del cliente.
Drive `lh3`, también directo.
🔍 Probar fotos de Drive
Configuración → 📦 Fotos → 🔍 Probar fotos de Drive te dice cuál de las 3 rutas funciona en tu Cloudflare.
📂 Subir fotos en lote (la forma más segura)
En Google Drive, selecciona la carpeta de fotos → Descargar (baja un .zip) → descomprímelo.
En Menú (o Editar carta) toca 📂 Subir fotos en lote y elige todas las fotos.
Se emparejan solas por nombre (ignora "de", tamaños y acentos). Corrige las que falten con el selector.
⬆️ Subir: quedan en R2 y ya no dependen de Drive.

---
v27.2 — Avisos por WhatsApp entre el equipo
Fecha: 25 de septiembre de 2026
✅ Tus productos y fotos NO se borran
Esta versión solo cambia archivos del sistema. No borra ni reemplaza productos, precios ni fotos (D1 y R2 quedan igual). Solo agrega 3 columnas vacías: `users.wa_notify`, `orders.created_by` y `orders.created_by_name`.
1. Mesero envía la orden → avisa por WhatsApp
Al tocar enviar, sale 📲 Avisar comanda con un botón por persona:
🍳 Cocina: solo platillos y nota de cocina.
☕ Barra: solo bebidas y nota de barra.
👑 Admins: la comanda completa (marca quién está en turno).
👥 Grupo: abre WhatsApp para elegir un grupo (ej. "Rush Cocina").
También sirve al agregar productos a una comanda abierta.
2. Cocina o Barra marca listo → avisa al mesero
Al tocar ✅ listos, sale Avisar que está listo con botones para:
el mesero que envió la orden,
los admins,
un grupo.
3. ¿Ya se envió la orden?
Cocina y Barra ven "Envió: nombre del mesero" en cada orden (o "carta en línea").
En 📋 Órdenes, el botón 📲 Avisar reenvía la comanda cuando quieras.
Configurar (una vez)
👥 Usuarios → 📱 WhatsApp a cada persona (mesero, cocina, barra, admin).
🔔 / 🔕 junto al número: quién recibe avisos.
Importante
WhatsApp no permite enviar mensajes automáticos sin tocar nada. Cada botón abre el chat con el mensaje ya escrito y la persona toca enviar. Para envío 100 % automático se necesita la API de WhatsApp Business de Meta (de pago).

---
v27.3 — Anular cobros con doble clave
Fecha: 25 de septiembre de 2026
Dónde
📊 Caja → 🧾 Cobros desde el último corte → 🚫 Anular
Qué pide
Motivo (ej. "Cobro de prueba").
Contraseña del admin en turno (el que tomó el turno en Configuración).
Clave del sistema: inicial 2470.
Qué hace ("de ambas partes")
Borra el cobro → deja de sumar en ventas y en caja.
Borra la orden.
Quita el sello de lealtad que dio ese cobro.
Guarda un historial: fecha, orden, monto, motivo, quién autorizó y quién lo hizo.
Reglas de seguridad
Solo un administrador ve el botón.
Si no hay admin en turno, no deja anular.
No se puede anular un cobro que ya está dentro de un corte de caja.
Si fallan las claves, tarda un poco en responder para frenar intentos.
La clave se guarda cifrada y no aparece en Configuración.
Cambiar la clave 2470
⚙️ Configuración → 🔐 Clave del sistema: clave actual + clave nueva (4 a 8 números).
Tus datos
No borra productos ni fotos. Solo agrega la tabla `pos_voids` (historial).

---
v27.4 — Cadena completa de avisos + Turnos
Fecha: 25 de septiembre de 2026
La cadena de avisos, de punta a punta
```
Mesero envía        → 📲 avisa a Cocina + Barra + Admin
Cocina/Barra listo  → 📲 avisa al Mesero + Admin
Mesero entrega       → 📲 avisa a Cocina + Barra + Admin ("ya se entregó")
Se cobra el ticket   → 📲 avisa a los Admins (folio, total, método, "ya en las ventas de hoy")
Piden algo más       → se repite el primer paso
```
Todos con el mismo mecanismo de siempre: un botón por persona que abre WhatsApp con el mensaje listo; tú tocas enviar.
🍽️ Nuevo botón: Entregado
En 📋 Órdenes, las órdenes de mesa o cancha (no domicilio) tienen el botón 🍽️ Entregado. Al tocarlo, queda registrado quién entregó y se abre el aviso.
🗓️ Nuevo: Turnos (recuerda quién trabaja hoy)
🗓️ Turnos (solo admin), cada rol necesita mínimo 2 turnos al día:
☀️ Matutino (8am–3pm)
🌙 Vespertino (3pm–11pm)
Toca el nombre de cada persona para asignarla o quitarla de un turno, por rol y por día.
Recordatorio: si falta asignar el turno del momento, aparece una etiqueta roja ⏰ arriba del panel; tócala para ir directo a Turnos. Si nadie tomó el turno de WhatsApp (Configuración → Admin en turno), también avisa.
⚠️ El recordatorio es sobre la asignación de personal (quién trabaja). El admin en turno de WhatsApp (quién recibe los pedidos de la carta) se sigue tomando aparte, en Configuración, como antes — el aviso solo te recuerda hacerlo.
Tus datos
No borra productos ni fotos. Solo agrega: `orders.delivered_at`, `orders.delivered_by_name` y la tabla `pos_shifts`.

---
v28.0 — RUSH POS como plataforma multi-negocio
Fecha: 26 de septiembre de 2026
Lo más importante: The Rush no cambia
Sin ningún prefijo en la URL, `rush.artmmx.workers.dev` sigue siendo exactamente The Rush — mismos datos, mismas fotos, mismo WhatsApp en turno. Por dentro, The Rush ahora es el negocio "rush", marcado como activo para siempre (nunca se bloquea).
Cómo funciona un negocio nuevo
Registro público: `/registro.html` — nombre del negocio, contacto, usuario administrador y qué módulos cree que va a necesitar (Cocina, Barra, Mesas, Canchas, Repartidores, Lealtad).
Su URL: `/t/<su-nombre>/` — por ejemplo `/t/cafe-luna/`. Ahí vive su versión completa del sistema: login, menú, órdenes, caja, todo vacío para que lo llenen ellos.
Primer inicio de sesión: aparece el asistente de bienvenida para confirmar o ajustar los módulos elegidos. Se puede volver a cambiar después.
Un mes gratis: al llegar la fecha, el sistema se bloquea solo y muestra una pantalla para contactar al administrador (con botón directo a WhatsApp si dejaron su número). Nada del negocio se borra, solo se pausa.
Panel "🏢 Mis restaurantes" (solo lo ve un admin de "rush")
Lista todos los negocios registrados, con botones para activar, bloquear o extender la prueba unos días — mientras no haya todavía un cobro automático. El precio se define más adelante contigo.
Qué quedó aislado por negocio en esta versión
Login, usuarios, menú (público y admin), secciones/categorías, órdenes, cobros, caja (dashboard, cortes, movimientos), tarjeta de lealtad, turnos, anulación de cobros, inventario, clientes, repartidores y fotos (R2 sigue siendo el mismo bucket, pero cada negocio solo ve las suyas).
Lo que falta reforzar antes de vender esto en serio
Precio y cobro real — hoy el "pagar" es solo contactar por WhatsApp; falta pasarela de pago.
Revisión de seguridad más profunda antes de dar de alta un segundo negocio con datos reales de otra persona.
Mover la página de mercadeo a la URL principal cuando decidas lanzar la marca completa (hoy vive aparte, en `/registro.html`, para no arriesgar nada de Rush).
Prueba rápida
Abre `/registro.html`, crea un negocio de prueba.
Entra a `/t/<lo-que-pusiste>/`, confirma el asistente de módulos.
Crea un producto y una orden: confirma que The Rush (sin prefijo) no los ve.
Desde The Rush, entra a 🏢 Mis restaurantes y prueba activar/bloquear ese negocio de prueba.

---
v29.0 — Panel de Lealtad + corrección crítica de multi-negocio
Fecha: 26 de septiembre de 2026
⚠️ Corrección importante (si ya subiste la v28.0)
El panel admin y la carta pública de un negocio nuevo (`/t/<slug>/`) llamaban a `/api/...` sin el prefijo de su negocio, así que por error escribían en los datos de The Rush en vez de los suyos. Ya está corregido: cada página detecta su propio prefijo y lo usa en todas sus llamadas. The Rush nunca estuvo en riesgo (su URL no lleva prefijo), pero si ya diste de alta un negocio de prueba con la v28.0, revisa que sus productos y órdenes no hayan quedado mezclados con los de Rush.
⭐ Nuevo: Panel de Lealtad (inspirado en apps del mercado como Almendro, hecho a la medida de RUSH POS)
En ⭐ Lealtad y Difusión:
KPIs: sellos de hoy, recompensas de hoy, tarjetas activas, clientes recurrentes, sellos y recompensas históricas.
QR para unirse: tus clientes escanean o abren un link y se unen a la tarjeta sin tener que pedir primero. Botones para copiar el link, mandarlo por WhatsApp o imprimir el QR.
Actividad reciente: quién ganó un sello o una recompensa, en vivo.
Nueva página pública: `unirme.html`
Formulario simple (nombre + WhatsApp) para unirse a la tarjeta de lealtad desde el QR, sin pasar por un pedido.
Nueva tabla
`pos_loyalty_events` — un registro por cada sello o recompensa dada, para alimentar el panel. No afecta tus datos existentes.

---
v30.0 — Quitar la marca "Rush" de las pantallas genéricas + mapa de líneas
Fecha: 26 de septiembre de 2026
Por qué
La pantalla de login, la de registro y el panel de plataforma las ve cualquier negocio nuevo, no solo The Rush. Decían "RUSH POS", lo cual confunde a alguien que está registrando su propio negocio.
Qué cambió
Login (`index.html`): título de pestaña, encabezado y "marca" → ahora dicen "Artmmx".
Registro (`registro.html`): título y encabezado → "Artmmx".
El nombre de "The Rush" sigue igual en todos lados donde es justo eso: su carta, sus tickets, sus mensajes de WhatsApp, su tarjeta de lealtad — porque ahí sí es su negocio.
"Artmmx" es un nombre provisional (viene del subdominio). Dime cuando quieras el nombre definitivo y lo cambio en un momento.
Nuevo: `MAPA-LINEAS.md`
A partir de la v31, para pedir un cambio puedes decir el número de línea o el nombre de la función/endpoint, usando este mapa. Yo reviso esa línea exacta antes de tocar nada, así evitamos que un cambio afecte otra parte por accidente.
Aviso importante: los números de línea cambian cada vez que se edita el archivo. Este mapa es válido para la v30.0 tal cual viene en este zip; en cuanto hagamos el siguiente cambio, genero un mapa actualizado para que sigas usándolo con la versión más reciente.

---
v31.0 — Separar la marca: registro fuera de "rush."
Fecha: 26 de septiembre de 2026
Por qué
`rush.artmmx.workers.dev` es y debe seguir siendo de The Rush. La página para que otros negocios se suscriban no debía vivir bajo ese nombre.
⚠️ Límite real de Cloudflare (léelo antes de continuar)
En `workers.dev` no existe una dirección "pelona". Siempre es `<algo>.artmmx.workers.dev`. No hay forma de que solo `artmmx.workers.dev` funcione sin comprar un dominio propio (ver Paso 3).
Qué cambió en el código
Cualquier dirección que NO empiece con "rush." ahora muestra el registro público en la raíz `/`, en vez del login de un negocio. `rush.artmmx.workers.dev` seguirá funcionando exactamente igual que hoy: login de The Rush en `/`, y los negocios que se van uniendo en `/t/<su-nombre>/`.
Paso 1: crea el segundo Worker (una sola vez)
Cloudflare → Workers & Pages → Create → Worker.
Nombre: `app` (o el que prefieras, mientras no empiece con "rush").
Despliega ese Worker vacío primero para que exista.
En ese Worker → Settings → Bindings, agrega:
D1 Database: el mismo `rush-pos-db` que ya usas.
R2 Bucket: el mismo `rush-fotos` que ya usas.
Usa los mismos nombres de variable (`DB` y `PHOTOS`) que en tu Worker "rush".
Paso 2: sube el código
Sube los mismos archivos de este zip (`server.js` y la carpeta `public/`) a este nuevo Worker "app", igual que lo haces con "rush". El archivo `wrangler-app.toml` es la referencia de esa configuración si usas la línea de comandos; si subes por el panel, solo usa el Paso 1.
Paso 3 (después, opcional): dominio propio
Cuando quieras una dirección de verdad "pelona" (ej. `artmmx.com`), compra el dominio, conéctalo en Cloudflare, y apunta su ruta raíz a este mismo Worker "app". Dímelo cuando llegue el momento y te ayudo con esa parte.
Prueba rápida
Abre `https://rush.artmmx.workers.dev/` → debe seguir siendo el login de The Rush, igual que siempre.
Abre `https://app.artmmx.workers.dev/` → debe mostrar el registro público, no un login.
Registra un negocio de prueba desde ahí y confirma que puedes entrar a `https://rush.artmmx.workers.dev/t/su-nombre/` con la cuenta que creaste.

---
v31.1 — La pieza que faltaba: `run_worker_first`
Fecha: 26 de septiembre de 2026
El problema real (ya resuelto)
Cuando una dirección coincide exacto con un archivo de `public/` (como `/` → `index.html`), Cloudflare lo entrega directo, sin pasar por tu código. Por eso `app.artmmx.workers.dev/` seguía mostrando el login, aunque `server.js` ya tenía la lógica correcta: nunca llegaba a ejecutarse.
La corrección
Se agregó esta línea al bloque `[assets]` de ambos `wrangler.toml` y `wrangler-app.toml`:
```toml
run_worker_first = true
```
Con esto, toda dirección pasa primero por `server.js`, que decide qué mostrar.
Esta carpeta viene limpia y completa
Todos los archivos, listos para reemplazar los que tienes en GitHub tal cual (mismo nombre, mismo lugar). No hace falta ninguna base de datos nueva ni SQL — solo reemplazar archivos.
Cómo subirla
En tu repo de GitHub, reemplaza cada archivo por el de esta carpeta (mismo nombre): `server.js`, `wrangler.toml`, `wrangler-app.toml`, `README.md`, `MAPA-LINEAS.md`, y todo dentro de `public/`.
La carpeta `sql/` la puedes dejar como está — no cambió.
Guarda (commit) — dispara el build en los dos Workers ("rush" y "app").
Espera 1-2 minutos y prueba:
`https://app.artmmx.workers.dev/` → debe salir el registro.
`https://rush.artmmx.workers.dev/` → debe seguir igual que siempre.
No hace falta correr nada en D1 para esta versión.

---
v32.0 — Panel adaptado a celular
Fecha: 27 de septiembre de 2026
Qué cambió
El panel admin (`index.html`) no tenía ningún ajuste para pantallas chicas — era el mismo diseño de escritorio, encogido. Ahora, en pantallas de hasta 760px:
El encabezado deja de "flotar" fijo (sticky) y el menú de navegación pasa a quedar pegado arriba en su lugar, sin traslaparse.
Las tarjetas pasan de varias columnas a una sola columna, más fáciles de leer y tocar.
Botones más grandes, con más espacio para el dedo.
Los campos de texto usan tamaño de letra 16px — así iOS ya no hace zoom solo al tocarlos.
Modales (tickets, avisos, anular cobro) ocupan casi toda la pantalla en vez de quedar chiquitos al centro.
Tablas y textos se ajustan para no desbordar la pantalla.
Respeta el "notch" de los celulares modernos (safe-area).
También se ajustó `registro.html` para que el título no se vea gigante en pantallas muy angostas.
No se tocó nada de: `/menu.html` (ya era responsivo desde antes), la lógica de negocio, ni la base de datos.
Prueba rápida
Abre el sistema desde tu celular (o achica la ventana del navegador en tu compu) y revisa Venta, Caja, Órdenes y Menú — todo debe verse en una columna, con botones grandes y sin que nada se corte a los lados.

---
v33.0 — Hub de enlaces (menú, redes, WiFi, reseñas en un solo QR)
Fecha: 27 de septiembre de 2026
La idea
Un QR o etiqueta NFC en la mesa/stand que abre una sola página con todo: el menú, promociones, reseñas de Google, redes sociales, WiFi y cualquier otro link que quieras — en vez de tener que poner varios códigos QR distintos.
Nueva página pública: `hub.html`
Con el mismo estilo verde+ámbar de tu carta. Muestra, en este orden:
🍽️ Ver menú y pedir (siempre)
🎁 Promociones (si configuras un link de imagen o PDF)
⭐ Tarjeta de lealtad
Reseñas de Google, Instagram, Facebook, WhatsApp (los que configures)
📶 WiFi, con botón para copiar la contraseña con un toque
Cualquier otro link que agregues (reservaciones, sitio web, etc.)
Si algo no está configurado, esa sección simplemente no aparece.
Cómo configurarlo
⚙️ Configuración → 🔗 Hub de enlaces:
Frase de bienvenida del hub
Link de reseñas de Google, Instagram, Facebook
Red y contraseña de WiFi
Link de promociones
"Otros enlaces": uno por línea, formato `Texto | https://...`
Botón para copiar el link del hub y verlo
Cada negocio (tenant) configura el suyo — no se mezcla entre negocios.
Para imprimir tu QR
Genera el QR del link del hub con cualquier generador (o el mismo truco que ya usa Lealtad: `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=TU_LINK`), y ponlo en tu mesa, stand o entrada.
D1
No tienes que correr SQL. El Worker agrega solo 7 configuraciones nuevas, vacías por defecto.

---
v33.1 — QR del hub, listo para imprimir
Fecha: 27 de septiembre de 2026
En Configuración → 🔗 Hub de enlaces, ahora aparece el código QR directo, sin tener que generarlo aparte:
🖨️ Imprimir QR — abre una hoja lista para imprimir, con el QR grande.
⬇️ Descargar imagen — para pegarlo en un diseño, un stand o una tarjeta impresa.
Usa el mismo generador gratuito que ya tenías en ⭐ Lealtad, sin cuentas ni configuración extra.

---
v34.0 — Menú reordenado, Canchas arreglado, pruebas automáticas
Fecha: 27 de septiembre de 2026
1. Menú reorganizado (más intuitivo)
Los 16 botones de navegación ahora van agrupados por cuándo los usas, con una línea divisoria entre grupos:
Operación (uso diario): Venta, Canchas, Mesas, Cocina, Barra, Órdenes, Mis entregas
Negocio: Caja, Lealtad, Inventario
Administración: Menú, Editar carta, Usuarios, Turnos, Mis restaurantes, Configuración
Antes estaban en el orden en que se fueron agregando con el tiempo — ya no.
2. 🎾 Canchas y Reservas — arreglado de raíz
Encontré que esta pantalla nunca tuvo backend: el panel pedía `/api/courts` y `/api/reservations`, pero esos endpoints no existían. Por eso se veía vacía, sin ningún error — el sistema fallaba en silencio.
Ya está completo:
Nueva tarjeta "🎾 Tus canchas" (solo admin) para agregar o quitar canchas con su precio por hora.
Las reservas ya se guardan de verdad, aisladas por negocio.
Si no tienes canchas creadas, un aviso te lo dice en vez de quedarse en blanco.
3. Aislamiento multi-negocio: 100% de los endpoints activos
Repasé todo el sistema buscando llamadas sin filtrar por negocio. Canchas/Reservas (recién creado) ya nació aislado. No quedó ningún endpoint activo sin su filtro de negocio.
4. Nueva carpeta `tests/`
Pruebas automáticas que corren en tu computadora (con Node, sin necesitar Cloudflare ni internet) y revisan: login, menú, órdenes y cobros, aislamiento entre negocios, lealtad, canchas y turnos. 16 de 16 pasan en esta versión.
```bash
cd tests && node regresion.mjs
```
Pídeme correrlas después de cualquier cambio futuro, antes de subirlo.
5. Índice dentro de `server.js`
Al principio del archivo hay ahora una lista de todas las secciones con su número de línea — útil incluso sin abrir el `MAPA-LINEAS.md` aparte.
Sobre dividir `server.js` en varios archivos
Esto lo dejé fuera a propósito. Es una reescritura de arquitectura (cómo se pasan `db`, `tenantId`, la sesión, etc. entre partes del código) que toca los ~55 endpoints del sistema. Hacerla junto con todo lo demás, sin poder probarla en un Cloudflare real antes de dártela, es un riesgo que no vale la pena correr sobre un sistema en producción. Si quieres, la trabajamos aparte, con más cuidado y por etapas.
D1
No tienes que correr SQL. El Worker agrega solo 2 tablas nuevas: `pos_courts` y `pos_reservations`.

---
v35.0 — Sellos de lealtad manuales, con motivo
Fecha: 27 de septiembre de 2026
Dónde
⭐ Lealtad → 🎟️ Sello manual (arriba de la lista de clientes), o el botón 🎟️ junto a cualquier cliente ya en la lista.
Cómo funciona
Escribe el WhatsApp del cliente (10 dígitos) — así se liga a su cuenta. Si ya tiene tarjeta, se le suma ahí; si no existe, se crea.
Si es cliente nuevo, puedes poner su nombre.
Escribe el motivo (obligatorio) — ej. "Cumpleaños", "Cortesía por una queja", "Promoción especial".
Elige cuántos sellos (1 a 10 de una vez).
Si con esos sellos llega a la meta, se le da la recompensa igual que con un sello normal.
Dónde se ve el motivo
En 🕒 Actividad reciente del panel de Lealtad: "🎟️ Carla — sello manual: Cumpleaños · por Antonio".
Los sellos manuales también cuentan en los KPIs de "Sellos hoy" y "Sellos históricos".
D1
No tienes que correr SQL. El Worker agrega solo 2 columnas a `pos_loyalty_events`: `reason` y `done_by`.

---
v36.0 — "Sellos" ahora son "estrellas" ⭐
Fecha: 27 de septiembre de 2026
El cambio que pediste
En todo el sistema (panel, tarjeta del cliente, carta, registro, hub): "sello" → "estrella", e íconos de 🎟️ y 🎾 → ⭐. Nombres internos de la base de datos y funciones no cambiaron — solo lo que se ve.
Bug que encontré de paso: la tarjeta decía "THE RUSH" a fuerza
La tarjeta digital (`tarjeta.html`) tenía escrito a mano "🎾 THE RUSH · CLUB · CAFÉ · COCINA". Como ahora la usan también otros negocios de la plataforma, un café que se llame "Cafe Luna" iba a ver "THE RUSH" en su propia tarjeta de lealtad. Ya lo corregí: toma el nombre real del negocio.
Prueba rápida
Abre la tarjeta de cualquier cliente (`/tarjeta.html?token=...`) y confirma que diga el nombre de tu negocio, con estrellas doradas en vez de balones.

---
v37.0 — El teléfono ya no es obligatorio en Venta
Fecha: 27 de septiembre de 2026
El problema que reportaste
El mesero tenía que pedir el WhatsApp del cliente siempre, aunque no quisiera dar sus datos — eso le quitaba confianza al cliente e incomodaba al mesero.
La solución
En 🛒 Venta, junto a los datos del cliente, hay una nueva casilla:
⭐ El cliente quiere la tarjeta de lealtad — apagada por default.
Si el mesero la deja apagada: el WhatsApp y el nombre son totalmente opcionales. El pedido se envía igual, sin pedir nada.
Si el mesero la activa (porque el cliente sí quiere): ahí sí se vuelve obligatorio el WhatsApp, porque es lo que liga la tarjeta.
Si el cliente no quiso al principio, se le puede invitar después
Si se envía el pedido sin la casilla activada, aparece un recuadro chico, no invasivo:
> ⭐ ¿Se anima a la tarjeta de lealtad? — con un campo de WhatsApp y un botón **📲 Enviar tarjeta**.
El mesero puede llenarlo si el cliente cambia de opinión, o tocar Omitir y seguir. No bloquea nada.
Bug que corregí de paso
Descubrí que las órdenes de Venta nunca habían sumado sellos de lealtad, aunque el mesero capturara el WhatsApp — el campo nunca se mandaba al servidor. También el mensaje de WhatsApp de la tarjeta decía "The Rush" fijo, sin importar qué negocio la usara. Los dos ya están corregidos.
D1
No hace falta nada nuevo — usa las mismas columnas que ya existían.

---
v38.0 — App instalable con notificaciones push (con sonido)
Fecha: 27 de septiembre de 2026
Qué es
Los mismos avisos que antes salían por WhatsApp ahora también llegan directo al celular como notificación, con sonido y vibración, aunque la app esté cerrada. Y a diferencia de WhatsApp, salen solos: nadie tiene que tocar "enviar".
Evento	Quién recibe la notificación
🎾 Nueva comanda (mesero)	Cocina (si hay platillos), Barra (si hay bebidas) y Admins
🌐 Pedido en línea (carta pública)	Cocina, Barra y Admins
🍳/☕ Alimentos o bebidas listos	Mesero que envió la orden + Admins
🍽️ Pedido entregado	Mesero + Admins
🧾 Cobro	Admins
Los avisos por WhatsApp siguen ahí como respaldo (por ejemplo para mandarle algo a un cliente).
⚠️ PASO OBLIGATORIO antes de que funcione: la llave privada
Las notificaciones se firman con una llave. La parte pública ya viene en `wrangler.toml` y `wrangler-app.toml`. La parte privada es un secreto y NO puede estar en GitHub (tu repositorio es público). Se agrega directo en Cloudflare, una vez por cada Worker (`rush` y `app`):
Cloudflare → tu Worker → Settings → Variables and Secrets → Add.
Tipo: Secret. Nombre exacto: `VAPID_PRIVATE_KEY`. Valor: la llave privada que te di en el chat.
Guarda y despliega.
Si te da algo de desconfianza haberla visto en el chat, genera una nueva: `cd tests && node generar-llaves-push.mjs`, y cambia las 3 públicas en los dos `.toml` + el secreto en los dos Workers (las 4 deben ser del mismo par).
Sin este paso, todo el sistema funciona normal; solo no llegan las notificaciones.
Cómo se activa en cada celular
Abre el sistema en el celular → ⚙️ Configuración → tarjeta 🔔 Notificaciones en este celular → Activar en este dispositivo → Permitir.
Toca 🔊 Mandarme una de prueba: debe sonar.
Cada persona lo activa en su celular, con su usuario (así sabe a quién avisarle).
Para que se sienta como una app:
Android (Chrome): menú ⋮ → Instalar app (o "Agregar a pantalla de inicio").
iPhone (Safari): botón Compartir → Agregar a pantalla de inicio, y abre la app desde ese ícono (Apple solo permite notificaciones así). Requiere iOS 16.4 o más nuevo.
Límites honestos
En iPhone las notificaciones pueden retrasarse o no sonar si el modo "No molestar" o "Concentración" está activo — es de Apple.
El sonido es el que el celular tenga para notificaciones. Esto no se puede personalizar desde una página web.
Si alguien cambia de celular o borra los datos del navegador, hay que volver a activarlas.
Se probó con un "servicio de notificaciones" simulado (el cifrado, la firma y quién recibe qué). La prueba real de que suena en tu celular la haces tú con el botón de prueba.
D1
No hace falta correr SQL. El Worker crea solo la tabla `pos_push_subs`.
Pruebas
`cd tests && node push.mjs` (13 pruebas: suscripción, quién recibe cada aviso, cifrado, limpieza de dispositivos caducados y que todo siga funcionando si no hay llaves).
