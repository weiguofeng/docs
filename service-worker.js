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
    "revision": "bbaf8d640b1b8610022bded225f147e5"
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
    "url": "assets/js/29.2eb225be.js",
    "revision": "80fb1cb34fc31bc0bc4329e58b95aa0a"
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
    "url": "assets/js/7.2067c83c.js",
    "revision": "76579cb909bba778a2c118346e5f3212"
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
    "url": "assets/js/app.5f9cc892.js",
    "revision": "96664fb2545f11dd4a13b08734f3cf52"
  },
  {
    "url": "baodian/high/index.html",
    "revision": "0dac2f64c082f21262865e29b80716fe"
  },
  {
    "url": "baodian/high/notes/high.html",
    "revision": "67c79181bce3bee470159c841c64e80b"
  },
  {
    "url": "baodian/zero/index.html",
    "revision": "4ad2f2b951738a3ffc8f43b85a254a22"
  },
  {
    "url": "baodian/zero/notes/02 String、Long 源码解析和面试题.html",
    "revision": "d83a9747bcf69d1d3c5e660398025d44"
  },
  {
    "url": "baodian/zero/notes/03 Java 常用关键字理解.html",
    "revision": "0e76eb3d9603fabc1e5a1c19ae82a72f"
  },
  {
    "url": "baodian/zero/notes/04 Arrays、Collections、Objects 常用方法源码解析.html",
    "revision": "0d1653cd010921b061c78d6f8afb86a1"
  },
  {
    "url": "baodian/zero/notes/05 ArrayList 源码解析和设计思路.html",
    "revision": "688172401f9440d6ac16b466af37b226"
  },
  {
    "url": "baodian/zero/notes/06 LinkedList 源码解析.html",
    "revision": "11d7f540a96dfe1fbc09aa1c18f4c2f0"
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
    "revision": "c9f3b5e727e4aa5a99ab70a5295ce0ec"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "854fefbf6fce83b97d035e50ca87b8ac"
  },
  {
    "url": "categories/frontEnd/index.html",
    "revision": "7d4958536515f48301011ae590bcc102"
  },
  {
    "url": "categories/index.html",
    "revision": "2cbc70452fdc707e06af8561bf51f1ec"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "8d3fcd28a27f418c1b964aaf74b3c323"
  },
  {
    "url": "categories/js/index.html",
    "revision": "78ef76861a5029e7349c314618374db6"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "57886871c9237709f98db01edb28e802"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "bf5d6a3ad7424055b129a5e347a648e9"
  },
  {
    "url": "categories/vuePress/index.html",
    "revision": "1dbcb1e57d6367f516ff9eece37b3edf"
  },
  {
    "url": "categories/wechat/index.html",
    "revision": "32cb2a4507173cd6c206fc238c5675f3"
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
    "revision": "92609077875cfd17b0ebde75afcb1913"
  },
  {
    "url": "guide/notes/css.html",
    "revision": "21397ab47fae3b6d8c76cf21f1ae5e09"
  },
  {
    "url": "guide/notes/ele.html",
    "revision": "7d850446853d89651ee9c103ff23f8b4"
  },
  {
    "url": "guide/notes/github秘钥配置.html",
    "revision": "09694acdc18995bdcf9e695502352d2e"
  },
  {
    "url": "guide/notes/js1.html",
    "revision": "8f1d4ee9d7da2a130bdfbca3051104d0"
  },
  {
    "url": "guide/notes/js2.html",
    "revision": "ac8b7817fc9127dd31e7b6b56730014b"
  },
  {
    "url": "guide/notes/linux.html",
    "revision": "3762618f1b584be519987d2a8d03e09e"
  },
  {
    "url": "guide/notes/vue.html",
    "revision": "c93ef0c19a2e607d1a927560d0ba2786"
  },
  {
    "url": "guide/notes/vuepress指南.html",
    "revision": "bc613dc5b3991522b27b2e74a83c6edc"
  },
  {
    "url": "guide/notes/vuepress插件及优化.html",
    "revision": "f60a9fd779aea9043e011248a005d87a"
  },
  {
    "url": "guide/notes/微信小程序.html",
    "revision": "a86e1096929dce47ce5f03c60e3d8068"
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
    "revision": "f5be27b9ae28294ad73997d60f68d362"
  },
  {
    "url": "java/index.html",
    "revision": "8c4bbf4a5717fd72930ce3dfbb61bb06"
  },
  {
    "url": "java/notes/filter.html",
    "revision": "b23db8d7630fea4478f4ded52a683244"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "tag/css/index.html",
    "revision": "08042ce859883801b8821fd0bf2b918f"
  },
  {
    "url": "tag/elementUI/index.html",
    "revision": "79bb5710f0638e763465779f3d61a22f"
  },
  {
    "url": "tag/index.html",
    "revision": "2b47e3fdc0e709b92290620a1cfb1343"
  },
  {
    "url": "tag/java/index.html",
    "revision": "d1dc55517fe4007b932fb26384758c33"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "5efa4327264541b98104e8ed784efcf7"
  },
  {
    "url": "tag/js/index.html",
    "revision": "3198c7ed4767caab1e7cc268f04bbd68"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "7a4a1ddee84025c3b9c5e20a5ba19eb5"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "680eea49f86e9e955daa1b66e9cb07e3"
  },
  {
    "url": "tag/vuePress/index.html",
    "revision": "c0e9ce908e82e8aef6ee956870130216"
  },
  {
    "url": "tag/wechat/index.html",
    "revision": "68f4e9d74b0f6f03920089a98e055d8a"
  },
  {
    "url": "timeline/index.html",
    "revision": "b88963bea4e5ef139ec9529d07fcbfc6"
  },
  {
    "url": "tools/vuePress遇到的问题.html",
    "revision": "98ce6d61f343620911b41497c39538cc"
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
