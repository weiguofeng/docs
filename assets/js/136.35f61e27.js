(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{3321:function(t,a,s){t.exports=s.p+"assets/img/image-20220110010438753.4e224cd4.png"},3322:function(t,a,s){t.exports=s.p+"assets/img/image-20220110010608554.e4b3ea47.png"},3323:function(t,a,s){t.exports=s.p+"assets/img/image-20220110011306095.0dec1360.png"},3324:function(t,a,s){t.exports=s.p+"assets/img/image-20220110010901257.2a618699.png"},3325:function(t,a,s){t.exports=s.p+"assets/img/image-20220110011854199.a37eeeed.png"},3326:function(t,a,s){t.exports=s.p+"assets/img/image-20220110012215020.bad24dfa.png"},3327:function(t,a,s){t.exports=s.p+"assets/img/image-20220110012338187.4dc5d720.png"},3328:function(t,a,s){t.exports=s.p+"assets/img/image-20220110012437690.d9b9b0d6.png"},3329:function(t,a,s){t.exports=s.p+"assets/img/image-20220110013639556.ef2f0325.png"},3330:function(t,a,s){t.exports=s.p+"assets/img/image-20220110012723259.448039c3.png"},3331:function(t,a,s){t.exports=s.p+"assets/img/image-20220110012843011.4ec4c849.png"},3332:function(t,a,s){t.exports=s.p+"assets/img/image-20220110013038797.3786d158.png"},3333:function(t,a,s){t.exports=s.p+"assets/img/image-20220110013410542.faad6228.png"},3334:function(t,a,s){t.exports=s.p+"assets/img/image-20220110013835901.95cdc0c1.png"},3335:function(t,a,s){t.exports=s.p+"assets/img/image-20220110013949640.8f082be9.png"},3336:function(t,a,s){t.exports=s.p+"assets/img/image-20220110014209802.aa407609.png"},3337:function(t,a,s){t.exports=s.p+"assets/img/image-20220110014301207.2204a32d.png"},3338:function(t,a,s){t.exports=s.p+"assets/img/image-20220110014520879.42785ab4.png"},8394:function(t,a,s){"use strict";s.r(a);var p=s(5),e=Object(p.a)({},(function(){var t=this,a=t.$createElement,p=t._self._c||a;return p("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[p("h1",{attrs:{id:"_12-jenkins实现java项目通过tag方式自动部署"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#_12-jenkins实现java项目通过tag方式自动部署"}},[t._v("#")]),t._v(" 12.jenkins实现java项目通过tag方式自动部署")]),t._v(" "),p("p",[t._v("​")]),t._v(" "),p("p",[t._v("​\t\t我们使用一下之前的脚本-在这基础之上我们修改一下脚本完成自动部署")]),t._v(" "),p("p",[t._v("copy脚本")]),t._v(" "),p("p",[p("img",{attrs:{src:s(3321),alt:"image-20220110010438753"}})]),t._v(" "),p("p",[t._v("首先把目标的文件夹修改一下：")]),t._v(" "),p("p",[p("img",{attrs:{src:s(3322),alt:"image-20220110010608554"}})]),t._v(" "),p("p",[t._v("然后也不需要tar打包了直接copy进去就可以了")]),t._v(" "),p("p",[t._v("--然后就是scp远程推送到web服务器下的opt文件夹下--创建文件夹在webapps目录下创建Root-时间戳-版本号")]),t._v(" "),p("p",[p("img",{attrs:{src:s(3323),alt:"image-20220110011306095"}})]),t._v(" "),p("p",[t._v("我们jenkins获取过来的代码是在 workspace下 然后进入项目目录，需要的是target下的war包")]),t._v(" "),p("p",[p("img",{attrs:{src:s(3324),alt:"image-20220110010901257"}})]),t._v(" "),p("p",[t._v("​\tcopy完war包还需要解压缩包")]),t._v(" "),p("p",[t._v("​\t使用unzip解压war包， -d 解压到webapps下的Root-时间戳-版本文件夹下")]),t._v(" "),p("p",[p("img",{attrs:{src:s(3325),alt:"image-20220110011854199"}})]),t._v(" "),p("p",[t._v("copy解压完成后还不行--还需要设置软连接--连接到webapps下的ROOT")]),t._v(" "),p("p",[p("img",{attrs:{src:s(3326),alt:"image-20220110012215020"}})]),t._v(" "),p("p",[t._v("还需要删除之前存在过的软连接")]),t._v(" "),p("p",[p("img",{attrs:{src:s(3327),alt:"image-20220110012338187"}})]),t._v(" "),p("p",[t._v("脚本初步编辑完成")]),t._v(" "),p("p",[p("img",{attrs:{src:s(3328),alt:"image-20220110012437690"}})]),t._v(" "),p("p",[t._v("​\t忽然想起脚本可能存在问题-- rm -f可能无法清空，因为之前就有一个，使用rm -rf")]),t._v(" "),p("p",[p("img",{attrs:{src:s(3329),alt:"image-20220110013639556"}})]),t._v(" "),p("p",[t._v("​\t注意git_version这个变量是我们构建的时候传入进去的")]),t._v(" "),p("p",[t._v("设置参数化构建：")]),t._v(" "),p("p",[p("img",{attrs:{src:s(3330),alt:"image-20220110012723259"}})]),t._v(" "),p("p",[t._v("源码管理中获取代码--设置变量，拉取指定tag包")]),t._v(" "),p("p",[p("img",{attrs:{src:s(3331),alt:"image-20220110012843011"}})]),t._v(" "),p("p",[t._v("​\t然后在post Step在这里执行shell脚本")]),t._v(" "),p("p",[p("img",{attrs:{src:s(3332),alt:"image-20220110013038797"}})]),t._v(" "),p("p",[t._v("应用保存")]),t._v(" "),p("p",[t._v("点击构建Build。。。。然后选择版本")]),t._v(" "),p("p",[p("img",{attrs:{src:s(3333),alt:"image-20220110013410542"}})]),t._v(" "),p("p",[t._v("构建的时候发生报错--脚本第11行")]),t._v(" "),p("p",[p("img",{attrs:{src:s(3334),alt:"image-20220110013835901"}})]),t._v(" "),p("p",[t._v("之前11行后面有&&空的情况")]),t._v(" "),p("p",[p("img",{attrs:{src:s(3335),alt:"image-20220110013949640"}})]),t._v(" "),p("p",[t._v("​\t重新构建一下： 脚本17行又报错了--少加一个引号")]),t._v(" "),p("p",[p("img",{attrs:{src:s(3336),alt:"image-20220110014209802"}})]),t._v(" "),p("p",[t._v("​\t再次构建：构建成功")]),t._v(" "),p("p",[p("img",{attrs:{src:s(3337),alt:"image-20220110014301207"}})]),t._v(" "),p("p",[t._v("测试构建版本1.1页没有问题")]),t._v(" "),p("p",[p("img",{attrs:{src:s(3338),alt:"image-20220110014520879"}})]),t._v(" "),p("p",[t._v("​\t其实直接mv到webapps目录下就可以，但是那样很乱tomcat会自动解压，但是会多出很多war包")]),t._v(" "),p("p",[t._v("现在我们还没有解决的问题就是---回退的问题和重复构建的问题")])])}),[],!1,null,null,null);a.default=e.exports}}]);