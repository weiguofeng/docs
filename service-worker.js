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
    "revision": "85717568a5f348eac5922c0bfcc350d4"
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
    "url": "assets/js/app.1892200d.js",
    "revision": "37eb0002e41d2e5c930533706d759157"
  },
  {
    "url": "baodian/high/index.html",
    "revision": "b49860b4630f95b744f10cc314f8c5aa"
  },
  {
    "url": "baodian/high/notes/high.html",
    "revision": "873b8d1520993854decd79e6f5ef22d4"
  },
  {
    "url": "baodian/zero/index.html",
    "revision": "2d8bd4743965570498d25e84b0c04b84"
  },
  {
    "url": "baodian/zero/notes/02 String、Long 源码解析和面试题.html",
    "revision": "10cddca394d692f711205a4d05ba9319"
  },
  {
    "url": "baodian/zero/notes/03 Java 常用关键字理解.html",
    "revision": "532ff9a4cd86b60beceda250acb7b797"
  },
  {
    "url": "baodian/zero/notes/04 Arrays、Collections、Objects 常用方法源码解析.html",
    "revision": "6f68c42ab446881ffb8147a9115fea3f"
  },
  {
    "url": "baodian/zero/notes/05 ArrayList 源码解析和设计思路.html",
    "revision": "d1fd66ed984223a424f17dd6631d721c"
  },
  {
    "url": "baodian/zero/notes/06 LinkedList 源码解析.html",
    "revision": "cb4bf14fb432a394534f9a23578bc305"
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
    "revision": "e80a265867e7c3721886713dd5a00a34"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "2acd94e91d9e3ec37d1b8e0440ead626"
  },
  {
    "url": "categories/frontEnd/index.html",
    "revision": "dd1b241ec0bb543c776431840d799837"
  },
  {
    "url": "categories/index.html",
    "revision": "0986bace74173a6177a688554f1a3209"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "b2208d276d84d276c0bdb176bee453d6"
  },
  {
    "url": "categories/js/index.html",
    "revision": "d678b10a10bf6a5c9511a5d6777156ac"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "b28a2c848a5e3f3baee794f7866278ee"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "3ea5173dd5cd63781ceec036569deab5"
  },
  {
    "url": "categories/vuePress/index.html",
    "revision": "1b01d6b4e503099673f0084c82451dfe"
  },
  {
    "url": "categories/wechat/index.html",
    "revision": "e6a4d9a9d67fec272c66780a2baddb0f"
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
    "revision": "23e9838ca3dd84032e80ec94bcc23020"
  },
  {
    "url": "guide/notes/css.html",
    "revision": "c65eec8d1b008dcee8bf56d21325d046"
  },
  {
    "url": "guide/notes/ele.html",
    "revision": "45dbf47b15924b4264880ef0ddd10f72"
  },
  {
    "url": "guide/notes/github秘钥配置.html",
    "revision": "04c63c30b86d2f3c34872ca013702120"
  },
  {
    "url": "guide/notes/js1.html",
    "revision": "aee6a04990880bff680253563696e600"
  },
  {
    "url": "guide/notes/js2.html",
    "revision": "dfd034ea667f9f7bd9dd2ad005ea053f"
  },
  {
    "url": "guide/notes/linux.html",
    "revision": "cc7bf19c4b8399bda6e7e56c44e3e464"
  },
  {
    "url": "guide/notes/vue.html",
    "revision": "bc36998b68fd5437503f4d68886191c1"
  },
  {
    "url": "guide/notes/vuepress插件及优化.html",
    "revision": "9e0c600d30ac12eb9334b51bcb651853"
  },
  {
    "url": "guide/notes/vuepress搭建指南.html",
    "revision": "2cb6d4eaf00ac6ca39209ccd8fea98fb"
  },
  {
    "url": "guide/notes/微信小程序.html",
    "revision": "f7949ccf5376263d07afe9c823f94325"
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
    "revision": "c477fc409ee7956e7e006f6d73425ec2"
  },
  {
    "url": "java/index.html",
    "revision": "586181959a0bc2d5d40c1d0678545ad3"
  },
  {
    "url": "java/notes/filter.html",
    "revision": "20151f485e715677ba429274b190f64a"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "tag/css/index.html",
    "revision": "b3be6c84f96a122ca99f8e15a8841da3"
  },
  {
    "url": "tag/elementUI/index.html",
    "revision": "cb11c2d475c837fa544bd71bba544f57"
  },
  {
    "url": "tag/index.html",
    "revision": "e5bc4879b4863975ef5e0b5486cf8ebb"
  },
  {
    "url": "tag/java/index.html",
    "revision": "9dd05d66598ad39882e50338eed48748"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "a7342dc313d9eea4c84a4395c4c2eb5e"
  },
  {
    "url": "tag/js/index.html",
    "revision": "cd7051e71b9ec24a03e928e73fa6f013"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "142126b38c4e133ed514ced5b6650655"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "a900ba9451f1c09e969b5fc9a0476c3a"
  },
  {
    "url": "tag/vuePress/index.html",
    "revision": "90e52973069f1b18bfe5a7ced09eebe4"
  },
  {
    "url": "tag/vuePress搭建指南/index.html",
    "revision": "0b29c52fcb39f85decaa75355c96ad11"
  },
  {
    "url": "tag/wechat/index.html",
    "revision": "0c86ed5662fea534915caa3dabf47e68"
  },
  {
    "url": "timeline/index.html",
    "revision": "f6404545721c167908a8975f98c2dcfc"
  },
  {
    "url": "tools/vuePress遇到的问题.html",
    "revision": "0c749bddfcc768da33d68e2c03ce8fc6"
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
