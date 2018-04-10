importScripts('workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.core.setCacheNameDetails({
  prefix: 'my-app',
  suffix: 'v1'
});

workbox.precaching.precacheAndRoute([
  {
    "url": "css/main.css",
    "revision": "2d5a3f574504ecfa9311ebffb34d3e29"
  },
  {
    "url": "img/icons/icon-128x128.png",
    "revision": "f09c7e1b7e6b67217fbdbdeefa502ef4"
  },
  {
    "url": "img/icons/icon-144x144.png",
    "revision": "d78676253e313534aa21661c5c5e29e5"
  },
  {
    "url": "img/icons/icon-152x152.png",
    "revision": "94cadb1dc1a9d05e7dc0a64cbfe14e0b"
  },
  {
    "url": "img/icons/icon-192x192.png",
    "revision": "3a8764970e2d9f1c13340218c53c26b9"
  },
  {
    "url": "img/icons/icon-384x384.png",
    "revision": "c8495699e3b8d02b89b271e30bd85f0e"
  },
  {
    "url": "img/icons/icon-512x512.png",
    "revision": "cbdbb679139048e03ac977758a5c9f20"
  },
  {
    "url": "img/icons/icon-72x72.png",
    "revision": "b75809917482a05197e179f1d82dd4d5"
  },
  {
    "url": "img/icons/icon-96x96.png",
    "revision": "f4df1a04b681b720a77d90749524d686"
  },
  {
    "url": "index.html",
    "revision": "9ff64ab68f6adaaadcc1673beccdc10e"
  },
  {
    "url": "js/main.js",
    "revision": "4e153c465bdd0f0ea7be721330d40467"
  },
  {
    "url": "workbox-sw.js",
    "revision": "060adeb4aef35c5028563db0c51afa34"
  }
]);

workbox.routing.registerRoute(
  /.*\.(?:png|jpg|jpeg|svg|gif)/g,
  new workbox.strategies.CacheFirst({
    cacheName: 'my-image-cache'
  })
);

// Receive message
self.addEventListener('message', function(event) {
  console.log(event.data);
  event.ports[0].postMessage(`SW Says 'Hello back!'`);
});
