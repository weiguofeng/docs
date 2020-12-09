/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1.jpg",
    "revision": "cb4d1ab0531d3e777419a247e9b39784"
  },
  {
    "url": "404.html",
    "revision": "54cf3e064d2687808b708d2ea395f42d"
  },
  {
    "url": "assets/css/0.styles.6f4651b2.css",
    "revision": "2ebb8d7cd73a801ae6873f04c247534e"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/js/1.895e6523.js",
    "revision": "a01f171184872879d78e0516ede700d2"
  },
  {
    "url": "assets/js/10.f75dacd8.js",
    "revision": "257c28bfe5c085aef00c23e1b4daa789"
  },
  {
    "url": "assets/js/11.85b49775.js",
    "revision": "f990e0814160b9b4958f81f9219a4dd9"
  },
  {
    "url": "assets/js/12.d2e51996.js",
    "revision": "508b5a5d56adfbb06ddfb1d243529833"
  },
  {
    "url": "assets/js/13.44da5fdd.js",
    "revision": "a55c6e5d4c9ed73d3dd28ddf6ab9b152"
  },
  {
    "url": "assets/js/14.7ef7232f.js",
    "revision": "6b3bc350ee4a175df81ac0d057263dc8"
  },
  {
    "url": "assets/js/15.29a9024f.js",
    "revision": "d2de59c4333be421598300bfd07c7404"
  },
  {
    "url": "assets/js/16.8dcda9a1.js",
    "revision": "40beb213312e113720ff6a59caeccb15"
  },
  {
    "url": "assets/js/17.b7e6c51c.js",
    "revision": "2a48502069a63eec36d87f354326319e"
  },
  {
    "url": "assets/js/18.a72fa51f.js",
    "revision": "f9c5387d610cca05d83e6caf55c2c319"
  },
  {
    "url": "assets/js/19.82a418f7.js",
    "revision": "49294700c59eee9e87b6afc29d578d9a"
  },
  {
    "url": "assets/js/20.c166f1c8.js",
    "revision": "178ca307d379d33ffc65c48415cc24be"
  },
  {
    "url": "assets/js/21.cdead59a.js",
    "revision": "adcd567e26fa804b232f403d702eba21"
  },
  {
    "url": "assets/js/22.fc49842b.js",
    "revision": "ae347a9b6c5db2e0098d4576ea099816"
  },
  {
    "url": "assets/js/23.8ca6b283.js",
    "revision": "c9981c4df8cea541e4efce7b14c6bc91"
  },
  {
    "url": "assets/js/24.b1897949.js",
    "revision": "81efa6d4f54a86e521e03b667b46e79f"
  },
  {
    "url": "assets/js/25.3842e1a6.js",
    "revision": "2413894e95dee59d248829c4beb11896"
  },
  {
    "url": "assets/js/26.2e2f6fd6.js",
    "revision": "48fc3a4b336e1ede2e70887f88a0c54d"
  },
  {
    "url": "assets/js/27.189bfbe1.js",
    "revision": "fbd54537c08e34edd23881085a93c938"
  },
  {
    "url": "assets/js/28.db65c95e.js",
    "revision": "04534e6958f9e254887b2b51389e7af2"
  },
  {
    "url": "assets/js/29.a5a678e5.js",
    "revision": "82201766401c780b6d415e79fe5f9efb"
  },
  {
    "url": "assets/js/3.99993ee0.js",
    "revision": "5ec79ccd6f00ae1484a0bd24a91ce43d"
  },
  {
    "url": "assets/js/30.7642a7fe.js",
    "revision": "3b291303acfbe6209c11ff6e349cf84a"
  },
  {
    "url": "assets/js/31.0b9cd4e6.js",
    "revision": "714df1976656ee6f49a4a72b0d57687b"
  },
  {
    "url": "assets/js/32.38d324de.js",
    "revision": "19c95dec9d773429d22d330e65d78439"
  },
  {
    "url": "assets/js/33.679ea49a.js",
    "revision": "89c2b55b4e340205262f0435a7624032"
  },
  {
    "url": "assets/js/4.1104b66d.js",
    "revision": "bb96dff24352b99831fd077a4e137338"
  },
  {
    "url": "assets/js/5.04d166a5.js",
    "revision": "12e7105c9973a635c89e9fc80544a4a2"
  },
  {
    "url": "assets/js/6.6f336777.js",
    "revision": "ff8bd3e9c9b82b94a38894cfe94c1b5b"
  },
  {
    "url": "assets/js/7.381fc17d.js",
    "revision": "912fee287d351400e3837f6f7d011a38"
  },
  {
    "url": "assets/js/8.f8e65f38.js",
    "revision": "2d035028c5ee3123e9c842764e5fda81"
  },
  {
    "url": "assets/js/9.adccdb45.js",
    "revision": "bb28cf17c1defb8093029d5de856915b"
  },
  {
    "url": "assets/js/app.89fcfade.js",
    "revision": "721f61ff530a9734d92757ae371a484b"
  },
  {
    "url": "baodian/high/index.html",
    "revision": "e18ea54b2905c71147aec4cf12fc1f36"
  },
  {
    "url": "baodian/high/notes/high.html",
    "revision": "8086a28fb41d8ff79ca25d50b5dae995"
  },
  {
    "url": "baodian/zero/index.html",
    "revision": "ddbb036bc9b58e1e03460d3cd208e9cd"
  },
  {
    "url": "baodian/zero/notes/02 String、Long 源码解析和面试题.html",
    "revision": "1af6fa847d111279bb82cf031236821e"
  },
  {
    "url": "baodian/zero/notes/03 Java 常用关键字理解.html",
    "revision": "93b50a97b9f45ebd6d150247599d622c"
  },
  {
    "url": "baodian/zero/notes/04 Arrays、Collections、Objects 常用方法源码解析.html",
    "revision": "3721116c3e10f8f1c7ab766e68ec07bb"
  },
  {
    "url": "baodian/zero/notes/05 ArrayList 源码解析和设计思路.html",
    "revision": "37043454804da79e8a0b337df99b6c3a"
  },
  {
    "url": "baodian/zero/notes/06 LinkedList 源码解析.html",
    "revision": "461210e6e13d038c0d9fa28acb5830b7"
  },
  {
    "url": "beijing1.png",
    "revision": "c767f5d7b4cd281ee36f68d73a536199"
  },
  {
    "url": "beijing2.png",
    "revision": "c767f5d7b4cd281ee36f68d73a536199"
  },
  {
    "url": "beijing3.svg",
    "revision": "df96542da931d8419be581addfa4a87d"
  },
  {
    "url": "bg.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "bgm/1.jpg",
    "revision": "cb4d1ab0531d3e777419a247e9b39784"
  },
  {
    "url": "categories/backEnd/index.html",
    "revision": "7beb779492285039cf76f0bcdacdaaa1"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "5a27e54993a128225cbae806e055a505"
  },
  {
    "url": "categories/frontEnd/index.html",
    "revision": "0947b109b9873b22c655058ff7290d21"
  },
  {
    "url": "categories/index.html",
    "revision": "bb97dc1c2b63e22308ca07d5d0ca4fbc"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "833557c3a732d6c19687b82b7cab69d2"
  },
  {
    "url": "categories/js/index.html",
    "revision": "565a9e1bd3c7eaadf075109e81c4ef3e"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "c9265eb6767b9be9e55b0af334c36a35"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "b6e0d18696084be1baa0cadedd1ed5f8"
  },
  {
    "url": "categories/wechat/index.html",
    "revision": "c0efc0397bead062cd432bd8b4444f02"
  },
  {
    "url": "css/style.css",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "fenggelogo.jpg",
    "revision": "43bdaa30867ff0461973785c5b6308bd"
  },
  {
    "url": "guide/index.html",
    "revision": "334405dec86a81daccbf8551403ff93e"
  },
  {
    "url": "guide/notes/css.html",
    "revision": "48e6ab8f6e49e2b4085d7202ed93ad0c"
  },
  {
    "url": "guide/notes/ele.html",
    "revision": "4760ea040cc3a4ba7236a44e1b4a4d0e"
  },
  {
    "url": "guide/notes/js1.html",
    "revision": "a0eb58f25e87fe3237d90d77986b07e9"
  },
  {
    "url": "guide/notes/js2.html",
    "revision": "9fb8f23997cc6ae8e277102684c26897"
  },
  {
    "url": "guide/notes/linux.html",
    "revision": "14e2d083e304e98e3742e3a1dae587eb"
  },
  {
    "url": "guide/notes/vue.html",
    "revision": "f937ab3a922196159858703cbf9b6b5d"
  },
  {
    "url": "guide/notes/微信小程序.html",
    "revision": "6fd12952372cebb123b3fff666e16df6"
  },
  {
    "url": "index.html",
    "revision": "4c065848a4f5c15ab13165b8953afd1d"
  },
  {
    "url": "java/index.html",
    "revision": "06edd5e9422a103a9348688409ef959e"
  },
  {
    "url": "java/notes/filter.html",
    "revision": "e72bf4675b30c56fad5c19fa20462786"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "tag/css/index.html",
    "revision": "134f5fcb525b1bce1f06998ae3a94803"
  },
  {
    "url": "tag/elementUI/index.html",
    "revision": "6a45d6c98bbf57be1fbb7395d072c4c6"
  },
  {
    "url": "tag/index.html",
    "revision": "87f77f8e03f5927bdc6dffccd410812d"
  },
  {
    "url": "tag/java/index.html",
    "revision": "a59caa3985af827e00bac67704b4f50d"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "be79a858433b15e0bcb24b0fe4af0c2f"
  },
  {
    "url": "tag/js/index.html",
    "revision": "f8a29cc844fe6e06e4593a5ab659c4c2"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "80785ecf372b5dcefea009c83836bc14"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "1df0fd32a744194fd664a5f28781b4fa"
  },
  {
    "url": "tag/wechat/index.html",
    "revision": "65a5b046bd536fc405c2857662305f82"
  },
  {
    "url": "timeline/index.html",
    "revision": "6770f6e0a8975e8ec7582ff2c764f7bb"
  },
  {
    "url": "tools/vuePress遇到的问题.html",
    "revision": "9939934a41cc0f474104016cd250170d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
