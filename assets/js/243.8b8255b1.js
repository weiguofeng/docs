(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{5483:function(t,a,s){t.exports=s.p+"assets/img/image-20220412224555918.6ce68313.png"},5484:function(t,a,s){t.exports=s.p+"assets/img/image-20220412224840733.f7d46d6d.png"},5485:function(t,a,s){t.exports=s.p+"assets/img/image-20220412225223571.afc91f6f.png"},5486:function(t,a,s){t.exports=s.p+"assets/img/image-20220412225349276.37aa21d0.png"},5487:function(t,a,s){t.exports=s.p+"assets/img/image-20220412225426520.daa3bf3c.png"},5488:function(t,a,s){t.exports=s.p+"assets/img/image-20220412225747980.c9ac0459.png"},5489:function(t,a,s){t.exports=s.p+"assets/img/image-20220412230130847.bf74aa81.png"},5490:function(t,a,s){t.exports=s.p+"assets/img/image-20220412230414067.66ea6692.png"},5491:function(t,a,s){t.exports=s.p+"assets/img/image-20220412231231749.7c0e6dbe.png"},5492:function(t,a,s){t.exports=s.p+"assets/img/image-20220412231351498.df93ed5a.png"},5493:function(t,a,s){t.exports=s.p+"assets/img/image-20220412231449939.ffcc1880.png"},5494:function(t,a,s){t.exports=s.p+"assets/img/image-20220412231751878.f77d6ae3.png"},8628:function(t,a,s){"use strict";s.r(a);var e=s(5),i=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_32-创建一个接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_32-创建一个接口"}},[t._v("#")]),t._v(" 32.创建一个接口")]),t._v(" "),e("p",[t._v("​")]),t._v(" "),e("p",[t._v("​\t创建一个接口，我们使用ide发现没有创建接口的菜单，我们选择new class然后再选择Interface")]),t._v(" "),e("p",[e("img",{attrs:{src:s(5483),alt:"image-20220412224555918"}})]),t._v(" "),e("p",[t._v("我们最好是在名称前面加一个I表示这是一个接口，这种约定在C语言比较流行，在Java中不怎么流行java一般使用Can的前缀或者able等等都可以没有限制")]),t._v(" "),e("p",[e("img",{attrs:{src:s(5484),alt:"image-20220412224840733"}})]),t._v(" "),e("p",[t._v("我们现在先把类名称重构一下，因为这个计算税额的类是计算2018年的，我们改为2018")]),t._v(" "),e("p",[e("img",{attrs:{src:s(5485),alt:"image-20220412225223571"}})]),t._v(" "),e("p",[t._v("我们创建计算器接口")]),t._v(" "),e("p",[e("img",{attrs:{src:s(5486),alt:"image-20220412225349276"}})]),t._v(" "),e("p",[t._v("在这个接口我们没有状态和数据，所以我们没有任何字段，我们只有确定需要做什么？")]),t._v(" "),e("p",[t._v("​\t\t我们需要能够计算纳税额的方法，返回为double类型的结果")]),t._v(" "),e("p",[e("img",{attrs:{src:s(5487),alt:"image-20220412225426520"}})]),t._v(" "),e("p",[t._v("​\t我们创建计算纳税额的一个抽象的方法，因为我们没有花括号，我们只有方法声明。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(5488),alt:"image-20220412225747980"}})]),t._v(" "),e("p",[t._v("​\t现在我们看到public变灰色了，这意味着这里不需要他了，这是多余的，因为我们在这里声明的每个方法都是需要由类实现的，这些方法都是public公开的，所以我们删除这个public")]),t._v(" "),e("p",[t._v("现在我们来到main方法中，我们试试看接口能不能被实例化，显然不能的，因为他没有任何实现代码，那么我们将如何使用他呢？")]),t._v(" "),e("p",[e("img",{attrs:{src:s(5489),alt:"image-20220412230130847"}})]),t._v(" "),e("p",[t._v("​\t我们需要实现的类来 实现implement 这个接口")]),t._v(" "),e("p",[e("img",{attrs:{src:s(5490),alt:"image-20220412230414067"}})]),t._v(" "),e("p",[t._v("​\t作为最佳实践，我们应该将覆盖注释应用于接口方法，所以我们之前了解的注释是我们附加到方法或者是类上的标签，并以此会得到Java编译器的提醒，你可能会问，这样做的好处是什么？这里java编译器会告诉我们这个方法中的实现情况在我们的接口中，如果将来我们决定从我们的接口注释掉这个方法的话，他会提醒我们")]),t._v(" "),e("p",[e("img",{attrs:{src:s(5491),alt:"image-20220412231231749"}})]),t._v(" "),e("p",[t._v("如：注释掉接口方法")]),t._v(" "),e("p",[e("img",{attrs:{src:s(5492),alt:"image-20220412231351498"}})]),t._v(" "),e("p",[t._v("​\t我们的实现会得到一个编译错误，因为我们告诉java编译器这个方法正在重写或实现接口的方法，但此方法不存在我们的接口中，这就是使用这个注释的好处")]),t._v(" "),e("p",[e("img",{attrs:{src:s(5493),alt:"image-20220412231449939"}})]),t._v(" "),e("p",[t._v("现在这个报告类仍然与这个计算类紧密耦合，我们需要替换为我们的接口")]),t._v(" "),e("p",[e("img",{attrs:{src:s(5494),alt:"image-20220412231751878"}})])])}),[],!1,null,null,null);a.default=i.exports}}]);