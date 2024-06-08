(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{1721:function(s,t,a){s.exports=a.p+"assets/img/1628267351553.8a9aa009.png"},1722:function(s,t,a){s.exports=a.p+"assets/img/1628267620216.7be4e68d.png"},1723:function(s,t,a){s.exports=a.p+"assets/img/1628267695013.6cb184ba.png"},1724:function(s,t,a){s.exports=a.p+"assets/img/1628268150615.777e4fd2.png"},1725:function(s,t,a){s.exports=a.p+"assets/img/1628268971236.568a129b.png"},1726:function(s,t,a){s.exports=a.p+"assets/img/1628269227186.8b21ee4f.png"},1727:function(s,t,a){s.exports=a.p+"assets/img/1628269397821.9b33aee9.png"},1728:function(s,t,a){s.exports=a.p+"assets/img/1628269437374.a59a6ec1.png"},1729:function(s,t,a){s.exports=a.p+"assets/img/1628269554073.de7dd781.png"},1730:function(s,t,a){s.exports=a.p+"assets/img/1628269599846.27eb2fb9.png"},1731:function(s,t,a){s.exports=a.p+"assets/img/1628271581457.6ea10c48.png"},1732:function(s,t,a){s.exports=a.p+"assets/img/1628271904341.776b6098.png"},1733:function(s,t,a){s.exports=a.p+"assets/img/1628272254515.b49c946f.png"},8272:function(s,t,a){"use strict";a.r(t);var e=a(5),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"_4-组件通讯的三种方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-组件通讯的三种方式"}},[s._v("#")]),s._v(" 4.组件通讯的三种方式")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("#### 一般分为三种通讯方式\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\t1.父组件--》子组件\n\t2.子组件---》父组件\n\t3.兄弟组件的通讯\n\t\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h4",{attrs:{id:"_1-父组件传递数据给子组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-父组件传递数据给子组件"}},[s._v("#")]),s._v(" 1.父组件传递数据给子组件")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1721),alt:"1628267351553"}})]),s._v(" "),e("p",[s._v("代码实现父组件传递给子组件数据的过程")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1722),alt:"1628267620216"}})]),s._v(" "),e("p",[s._v("页面展示：")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1723),alt:"1628267695013"}})]),s._v(" "),e("h4",{attrs:{id:"_2-子组件传递数据给父组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-子组件传递数据给父组件"}},[s._v("#")]),s._v(" 2.子组件传递数据给父组件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\t思路：利用回调函数，父组件提供回调，子组件调用，将要传递的数据作为回调函数的参数。\n\t其实这种组件通讯和vue的通讯方式是一样的。\n\t\n\t1.父组件需要提供一个回调函数--用于接收数据\n\t\n\t2.将该函数作为属性的值，传递给子组件--子组件就可以通过props调用这个回调函数了\n\t\n\t\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[e("img",{attrs:{src:a(1724),alt:"1628268150615"}})]),s._v(" "),e("h5",{attrs:{id:"代码实现-第一步提供回调函数-第二步将回调函数传给子组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码实现-第一步提供回调函数-第二步将回调函数传给子组件"}},[s._v("#")]),s._v(" 代码实现，第一步提供回调函数，第二步将回调函数传给子组件")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1725),alt:"1628268971236"}})]),s._v(" "),e("h5",{attrs:{id:"第三步-子组件通过props调用回调函数-第四步将子组件的数据作为参数传递给回调函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第三步-子组件通过props调用回调函数-第四步将子组件的数据作为参数传递给回调函数"}},[s._v("#")]),s._v(" 第三步 子组件通过props调用回调函数，第四步将子组件的数据作为参数传递给回调函数")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1726),alt:"1628269227186"}})]),s._v(" "),e("p",[e("img",{attrs:{src:a(1727),alt:"1628269397821"}})]),s._v(" "),e("p",[e("img",{attrs:{src:a(1728),alt:"1628269437374"}})]),s._v(" "),e("p",[s._v("页面展示")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1729),alt:"1628269554073"}})]),s._v(" "),e("p",[s._v("页面展示")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1730),alt:"1628269599846"}})]),s._v(" "),e("p",[s._v("注意：回调函数中this指向的问题。")]),s._v(" "),e("h4",{attrs:{id:"_3-兄弟组件的通讯"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-兄弟组件的通讯"}},[s._v("#")]),s._v(" 3.兄弟组件的通讯")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("**需要将 共享状态 提升到最近的公共父组件中，由公共父组件管理这个状态**\n")])])]),e("p",[e("img",{attrs:{src:a(1731),alt:"1628271581457"}})]),s._v(" "),e("h5",{attrs:{id:"代码实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[s._v("#")]),s._v(" 代码实现")]),s._v(" "),e("p",[s._v("第一步：父组件给子组件传递初始值")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1732),alt:"1628271904341"}})]),s._v(" "),e("p",[s._v("第二步：父组件提供修改状态的方法，将修改的方法作为回调方法，给子组件传递过去，子组件调用方法")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1733),alt:"1628272254515"}})]),s._v(" "),e("p",[s._v("这样就实现了俩个Child1和Child2兄弟组件的通信了。")]),s._v(" "),e("p",[s._v("https://www.bilibili.com/video/BV14y4y1g7M4?p=52&spm_id_from=pageDriver")])])}),[],!1,null,null,null);t.default=r.exports}}]);