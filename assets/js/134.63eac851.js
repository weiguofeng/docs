(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{2183:function(t,s,p){t.exports=p.p+"assets/img/1637598217244.d6524656.png"},2184:function(t,s,p){t.exports=p.p+"assets/img/1637598628440.e4e4d200.png"},2185:function(t,s,p){t.exports=p.p+"assets/img/1637598604532.eed0b76e.png"},2186:function(t,s,p){t.exports=p.p+"assets/img/1637598858743.1f3f9ea4.png"},2187:function(t,s,p){t.exports=p.p+"assets/img/1637598930850.b3c12479.png"},2188:function(t,s,p){t.exports=p.p+"assets/img/1637599238497.87ac9b9f.png"},2189:function(t,s,p){t.exports=p.p+"assets/img/1637599289928.a50bee1d.png"},2190:function(t,s,p){t.exports=p.p+"assets/img/1637599382709.657e0f3d.png"},2191:function(t,s,p){t.exports=p.p+"assets/img/1637599530500.95dcb1ea.png"},2192:function(t,s,p){t.exports=p.p+"assets/img/1637599598118.9850e2ee.png"},2193:function(t,s,p){t.exports=p.p+"assets/img/1637599616544.2528d001.png"},2194:function(t,s,p){t.exports=p.p+"assets/img/1637599853359.3d86424c.png"},2195:function(t,s,p){t.exports=p.p+"assets/img/1637599899933.3fa446f4.png"},2196:function(t,s,p){t.exports=p.p+"assets/img/1637600210341.e7d12e30.png"},2197:function(t,s,p){t.exports=p.p+"assets/img/1637600435362.33e92a95.png"},2198:function(t,s,p){t.exports=p.p+"assets/img/1637600516230.1ee73aea.png"},2199:function(t,s,p){t.exports=p.p+"assets/img/1637600593888.eaf68abf.png"},2200:function(t,s,p){t.exports=p.p+"assets/img/1637600612061.091b386f.png"},8302:function(t,s,p){"use strict";p.r(s);var a=p(5),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_4-项目路由架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-项目路由架构"}},[t._v("#")]),t._v(" 4.项目路由架构")]),t._v(" "),a("p",[t._v("路由架构图：")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2183),alt:"1637598217244"}})]),t._v(" "),a("h4",{attrs:{id:"_1-路由结构设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-路由结构设置"}},[t._v("#")]),t._v(" 1.路由结构设置")]),t._v(" "),a("p",[t._v("新建路由文件夹--然后创建indexRouter.js路由组件")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2184),alt:"1637598628440"}})]),t._v(" "),a("p",[t._v("需要依赖react-router-dom这个组件，安装这个组件")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2185),alt:"1637598604532"}})]),t._v(" "),a("p",[t._v("我们使用的是HashRouter-他是带#号的，而BrowserRouter是不带#号的（更像一个真正的路径）")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2186),alt:"1637598858743"}})]),t._v(" "),a("p",[t._v("创建我们需要的路由：")]),t._v(" "),a("p",[t._v("​\t\t如果是/login 那么就进入Login这个组件中")]),t._v(" "),a("p",[t._v("​\t\t如果是/** 那么就进入NewSanBox组件中")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2187),alt:"1637598930850"}})]),t._v(" "),a("p",[t._v("创建view文件夹--里面放和路由相关的组件，创建component文件夹--里面放页面共享的组件")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2188),alt:"1637599238497"}})]),t._v(" "),a("p",[t._v("创建沙箱路由组件newSanBox")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2189),alt:"1637599289928"}})]),t._v(" "),a("p",[t._v("引入刚刚创建的组件：到此我们的路由组件的结构就创建好了")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2190),alt:"1637599382709"}})]),t._v(" "),a("p",[t._v("但是目前这个路由并没有和项目融合--我们需要在App.js引入一下")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2191),alt:"1637599530500"}})]),t._v(" "),a("p",[t._v("我们现在可以页面测试一下：")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2192),alt:"1637599598118"}})]),t._v(" "),a("p",[a("img",{attrs:{src:p(2193),alt:"1637599616544"}})]),t._v(" "),a("p",[t._v("发现和想象的有点不一样，需要的是/的请求是newsSandBox路由--而/login的请求是login路由，并不需要包含newsSandBox路由")]),t._v(" "),a("p",[t._v("​")]),t._v(" "),a("p",[t._v("因为现在是属于模糊匹配的，我们想要单一匹配，可以通过Switch组件实现")]),t._v(" "),a("p",[t._v("​\t\t他的行为是如果匹配到第一个后，后面就不进行匹配了")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2194),alt:"1637599853359"}})]),t._v(" "),a("p",[t._v("查看效果：现在就可以正确匹配了")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2195),alt:"1637599899933"}})]),t._v(" "),a("h4",{attrs:{id:"_2-重定向路由设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-重定向路由设置"}},[t._v("#")]),t._v(" 2.重定向路由设置")]),t._v(" "),a("p",[t._v("​\t\t如果访问没有权限的将重定向---就需要我们对路由拦截，而路由拦截需要我们使用三目控制就可以了。")]),t._v(" "),a("p",[t._v("​\t\t我们可以使用另外一种写法使用属性render然后他的回调就是返回的路由组件")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2196),alt:"1637600210341"}})]),t._v(" "),a("p",[t._v('我们现在可以通过localStorage.getItem("token")获取token，看看如果有就说明有权限，没有就重定向到登录组件')]),t._v(" "),a("p",[a("img",{attrs:{src:p(2197),alt:"1637600435362"}})]),t._v(" "),a("p",[t._v("查看页面效果：我们使用路径/请求，但是给重定向到/login了，说明是好使的")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2198),alt:"1637600516230"}})]),t._v(" "),a("p",[t._v("比如我们设置一个假的token")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2199),alt:"1637600593888"}})]),t._v(" "),a("p",[t._v("然后我们重新测试：这样就可以走到SandBox这个路由组件中了")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2200),alt:"1637600612061"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);