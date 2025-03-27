self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('zakat-cache').then(cache => {
            return cache.addAll([
                'index.html',
                'styles.css',
                'script.js',
                'manifest.json',
                'background.jpg'
            ]);
        })
    );
});
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
