(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{2561:function(t,s,p){t.exports=p.p+"assets/img/1639990746413.50522981.png"},2562:function(t,s,p){t.exports=p.p+"assets/img/1639990856072.c32d04b3.png"},2563:function(t,s,p){t.exports=p.p+"assets/img/1639991008376.540145e3.png"},2564:function(t,s,p){t.exports=p.p+"assets/img/1639991141871.49a6f4cb.png"},2565:function(t,s,p){t.exports=p.p+"assets/img/1639991373128.af037048.png"},2566:function(t,s,p){t.exports=p.p+"assets/img/1639991486301.9e5f149c.png"},2567:function(t,s,p){t.exports=p.p+"assets/img/1639991636985.763c1e32.png"},2568:function(t,s,p){t.exports=p.p+"assets/img/1639991704321.f304c527.png"},2569:function(t,s,p){t.exports=p.p+"assets/img/1639991811130.2886a8a6.png"},2570:function(t,s,p){t.exports=p.p+"assets/img/1639991985901.27e10e71.png"},2571:function(t,s,p){t.exports=p.p+"assets/img/1639992082856.2897989b.png"},2572:function(t,s,p){t.exports=p.p+"assets/img/1639992106003.a31c14c8.png"},2573:function(t,s,p){t.exports=p.p+"assets/img/1639992373364.70d46c6c.png"},2574:function(t,s,p){t.exports=p.p+"assets/img/1639992592627.ebfb34fe.png"},2575:function(t,s,p){t.exports=p.p+"assets/img/1639993738617.861bef76.png"},2576:function(t,s,p){t.exports=p.p+"assets/img/1639993806751.2fc8f5f2.png"},8330:function(t,s,p){"use strict";p.r(s);var a=p(5),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_14-草稿箱-预览路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_14-草稿箱-预览路由"}},[t._v("#")]),t._v(" 14.草稿箱-预览路由")]),t._v(" "),a("p",[t._v("我们想在点击新闻标题的时候--实现预览的功能")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2561),alt:"1639990746413"}})]),t._v(" "),a("p",[t._v("点击预览功能后--效果应该是这样的")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2562),alt:"1639990856072"}})]),t._v(" "),a("p",[t._v("思考：1、如何在点击的时候跳转到这个新的路径来，2、这个UI需要用什么组件来实现，3需要把数据都取过来")]),t._v(" "),a("p",[t._v("我们本地测试一下先请求一下这个路径--发现我们根本没有这个路径，那就需要整一个这样的路由")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2563),alt:"1639991008376"}})]),t._v(" "),a("p",[t._v("我们新加一个路由和组件：")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2564),alt:"1639991141871"}})]),t._v(" "),a("p",[t._v("在路由判断中还需要加入一个 routepermisson")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2565),alt:"1639991373128"}})]),t._v(" "),a("p",[t._v("现在我们可以请求到这个路由了")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2566),alt:"1639991486301"}})]),t._v(" "),a("p",[t._v("我们需要的是通过连接的方式跳转过去")]),t._v(" "),a("h4",{attrs:{id:"_2、设置超链接跳转"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、设置超链接跳转"}},[t._v("#")]),t._v(" 2、设置超链接跳转")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2567),alt:"1639991636985"}})]),t._v(" "),a("p",[t._v("查看效果：")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2568),alt:"1639991704321"}})]),t._v(" "),a("p",[t._v("我们加入跳转的href地址")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2569),alt:"1639991811130"}})]),t._v(" "),a("h4",{attrs:{id:"_3、设置详情页面显示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、设置详情页面显示"}},[t._v("#")]),t._v(" 3、设置详情页面显示")]),t._v(" "),a("p",[t._v("我们考虑使用PageHeader的组件来进行详情页面的显示")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2570),alt:"1639991985901"}})]),t._v(" "),a("p",[t._v("代码引入：")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2571),alt:"1639992082856"}})]),t._v(" "),a("p",[t._v("查看一下效果：")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2572),alt:"1639992106003"}})]),t._v(" "),a("p",[t._v("我们需要取一下数据：我们可以通过props拿到路径上的id值")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2573),alt:"1639992373364"}})]),t._v(" "),a("p",[t._v("发起请求，并设置状态值--后续就用这个newsInfo来给页面渲染值就可以了")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2574),alt:"1639992592627"}})]),t._v(" "),a("p",[t._v("页面报错--这个请求写的有问题")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2575),alt:"1639993738617"}})]),t._v(" "),a("p",[t._v("url的参数后面改为？进行连接才对")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2576),alt:"1639993806751"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);