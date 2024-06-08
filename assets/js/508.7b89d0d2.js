(window.webpackJsonp=window.webpackJsonp||[]).push([[508],{5741:function(s,a,n){s.exports=n.p+"assets/img/1635750613266.e8db770b.png"},5742:function(s,a,n){s.exports=n.p+"assets/img/1635751265698.e046979e.png"},5743:function(s,a,n){s.exports=n.p+"assets/img/1635751316919.a6b82eb7.png"},5744:function(s,a,n){s.exports=n.p+"assets/img/1635751692186.1799acd7.png"},8665:function(s,a,n){"use strict";n.r(a);var t=n(5),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_10-streamapi介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-streamapi介绍"}},[s._v("#")]),s._v(" 10.StreamAPI介绍")]),s._v(" "),t("p",[t("img",{attrs:{src:n(5741),alt:"1635750613266"}})]),s._v(" "),t("p",[s._v("使用Stream API 对集合数据进行操作，就类似于使用SQL执行的数据库查询，简单来说，Stream API提供了一种高效且易于使用的处理数据的方式。")]),s._v(" "),t("p",[t("img",{attrs:{src:n(5742),alt:"1635751265698"}})]),s._v(" "),t("p",[t("img",{attrs:{src:n(5743),alt:"1635751316919"}})]),s._v(" "),t("p",[t("strong",[s._v("执行过程")])]),s._v(" "),t("p",[t("img",{attrs:{src:n(5744),alt:"1635751692186"}})]),s._v(" "),t("p",[s._v("为什么Stream是延迟的呢，是因为只要你不调用终止操作，其他中间环节的过滤方法的调用其实都是不执行的，只有等调用了终止操作才会调用中间环节的所有操作。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n *  1.  Stream 关注的是对数据的运算，与CPU打交道\n *      集合关注的是数据的存储，与内存打交道的。\n *\n *  2.  Stream 自己不会存储元素，\n *      Stream不会改变原对象，相反，他们会返回一个持有结果的新的Stream\n *      Stream操作是延迟执行的，这意味着他们会等到需要结果的时候才执行\n *\n *  3.  Stream 执行流程\n *      1：Stream的实例化\n *      2：一系列的中间操作（过滤操作、映射操作、等等）\n *      3：终止操作\n *\n *  4.  说明：\n *          1.一个中间有个操作链，对数据源的数据进行处理\n *          2.一旦执行终止操作，就执行中间操作链，并产生结果，之后，不会再被使用\n */")]),s._v("\n \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);