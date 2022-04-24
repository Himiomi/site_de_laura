self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      '/site_de_laura/a2hs/',
      '/site_de_laura/a2hs/index.html',
      '/site_de_laura/a2hs/index.js',
      '/site_de_laura/a2hs/style.css',
      '/site_de_laura/a2hs/images/fox1.jpg',
      '/site_de_laura/a2hs/images/fox2.jpg',
      '/site_de_laura/a2hs/images/fox3.jpg',
      '/site_de_laura/a2hs/images/fox4.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
