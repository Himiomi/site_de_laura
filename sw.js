self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      'https://hikachhu.github.io/site_de_laura/',
      'https://hikachhu.github.io/site_de_laura/index.html',
      'https://hikachhu.github.io/site_de_laura/index.js',
      'https://hikachhu.github.io/site_de_laura/style.css',
      'https://hikachhu.github.io/site_de_laura/images/fox1.jpg',
      'https://hikachhu.github.io/site_de_laura/images/fox2.jpg',
      'https://hikachhu.github.io/site_de_laura/images/fox3.jpg',
      'https://hikachhu.github.io/site_de_laura/images/fox4.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
