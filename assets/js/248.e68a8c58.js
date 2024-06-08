(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{6526:function(t,s,a){t.exports=a.p+"assets/img/1650764908614.694d7a72.png"},6527:function(t,s,a){t.exports=a.p+"assets/img/1650765881025.d480db66.png"},6528:function(t,s,a){t.exports=a.p+"assets/img/1650765942331.560c80f1.png"},6529:function(t,s,a){t.exports=a.p+"assets/img/1650766103080.0a25ee91.png"},6530:function(t,s,a){t.exports=a.p+"assets/img/1650766948957.d7aa3b5e.png"},6531:function(t,s,a){t.exports=a.p+"assets/img/1650767179693.f227d796.png"},6532:function(t,s,a){t.exports=a.p+"assets/img/1650767469454.0f62f26f.png"},6533:function(t,s,a){t.exports=a.p+"assets/img/1650767419150.4be73491.png"},6534:function(t,s,a){t.exports=a.p+"assets/img/1650767734880.341ab37b.png"},6535:function(t,s,a){t.exports=a.p+"assets/img/1650767969779.201795fa.png"},6536:function(t,s,a){t.exports=a.p+"assets/img/1650768007770.e009acfb.png"},6537:function(t,s,a){t.exports=a.p+"assets/img/1650768151402.202274ba.png"},8766:function(t,s,a){"use strict";a.r(s);var e=a(5),p=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_16-k8s核心实战-namespace"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_16-k8s核心实战-namespace"}},[t._v("#")]),t._v(" 16.k8s核心实战-NameSpace")]),t._v(" "),e("p",[t._v("​\t\t我们前面已经部署好可视化界面dashboard了，我们发现如果长时间不使用也会退出这个web界面，那么就需要重新输入token，所以我们把这个token最好给记下来。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(6526),alt:"1650764908614"}})]),t._v(" "),e("h2",{attrs:{id:"_1-k8s资源创建方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-k8s资源创建方式"}},[t._v("#")]),t._v(" 1.k8s资源创建方式")]),t._v(" "),e("p",[t._v("​\t所谓的资源创建方式就是k8s未来需要很多资源集成 或者可以叫他们是k8s的对象，有各种不同类型的资源，如果想创建这些东西呢，可以有2种方式：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("- 1.可以使用命令行的方式创建资源\n- 2.可以使用YAML的方式进行创建资源--然后使用kubectl apply -f **.yaml 命令创建资源\n")])])]),e("p",[t._v("我们下面聊一下k8s中，第一种核心资源Namespace")]),t._v(" "),e("h2",{attrs:{id:"_2-k8s-namespace"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-k8s-namespace"}},[t._v("#")]),t._v(" 2.k8s-Namespace")]),t._v(" "),e("p",[t._v("​\t名称空间是用来隔离资源的，或者说是对这些资源进行分组的")]),t._v(" "),e("p",[t._v("​\t默认只是隔离资源，并不会隔离网络")]),t._v(" "),e("p",[e("img",{attrs:{src:a(6527),alt:"1650765881025"}})]),t._v(" "),e("p",[t._v("k8s会默认带几个名称空间，例如以下几个我们可以在dashboard中看到")]),t._v(" "),e("p",[e("img",{attrs:{src:a(6528),alt:"1650765942331"}})]),t._v(" "),e("p",[t._v("如果我们使用命令的方式查看的话 kubectl get 想获取资源都是get ，如果获取名称空间可以使用kubectl get namespace 或 ns（namespace的缩写）")]),t._v(" "),e("p",[e("img",{attrs:{src:a(6529),alt:"1650766103080"}})]),t._v(" "),e("p",[t._v("另外我们kubectl get pods 这个是查看在k8s中部署的所有应用，每一个应用我们称为pod， -A参数就是all全部")]),t._v(" "),e("p",[t._v("​\t我们可以看到每个应用的名称-都有属于自己的名称空间")]),t._v(" "),e("p",[e("img",{attrs:{src:a(6530),alt:"1650766948957"}})]),t._v(" "),e("p",[t._v("有时候kubectl get pods不加-A，可能什么也没有，原因是默认查看的是默认名称空间，因为默认名称空间没有东西，所以没有显示内容")]),t._v(" "),e("p",[t._v("如果我们想单独看一下 kubernetes-dashboard这个命名空间下部署了哪些应用，可以使用kubectl get pod -n 名称空间")]),t._v(" "),e("p",[e("img",{attrs:{src:a(6531),alt:"1650767179693"}})]),t._v(" "),e("p",[t._v("如果-我们删除一个命名空间kubectl delete ns namespace，而且删除名称空间会把这个名称空间下所有资源连带删除")]),t._v(" "),e("p",[e("img",{attrs:{src:a(6532),alt:"1650767469454"}})]),t._v(" "),e("p",[t._v("创建一个namespace")]),t._v(" "),e("p",[e("img",{attrs:{src:a(6533),alt:"1650767419150"}})]),t._v(" "),e("h4",{attrs:{id:"如果我们使用配置文件的方式也是可以的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如果我们使用配置文件的方式也是可以的"}},[t._v("#")]),t._v(" 如果我们使用配置文件的方式也是可以的")]),t._v(" "),e("p",[t._v("​\tAPIVersion-版本号，kind-资源类型，如Namespace，metedata-元数据，如name：hello那么就相当于要创建一个名称为hello的名称空间")]),t._v(" "),e("p",[e("img",{attrs:{src:a(6534),alt:"1650767734880"}})]),t._v(" "),e("p",[t._v("例如，我们vi一个yarm文件，然后k8s应用一下")]),t._v(" "),e("p",[e("img",{attrs:{src:a(6535),alt:"1650767969779"}})]),t._v(" "),e("p",[t._v("我们发现这样的方式也可以创建名称空间")]),t._v(" "),e("p",[e("img",{attrs:{src:a(6536),alt:"1650768007770"}})]),t._v(" "),e("p",[t._v("如果我们使用配置文件的方式创建的，那么删除的时候如果配置文件还在的话，那么我们也指定一下配置文件，然后就将这个配置文件创建的所有资源都删除掉了")]),t._v(" "),e("p",[e("img",{attrs:{src:a(6537),alt:"1650768151402"}})])])}),[],!1,null,null,null);s.default=p.exports}}]);