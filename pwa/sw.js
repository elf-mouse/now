importScripts('workbox-sw.prod.js');

// Create Workbox service worker instance
const workboxSW = new self.WorkboxSW();

// Placeholder array which is populated automatically by workboxBuild.injectManifest()
workboxSW.precache([
  {
    "url": "/favicon.ico",
    "revision": "29e32bd79c18993464e8600b7e8fa5a4"
  },
  {
    "url": "/index.html",
    "revision": "e175c679f3416fb1de1e25e8134b1baa"
  },
  {
    "url": "/manifest.json",
    "revision": "255ab670f1a6254f63101e21f17d87e7"
  },
  {
    "url": "/now/pwa/css/main.css",
    "revision": "79136140738d2a36dd6ac1b762bf766b"
  },
  {
    "url": "/now/pwa/img/icons/icon-128x128.png",
    "revision": "1151213fcf0cb1779eaeb963200245d9"
  },
  {
    "url": "/now/pwa/img/icons/icon-144x144.png",
    "revision": "7d59720df6e6fa8695f09b9f216c4bb8"
  },
  {
    "url": "/now/pwa/img/icons/icon-152x152.png",
    "revision": "dcac42b628cc9bd84e61095b5a134cd8"
  },
  {
    "url": "/now/pwa/img/icons/icon-192x192.png",
    "revision": "0650ea22d2eb9a6a132c050e60a45384"
  },
  {
    "url": "/now/pwa/img/icons/icon-384x384.png",
    "revision": "7c84a974f1ca4ad57006718fa11a7e0d"
  },
  {
    "url": "/now/pwa/img/icons/icon-512x512.png",
    "revision": "7c84a974f1ca4ad57006718fa11a7e0d"
  },
  {
    "url": "/now/pwa/img/icons/icon-72x72.png",
    "revision": "ac818cf626e46b17ae0cbd7dff966198"
  },
  {
    "url": "/now/pwa/img/icons/icon-96x96.png",
    "revision": "f321ccabb0c3df38bc3b8de1fc62dd1b"
  },
  {
    "url": "/now/pwa/img/logo.svg",
    "revision": "005d8bd132992d6c6530b0e968ec5f70"
  },
  {
    "url": "/now/pwa/js/main.js",
    "revision": "31f5f7bacc4be369b36085a0c46e5060"
  },
  {
    "url": "/workbox-sw.prod.js",
    "revision": "3fbc93cd82283d7c3a2cb4dcaf36be91"
  }
]);

// Receive message
self.addEventListener('message', function(event) {
  console.log(event.data);
});

// Send message
self.clients.matchAll().then(function(clients) {
  clients.forEach(function(client) {
    client.postMessage('Service worker attached.');
  })
});
