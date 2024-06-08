(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{7137:function(s,t,a){s.exports=a.p+"assets/img/1655253649701.60992f3c.png"},7138:function(s,t,a){s.exports=a.p+"assets/img/1655254016313.fe3d01cd.png"},7139:function(s,t,a){s.exports=a.p+"assets/img/1655254373666.ccd12649.png"},7140:function(s,t,a){s.exports=a.p+"assets/img/1655254490954.f59b7b9e.png"},7141:function(s,t,a){s.exports=a.p+"assets/img/1655254582779.d547840c.png"},7142:function(s,t,a){s.exports=a.p+"assets/img/1655254698155.1a430e6d.png"},7143:function(s,t,a){s.exports=a.p+"assets/img/1655256244479.1db85af3.png"},7144:function(s,t,a){s.exports=a.p+"assets/img/1655266459415.cdf3b756.png"},7145:function(s,t,a){s.exports=a.p+"assets/img/1655266767823.761a9a63.png"},7146:function(s,t,a){s.exports=a.p+"assets/img/1655266985685.0e0e6725.png"},7147:function(s,t,a){s.exports=a.p+"assets/img/1655267076211.e276c14b.png"},7148:function(s,t,a){s.exports=a.p+"assets/img/1655267171416.9d06e9f9.png"},7149:function(s,t,a){s.exports=a.p+"assets/img/1655267522224.e906e6aa.png"},8820:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_26-kubernetes应用部署实战-java微服务上云-云上环境dockerfile配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_26-kubernetes应用部署实战-java微服务上云-云上环境dockerfile配置"}},[s._v("#")]),s._v(" 26.kubernetes应用部署实战-Java微服务上云-云上环境Dockerfile配置")]),s._v(" "),n("p",[s._v("​\t\t之前我们部署好了一些ruoyi使用的中间件，如nacos，redis，mysql")]),s._v(" "),n("p",[s._v("​\t\t接下来我们就该部署微服务这层内容了--有客户端，网关，及核心服务")]),s._v(" "),n("p",[n("img",{attrs:{src:a(7137),alt:"1655253649701"}})]),s._v(" "),n("p",[s._v("​\t\t整个部署的架构是这样的")]),s._v(" "),n("p",[s._v("​\t\t\t服务治理层Sentinel是流量的控制--这个ruoyi-cloud里面实际有引用但是现在没有开启相关的功能")]),s._v(" "),n("p",[s._v("​\t\t我们的部署遵循自底向上的部署方式，先部署好底层模块，比如数据层的中间件，然后是微服务治理层，然后是微服务层，等微服务都部署好了我们再部署ruoyi的网关，网关部署好了之后我们再部署前端应用。")]),s._v(" "),n("p",[n("img",{attrs:{src:a(7138),alt:"1655254016313"}})]),s._v(" "),n("p",[s._v("​\t那么我们现在就准备开始部署微服务这层东西")]),s._v(" "),n("p",[n("img",{attrs:{src:a(7139),alt:"1655254373666"}})]),s._v(" "),n("p",[s._v("​\t其实在ruoyi里面已经帮我们写好了docker的一些镜像怎么打包了，因为我们整个上云部署最起码得有一个镜像，有了镜像后我们k8s才能产生一个Pod进行部署")]),s._v(" "),n("p",[n("img",{attrs:{src:a(7140),alt:"1655254490954"}})]),s._v(" "),n("p",[s._v("​\t我们的微服务层有这些内容")]),s._v(" "),n("p",[n("img",{attrs:{src:a(7141),alt:"1655254582779"}})]),s._v(" "),n("p",[s._v("​")]),s._v(" "),n("p",[s._v("​\t其实就是在我们项目中把这些微服务打成一个可执行的jar包，放到这个jar文件夹里面，然后使用docker，利用这个dockerfile构建镜像就可以了")]),s._v(" "),n("p",[n("img",{attrs:{src:a(7142),alt:"1655254698155"}})]),s._v(" "),n("p",[s._v("​\t比如这个dockerfile是如何构建镜像的？")]),s._v(" "),n("p",[s._v("​\t\t首先是基础镜像openjdk：8jre--相当于使用java8的基础环境")]),s._v(" "),n("p",[s._v("​\t\tVOLUME：挂载目录，相当于目录可以让你挂载出去")]),s._v(" "),n("p",[s._v("​\t\trun markdir：创建目录")]),s._v(" "),n("p",[s._v("​\t\tCOPY：./jar拷贝这个同级目录的jar文件夹里的内容---到另一个文件夹下")]),s._v(" "),n("p",[s._v("​\t\tENTRYPOINT：这个就是打包好镜像后最终我们要docker run 的内容，启动命令")]),s._v(" "),n("p",[s._v("​\t\t\t\t我们java写的启动命令就叫 java -jar ruoyi-auth.jar")]),s._v(" "),n("p",[n("img",{attrs:{src:a(7143),alt:"1655256244479"}})]),s._v(" "),n("p",[s._v("​\t按这个docker镜像部署的话其实我们还是需要修改一些东西的，因为这个镜像在生产环境部署整个配置还是有点不足--我们参照下面的镜像配置")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 我们基础镜像选择JDK，万一生产环境有些问题需要排查我们可以需要进入到容器使用jdk的一些命令--比如查看线程的活动")]),s._v("\nFROM openjdk:8-jdk\nLABEL "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("maintainer")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("leifengyang\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# ENV PARAMS是环境变量，这个PARAMS最终会在ENTRYPOINT 启动命令中会有引用"/bin/sh","-c"的后面相当于是一个启动命令，这个命令的${}中会引用这个环境变量')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#docker run -e PARAMS="--server.port 9090"')]),s._v("\nENV "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PARAMS")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--server.port=8080 --spring.profiles.active=prod --spring.cloud.nacos.discovery.server-addr=his-nacos.his:8848 --spring.cloud.nacos.config.server-addr=his-nacos.his:8848 --spring.cloud.nacos.config.namespace=prod --spring.cloud.nacos.config.file-extension=yml"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里是修改了镜像运行的时区--这样的话我们这个镜像也会默认的使用上海这个时间，就算我们不勾选部署的同步时区时间也是我们中国的标准时间")]),s._v("\nRUN /bin/cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Asia/Shanghai'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/etc/timezone\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拷贝target下面所有的jar包--因为未来我们打包的jar都在target下，把这些jar包都拷贝到/app下面--根目录")]),s._v("\nCOPY target/*.jar /app.jar\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 暴露8080端口，因为每个服务都是一个Pod所以IP也不一样都使用8080端口不冲突")]),s._v("\nEXPOSE "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\nENTRYPOINT "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/bin/sh"')]),s._v(","),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-c"')]),s._v(","),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"java -Dfile.encoding=utf8 -Djava.security.egd=file:/dev/./urandom -jar app.jar '),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PARAMS}")]),s._v('"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("p",[s._v("因为每个微服务的Pod都是一个容器，所以在生产环境我们都可以使用同样的端口，每个Pod的IP都不一样")]),s._v(" "),n("p",[n("img",{attrs:{src:a(7144),alt:"1655266459415"}})]),s._v(" "),n("p",[s._v("规则：")]),s._v(" "),n("p",[s._v("1、容器默认以8080端口启动")]),s._v(" "),n("p",[s._v("2、时间为CST")]),s._v(" "),n("p",[s._v("3、环境变量 PARAMS 可以动态指定配置文件中任意的值")]),s._v(" "),n("p",[s._v("4、nacos集群内地址为 "),n("code",[s._v("his-nacos.his:8848")])]),s._v(" "),n("p",[s._v("5、微服务默认启动加载 nacos中  "),n("code",[s._v("服务名-激活的环境.yml")]),s._v(" 文件，所以线上的配置可以全部写在nacos中。")]),s._v(" "),n("p",[s._v("spring.profiles.active=prod")]),s._v(" "),n("p",[n("img",{attrs:{src:a(7145),alt:"1655266767823"}})]),s._v(" "),n("p",[s._v("如果是生成环境")]),s._v(" "),n("p",[n("img",{attrs:{src:a(7146),alt:"1655266985685"}})]),s._v(" "),n("p",[s._v("​\t我们现在需要做的就是生产环境的配置应用抽离，我们在Nacos中配置命名空间")]),s._v(" "),n("p",[n("img",{attrs:{src:a(7147),alt:"1655267076211"}})]),s._v(" "),n("p",[s._v("​\t然后克隆配置--可乐门道生产环境、然后把所有的dev改为prod文件名称"),n("img",{attrs:{src:a(7148),alt:"1655267171416"}}),s._v("、")]),s._v(" "),n("p",[s._v("​\t这样在谋陷方面也提供了生产环境的安全性，开发人员甚至不需要关心配置")]),s._v(" "),n("p",[n("img",{attrs:{src:a(7149),alt:"1655267522224"}})]),s._v(" "),n("p",[s._v("https://www.bilibili.com/video/BV13Q4y1C7hS?p=94&spm_id_from=pageDriver")])])}),[],!1,null,null,null);t.default=e.exports}}]);