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
    "revision": "ef758780b187b25f3e6775ae7593c40d"
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
    "url": "assets/js/27.4a938944.js",
    "revision": "ac1bb9127f030474adb8ea392be81f0e"
  },
  {
    "url": "assets/js/28.16c86d01.js",
    "revision": "165c2ecf235c00124914a8b3ac33acc6"
  },
  {
    "url": "assets/js/29.5ddd3e76.js",
    "revision": "1dd1353f1bd13c6b67e682d4592e6342"
  },
  {
    "url": "assets/js/3.99993ee0.js",
    "revision": "5ec79ccd6f00ae1484a0bd24a91ce43d"
  },
  {
    "url": "assets/js/30.edbec870.js",
    "revision": "42a776c117d22ae654096a650e14ff99"
  },
  {
    "url": "assets/js/31.9e05c9f9.js",
    "revision": "b07dadca706b5a969a7dc8aad7a714cb"
  },
  {
    "url": "assets/js/32.19675b53.js",
    "revision": "0ed06e3a4b0740df9ca4384e129392d0"
  },
  {
    "url": "assets/js/33.9c2c1f51.js",
    "revision": "0bf9e7b477d5bc45c4008f6e3b1da75c"
  },
  {
    "url": "assets/js/34.f532bb0f.js",
    "revision": "f972cc8e8382875bd3288900e6170378"
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
    "url": "assets/js/9.58e2d297.js",
    "revision": "2f9a434c58bc15e75fa5d1b9077f3eb6"
  },
  {
    "url": "assets/js/app.438aa176.js",
    "revision": "70a454851714b607c61dea9bed3f57c2"
  },
  {
    "url": "baodian/high/index.html",
    "revision": "d60f467a9e053d9c06e980277ba695a3"
  },
  {
    "url": "baodian/high/notes/high.html",
    "revision": "1be0c16a7cd4e69c91f52e6d294de6cb"
  },
  {
    "url": "baodian/zero/index.html",
    "revision": "482616fd2dcd4a0808319e1b8d88025c"
  },
  {
    "url": "baodian/zero/notes/02 String、Long 源码解析和面试题.html",
    "revision": "1adbc6618667b8759ad19a0e2bf8b616"
  },
  {
    "url": "baodian/zero/notes/03 Java 常用关键字理解.html",
    "revision": "464e7deed3848b115585e1acfa36a76f"
  },
  {
    "url": "baodian/zero/notes/04 Arrays、Collections、Objects 常用方法源码解析.html",
    "revision": "2f0759aa9778a411b24de28ef043c42d"
  },
  {
    "url": "baodian/zero/notes/05 ArrayList 源码解析和设计思路.html",
    "revision": "ad0333607b984b4c1bb2e2016c3ac857"
  },
  {
    "url": "baodian/zero/notes/06 LinkedList 源码解析.html",
    "revision": "35a82b063829c4041dd7b69f2ed83233"
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
    "revision": "d2958c7cc47903e57489f84d5c127a6b"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "69edd74ffee594c41908f97dfaf4abe2"
  },
  {
    "url": "categories/frontEnd/index.html",
    "revision": "10c0d9ce071d4116c0426e8bae6e2739"
  },
  {
    "url": "categories/index.html",
    "revision": "2380f67a016905963f3dc32750a60f63"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "46d7a174a3c0dd73090d5f4225a73832"
  },
  {
    "url": "categories/js/index.html",
    "revision": "8d1d8f6ec50f77dd346e72be53403f64"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "0672ff68ca4c7782b39cfb9a3bf00367"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "b9ea8697b64882a3421acb5ba45158ae"
  },
  {
    "url": "categories/vuePress/index.html",
    "revision": "851898dccef1ca3057e04dd37900245f"
  },
  {
    "url": "categories/wechat/index.html",
    "revision": "3e46455fa94d8af46f4e8db3b89852fb"
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
    "revision": "9791ac796ba3edffb119f3a68d73e461"
  },
  {
    "url": "guide/notes/css.html",
    "revision": "793600d46e65e1cf1fc76f7362769253"
  },
  {
    "url": "guide/notes/ele.html",
    "revision": "eaf89246ff9146939c5fac33b36becfa"
  },
  {
    "url": "guide/notes/js1.html",
    "revision": "a7f66c37fc951ae05c090f488af65da5"
  },
  {
    "url": "guide/notes/js2.html",
    "revision": "334fbe0568dcf550969ff87e9e65e30a"
  },
  {
    "url": "guide/notes/linux.html",
    "revision": "103d495a94b2958997e6265246d091a6"
  },
  {
    "url": "guide/notes/vue.html",
    "revision": "f28d2bcbd6d23783d8bf95b56bbcc29b"
  },
  {
    "url": "guide/notes/vuepress指南.html",
    "revision": "92902fe23dab523abbbb846e3d47b410"
  },
  {
    "url": "guide/notes/微信小程序.html",
    "revision": "65dfa18c502fda57d6e012b1451d7278"
  },
  {
    "url": "index.html",
    "revision": "7f6684be44e4de6da41809307a87a90d"
  },
  {
    "url": "java/index.html",
    "revision": "787cac4ef8b6aa79a24273ed7bae5adf"
  },
  {
    "url": "java/notes/filter.html",
    "revision": "337af8369e80679b73136dec1b752a7b"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "tag/css/index.html",
    "revision": "a74226553689ece95b4a9560e5bd4b97"
  },
  {
    "url": "tag/elementUI/index.html",
    "revision": "810cffee9582711cc2cd90cd2fdb5f53"
  },
  {
    "url": "tag/index.html",
    "revision": "198be01d7b330d8851757d1873974101"
  },
  {
    "url": "tag/java/index.html",
    "revision": "fcc8dec35400da6c89a172b4495988d9"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "ed7bb714150940cf6b391e802e77d020"
  },
  {
    "url": "tag/js/index.html",
    "revision": "864145e6e533506abb8d183f839a371f"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "6aeeaa35f7a9624c4ac25ae801fb496b"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "2e35122f8df259c08cc36717eafb675e"
  },
  {
    "url": "tag/vuePress/index.html",
    "revision": "b6b9422c72dd6656369b2b2a5d0c74c6"
  },
  {
    "url": "tag/wechat/index.html",
    "revision": "fe0f2d919ed6c466d2fe3ac9f677f8dc"
  },
  {
    "url": "timeline/index.html",
    "revision": "17039ee43cd9714ccbb0d15ff3257be0"
  },
  {
    "url": "tools/vuePress遇到的问题.html",
    "revision": "9d69b2f16d92e861aa27ad2cb947a0f1"
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
