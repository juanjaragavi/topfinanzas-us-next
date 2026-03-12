// Service worker kill file - unregisters old WordPress service worker
// This ensures browsers stop serving stale cached content from the previous site
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", () => {
  self.clients.matchAll({ type: "window" }).then((clients) => {
    clients.forEach((client) => client.navigate(client.url));
  });
  self.registration.unregister();
});
