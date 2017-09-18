var staticCacheName = 'marvel-v3'
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        '/',
        '/assets/marvel.png',
        'index.html',
        'https://fonts.gstatic.com/s/roboto/v15/2UX7WLTfW3W8TclTUvlFyQ.woff',
        'https://fonts.gstatic.com/s/roboto/v15/d-6IYplOFocCacKzxwXSOD8E0i7KZn-EPnyo3HZu7kw.woff'
      ]);
    })
  );
});
 

self.addEventListener('activate', event => {
   event.waitUntil(
      caches.keys().then( cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => {
          return cacheName.startsWith('marvel-') && cacheName != staticCacheName;
        }).map(cacheName => {
          return caches.delete(cacheName);
        })
      );
    })
  )
});


  
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    }).catch(function() {
      // If both fail, show a generic fallback:
      return caches.match('/offline.html');
    })
  );
});

  self.addEventListener('message', (event) => {
    if (event.data.action === 'skipWaiting') {
      self.skipWaiting();
    }
  });

 