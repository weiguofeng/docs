(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{3256:function(t,a,s){t.exports=s.p+"assets/img/image-20220111221923977.1f8a0af2.png"},3257:function(t,a,s){t.exports=s.p+"assets/img/image-20220111222250059.6b969c91.png"},3258:function(t,a,s){t.exports=s.p+"assets/img/image-20220111222504424.ab10cda0.png"},3259:function(t,a,s){t.exports=s.p+"assets/img/image-20220111222826167.cc9ea698.png"},3260:function(t,a,s){t.exports=s.p+"assets/img/image-20220111222949221.06775275.png"},3261:function(t,a,s){t.exports=s.p+"assets/img/image-20220111223048951.45e952d8.png"},3262:function(t,a,s){t.exports=s.p+"assets/img/image-20220111223305027.0cfd9763.png"},3263:function(t,a,s){t.exports=s.p+"assets/img/image-20220111223352203.386f037f.png"},3264:function(t,a,s){t.exports=s.p+"assets/img/image-20220111223740224.90f0ae5d.png"},3265:function(t,a,s){t.exports=s.p+"assets/img/image-20220111223856832.4ee2d81f.png"},3266:function(t,a,s){t.exports=s.p+"assets/img/image-20220111224127177.a67fbcf6.png"},3267:function(t,a,s){t.exports=s.p+"assets/img/image-20220111224648705.47702355.png"},3268:function(t,a,s){t.exports=s.p+"assets/img/image-20220111230122612.da5fa84e.png"},3269:function(t,a,s){t.exports=s.p+"assets/img/image-20220111230359986.1a2f9d3e.png"},8388:function(t,a,s){"use strict";s.r(a);var i=s(5),e=Object(i.a)({},(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"_13-jenkins实现java项目通过tag方式回退"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_13-jenkins实现java项目通过tag方式回退"}},[t._v("#")]),t._v(" 13.jenkins实现java项目通过tag方式回退")]),t._v(" "),i("p",[t._v("我们使用原先的静态资源回退--copy一份新的脚本来修改")]),t._v(" "),i("p",[i("img",{attrs:{src:s(3256),alt:"image-20220111221923977"}})]),t._v(" "),i("p",[t._v("设置脚本中的回退函数")]),t._v(" "),i("p",[i("img",{attrs:{src:s(3257),alt:"image-20220111222250059"}})]),t._v(" "),i("p",[t._v("判断一下是发布还是回退走相应的函数，如果是发布也处理一下重复构建的问题，如果和上次构建版本一样就提示")]),t._v(" "),i("p",[i("img",{attrs:{src:s(3258),alt:"image-20220111222504424"}})]),t._v(" "),i("p",[t._v("我们在jenkins中加一下选项参数")]),t._v(" "),i("p",[i("img",{attrs:{src:s(3259),alt:"image-20220111222826167"}})]),t._v(" "),i("p",[t._v("jenkins修改执行放脚本--改为我们刚刚改好的脚本")]),t._v(" "),i("p",[i("img",{attrs:{src:s(3260),alt:"image-20220111222949221"}})]),t._v(" "),i("p",[t._v("​\t现在我们build构建一下：")]),t._v(" "),i("p",[i("img",{attrs:{src:s(3261),alt:"image-20220111223048951"}})]),t._v(" "),i("p",[t._v("​\tjenkins提示已经构建过了，所以我们再设置个1.3的版本")]),t._v(" "),i("p",[t._v("​\t开始构建1.3的版本")]),t._v(" "),i("p",[i("img",{attrs:{src:s(3262),alt:"image-20220111223305027"}})]),t._v(" "),i("p",[t._v("构建成功：")]),t._v(" "),i("p",[i("img",{attrs:{src:s(3263),alt:"image-20220111223352203"}})]),t._v(" "),i("p",[t._v("发现已经部署成功1.3的版本了，但是页面请求还是之前的版本--我们忘记一个重要的事情就是脚本中需要重启tomcat因为是java项目")]),t._v(" "),i("p",[i("img",{attrs:{src:s(3264),alt:"image-20220111223740224"}})]),t._v(" "),i("p",[t._v("back回退的时候也得加上重启")]),t._v(" "),i("p",[i("img",{attrs:{src:s(3265),alt:"image-20220111223856832"}})]),t._v(" "),i("p",[t._v("重新发布-访问--会有短暂的502的情况--因为tomcat重启了")]),t._v(" "),i("p",[i("img",{attrs:{src:s(3266),alt:"image-20220111224127177"}})]),t._v(" "),i("p",[t._v("我们在重复构建的时候发现成功了--什么原因呢。。")]),t._v(" "),i("p",[t._v("​\t发现判断也没有问题--原因是之前构建失败手动重启了一下tomcat")]),t._v(" "),i("p",[i("img",{attrs:{src:s(3267),alt:"image-20220111224648705"}})]),t._v(" "),i("p",[t._v("​\t回退版本：回退1.3版本 发生构建成功但是却请求不到服务--原因是软连接设置的时间戳不对")]),t._v(" "),i("p",[t._v("​\t改为back_file--之前的软连接使用的是当前的时间，然后导致的文件夹找不到")]),t._v(" "),i("p",[i("img",{attrs:{src:s(3268),alt:"image-20220111230122612"}})]),t._v(" "),i("p",[t._v("修改为这个脚本的时间戳后--回退成功没有问题")]),t._v(" "),i("p",[i("img",{attrs:{src:s(3269),alt:"image-20220111230359986"}})]),t._v(" "),i("p",[t._v("https://www.bilibili.com/video/BV11J411674t?p=34&spm_id_from=pageDriver")])])}),[],!1,null,null,null);a.default=e.exports}}]);