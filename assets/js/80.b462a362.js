(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{7469:function(t,a,s){t.exports=s.p+"assets/img/1644997050268.1c26d7b1.png"},7470:function(t,a,s){t.exports=s.p+"assets/img/1644997244661.699b3a53.png"},7471:function(t,a,s){t.exports=s.p+"assets/img/1644997341251.650239e1.png"},7472:function(t,a,s){t.exports=s.p+"assets/img/1644997437003.cfc34aa2.png"},7473:function(t,a,s){t.exports=s.p+"assets/img/1644997478637.ceeb3e19.png"},7474:function(t,a,s){t.exports=s.p+"assets/img/1644997581679.8ccd6542.png"},7475:function(t,a,s){t.exports=s.p+"assets/img/1644997727907.1bcc7464.png"},7476:function(t,a,s){t.exports=s.p+"assets/img/1644998030839.57d52846.png"},7477:function(t,a,s){t.exports=s.p+"assets/img/1644998108475.1240714e.png"},7478:function(t,a,s){t.exports=s.p+"assets/img/1644998262522.2de8583d.png"},7479:function(t,a,s){t.exports=s.p+"assets/img/1644998641637.7a9389a3.png"},7480:function(t,a,s){t.exports=s.p+"assets/img/1644998661342.339a9b68.png"},7481:function(t,a,s){t.exports=s.p+"assets/img/1644998682357.e5411d38.png"},7482:function(t,a,s){t.exports=s.p+"assets/img/1644998711572.2bb4e066.png"},7483:function(t,a,s){t.exports=s.p+"assets/img/1644999155044.ad128f99.png"},7484:function(t,a,s){t.exports=s.p+"assets/img/1644999268560.a049a53b.png"},7485:function(t,a,s){t.exports=s.p+"assets/img/1644999327262.a2e07dff.png"},7486:function(t,a,s){t.exports=s.p+"assets/img/1644999567747.c6b1910e.png"},7487:function(t,a,s){t.exports=s.p+"assets/img/1644999640673.448abd28.png"},7488:function(t,a,s){t.exports=s.p+"assets/img/1644999693648.2ada8824.png"},7489:function(t,a,s){t.exports=s.p+"assets/img/1645000573272.06a16725.png"},7490:function(t,a,s){t.exports=s.p+"assets/img/1645000694152.adec01ca.png"},7491:function(t,a,s){t.exports=s.p+"assets/img/1645000779435.49a42885.png"},7492:function(t,a,s){t.exports=s.p+"assets/img/1645000837412.182d0a26.png"},8936:function(t,a,s){"use strict";s.r(a);var r=s(5),p=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"_16-容器化-进阶-dockerfile构建任意应用镜像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_16-容器化-进阶-dockerfile构建任意应用镜像"}},[t._v("#")]),t._v(" 16.容器化-进阶-Dockerfile构建任意应用镜像")]),t._v(" "),r("h2",{attrs:{id:"将应用打包成镜像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#将应用打包成镜像"}},[t._v("#")]),t._v(" 将应用打包成镜像")]),t._v(" "),r("p",[t._v("​\t以前：我们就是将java应用，打包为jar包或者war包来进行部署的")]),t._v(" "),r("p",[t._v("​\t\t\t\t把jar包或者是war包上传到服务器")]),t._v(" "),r("p",[t._v("​\t这样的不好的地方就是，每次部署每次都需要部署一个可执行的环境，配置jdk，环境变量等等。今天一个java的明天一个python的后天一个前端的，每天整的都玩环境了，比较繁琐。")]),t._v(" "),r("p",[t._v("​\t我们希望以后，所有机器都安装docker，任何应用都是镜像，所有机器都可以运行镜像")]),t._v(" "),r("p",[t._v("​\t现在：我们就希望将所有的应用都打包为镜像")]),t._v(" "),r("p",[t._v("​\t\t\t就会使用到dockerfile这个dockerfile就是来指定我们如何打包的")]),t._v(" "),r("p",[t._v("​\t\t\t比如一个java的应用：先创建一个dockerfile文件")]),t._v(" "),r("p",[r("img",{attrs:{src:s(7469),alt:"1644997050268"}})]),t._v(" "),r("p",[t._v("然后这个dockerfile中的内容该如何来写呢？")]),t._v(" "),r("p",[t._v("​\t任何应用都需要一个基础的环境，那么就需要打包的基础命令FROM--那么我们是java应用，就需要java的基础环境，我们到docker hub中去寻找一下")]),t._v(" "),r("p",[t._v("​\tjava环境我们一般使用的是openJDK")]),t._v(" "),r("p",[r("img",{attrs:{src:s(7470),alt:"1644997244661"}})]),t._v(" "),r("p",[t._v("然后我们搜索一下jdk的版本比如8，在tags中搜索8-jdk")]),t._v(" "),r("p",[r("img",{attrs:{src:s(7471),alt:"1644997341251"}})]),t._v(" "),r("p",[r("img",{attrs:{src:s(7472),alt:"1644997437003"}})]),t._v(" "),r("p",[t._v("然后dockerfile中在from中加入jdk的版本")]),t._v(" "),r("p",[r("img",{attrs:{src:s(7473),alt:"1644997478637"}})]),t._v(" "),r("p",[t._v("然后就是LABLE maintainer= 作者姓名  这个是固定的写法")]),t._v(" "),r("p",[r("img",{attrs:{src:s(7474),alt:"1644997581679"}})]),t._v(" "),r("p",[t._v("​\t然后再往下就需要写EntryPoint这个就是镜像的启动命令 或者 写CMD都可以")]),t._v(" "),r("p",[t._v("​\t这个意思就是 java -jar java-demo.....")]),t._v(" "),r("p",[r("img",{attrs:{src:s(7475),alt:"1644997727907"}})]),t._v(" "),r("p",[t._v("那么这个命令执行的时候这个jar包从哪里获取过来呢？")]),t._v(" "),r("p",[r("img",{attrs:{src:s(7476),alt:"1644998030839"}})]),t._v(" "),r("p",[t._v("​\t"),r("strong",[t._v("这步非常重要")])]),t._v(" "),r("p",[t._v("​\t我们需要从target中copy  jar 包到 容器中（相当于小linux中的根目录的app.jar）--然后启动命令中的jar包也需要修改一下，修改为copy过来的jar包")]),t._v(" "),r("p",[r("img",{attrs:{src:s(7477),alt:"1644998108475"}})]),t._v(" "),r("p",[r("img",{attrs:{src:s(7478),alt:"1644998262522"}})]),t._v(" "),r("p",[t._v("​\t我们现在需要将target（需要target下的jar包） 和 dockerfile 上传到linux服务器")]),t._v(" "),r("p",[t._v("我们通过ftp的方式将文件拖入到linux服务器中（aaa文件夹中放的就是target文件和dockerfile文件）")]),t._v(" "),r("p",[r("img",{attrs:{src:s(7479),alt:"1644998641637"}})]),t._v(" "),r("p",[r("img",{attrs:{src:s(7480),alt:"1644998661342"}})]),t._v(" "),r("p",[r("img",{attrs:{src:s(7481),alt:"1644998682357"}})]),t._v(" "),r("p",[t._v("确认一下target下的jar包是否存在")]),t._v(" "),r("p",[r("img",{attrs:{src:s(7482),alt:"1644998711572"}})]),t._v(" "),r("p",[t._v("而这个jar包你在服务器上运行还需要装一堆环境，有了dockerfile之后我们就可以把他做成一个镜像")]),t._v(" "),r("h4",{attrs:{id:"制作docker镜像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#制作docker镜像"}},[t._v("#")]),t._v(" 制作docker镜像")]),t._v(" "),r("p",[t._v("​\t\t只需要一个命令：docker build 就是构建docker镜像")]),t._v(" "),r("p",[t._v("​\t\t然后是 -t 全称就是tag 镜像的标签名称 ：（冒号后面跟版本号）V1.0")]),t._v(" "),r("p",[t._v("​\t\t然后是 -f 全称是Dockerfile 你是使用哪个Dockerfile构建的")]),t._v(" "),r("p",[t._v("​\t\t还有最重要的是加个 . 这个点指的是在当前目录工作")]),t._v(" "),r("p",[t._v("如果文件名称就叫Dockerfile可以省略 -f的操作")]),t._v(" "),r("p",[r("img",{attrs:{src:s(7483),alt:"1644999155044"}})]),t._v(" "),r("p",[t._v("一共有4步命令操作，完成后构建成功")]),t._v(" "),r("p",[r("img",{attrs:{src:s(7484),alt:"1644999268560"}})]),t._v(" "),r("p",[t._v("docker images查看一下，已经是构建好了，为什么是315M呢，因为是带了基础的jdk的原因")]),t._v(" "),r("p",[r("img",{attrs:{src:s(7485),alt:"1644999327262"}})]),t._v(" "),r("h4",{attrs:{id:"启动我们制作好的java镜像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#启动我们制作好的java镜像"}},[t._v("#")]),t._v(" 启动我们制作好的java镜像")]),t._v(" "),r("p",[t._v("​\tdocker run -d后台运行 -p端口 8080内部端口：8080服务器端口 java-demo：v1.0 应用名称和版本号")]),t._v(" "),r("p",[r("img",{attrs:{src:s(7486),alt:"1644999567747"}})]),t._v(" "),r("p",[t._v("也可以多加个参数 --name 给起一个应用的名称")]),t._v(" "),r("p",[r("img",{attrs:{src:s(7487),alt:"1644999640673"}})]),t._v(" "),r("p",[t._v("我们现在访问一下这个项目，这回就需要使用的是公网的IP地址来访问了")]),t._v(" "),r("p",[t._v("​")]),t._v(" "),r("p",[r("img",{attrs:{src:s(7488),alt:"1644999693648"}})]),t._v(" "),r("p",[t._v("​\t注意：安全组的端口也需要放开一下")]),t._v(" "),r("p",[r("img",{attrs:{src:s(7489),alt:"1645000573272"}})]),t._v(" "),r("p",[t._v("现在访问的时候人数也会每次发生变化")]),t._v(" "),r("p",[r("img",{attrs:{src:s(7490),alt:"1645000694152"}})]),t._v(" "),r("p",[t._v("我们也可以查看这个java应用的日志")]),t._v(" "),r("p",[r("img",{attrs:{src:s(7491),alt:"1645000779435"}})]),t._v(" "),r("p",[t._v("也可以使用docker logs -f 镜像id   这样可以跟踪实时的日志")]),t._v(" "),r("p",[r("img",{attrs:{src:s(7492),alt:"1645000837412"}})])])}),[],!1,null,null,null);a.default=p.exports}}]);