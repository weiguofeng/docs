(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{6824:function(s,t,a){s.exports=a.p+"assets/img/1651739346170.e8db79ea.png"},6825:function(s,t,a){s.exports=a.p+"assets/img/1651745494131.2553bb0c.png"},6826:function(s,t,a){s.exports=a.p+"assets/img/1651817637990.5786c990.png"},6827:function(s,t,a){s.exports=a.p+"assets/img/1651818361283.35058eaf.png"},6828:function(s,t,a){s.exports=a.p+"assets/img/1651818564709.eea48e4c.png"},6829:function(s,t,a){s.exports=a.p+"assets/img/1651818711682.b13b7a5d.png"},6830:function(s,t,a){s.exports=a.p+"assets/img/1651819340640.e3a0a822.png"},6831:function(s,t,a){s.exports=a.p+"assets/img/1651819725974.983193bf.png"},6832:function(s,t,a){s.exports=a.p+"assets/img/1651819860342.eb625ed5.png"},6833:function(s,t,a){s.exports=a.p+"assets/img/1651820407522.26a591cf.png"},6834:function(s,t,a){s.exports=a.p+"assets/img/1651820516468.679753fb.png"},6835:function(s,t,a){s.exports=a.p+"assets/img/1651821172372.853f991c.png"},8883:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_40-k8s核心实战-存储抽象-pv与pvc使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_40-k8s核心实战-存储抽象-pv与pvc使用"}},[s._v("#")]),s._v(" 40.k8s核心实战-存储抽象-PV与PVC使用")]),s._v(" "),n("p",[s._v("​\t之前我们测试了使用原生的方式进行挂载，使用原生的挂载方式会产生一些问题")]),s._v(" "),n("p",[s._v("​\t例如：我们的Pod都挂载在/nfs/data/nginx-pv")]),s._v(" "),n("p",[s._v("​\t\t\t\t\t1.每个节点的文件夹需要我们创建")]),s._v(" "),n("p",[s._v("​\t\t\t\t\t2.如果我们其中一个Pod不要了把这个Pod删除了-挂载的内容不会被删除，我们可能后续是删除Pod的时候是需要删除挂载的数据的")]),s._v(" "),n("p",[s._v("​\t\t\t\t\t3.我们这2个Pod挂载的是nginx-pv这个目录，其他的Pod可能挂载在b目录，但是默认对他们可以使用多少的空间没有限制，我们后续是需要对挂载的文件夹有一个容量的控制的。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(6824),alt:"1651739346170"}})]),s._v(" "),n("p",[s._v("​\t\t我们了解一下k8s的PV和PVC模式")]),s._v(" "),n("h2",{attrs:{id:"_1、pv-pvc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、pv-pvc"}},[s._v("#")]),s._v(" 1、PV&PVC")]),s._v(" "),n("p",[n("em",[s._v("PV：持久卷（Persistent Volume），将应用需要持久化的数据保存到指定位置")])]),s._v(" "),n("p",[n("em",[s._v("PVC：持久卷申明（"),n("strong",[s._v("Persistent Volume Claim")]),s._v("），申明需要使用的持久卷规格")])]),s._v(" "),n("p",[s._v("​\t持久卷：我们可以理解为就是挂载的文件夹可以在这里保存一些东西如nginx-pv这个文件夹")]),s._v(" "),n("p",[s._v("​\tPVC：其实就像一个申请，就是我们挂载到外面的文件夹需要写一个申请书，然后是申请多大的空间，然后就给开通一个申请大小的文件夹空间，相当于一个申请书和一个实际的空间进行一个绑定，这样的话你的哪个Pod删除了你可以带着这个申请书也删除掉，这就是我们说的pv与pvc")]),s._v(" "),n("p",[s._v("​\t\t假如这个PVC需要的空间是900M那么也会智能k8s给分配空间分配到如下图 1G的空间资源")]),s._v(" "),n("p",[n("img",{attrs:{src:a(6825),alt:"1651745494131"}})]),s._v(" "),n("h4",{attrs:{id:"_2、实战测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、实战测试"}},[s._v("#")]),s._v(" 2、实战测试")]),s._v(" "),n("h4",{attrs:{id:"_2-1-创建pv持久卷"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-创建pv持久卷"}},[s._v("#")]),s._v(" 2.1：创建PV持久卷")]),s._v(" "),n("p",[s._v("​\t首先我们先创建这个PV池，在后续我们想要那个PV挂载的话，我们就写一个申请书就可以了")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#nfs主节点\nmkdir -p /nfs/data/01\nmkdir -p /nfs/data/02\nmkdir -p /nfs/data/03\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("我们先创建几个文件夹 在主节点上--静态供应")]),s._v(" "),n("p",[n("img",{attrs:{src:a(6826),alt:"1651817637990"}})]),s._v(" "),n("p",[s._v("创建PV池，使用yaml的方式")]),s._v(" "),n("p",[s._v("​\t\t三个--- 代表分割一个文档，kind资源类型：PersistentVolume代表持久卷类型")]),s._v(" "),n("p",[s._v("​\t\tcapacity限制容量--storage是容量如10M")]),s._v(" "),n("p",[s._v("​\t\tReadWriteMany是可读可写")]),s._v(" "),n("p",[s._v("​\t\tnfs--server：注意这个是nfs的服务器IP")]),s._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" PersistentVolume\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" pv01"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("10m\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("capacity")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("storage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10M\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("accessModes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ReadWriteMany\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("storageClassName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nfs\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nfs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /nfs/data/01\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 172.31.0.4\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" PersistentVolume\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" pv02"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("1gi\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("capacity")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("storage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1Gi\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("accessModes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ReadWriteMany\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("storageClassName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nfs\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nfs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /nfs/data/02\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 172.31.0.4\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" PersistentVolume\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" pv03"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("3gi\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("capacity")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("storage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 3Gi\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("accessModes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ReadWriteMany\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("storageClassName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nfs\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nfs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /nfs/data/03\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 172.31.0.4\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br")])]),n("p",[s._v("​\t然后我们编辑一下这个文件应用一下，发现有个错误，原因是起名有大写，应该使用小写 如：pv01-10m")]),s._v(" "),n("p",[n("img",{attrs:{src:a(6827),alt:"1651818361283"}})]),s._v(" "),n("p",[s._v("​\t修改完之后，我们重新应用就好了")]),s._v(" "),n("p",[n("img",{attrs:{src:a(6828),alt:"1651818564709"}})]),s._v(" "),n("p",[s._v("​\t我们创建了持久卷资源，我们现在看一下k8s中有多少持久卷资源--使用kubectl get persistentvolume")]),s._v(" "),n("p",[n("img",{attrs:{src:a(6829),alt:"1651818711682"}})]),s._v(" "),n("h4",{attrs:{id:"_2-2-pvc创建与绑定"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-pvc创建与绑定"}},[s._v("#")]),s._v(" 2.2 PVC创建与绑定")]),s._v(" "),n("p",[s._v("​\t其实就相当于我们写的绑定申请书")]),s._v(" "),n("p",[s._v("​\t创建PVC")]),s._v(" "),n("p",[s._v("​\t\t\tkind资源类型：PersistentVolumeClaim就是PVC持久卷声明")]),s._v(" "),n("p",[s._v("​\t\t\tReadWriteMany：是可读写")]),s._v(" "),n("p",[s._v("​\t\t\trequests--storage：是申请的资源大小，如200Mi")]),s._v(" "),n("p",[s._v("​\t\t\tstorageClassName：对应的是创建持久卷的时候填写的storageClassName也就是资源池")]),s._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" PersistentVolumeClaim\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pvc\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("accessModes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ReadWriteMany\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("resources")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("requests")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("storage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 200Mi\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("storageClassName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nfs\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("​\t然后写完申请书pvc，应用一下，应用前我们发现所有的PV状态都是Available可用的，等我们写完PVC然后应用后发现 有状态变为Bound了就是绑定了--是被CLNIM（申请书）下的nginx-pvc绑定了")]),s._v(" "),n("p",[s._v("​\t\t为什么需要200M却给分配了1G呢？ 因为一共3个PV持久卷10M的明显不够不能用，还有个3G的太大，所以k8s就帮我们挑选了个1G的PV")]),s._v(" "),n("p",[n("img",{attrs:{src:a(6830),alt:"1651819340640"}})]),s._v(" "),n("p",[s._v("​\t\t如果我们现在删除这个PVC")]),s._v(" "),n("p",[s._v("​\t\t我们可以看到状态变为Released就是资源被释放了")]),s._v(" "),n("p",[n("img",{attrs:{src:a(6831),alt:"1651819725974"}})]),s._v(" "),n("p",[s._v("我们再次应用，发现会重新绑定--由于资源还没有完全释放掉，所以这次给分配的PV是3G的PV")]),s._v(" "),n("p",[n("img",{attrs:{src:a(6832),alt:"1651819860342"}})]),s._v(" "),n("p",[s._v("现在我们使用Pod绑定PVC")]),s._v(" "),n("p",[s._v("​\t\t注意-我们以前创建部署的时候volumes直接挂载的是文件服务器，现在是volumes挂载到PVC持久卷 声明 上，如：claimName: nginx-pvc我们之前创建过这个PVC，这个pvc会指定持久卷及PV会指定文件服务器地址")]),s._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" apps/v1\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Deployment\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("deploy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pvc\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("deploy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pvc\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("replicas")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("selector")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("matchLabels")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("deploy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pvc\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("app")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("deploy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pvc\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containers")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumeMounts")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" html\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mountPath")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /usr/share/nginx/html\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" html\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("persistentVolumeClaim")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("claimName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pvc\n            \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br")])]),n("p",[n("img",{attrs:{src:a(6833),alt:"1651820407522"}})]),s._v(" "),n("p",[s._v("​\t我们看一下这个pvc，可以看到 nginx-pvc绑定的是pv03-3gi这个PV持久卷，CAPACITY是空间大小为3Gi，storageclass是存储分组类型")]),s._v(" "),n("p",[n("img",{attrs:{src:a(6834),alt:"1651820516468"}})]),s._v(" "),n("p",[s._v("​\t我们现在使用的是静态供应，就是提前创建好资源，而实际上还有一种动态供应，目前就是我们想创建一个PVC只能是在现有的PV中挑选最终返回一个空间符合的，但是当有了动态供应后，就是在我们创建持久卷声明PVC的时候 会自动给我们创建一个PV持久卷-这种称为动态供应")]),s._v(" "),n("p",[n("img",{attrs:{src:a(6835),alt:"1651821172372"}})]),s._v(" "),n("p",[s._v("https://www.bilibili.com/video/BV13Q4y1C7hS?p=64&spm_id_from=pageDriver")])])}),[],!1,null,null,null);t.default=e.exports}}]);