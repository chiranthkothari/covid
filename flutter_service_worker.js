'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/AssetManifest.json": "58ef0f0ca70167dd9f5ce90d3e99eca8",
"/assets/assets/fonts/RobotoSlab-Regular.ttf": "1ec06eed11bbcb1ee510b8f3522adea8",
"/assets/FontManifest.json": "663d9727db7a3ba1fad9d3b05d17cbc8",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "8633c2030fc0875b8d7b533498ded797",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "f62b092026656290de567f6d6451bb46",
"/main.dart.js": "87c938c0719c47b104e1be8a65645d35",
"/manifest.json": "1d587aefeb6ca1670d9cca22f1258d9a"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
