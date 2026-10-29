const CACHE_NAME = 'dryfire-v1';
const ASSETS = [
  './',
  './index.html',
  './dokladna.html',
  './szybka.html',
  './pneumat.html',
  './manifest.json',
  './css/style.css',
  './obrazki/pistolet-192.png',
  './obrazki/pistolet-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});