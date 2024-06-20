(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{8322:function(t,s,a){"use strict";a.r(s);var e=a(5),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_2、promethus的安装与使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、promethus的安装与使用"}},[t._v("#")]),t._v(" 2、promethus的安装与使用")]),t._v(" "),e("h2",{attrs:{id:"安装promethus系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装promethus系统"}},[t._v("#")]),t._v(" 安装promethus系统")]),t._v(" "),e("h3",{attrs:{id:"_1、下载软件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、下载软件"}},[t._v("#")]),t._v(" 1、下载软件")]),t._v(" "),e("p",[t._v("​\t\t官网https://prometheus.io/download/ 进行对应版本的下载")]),t._v(" "),e("p",[e("img",{attrs:{src:a(859),alt:"1678085847219"}})]),t._v(" "),e("h3",{attrs:{id:"_2、安装promethus软件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、安装promethus软件"}},[t._v("#")]),t._v(" 2、安装promethus软件")]),t._v(" "),e("h4",{attrs:{id:"第一步-上传安装包到linux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第一步-上传安装包到linux"}},[t._v("#")]),t._v(" 第一步：上传安装包到linux")]),t._v(" "),e("p",[t._v("​\t\t\t\t先上传到linux服务器")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("​\t点击上传文件按钮 -- 选择文件进行上传")]),t._v(" "),e("p",[e("img",{attrs:{src:a(860),alt:"1678086048772"}})]),t._v(" "),e("h4",{attrs:{id:"第二步-解压并安装软件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第二步-解压并安装软件"}},[t._v("#")]),t._v(" 第二步： 解压并安装软件")]),t._v(" "),e("p",[t._v("​\t\t\t\t这个是绿色软件 -- 其实它并不需要去安装，需要把它解压到指定路径下就可以了")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 解压\ntar -xf prometheus-2.5.0.linux-amd64.tar.gz  -C /usr/local/\n\n# 移动 -- 因为这个文件名称比较长，我们换一个简单的文件夹下\nmv /usr/local/prometheus-2.5.0.linux-amd64  /usr/local/prometheus\n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("p",[e("img",{attrs:{src:a(861),alt:"1678086445339"}})]),t._v(" "),e("p",[t._v("​")]),t._v(" "),e("h4",{attrs:{id:"第三步-启动promethus软件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第三步-启动promethus软件"}},[t._v("#")]),t._v(" 第三步：启动promethus软件")]),t._v(" "),e("p",[t._v("如何启动这个软件呢？在解压后的文件夹中 有个promethus.yml文件--这个是它的配置文件")]),t._v(" "),e("p",[t._v("​\t\t这个绿色的promethus文件其实就是 启动文件")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('# 启动命令\n\n# 在此路径下 /usr/local/prometheus/prometheus \ncd /usr/local/prometheus/prometheus \n\n# 启动\n./prometheus -- config.file="/usr/local/prometheus/prometheus.yml" &\n\n# &这个连接符-代表后台运行，不占用终端窗口\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])]),e("p",[e("img",{attrs:{src:a(862),alt:"1678087353408"}})]),t._v(" "),e("p",[t._v("​\t\t\t我们看到Server is ready to receive web requests -- 服务已就绪 可以接受来自web的请求了")]),t._v(" "),e("h4",{attrs:{id:"第四步-测试端口占用情况"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第四步-测试端口占用情况"}},[t._v("#")]),t._v(" 第四步：测试端口占用情况")]),t._v(" "),e("p",[t._v("​\t但是这样的看启动完成 不是特别可靠")]),t._v(" "),e("p",[t._v("​\t测试端口占用情况（判断是否真正的启动了）")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 确认端口 -- 这个命令可以判断 端口的使用情况\n# -i 代表指定端口\nlsof -i：9090\n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[t._v("​\t我们一般新安装的系统 -- 没有这个命令")]),t._v(" "),e("p",[t._v("​\t\t\t需要我们手动安装一下")]),t._v(" "),e("p",[t._v("​\t\t\t如果不想安装也可以使用之前的命令 ss -naltp | grep 9090")]),t._v(" "),e("p",[e("img",{attrs:{src:a(863),alt:"1678088354207"}})]),t._v(" "),e("p",[e("img",{attrs:{src:a(864),alt:"1678088763958"}})]),t._v(" "),e("p",[t._v("​\t\t\t此端口正在被promethus使用")]),t._v(" "),e("h3",{attrs:{id:"_3、promethus界面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、promethus界面"}},[t._v("#")]),t._v(" 3、promethus界面")]),t._v(" "),e("p",[t._v("​\t他是一个web软件")]),t._v(" "),e("p",[t._v("​\t\t我们可以通过 浏览器访问  服务器IP ：9090就可以访问到promethus的主界面")]),t._v(" "),e("p",[e("img",{attrs:{src:a(865),alt:"1678089159773"}})]),t._v(" "),e("p",[t._v("​\t界面中Alert是告警相关的内容")]),t._v(" "),e("p",[t._v("​\tGraph 是图形化相关内容")]),t._v(" "),e("p",[t._v("​\tstatus -- 以下状态查看，可以定义规则配置")]),t._v(" "),e("p",[t._v("​\thelp -- 帮助信息")]),t._v(" "),e("h4",{attrs:{id:"那么我们打开这个promethus看什么呢-监控谁呢"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#那么我们打开这个promethus看什么呢-监控谁呢"}},[t._v("#")]),t._v(" 那么我们打开这个promethus看什么呢？监控谁呢")]),t._v(" "),e("p",[t._v("​\t\t那么就需要我们设置一下监控目标")]),t._v(" "),e("p",[e("img",{attrs:{src:a(866),alt:"1678089410327"}})]),t._v(" "),e("p",[t._v("​\t默认情况 -它只监控它自己")]),t._v(" "),e("p",[e("img",{attrs:{src:a(867),alt:"1678440677820"}})]),t._v(" "),e("p",[t._v("​\t\t一般都是通过配置数据的接口来获取数据 例如 http://localhost：9090/metrics")]),t._v(" "),e("p",[t._v("​\t如果我们访问这个地址就可以看到---promethus返回的一些他自己的监控数据")]),t._v(" "),e("p",[e("img",{attrs:{src:a(868),alt:"1678445044543"}})]),t._v(" "),e("p",[t._v("​\t收集到这些就交给web系统，由这个web系统开始进行收集")]),t._v(" "),e("p",[t._v("​")]),t._v(" "),e("p",[t._v("​\tUP代表启动运行")]),t._v(" "),e("p",[t._v("​\tDOWN 就代表服务器关闭了")]),t._v(" "),e("p",[e("img",{attrs:{src:a(869),alt:"1678445192128"}})]),t._v(" "),e("h3",{attrs:{id:"_4、promethus默认监控图像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、promethus默认监控图像"}},[t._v("#")]),t._v(" 4、promethus默认监控图像")]),t._v(" "),e("p",[t._v("​")]),t._v(" "),e("p",[t._v("​\t比如我们想监控一下cpu的运行情况")]),t._v(" "),e("p",[t._v("​\t\t\t选择cpu_seconds_total")]),t._v(" "),e("p",[e("img",{attrs:{src:a(870),alt:"1678445573807"}})]),t._v(" "),e("p",[t._v("​\t然后点击 执行Excute")]),t._v(" "),e("p",[t._v("​\t然后我们看一下graph--图表 会显示出cpu的监控信息")]),t._v(" "),e("p",[e("img",{attrs:{src:a(871),alt:"1678445833359"}})]),t._v(" "),e("p",[t._v("​\t他这个显示的图像和我们之前看的图像有些不一样，原因是--他自带的这个是比较简单的图表")]),t._v(" "),e("p",[t._v("​")])])}),[],!1,null,null,null);s.default=r.exports},859:function(t,s,a){t.exports=a.p+"assets/img/1678085847219.7b21bb59.png"},860:function(t,s,a){t.exports=a.p+"assets/img/1678086048772.25de6188.png"},861:function(t,s,a){t.exports=a.p+"assets/img/1678086445339.9b17bb95.png"},862:function(t,s,a){t.exports=a.p+"assets/img/1678087353408.92458247.png"},863:function(t,s,a){t.exports=a.p+"assets/img/1678088354207.1c3a00ce.png"},864:function(t,s,a){t.exports=a.p+"assets/img/1678088763958.24f41ba2.png"},865:function(t,s,a){t.exports=a.p+"assets/img/1678089159773.5783a494.png"},866:function(t,s,a){t.exports=a.p+"assets/img/1678089410327.1bf7b582.png"},867:function(t,s,a){t.exports=a.p+"assets/img/1678440677820.a16dff2b.png"},868:function(t,s,a){t.exports=a.p+"assets/img/1678445044543.9d0a0c29.png"},869:function(t,s,a){t.exports=a.p+"assets/img/1678445192128.a448d8ae.png"},870:function(t,s,a){t.exports=a.p+"assets/img/1678445573807.831071a3.png"},871:function(t,s,a){t.exports=a.p+"assets/img/1678445833359.a9ce5e71.png"}}]);