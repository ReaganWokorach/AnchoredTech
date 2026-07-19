const CACHE = 'hat-cache-v3';

const PRECACHE = [
  '/', '/index.html', '/about.html', '/services.html',
  '/training.html', '/contact.html', '/faq.html', '/blog.html',
  '/blog-computer-skills.html', '/blog-data-annotation.html', '/blog-start-from-zero.html',
  '/style.css', '/script.js', '/cohort.json',
  '/hatLogoBlack.png', '/hatLogoWhite.png', '/favicon.svg'
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
