(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{7086:function(t,s,p){t.exports=p.p+"assets/img/1655197011230.a6a2f6b4.png"},7087:function(t,s,p){t.exports=p.p+"assets/img/1655197084336.8c40611e.png"},7088:function(t,s,p){t.exports=p.p+"assets/img/1655197182326.c0fbd32b.png"},7089:function(t,s,p){t.exports=p.p+"assets/img/1655197250714.d90dc675.png"},7090:function(t,s,p){t.exports=p.p+"assets/img/1655197357073.5d9525d4.png"},7091:function(t,s,p){t.exports=p.p+"assets/img/1655197441339.cbaa3242.png"},7092:function(t,s,p){t.exports=p.p+"assets/img/1655197640101.73de68de.png"},7093:function(t,s,p){t.exports=p.p+"assets/img/1655197749716.9c6f1d05.png"},7094:function(t,s,p){t.exports=p.p+"assets/img/1655197799445.62604c17.png"},7095:function(t,s,p){t.exports=p.p+"assets/img/1655197906394.10edee9a.png"},7096:function(t,s,p){t.exports=p.p+"assets/img/1655197956095.6a1d2fe6.png"},7097:function(t,s,p){t.exports=p.p+"assets/img/1655198084749.d5ce07bb.png"},8904:function(t,s,p){"use strict";p.r(s);var r=p(5),a=Object(r.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"_20-kubernetes应用部署实战-ruoyi-cloud-本地环境-导入数据库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_20-kubernetes应用部署实战-ruoyi-cloud-本地环境-导入数据库"}},[t._v("#")]),t._v(" 20.kubernetes应用部署实战-ruoyi-cloud-本地环境-导入数据库")]),t._v(" "),r("p",[t._v("​\t\t我们现在给ruoyi-cloud里面导入一些初始化数据，这些数据在项目的sql文件夹下，我们先看ry-config这里面的一些表名称其实就是nacos的一些表名")]),t._v(" "),r("p",[r("img",{attrs:{src:p(7086),alt:"1655197011230"}})]),t._v(" "),r("p",[t._v("​\t这个脚本会创建一个ry-config的数据库")]),t._v(" "),r("p",[r("img",{attrs:{src:p(7087),alt:"1655197084336"}})]),t._v(" "),r("p",[t._v("​\t所以这块如果改变了呢，那我们的nacos就得改变一下了，使用ruoyi-config这个数据库")]),t._v(" "),r("p",[r("img",{attrs:{src:p(7088),alt:"1655197182326"}})]),t._v(" "),r("p",[t._v("​\t我们重新登录nacos发现会有很多的配置文件--这些配置文件就是将来我们若依每个应用要使用的配置文件")]),t._v(" "),r("p",[r("img",{attrs:{src:p(7089),alt:"1655197250714"}})]),t._v(" "),r("p",[t._v("​\t比如我们可以看到有一些数据源的配置")]),t._v(" "),r("p",[r("img",{attrs:{src:p(7090),alt:"1655197357073"}})]),t._v(" "),r("p",[t._v("​\t那我们接下来就是把若依的整个数据库搞定，先看一下这个脚本，这个库没有写库名，还得我们自己发现一下，我们通过上面的配置发现库名叫 ry-cloud")]),t._v(" "),r("p",[r("img",{attrs:{src:p(7091),alt:"1655197441339"}})]),t._v(" "),r("p",[t._v("创建数据库ry-cloud并且执行数据库脚本")]),t._v(" "),r("p",[r("img",{attrs:{src:p(7092),alt:"1655197640101"}})]),t._v(" "),r("p",[t._v("​\t还有一个quartz.sql做任务调度的sql，我们看一下任务调度的配置文件连接的库是哪个，还是ry-cloud")]),t._v(" "),r("p",[r("img",{attrs:{src:p(7093),alt:"1655197749716"}})]),t._v(" "),r("p",[t._v("​\tcopy脚本继续执行")]),t._v(" "),r("p",[r("img",{attrs:{src:p(7094),alt:"1655197799445"}})]),t._v(" "),r("p",[t._v("​\t还有一个ry-seata这个脚本，这个是分布式事务的，他会自己创建一个库，他的分布式事务是实验seata框架的")]),t._v(" "),r("p",[r("img",{attrs:{src:p(7095),alt:"1655197906394"}})]),t._v(" "),r("p",[t._v("​\t好了，我们的这些核心数据库都整好了")]),t._v(" "),r("p",[r("img",{attrs:{src:p(7096),alt:"1655197956095"}})]),t._v(" "),r("p",[t._v("​\t一共是三个库")]),t._v(" "),r("p",[t._v("​\t然后我们现在就是来查看一下nacos中的配置哪些是使用到数据库的，我们检查是否需要修改数据库信息，比如用户名和密码 比如job这个配置")]),t._v(" "),r("p",[r("img",{attrs:{src:p(7097),alt:"1655198084749"}})]),t._v(" "),r("p",[t._v("​")]),t._v(" "),r("p",[t._v("https://www.bilibili.com/video/BV13Q4y1C7hS?p=87&spm_id_from=pageDriver")]),t._v(" "),r("p",[t._v("​")])])}),[],!1,null,null,null);s.default=a.exports}}]);