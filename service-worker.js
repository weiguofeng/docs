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
    "revision": "8829f5aeed7953314bbff93c48ad0d64"
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
    "url": "assets/js/app.33a4969f.js",
    "revision": "12586bd138ca889e5f76e72b30afe028"
  },
  {
    "url": "baodian/high/index.html",
    "revision": "a74429371a3c8e508df40e73496e69e8"
  },
  {
    "url": "baodian/high/notes/high.html",
    "revision": "7e4756597cd7a3f2b9370013f557e4c5"
  },
  {
    "url": "baodian/zero/index.html",
    "revision": "9e301d4a978c127799832cbfc57d3d5e"
  },
  {
    "url": "baodian/zero/notes/02 String、Long 源码解析和面试题.html",
    "revision": "eda185e1a272feae0a52e9b54f4fb313"
  },
  {
    "url": "baodian/zero/notes/03 Java 常用关键字理解.html",
    "revision": "b8f516c47aabf18dff94d2e9f802e841"
  },
  {
    "url": "baodian/zero/notes/04 Arrays、Collections、Objects 常用方法源码解析.html",
    "revision": "6f3412c9fc6c35bb307b2fc799f7931b"
  },
  {
    "url": "baodian/zero/notes/05 ArrayList 源码解析和设计思路.html",
    "revision": "8e9726abbc58c6600e9be5d8af97352f"
  },
  {
    "url": "baodian/zero/notes/06 LinkedList 源码解析.html",
    "revision": "0fce5d32f2f2d8815e79a94c72d43dc7"
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
    "revision": "4df1240b7563acf06abaa07325d1d748"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "808d1fa2769ecbf6ced5d7f3702fa4ac"
  },
  {
    "url": "categories/frontEnd/index.html",
    "revision": "ddd4c4a6821ab41635525538cfb8d1c8"
  },
  {
    "url": "categories/index.html",
    "revision": "d64fbbf614f171631da7516e94188641"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "399b3c47e91ba87a724346db655ec75c"
  },
  {
    "url": "categories/js/index.html",
    "revision": "835ab29264915754f5c0df4d4e8db8bb"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "ba3b7480a989954f35de654f50d1d6c4"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "ccdb62922e8fb00f9e92bc011b31996e"
  },
  {
    "url": "categories/wechat/index.html",
    "revision": "6a6a36ce356c557bcc06c28dbff930fe"
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
    "revision": "f641e0a3e4055f8911f6ebfa6512b466"
  },
  {
    "url": "guide/notes/css.html",
    "revision": "d5cff48954f4d6600200e21e7c9dcb5f"
  },
  {
    "url": "guide/notes/ele.html",
    "revision": "73770796dbbca7dda83d53b39819a77b"
  },
  {
    "url": "guide/notes/js1.html",
    "revision": "79f6cd3315b3e2afb8aa8a3b0df66b47"
  },
  {
    "url": "guide/notes/js2.html",
    "revision": "496eda492b7e830b486af6b72cc0907a"
  },
  {
    "url": "guide/notes/linux.html",
    "revision": "b931592a9bdb1f9ec9aaef4bfaae12df"
  },
  {
    "url": "guide/notes/vue.html",
    "revision": "d50018d17e0c076591613299272874a1"
  },
  {
    "url": "guide/notes/微信小程序.html",
    "revision": "182ec1f98d353876e18bfc8f334eec7f"
  },
  {
    "url": "index.html",
    "revision": "78c65edb1c481d32441e3dc31b2eaea4"
  },
  {
    "url": "java/index.html",
    "revision": "4525023bd6fed0915a58e39140d6a8c4"
  },
  {
    "url": "java/notes/filter.html",
    "revision": "4e7845ac809843df362c22658bcd251a"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "tag/css/index.html",
    "revision": "9dd5268b6897fa9de7e4b6dd70aed89b"
  },
  {
    "url": "tag/elementUI/index.html",
    "revision": "dd868594a3a3a9ec907fef50f1d644ee"
  },
  {
    "url": "tag/index.html",
    "revision": "c0a52e4f41561f8c8863d68f93cc9880"
  },
  {
    "url": "tag/java/index.html",
    "revision": "4bf7c11fedcc1d11fd2b447af61b742b"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "05428a0bb1fafec1127762a655768639"
  },
  {
    "url": "tag/js/index.html",
    "revision": "d6519e7ea6364f6c26f396c435e627ff"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "f0a43d300245f762d1eca00a03001e65"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "26f8cf1798f719d1a98a5972b6425915"
  },
  {
    "url": "tag/wechat/index.html",
    "revision": "fb4a8b3bcd5c609d538016d482fbd850"
  },
  {
    "url": "timeline/index.html",
    "revision": "562035de24631bacf395664b6a26a6d6"
  },
  {
    "url": "tools/vuePress遇到的问题.html",
    "revision": "6d76d52c87df5af52503c0e36a22e03e"
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
