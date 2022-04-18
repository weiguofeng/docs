module.exports = [
    {
        title:'首页'
    },
    {
        title:'互联网面试突击第一季',
        collapsable: true,
        children:[
            '/guide/notes/互联网面试突击第一季/第一季介绍'
        ]
    },
    {
        title:'Dubbo',
        collapsable: true,
        children:[
            '/guide/notes/互联网面试突击第一季/dubbo/01体验一下面试官可能会对分布式系统发起的一串连环炮',
            '/guide/notes/互联网面试突击第一季/dubbo/02为什么要把系统拆分成分布式的？为啥要用dubbo？',
            '/guide/notes/互联网面试突击第一季/dubbo/03dubbo的工作原理是啥？注册中心挂了可以继续通信吗？',
            '/guide/notes/互联网面试突击第一季/dubbo/04dubbo都支持哪些通信协议以及序列化协议？',
            '/guide/notes/互联网面试突击第一季/dubbo/05dubbo支持哪些负载均衡、高可用以及动态代理的策略？',
            '/guide/notes/互联网面试突击第一季/dubbo/06SPI是啥思想？dubbo的SPI机制是怎么玩儿的？',
            '/guide/notes/互联网面试突击第一季/dubbo/07基于dubbo如何做服务治理、服务降级以及重试？',
            '/guide/notes/互联网面试突击第一季/dubbo/08分布式系统中接口的幂等性该如何保证？比如不能重复扣款？',
            '/guide/notes/互联网面试突击第一季/dubbo/09分布式系统中接口调用如何保证顺序性？',
            '/guide/notes/互联网面试突击第一季/dubbo/10如何设计一个类似dubbo的rpc框架？架构上该如何考虑？',
        ]
    },
    {
        title:'hystrix设计高可用',
        collapsable: true,
        children:[
            '/guide/notes/互联网面试突击第一季/hystrix/01如何设计高可用系统架构',
            '/guide/notes/互联网面试突击第一季/hystrix/02hystrix与高可用系统架构',
        ]
    },
    {
        title:'Mybatis原理',
        collapsable: true,
        children:[
            '/guide/notes/互联网面试突击第一季/Mybatis/Mybatis原理',
        ]
    },
    {
        title:'Swagger',
        collapsable: true,
        children:[
            '/guide/notes/互联网面试突击第一季/swagger/Swagger介绍',
            '/guide/notes/互联网面试突击第一季/swagger/Swagger-editor',
        ]
    },
    {
        title:'Redis',
        collapsable: true,
        children:[
            '/guide/notes/互联网面试突击第一季/redis/01分布式缓存的第一个问题',
            '/guide/notes/互联网面试突击第一季/redis/02来聊聊redis的线程模型吧？为啥单线程还能有很高的效率？',
            '/guide/notes/互联网面试突击第一季/redis/03redis都有哪些数据类型？适用于哪些场景？',
            '/guide/notes/互联网面试突击第一季/redis/04redis的过期策略能介绍一下吗？',
            '/guide/notes/互联网面试突击第一季/redis/05怎么保证redis是高并发以及高可用的？',
            '/guide/notes/互联网面试突击第一季/redis/06redis复制的完整流程',
            '/guide/notes/互联网面试突击第一季/redis/07redis主从架构如何实现高可用？',
            '/guide/notes/互联网面试突击第一季/redis/08哨兵主备切换的数据丢失的问题',
            '/guide/notes/互联网面试突击第一季/redis/09redis哨兵的多个核心底层原理的深入解析',
            '/guide/notes/互联网面试突击第一季/redis/10redis cluster集群原理',
            '/guide/notes/互联网面试突击第一季/redis/11你能说说我们一般如何应对缓存雪崩以及穿透问题吗？',
            '/guide/notes/互联网面试突击第一季/redis/12如何保证缓存与数据库双写时的数据一致性？',
            '/guide/notes/互联网面试突击第一季/redis/13你能说说redis的并发竞争问题该如何解决吗？',
            '/guide/notes/互联网面试突击第一季/redis/14你们公司生产环境的redis集群的部署架构是什么样的？',
            '/guide/notes/互联网面试突击第一季/redis/15分布式缓存相关面试题的回答技巧总结',
        ]
    },

    {
        title:'zookeeper',
        collapsable: true,
        children:[
            '/guide/notes/互联网面试突击第一季/zookeeper/01说说zookeeper一般都有哪些使用场景？',
            '/guide/notes/互联网面试突击第一季/zookeeper/02分布式锁是啥？对比下redis和zk两种分布式锁的优劣',
            '/guide/notes/互联网面试突击第一季/zookeeper/03说说你们的分布式session方案是啥？怎么做的？.md',
            '/guide/notes/互联网面试突击第一季/zookeeper/04了解分布式事务方案吗？你们都咋做的？有啥坑？',
            '/guide/notes/互联网面试突击第一季/zookeeper/05说说一般如何设计一个高并发的系统架构？',
            '/guide/notes/互联网面试突击第一季/zookeeper/蚂蚁-1为什么要使用Zookeeper',
            '/guide/notes/互联网面试突击第一季/zookeeper/蚂蚁-2zookeeper实现Dubbo的负载均衡原理',
            '/guide/notes/互联网面试突击第一季/zookeeper/蚂蚁-3zookeeper实现分布式锁',
        ]
    },
    {
        title:'分布式搜索',
        collapsable: true,
        children:[
            '/guide/notes/互联网面试突击第一季/分布式搜索/01体验一下分布式搜索引擎4个连环炮',
            '/guide/notes/互联网面试突击第一季/分布式搜索/02分布式搜索引擎写入和查询的工作流程是什么样的？',
            '/guide/notes/互联网面试突击第一季/分布式搜索/03分布式搜索引擎在几十亿数据量级的场景下如何优化查询性能？',
            '/guide/notes/互联网面试突击第一季/分布式搜索/04你们公司生产环境的分布式搜索引擎是怎么部署的呢？',
            '/guide/notes/互联网面试突击第一季/分布式搜索/05总结一下分布式搜索引擎相关问题的面试技巧',
        ]
    },
    {
        title:'分库分表',
        collapsable: true,
        children:[
            '/guide/notes/互联网面试突击第一季/分库分表/01体验一下面试官对于分库分表这个事儿的一个连环炮',
            '/guide/notes/互联网面试突击第一季/分库分表/02来来来！咱们聊一下你们公司是怎么玩儿分库分表的？',
            '/guide/notes/互联网面试突击第一季/分库分表/03你们当时是如何把系统不停机迁移到分库分表的',
            '/guide/notes/互联网面试突击第一季/分库分表/04那如何设计可以动态扩容缩容的分库分表方案',
            '/guide/notes/互联网面试突击第一季/分库分表/05一个关键的问题！分库分表之后全局id咋生成',
            '/guide/notes/互联网面试突击第一季/分库分表/06说说MySQL读写分离的原理？主从同步延时咋解决',
        ]
    },
    {
        title:'大佬总结',
        collapsable: true,
        children:[
            '/guide/notes/互联网面试突击第一季/大佬总结/29岁大专5年外包逆袭',
            '/guide/notes/互联网面试突击第一季/大佬总结/30岁大专经历',
            '/guide/notes/互联网面试突击第一季/大佬总结/32岁文科学习',
            '/guide/notes/互联网面试突击第一季/大佬总结/93年8个月成果经验',
            '/guide/notes/互联网面试突击第一季/大佬总结/18年毕业-阿里面试经历',
        ]
    },
    {
        title:'消息队列',
        collapsable: true,
        children:[
            '/guide/notes/互联网面试突击第一季/消息队列/04消息队列7个连环炮',
            '/guide/notes/互联网面试突击第一季/消息队列/05知其然而知其所以然：如何进行消息队列的技术选型？',
            '/guide/notes/互联网面试突击第一季/消息队列/06引入消息队列之后该如何保证其高可用性？',
            '/guide/notes/互联网面试突击第一季/消息队列/07我的天！我为什么在消息队列里消费到了重复的数据？',
            '/guide/notes/互联网面试突击第一季/消息队列/08我发到消息队列的消息怎么不见了',
            '/guide/notes/互联网面试突击第一季/消息队列/09我该怎么保证从消息队列里拿到的数据按顺序执行？',
            '/guide/notes/互联网面试突击第一季/消息队列/10完了！生产事故！几百万消息在消息队列里积压了几个小时！',
            '/guide/notes/互联网面试突击第一季/消息队列/11如果让你来开发一个消息中间件，你会如何架构？',
            '/guide/notes/互联网面试突击第一季/消息队列/12总结一下消息队列面试技巧',
        ]
    },

    {
        title:'IDEA',
        collapsable: true,
        children:[
            '/guide/notes/idea/IntelliJ IDEA使用技巧1',
            '/guide/notes/idea/IntelliJ IDEA使用技巧2',
            '/guide/notes/idea/Intellij IDEA代码助手3',
            '/guide/notes/idea/Intellij IDEA代码助手alt+Enter',
            '/guide/notes/idea/Intellij IDEA代码助手postFix',
            '/guide/notes/idea/Intellij IDEA编写高质量代码',
            '/guide/notes/idea/Intellij IDEA Git集成',
            '/guide/notes/idea/IntelliJ IDEA Git版本冲突解决方法',
            '/guide/notes/idea/Intellij IDEA从git克隆及提交代码',
            '/guide/notes/idea/Intellij IDEA关联Spring',
            '/guide/notes/idea/Intellij IDEA断点调试',
            '/guide/notes/idea/Intellij IDEA其他操作',
            '/guide/notes/idea/idea的超实用技巧分享',
        ]
    },
    {
        title:'Apollo',
        collapsable: true,
        children:[
            '/guide/notes/apollo/1.apollo分布式配置中心介绍',
            '/guide/notes/apollo/2.apollo的快速入门',
            '/guide/notes/apollo/3.apollo应用配置',
            '/guide/notes/apollo/4.apollo配置发布原理',
            '/guide/notes/apollo/5.apollo整合springboot开发',
            '/guide/notes/apollo/6.apollo的灰度发布',
        ]
    },

    {
        title:'路线图',
        collapsable: true,
        children:[
            '/guide/notes/路线图/前端路线图',
            '/guide/notes/路线图/后端路线图',
            '/guide/notes/路线图/运维路线图',
        ]
    },
    {
        title:'建行龙舟项目',
        collapsable: true,
        children:[
            '/guide/notes/龙舟项目/1.龙舟脚手架前端代码',
            '/guide/notes/龙舟项目/2.龙舟开发过程中需要注意的问题',
            '/guide/notes/龙舟项目/3.龙舟开发中心主要开发流程',
        ]
    },

    {
        title:'vuePress搭建过程',
        collapsable: true,
        children:[
            '/guide/notes/vuepress/vuepress搭建过程1',
            '/guide/notes/vuepress/vuepress搭建过程2',
            '/guide/notes/vuepress/vuepress搭建过程3',
            '/guide/notes/vuepress/vuepress插件及优化',
            '/guide/notes/vuepress/vuepress内存溢出及构建问题'
        ]
    },
    {
        title:'微信小程序',
        collapsable: true,
        children:[
            '/guide/notes/微信小程序'
        ]
    },
    {
        title:'linux',
        collapsable: true,
        children:[
            '/guide/notes/linux'
        ]
    }
];
