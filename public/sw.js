// Service worker: recibe las notificaciones push aunque la app esté cerrada y las muestra con sonido.
self.addEventListener("install", (e) => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));

self.addEventListener("push", (event) => {
  let data = {};
  try { data = event.data ? event.data.json() : {}; } catch (e) { data = { title: "Aviso", body: event.data ? event.data.text() : "" }; }
  const title = data.title || "Aviso";
  event.waitUntil(self.registration.showNotification(title, {
    body: data.body || "",
    icon: "icon-192.png",
    badge: "icon-192.png",
    tag: data.tag || undefined,      // mismo tag = reemplaza en vez de apilar
    renotify: !!data.tag,            // y vuelve a sonar aunque reemplace a otra
    vibrate: [200, 100, 200, 100, 300],
    requireInteraction: true,        // se queda visible hasta que la toquen
    silent: false,                   // el sonido lo pone el sistema del celular
    data: { url: data.url || "./index.html" },
  }));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil((async () => {
    const all = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    for (const c of all) { if ("focus" in c) return c.focus(); }
    return self.clients.openWindow(event.notification.data?.url || "./index.html");
  })());
});
