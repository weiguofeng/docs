(window.webpackJsonp=window.webpackJsonp||[]).push([[474],{7416:function(s,a,t){s.exports=t.p+"assets/img/1644992708390.5003eb88.png"},7417:function(s,a,t){s.exports=t.p+"assets/img/1644992784179.b3a57043.png"},7418:function(s,a,t){s.exports=t.p+"assets/img/1644993354950.8eadf1b0.png"},7419:function(s,a,t){s.exports=t.p+"assets/img/1644993254155.6e5df272.png"},7420:function(s,a,t){s.exports=t.p+"assets/img/1644993397412.c724c01f.png"},8841:function(s,a,t){"use strict";t.r(a);var e=t(5),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"_13-容器化-进阶-创建java应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-容器化-进阶-创建java应用"}},[s._v("#")]),s._v(" 13.容器化-进阶-创建java应用")]),s._v(" "),e("h2",{attrs:{id:"进阶实战"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进阶实战"}},[s._v("#")]),s._v(" 进阶实战")]),s._v(" "),e("h3",{attrs:{id:"_1、编写一个自己的应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、编写一个自己的应用"}},[s._v("#")]),s._v(" 1、编写一个自己的应用")]),s._v(" "),e("p",[s._v("​\t比如java程序，编写一个helloworld的程序，我们如何使用docker进行部署")]),s._v(" "),e("p",[s._v("​\thttps://start.spring.io/")]),s._v(" "),e("p",[s._v("​\t示例代码：  https://gitee.com/leifengyang/java-demo.git")]),s._v(" "),e("h3",{attrs:{id:"_2、将应用打包成镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、将应用打包成镜像"}},[s._v("#")]),s._v(" 2、将应用打包成镜像")]),s._v(" "),e("p",[s._v("​\t编写Dockerfile将自己的应用打包镜像")]),s._v(" "),e("h3",{attrs:{id:"_1、以前"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、以前"}},[s._v("#")]),s._v(" 1、以前")]),s._v(" "),e("p",[s._v("Java为例")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("SpringBoot打包成可执行jar")])]),s._v(" "),e("li",[e("p",[s._v("把jar包上传给服务")])]),s._v(" "),e("li",[e("p",[s._v("服务器运行java -jar")])])]),s._v(" "),e("h3",{attrs:{id:"_2、现在"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、现在"}},[s._v("#")]),s._v(" 2、现在")]),s._v(" "),e("p",[s._v("​\t所有机器都安装Docker，任何应用都是镜像，所有机器都可以运行")]),s._v(" "),e("h3",{attrs:{id:"_3、怎么打包-dockerfile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、怎么打包-dockerfile"}},[s._v("#")]),s._v(" 3、怎么打包-Dockerfile")]),s._v(" "),e("div",{staticClass:"language-dockerfile line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[e("code",[e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" openjdk:8-jdk-slim")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LABEL")]),s._v(" maintainer=leifengyang")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" target/*.jar   /app.jar")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENTRYPOINT")]),s._v(" ["),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"java"')]),s._v(","),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-jar"')]),s._v(","),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/app.jar"')]),s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build -t java-demo:v1.0 "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("思考：")]),s._v(" "),e("p",[s._v("每个应用每次打包，都需要本地编译、再上传服务器、再进行docker构建，如果有1000个应用要打包镜像怎么办？有没有更好的方式？")]),s._v(" "),e("h3",{attrs:{id:"_3、启动容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、启动容器"}},[s._v("#")]),s._v(" 3、启动容器")]),s._v(" "),e("p",[s._v("启动应用容器")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":8080 --name myjava-app java-demo:v1.0 \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("分享镜像")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 登录docker hub")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" login\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#给旧镜像起名")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" tag java-demo:v1.0  leifengyang/java-demo:v1.0\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推送到docker hub")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" push leifengyang/java-demo:v1.0\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 别的机器")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull leifengyang/java-demo:v1.0\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 别的机器运行")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":8080 --name myjava-app java-demo:v1.0 \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("h3",{attrs:{id:"_4、部署中间件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、部署中间件"}},[s._v("#")]),s._v(" 4、部署中间件")]),s._v(" "),e("p",[s._v("​\t 部署一个Redis+应用，尝试应用操作Redis产生数据。")]),s._v(" "),e("p",[s._v("​\t我们想将redis的镜像下载安装最新版本，并且把配置文件和持久化的数据都放在docker外部，需要进行挂载操作--也就是放在linux服务器上。")]),s._v(" "),e("p",[e("img",{attrs:{src:t(7416),alt:"1644992708390"}})]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker run [OPTIONS] IMAGE [COMMAND] [ARG...]\n\n#redis使用自定义配置文件启动\n\ndocker run -v /data/redis/redis.conf:/etc/redis/redis.conf \\\n-v /data/redis/data:/data \\\n-d --name myredis \\\n-p 6379:6379 \\\nredis:latest  redis-server /etc/redis/redis.conf\n \n \n \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("p",[s._v("整个完整命令启动过程")]),s._v(" "),e("p",[e("img",{attrs:{src:t(7417),alt:"1644992784179"}})]),s._v(" "),e("p",[s._v("启动redis镜像")]),s._v(" "),e("p",[e("img",{attrs:{src:t(7418),alt:"1644993354950"}})]),s._v(" "),e("p",[s._v("注意：启动镜像要放行一下安全组的端口")]),s._v(" "),e("p",[e("img",{attrs:{src:t(7419),alt:"1644993254155"}})]),s._v(" "),e("p",[s._v("测试连接redis")]),s._v(" "),e("p",[e("img",{attrs:{src:t(7420),alt:"1644993397412"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);