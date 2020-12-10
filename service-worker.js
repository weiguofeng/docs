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
    "revision": "589d27b716686d1acd689d3b25f5cfcb"
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
    "url": "assets/js/15.e4056b20.js",
    "revision": "5c3dd388587a9adcf68b595a3f77983a"
  },
  {
    "url": "assets/js/16.cb84c5d0.js",
    "revision": "f5cd9523c9696632692453ed10394ce4"
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
    "url": "assets/js/app.b30b0bf2.js",
    "revision": "4154ac4bf9be060572858e0ff2c3a98e"
  },
  {
    "url": "baodian/high/index.html",
    "revision": "80aa70b024a8d63a4ad19e05c4c6e707"
  },
  {
    "url": "baodian/high/notes/high.html",
    "revision": "d78ea3ef78bdf1c39fafb3818ee9915d"
  },
  {
    "url": "baodian/zero/index.html",
    "revision": "fb045c84c453ee9aacc40e5ac7f1191d"
  },
  {
    "url": "baodian/zero/notes/02 String、Long 源码解析和面试题.html",
    "revision": "5c9eaa705988ff04024ab77c4fed459b"
  },
  {
    "url": "baodian/zero/notes/03 Java 常用关键字理解.html",
    "revision": "b53da1726cd5e08578ee0b2f5e8ae893"
  },
  {
    "url": "baodian/zero/notes/04 Arrays、Collections、Objects 常用方法源码解析.html",
    "revision": "0849f5bcaa1368a3a157b69e97fedecc"
  },
  {
    "url": "baodian/zero/notes/05 ArrayList 源码解析和设计思路.html",
    "revision": "bac764e9d3c89d2e81edf32d6ce8d8ef"
  },
  {
    "url": "baodian/zero/notes/06 LinkedList 源码解析.html",
    "revision": "99f3a1f105872b1f4ff1af24e952d028"
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
    "revision": "02cf7cfea23e67ab9d042655a457b82e"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "3dbce7f30c892a8a2963aca4344a94bc"
  },
  {
    "url": "categories/frontEnd/index.html",
    "revision": "fbdc146df9fa4bdaf8e355e0d7350a7d"
  },
  {
    "url": "categories/index.html",
    "revision": "e7a140bcdb8de3e24673fd6e753a25a1"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "39e747ccfa4fef3c918ac6f5184e3ef2"
  },
  {
    "url": "categories/js/index.html",
    "revision": "399d20a28815b867d5ac0000ad408ebb"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "a17c65e5d70b1dcfea0cc374432e081f"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "1b83b9adb2d06fa194fd81c15808e8be"
  },
  {
    "url": "categories/vuePress/index.html",
    "revision": "44304f70253d8e395354a7268e587fc5"
  },
  {
    "url": "categories/wechat/index.html",
    "revision": "710eb31c80cd3fc04d264f4f03bfd5e1"
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
    "revision": "c39b60b1809d63eea926eebce9c0f9e2"
  },
  {
    "url": "guide/notes/css.html",
    "revision": "59b9a2ace46e91d1f3738b11b1a016b3"
  },
  {
    "url": "guide/notes/ele.html",
    "revision": "863e65ded7b4cbb5252dd602875b4a4e"
  },
  {
    "url": "guide/notes/js1.html",
    "revision": "6e12f540cbd4bffbba10a97168cdb417"
  },
  {
    "url": "guide/notes/js2.html",
    "revision": "aade24d6892ec0b31952f30477aa415f"
  },
  {
    "url": "guide/notes/linux.html",
    "revision": "8236e753a2e6085a466f25141864d8bd"
  },
  {
    "url": "guide/notes/vue.html",
    "revision": "ecb67c30942a61c5689c772aae75eedd"
  },
  {
    "url": "guide/notes/vuepress指南.html",
    "revision": "92b5eef80b18b3bc03972e36e9ccb632"
  },
  {
    "url": "guide/notes/微信小程序.html",
    "revision": "3cb654c080997871df3ba8c83a6b3561"
  },
  {
    "url": "images/1607612108349.png",
    "revision": "63bda592bd4d6e6afa28bd3cd367cbf8"
  },
  {
    "url": "images/gitcreateproject.png",
    "revision": "f467e4a2f2e0b29f7f868afbdc3665fa"
  },
  {
    "url": "images/QQ截图20201210223018.jpg",
    "revision": "60a1fe619b2c2792386cad16166a9472"
  },
  {
    "url": "index.html",
    "revision": "8a11925754572ec1bcb2b4d24fd8a43b"
  },
  {
    "url": "java/index.html",
    "revision": "c9525ad9c14b41f8baf5b871742a425d"
  },
  {
    "url": "java/notes/filter.html",
    "revision": "94bb83a47db77897467071f39df89b04"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "tag/css/index.html",
    "revision": "0e30e20949c1c86a74c2dfbd243de03d"
  },
  {
    "url": "tag/elementUI/index.html",
    "revision": "bda8c56cfa9037b54b6419288d48e0bd"
  },
  {
    "url": "tag/index.html",
    "revision": "481095776e58e16a75247620b3722d9b"
  },
  {
    "url": "tag/java/index.html",
    "revision": "db5c558fdbc60dd4108e1f6b5d697e97"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "309da18dc50f8eeaaa42a086a4d8e16b"
  },
  {
    "url": "tag/js/index.html",
    "revision": "3b645b904f9bd10e35305724492b3eef"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "e81aeee2281bc37f326242696c9578d6"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "de358f13ad1fb3ca39c9a7092b23e985"
  },
  {
    "url": "tag/vuePress/index.html",
    "revision": "1037ee516631c3a464d4c7caa87e1c7e"
  },
  {
    "url": "tag/wechat/index.html",
    "revision": "e320e6ba85282f8fca43ae1fc10e7f44"
  },
  {
    "url": "timeline/index.html",
    "revision": "28e85d480975340f21c7ce7f81bffc4c"
  },
  {
    "url": "tools/vuePress遇到的问题.html",
    "revision": "b514188bf99272529e9f280c38e70b09"
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
