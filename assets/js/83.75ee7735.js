(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{2722:function(t,s,p){t.exports=p.p+"assets/img/1639727183449.3f4df3b8.png"},2723:function(t,s,p){t.exports=p.p+"assets/img/1639727990191.7249a155.png"},2724:function(t,s,p){t.exports=p.p+"assets/img/1639728003676.c2f352c5.png"},2725:function(t,s,p){t.exports=p.p+"assets/img/1639729088343.67569bd9.png"},2726:function(t,s,p){t.exports=p.p+"assets/img/1639729155209.8fe80e53.png"},2727:function(t,s,p){t.exports=p.p+"assets/img/1639730074944.f0e71154.png"},2728:function(t,s,p){t.exports=p.p+"assets/img/1639730197872.114e6ae8.png"},2729:function(t,s,p){t.exports=p.p+"assets/img/1639730397150.f8f7d8db.png"},2730:function(t,s,p){t.exports=p.p+"assets/img/1639730521154.ea052965.png"},2731:function(t,s,p){t.exports=p.p+"assets/img/1639730961848.3f9eb482.png"},2732:function(t,s,p){t.exports=p.p+"assets/img/1639731112331.6d0fa0f4.png"},2733:function(t,s,p){t.exports=p.p+"assets/img/1639731863398.7a3bb97d.png"},2734:function(t,s,p){t.exports=p.p+"assets/img/1639732091371.8dc38ff5.png"},2735:function(t,s,p){t.exports=p.p+"assets/img/1639732183903.ee2eb707.png"},2736:function(t,s,p){t.exports=p.p+"assets/img/1639732266389.4e5a0f45.png"},2737:function(t,s,p){t.exports=p.p+"assets/img/1639735478263.865f30c9.png"},2738:function(t,s,p){t.exports=p.p+"assets/img/1639735722035.2a788d87.png"},2739:function(t,s,p){t.exports=p.p+"assets/img/1639839161073.cbaaf5aa.png"},2740:function(t,s,p){t.exports=p.p+"assets/img/1639839400775.e623237c.png"},2741:function(t,s,p){t.exports=p.p+"assets/img/1639839463599.6f6e5739.png"},2742:function(t,s,p){t.exports=p.p+"assets/img/1639839580467.7cba597f.png"},2743:function(t,s,p){t.exports=p.p+"assets/img/1639839911561.75043e5b.png"},2744:function(t,s,p){t.exports=p.p+"assets/img/1639840081959.61ced016.png"},8341:function(t,s,p){"use strict";p.r(s);var a=p(5),_=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_5-路由权限-本地映射表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-路由权限-本地映射表"}},[t._v("#")]),t._v(" 5.路由权限-本地映射表")]),t._v(" "),a("p",[t._v("我们现在来看路由这部分了")]),t._v(" "),a("p",[t._v("​\t\t现在虽然有些菜单我们是根据权限控制了，但是我们如果知道请求地址还是可以进入访问的--那么这就有问题了--我们需要动态的创建路由")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2722),alt:"1639727183449"}})]),t._v(" "),a("h4",{attrs:{id:"_1、动态创建路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、动态创建路由"}},[t._v("#")]),t._v(" 1、动态创建路由")]),t._v(" "),a("p",[t._v("​\t\t1.需要后端给我们返回权限列表，2.我们本地需要有一个映射表，3.还需要我们登录账户的一个表")]),t._v(" "),a("p",[t._v("最后这3个表进行匹配，最终才能得到我们需要的路由表")]),t._v(" "),a("p",[t._v("新创建一个路由文件--如果写在之前的路由文件中可能有点乱，这个路由是登录之后的路由，并不是之前配置的路由")]),t._v(" "),a("p",[t._v("​\t创建NewRoulter 新闻路由\t输入RFC 快捷键代码生成函数组件")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2723),alt:"1639727990191"}})]),t._v(" "),a("p",[a("img",{attrs:{src:p(2724),alt:"1639728003676"}})]),t._v(" "),a("p",[t._v("我们把之前的整个Switch切走")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2725),alt:"1639729088343"}})]),t._v(" "),a("p",[t._v("然后把新的组件导入进来--NewsRouter，后续我们就用这个进行动态的路由管理")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2726),alt:"1639729155209"}})]),t._v(" "),a("p",[t._v("现在有显示权限和侧边栏的路由是没有问题的")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2727),alt:"1639730074944"}})]),t._v(" "),a("h4",{attrs:{id:"_2、开始动态展示路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、开始动态展示路由"}},[t._v("#")]),t._v(" 2、开始动态展示路由")]),t._v(" "),a("p",[t._v("​\t\t我们不应该这样全部展示的路由去操作")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2728),alt:"1639730197872"}})]),t._v(" "),a("p",[t._v("分析：后端只会给我们返回路径--所以我们需要在我们本地构建一个本地路由 结构")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2729),alt:"1639730397150"}})]),t._v(" "),a("p",[t._v("比如：/home 他的值就是Home组件--将来后端给我们返回/home，我们就给他映射到Home组件")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2730),alt:"1639730521154"}})]),t._v(" "),a("p",[t._v("我们把需要映射的路由组件都写进来")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2731),alt:"1639730961848"}})]),t._v(" "),a("p",[t._v("我们创建好对应的文件夹--然后创建这些需要的组件")]),t._v(" "),a("p",[t._v("​\t\t分为三块 ：新闻管理，发布管理，审核管理")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2732),alt:"1639731112331"}})]),t._v(" "),a("p",[t._v("我们现在想要后端给我们返回一个 平铺效果的路由集合，而不是现在嵌套的方式，如果给的是嵌套的那么只能在前端做一些扁平化的处理")]),t._v(" "),a("p",[t._v("我们将俩张表的数据进行一下合并处理就可以了")]),t._v(" "),a("p",[t._v("​\t\t定义俩个变量用来接收2个接口的数据")]),t._v(" "),a("p",[t._v("​\t\t同时发起2个请求并且都返回结果后我们再进行处理使用Promise.all这个函数进行处理")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2733),alt:"1639731863398"}})]),t._v(" "),a("p",[t._v("res 返回将会是一个数组，下标是0的为第一个请求返回的数据，下标为1的是第二个请求返回的数据")]),t._v(" "),a("p",[t._v("返回2个数据没有问题")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2734),alt:"1639732091371"}})]),t._v(" "),a("p",[t._v("我们合并一下，然后查看一下合并后的数据")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2735),alt:"1639732183903"}})]),t._v(" "),a("p",[t._v("27个数据也是我们需要的这样扁平化的数据--合并没有问题")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2736),alt:"1639732266389"}})]),t._v(" "),a("p",[t._v("我们将这些后端返回的路由集合遍历一下")]),t._v(" "),a("p",[t._v("​\t\t然后path路由地址就是item.key， component组件就用到我们的本地路由配置表LocalRouterMap来映射一下组件。")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2737),alt:"1639735478263"}})]),t._v(" "),a("p",[t._v("页面测试一下效果：发现右侧都是空白的--怎么路径没有匹配到呢")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2738),alt:"1639735722035"}})]),t._v(" "),a("p",[t._v("页面内容路由不显示的原因是：")]),t._v(" "),a("p",[t._v("​\t像这样的路径是能够完全匹配到二级路径的，因为我们在React使用的是模糊匹配，我们使用的Switch就先匹配到他，而真正的路径就不匹配了--如何避免这个问题呢？因为后端给我们返回的包括一级二级等菜单")]),t._v(" "),a("p",[t._v("​\t解决方案就是我们使用精确匹配 加入exact属性")]),t._v(" "),a("p",[t._v("比如这个路径：")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2739),alt:"1639839161073"}})]),t._v(" "),a("p",[t._v("加入精确匹配：")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2740),alt:"1639839400775"}})]),t._v(" "),a("p",[t._v("页面再次测试一下：显示没有问题了")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2741),alt:"1639839463599"}})]),t._v(" "),a("p",[t._v("有可能出现403的问题：403在控制台一闪而过，原因是在路由没有完全循环加载完成的时候，会加载一下Nopermission组件，所以我们进行一下长度判断再加载403组件")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2742),alt:"1639839580467"}})]),t._v(" "),a("h4",{attrs:{id:"_2、判断是否拥有路由权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、判断是否拥有路由权限"}},[t._v("#")]),t._v(" 2、判断是否拥有路由权限")]),t._v(" "),a("p",[t._v("​\t接下来我们进行路由权限的判断--有权限正常显示，没有就返回403组件")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2743),alt:"1639839911561"}})]),t._v(" "),a("p",[t._v("判断开关是否打开的checkRoute，判断当前用户是否有这个路由权限checkUserPermission")]),t._v(" "),a("p",[a("img",{attrs:{src:p(2744),alt:"1639840081959"}})]),t._v(" "),a("p",[t._v("这俩个函数如何写---我们放在下一个笔记中")]),t._v(" "),a("p",[t._v("https://www.bilibili.com/video/BV13v411H74b?p=34&spm_id_from=pageDriver")]),t._v(" "),a("p",[t._v("https://www.bilibili.com/video/BV13v411H74b?p=34&spm_id_from=pageDriver")])])}),[],!1,null,null,null);s.default=_.exports}}]);