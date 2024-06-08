(window.webpackJsonp=window.webpackJsonp||[]).push([[361],{6538:function(s,n,t){s.exports=t.p+"assets/img/1650779123448.0b8db3ab.png"},6539:function(s,n,t){s.exports=t.p+"assets/img/1650779246983.19c652ab.png"},6540:function(s,n,t){s.exports=t.p+"assets/img/1650779530615.c2ffcfcb.png"},6541:function(s,n,t){s.exports=t.p+"assets/img/1650779648491.7af8f767.png"},6542:function(s,n,t){s.exports=t.p+"assets/img/1650780896303.71ec77d2.png"},6543:function(s,n,t){s.exports=t.p+"assets/img/1650781286539.b5e0f2fa.png"},6544:function(s,n,t){s.exports=t.p+"assets/img/1650781341474.3973b35b.png"},6545:function(s,n,t){s.exports=t.p+"assets/img/1650782677264.ec2b97d8.png"},8767:function(s,n,t){"use strict";t.r(n);var e=t(5),a=Object(e.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"_18-k8s核心实战-kubectl命令行方式创建pod"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_18-k8s核心实战-kubectl命令行方式创建pod"}},[s._v("#")]),s._v(" 18.k8s核心实战-kubectl命令行方式创建pod")]),s._v(" "),e("p",[s._v("​\t如果我们以命令行的方式创建--例如名为mynginx的pod")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("kubectl run mynginx --image"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nginx\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:t(6538),alt:"1650779123448"}})]),s._v(" "),e("p",[s._v("创建的pod在默认的名称空间")]),s._v(" "),e("p",[e("img",{attrs:{src:t(6539),alt:"1650779246983"}})]),s._v(" "),e("p",[s._v("​\t我们现在新建的pod正在构建中，构建容器并且在容器中下载和启动nginx")]),s._v(" "),e("p",[s._v("​\t然后我们也可以使用描述命令来描述一下他 使用"),e("strong",[s._v("kubectl describe pod podName")])]),s._v(" "),e("p",[e("img",{attrs:{src:t(6540),alt:"1650779530615"}})]),s._v(" "),e("p",[s._v("我们可以看到事件的描述信息")]),s._v(" "),e("p",[s._v("​\t例如：97秒前，message提示成功的将nginx分配给k8s-node2，相当于我们目前集群有3台机器，k8s帮我们在集群的k8s-node2这个机器上启动了一个pod")]),s._v(" "),e("p",[s._v("​\t\t然后是pulling 使用kubelet 也就是node2这个节点的厂长负责 pulling images nginx 下载这个nginx镜像")]),s._v(" "),e("p",[s._v("​\t\t然后是在26秒前，下载nginx成功 用时 1份10秒")]),s._v(" "),e("p",[s._v("​\t\t然后是25秒前，Created 创建容器叫mynginx")]),s._v(" "),e("p",[s._v("​\t\t最后在25秒前，Started 启动mynginx容器")]),s._v(" "),e("p",[e("img",{attrs:{src:t(6541),alt:"1650779648491"}})]),s._v(" "),e("p",[s._v("我们等到容器启动成功后，查看一下pod，pod就是running状态了")]),s._v(" "),e("p",[e("img",{attrs:{src:t(6542),alt:"1650780896303"}})]),s._v(" "),e("p",[s._v("​\t那么k8s将pod分配到node2节点上了，所以一定是在node2节点才能看到，我怎么知道能在node2节点看到呢？可以让节点全部运行 docker ps 这个命令，因为我们这个pod还是以容器的方式运行的，只不过k8s封装了一下，docker ps | grep mynginx 过滤一下为mynginx的容器")]),s._v(" "),e("p",[s._v("​\t我们执行一下，发现master没有输出任何内容")]),s._v(" "),e("p",[e("img",{attrs:{src:t(6543),alt:"1650781286539"}})]),s._v(" "),e("p",[s._v("而我们的node2节点就打印出内容了")]),s._v(" "),e("p",[s._v("​\t我们看到nginx是在这里启动起来了，我们看到容器dcc 以nginx启动的应用")]),s._v(" "),e("p",[e("img",{attrs:{src:t(6544),alt:"1650781341474"}})]),s._v(" "),e("p",[s._v("包括docker images 可以看到--nginx镜像只在node2节点上")]),s._v(" "),e("p",[e("img",{attrs:{src:t(6545),alt:"1650782677264"}})]),s._v(" "),e("p",[s._v("以上就是我们说的 我们使用一个命令创建了一个k8s的pod")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("kubectl run mynginx --image=nginx\n\n# 查看default名称空间的Pod\nkubectl get pod \n# 描述\nkubectl describe pod 你自己的Pod名字\n# 删除\nkubectl delete pod Pod名字\n# 查看Pod的运行日志\nkubectl logs Pod名字\n\n# 每个Pod - k8s都会分配一个ip\nkubectl get pod -owide\n# 使用Pod的ip+pod里面运行容器的端口\ncurl 192.168.169.136\n\n# 集群中的任意一个机器以及任意的应用都能通过Pod分配的ip来访问这个Pod\n\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])])])}),[],!1,null,null,null);n.default=a.exports}}]);