(window.webpackJsonp=window.webpackJsonp||[]).push([[765],{8627:function(v,_,t){"use strict";t.r(_);var s=t(5),n=Object(s.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"_04消息队列7个连环炮"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_04消息队列7个连环炮"}},[v._v("#")]),v._v(" 04消息队列7个连环炮")]),v._v(" "),t("h5",{attrs:{id:"面试官-你在系统里用过消息队列吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#面试官-你在系统里用过消息队列吗"}},[v._v("#")]),v._v(" 面试官：你在系统里用过消息队列吗？")]),v._v(" "),t("p",[t("strong",[v._v("候选人:")]),v._v(" 用过的。（此时感觉没啥）")]),v._v(" "),t("p",[t("strong",[v._v("面试官：")]),v._v(" 那你说一下你们项目里是怎么用消息队列的？")]),v._v(" "),t("p",[t("strong",[v._v("候选人：")]),v._v(" 巴拉巴拉，我们啥啥系统发送个啥啥到消息队列，别的系统来消费啥的。（很多同学在这里会进入一个误区，就是你仅仅知道以及回答你们是怎么用这个消息队列的，用这个消息队列来干了个什么事情？）")]),v._v(" "),t("p",[v._v("​\t\t\t"),t("strong",[v._v("比如：")]),v._v(" 我们有个订单系统，订单系统会每次下一个新的订单的时候，然后就会发送一条消息到MQ里面去，后台有个库存系统负责获取了消息然后更新库存。")]),v._v(" "),t("p",[t("strong",[v._v("面试官：")]),v._v(" 那你们为什么使用消息队列啊？")]),v._v(" "),t("p",[v._v("（你的订单系统不发送消息到MQ，直接订单系统调用库存系统一个接口，咔嚓一下，直接就调用成功了，库存就更新了）")]),v._v(" "),t("p",[t("strong",[v._v("候选人：")]),v._v(" 额。。。（愣了一下，为什么？我没怎么仔细想过啊，老大让用就用了），硬着头皮胡言乱语了几句。")]),v._v(" "),t("p",[v._v("（面试官此时心里想的是看你愣了一下，然后听你胡言乱语了几句，开始心里觉得那什么了，怀疑你之前就压根没思考过这个问题）")]),v._v(" "),t("p",[t("strong",[v._v("面试官：")]),v._v(" 那你说说消息队列都有什么优点和缺点呀？")]),v._v(" "),t("p",[v._v("（面试官此时心想：你的MQ在项目里为啥要用？你没考虑过，那我稍微简单点，我问问你消息队列你之前有没有考虑如果用的话，优点和缺点分别是啥？）")]),v._v(" "),t("p",[t("strong",[v._v("候选人：")]),v._v(" 这个。。。。（确实平时没怎么考虑过这个问题啊。。。胡言乱语了）")]),v._v(" "),t("p",[v._v("（面试官此时心里已经更觉得你这哥们不行，平时都没什么思考）")]),v._v(" "),t("p",[t("strong",[v._v("面试官：")]),v._v(" kafka，activemq，rabbitmq，rocketmq都有什么区别？")]),v._v(" "),t("p",[v._v("（面试官问你这个问题，就是说，绕过比较虚的话题，直接看看你对各种MQ中间件是否了解，是否做过功课 ，是否做过调研）")]),v._v(" "),t("p",[t("strong",[v._v("候选人：")]),v._v(" 我们就用过activemq，所以别的也没有用过。。。区别，也不太清楚")]),v._v(" "),t("p",[v._v("（面试官此时觉得，你这哥们儿平时就是瞎用，根本就没什么思考，觉得不行，直接就挂掉了）")]),v._v(" "),t("p",[t("strong",[v._v("面试官：")]),v._v(" 那你们是如何保证消息队列的高可用啊？")]),v._v(" "),t("p",[t("strong",[v._v("候选人：")]),v._v(" 这个。。。我平时就是简单走API调用一下，不太清楚消息队列怎么部署的。")]),v._v(" "),t("p",[t("strong",[v._v("面试官：")]),v._v(" 如何保证消息不被重复消费？如何保证消费的时候是幂等的啊？")]),v._v(" "),t("p",[t("strong",[v._v("候选人：")]),v._v(" 啥？（mq不就是写入和消费就可以了，哪来这么多问题）")]),v._v(" "),t("p",[t("strong",[v._v("面试官：")]),v._v(" 如何保证消息可靠性传输啊？要是消息丢了怎么办啊？")]),v._v(" "),t("p",[t("strong",[v._v("候选人：")]),v._v(" 我们没怎么丢过消息啊。。。")]),v._v(" "),t("p",[t("strong",[v._v("面试官：")]),v._v(" 你怎么能保证消息的顺序性呢？")]),v._v(" "),t("p",[t("strong",[v._v("候选人：")]),v._v(" 顺序性？什么意思？我为什么要保证消息的顺序性？")]),v._v(" "),t("p",[t("strong",[v._v("面试官：")]),v._v(" 如何解决消息队列的延时及过期失效问题？消息队列满了以后该怎么处理？有几百万消息持续积压几小时，说说怎么解决？")]),v._v(" "),t("p",[t("strong",[v._v("候选人：")]),v._v(" 不是，我这平时没遇到过这些问题啊，就是简单用用，知道mq的一些功能。")]),v._v(" "),t("p",[t("strong",[v._v("面试官：")]),v._v(" 如果让你写一个消息队列，该如何进行架构设计啊？说一下你的思路")]),v._v(" "),t("p",[t("strong",[v._v("候选人：")]),v._v(" 。。。。我还是走吧。。。。")]),v._v(" "),t("p",[v._v("​\t**很多公司，一种比较类似的一种面试风格，就是一般我们不是发散的，我们是从点铺开，比如说我们会可能跟你聊聊高并发话题，就这个话题里面跟你聊聊缓存，MQ等等东西吧 **")]),v._v(" "),t("p",[v._v("​\t**对于每个小话题，比如说MQ，我们会从浅入深，这个上面的这个面试套路其实是蛮典型的，如果你确实说自己会MQ，你出去面试，去一些大公司面试，有些面试官可能就是这种风格，就是一步一步深挖。 **")]),v._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("\t其实上面是一个非常典型的关于消息队列的技术考察过程，好的面试官一定是从你做过的某一个点切入，然后层层展开深入考察，一个接一个问，直到把这个技术点刨根问底，问到最底层。\n\t\n\t如果没有刻意的对这种面试方式锻炼一下，出去面试碰到难一点的面试，大多会手忙脚乱，基本面试以失败为告终。\n\t\n\t但是如果你把这些常见问题都掌握了，哪怕是面试官没问到你那么深入，他问你一个消息队列问题，你就自己给他说出自己的一整套见解，那么恭喜你，就是plus加分项了。\n")])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br"),t("span",{staticClass:"line-number"},[v._v("2")]),t("br"),t("span",{staticClass:"line-number"},[v._v("3")]),t("br"),t("span",{staticClass:"line-number"},[v._v("4")]),t("br"),t("span",{staticClass:"line-number"},[v._v("5")]),t("br")])])])}),[],!1,null,null,null);_.default=n.exports}}]);