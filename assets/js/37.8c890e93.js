(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{6989:function(s,t,a){s.exports=a.p+"assets/img/1655040391951.fe1dfd30.png"},6990:function(s,t,a){s.exports=a.p+"assets/img/1655040479018.7809b7f9.png"},6991:function(s,t,a){s.exports=a.p+"assets/img/1655040804458.bd60c4ab.png"},6992:function(s,t,a){s.exports=a.p+"assets/img/1655041148117.6ef0e529.png"},6993:function(s,t,a){s.exports=a.p+"assets/img/1655041178894.5da20e0b.png"},6994:function(s,t,a){s.exports=a.p+"assets/img/1655041384191.e9625c97.png"},6995:function(s,t,a){s.exports=a.p+"assets/img/1655041436879.2fdcbf88.png"},6996:function(s,t,a){s.exports=a.p+"assets/img/1655041518923.0c5e4fb7.png"},6997:function(s,t,a){s.exports=a.p+"assets/img/1655041555097.694f75c9.png"},6998:function(s,t,a){s.exports=a.p+"assets/img/1655041904299.373ee292.png"},6999:function(s,t,a){s.exports=a.p+"assets/img/1655041998236.d90cc197.png"},7e3:function(s,t,a){s.exports=a.p+"assets/img/1655042099292.1fe11ad0.png"},7001:function(s,t,a){s.exports=a.p+"assets/img/1655042575752.8e7d843d.png"},7002:function(s,t,a){s.exports=a.p+"assets/img/1655042747268.12304ca4.png"},7003:function(s,t,a){s.exports=a.p+"assets/img/1655042937958.2e3995d5.png"},7004:function(s,t,a){s.exports=a.p+"assets/img/1655043094641.78cb644c.png"},7005:function(s,t,a){s.exports=a.p+"assets/img/1655043238203.7d28f43a.png"},7006:function(s,t,a){s.exports=a.p+"assets/img/1655043298114.c5264fd1.png"},7007:function(s,t,a){s.exports=a.p+"assets/img/1655043453686.83230fdd.png"},7008:function(s,t,a){s.exports=a.p+"assets/img/1655043534795.074e68f2.png"},7009:function(s,t,a){s.exports=a.p+"assets/img/1655043681670.35e48aac.png"},7010:function(s,t,a){s.exports=a.p+"assets/img/1655043725805.cfdfcb07.png"},7011:function(s,t,a){s.exports=a.p+"assets/img/1655043820604.97f89ce9.png"},7012:function(s,t,a){s.exports=a.p+"assets/img/1655043875737.a3ce29f5.png"},7013:function(s,t,a){s.exports=a.p+"assets/img/1655044003549.8b770174.png"},7014:function(s,t,a){s.exports=a.p+"assets/img/1655044107574.140fe34f.png"},7015:function(s,t,a){s.exports=a.p+"assets/img/1655044202362.2478e183.png"},7016:function(s,t,a){s.exports=a.p+"assets/img/1655044343472.f411d997.png"},7017:function(s,t,a){s.exports=a.p+"assets/img/1655044457111.4b980f20.png"},7018:function(s,t,a){s.exports=a.p+"assets/img/1655044507206.43e3b15a.png"},7019:function(s,t,a){s.exports=a.p+"assets/img/1655044598255.15c15df0.png"},8809:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_13-kubesphere给kubernetes上部署中间件-部署mysql有状态副本集"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_13-kubesphere给kubernetes上部署中间件-部署mysql有状态副本集"}},[s._v("#")]),s._v(" 13.kubesphere给kubernetes上部署中间件-部署MySQL有状态副本集")]),s._v(" "),n("p",[s._v("​")]),s._v(" "),n("p",[s._v("​\t\t现在我们使用kubesphere部署一下MySQL")]),s._v(" "),n("p",[s._v("​\t\t无论我们是部署任何中间件我们先到docker hub中寻找一下这个中间件的镜像")]),s._v(" "),n("p",[n("img",{attrs:{src:a(6989),alt:"1655040391951"}})]),s._v(" "),n("p",[s._v("​")]),s._v(" "),n("p",[s._v("​\t然后我们了解一下镜像的官方文档MySQL是如何启动的，等等文档中还有描述如何连接，配置文件在哪等一些说明")]),s._v(" "),n("p",[n("img",{attrs:{src:a(6990),alt:"1655040479018"}})]),s._v(" "),n("h2",{attrs:{id:"_1、部署mysql"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、部署mysql"}},[s._v("#")]),s._v(" 1、部署MySQL")]),s._v(" "),n("h4",{attrs:{id:"_1、mysql容器启动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、mysql容器启动"}},[s._v("#")]),s._v(" 1、MySQL容器启动")]),s._v(" "),n("p",[s._v("​\t我们以前在docker部署MySQL是这样的命令启动的")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(":3306 --name mysql-01 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /mydata/mysql/log:/var/log/mysql "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /mydata/mysql/data:/var/lib/mysql "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /mydata/mysql/conf:/etc/mysql/conf.d "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--restart"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-d mysql:5.7 \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h4",{attrs:{id:"_2、mysql配置示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、mysql配置示例"}},[s._v("#")]),s._v(" 2、MySQL配置示例")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("client"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ndefault-character-set"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8mb4\n \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysql"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ndefault-character-set"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8mb4\n \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqld"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("init_connect")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SET collation_connection = utf8mb4_unicode_ci'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("init_connect")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'SET NAMES utf8mb4'")]),s._v("\ncharacter-set-server"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8mb4\ncollation-server"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8mb4_unicode_ci\nskip-character-set-client-handshake\nskip-name-resolve\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("h4",{attrs:{id:"_3、mysql部署分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、mysql部署分析"}},[s._v("#")]),s._v(" 3、MySQL部署分析")]),s._v(" "),n("p",[s._v("​\tPod是我们MySQL的容器，mysql容器启动的时候需要指定一个环境变量env和用户名密码，然后mysql的所有数据是在/var/lib/mysql这个目录下的,我们把这个目录应该以PVC的方式挂载出来")]),s._v(" "),n("p",[s._v("​\tmysql的配置文件是在容器的/etc/mysql/conf.d下的，在k8s中中间件的配置文件可以叫配置集，我们以ConfigMap的方式处理配置文件")]),s._v(" "),n("p",[n("img",{attrs:{src:a(6991),alt:"1655040804458"}})]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("\t实战MySQL部署\n")])])]),n("p",[s._v("​\t\t我们先把MySQL的配置做出来--点击创建")]),s._v(" "),n("p",[n("img",{attrs:{src:a(6992),alt:"1655041148117"}})]),s._v(" "),n("p",[s._v("​\t填写信息--下一步")]),s._v(" "),n("p",[n("img",{attrs:{src:a(6993),alt:"1655041178894"}})]),s._v(" "),n("p",[s._v("​\t然后是添加数据，以key，value的方式，这个key就是配置文件的名称如my.cnf,值就是mysql配置文件中的内容---然后点击创建")]),s._v(" "),n("p",[n("img",{attrs:{src:a(6994),alt:"1655041384191"}})]),s._v(" "),n("p",[s._v("​\t\t我们看到多了一个配置")]),s._v(" "),n("p",[n("img",{attrs:{src:a(6995),alt:"1655041436879"}})]),s._v(" "),n("p",[s._v("​\t然后我们现在再来准备一个MySQL的PVC，我们将mysql的数据存储设置一下")]),s._v(" "),n("p",[n("img",{attrs:{src:a(6996),alt:"1655041518923"}})]),s._v(" "),n("p",[s._v("​\t存储卷--基本设置")]),s._v(" "),n("p",[n("img",{attrs:{src:a(6997),alt:"1655041555097"}})]),s._v(" "),n("p",[s._v("​\t\t存储卷设置--我们使用默认的nfs存储类型，然后设置存储容量，假如我们设置5G，还有设置访问模式，我们现在是设置单节点读写--"),n("strong",[s._v("有状态服务一般都是以单节点读写")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(6998),alt:"1655041904299"}})]),s._v(" "),n("p",[s._v("下一步完成创建后--MySQL的存储卷就搞定了--现在显示的是未挂载")]),s._v(" "),n("p",[n("img",{attrs:{src:a(6999),alt:"1655041998236"}})]),s._v(" "),n("p",[s._v("​\t现在我们使用kubesphere部署mysql--在工作负载中")]),s._v(" "),n("p",[n("img",{attrs:{src:a(7e3),alt:"1655042099292"}})]),s._v(" "),n("p",[s._v("​\t先是基本配置")]),s._v(" "),n("p",[n("img",{attrs:{src:a(7001),alt:"1655042575752"}})]),s._v(" "),n("p",[s._v("​\t然后是容器镜像设置--我们搜索镜像的版本，如果是私有镜像仓库就设置私有仓库的秘钥进行连接，然后点击使用默认端口")]),s._v(" "),n("p",[n("img",{attrs:{src:a(7002),alt:"1655042747268"}})]),s._v(" "),n("p",[s._v("​\t\t我们还可以给他设置资源预留，我们先不设置预留，我们设置一个资源限制，最多可以占1核CPU和2G的内存（如果后续启动报错--这里不限制就可以了）")]),s._v(" "),n("p",[n("img",{attrs:{src:a(7003),alt:"1655042937958"}})]),s._v(" "),n("p",[s._v("​\t\t设置环境变量因为我们在docker中启动mysql就是需要配置环境变量的，然后勾选上同步主机时区--也就是说未来我们MySQL的时间是和我们主机的时间是一样的")]),s._v(" "),n("p",[n("img",{attrs:{src:a(7004),alt:"1655043094641"}})]),s._v(" "),n("p",[s._v("​\t然后是下一步，挂载存储，我们选择添加存储卷--因为我们之前已经创建好PVC了（如果没有创建好就点击添加存储卷模板）")]),s._v(" "),n("p",[n("img",{attrs:{src:a(7005),alt:"1655043238203"}})]),s._v(" "),n("p",[s._v("​\t\t数据挂载的位置就是容器安装在docker的路径--然后打对勾")]),s._v(" "),n("p",[n("img",{attrs:{src:a(7006),alt:"1655043298114"}})]),s._v(" "),n("p",[s._v("​\t\t然后再点击挂载配置文件")]),s._v(" "),n("p",[n("img",{attrs:{src:a(7007),alt:"1655043453686"}})]),s._v(" "),n("p",[s._v("​\t\t选择我们之前创建的mysql-conf，因为我们当时创建这个配置的时候设置过一个key叫my.cnf它会帮我们把这个key的值创建一个文件，挂载到指定的文件夹下--然后下一步")]),s._v(" "),n("p",[n("img",{attrs:{src:a(7008),alt:"1655043534795"}})]),s._v(" "),n("p",[s._v("​\t\t\t然后这就整体完成了---点击创建")]),s._v(" "),n("p",[n("img",{attrs:{src:a(7009),alt:"1655043681670"}})]),s._v(" "),n("p",[s._v("​\t至此---我们的MySQL有状态副本集我们就创建好了")]),s._v(" "),n("p",[n("img",{attrs:{src:a(7010),alt:"1655043725805"}})]),s._v(" "),n("p",[s._v("​\t我们点进去可以查看详情--大约3分钟左右就创建完成了")]),s._v(" "),n("p",[n("img",{attrs:{src:a(7011),alt:"1655043820604"}})]),s._v(" "),n("p",[s._v("​\t我们在这里可以很方便的查看日志和进入终端容器内部")]),s._v(" "),n("p",[n("img",{attrs:{src:a(7012),alt:"1655043875737"}})]),s._v(" "),n("p",[s._v("​\t我们进入到终端容器内部，我们看一下我们的配置文件有没有挂载过来，我们看到是有的")]),s._v(" "),n("p",[n("img",{attrs:{src:a(7013),alt:"1655044003549"}})]),s._v(" "),n("p",[s._v("​\t\t如果我们在kubesphere的配置中修改了MySQL的配置文件--去掉最后一行")]),s._v(" "),n("p",[n("img",{attrs:{src:a(7014),alt:"1655044107574"}})]),s._v(" "),n("p",[s._v("​\t\t大约10几秒就会同步到我们的容器中，如果你的应用有热更新能力就可以立马生效，如果没有热更新能力，就需要重启容器了")]),s._v(" "),n("p",[n("img",{attrs:{src:a(7015),alt:"1655044202362"}})]),s._v(" "),n("p",[s._v("比如MySQL是没有热更新能力的，重新部署容器")]),s._v(" "),n("p",[n("img",{attrs:{src:a(7016),alt:"1655044343472"}})]),s._v(" "),n("p",[s._v("​\t我们部署的这个应用会产生一个容器组")]),s._v(" "),n("p",[n("img",{attrs:{src:a(7017),alt:"1655044457111"}})]),s._v(" "),n("p",[n("img",{attrs:{src:a(7018),alt:"1655044507206"}})]),s._v(" "),n("p",[s._v("我们现在的这个MySQL如何访问呢----我们现在可以看到他有一个默认的服务，访问是ClusterIP的方式，相当于目前只能在集群内部进行访问")]),s._v(" "),n("p",[n("img",{attrs:{src:a(7019),alt:"1655044598255"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);