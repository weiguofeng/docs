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
    "revision": "6fe73493daa11cece9663f2aba353790"
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
    "url": "assets/js/11.c79a0a30.js",
    "revision": "4c2d4d7ecd4932bcd2de51dcd91f7426"
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
    "url": "assets/js/22.909386dc.js",
    "revision": "2d8b59a50b0c5cf90a918e806cc54501"
  },
  {
    "url": "assets/js/23.f48fe2b0.js",
    "revision": "d1c93aaaf1f1c39de3471b3136edac68"
  },
  {
    "url": "assets/js/24.89ae393a.js",
    "revision": "b0b6a889eb591a3197b59eda4593f6f5"
  },
  {
    "url": "assets/js/25.96a8391d.js",
    "revision": "a93845131f0d7bb66de72d6a1f044ebb"
  },
  {
    "url": "assets/js/26.fd1ebdfe.js",
    "revision": "862cc156da7b2f677dd520a368136170"
  },
  {
    "url": "assets/js/27.690f5375.js",
    "revision": "15811e573e8f04b5b947989de1085da1"
  },
  {
    "url": "assets/js/28.9061a4f6.js",
    "revision": "3f2674e9b5a77c4b2a067bd0064f9e5f"
  },
  {
    "url": "assets/js/29.433ae9bd.js",
    "revision": "5af514097a4b562f16530649ca4992c8"
  },
  {
    "url": "assets/js/3.4224c658.js",
    "revision": "bafff0eef02f1a55ed9af46b610ed541"
  },
  {
    "url": "assets/js/30.896971c4.js",
    "revision": "17534d1344466678b939384401fa4fec"
  },
  {
    "url": "assets/js/31.d0e7f010.js",
    "revision": "40971babc2d34d9b35204ad2afd5e5ba"
  },
  {
    "url": "assets/js/32.d11843c8.js",
    "revision": "058e62fedb512c09b3a06efcf0c052e9"
  },
  {
    "url": "assets/js/33.7090d048.js",
    "revision": "a04df117b2b887b047f948cc3c3955c5"
  },
  {
    "url": "assets/js/34.27107fb3.js",
    "revision": "cfa174ce294e94344811f3237f8216bc"
  },
  {
    "url": "assets/js/35.8ec88f3b.js",
    "revision": "117e65ad38bb105f833eb6460da43611"
  },
  {
    "url": "assets/js/36.30a54f9f.js",
    "revision": "5ebee8f59886ad148ebc2fc1d75fa57f"
  },
  {
    "url": "assets/js/37.40b78e69.js",
    "revision": "ef9d4866601313ddaa5adb40ae15ff3c"
  },
  {
    "url": "assets/js/38.eccd4745.js",
    "revision": "7eceedafa495593bd92b45cd9f00aa7e"
  },
  {
    "url": "assets/js/39.e4090d01.js",
    "revision": "3f2c6a3b9927a1113e4c231a8ab7544c"
  },
  {
    "url": "assets/js/4.784c6d93.js",
    "revision": "b08e272dcfa9c89282196034dea9b8e0"
  },
  {
    "url": "assets/js/40.ec1b5f38.js",
    "revision": "e8c9709afd9d6435b9540a052178aaed"
  },
  {
    "url": "assets/js/41.465c1b83.js",
    "revision": "c6ee7ab69dff5aa5180f96711c154746"
  },
  {
    "url": "assets/js/42.37f6ffb9.js",
    "revision": "4e7258980cea35766e29a2a68819df33"
  },
  {
    "url": "assets/js/43.8cb02379.js",
    "revision": "6ce6bd99188bbcec502712cc02d4d0cc"
  },
  {
    "url": "assets/js/44.9e2525b8.js",
    "revision": "ef4b697e50a95ff90212d1c0234e22d8"
  },
  {
    "url": "assets/js/45.f012abe7.js",
    "revision": "2dfc6dc36f8bebc86fecf6d745393bed"
  },
  {
    "url": "assets/js/46.847f92df.js",
    "revision": "368f2bd6236a5715865806506c038eb0"
  },
  {
    "url": "assets/js/47.b4e6bd5c.js",
    "revision": "85b6ba6dbe78dd7a32eb9af8136cc53d"
  },
  {
    "url": "assets/js/48.7f759cd8.js",
    "revision": "cac0382d3d7be0f4bfb402de47ede9b8"
  },
  {
    "url": "assets/js/49.60e67350.js",
    "revision": "66eb5201b6375ee42dbbd2be588d7255"
  },
  {
    "url": "assets/js/5.74621839.js",
    "revision": "cee43fe041417b876e97940bfb77cea9"
  },
  {
    "url": "assets/js/50.a616d465.js",
    "revision": "8901aa4317085fc6fd103eff967d7695"
  },
  {
    "url": "assets/js/51.93143cf6.js",
    "revision": "a681d3001c3726ba0a9e48ba6a157754"
  },
  {
    "url": "assets/js/52.27abbf1f.js",
    "revision": "e86963a90d00654fdef8bbf411546c7e"
  },
  {
    "url": "assets/js/53.4ba3b8e1.js",
    "revision": "599cdcb607004dcf90f72deaf9fe02c9"
  },
  {
    "url": "assets/js/54.1ba074e3.js",
    "revision": "c077fe580de3f9d1a54ee20d274cb18c"
  },
  {
    "url": "assets/js/55.f722cdc1.js",
    "revision": "117dd7309cbf2d851614385518b012c9"
  },
  {
    "url": "assets/js/56.d7dbf574.js",
    "revision": "2062f08c76a7ba97129bce3db2574e4f"
  },
  {
    "url": "assets/js/6.eb67074b.js",
    "revision": "e420dea20ee6491dfeb8385b95f9f3d4"
  },
  {
    "url": "assets/js/7.f24be683.js",
    "revision": "94d2dfa9434b055ef2c4fee5e841d84d"
  },
  {
    "url": "assets/js/8.1f224abe.js",
    "revision": "a15417f0f39f3c59405b50297d46088a"
  },
  {
    "url": "assets/js/9.83cc4948.js",
    "revision": "fc7e3673350a82dd55e40f54d8bd58df"
  },
  {
    "url": "assets/js/app.5f173597.js",
    "revision": "f2cf84fc5eb9a77e893693a8f6da0621"
  },
  {
    "url": "baodian/high/index.html",
    "revision": "ed643cdc9b05236040a2f281d87762f3"
  },
  {
    "url": "baodian/high/notes/high.html",
    "revision": "179e8076e7c287a66aa88e4c33de9a6c"
  },
  {
    "url": "baodian/zero/index.html",
    "revision": "144e6fe65e3d79271cd7c5f6e4f472a9"
  },
  {
    "url": "baodian/zero/notes/02 String、Long 源码解析和面试题.html",
    "revision": "4ff2d2c4430e21f9313245a77aad2b8f"
  },
  {
    "url": "baodian/zero/notes/03 Java 常用关键字理解.html",
    "revision": "69093f059acc113ca6763488083be27f"
  },
  {
    "url": "baodian/zero/notes/04 Arrays、Collections、Objects 常用方法源码解析.html",
    "revision": "66e2c2379ceba6b9d46e930ac1faa793"
  },
  {
    "url": "baodian/zero/notes/05 ArrayList 源码解析和设计思路.html",
    "revision": "800de71f06adddcad2b9cb84c5f328b0"
  },
  {
    "url": "baodian/zero/notes/06 LinkedList 源码解析.html",
    "revision": "254971e5ee3ff255a15a6e26bcf11515"
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
    "revision": "0f3d1ec339c174c74ffc9d9a6f72e4cb"
  },
  {
    "url": "categories/frontEnd/index.html",
    "revision": "e0ab0cab7f3892b6e54af03b3755b6a4"
  },
  {
    "url": "categories/index.html",
    "revision": "1a7d5444e7c85fd7da44a081be3f21de"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "eaafd453387dd0e1fb8a3a4efe84336e"
  },
  {
    "url": "categories/js/index.html",
    "revision": "4c896cbef89af4558819692b00238d3b"
  },
  {
    "url": "categories/linux/index.html",
    "revision": "7a8a27ab2f3bf01b21fc62bcc92ed7f7"
  },
  {
    "url": "categories/vue/index.html",
    "revision": "c483705b3df3a472825b273c42f27aba"
  },
  {
    "url": "categories/wechat/index.html",
    "revision": "ed9b1e4e9efd1fad3223ea37aa460885"
  },
  {
    "url": "css/style.css",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "db/mongo/index.html",
    "revision": "ee3de2f77733cb3fd7d2c31732734b05"
  },
  {
    "url": "db/mongo/notes/mysql.html",
    "revision": "92ed7a7e6404154a211cbcfd7d444c42"
  },
  {
    "url": "db/mysql/index.html",
    "revision": "894649e0dc757f69dd05cf0cdac3551c"
  },
  {
    "url": "db/mysql/notes/mysql.html",
    "revision": "8706c271f0f2b89f1c078cbae780157f"
  },
  {
    "url": "db/oracle/index.html",
    "revision": "e2579fc8b36baaf464da8a5c1a96cb24"
  },
  {
    "url": "db/oracle/notes/mysql.html",
    "revision": "6fc0b02cb9e4c8bafe6a1bce2d680e40"
  },
  {
    "url": "db/redis/index.html",
    "revision": "2ed910788b9c71c022d6dd14ac86ca91"
  },
  {
    "url": "db/redis/notes/mysql.html",
    "revision": "69f8c84c39c8b00ca03920f822754423"
  },
  {
    "url": "fenggelogo.jpg",
    "revision": "43bdaa30867ff0461973785c5b6308bd"
  },
  {
    "url": "front/vue/index.html",
    "revision": "af50e462b9eae59a1990c9c11d305f85"
  },
  {
    "url": "guide/index.html",
    "revision": "98ca3adc2375fd9ddbed660e42229561"
  },
  {
    "url": "guide/notes/css.html",
    "revision": "8467010c8dcf772c0ef616197160a321"
  },
  {
    "url": "guide/notes/ele.html",
    "revision": "137fc8ba1876041d346a235338759192"
  },
  {
    "url": "guide/notes/github秘钥配置.html",
    "revision": "f3d0cd41f4550a5efe77d14beb9802a7"
  },
  {
    "url": "guide/notes/js1.html",
    "revision": "4ddc16c1b1c0ae4f89b858670e3cf2fe"
  },
  {
    "url": "guide/notes/js2.html",
    "revision": "a1bfb3226c1092702364bc43ca6ba2b5"
  },
  {
    "url": "guide/notes/linux.html",
    "revision": "8567e5399d247a04f2e117328b23fb3d"
  },
  {
    "url": "guide/notes/vue.html",
    "revision": "d03a5be8470ce9008d6d5b03e2795d9e"
  },
  {
    "url": "guide/notes/vuepress插件及优化.html",
    "revision": "57eb777eee4cd76a8f52b14438a6f8e5"
  },
  {
    "url": "guide/notes/vuepress搭建指南.html",
    "revision": "6db69d6f40bce4b2458647a634f7f6bb"
  },
  {
    "url": "guide/notes/微信小程序.html",
    "revision": "1ca22f144c854cc48cf3799609f95b4c"
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
    "revision": "5a28c5f7570d8056d87e39e20362ec19"
  },
  {
    "url": "java/base/index.html",
    "revision": "3cbee343e0447828e97293a0aaf9ae12"
  },
  {
    "url": "java/base/notes/filter.html",
    "revision": "45df9169fef8364d6e053d0887f703da"
  },
  {
    "url": "java/mybatis/index.html",
    "revision": "56583f34b87feddf97fac60330190e61"
  },
  {
    "url": "java/mybatis/notes/filter.html",
    "revision": "4c28061e75c462928f1152bcec5d894f"
  },
  {
    "url": "java/other/index.html",
    "revision": "3f744aaf93549c7c520aa572cc5c89a6"
  },
  {
    "url": "java/other/notes/filter.html",
    "revision": "37c7deba735a21d6d56cf8f1cb074d0a"
  },
  {
    "url": "java/spring/index.html",
    "revision": "3ab340dfef49476fde4328986825a5f0"
  },
  {
    "url": "java/spring/notes/filter.html",
    "revision": "79b23ad201c7508022e9187e104cd050"
  },
  {
    "url": "java/thread/index.html",
    "revision": "871a9bafae3a1bcb1cc72ec64ca0b5aa"
  },
  {
    "url": "java/thread/notes/filter.html",
    "revision": "31496e851992ffba3f273788c96d0fa2"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "question/index.html",
    "revision": "a9fea2d29ce04591ce74cc8593e32ee2"
  },
  {
    "url": "question/notes/vuePress遇到的问题.html",
    "revision": "dfd6ed02f6534c86fc823ba83130123a"
  },
  {
    "url": "tag/css/index.html",
    "revision": "dacab3a72809ee31dc93870b32bab1f3"
  },
  {
    "url": "tag/elementUI/index.html",
    "revision": "9c85d569dc61ed4658a07ce3f4f74391"
  },
  {
    "url": "tag/index.html",
    "revision": "24d22b9fe2152ad3a94c4f78845c3700"
  },
  {
    "url": "tag/java/index.html",
    "revision": "59eb55e5e91763c7570df0d2ea8c6335"
  },
  {
    "url": "tag/Java/index.html",
    "revision": "c751b9c055a89d82f77b8e34ffb5d402"
  },
  {
    "url": "tag/js/index.html",
    "revision": "730386d7e102647621964621f1bcb9cb"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "15d4690567d383804b0c47611ca77e78"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "8e6bb931678826da12d208858c41a80f"
  },
  {
    "url": "tag/vuePress搭建指南/index.html",
    "revision": "3b373ac1a4d9177787a0157df819487d"
  },
  {
    "url": "tag/wechat/index.html",
    "revision": "42e7e22c0af0d39be28a8f08a479e4e4"
  },
  {
    "url": "timeline/index.html",
    "revision": "ec61d24942f0c20cd5ebc76056b5ffb8"
  },
  {
    "url": "tools/tool/index.html",
    "revision": "7eac11c1d18b45860b830f90ad83e91c"
  },
  {
    "url": "tools/tool/notes/心路历程.html",
    "revision": "666092b1377eb37ae9636414af8c95b3"
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
