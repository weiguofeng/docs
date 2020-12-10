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
    "revision": "9657082122d76cca9020ee744d634d34"
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
    "url": "assets/js/10.1a3f8862.js",
    "revision": "bb189bc7bcf734caaf32ee4614003a27"
  },
  {
    "url": "assets/js/11.2b4c8424.js",
    "revision": "cd8a290d00a66f921a6ec126ee383163"
  },
  {
    "url": "assets/js/12.69259c80.js",
    "revision": "4ba2948587f770e90fa87cf9d6063ad8"
  },
  {
    "url": "assets/js/13.2d25450f.js",
    "revision": "f8d1fa5e5d1737ecaa15ff4767242486"
  },
  {
    "url": "assets/js/14.3610eb72.js",
    "revision": "1517aafc7905e347e4f6fe94512314b6"
  },
  {
    "url": "assets/js/15.1cb769cb.js",
    "revision": "4fe88231763200db9697d25893e66c4e"
  },
  {
    "url": "assets/js/16.72f8d69d.js",
    "revision": "1c5d521b2f5048027309526fe40c9e03"
  },
  {
    "url": "assets/js/17.e0144fbd.js",
    "revision": "98d0c1234912e123ac7a659cf7cacb54"
  },
  {
    "url": "assets/js/18.92a6d910.js",
    "revision": "3ff1104def61d70dea3d7e057a422521"
  },
  {
    "url": "assets/js/19.c8295da1.js",
    "revision": "c6317aa154ccaed832f6985980f4b195"
  },
  {
    "url": "assets/js/20.13e1a68f.js",
    "revision": "4751959dcb96b0177a54695660bbee70"
  },
  {
    "url": "assets/js/21.a645f451.js",
    "revision": "46027f8c0bd2e7d9f2652fb509e3d6c2"
  },
  {
    "url": "assets/js/22.c393239d.js",
    "revision": "9b6812398e3963c181d58f4034fe1183"
  },
  {
    "url": "assets/js/23.455d4657.js",
    "revision": "b2a6b3862596b356a6ae301a99798fbe"
  },
  {
    "url": "assets/js/24.79f8f16c.js",
    "revision": "63ccc9e7883cc70393184e2c4652a2b3"
  },
  {
    "url": "assets/js/25.2cedd0dd.js",
    "revision": "bab3f899ba6bd19ba7544ae1659bc4c7"
  },
  {
    "url": "assets/js/26.8ce2fa68.js",
    "revision": "716504197216864a529af81265f8f94c"
  },
  {
    "url": "assets/js/27.d17525df.js",
    "revision": "8ac77d380158bb3ea1147c83d34834d2"
  },
  {
    "url": "assets/js/28.8f3e5c17.js",
    "revision": "198c263baf431aef9c90a17146ef99e8"
  },
  {
    "url": "assets/js/29.b9d3a402.js",
    "revision": "5f81d595180381253918a42a11d5a4da"
  },
  {
    "url": "assets/js/3.1b4edac8.js",
    "revision": "669bbeda88bb0514a82854d3c9468610"
  },
  {
    "url": "assets/js/30.00d61e86.js",
    "revision": "7e364e61647a5ae5f457c936a772cb89"
  },
  {
    "url": "assets/js/31.d2b4b189.js",
    "revision": "208e5efbbcb0c7e779710351848c6110"
  },
  {
    "url": "assets/js/32.ff32a6db.js",
    "revision": "82162c161e0dccd0870776cd9d528c31"
  },
  {
    "url": "assets/js/33.f4c25a3f.js",
    "revision": "5f1c661dcb14257984655b4b8a147750"
  },
  {
    "url": "assets/js/34.e3c85cc8.js",
    "revision": "c045258d934056c9e85139326eaf97ee"
  },
  {
    "url": "assets/js/4.dbaf828b.js",
    "revision": "a84d95076795af51e494a3e95d33d831"
  },
  {
    "url": "assets/js/5.2ddf14cc.js",
    "revision": "60feb5ac50559fc7b40407f21471458a"
  },
  {
    "url": "assets/js/6.e7b4007a.js",
    "revision": "e23864609b3caa669f5567bc71d397dd"
  },
  {
    "url": "assets/js/7.9c2164d3.js",
    "revision": "2138ad0579e8d11f169237b743cc5e56"
  },
  {
    "url": "assets/js/8.ed59b0ab.js",
    "revision": "ab0cfc8dd8cf35d4ca67161f5c051f6d"
  },
  {
    "url": "assets/js/9.c617d21f.js",
    "revision": "dfee9fc768f6c65894243361673503a1"
  },
  {
    "url": "assets/js/app.c08dc4cf.js",
    "revision": "fda4adcb83f95aac439efb6ae65d37ff"
  },
  {
    "url": "baodian/high/index.html",
    "revision": "5cecac4ddf7b5ea12670934930efab21"
  },
  {
    "url": "baodian/high/notes/high.html",
    "revision": "26a6ef4291e42d9212bfebf91d75e435"
  },
  {
    "url": "baodian/zero/index.html",
    "revision": "5a4a24b3b35b4d0b62bef772a2185880"
  },
  {
    "url": "baodian/zero/notes/02 String、Long 源码解析和面试题.html",
    "revision": "ad85d57e1c927ffe35bc3db081564e52"
  },
  {
    "url": "baodian/zero/notes/03 Java 常用关键字理解.html",
    "revision": "e38d5392d93f5a51d4407b7d47bdee98"
  },
  {
    "url": "baodian/zero/notes/04 Arrays、Collections、Objects 常用方法源码解析.html",
    "revision": "2008610e480527690c1d00e5d12054d9"
  },
  {
    "url": "baodian/zero/notes/05 ArrayList 源码解析和设计思路.html",
    "revision": "35adcc56cf2196f0d2dfaedb14261fba"
  },
  {
    "url": "baodian/zero/notes/06 LinkedList 源码解析.html",
    "revision": "50fb4c6db3b7c4079169435ab54ee84b"
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
    "revision": "781060c8563437022120ef13d3682df7"
  },
  {
    "url": "categories/BackEnd/index.html",
    "revision": "65457639dc53f08d3454e5494b52b328"
  },
  {
    "url": "categories/frontEnd/index.html",
    "revision": "5ab86b1e97d704bab51afe4ad1a448c0"
  },
  {
    "url": "categories/index.html",
    "revision": "5be03bd3537c2b55bd980f6f0fcee0a3"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "c9f4ce2b46645725b781aab7e493ff87"
  },
  {
    "url": "categories/js/index.html",
    "revision": "4f689b8bb7ab1112294df2a4d1958a7b"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "f7a7c45b958f8e69ef62d1b0ab47b8ab"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "953bc5b6a118a50f58b2e43d416ab99d"
  },
  {
    "url": "categories/vuePress/index.html",
    "revision": "e7d6f3a2d64422dc3f7401dee5eb1064"
  },
  {
    "url": "categories/wechat/index.html",
    "revision": "e4c3be8de891ac6d4ca4e88f80823c9d"
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
    "revision": "6dc7b3b781ccce96a368d764b1855794"
  },
  {
    "url": "guide/notes/css.html",
    "revision": "1ea7ace5eca6e77d92647cb7a129204c"
  },
  {
    "url": "guide/notes/ele.html",
    "revision": "4543421ceaa16f622fea2ed721ae4078"
  },
  {
    "url": "guide/notes/js1.html",
    "revision": "e66ac133ca2261cc52fa48026f834764"
  },
  {
    "url": "guide/notes/js2.html",
    "revision": "299d43d54802e3853d2c11233fc9ee7d"
  },
  {
    "url": "guide/notes/linux.html",
    "revision": "8b6da6a3681a117a47fd49c7c4e1fc02"
  },
  {
    "url": "guide/notes/vue.html",
    "revision": "77869a6301c9e051036313398418af07"
  },
  {
    "url": "guide/notes/vuepress指南.html",
    "revision": "4e83989904cba7b04debffae0be180f5"
  },
  {
    "url": "guide/notes/微信小程序.html",
    "revision": "4f4c8a90747968f68ad6e2ab9823fb9f"
  },
  {
    "url": "images/1607612108349.png",
    "revision": "63bda592bd4d6e6afa28bd3cd367cbf8"
  },
  {
    "url": "images/1607613434312.png",
    "revision": "ee9fc4344024c7bcb9b791c7fbd0adde"
  },
  {
    "url": "images/1607613623180.png",
    "revision": "514981b178c72ccc248158cd3883b8db"
  },
  {
    "url": "images/gitcreateproject.png",
    "revision": "f467e4a2f2e0b29f7f868afbdc3665fa"
  },
  {
    "url": "images/QQ截图20201210222926.jpg",
    "revision": "ae8d8df2ce62f9eaabbb27d513369bcc"
  },
  {
    "url": "images/QQ截图20201210223018.jpg",
    "revision": "60a1fe619b2c2792386cad16166a9472"
  },
  {
    "url": "index.html",
    "revision": "213b4c3f20fd9acb50ecc49d7cd2c9dd"
  },
  {
    "url": "java/index.html",
    "revision": "8ea6982bd030b4cdaab7dec55e01af9c"
  },
  {
    "url": "java/notes/filter.html",
    "revision": "f30c9b9c2a16924ed8d701fcc7c15d34"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "tag/css/index.html",
    "revision": "7e5c79e47ebfaaa926e10863ed73ae10"
  },
  {
    "url": "tag/elementUI/index.html",
    "revision": "313b648ed278f9bdc7457efa210d5b08"
  },
  {
    "url": "tag/index.html",
    "revision": "184473f9a1faa746419fd1a40606e45f"
  },
  {
    "url": "tag/java/index.html",
    "revision": "50acc251381a5cee0d9cdd4ff5444adb"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "563382fca4d1fd9b6305ae6338c3b275"
  },
  {
    "url": "tag/js/index.html",
    "revision": "074489989e9ce27f1c51f4bf6427739c"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "ba707d07bb3e20edf6267132e6e79679"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "77f7a01a9eb4f224bbf95496346fb320"
  },
  {
    "url": "tag/vuePress/index.html",
    "revision": "cb235a4da3949211bf4b62014fcc0f35"
  },
  {
    "url": "tag/wechat/index.html",
    "revision": "2fea671af17601836b1ca6cef62fdf5c"
  },
  {
    "url": "timeline/index.html",
    "revision": "78f66c80eea8d184e43c01cb964ebc52"
  },
  {
    "url": "tools/vuePress遇到的问题.html",
    "revision": "ff6058a4d2fac8ac5563c8cf03eaabd4"
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
