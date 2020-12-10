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
    "revision": "78f1ebf89957d1bb85a9f2582f1fc05a"
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
    "url": "assets/js/app.ff17e7a7.js",
    "revision": "123ada2d37f0d9cb2351b0453134639c"
  },
  {
    "url": "baodian/high/index.html",
    "revision": "7f4bd67541cc5a887c1ff77d1faafffd"
  },
  {
    "url": "baodian/high/notes/high.html",
    "revision": "5aeb0575baaef577b495517e30cfa975"
  },
  {
    "url": "baodian/zero/index.html",
    "revision": "c430785c9496373696c66c99c6c9ae0b"
  },
  {
    "url": "baodian/zero/notes/02 String、Long 源码解析和面试题.html",
    "revision": "832d078a5b9cff329cee6bbf1179b97e"
  },
  {
    "url": "baodian/zero/notes/03 Java 常用关键字理解.html",
    "revision": "0c3a0a23084b12521ccb9a57606465dd"
  },
  {
    "url": "baodian/zero/notes/04 Arrays、Collections、Objects 常用方法源码解析.html",
    "revision": "5e882bf5b9bdb1ceef87c9c45cef01c8"
  },
  {
    "url": "baodian/zero/notes/05 ArrayList 源码解析和设计思路.html",
    "revision": "40e0eaaad7171b79683ded79b121c3aa"
  },
  {
    "url": "baodian/zero/notes/06 LinkedList 源码解析.html",
    "revision": "b21e53e8304a73621be5fc27a81d4754"
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
    "revision": "abc375f20dd0b9ff95393f197526e8cb"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "4e07c9d6ea9146a1f8dc277f2d551e6d"
  },
  {
    "url": "categories/frontEnd/index.html",
    "revision": "909098b4f639b11ff4ba229805c8bce9"
  },
  {
    "url": "categories/index.html",
    "revision": "326fa0724cea1d5fc994a3a2b0687415"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "a3c192d35670603fb796f8562e9463ed"
  },
  {
    "url": "categories/js/index.html",
    "revision": "596df0910e0868659e72daff93d6eb11"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "ca8b0b3f342bd95dc132520a4f3e5630"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "1c1adf983ac28fbe27f1ec76b1844649"
  },
  {
    "url": "categories/vuePress/index.html",
    "revision": "422d9c653571adca4c634b266d58cb44"
  },
  {
    "url": "categories/wechat/index.html",
    "revision": "df552129ff9a815e6194c779d594882f"
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
    "revision": "fcc762a211c939e194b7261e299afe8b"
  },
  {
    "url": "guide/notes/css.html",
    "revision": "e0b1f906c209f76c27b39e3ebd2f9a7e"
  },
  {
    "url": "guide/notes/ele.html",
    "revision": "8c6d93482ed45ba1b235b840faaa0d9d"
  },
  {
    "url": "guide/notes/github秘钥配置.html",
    "revision": "8f09b5793b62494d551fa48d78a452b9"
  },
  {
    "url": "guide/notes/js1.html",
    "revision": "300d7298a1a99983e600b921c2f7bb6c"
  },
  {
    "url": "guide/notes/js2.html",
    "revision": "52d64d5417b58e3d97b43158625285f3"
  },
  {
    "url": "guide/notes/linux.html",
    "revision": "ee5abe60ae41aa7141ccb5b75f23ed43"
  },
  {
    "url": "guide/notes/vue.html",
    "revision": "441904d89d04cb467bfa47e9f7eb9a5a"
  },
  {
    "url": "guide/notes/vuepress指南.html",
    "revision": "21723f0f1caa0893fee7119b64f677bf"
  },
  {
    "url": "guide/notes/vuepress插件及优化.html",
    "revision": "cabec8c06c866a7f7ca4b95625e5fbd9"
  },
  {
    "url": "guide/notes/微信小程序.html",
    "revision": "286f5dfed72638737ada31aa1e24f6f2"
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
    "revision": "cb38693f6732e60fe383ff9e81606786"
  },
  {
    "url": "java/index.html",
    "revision": "0a5981e6364bef1f649818b63b395ba9"
  },
  {
    "url": "java/notes/filter.html",
    "revision": "ff2dd60ced545779d7b1266cd38a57ba"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "tag/css/index.html",
    "revision": "5f77577ac9ca264a38e807b8b81838ab"
  },
  {
    "url": "tag/elementUI/index.html",
    "revision": "0b37194c4fe792c06a1ce43e5788f128"
  },
  {
    "url": "tag/index.html",
    "revision": "6128ba5a71016047cceef452e1758978"
  },
  {
    "url": "tag/java/index.html",
    "revision": "04ddade6faf27bcaece36c1c67671573"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "6c48eb99087cb6dfb735ffafccacd9f8"
  },
  {
    "url": "tag/js/index.html",
    "revision": "07a83634fcc24c37095fa3eb58c98a04"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "45b876dd6bd42d47bb1ed502ec38cde2"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "4a9db1a7ef8e9f4a63c16c42fd0cf86b"
  },
  {
    "url": "tag/vuePress/index.html",
    "revision": "dd643ce0be7cf5d2a49afdb12fea3a89"
  },
  {
    "url": "tag/wechat/index.html",
    "revision": "5da1628c2c0b4bb1fece977bc165bdb8"
  },
  {
    "url": "timeline/index.html",
    "revision": "e7c941d648b895de82bed1242bcc7f48"
  },
  {
    "url": "tools/vuePress遇到的问题.html",
    "revision": "e7635bf7ed954fc9f2fec502abcd371e"
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
