(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{7998:function(s,t,n){s.exports=n.p+"assets/img/1643354047252.dc5e6917.png"},7999:function(s,t,n){s.exports=n.p+"assets/img/1643354217135.feeeabc0.png"},8e3:function(s,t,n){s.exports=n.p+"assets/img/1643354296935.bfb178ba.png"},8001:function(s,t,n){s.exports=n.p+"assets/img/1643354317240.3d0114f1.png"},8002:function(s,t,n){s.exports=n.p+"assets/img/1643354428563.0a655556.png"},8003:function(s,t,n){s.exports=n.p+"assets/img/1643354529504.2b4043af.png"},8004:function(s,t,n){s.exports=n.p+"assets/img/1643354696665.51f972be.png"},8005:function(s,t,n){s.exports=n.p+"assets/img/1643355050427.abcca231.png"},8006:function(s,t,n){s.exports=n.p+"assets/img/1643355103958.2f3b0e40.png"},8007:function(s,t,n){s.exports=n.p+"assets/img/1643355226827.2ec7e726.png"},8008:function(s,t,n){s.exports=n.p+"assets/img/1643355352151.d6480e67.png"},8009:function(s,t,n){s.exports=n.p+"assets/img/1643355467344.53d7df70.png"},8010:function(s,t,n){s.exports=n.p+"assets/img/1643355688843.1b01d550.png"},8011:function(s,t,n){s.exports=n.p+"assets/img/1643355783097.990607de.png"},8012:function(s,t,n){s.exports=n.p+"assets/img/1643355901722.2a631165.png"},8013:function(s,t,n){s.exports=n.p+"assets/img/1643355970303.db184c1d.png"},8014:function(s,t,n){s.exports=n.p+"assets/img/1643356215631.674c6477.png"},8015:function(s,t,n){s.exports=n.p+"assets/img/1643356267504.86e42da7.png"},8016:function(s,t,n){s.exports=n.p+"assets/img/1643356316501.797c2016.png"},8017:function(s,t,n){s.exports=n.p+"assets/img/1643356430301.c5056329.png"},9567:function(s,t,n){"use strict";n.r(t);var a=n(5),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_10-容器化-命令-镜像推送"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-容器化-命令-镜像推送"}},[s._v("#")]),s._v(" 10.容器化-命令-镜像推送")]),s._v(" "),a("h2",{attrs:{id:"_5、推送远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、推送远程仓库"}},[s._v("#")]),s._v(" 5、推送远程仓库")]),s._v(" "),a("p",[s._v("推送镜像到docker hub；应用市场")]),s._v(" "),a("p",[s._v("​\t其实这种方式最方便了，我们推送到仓库，然后想使用的时候直接从仓库下载就好了")]),s._v(" "),a("p",[s._v("想要真正的推送到docker hub 的仓库 必须先有账户，需要先注册登录")]),s._v(" "),a("p",[a("img",{attrs:{src:n(7998),alt:"1643354047252"}})]),s._v(" "),a("p",[s._v("登录后就可以查看到自己之前推送过的一些镜像，还有下载的次数")]),s._v(" "),a("p",[a("img",{attrs:{src:n(7999),alt:"1643354217135"}})]),s._v(" "),a("p",[s._v("如果想删除掉某个镜像的话--点击settings")]),s._v(" "),a("p",[a("img",{attrs:{src:n(8e3),alt:"1643354296935"}})]),s._v(" "),a("p",[s._v("​\t然后点击删除资源")]),s._v(" "),a("p",[a("img",{attrs:{src:n(8001),alt:"1643354317240"}})]),s._v(" "),a("p",[s._v("我们在推送镜像的时候，先在docker hub 上面创建一个仓库")]),s._v(" "),a("p",[a("img",{attrs:{src:n(8002),alt:"1643354428563"}})]),s._v(" "),a("p",[s._v("设置一个仓库的名称（一般就是我们推送镜像的名称）--设置公共的或者是私有的")]),s._v(" "),a("p",[s._v("​\t右侧有Pro tip 提示，就是如何能将镜像推送到此仓库的命令")]),s._v(" "),a("p",[a("img",{attrs:{src:n(8003),alt:"1643354529504"}})]),s._v(" "),a("p",[s._v("创建")]),s._v(" "),a("p",[a("img",{attrs:{src:n(8004),alt:"1643354696665"}})]),s._v(" "),a("p",[s._v("docker tag local-image:tagname new-repo:tagname")]),s._v(" "),a("p",[s._v("这个命令的理解是 tag 打标签 local-image.tagname 是本地镜像的标签名称   new-repo:tagname是新的仓库名称和版本名称")]),s._v(" "),a("p",[a("img",{attrs:{src:n(8005),alt:"1643355050427"}})]),s._v(" "),a("p",[s._v("我们查看一下镜像--发现多了一个镜像，而且他多了一个标识头/")]),s._v(" "),a("p",[a("img",{attrs:{src:n(8006),alt:"1643355103958"}})]),s._v(" "),a("p",[s._v("接下来我们就push 往上推送就可以了")]),s._v(" "),a("p",[s._v("​\t\t我们在推送的时候发现需要登录才可以--需要先登录才可以")]),s._v(" "),a("p",[a("img",{attrs:{src:n(8007),alt:"1643355226827"}})]),s._v(" "),a("p",[s._v("docker login---输入的用户名和密码，就是登录docker hub的用户名和密码")]),s._v(" "),a("p",[a("img",{attrs:{src:n(8008),alt:"1643355352151"}})]),s._v(" "),a("p",[s._v("登录成功后会有提示 Succeeded --只需要登录一次就可以无限的推送了")]),s._v(" "),a("p",[s._v("​\t\t一般我们推送完成后还是建议推出， docker logout")]),s._v(" "),a("p",[a("img",{attrs:{src:n(8009),alt:"1643355467344"}})]),s._v(" "),a("p",[s._v("推送成功")]),s._v(" "),a("p",[a("img",{attrs:{src:n(8010),alt:"1643355688843"}})]),s._v(" "),a("p",[s._v("推送成功后我们就可以在docker hub中的仓库里查看的到了")]),s._v(" "),a("p",[a("img",{attrs:{src:n(8011),alt:"1643355783097"}})]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" tag local-image:tagname new-repo:tagname\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" push new-repo:tagname\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把旧镜像的名字，改成仓库要求的新版名字")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" tag guignginx:v1.0 leifengyang/guignginx:v1.0\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 登录到docker hub")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" login       \n\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" logout（推送完成镜像后退出）\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推送")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" push leifengyang/guignginx:v1.0\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 别的机器下载")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull leifengyang/guignginx:v1.0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("我们在其他服务器上进行下载：")]),s._v(" "),a("p",[s._v("​\t\t首先找到镜像copy 下载命令")]),s._v(" "),a("p",[a("img",{attrs:{src:n(8012),alt:"1643355901722"}})]),s._v(" "),a("p",[s._v("进行下载")]),s._v(" "),a("p",[a("img",{attrs:{src:n(8013),alt:"1643355970303"}})]),s._v(" "),a("p",[s._v("下载完成--我们查看一下这个镜像")]),s._v(" "),a("p",[a("img",{attrs:{src:n(8014),alt:"1643356215631"}})]),s._v(" "),a("p",[s._v("然后我们再启动一下这个镜像")]),s._v(" "),a("p",[a("img",{attrs:{src:n(8015),alt:"1643356267504"}})]),s._v(" "),a("p",[s._v("没有问题，请求到的就是我们上传修改过的镜像")]),s._v(" "),a("p",[a("img",{attrs:{src:n(8016),alt:"1643356316501"}})]),s._v(" "),a("p",[s._v("如果是我们使用的内网，或者是不方便使用外网，那么就使用下载到U盘来存储的tar压缩包的方式来相互传输使用")]),s._v(" "),a("p",[s._v("实验完成后，别忘记把服务器关机，因为我们是按量付费的，关机后会减少一些费用")]),s._v(" "),a("p",[a("img",{attrs:{src:n(8017),alt:"1643356430301"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);