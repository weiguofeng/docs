(window.webpackJsonp=window.webpackJsonp||[]).push([[650],{4806:function(s,n,t){s.exports=t.p+"assets/img/1624807624703.56f64a61.png"},8542:function(s,n,t){"use strict";t.r(n);var a=t(5),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_10-完了-生产事故-几百万消息在消息队列里积压了几个小时"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-完了-生产事故-几百万消息在消息队列里积压了几个小时"}},[s._v("#")]),s._v(" 10_完了！生产事故！几百万消息在消息队列里积压了几个小时！")]),s._v(" "),a("h4",{attrs:{id:"_1-面试题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-面试题"}},[s._v("#")]),s._v(" 1.面试题")]),s._v(" "),a("p",[a("strong",[s._v("如何解决消息队列的延时以及过期失效的问题？ 消息队列满了以后该怎么处理？有几百万消息持续积压几小时，说说怎么解决？")])]),s._v(" "),a("h4",{attrs:{id:"_2-面试官心里分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-面试官心里分析"}},[s._v("#")]),s._v(" 2.面试官心里分析")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\t你看这问法，其实本质针对的场景，就是说，你可能消费端出了问题，不消费了，或者消费极其极其慢。接着就坑爹了，可能你的消息队列集群的磁盘都快写满了，都没人消费，这个时候怎么办？或者是整个这就积压了几个小时，你这个时候怎么办？或者你积压的时间太长了，导致比如RabbitMQ设置了消息过期时间后就没了怎么办？\n\t\n\t所以就这事儿，其实线上挺常见的，一般不出，一出就是大case，一般常见于，举个例子，消费端每次消费之后要写mysql，结果mysql挂了，消费端hang那儿了，不动了。或者是消费端出了个什么叉子，导致消费速度极其慢。\n\t\n\t\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h4",{attrs:{id:"_3-面试题剖析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-面试题剖析"}},[s._v("#")]),s._v(" 3.面试题剖析")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\t关于这个事儿，我们一个一个来梳理吧，先假设一个场景，我们现在消费端出故障了，然后大量消息在mq里积压，现在事故了，慌了\n\t\n\t1.大量消息在mq里积压了几个小时了还没解决:\n\n\t几千万条数据在MQ里积压了七八个小时，从下午4点多，积压到了晚上很晚，10点多，11点多\n\t\n\t这个是我们真实遇到过的一个场景，确实是线上故障了，这个时候要不然就是修复consumer的问题，让他恢复消费速度，然后傻傻的等待几个小时消费完毕。这个肯定不能在面试的时候说吧。\n\t\n\t一个消费者一秒是1000条，一秒3个消费者是3000条，一分钟是18万条，1000多万条\n\n    所以如果你积压了几百万到上千万的数据，即使消费者恢复了，也需要大概1小时的时间才能恢复过来\n    \n    一般这个时候，只能操作临时紧急扩容了，具体操作步骤和思路如下：\n    \t1）先修复consumer的问题，确保其恢复消费速度，然后将现有cnosumer都停掉\n\t\t2）新建一个topic，partition是原来的10倍，临时建立好原先10倍或者20倍的queue数量\n\t\t3）然后写一个临时的分发数据的consumer程序，这个程序部署上去消费积压的数据，消费之后不做耗时的处理，直接均匀轮询写入临时建立好的10倍数量的queue\n\t\t4）接着临时征用10倍的机器来部署consumer，每一批consumer消费一个临时queue的数据\n\t\t5）这种做法相当于是临时将queue资源和consumer资源扩大10倍，以正常的10倍速度来消费数据\n\t\t6）等快速消费完积压数据之后，得恢复原先部署架构，重新用原先的consumer机器来消费消息\n\t\t\n\t\t\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("p",[a("strong",[s._v("快速处理积压消息")])]),s._v(" "),a("p",[a("img",{attrs:{src:t(4806),alt:"1624807624703"}})]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\t（2）这里我们假设再来第二个坑\n\n\t\t假设你用的是rabbitmq，rabbitmq是可以设置过期时间的，就是TTL，如果消息在queue中积压超过一定的时间就会被rabbitmq给清理掉，这个数据就没了。那这就是第二个坑了。这就不是说数据会大量积压在mq里，而是大量的数据会直接搞丢。\n\n\t\t这个情况下，就不是说要增加consumer消费积压的消息，因为实际上没啥积压，而是丢了大量的消息。我们可以采取一个方案，就是批量重导，这个我们之前线上也有类似的场景干过。就是大量积压的时候，我们当时就直接丢弃数据了，然后等过了高峰期以后，比如大家一起喝咖啡熬夜到晚上12点以后，用户都睡觉了。\n\n\t\t这个时候我们就开始写程序，将丢失的那批数据，写个临时程序，一点一点的查出来，然后重新灌入mq里面去，把白天丢的数据给他补回来。也只能是这样了。\n\n\t\t假设1万个订单积压在mq里面，没有处理，其中1000个订单都丢了，你只能手动写程序把那1000个订单给查出来，手动发到mq里去再补一次\n\t\t\n\t（3）然后我们再来假设第三个坑\n\n\t\t如果走的方式是消息积压在mq里，那么如果你很长时间都没处理掉，此时导致mq都快写满了，咋办？这个还有别的办法吗？没有，谁让你第一个方案执行的太慢了，你临时写程序，接入数据来消费，消费一个丢弃一个，都不要了，快速消费掉所有的消息。然后走第二个方案，到了晚上再补数据吧。\n\t\t\n\t\t\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);