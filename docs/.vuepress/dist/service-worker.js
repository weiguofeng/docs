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
    "revision": "8493128c4880e468d0d4165ec44e0624"
  },
  {
    "url": "assets/css/0.styles.095eb22e.css",
    "revision": "e952cef788a484acfda1293ac8afbb5b"
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
    "url": "assets/js/1.edc450d9.js",
    "revision": "034c6945699ac205674b41dafd1b1eaa"
  },
  {
    "url": "assets/js/10.97d8fcd5.js",
    "revision": "1390ebc63bc08be8425969d44a59e7be"
  },
  {
    "url": "assets/js/11.bf9b2306.js",
    "revision": "7642f3e36edc2e8703092a1f2653fad3"
  },
  {
    "url": "assets/js/12.2e79bd5b.js",
    "revision": "ef1ded1cf190c1e8af70dd8739fb63e0"
  },
  {
    "url": "assets/js/13.2471e97e.js",
    "revision": "f469979d5b1e8a1ee4f45fc2263f5b8b"
  },
  {
    "url": "assets/js/14.e72313f6.js",
    "revision": "47ed0b9c7696fbf20a6c0ee4cef3e0ce"
  },
  {
    "url": "assets/js/15.8e3428c0.js",
    "revision": "3f87e39df768110d845e04d81bffc854"
  },
  {
    "url": "assets/js/16.8bc8d3a3.js",
    "revision": "8480e7eb9a87495f8db9ae2937f3053f"
  },
  {
    "url": "assets/js/17.9dcc692c.js",
    "revision": "212e3a9c5e2290950f9b8d0c07c164ba"
  },
  {
    "url": "assets/js/18.7541c25b.js",
    "revision": "2c2c3932af895993850841cbc3a2860d"
  },
  {
    "url": "assets/js/19.70456ae5.js",
    "revision": "ca53eeb5a67b3b228ee9f1f749cef842"
  },
  {
    "url": "assets/js/20.9122b6a8.js",
    "revision": "8d62be0bcff5a86de011204e40df8e42"
  },
  {
    "url": "assets/js/21.99856dc6.js",
    "revision": "a87ba8122c90f352208bb88db544acba"
  },
  {
    "url": "assets/js/22.1b8aa5f7.js",
    "revision": "61d82a5152170691fb4a8220236369cf"
  },
  {
    "url": "assets/js/23.e03d08eb.js",
    "revision": "8990f1944977c164aadf26896f6d590c"
  },
  {
    "url": "assets/js/24.e9ae7131.js",
    "revision": "9a413a7ca8d5e2737d632bb78c0d2637"
  },
  {
    "url": "assets/js/25.b89bada2.js",
    "revision": "5a2e8eb03d7d08fb3cfa0d5953e5a1fa"
  },
  {
    "url": "assets/js/26.e17e7026.js",
    "revision": "6e818ad4f1f7d17eaf8f08b8beefec2b"
  },
  {
    "url": "assets/js/27.b5901c6b.js",
    "revision": "e5ce2a81d6170d957190333bfdfbdc54"
  },
  {
    "url": "assets/js/28.b351f339.js",
    "revision": "eecae3ab73e0354d24e709b52b6825be"
  },
  {
    "url": "assets/js/29.51113204.js",
    "revision": "30f8f778d832e7aa5008d05a5a33bcdf"
  },
  {
    "url": "assets/js/3.3aa8f443.js",
    "revision": "10db2e057dc34f31b0c5b19b63acb0bd"
  },
  {
    "url": "assets/js/30.b871a47c.js",
    "revision": "e71abb27a5daeb812b2220908c65a736"
  },
  {
    "url": "assets/js/4.3faf056b.js",
    "revision": "342ab691c3dc7c90273ffe5463ebb6f7"
  },
  {
    "url": "assets/js/5.68488585.js",
    "revision": "b7e7b107accbc9bd9eaf3c261ca993f4"
  },
  {
    "url": "assets/js/6.4ddb55b3.js",
    "revision": "858f5d2629076f09c09b589c0f7394d7"
  },
  {
    "url": "assets/js/7.2ce29dcd.js",
    "revision": "b3202d04a6c7f486d8d1860719b519c5"
  },
  {
    "url": "assets/js/8.ec9458e9.js",
    "revision": "8e68511caa9eb10977b9bd5626a10116"
  },
  {
    "url": "assets/js/9.c9a129d5.js",
    "revision": "4c0393e4c13e7d622e84178e6a8149a6"
  },
  {
    "url": "assets/js/app.bd7d95c3.js",
    "revision": "d3ada14071decd182c5c3bf4c351b05d"
  },
  {
    "url": "baodian/high/index.html",
    "revision": "a39d07d7e302029d97ea0f484140bdf6"
  },
  {
    "url": "baodian/high/notes/high.html",
    "revision": "086b0c533ac5ee6c6e47785cc14b7f4f"
  },
  {
    "url": "baodian/zero/index.html",
    "revision": "71f4ad6ae0a277d55b17afa194ca022d"
  },
  {
    "url": "baodian/zero/notes/02 String、Long 源码解析和面试题.html",
    "revision": "7255e75b32a897717bbb4304b51845de"
  },
  {
    "url": "baodian/zero/notes/03 Java 常用关键字理解.html",
    "revision": "d32deaf54c307c9e47f9c3809a15e931"
  },
  {
    "url": "baodian/zero/notes/04 Arrays、Collections、Objects 常用方法源码解析.html",
    "revision": "9cda1adc37096e3b97097cecc74f2047"
  },
  {
    "url": "baodian/zero/notes/05 ArrayList 源码解析和设计思路.html",
    "revision": "7c31e04361a59501c7b5538bd5c3bb1e"
  },
  {
    "url": "baodian/zero/notes/06 LinkedList 源码解析.html",
    "revision": "1e975d25dbbaf5e1115ef3650a4408d3"
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
    "revision": "baade6c58e2fbd6aa3a7a64cdcb2c227"
  },
  {
    "url": "categories/frontEnd/index.html",
    "revision": "a9940fe3a15969cbe563cf3b0b85b763"
  },
  {
    "url": "categories/index.html",
    "revision": "a08abb809c430853e6e90450ba603a2c"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "7f08ee284950f61f04e7584e7a7e83cd"
  },
  {
    "url": "categories/js/index.html",
    "revision": "9ee0e7aba9eb4413cc2a9e3ba222df32"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "002eb09848dd027db5bf4c97b4393b9b"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "f2340c950e352da088b3612d899a0e0a"
  },
  {
    "url": "categories/wechat/index.html",
    "revision": "e4f37d10e4ad1d7585f6541e94c573d9"
  },
  {
    "url": "css/style.css",
    "revision": "81051bcc2cf1bedf378224b0a93e2877"
  },
  {
    "url": "guide/index.html",
    "revision": "3961cab7bbfeab89b3cd233aa618e69e"
  },
  {
    "url": "guide/notes/css.html",
    "revision": "3d168ffd2dd9dca4cb725933eab1383a"
  },
  {
    "url": "guide/notes/ele.html",
    "revision": "d9b80af50d4cde33d7ae623b731c11c6"
  },
  {
    "url": "guide/notes/js1.html",
    "revision": "82be640825b1baf41cdf05e79d354a92"
  },
  {
    "url": "guide/notes/js2.html",
    "revision": "e8b21bdd1edadd16a4099522af7d0ae2"
  },
  {
    "url": "guide/notes/linux.html",
    "revision": "8eb21e6ddc228e346d1a8b4bd746f3ad"
  },
  {
    "url": "guide/notes/vue.html",
    "revision": "fa93a1decc8e078d73a293e4528fdc66"
  },
  {
    "url": "guide/notes/微信小程序.html",
    "revision": "b980481c489487733ae92eef95ece2f8"
  },
  {
    "url": "index.html",
    "revision": "83aac962f3aaeda1bf9dfbaa433767ad"
  },
  {
    "url": "java/index.html",
    "revision": "a0a454dd0d43b2861b15173404e637bc"
  },
  {
    "url": "java/notes/filter.html",
    "revision": "7407de953f4da7d38e8ce38e8fc19ab1"
  },
  {
    "url": "tag/css/index.html",
    "revision": "c9a311626ca731f903336a7b3bbe6581"
  },
  {
    "url": "tag/elementUI/index.html",
    "revision": "aa6ea35d9b6882d21ac1ca839ba29fd2"
  },
  {
    "url": "tag/index.html",
    "revision": "24d1b71c46587cf5ecfeee020e8df3dc"
  },
  {
    "url": "tag/java/index.html",
    "revision": "ecf823a9b0187a7e27c6750f800ae73f"
  },
  {
    "url": "tag/js/index.html",
    "revision": "1e7260c95ace2b2da4d0202c867743e9"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "8a977ca2d1660abb4028d496c7f4c9e7"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "0bdadc01a52ab725f5350bd0f974a604"
  },
  {
    "url": "tag/wechat/index.html",
    "revision": "43880e79a0622b630be21bc610b97834"
  },
  {
    "url": "timeline/index.html",
    "revision": "7208afff2dde2822372cd2d389d8e271"
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
