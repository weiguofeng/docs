(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{6995:function(t,s,a){t.exports=a.p+"assets/img/1651218479060.f5021f06.png"},6996:function(t,s,a){t.exports=a.p+"assets/img/1651221646224.4f8d28dd.png"},6997:function(t,s,a){t.exports=a.p+"assets/img/1651221749389.c70e294e.png"},6998:function(t,s,a){t.exports=a.p+"assets/img/1651221941449.522185ff.png"},6999:function(t,s,a){t.exports=a.p+"assets/img/1651222102709.c8741940.png"},7e3:function(t,s,a){t.exports=a.p+"assets/img/1651222215949.8c3e093d.png"},7001:function(t,s,a){t.exports=a.p+"assets/img/1651222811437.c70003a2.png"},7002:function(t,s,a){t.exports=a.p+"assets/img/1651222942785.0de8a1cc.png"},7003:function(t,s,a){t.exports=a.p+"assets/img/1651223272574.a6b3af52.png"},7004:function(t,s,a){t.exports=a.p+"assets/img/1651223365614.482b9200.png"},7005:function(t,s,a){t.exports=a.p+"assets/img/1651223521269.ab5a88da.png"},7006:function(t,s,a){t.exports=a.p+"assets/img/1651223741795.c1acabb3.png"},7007:function(t,s,a){t.exports=a.p+"assets/img/1651225902896.47f0ce8a.png"},9132:function(t,s,a){"use strict";a.r(s);var n=a(5),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_39-k8s核心实战-存储抽象-deployment使用nfs进行挂载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_39-k8s核心实战-存储抽象-deployment使用nfs进行挂载"}},[t._v("#")]),t._v(" 39.k8s核心实战-存储抽象-Deployment使用NFS进行挂载")]),t._v(" "),n("h4",{attrs:{id:"原生方式数据挂载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原生方式数据挂载"}},[t._v("#")]),t._v(" 原生方式数据挂载")]),t._v(" "),n("p",[t._v("​\t\t比如我们现在这里有yaml文件，首先kind是Deployment是一次部署，这次部署一定会使用一些镜像在containers --image声明用nginx镜像，这样我们就以2个副本使用Nginx镜像部署的Pod")]),t._v(" "),n("p",[n("img",{attrs:{src:a(6995),alt:"1651218479060"}})]),t._v(" "),n("p",[t._v("​\t而每一个容器又需要挂载 volumeMounts就是我们的资源挂载，资源挂载下面有一个mountPath这个就代表我当前这个Nginx容器内部的/usr/share/nginx/html挂到外面，挂到外面叫什么名字呢叫html这个挂载的名字随便起。")]),t._v(" "),n("p",[t._v("​\t而html是怎么的挂载方式是在下面声明的：在volumes有一个名叫html这种方式的挂载，然后下面是nfs代表使用nfs网络文件系统的，相当于是我们的容器的mountPath指定的路径 映射到 nfs的path路径，server是NFS的文件系统服务IP")]),t._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apps/v1\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deployment\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("demo\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("demo\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replicas")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchLabels")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("demo\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("demo\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumeMounts")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" html\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPath")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /usr/share/nginx/html\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" html\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nfs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 172.31.0.4\n            "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /nfs/data/nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pv\n            \n            \n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br")])]),n("p",[t._v("​\t我们这段yaml翻译过来就是这么个图例：")]),t._v(" "),n("p",[t._v("​\t\t因为我们启动的是2个Pod，就相当于这2个Pod会共用一个路径，也就是说接下来我们在这个网络文件系统NFS上，只要我们一修改我们nginx-pv文件夹里面的内容，这俩个Pod里面的内容相当于都改了")]),t._v(" "),n("p",[n("img",{attrs:{src:a(6996),alt:"1651221646224"}})]),t._v(" "),n("p",[t._v("​\t现在我们把这个案例yaml文件测试运行一下：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(6997),alt:"1651221749389"}})]),t._v(" "),n("p",[t._v("​\t執行完之后我们来看一下这个Pod，有俩个nginx-pv-demo的Pod")]),t._v(" "),n("p",[n("img",{attrs:{src:a(6998),alt:"1651221941449"}})]),t._v(" "),n("p",[t._v("​")]),t._v(" "),n("p",[t._v("​\t我们来到可视化界面看一下我们的这俩个Pod一直都没有好")]),t._v(" "),n("p",[n("img",{attrs:{src:a(6999),alt:"1651222102709"}})]),t._v(" "),n("p",[t._v("​\t键入后来到事件中查看一下--发现我们挂载卷的时候有问题")]),t._v(" "),n("p",[t._v("​\t\t问题的原因是mount nfs ：mounting 172.31.0.4：/nfs/data/nginx-pv 我们需要有这个目录，但是No such file or director  ,也就是说想要挂载之前，先创建这个目录")]),t._v(" "),n("p",[n("img",{attrs:{src:a(7e3),alt:"1651222215949"}})]),t._v(" "),n("p",[t._v("​\t创建nginx-pv文件夹")]),t._v(" "),n("p",[n("img",{attrs:{src:a(7001),alt:"1651222811437"}})]),t._v(" "),n("p",[t._v("​\t然后我们把这个deployment先删除一下，重新创建一下")]),t._v(" "),n("p",[n("img",{attrs:{src:a(7002),alt:"1651222942785"}})]),t._v(" "),n("p",[t._v("​\t重新创建后我们看一下这个Pod的详情，发现是启动没有问题的")]),t._v(" "),n("p",[n("img",{attrs:{src:a(7003),alt:"1651223272574"}})]),t._v(" "),n("p",[t._v("​\t那么现在我们相当于在这个/nfs/data/nginx-pv下修改页面，这2个Pod也就都改了")]),t._v(" "),n("p",[n("img",{attrs:{src:a(7004),alt:"1651223365614"}})]),t._v(" "),n("p",[t._v("​\t我们测试一下：我们在nginx-pv目录下 输出一个1111222内容到index.html")]),t._v(" "),n("p",[n("img",{attrs:{src:a(7005),alt:"1651223521269"}})]),t._v(" "),n("p",[t._v("​\t我们现在到这2个Pod中确定一下，我们的这个NFS文件系统有没有挂载进去到容器中内容，我们从可视化窗口执行进入：发现是挂载上的NFS系统会自动为我们同步内容")]),t._v(" "),n("p",[n("img",{attrs:{src:a(7006),alt:"1651223741795"}})]),t._v(" "),n("p",[t._v("​\t这就是我们使用原生的方式，只要NFS系统搭建起来我们就可以进行挂载同步了，核心就是yaml的配置文件volumeMounts，volumes这俩个参数及下面配置的内容")]),t._v(" "),n("p",[t._v("​\t如果我们不想使用NFS想使用其他的文件系统，那么配置文件中切换一下就可以了")]),t._v(" "),n("p",[n("img",{attrs:{src:a(7007),alt:"1651225902896"}})]),t._v(" "),n("p",[t._v("​")]),t._v(" "),n("p",[t._v("​")]),t._v(" "),n("p",[t._v("​")]),t._v(" "),n("p",[t._v("​")])])}),[],!1,null,null,null);s.default=e.exports}}]);