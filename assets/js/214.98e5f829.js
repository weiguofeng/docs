(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{2468:function(t,s,p){t.exports=p.p+"assets/img/1641277539180.b534da50.png"},2469:function(t,s,p){t.exports=p.p+"assets/img/1641277657661.e137f9c2.png"},2470:function(t,s,p){t.exports=p.p+"assets/img/1641277746752.803f23b7.png"},2471:function(t,s,p){t.exports=p.p+"assets/img/1641277841302.f65efd46.png"},2472:function(t,s,p){t.exports=p.p+"assets/img/1641278102258.ea190c25.png"},2473:function(t,s,p){t.exports=p.p+"assets/img/1641278212735.b4a8dd66.png"},2474:function(t,s,p){t.exports=p.p+"assets/img/1641278273758.4f2a2743.png"},2475:function(t,s,p){t.exports=p.p+"assets/img/1641278426503.582aa7b9.png"},2476:function(t,s,p){t.exports=p.p+"assets/img/1641278564922.64c57789.png"},2477:function(t,s,p){t.exports=p.p+"assets/img/1641278699452.140071b7.png"},2478:function(t,s,p){t.exports=p.p+"assets/img/1641278827335.3bb2a584.png"},2479:function(t,s,p){t.exports=p.p+"assets/img/1641278930033.402fcc94.png"},2480:function(t,s,p){t.exports=p.p+"assets/img/1641279001553.b1d06fbd.png"},8324:function(t,s,p){"use strict";p.r(s);var r=p(5),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"_9-状态管理-持久化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_9-状态管理-持久化"}},[t._v("#")]),t._v(" 9.状态管理-持久化")]),t._v(" "),r("p",[t._v("​\tredux给我们做的状态管理--是保存在内存中的，当页面来回切换这个状态是可以保存住的，但是如果页面刷新后状态就被清除了--这个时候我们就想能不能将redux的状态持久化的保存在我们的系统中。")]),t._v(" "),r("p",[t._v("我们找一下redux持久化相关的")]),t._v(" "),r("p",[r("img",{attrs:{src:p(2468),alt:"1641277539180"}})]),t._v(" "),r("p",[t._v("需要下载个redux-persist这个小模块")]),t._v(" "),r("p",[r("img",{attrs:{src:p(2469),alt:"1641277657661"}})]),t._v(" "),r("p",[t._v("如何使用：")]),t._v(" "),r("p",[r("img",{attrs:{src:p(2470),alt:"1641277746752"}})]),t._v(" "),r("p",[t._v("这个意思就是---我要把我普通的reducer进行持久化，persistConfig就是我在storage中配置存放的key是什么")]),t._v(" "),r("p",[r("img",{attrs:{src:p(2471),alt:"1641277841302"}})]),t._v(" "),r("p",[t._v("导出2个store")]),t._v(" "),r("p",[r("img",{attrs:{src:p(2472),alt:"1641278102258"}})]),t._v(" "),r("p",[t._v("注意导出store的改变--导入的地方得改为结构的方式")]),t._v(" "),r("p",[r("img",{attrs:{src:p(2473),alt:"1641278212735"}})]),t._v(" "),r("p",[t._v("刷新页面--功能实现了")]),t._v(" "),r("p",[r("img",{attrs:{src:p(2474),alt:"1641278273758"}})]),t._v(" "),r("p",[t._v("在刷新的时候还是会动一下--继续优化")]),t._v(" "),r("p",[t._v("​\tpersistor是store导出的持久化store")]),t._v(" "),r("p",[r("img",{attrs:{src:p(2475),alt:"1641278426503"}})]),t._v(" "),r("p",[t._v("查看效果：没有了闪动展开折叠的效果了")]),t._v(" "),r("p",[r("img",{attrs:{src:p(2476),alt:"1641278564922"}})]),t._v(" "),r("p",[r("img",{attrs:{src:p(2477),alt:"1641278699452"}})]),t._v(" "),r("p",[t._v("我们发现redux的值全部给持久化了--有些我们需要持久化有些我们不需要持久化")]),t._v(" "),r("p",[t._v("我们看一下persist的白名单和黑名单是如何使用的：")]),t._v(" "),r("p",[t._v("​\t\t放在白名单里的就是被持久化的，放在黑名单里的就是不被持久化的")]),t._v(" "),r("p",[r("img",{attrs:{src:p(2478),alt:"1641278827335"}})]),t._v(" "),r("p",[t._v("我们使用一下这个黑名单：这个LoadingReducer你不用给我管理了，他不需要持久化")]),t._v(" "),r("p",[r("img",{attrs:{src:p(2479),alt:"1641278930033"}})]),t._v(" "),r("p",[t._v("现在我们查看一下storage的内容--已经没有了LoadingReducer了")]),t._v(" "),r("p",[r("img",{attrs:{src:p(2480),alt:"1641279001553"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);