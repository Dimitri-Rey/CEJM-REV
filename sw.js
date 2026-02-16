const CACHE_NAME = 'cejm-rev-v3';
const ASSETS = [
    '/CEJM-REV/',
    '/CEJM-REV/index.html',
    '/CEJM-REV/css/style.css',
    '/CEJM-REV/js/app.js',
    '/CEJM-REV/js/data-ch1.js',
    '/CEJM-REV/js/data-ch2.js',
    '/CEJM-REV/js/data-ch3.js',
    '/CEJM-REV/js/data-ch4.js',
    '/CEJM-REV/js/data-ch5.js',
    '/CEJM-REV/js/data-theme1.js',
    '/CEJM-REV/js/data-ch6.js',
    '/CEJM-REV/js/data-ch7.js',
    '/CEJM-REV/js/data-ch8.js',
    '/CEJM-REV/js/data-theme2.js',
    '/CEJM-REV/js/data-ch9.js',
    '/CEJM-REV/js/data-ch10.js',
    '/CEJM-REV/js/data-ch11.js',
    '/CEJM-REV/js/data-ch12.js',
    '/CEJM-REV/js/data-ch13.js',
    '/CEJM-REV/js/data-ch14.js',
    '/CEJM-REV/js/data-theme3.js',
    '/CEJM-REV/icons/icon-192.png',
    '/CEJM-REV/icons/icon-512.png'
];

// Install - cache all assets
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))
            .then(() => self.skipWaiting())
    );
});

// Activate - clean old caches
self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        ).then(() => self.clients.claim())
    );
});

// Fetch - cache first, then network
self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(cached => cached || fetch(e.request))
    );
});
