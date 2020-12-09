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
    "revision": "496780a3b1290475f5f56d17f6912c88"
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
    "url": "assets/js/app.aa29c667.js",
    "revision": "1dbf697ef374c76b15c677e889304c8b"
  },
  {
    "url": "baodian/high/index.html",
    "revision": "20f00b95fb3847b51f1a76a95c587712"
  },
  {
    "url": "baodian/high/notes/high.html",
    "revision": "ea8681c29340fec0b569a5740907a7ab"
  },
  {
    "url": "baodian/zero/index.html",
    "revision": "1d41b4ee6bab0dd669e711f61d469f10"
  },
  {
    "url": "baodian/zero/notes/02 String、Long 源码解析和面试题.html",
    "revision": "c5de13bb76bdbb5d290e708a688f8761"
  },
  {
    "url": "baodian/zero/notes/03 Java 常用关键字理解.html",
    "revision": "13e9bbed4c0ce8576fbe35c263a9e14d"
  },
  {
    "url": "baodian/zero/notes/04 Arrays、Collections、Objects 常用方法源码解析.html",
    "revision": "85b6dad43aa79104635f96a93a33f5cf"
  },
  {
    "url": "baodian/zero/notes/05 ArrayList 源码解析和设计思路.html",
    "revision": "35515df61800d2036080417d538a809b"
  },
  {
    "url": "baodian/zero/notes/06 LinkedList 源码解析.html",
    "revision": "48d46141567ce47a7f6d33eedb45b427"
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
    "revision": "9987355abd9b58ac5e881e66094c1f7e"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "46d234a401de0cbfde01c75cf16b4194"
  },
  {
    "url": "categories/frontEnd/index.html",
    "revision": "8ca4e5f0779038e89543a82047b306f2"
  },
  {
    "url": "categories/index.html",
    "revision": "9fcefaa6dcf0a6c39254a69f19949ad0"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "e1e2bd99e78504335374f30e45be142c"
  },
  {
    "url": "categories/js/index.html",
    "revision": "3ea9fcb5bc2e5e959e29c4e04b5749ab"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "ecfac6168369608eeb76fbd221ea0fe7"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "245a830963e55a4abae0f58a656dd0d8"
  },
  {
    "url": "categories/wechat/index.html",
    "revision": "0ef6056fac8f5c8d76a63ca0fb64482b"
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
    "revision": "9b542532ff3e9dccb23e2f4ad639a588"
  },
  {
    "url": "guide/notes/css.html",
    "revision": "a4e7146531bbf0d531a0d91465956b94"
  },
  {
    "url": "guide/notes/ele.html",
    "revision": "114427f79385ab387ba34258275292b9"
  },
  {
    "url": "guide/notes/js1.html",
    "revision": "e090a87a353fe0c84c1a54390711d3c7"
  },
  {
    "url": "guide/notes/js2.html",
    "revision": "db7636a6e7641d1a20af81285ffcc284"
  },
  {
    "url": "guide/notes/linux.html",
    "revision": "0125e57c9afa0a53c1f6db2cda201697"
  },
  {
    "url": "guide/notes/vue.html",
    "revision": "9512c4dd749a314acc27d491474c8f01"
  },
  {
    "url": "guide/notes/微信小程序.html",
    "revision": "7c6d8b60f5746b10c1d050750f0e85a4"
  },
  {
    "url": "index.html",
    "revision": "234813b6ad2c74b2468bb975791a999e"
  },
  {
    "url": "java/index.html",
    "revision": "b3d3d39478a297db72b38098354edb94"
  },
  {
    "url": "java/notes/filter.html",
    "revision": "ba44ae6a8db93b21a054cff4539e20af"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "tag/css/index.html",
    "revision": "41e5fffee4573153f654d365adb8cbef"
  },
  {
    "url": "tag/elementUI/index.html",
    "revision": "3479918a0b88db9e337a5919477e1315"
  },
  {
    "url": "tag/index.html",
    "revision": "e0fffdfc258c142ea0af7d0f9bd04f66"
  },
  {
    "url": "tag/java/index.html",
    "revision": "a013b3ff1eaf341f2cac932746df64c7"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "c9dac738dfca98cee37af3a146c0a539"
  },
  {
    "url": "tag/js/index.html",
    "revision": "b4a2cbbcb9d4c7d5963931e30806cab9"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "f8335cb8133ace33e3167b39ca261598"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "5fceb3cb31d15b0131a023c41770c413"
  },
  {
    "url": "tag/wechat/index.html",
    "revision": "7fe420c91299a6abb51acfb352fdbbc9"
  },
  {
    "url": "timeline/index.html",
    "revision": "44a5b7a3f6c59ae2340648673daa52de"
  },
  {
    "url": "tools/vuePress遇到的问题.html",
    "revision": "f1289a70f53025b358414ce89109391a"
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
