self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      '/pwa-examples/',
      '/pwa-examples/index.html',
      '/pwa-examples/index.js',
      '/pwa-examples/style.css',
      '/pwa-examples/images/fox1.jpg',
      '/pwa-examples/images/fox2.jpg',
      '/pwa-examples/images/fox3.jpg',
      '/pwa-examples/images/fox4.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
