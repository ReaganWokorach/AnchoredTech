const CACHE = 'anchoredtech-cache-v4';

const PRECACHE = [
  '/', '/index.html', '/about.html', '/services.html',
  '/training.html', '/contact.html', '/faq.html', '/blog.html',
  '/blog-computer-skills.html', '/blog-data-annotation.html', '/blog-start-from-zero.html',
  '/style.css?v=2', '/script.js?v=2', '/cohort.json',
  '/logo-color.png?v=4', '/logo-white.png?v=4', '/favicon.svg?v=4', '/favicon-32.png?v=4',
  '/icon-192.png?v=4', '/icon-512.png?v=4', '/apple-touch-icon.png?v=4'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// NETWORK FIRST strategy — always try the live network,
// fall back to cache only when offline.
// This means visitors ALWAYS get the latest version when they have internet.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  // Never cache form submissions or the Web3Forms API
  if (e.request.url.includes('web3forms') || e.request.url.includes('form')) return;

  e.respondWith(
    fetch(e.request)
      .then(res => {
        // If we got a good response, update the cache silently
        if (res && res.status === 200 && res.type === 'basic') {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      })
      .catch(() => {
        // Only use cache when offline
        return caches.match(e.request)
          .then(cached => cached || caches.match('/index.html'));
      })
  );
});
