importScripts('workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.precacheAndRoute([
  {
    "url": "css/main.css",
    "revision": "2d5a3f574504ecfa9311ebffb34d3e29"
  },
  {
    "url": "index.html",
    "revision": "9ff64ab68f6adaaadcc1673beccdc10e"
  },
  {
    "url": "js/main.js",
    "revision": "091aa8ec24e9a855101693d5576cf89c"
  },
  {
    "url": "workbox-sw.js",
    "revision": "060adeb4aef35c5028563db0c51afa34"
  }
]);

// Cache Google Fonts
workbox.routing.registerRoute(
  new RegExp('^https://fonts.(?:googleapis|gstatic).com/(.*)'),
  workbox.strategies.cacheFirst()
);

// Cache JavaScript and CSS
workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  workbox.strategies.staleWhileRevalidate()
);

// Cache Images
workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.cacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
      })
    ]
  })
);
