(window.webpackJsonp=window.webpackJsonp||[]).push([[352],{3926:function(t,s,i){t.exports=i.p+"assets/img/image-20211228000734310.94cb1087.png"},3927:function(t,s,i){t.exports=i.p+"assets/img/image-20211228000816949.77dc6f78.png"},3928:function(t,s,i){t.exports=i.p+"assets/img/image-20211228001023636.62556ab1.png"},3929:function(t,s,i){t.exports=i.p+"assets/img/image-20211228001100805.b185f1b9.png"},3930:function(t,s,i){t.exports=i.p+"assets/img/image-20211228001244692.29c6db05.png"},3931:function(t,s,i){t.exports=i.p+"assets/img/image-20211228001646617.f371a01d.png"},3932:function(t,s,i){t.exports=i.p+"assets/img/image-20211228002118483.4f8ebed6.png"},3933:function(t,s,i){t.exports=i.p+"assets/img/image-20211228002313937.77d2a8b4.png"},8521:function(t,s,i){"use strict";i.r(s);var a=i(5),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_9-git基本操作-如何对比文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-git基本操作-如何对比文件"}},[t._v("#")]),t._v(" 9.git基本操作-如何对比文件")]),t._v(" "),a("p",[t._v("​\t\t如何对比 本地工作目录文件内容，暂存区文件内容，本地仓库文件内容之间的差异？")]),t._v(" "),a("p",[a("img",{attrs:{src:i(3926),alt:"image-20211228000734310"}})]),t._v(" "),a("p",[t._v("我们可以使用git的diff命令")]),t._v(" "),a("p",[t._v("​\t\t为什么没有输出呢？--因为此时的工作目录-暂存区-本地仓库都是一致的")]),t._v(" "),a("p",[a("img",{attrs:{src:i(3927),alt:"image-20211228000816949"}})]),t._v(" "),a("p",[t._v("我们修改一下file1--给file1写点内容")]),t._v(" "),a("p",[a("img",{attrs:{src:i(3928),alt:"image-20211228001023636"}})]),t._v(" "),a("p",[t._v("我们查看一下修改后的文件")]),t._v(" "),a("p",[a("img",{attrs:{src:i(3929),alt:"image-20211228001100805"}})]),t._v(" "),a("p",[t._v("现在我们查看一下区别--git diff file1")]),t._v(" "),a("p",[t._v("​\ta 表示变动前的版本，b表示变动后的版本")]),t._v(" "),a("p",[t._v("​\t+ 绿色 ：代表新增的内容")]),t._v(" "),a("p",[a("img",{attrs:{src:i(3930),alt:"image-20211228001244692"}})]),t._v(" "),a("p",[t._v("我们把本地的内容提交到暂存区--然后进行暂存区和仓库的文件对比")]),t._v(" "),a("p",[t._v("​\t提交后查看对比--发现没有输出说明一致，这个只是本地和暂存区的对比")]),t._v(" "),a("p",[a("img",{attrs:{src:i(3931),alt:"image-20211228001646617"}})]),t._v(" "),a("p",[t._v("那么我们如何来进行--暂存区和本地仓库的对比呢")]),t._v(" "),a("p",[t._v("​\t使用命令 git diff --cached 文件名称")]),t._v(" "),a("p",[a("img",{attrs:{src:i(3932),alt:"image-20211228002118483"}})]),t._v(" "),a("p",[t._v("我们提交一下，再看看有没有区别--提交后就没有区别了")]),t._v(" "),a("p",[a("img",{attrs:{src:i(3933),alt:"image-20211228002313937"}})]),t._v(" "),a("p",[t._v("为什么我们要学这个比对呢？")]),t._v(" "),a("p",[t._v("​\t\t比如说我们之后想回退是不是就方便了，进行比对撤销")]),t._v(" "),a("p",[t._v("还有就是本地文件 可以直接和仓库的文件进行比对吗？答案是不能")])])}),[],!1,null,null,null);s.default=e.exports}}]);