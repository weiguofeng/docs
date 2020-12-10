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
    "revision": "b91dc750d5071086bd18d93fbda54a8b"
  },
  {
    "url": "assets/css/0.styles.1ee5bdb0.css",
    "revision": "5608355b690953450f10018a92d3ed30"
  },
  {
    "url": "assets/img/1607613623180.514981b1.png",
    "revision": "514981b178c72ccc248158cd3883b8db"
  },
  {
    "url": "assets/img/1607614783453.440d3729.png",
    "revision": "440d372999ca7ad7330c873002705d5d"
  },
  {
    "url": "assets/img/1607615380655.05b48be4.png",
    "revision": "05b48be40f10ed23b1eda9563bc5235d"
  },
  {
    "url": "assets/img/1607615686265.ba254e19.png",
    "revision": "ba254e19561ade120a8c67344c67ce32"
  },
  {
    "url": "assets/img/1607615790282.af2ecec4.png",
    "revision": "af2ecec46bff30ecca68e6b506cf89df"
  },
  {
    "url": "assets/img/1607616308992.8cce1a6f.png",
    "revision": "8cce1a6f501dbd1da2251af887310cf4"
  },
  {
    "url": "assets/img/1607616340224.1fc470a6.png",
    "revision": "1fc470a6ebbaa0b5de2ec97afa739c9f"
  },
  {
    "url": "assets/img/1607616363403.69cdb5b8.png",
    "revision": "69cdb5b8937dc5bfa4e6358adf2e311f"
  },
  {
    "url": "assets/img/1607618400759.998ed3d4.png",
    "revision": "998ed3d4ba95187935ec51d7098ba067"
  },
  {
    "url": "assets/img/1607618480876.3757330c.png",
    "revision": "3757330cdf603bf5db7a82a5be659ae2"
  },
  {
    "url": "assets/img/1607618559861.3e4113c0.png",
    "revision": "3e4113c0322ebeae900018f3eb55ac7a"
  },
  {
    "url": "assets/img/1607618819627.c0089f5c.png",
    "revision": "c0089f5c697f8e9f919d034562008126"
  },
  {
    "url": "assets/img/1607618947255.4c742b16.png",
    "revision": "4c742b169fa4db935f26763f44103658"
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
    "url": "assets/js/10.0ed78530.js",
    "revision": "7b88852fa00b80d407ad0dda36726ad8"
  },
  {
    "url": "assets/js/11.e6eec1a1.js",
    "revision": "b755b13bf61451e171e651cf38dd4f0e"
  },
  {
    "url": "assets/js/12.e182344d.js",
    "revision": "33136ad8829fa4c4e86ef020f8d138b6"
  },
  {
    "url": "assets/js/13.a6daf621.js",
    "revision": "042feff2062cabf52b21f3135b052e14"
  },
  {
    "url": "assets/js/14.998ee69e.js",
    "revision": "eab5c8c4cee90b29f3507dbdf7b756ba"
  },
  {
    "url": "assets/js/15.a83ab557.js",
    "revision": "48e769f000d074f003caabfe59c005e9"
  },
  {
    "url": "assets/js/16.16b2f416.js",
    "revision": "4e88a1507f0d2b93cedba81105709c2a"
  },
  {
    "url": "assets/js/17.7dae8675.js",
    "revision": "26468ecc11c1d4d8d4e93f3bb949efdb"
  },
  {
    "url": "assets/js/18.a5e892a0.js",
    "revision": "0aa568e2bdeeba8890faf53b3706c108"
  },
  {
    "url": "assets/js/19.b8e9c547.js",
    "revision": "93875c02a8530f748ee65245c57df643"
  },
  {
    "url": "assets/js/20.ef328e57.js",
    "revision": "4b8b15e02ff8e20dd3b4234c3dd76c74"
  },
  {
    "url": "assets/js/21.d010a7a9.js",
    "revision": "0a67bcd438615512db47114b2b9a7a0a"
  },
  {
    "url": "assets/js/22.0231dede.js",
    "revision": "4d96505d0ad3c79b328d34154c6d2cda"
  },
  {
    "url": "assets/js/23.40feb566.js",
    "revision": "a26c0de30d0282ca33cb0268ab1f0778"
  },
  {
    "url": "assets/js/24.d3c0d5aa.js",
    "revision": "e47265dc8f4d85f62020b102a50fa207"
  },
  {
    "url": "assets/js/25.76d8a03a.js",
    "revision": "4b9b8a2e973528b235b5dc3c34bb1119"
  },
  {
    "url": "assets/js/26.9dafb882.js",
    "revision": "e95c4b10efb11c231c38abfbb19b2475"
  },
  {
    "url": "assets/js/27.90ddae39.js",
    "revision": "99ef6242793bb0ef725a6dfadf81445c"
  },
  {
    "url": "assets/js/28.f99e503b.js",
    "revision": "7ee1d32d96fa89a60b12ea38a92a3c83"
  },
  {
    "url": "assets/js/29.ee54d128.js",
    "revision": "60603245b7d3c405385551b38203c9ae"
  },
  {
    "url": "assets/js/3.4224c658.js",
    "revision": "bafff0eef02f1a55ed9af46b610ed541"
  },
  {
    "url": "assets/js/30.88153c47.js",
    "revision": "9b0226fe014e8801376327597506db76"
  },
  {
    "url": "assets/js/31.31cf3195.js",
    "revision": "f05e80863775f91498e20fbe00ee7396"
  },
  {
    "url": "assets/js/32.6013457c.js",
    "revision": "149c8ceefc045120c34cc6c3a232131c"
  },
  {
    "url": "assets/js/33.425cbae5.js",
    "revision": "c86ace0079ddcd428b6bd8d1b0a225c4"
  },
  {
    "url": "assets/js/34.087c631e.js",
    "revision": "e32db3c711f78c1a431e1988383bd3c7"
  },
  {
    "url": "assets/js/35.b9af9305.js",
    "revision": "85718a6c61e8186704bff1878f18caf5"
  },
  {
    "url": "assets/js/36.d4a67564.js",
    "revision": "1dfd246a9f0632269150c65ca0e73498"
  },
  {
    "url": "assets/js/4.784c6d93.js",
    "revision": "b08e272dcfa9c89282196034dea9b8e0"
  },
  {
    "url": "assets/js/5.74621839.js",
    "revision": "cee43fe041417b876e97940bfb77cea9"
  },
  {
    "url": "assets/js/6.eb67074b.js",
    "revision": "e420dea20ee6491dfeb8385b95f9f3d4"
  },
  {
    "url": "assets/js/7.ecbfce20.js",
    "revision": "eecb82e71d896ae4941d2907d96758ce"
  },
  {
    "url": "assets/js/8.1f224abe.js",
    "revision": "a15417f0f39f3c59405b50297d46088a"
  },
  {
    "url": "assets/js/9.9e22ae8d.js",
    "revision": "0a464b90e51a95b7150b07f16b5b5ffd"
  },
  {
    "url": "assets/js/app.bfd7d19a.js",
    "revision": "1df2660fa3772a94a359ce0d46b77afe"
  },
  {
    "url": "baodian/high/index.html",
    "revision": "365e0bae639b95bb66ae38b8fdc6e8b1"
  },
  {
    "url": "baodian/high/notes/high.html",
    "revision": "1bb68cec2e0a50f9a1a41acbf72e2459"
  },
  {
    "url": "baodian/zero/index.html",
    "revision": "2d632feb13f1d5739da5cb01f3c08560"
  },
  {
    "url": "baodian/zero/notes/02 String、Long 源码解析和面试题.html",
    "revision": "6e648ccb8b169ff2148f03a51d454a0d"
  },
  {
    "url": "baodian/zero/notes/03 Java 常用关键字理解.html",
    "revision": "c543465d98d1a7ceabd95a52832ec2e3"
  },
  {
    "url": "baodian/zero/notes/04 Arrays、Collections、Objects 常用方法源码解析.html",
    "revision": "26813bc10cf145c4f1902f98500b0d0e"
  },
  {
    "url": "baodian/zero/notes/05 ArrayList 源码解析和设计思路.html",
    "revision": "498e9f93eb1fabfedc5438694c0eafef"
  },
  {
    "url": "baodian/zero/notes/06 LinkedList 源码解析.html",
    "revision": "e7e6f1df9c17fc4e70397fc0375b62cc"
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
    "revision": "1b4666335e7337b5480e4fadd0b71aa6"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "0a220603ff4108710ea358a9a37e9aa1"
  },
  {
    "url": "categories/frontEnd/index.html",
    "revision": "2af94f02c04421f636ed2eb18c5a7eb2"
  },
  {
    "url": "categories/index.html",
    "revision": "33d3a632338a96286c764413e1bbb5d0"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "1259489dd0ee5745c6d7474fc7b39823"
  },
  {
    "url": "categories/js/index.html",
    "revision": "d0f4c69f5dafbf321155c417a163125a"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "8e5bbe2e2118c7c2a28ead21e4a00178"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "8c1d1ee6f68a1aed4b3ddb50ec3693b2"
  },
  {
    "url": "categories/wechat/index.html",
    "revision": "400eef572bc3f3d01941db93fb1b1c8c"
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
    "revision": "7c96fe3de6976af273b2bf9da9255d37"
  },
  {
    "url": "guide/notes/css.html",
    "revision": "35fc0c6df49037e6700326d3492cf25d"
  },
  {
    "url": "guide/notes/ele.html",
    "revision": "86a405ba9a2b1c43c3ff080d534b3e63"
  },
  {
    "url": "guide/notes/github秘钥配置.html",
    "revision": "d1f7c32289e0b7fca1bd77bca1e7ccd5"
  },
  {
    "url": "guide/notes/js1.html",
    "revision": "0018e08af5a7a99d0b09c4854d48cd05"
  },
  {
    "url": "guide/notes/js2.html",
    "revision": "f9ce644980f60e07b8f5fa4c9dd174e9"
  },
  {
    "url": "guide/notes/linux.html",
    "revision": "b711f0f3ee0b6dd64bbbfbb5aa825b8b"
  },
  {
    "url": "guide/notes/vue.html",
    "revision": "9287d411b7ee4bf9390304ca39d1d95f"
  },
  {
    "url": "guide/notes/vuepress插件及优化.html",
    "revision": "44a0f91c1fe8b2b03db7ac16031ac400"
  },
  {
    "url": "guide/notes/vuepress搭建指南.html",
    "revision": "678333321aa160b9450c859e18e7b643"
  },
  {
    "url": "guide/notes/微信小程序.html",
    "revision": "aff41d05fbf27253887ad760bede0fbc"
  },
  {
    "url": "images/1607613623180.png",
    "revision": "514981b178c72ccc248158cd3883b8db"
  },
  {
    "url": "images/1607614783453.png",
    "revision": "440d372999ca7ad7330c873002705d5d"
  },
  {
    "url": "images/1607615380655.png",
    "revision": "05b48be40f10ed23b1eda9563bc5235d"
  },
  {
    "url": "images/1607615686265.png",
    "revision": "ba254e19561ade120a8c67344c67ce32"
  },
  {
    "url": "images/1607615790282.png",
    "revision": "af2ecec46bff30ecca68e6b506cf89df"
  },
  {
    "url": "images/1607616308992.png",
    "revision": "8cce1a6f501dbd1da2251af887310cf4"
  },
  {
    "url": "images/1607616340224.png",
    "revision": "1fc470a6ebbaa0b5de2ec97afa739c9f"
  },
  {
    "url": "images/1607616363403.png",
    "revision": "69cdb5b8937dc5bfa4e6358adf2e311f"
  },
  {
    "url": "images/1607618400759.png",
    "revision": "998ed3d4ba95187935ec51d7098ba067"
  },
  {
    "url": "images/1607618480876.png",
    "revision": "3757330cdf603bf5db7a82a5be659ae2"
  },
  {
    "url": "images/1607618559861.png",
    "revision": "3e4113c0322ebeae900018f3eb55ac7a"
  },
  {
    "url": "images/1607618819627.png",
    "revision": "c0089f5c697f8e9f919d034562008126"
  },
  {
    "url": "images/1607618947255.png",
    "revision": "4c742b169fa4db935f26763f44103658"
  },
  {
    "url": "index.html",
    "revision": "b947c837165ad530ee5e61f8d2449a32"
  },
  {
    "url": "java/index.html",
    "revision": "55bafd4a0971372ef9ab95c1420d3229"
  },
  {
    "url": "java/notes/filter.html",
    "revision": "8066bed88c3a0a855c6452fee8fbd0ff"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "tag/css/index.html",
    "revision": "919232d1dc169fb7851e3aa85fce8377"
  },
  {
    "url": "tag/elementUI/index.html",
    "revision": "70c4b7b569f4d14123aabeb82003e7aa"
  },
  {
    "url": "tag/index.html",
    "revision": "dc9cd87447e8661b234e55d722a74286"
  },
  {
    "url": "tag/java/index.html",
    "revision": "c058cc05aec82d352fd42d7223c8d784"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "7e6a4f183cd79cecfa5e3bf4f781a781"
  },
  {
    "url": "tag/js/index.html",
    "revision": "926c5e4235190fa5e48cf6097fe4f6c2"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "84388f9af0202132cde9d4a4f47336c3"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "62523e4577ef49fcaa6e2bdbb11966d8"
  },
  {
    "url": "tag/vuePress搭建指南/index.html",
    "revision": "a87d376b3f9f2cca8f65190f435efd06"
  },
  {
    "url": "tag/wechat/index.html",
    "revision": "027dc7331798963fe81367525e56fd76"
  },
  {
    "url": "timeline/index.html",
    "revision": "c0f8522745815e7f9c22d56b490fd4cc"
  },
  {
    "url": "tools/vuePress遇到的问题.html",
    "revision": "f60239af7f7ee03afd992e4af0314fc3"
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
