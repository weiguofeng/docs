(window.webpackJsonp=window.webpackJsonp||[]).push([[458],{5597:function(t,s,a){t.exports=a.p+"assets/img/image-20220417230232067.b16a90fe.png"},5598:function(t,s,a){t.exports=a.p+"assets/img/image-20220417231347522.46bb8412.png"},5599:function(t,s,a){t.exports=a.p+"assets/img/image-20220417231856228.3b42aebb.png"},5600:function(t,s,a){t.exports=a.p+"assets/img/image-20220417232402840.4bb9e123.png"},5601:function(t,s,a){t.exports=a.p+"assets/img/image-20220417233010919.51400c92.png"},8643:function(t,s,a){"use strict";a.r(s);var e=a(5),p=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_40-接口-静态方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_40-接口-静态方法"}},[t._v("#")]),t._v(" 40.接口-静态方法")]),t._v(" "),e("p",[t._v("​\t\tStatic Methods")]),t._v(" "),e("p",[t._v("​\tJava近年来引入的另一个糟糕的特性是，在我们的接口中定义静态方法")]),t._v(" "),e("p",[t._v("​\t例如我们可以定义一个静态的方法：并传入2个参数")]),t._v(" "),e("p",[e("img",{attrs:{src:a(5597),alt:"image-20220417230232067"}})]),t._v(" "),e("p",[t._v("​\t这会有什么问题？ 问题是这个接口有实现，有实现逻辑代码，这种逻辑可以改变未来。现在我们要处理的是一个非常简单的减法逻辑可能永远不会改变，但我见过很多人向接口中添加很多行的方法，难以置信的是，这些人并不真正理解接口的用途，这里我们说的案例是计算完成某件事，我们听到常见的观点是，如果我们需要重用复用他们呢，实现此接口的所有类逻辑，那就是当你定义一个抽象类，把这个逻辑移动到那里，他就可以被所以的子类分享。")]),t._v(" "),e("p",[t._v("我们展示一下：我们新建一个抽象的税务计算器类")]),t._v(" "),e("p",[e("img",{attrs:{src:a(5598),alt:"image-20220417231347522"}})]),t._v(" "),e("p",[t._v("​\t然后加入关键字abstract ,然后实现接口，把刚刚的静态方法移到到这个 抽象的实现类中，这个方法应该是静态的，因为这是实现的细节，只有拥有具体的计算方法才应该使用静态方法。")]),t._v(" "),e("p",[t._v("​\t我们使用受保护的访问修饰符protected，所以我们从外部隐藏了此方法，但可以在继承的类中使用他")]),t._v(" "),e("p",[e("img",{attrs:{src:a(5599),alt:"image-20220417231856228"}})]),t._v(" "),e("p",[t._v("​\t现在我们回到具体的实现类中，我们继承一下这个抽象类，我们可以把实现的接口从这里去掉了，因为我们的抽象类已经实现过这个接口了")]),t._v(" "),e("p",[e("img",{attrs:{src:a(5600),alt:"image-20220417232402840"}})]),t._v(" "),e("p",[t._v("​\t然后我们现在可以使用继承的抽象类中的一些可以重用的方法逻辑，所以我们避免在接口中使用静态方法，我们可以在抽象类中去解决这种重用的问题，这样我们的接口的非常的干净了，无论我们何时定义逻辑，都不要在接口中定义，逻辑是属于在类中的。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(5601),alt:"image-20220417233010919"}})])])}),[],!1,null,null,null);s.default=p.exports}}]);