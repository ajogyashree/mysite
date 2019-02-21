const version = "0.1.0";
const cacheName = `jsr-${version}`;
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll([
                    `https://www.ajogyashree.me/`,
                    `https://www.ajogyashree.me/index.html`,
                    `https://www.ajogyashree.me/static/css/main.0f4d3a1c.chunk.css`,
                    `https://www.ajogyashree.me/static/js/1.bb1298ab.chunk.js`,
                    `https://www.ajogyashree.me/static/js/main.492e4bfb.chunk.js`,
                    `https://www.ajogyashree.me/static/js/runtime~main.229c360f.js`
                ])
                .then(() => self.skipWaiting());
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.open(cacheName)
        .then(cache => cache.match(event.request, {
            ignoreSearch: true
        }))
        .then(response => {
            return response || fetch(event.request);
        })
    );
});
