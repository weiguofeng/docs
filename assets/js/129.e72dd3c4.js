(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{7053:function(t,s,p){t.exports=p.p+"assets/img/1655193250072.24fcbcb8.png"},7054:function(t,s,p){t.exports=p.p+"assets/img/1655194008958.45379017.png"},7055:function(t,s,p){t.exports=p.p+"assets/img/1655194074486.58888cb8.png"},7056:function(t,s,p){t.exports=p.p+"assets/img/1655194197059.4834b34d.png"},7057:function(t,s,p){t.exports=p.p+"assets/img/1655194292474.1670e603.png"},7058:function(t,s,p){t.exports=p.p+"assets/img/1655194385569.f32bb1c8.png"},7059:function(t,s,p){t.exports=p.p+"assets/img/1655194685651.a03d58ad.png"},7060:function(t,s,p){t.exports=p.p+"assets/img/1655194710565.bab8506d.png"},7061:function(t,s,p){t.exports=p.p+"assets/img/1655194801946.c23f1002.png"},7062:function(t,s,p){t.exports=p.p+"assets/img/1655194922524.23892a31.png"},7063:function(t,s,p){t.exports=p.p+"assets/img/1655195147928.c4700b23.png"},7064:function(t,s,p){t.exports=p.p+"assets/img/1655195348656.a699729f.png"},7065:function(t,s,p){t.exports=p.p+"assets/img/1655195417641.ff21d436.png"},7066:function(t,s,p){t.exports=p.p+"assets/img/1655194881494.79416bee.png"},7067:function(t,s,p){t.exports=p.p+"assets/img/1655195454944.a98d075d.png"},7068:function(t,s,p){t.exports=p.p+"assets/img/1655195572061.2512118d.png"},7069:function(t,s,p){t.exports=p.p+"assets/img/1655195647733.7d1c68d4.png"},7070:function(t,s,p){t.exports=p.p+"assets/img/1655195702599.46ce153b.png"},7071:function(t,s,p){t.exports=p.p+"assets/img/1655195784870.077210de.png"},8813:function(t,s,p){"use strict";p.r(s);var a=p(5),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_19-kubernetes应用部署实战-ruoyi-cloud-本地环境-nacos启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_19-kubernetes应用部署实战-ruoyi-cloud-本地环境-nacos启动"}},[t._v("#")]),t._v(" 19.kubernetes应用部署实战-ruoyi-cloud-本地环境-nacos启动")]),t._v(" "),a("p",[t._v("​\truoyi-cloud是java里面用的比较多的一个后台管理系统的脚手架工程，当然这个过程也包含了分布式里面的一些常用架构")]),t._v(" "),a("p",[t._v("​\t\t首先若依有一个前端的项目是以vue写的，前端通过访问getway网关（我们接下来部署的时候会涉及到分布式第一个中间件--网关），然后网关的所有配置包括网关要发现其他服务在哪，会从配置中心nacos中去寻找配置和服务，网关还会去校验前端的token令牌--令牌是使用redis缓存起来的，如果一切正常网关会放行流量到下面的各个微服务Service，然后各个微服务使用SpringCloud的feign实现远程互相调用，然后这些微服务如果需要操作数据库--我们有数据库系统（读写分离），如果需要操作文件系统也会有一些对象的存储功能oss。")]),t._v(" "),a("p",[t._v("​\t\t包括我们整个ruoyi-cloud里面也部署了一个微服务的整个监控功能--服务监控小平台，这就是整个ruoyi-cloud的整体架构及配合图来理解一下")]),t._v(" "),a("p",[a("img",{attrs:{src:p(7053),alt:"1655193250072"}})]),t._v(" "),a("p",[t._v("​\t\t我们接下来的部署就会涉及到 网关，缓存，数据库，配置中心，服务监控，前端系统，这样就是大概部署了一个分布式项目，而且我们这次的部署先是以纯手工的方式，这样我们就可以体会到我们纯手动的部署一个项目上云的感觉--也会体验到有诸多的困难点，以及一些麻烦的地方")]),t._v(" "),a("h2",{attrs:{id:"_1、项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、项目"}},[t._v("#")]),t._v(" 1、项目")]),t._v(" "),a("p",[t._v("​\t项目地址：https://gitee.com/y_project/RuoYi-Cloud")]),t._v(" "),a("p",[a("img",{attrs:{src:p(7054),alt:"1655194008958"}})]),t._v(" "),a("p",[t._v("​\t我们先fork到自己的仓库，然后克隆项目到本地")]),t._v(" "),a("p",[a("img",{attrs:{src:p(7055),alt:"1655194074486"}})]),t._v(" "),a("p",[t._v("​\t然后我们使用idea打开，我们等待整个项目的构建和依赖的下载，我们打开服务的控制台可以看到将来我们就需要启动这么多的微服务")]),t._v(" "),a("p",[a("img",{attrs:{src:p(7056),alt:"1655194197059"}})]),t._v(" "),a("p",[t._v("​\t\t整个这个启动该怎么做，我们先参照ruoyi-cloud的官方文档，系统模块中我们看到，每一个带端口的都是我们需要启动的服务")]),t._v(" "),a("p",[a("img",{attrs:{src:p(7057),alt:"1655194292474"}})]),t._v(" "),a("p",[t._v("​\t首先是ruoyi-ui前端项目80端口--他会访问我们的网关8080端口")]),t._v(" "),a("p",[a("img",{attrs:{src:p(7058),alt:"1655194385569"}})]),t._v(" "),a("p",[t._v("​\t然后就是由我们的网关会往下转，认证中心9200端口，还有一些系统模块system9201端口提供一些rpc增删改查等一些实现，代码生成器我们可以不用启动，定时任务可以启动，还有文件服务，包括监控中心需要启动。")]),t._v(" "),a("p",[t._v("​\t因为比如我们网关的启动是需要连接配置中心的，所以我们得先把配置中心搞定nacos，去nacos官网，快速开始里面下载")]),t._v(" "),a("p",[a("img",{attrs:{src:p(7059),alt:"1655194685651"}})]),t._v(" "),a("p",[a("img",{attrs:{src:p(7060),alt:"1655194710565"}})]),t._v(" "),a("p",[t._v("​\t我们这次的Nacos的部署是以单机支持MySQL的方式部署--在部署收册下：")]),t._v(" "),a("p",[a("img",{attrs:{src:p(7061),alt:"1655194801946"}})]),t._v(" "),a("p",[t._v("启动nacos前我们先设置一下nacos的配置")]),t._v(" "),a("p",[a("img",{attrs:{src:p(7062),alt:"1655194922524"}})]),t._v(" "),a("p",[t._v("​\t然后我们将配置改为配置收册中的单机支持MySQL的配置--我们使用mysql进行持久化存储，nacos的各种配置和微服务配置都是保存在mysql里面的，还有db的数量，以及第一个db数据库的信息")]),t._v(" "),a("p",[a("img",{attrs:{src:p(7063),alt:"1655195147928"}})]),t._v(" "),a("p",[t._v("​\t然后初始化一下数据库和表--数据库是nacos，数据表是在conf文件夹下的nacos.mysql.sql使用这个脚本初始化")]),t._v(" "),a("p",[a("img",{attrs:{src:p(7064),alt:"1655195348656"}})]),t._v(" "),a("p",[a("img",{attrs:{src:p(7065),alt:"1655195417641"}})]),t._v(" "),a("p",[t._v("我们在本机启动的时候直接startup就可以了")]),t._v(" "),a("p",[a("img",{attrs:{src:p(7066),alt:"1655194881494"}})]),t._v(" "),a("p",[t._v("​\t\t正在启动nacos")]),t._v(" "),a("p",[a("img",{attrs:{src:p(7067),alt:"1655195454944"}})]),t._v(" "),a("p",[t._v("​")]),t._v(" "),a("p",[t._v("​\t\t启动过程可能会发生报错，因为nacos默认是以集群模式启动的，而我们现在是单节点启动")]),t._v(" "),a("p",[t._v("​\t\t相当于给我们cmd这个添加一个参数 -m standalone")]),t._v(" "),a("p",[a("img",{attrs:{src:p(7068),alt:"1655195572061"}})]),t._v(" "),a("p",[a("img",{attrs:{src:p(7069),alt:"1655195647733"}})]),t._v(" "),a("p",[t._v("​\t启动起来后就是8848这个端口进行nacos访问--默认用户名和密码都是nacos")]),t._v(" "),a("p",[a("img",{attrs:{src:p(7070),alt:"1655195702599"}})]),t._v(" "),a("p",[a("img",{attrs:{src:p(7071),alt:"1655195784870"}})]),t._v(" "),a("p",[t._v("https://www.bilibili.com/video/BV13Q4y1C7hS?p=87&spm_id_from=pageDriver")])])}),[],!1,null,null,null);s.default=r.exports}}]);