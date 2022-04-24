self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      'https://hikachhu.github.io/site_de_laura/a2hs/',
      'https://hikachhu.github.io/site_de_laura/a2hs/index.html',
      'https://hikachhu.github.io/site_de_laura/a2hs/index.js',
      'https://hikachhu.github.io/site_de_laura/a2hs/style.css',
      'https://hikachhu.github.io/site_de_laura/a2hs/images/fox1.jpg',
      'https://hikachhu.github.io/site_de_laura/a2hs/images/fox2.jpg',
      'https://hikachhu.github.io/site_de_laura/a2hs/images/fox3.jpg',
      'https://hikachhu.github.io/site_de_laura/a2hs/images/fox4.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
