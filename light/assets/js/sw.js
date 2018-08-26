const dataCacheName = 'demoData-v1'
const cacheName = 'demoPWA-final-1'
const filesToCache = [
  '/',
  '/pwa.html',
  '/assets/js/app.js',
  '/assets/css/style.css'
]

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install')
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell')
      return cache.addAll(filesToCache)
    })
  )
})

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate')
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache', key)
          return caches.delete(key)
        }
      }))
    })
  )
  return self.clients.claim()
})


