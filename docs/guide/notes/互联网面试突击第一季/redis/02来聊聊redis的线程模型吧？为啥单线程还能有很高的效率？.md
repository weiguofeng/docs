# 20_来聊聊redis的线程模型吧？为啥单线程还能有很高的效率？



#### 1.面试题

​	**redis和memcached有什么区别？redis的线程模型是什么？为什么单线程的redis比多线程的memcached效率要高得多？(或者为什么redis是单线程的但是还可以支撑高并发？)**





#### 2.面试官心里分析

```
	这个是问redis的时候，最基本的问题吧，redis最基本的一个内部原理和特点，就是redis实际上是个单线程工作模型（NIO异步非阻塞），你要是这个都不知道，那后面玩redis的时候，出了问题岂不是什么都不知道？
	
	还有可能面试官会问问你redis和memcached的区别？不过说实话，最近这俩年，很多面试官不喜欢这么问了，memcached是早些年各大互联网公司常用的缓存方案，但是现在近几年基本都是redis，没什么公司用memcached了。
	
	
```



#### 3.额外友情提示

```
	同学，你要是现在还不知道redis和memcached是啥？那你赶紧百度一下redis入门和memcahced入门，简单启动一下，然后试一下几个简单操作，先感受一下。我觉得1小时以内你就搞定了。

	另外一个友情提示，要听明白redis的线程模型，你需要了解socket网络相关的基本知识，如果不懂。。。那我觉得你java没学好吧。初学者都该学习java的socket网络通信相关知识的。。。
```



#### 4.面试题剖析

```
	1.redis和memcached有什么区别？
		1.1 redis支持的数据结构更多能适应更多的应用场景，memcached支持的数据结构少
		1.2 性能对比：redis只使用单核，而memcached可以使用多核，所以平均每一个核上Redis在存储小数据时比memcached性能更高，而在100K以上的数据中，memcached性能要高于redis。
		1.3集群模式：memcached没有原生的集群模式，需要依靠客户端来实现往集群中分片写入数据；但是redis目前是原生支持cluster模式的，redis官方就是支持 redis cluster集群模式的，比memcached来说更好。
		
		
		
	
	2.redis线程模型
		1）文件事件处理器(file event handler):redis基于reactor模式开发了网络事件处理器，这个处理器叫做文件事件处理器，file event handler。这个文件事件处理器，是单线程的，redis才叫做单线程的模型，采用IO多路复用机制同时监听多个socket，根据socket上的事件来选择对应的事件处理器来处理这个事件。

如果被监听的socket准备好执行accept、read、write、close等操作的时候，跟操作对应的文件事件就会产生，这个时候文件事件处理器就会调用之前关联好的事件处理器来处理这个事件。

文件事件处理器是单线程模式运行的，但是通过IO多路复用机制监听多个socket，可以实现高性能的网络通信模型，又可以跟内部其他单线程的模块进行对接，保证了redis内部的线程模型的简单性。

文件事件处理器的结构包含4个部分：多个socket，IO多路复用程序，文件事件分派器，事件处理器（命令请求处理器、命令回复处理器、连接应答处理器，等等）。

多个socket可能并发的产生不同的操作，每个操作对应不同的文件事件，但是IO多路复用程序会监听多个socket，但是会将socket放入一个队列中排队，每次从队列中取出一个socket给事件分派器，事件分派器把socket给对应的事件处理器。

然后一个socket的事件处理完之后，IO多路复用程序才会将队列中的下一个socket给事件分派器。文件事件分派器会根据每个socket当前产生的事件，来选择对应的事件处理器来处理。

		2）文件事件

			当socket变得可读时（比如客户端对redis执行write操作，或者close操作），或者有新的可以应答的sccket出现时（客户端对redis执行connect操作），socket就会产生一个AE_READABLE事件。

当socket变得可写的时候（客户端对redis执行read操作），socket会产生一个AE_WRITABLE事件。

IO多路复用程序可以同时监听AE_REABLE和AE_WRITABLE两种事件，要是一个socket同时产生了AE_READABLE和AE_WRITABLE两种事件，那么文件事件分派器优先处理AE_REABLE事件，然后才是AE_WRITABLE事件。

		3）文件事件处理器

如果是客户端要连接redis，那么会为socket关联连接应答处理器
如果是客户端要写数据到redis，那么会为socket关联命令请求处理器
如果是客户端要从redis读数据，那么会为socket关联命令回复处理器

		4）客户端与redis通信的一次流程（1.2.3.4.主要看4）

			在redis启动初始化的时候，redis会将连接应答处理器跟AE_READABLE事件关联起来，接着如果一个客户端跟redis发起连接，此时会产生一个AE_READABLE事件，然后由连接应答处理器来处理跟客户端建立连接，创建客户端对应的socket，同时将这个socket的AE_READABLE事件跟命令请求处理器关联起来。

			当客户端向redis发起请求的时候（不管是读请求还是写请求，都一样），首先就会在socket产生一个AE_READABLE事件，然后由对应的命令请求处理器来处理。这个命令请求处理器就会从socket中读取请求相关数据，然后进行执行和处理。

			接着redis这边准备好了给客户端的响应数据之后，就会将socket的AE_WRITABLE事件跟命令回复处理器关联起来，当客户端这边准备好读取响应数据时，就会在socket上产生一个AE_WRITABLE事件，会由对应的命令回复处理器来处理，就是将准备好的响应数据写入socket，供客户端来读取。

		命令回复处理器写完之后，就会删除这个socket的AE_WRITABLE事件和命令回复处理器的关联关系。

```





**redis单线程模型**

![1624870774483](../../../../.vuepress/public/images/1624870774483.png)









```
	3.为啥redis单线程模型也能效率这么高？

        1）纯内存操作
        2）核心是基于非阻塞的IO多路复用机制
        3）单线程反而避免了多线程的频繁上下文切换问题（百度）
```







































