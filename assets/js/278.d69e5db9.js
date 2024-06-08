(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{6640:function(t,s,e){t.exports=e.p+"assets/img/1650952876082.aef63c80.png"},6641:function(t,s,e){t.exports=e.p+"assets/img/1650953014215.08470c5e.png"},6642:function(t,s,e){t.exports=e.p+"assets/img/1650953737247.5f7eefe4.png"},6643:function(t,s,e){t.exports=e.p+"assets/img/1650953957221.6e41a6fb.png"},6644:function(t,s,e){t.exports=e.p+"assets/img/1650954060464.e3450396.png"},6645:function(t,s,e){t.exports=e.p+"assets/img/1650954142287.7384fea8.png"},6646:function(t,s,e){t.exports=e.p+"assets/img/1650954288893.795586c3.png"},6647:function(t,s,e){t.exports=e.p+"assets/img/1650954478638.151a5066.png"},6648:function(t,s,e){t.exports=e.p+"assets/img/1650954598962.d040e5e4.png"},6649:function(t,s,e){t.exports=e.p+"assets/img/1650954785117.546fca7d.png"},6650:function(t,s,e){t.exports=e.p+"assets/img/1650954822573.056905e7.png"},8774:function(t,s,e){"use strict";e.r(s);var a=e(5),p=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_24-k8s核心实战-工作负载-deployment扩缩容能力"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_24-k8s核心实战-工作负载-deployment扩缩容能力"}},[t._v("#")]),t._v(" 24.k8s核心实战-工作负载-deployment扩缩容能力")]),t._v(" "),a("h4",{attrs:{id:"_1-什么是扩缩容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是扩缩容"}},[t._v("#")]),t._v(" 1.什么是扩缩容？")]),t._v(" "),a("p",[t._v("​\t比如，我们现在创建一个deployment--然后有2个副本，随着用户量的变大我们发现这2个pod已经负载均衡不了或者说处理不了太多的请求任务了，我们希望再多部署几台Pod，我们把这个多部署的pod叫扩容")]),t._v(" "),a("p",[t._v("​\t扩容在k8s中也很简单，叫kubectl scale ，")]),t._v(" "),a("p",[a("img",{attrs:{src:e(6640),alt:"1650952876082"}})]),t._v(" "),a("p",[t._v("​\t当我们整个流量高峰过去之后，我们也可以让这些pod下线，为我们腾出资源，我们把这个过程叫做 "),a("strong",[t._v("缩容kubectl scale")])]),t._v(" "),a("p",[a("img",{attrs:{src:e(6641),alt:"1650953014215"}})]),t._v(" "),a("p",[t._v("​\t这个扩缩容，以后k8s也可以动态做到扩缩容，所谓的动态就是让k8s自己判断，这个应用负载如果太高了，他自己给扩到多份，负载比较低的时候又自动缩减Pod")]),t._v(" "),a("h4",{attrs:{id:"_2-展示扩缩容能力"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-展示扩缩容能力"}},[t._v("#")]),t._v(" 2.展示扩缩容能力")]),t._v(" "),a("p",[t._v("​\t\t扩缩容能力在k8s中只有一行命令")]),t._v(" "),a("p",[t._v("​\t\tscale是扩缩容参数  replacas是副本数量  deployment 是对deploy的   my-dep是部署的deployment名称")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("kubectl scale --replicas=5 deployment/my-dep\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("我们原先的deploy是部署的3个pod，现在我们执行以下扩容增加到5个副本Pod")]),t._v(" "),a("p",[a("img",{attrs:{src:e(6642),alt:"1650953737247"}})]),t._v(" "),a("p",[t._v("​\t我们看到又增加了2个Pod正在创建中，一共是5个Pod")]),t._v(" "),a("p",[a("img",{attrs:{src:e(6643),alt:"1650953957221"}})]),t._v(" "),a("p",[t._v("如果我们的流量高峰过去了，我们也可以进行一下缩容，我们现在将deploy缩容到2个Pod")]),t._v(" "),a("p",[t._v("​\t\t现在是监视看到5个Pod")]),t._v(" "),a("p",[a("img",{attrs:{src:e(6644),alt:"1650954060464"}})]),t._v(" "),a("p",[t._v("​\t执行缩容命令后：我们可以看到有3个Pod进行了中断删除")]),t._v(" "),a("p",[a("img",{attrs:{src:e(6645),alt:"1650954142287"}})]),t._v(" "),a("p",[t._v("扩容容还可以使用命令kubectl edit deploy mydep名称")]),t._v(" "),a("p",[a("img",{attrs:{src:e(6646),alt:"1650954288893"}})]),t._v(" "),a("p",[t._v("这种修改的方式呢，直接会以yaml的方式打开，我们输入i进入插入模式，可以修改replacas")]),t._v(" "),a("p",[a("img",{attrs:{src:e(6647),alt:"1650954478638"}})]),t._v(" "),a("p",[t._v("例如改为4，然后esc ，冒号 wq保存")]),t._v(" "),a("p",[t._v("我们发现又开始创建Pod了，总数为4个副本Pod")]),t._v(" "),a("p",[a("img",{attrs:{src:e(6648),alt:"1650954598962"}})]),t._v(" "),a("h4",{attrs:{id:"_3、可视化dashboard进行扩缩容处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、可视化dashboard进行扩缩容处理"}},[t._v("#")]),t._v(" 3、可视化dashboard进行扩缩容处理")]),t._v(" "),a("p",[t._v("​\t我们在可视化进行扩缩容也是很方便的")]),t._v(" "),a("p",[t._v("​\t进入工作负载--》然后找到对应的deploy 点击操作中的缩放按钮")]),t._v(" "),a("p",[a("img",{attrs:{src:e(6649),alt:"1650954785117"}})]),t._v(" "),a("p",[t._v("点击数量进行扩缩容--点击缩放，下面也会有提示运行了什么命令--此操作相当于")]),t._v(" "),a("p",[a("img",{attrs:{src:e(6650),alt:"1650954822573"}})])])}),[],!1,null,null,null);s.default=p.exports}}]);