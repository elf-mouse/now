importScripts('workbox-sw.prod.v1.0.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "favicon.ico",
    "revision": "29e32bd79c18993464e8600b7e8fa5a4"
  },
  {
    "url": "index.html",
    "revision": "d065c2dd8b4d3bcc5d5ae9785a74d8ef"
  },
  {
    "url": "manifest.json",
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
    "revision": "5928c7e89b46a72e2bbf49d73a34435e"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
