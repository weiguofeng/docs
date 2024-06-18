(window.webpackJsonp=window.webpackJsonp||[]).push([[329],{5356:function(s,t,a){s.exports=a.p+"assets/img/image-20220408000110072.9c8fd509.png"},5357:function(s,t,a){s.exports=a.p+"assets/img/image-20220408000813602.585edf64.png"},5358:function(s,t,a){s.exports=a.p+"assets/img/image-20220408001043111.6ce54fc9.png"},5359:function(s,t,a){s.exports=a.p+"assets/img/image-20220408001920072.b70486ce.png"},5360:function(s,t,a){s.exports=a.p+"assets/img/image-20220408002306489.c273c727.png"},5361:function(s,t,a){s.exports=a.p+"assets/img/image-20220408002334053.f023c9de.png"},5362:function(s,t,a){s.exports=a.p+"assets/img/image-20220408002855629.42481695.png"},5363:function(s,t,a){s.exports=a.p+"assets/img/image-20220408003131576.fb0f67fe.png"},5364:function(s,t,a){s.exports=a.p+"assets/img/image-20220408003256379.0abf2e52.png"},8702:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_18-inheritance继承"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_18-inheritance继承"}},[s._v("#")]),s._v(" 18. Inheritance继承")]),s._v(" "),n("p",[s._v("​\t2-4-2内容：")]),s._v(" "),n("p",[s._v("我们想象一下，我们想要构建一个用于构建图形用户界面的框架，所有其他人可以使用这个框架来构建具有图形用户界面的应用程序，我们可以用各种类型的输入字段，如文本框，复选框，下拉列表等等。")]),s._v(" "),n("p",[s._v("​\t现在所有对象都有一个共同的行为，例如我们可以启用或者是禁用他们，还可以根据屏幕的宽度高度设置他们的大小，编写这些类的时候，我们不想在每个类中实现所有这些特性，这就是我们使用继承来重用代码的地方")]),s._v(" "),n("p",[n("img",{attrs:{src:a(5356),alt:"image-20220408000110072"}})]),s._v(" "),n("p",[s._v("​\t\t所以我们定义单个类的所有常用行为，我们称为ui控件，然后让其他类从这个类继承这些行为，在本例中，我们将ui控件称为基类或父类---文本框作为子类")]),s._v(" "),n("p",[n("img",{attrs:{src:a(5357),alt:"image-20220408000813602"}})]),s._v(" "),n("p",[s._v("​\t现在我们创建一下UIControl 基类，并在其中定义所有的常见行为")]),s._v(" "),n("p",[n("img",{attrs:{src:a(5358),alt:"image-20220408001043111"}})]),s._v(" "),n("p",[s._v("​\t我们想一下这个定义些什么行为？我们先添加启用或者是禁用每个ui控件的功能")]),s._v(" "),n("p",[s._v("​\t默认情况下所有控件都是启用的")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UIControl")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" isEnable "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("enable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        isEnable "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("disable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        isEnable "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("​\t我们现在还需要一个getter 来读取此字段的值")]),s._v(" "),n("p",[n("img",{attrs:{src:a(5359),alt:"image-20220408001920072"}})]),s._v(" "),n("p",[s._v("​\t现在我们到Main主类中，使用我们的UI控件对象，我们需要先创建一个UI控件对象,然后我们关闭控件，获取一些enable看看能看到什么")]),s._v(" "),n("p",[n("img",{attrs:{src:a(5360),alt:"image-20220408002306489"}})]),s._v(" "),n("p",[s._v("​\t我们看到false是因为，我们禁用了这个控制对象")]),s._v(" "),n("p",[n("img",{attrs:{src:a(5361),alt:"image-20220408002334053"}})]),s._v(" "),n("p",[s._v("​\t所以我们在ui控件类中实现了这个特性")]),s._v(" "),n("p",[s._v("现在我们创建一个文本框类，我们不想重复所有的特性，我们想重用他，这就是我们使用继承的原因")]),s._v(" "),n("p",[n("img",{attrs:{src:a(5362),alt:"image-20220408002855629"}})]),s._v(" "),n("p",[s._v("我们将Main中的实例化修改为TextBox，看看我们得到了什么？")]),s._v(" "),n("p",[n("img",{attrs:{src:a(5363),alt:"image-20220408003131576"}})]),s._v(" "),n("p",[s._v("他也拥有这些方法：这些都是从我们的父类继承过来的方法")]),s._v(" "),n("p",[n("img",{attrs:{src:a(5364),alt:"image-20220408003256379"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);