(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{7822:function(t,s,p){t.exports=p.p+"assets/img/1661502765382.97ee23c1.png"},7823:function(t,s,p){t.exports=p.p+"assets/img/1661502914748.ca9755df.png"},7824:function(t,s,p){t.exports=p.p+"assets/img/1661503072080.6e91dcfd.png"},7825:function(t,s,p){t.exports=p.p+"assets/img/1661503299892.c19b5d1b.png"},7826:function(t,s,p){t.exports=p.p+"assets/img/1661503488478.0d07e52e.png"},7827:function(t,s,p){t.exports=p.p+"assets/img/1661503669962.0063f123.png"},7828:function(t,s,p){t.exports=p.p+"assets/img/1661503825848.845438d6.png"},7829:function(t,s,p){t.exports=p.p+"assets/img/1661504038000.2931c0fa.png"},7830:function(t,s,p){t.exports=p.p+"assets/img/1661504111687.48e2f55f.png"},7831:function(t,s,p){t.exports=p.p+"assets/img/1661504459820.913bc755.png"},7832:function(t,s,p){t.exports=p.p+"assets/img/1661505063489.abd73db5.png"},7833:function(t,s,p){t.exports=p.p+"assets/img/1661505106125.7fdb4701.png"},8882:function(t,s,p){"use strict";p.r(s);var e=p(5),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_12-vuepress项目发布到github流水线发布"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_12-vuepress项目发布到github流水线发布"}},[t._v("#")]),t._v(" 12.vuePress项目发布到github流水线发布")]),t._v(" "),e("p",[t._v("部署我们前端项目的思路：")]),t._v(" "),e("p",[e("img",{attrs:{src:p(7822),alt:"1661502765382"}})]),t._v(" "),e("p",[t._v("​\t我们现在把build和打包dist，然后scp上传到服务器这几步操作--我们使用github Action来实现")]),t._v(" "),e("p",[t._v("​\t我们终端执行 yarn build 进行编译构建")]),t._v(" "),e("p",[t._v("​\t打好的包就是这个dist文件夹")]),t._v(" "),e("p",[e("img",{attrs:{src:p(7823),alt:"1661502914748"}})]),t._v(" "),e("p",[t._v("我们进入github ，然后点击项目，进入Action --new workflow 创建工作流，工作流就会把我们想做的事情给做了")]),t._v(" "),e("p",[e("img",{attrs:{src:p(7824),alt:"1661503072080"}})]),t._v(" "),e("p",[t._v("​\t他里面就有很多默认的工作流模式，比如部署nodejs，或者是想部署在亚马逊的ES云上")]),t._v(" "),e("p",[e("img",{attrs:{src:p(7825),alt:"1661503299892"}})]),t._v(" "),e("p",[t._v("我们为了更加了解 使用  "),e("a",{attrs:{href:"https://github.com/weiguofeng/docs/new/main?filename=.github%2Fworkflows%2Fmain.yml&workflow_template=blank",target:"_blank",rel:"noopener noreferrer"}},[t._v("set up a workflow yourself "),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("​\t这就相当于我们不使用他给的这些工作流，我们使用自己配置的-然后会给我们一个配置文件让我们自己写")]),t._v(" "),e("p",[e("img",{attrs:{src:p(7826),alt:"1661503488478"}})]),t._v(" "),e("p",[t._v("​\t首先是 name：CI 我们可以改为deploy-website 给他定义一个名字")]),t._v(" "),e("p",[t._v("on：就是触发他的机制")]),t._v(" "),e("p",[t._v("​\t\tpush 就是推送代码的时候触发， main就是当main这个分支被推送代码的时候就会触发")]),t._v(" "),e("p",[t._v("​\t\tpull的时候也会触发，这里我们可以把pull去掉")]),t._v(" "),e("p",[e("img",{attrs:{src:p(7827),alt:"1661503669962"}})]),t._v(" "),e("p",[t._v("job：就是具体要执行的任务")]),t._v(" "),e("p",[t._v("​\tbuild： runs-on：就是在哪个操作系统下进行构建")]),t._v(" "),e("p",[t._v("​\tsteps：这是具体步骤，我们真正改的就是这里的内容")]),t._v(" "),e("p",[e("img",{attrs:{src:p(7828),alt:"1661503825848"}})]),t._v(" "),e("p",[t._v("​\t-uses：action/checkout@v2 是checkout我们当前的代码")]),t._v(" "),e("p",[t._v("​\t-name：install nodejs 定义一个名字，每个任务都要有一个名字")]),t._v(" "),e("p",[t._v("​\t-uses: 因为我们想要安装node，所以我们在右侧搜索一下node基本上都有我们需要的")]),t._v(" "),e("p",[e("img",{attrs:{src:p(7829),alt:"1661504038000"}})]),t._v(" "),e("p",[t._v("​\t\t我们点击这个setup Node.js")]),t._v(" "),e("p",[t._v("然后下面这块就是我们需要安装node所需要的配置，我们copy")]),t._v(" "),e("p",[e("img",{attrs:{src:p(7830),alt:"1661504111687"}})]),t._v(" "),e("p",[t._v("use：执行node版本")]),t._v(" "),e("p",[t._v("-with：就是需要安装的包")]),t._v(" "),e("p",[t._v("​\t\t然后就是运行安装，构建，scp发送到服务器，指定服务器地址和密码--使用Action的变量方式")]),t._v(" "),e("p",[t._v("​\t\t发送的端口是22，源是docs/ 编译后的文件使用变量的方式target：")]),t._v(" "),e("p",[e("img",{attrs:{src:p(7831),alt:"1661504459820"}})]),t._v(" "),e("p",[t._v("我们在github中，点小数点也可以对项目进行编辑，然后修改后也可以直接提交")]),t._v(" "),e("p",[e("img",{attrs:{src:p(7832),alt:"1661505063489"}})]),t._v(" "),e("p",[t._v("我们提交代码后就会有 工作流执行了")]),t._v(" "),e("p",[e("img",{attrs:{src:p(7833),alt:"1661505106125"}})]),t._v(" "),e("p",[t._v("https://www.bilibili.com/video/BV1Ca411h7rx?spm_id_from=333.337.search-card.all.click&vd_source=243ad3a9b323313aa1441e5dd414a4ef")])])}),[],!1,null,null,null);s.default=n.exports}}]);