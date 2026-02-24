const CACHE_NAME = 'sio-rev-v1';
const ASSETS = [
    '/CEJM-REV/',
    '/CEJM-REV/index.html',
    '/CEJM-REV/css/style.css',
    '/CEJM-REV/js/app.js',
    // CEJM
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
    // Maths
    '/CEJM-REV/js/data-maths-m1.js',
    '/CEJM-REV/js/data-maths-m2.js',
    '/CEJM-REV/js/data-maths-m3.js',
    '/CEJM-REV/js/data-maths-m4.js',
    '/CEJM-REV/js/data-maths-m5.js',
    '/CEJM-REV/js/data-maths-m6.js',
    // Français
    '/CEJM-REV/js/data-francais-f1.js',
    '/CEJM-REV/js/data-francais-f2.js',
    // Anglais
    '/CEJM-REV/js/data-anglais-a1.js',
    '/CEJM-REV/js/data-anglais-a2.js',
    // Icons
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
