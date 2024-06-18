(window.webpackJsonp=window.webpackJsonp||[]).push([[645],{4611:function(s,a,n){s.exports=n.p+"assets/img/1625410349403.f2044f40.png"},8572:function(s,a,n){"use strict";n.r(a);var t=n(5),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"体验一下面试官可能会对分布式系统发起的一串连环炮"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#体验一下面试官可能会对分布式系统发起的一串连环炮"}},[s._v("#")]),s._v(" 体验一下面试官可能会对分布式系统发起的一串连环炮")]),s._v(" "),t("h4",{attrs:{id:"_1-1-为什么要进行系统拆分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-为什么要进行系统拆分"}},[s._v("#")]),s._v(" 1.1 为什么要进行系统拆分？")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\t之前呢主要是做传统项目，外包项目，即使是互联网公司，一直是那种小的公司，技术一直搞的比较简单，共同的一个问题，就是都没怎么搞过分布式系统。现在的互联网公司，一般是做分布式的系统，大家都不是做底层的分布式系统，比如，分布式存储系统（Hadoop hdfs），分布式计算系统（Hadoop mapreduce，spark），分布式流式计算系统（storm），这些都是属于底层的分布式系统。一般像我们所说和所干的属于分布式业务系统。\n\t\n\t分布式业务系统：把原来用java开发的一个大块系统，给拆分成多个子系统，多个子系统之间互相调用，形成一个大系统的整体。假设你原来做了一个OA系统，里面包含了权限模块，员工模块，请假模块，财务模块，等这些组成一个工程，里面包含了一堆模块，模块与模块之间会互相去调用，一台机器部署。\n\t\n\t现在如果你把这个系统给拆开，权限系统，员工系统，请假系统，财务系统，4个系统，4个工程，分别在4台机器上部署。\n\t\n\t比如：一个请求过来，完成这个请求，这个员工系统，调用权限系统，调用财务系统，4个系统分别完成了一部分的事情，最后4个系统都干完了以后，才认为这个请求已经完成了。\n\t\n\t1.为什么要进行系统拆分？如何进行系统拆分？拆分后不用dubbo可以吗？dubbo和thrift有什么区别呢？\n\t\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h4",{attrs:{id:"_1-2分布式服务框架"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2分布式服务框架"}},[s._v("#")]),s._v(" 1.2分布式服务框架")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("（1）说一下的dubbo的工作原理？注册中心挂了可以继续通信吗？\n\n（2）dubbo支持哪些序列化协议？说一下hessian的数据结构？PB知道吗？为什么PB的效率是最高的？\n\n（3）dubbo负载均衡策略和高可用策略都有哪些？动态代理策略呢？\n\n（4）dubbo的spi思想是什么？\n\n（5）如何基于dubbo进行服务治理、服务降级、失败重试以及超时重试？\n\n（6）分布式服务接口的幂等性如何设计（比如不能重复扣款）？\n\n（7）分布式服务接口请求的顺序性如何保证？\n\n（8）如何自己设计一个类似dubbo的rpc框架？\n\n但是这两年开始兴起和流行了spring cloud，但是我们这里就不讲了，spring cloud刚开始流行，还没有普及，目前普及的是dubbo，出去面试，大部分面试官都是问你dubbo的一些问题\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h4",{attrs:{id:"_1-3分布式锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3分布式锁"}},[s._v("#")]),s._v(" 1.3分布式锁")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\t（1）使用redis如何设计分布式锁？使用zk来设计分布式锁可以吗？这两种分布式锁的实现方式哪种效率比较高？\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_1-4分布式事务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4分布式事务"}},[s._v("#")]),s._v(" 1.4分布式事务")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\t（1）分布式事务了解吗？你们如何解决分布式事务问题的？TCC如果出现网络连不通怎么办？XA的一致性如何保证？\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_1-5分布式会话"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-5分布式会话"}},[s._v("#")]),s._v(" 1.5分布式会话")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\t（1）集群部署时的分布式session如何实现？\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("什么是最简单的分布式系统")])]),s._v(" "),t("p",[t("img",{attrs:{src:n(4611),alt:"1625410349403"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);