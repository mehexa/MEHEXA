// No active service worker for this site.
// This file exists to (a) return 200 instead of 404 for cached browser requests
// and (b) unregister any stale service worker that was previously installed
// on localhost from a different project.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => {
  event.waitUntil(
    self.registration.unregister().then(() =>
      self.clients.matchAll().then((clients) => {
        clients.forEach((client) => client.navigate(client.url));
      })
    )
  );
});
