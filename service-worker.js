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
    "revision": "645a38846f23fc611177c564b5bfd436"
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
    "url": "assets/js/app.913aee2e.js",
    "revision": "a7d00332cc1282f6c2a5733bddb1bb47"
  },
  {
    "url": "baodian/high/index.html",
    "revision": "1383bc6f8e59c51dbd14df91b0ce5e12"
  },
  {
    "url": "baodian/high/notes/high.html",
    "revision": "c25235f917725b1bb28534a3b42ac100"
  },
  {
    "url": "baodian/zero/index.html",
    "revision": "391cd0578bd83417b66bab68ea4ae25f"
  },
  {
    "url": "baodian/zero/notes/02 String、Long 源码解析和面试题.html",
    "revision": "210fc5ceb3480e24df4603b1cad9f9f2"
  },
  {
    "url": "baodian/zero/notes/03 Java 常用关键字理解.html",
    "revision": "c24081c5e986bf422e38ff5c596bc0b9"
  },
  {
    "url": "baodian/zero/notes/04 Arrays、Collections、Objects 常用方法源码解析.html",
    "revision": "3b8dc32917a1e38979ec763b7f533920"
  },
  {
    "url": "baodian/zero/notes/05 ArrayList 源码解析和设计思路.html",
    "revision": "77d08b1694e45fee63768cf50f0e333c"
  },
  {
    "url": "baodian/zero/notes/06 LinkedList 源码解析.html",
    "revision": "d785379ffd996122881bcaa0af419e10"
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
    "revision": "e2919c01d4e30e361035089f7eedf655"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "fb2b97a47e15a0acde288750ca8209bb"
  },
  {
    "url": "categories/frontEnd/index.html",
    "revision": "4053831416a25f67edcac23da36ffa38"
  },
  {
    "url": "categories/index.html",
    "revision": "37866013190661d45715e8a59f2d3144"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "4805226b24d464af3675a9334ec7d21b"
  },
  {
    "url": "categories/js/index.html",
    "revision": "5154925aefbb5339b12254f05ce9f72e"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "13f1ec1703f4f0c2f6eb0ff9d943657d"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "3b63ed2d84862ee145bbe235e89a3dc7"
  },
  {
    "url": "categories/wechat/index.html",
    "revision": "d815c73b170742b343bf982a00be804c"
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
    "revision": "51a6327004b34c196b0add1e925a3252"
  },
  {
    "url": "guide/notes/css.html",
    "revision": "c21c3f054e8c2c239e9d0b40c13d7dc4"
  },
  {
    "url": "guide/notes/ele.html",
    "revision": "1a8ccab1e03229ffb229cd281c1926b3"
  },
  {
    "url": "guide/notes/github秘钥配置.html",
    "revision": "79558318de8988fca2278a84527d17a7"
  },
  {
    "url": "guide/notes/js1.html",
    "revision": "711ae12b654d3fe969acb03465bdd7ef"
  },
  {
    "url": "guide/notes/js2.html",
    "revision": "351263a4186a195bccce91957acdbc08"
  },
  {
    "url": "guide/notes/linux.html",
    "revision": "3b7f243233f0004685b6bb2020ddc4f9"
  },
  {
    "url": "guide/notes/vue.html",
    "revision": "733fd8a5a709636b55dddd4d3777b920"
  },
  {
    "url": "guide/notes/vuepress插件及优化.html",
    "revision": "d7392910c5024eee6b35781e0005be5b"
  },
  {
    "url": "guide/notes/vuepress搭建指南.html",
    "revision": "c3843552adf726b4ee2ff555f276e3a8"
  },
  {
    "url": "guide/notes/微信小程序.html",
    "revision": "bd71fbc481042d8ce0974e7db676bf08"
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
    "revision": "ecc6bc0b029ca6aa998b497681e738a7"
  },
  {
    "url": "java/index.html",
    "revision": "dd1ffd0c042d2b019a1d95481121f5ed"
  },
  {
    "url": "java/notes/filter.html",
    "revision": "45ec5db00514ff02095809283b4d79d6"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "tag/css/index.html",
    "revision": "3d80fdb3fea2ac056bfde6edb39de724"
  },
  {
    "url": "tag/elementUI/index.html",
    "revision": "002ea28e8ff1ca832c1a14e72f7f7654"
  },
  {
    "url": "tag/index.html",
    "revision": "e38e911cb7a5bdf12c2e7ad8b8f1c930"
  },
  {
    "url": "tag/java/index.html",
    "revision": "44f6b5479bcb42a6f111e63b466882dc"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "00539267b1a1b01165dd6edd2f26e904"
  },
  {
    "url": "tag/js/index.html",
    "revision": "00e32981283e156ad759e75ea5dbc510"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "8adaf0d0fb442d2e68b0b311a7c660a1"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "6d2057d2d7124421117a9f252df8cbef"
  },
  {
    "url": "tag/vuePress搭建指南/index.html",
    "revision": "5fc29b86861a525dd2de1685630c9d62"
  },
  {
    "url": "tag/wechat/index.html",
    "revision": "15fbab97a2b9822d7fa22f8d4bf93d6f"
  },
  {
    "url": "timeline/index.html",
    "revision": "3f45313e3c99f79768917f2517a8badf"
  },
  {
    "url": "tools/vuePress遇到的问题.html",
    "revision": "fb0a564ad94c4d88d51db854f11000b2"
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
