(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{3081:function(t,s,a){t.exports=a.p+"assets/img/1636883055952.fd587764.png"},3082:function(t,s,a){t.exports=a.p+"assets/img/1636883109631.e2df4522.png"},3083:function(t,s,a){t.exports=a.p+"assets/img/1636884003638.1c7132d8.png"},3084:function(t,s,a){t.exports=a.p+"assets/img/1636883964444.893d3ae9.png"},3085:function(t,s,a){t.exports=a.p+"assets/img/1636884116068.7eae5969.png"},3086:function(t,s,a){t.exports=a.p+"assets/img/1636884406248.aa79d94c.png"},3087:function(t,s,a){t.exports=a.p+"assets/img/1636884379622.e1bc13bc.png"},3088:function(t,s,a){t.exports=a.p+"assets/img/1636884434101.49119329.png"},3089:function(t,s,a){t.exports=a.p+"assets/img/1636884618943.97240f11.png"},3090:function(t,s,a){t.exports=a.p+"assets/img/1636884717797.3d9b1aaa.png"},3091:function(t,s,a){t.exports=a.p+"assets/img/1636884764067.ce9076c9.png"},3092:function(t,s,a){t.exports=a.p+"assets/img/1636884864423.b215edf7.png"},3093:function(t,s,a){t.exports=a.p+"assets/img/1636885010627.e704d64f.png"},3094:function(t,s,a){t.exports=a.p+"assets/img/1636885087566.58ceae9a.png"},3095:function(t,s,a){t.exports=a.p+"assets/img/1636885285014.5553b601.png"},8374:function(t,s,a){"use strict";a.r(s);var p=a(5),r=Object(p.a)({},(function(){var t=this,s=t.$createElement,p=t._self._c||s;return p("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[p("h1",{attrs:{id:"_2-地图找房模块"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#_2-地图找房模块"}},[t._v("#")]),t._v(" 2.地图找房模块")]),t._v(" "),p("p",[t._v("P153")]),t._v(" "),p("h4",{attrs:{id:"功能分析"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#功能分析"}},[t._v("#")]),t._v(" 功能分析")]),t._v(" "),p("p",[p("img",{attrs:{src:a(3081),alt:"1636883055952"}})]),t._v(" "),p("h4",{attrs:{id:"顶部导航栏组件"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#顶部导航栏组件"}},[t._v("#")]),t._v(" 顶部导航栏组件")]),t._v(" "),p("p",[p("img",{attrs:{src:a(3082),alt:"1636883109631"}})]),t._v(" "),p("p",[p("img",{attrs:{src:a(3083),alt:"1636884003638"}})]),t._v(" "),p("p",[t._v("代码实现：")]),t._v(" "),p("p",[t._v("创建封装的顶部导航组件")]),t._v(" "),p("p",[p("img",{attrs:{src:a(3084),alt:"1636883964444"}})]),t._v(" "),p("p",[t._v("我们发现文字显示和背景样式都有些不对")]),t._v(" "),p("p",[p("img",{attrs:{src:a(3085),alt:"1636884116068"}})]),t._v(" "),p("p",[t._v("给组件样式调整：")]),t._v(" "),p("p",[t._v("​\t1.调整文字：将文字改为动态显示的内容--那么如何为动态的呢，其实就是通过组件的属性值来传入进来的，或者使用它的child属性")]),t._v(" "),p("p",[p("img",{attrs:{src:a(3086),alt:"1636884406248"}})]),t._v(" "),p("p",[t._v("结构化一下内容")]),t._v(" "),p("p",[p("img",{attrs:{src:a(3087),alt:"1636884379622"}})]),t._v(" "),p("p",[t._v("查看页面效果：标题已经改变了，实现了动态效果了")]),t._v(" "),p("p",[p("img",{attrs:{src:a(3088),alt:"1636884434101"}})]),t._v(" "),p("h4",{attrs:{id:"样式的处理"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#样式的处理"}},[t._v("#")]),t._v(" 样式的处理：")]),t._v(" "),p("p",[t._v("以前顶部导航栏的样式是放在-城市列表里的")]),t._v(" "),p("p",[p("img",{attrs:{src:a(3089),alt:"1636884618943"}})]),t._v(" "),p("p",[t._v("现在我们将顶部导航栏单独作为组件使用，那么就需要把样式也抽离出来")]),t._v(" "),p("p",[t._v("在组件中新建一个属于组件自己的样式")]),t._v(" "),p("p",[p("img",{attrs:{src:a(3090),alt:"1636884717797"}})]),t._v(" "),p("p",[t._v("然后在组件中导入一下样式：")]),t._v(" "),p("p",[p("img",{attrs:{src:a(3091),alt:"1636884764067"}})]),t._v(" "),p("p",[t._v("发现我们自己写的组件样式被引入的组件样式覆盖了--为什么被覆盖了呢--导入样式顺序的问题")]),t._v(" "),p("p",[p("img",{attrs:{src:a(3092),alt:"1636884864423"}})]),t._v(" "),p("p",[t._v("将组件的导入放入样式的后面--防止样式被覆盖")]),t._v(" "),p("p",[p("img",{attrs:{src:a(3093),alt:"1636885010627"}})]),t._v(" "),p("p",[t._v("页面效果： 发现样式好了")]),t._v(" "),p("p",[p("img",{attrs:{src:a(3094),alt:"1636885087566"}})]),t._v(" "),p("p",[t._v("有些样式每个页面不一样，那就需要给使用组件的时候单独指定样式了")]),t._v(" "),p("p",[p("img",{attrs:{src:a(3095),alt:"1636885285014"}})]),t._v(" "),p("p",[t._v("https://www.bilibili.com/video/BV14y4y1g7M4?p=155&spm_id_from=pageDriver")])])}),[],!1,null,null,null);s.default=r.exports}}]);