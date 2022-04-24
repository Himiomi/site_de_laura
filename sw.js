self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      '/site_de_laura/',
      '/site_de_laura/index.html',
      '/site_de_laura/index.js',
      '/site_de_laura/style.css',
      '/site_de_laura/images/fox1.jpg',
      '/site_de_laura/images/fox2.jpg',
      '/site_de_laura/images/fox3.jpg',
      '/site_de_laura/images/fox4.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
