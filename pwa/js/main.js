!function(e){function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var n={};r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="https://elf-mouse.github.io/",r(r.s=0)}([function(e,r,n){"use strict";var t=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(t);console.log("Hello BalmJS - http://balmjs.com/"),(0,o.default)()},function(e,r,n){"use strict";function t(){"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("./service-worker.js").then(function(e){e.onupdatefound=function(){var r=e.installing;r.onstatechange=function(){"installed"===r.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})})}function o(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}Object.defineProperty(r,"__esModule",{value:!0}),r.default=t,r.unregister=o}]);