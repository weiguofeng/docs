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
    "revision": "2e40f2ceadd5573b4bce247fc8e8ebe6"
  },
  {
    "url": "assets/css/0.styles.1ee5bdb0.css",
    "revision": "5608355b690953450f10018a92d3ed30"
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
    "url": "assets/js/app.3502993a.js",
    "revision": "b62905562f01b284968e74ae657e4662"
  },
  {
    "url": "baodian/high/index.html",
    "revision": "be5092a12fefcda402293e7026d82c02"
  },
  {
    "url": "baodian/high/notes/high.html",
    "revision": "807165139e3ce605bfb03114e98c12c8"
  },
  {
    "url": "baodian/zero/index.html",
    "revision": "79ba025cf07b3c3e8fe2be6380ede819"
  },
  {
    "url": "baodian/zero/notes/02 String、Long 源码解析和面试题.html",
    "revision": "9611f6db5a2f97d5a5ed4b3b71f29a4a"
  },
  {
    "url": "baodian/zero/notes/03 Java 常用关键字理解.html",
    "revision": "dcc4f50221b826bdbe159beab4c90dbd"
  },
  {
    "url": "baodian/zero/notes/04 Arrays、Collections、Objects 常用方法源码解析.html",
    "revision": "cd60daab06de013d80460545cbcf0744"
  },
  {
    "url": "baodian/zero/notes/05 ArrayList 源码解析和设计思路.html",
    "revision": "d9b407bb937968eba18090368aadca01"
  },
  {
    "url": "baodian/zero/notes/06 LinkedList 源码解析.html",
    "revision": "ff7ff92ddcdcb923664532ec3e7a28f2"
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
    "revision": "6b449291a495396be6aade66173e652c"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "b00763609e4940409c11296abdd37ccf"
  },
  {
    "url": "categories/frontEnd/index.html",
    "revision": "73dbd7cb6c27842d5a60f0544dd06697"
  },
  {
    "url": "categories/index.html",
    "revision": "83845693b56a0c6ad9449a4f224e27a0"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "cc804bb35279248da4d393e61285a2c9"
  },
  {
    "url": "categories/js/index.html",
    "revision": "80f37d45ab4f9b9f958740ad64e3f9a3"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "42f69eb10f5cbe1dfabeb575c95a9d97"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "d40d25a82cd199c60a998c9bf20c0c25"
  },
  {
    "url": "categories/wechat/index.html",
    "revision": "ce37cd36b76ff3889c683da918d4eda7"
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
    "revision": "fe96b247d1d9e1eb0a47c7cf29d129f9"
  },
  {
    "url": "guide/notes/css.html",
    "revision": "848fa658aec241f5bdad5e5217dbeab5"
  },
  {
    "url": "guide/notes/ele.html",
    "revision": "bc742e2ce18332590e1896f507b2abb1"
  },
  {
    "url": "guide/notes/js1.html",
    "revision": "3b92da562cd33619634b3ffcbe28c3f4"
  },
  {
    "url": "guide/notes/js2.html",
    "revision": "b88f0011255029a45606712c8ebcefaa"
  },
  {
    "url": "guide/notes/linux.html",
    "revision": "228e9085b85794989bc8eff3fc816f89"
  },
  {
    "url": "guide/notes/vue.html",
    "revision": "d9e5c155ede174141e4dfde83235dc8b"
  },
  {
    "url": "guide/notes/微信小程序.html",
    "revision": "fffee8e7000404df03135c0b01ff5c68"
  },
  {
    "url": "index.html",
    "revision": "fd200e6c624942e4d1e140ab373350fb"
  },
  {
    "url": "java/index.html",
    "revision": "720c7bba0463400bfef223dc40f71fa9"
  },
  {
    "url": "java/notes/filter.html",
    "revision": "b39147b316537af19864a6c78a9b3479"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "tag/css/index.html",
    "revision": "fc746f83c5787596cdb6bf5d5f20f456"
  },
  {
    "url": "tag/elementUI/index.html",
    "revision": "dbdeeb6e12f7950e9095f6bf19f2dae1"
  },
  {
    "url": "tag/index.html",
    "revision": "aa55f451ddd4df624d38db782f887acc"
  },
  {
    "url": "tag/java/index.html",
    "revision": "560ddeae28796197e0589d73774fa8ea"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "7f9c82b043cd29e25c6d72ea84711218"
  },
  {
    "url": "tag/js/index.html",
    "revision": "19961d71b7c77c640db837fa045fabac"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "554a190bb99443fbbbd9c81570f3eecd"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "e5ed2a7861950bb980d35ea47878917f"
  },
  {
    "url": "tag/wechat/index.html",
    "revision": "367ea34ae6bc816a764518845663bcac"
  },
  {
    "url": "timeline/index.html",
    "revision": "79a1d0dae8ff991c79d046a6b75927fa"
  },
  {
    "url": "tools/vuePress遇到的问题.html",
    "revision": "5ff3bd7a99608d6d74509bf060e6d48c"
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
