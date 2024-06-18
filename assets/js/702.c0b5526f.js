(window.webpackJsonp=window.webpackJsonp||[]).push([[702],{8242:function(a,t,s){"use strict";s.r(t);var n=s(5),r=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"第四周"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第四周"}},[a._v("#")]),a._v(" 第四周")]),a._v(" "),s("h2",{attrs:{id:"_1-简述线程-程序、进程的基本概念。以及他们之间关系是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-简述线程-程序、进程的基本概念。以及他们之间关系是什么"}},[a._v("#")]),a._v(" 1. 简述线程，程序、进程的基本概念。以及他们之间关系是什么？")]),a._v(" "),s("p",[s("strong",[a._v("线程")]),a._v("与进程相似，但线程是一个比进程更小的执行单位。一个进程在其执行的过程中可以产生多个线程。与进程不同的是同类的多个线程共享同一块内存空间和一组系统资源，所以系统在产生一个线程，或是在各个线程之间作切换工作时，负担要比进程小得多，也正因为如此，线程也被称为轻量级进程。")]),a._v(" "),s("p",[s("strong",[a._v("程序")]),a._v("是含有指令和数据的文件，被存储在磁盘或其他的数据存储设备中，也就是说程序是静态的代码。")]),a._v(" "),s("p",[s("strong",[a._v("进程")]),a._v("是程序的一次执行过程，是系统运行程序的基本单位，因此进程是动态的。系统运行一个程序即是一个进程从创建，运行到消亡的过程。简单来说，一个进程就是一个执行中的程序，它在计算机中一个指令接着一个指令地执行着，同时，每个进程还占有某些系统资源如CPU时间，内存空间，文件，文件，输入输出设备的使用权等等。换句话说，当程序在执行时，将会被操作系统载入内存中。")]),a._v(" "),s("p",[s("strong",[a._v("线程")]),a._v(" 是 "),s("strong",[a._v("进程")]),a._v(" 划分成的更小的运行单位。线程和进程最大的不同在于基本上各进程是独立的，而各线程则不一定，因为同一进程中的线程极有可能会相互影响。从另一角度来说，进程属于操作系统的范畴，主要是同一段时间内，可以同时执行一个以上的程序，而线程则是在同一程序内几乎同时执行一个以上的程序段。")]),a._v(" "),s("p",[s("strong",[a._v("线程上下文的切换比进程上下文切换要快很多")])]),a._v(" "),s("ul",[s("li",[a._v("进程切换时，涉及到当前进程的CPU环境的保存和新被调度运行进程的CPU环境的设置。")]),a._v(" "),s("li",[a._v("线程切换仅需要保存和设置少量的寄存器内容，不涉及存储管理方面的操作。")])]),a._v(" "),s("h2",{attrs:{id:"_2-线程有哪些基本状态-这些状态是如何定义的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-线程有哪些基本状态-这些状态是如何定义的"}},[a._v("#")]),a._v(" 2. 线程有哪些基本状态？这些状态是如何定义的?")]),a._v(" "),s("ol",[s("li",[s("strong",[a._v("新建(new)")]),a._v("：新创建了一个线程对象。")]),a._v(" "),s("li",[s("strong",[a._v("可运行(runnable)")]),a._v("：线程对象创建后，其他线程(比如main线程）调用了该对象的start()方法。该状态的线程位于可运行线程池中，等待被线程调度选中，获 取cpu的使用权。")]),a._v(" "),s("li",[s("strong",[a._v("运行(running)")]),a._v("：可运行状态(runnable)的线程获得了cpu时间片（timeslice），执行程序代码。")]),a._v(" "),s("li",[s("strong",[a._v("阻塞(block)")]),a._v("：阻塞状态是指线程因为某种原因放弃了cpu使用权，也即让出了cpu timeslice，暂时停止运行。直到线程进入可运行(runnable)状态，才有 机会再次获得cpu timeslice转到运行(running)状态。阻塞的情况分三种：")])]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("(一). 等待阻塞")]),a._v("：运行(running)的线程执行o.wait()方法，JVM会把该线程放 入等待队列(waiting queue)中。")]),a._v(" "),s("li",[s("strong",[a._v("(二). 同步阻塞")]),a._v("：运行(running)的线程在获取对象的同步锁时，若该同步  锁 被别的线程占用，则JVM会把该线程放入锁池(lock pool)中。")]),a._v(" "),s("li",[s("strong",[a._v("(三). 其他阻塞")]),a._v(": 运行(running)的线程执行Thread.sleep(long ms)或t.join()方法，或者发出了I/O请求时，JVM会把该线程置为阻塞状态。当sleep()状态超时join()等待线程终止或者超时、或者I/O处理完毕时，线程重新转入可运行(runnable)状态。")])]),a._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[s("strong",[a._v("死亡(dead)")]),a._v("：线程run()、main()方法执行结束，或者因异常退出了run()方法，则该线程结束生命周期。死亡的线程不可再次复生。")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/8/9/1651f19d7c4e93a3?w=876&h=492&f=png&s=128092",alt:""}})]),a._v(" "),s("p",[a._v("备注： 可以用早起坐地铁来比喻这个过程（下面参考自牛客网某位同学的回答）：")]),a._v(" "),s("ol",[s("li",[a._v("还没起床：sleeping")]),a._v(" "),s("li",[a._v("起床收拾好了，随时可以坐地铁出发：Runnable")]),a._v(" "),s("li",[a._v("等地铁来：Waiting")]),a._v(" "),s("li",[a._v("地铁来了，但要排队上地铁：I/O阻塞")]),a._v(" "),s("li",[a._v("上了地铁，发现暂时没座位：synchronized阻塞")]),a._v(" "),s("li",[a._v("地铁上找到座位：Running")]),a._v(" "),s("li",[a._v("到达目的地：Dead")])]),a._v(" "),s("h2",{attrs:{id:"_3-何为多线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-何为多线程"}},[a._v("#")]),a._v(" 3. 何为多线程？")]),a._v(" "),s("p",[a._v("多线程就是多个线程同时运行或交替运行。单核CPU的话是顺序执行，也就是交替运行。多核CPU的话，因为每个CPU有自己的运算器，所以在多个CPU中可以同时运行。")]),a._v(" "),s("h2",{attrs:{id:"_4-为什么多线程是必要的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-为什么多线程是必要的"}},[a._v("#")]),a._v(" 4. 为什么多线程是必要的？")]),a._v(" "),s("ol",[s("li",[a._v("使用线程可以把占据长时间的程序中的任务放到后台去处理。")]),a._v(" "),s("li",[a._v("用户界面可以更加吸引人，这样比如用户点击了一个按钮去触发某些事件的处理，可以弹出一个进度条来显示处理的进度。")]),a._v(" "),s("li",[a._v("程序的运行速度可能加快。")])]),a._v(" "),s("h2",{attrs:{id:"_5-使用多线程常见的三种方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-使用多线程常见的三种方式"}},[a._v("#")]),a._v(" 5 使用多线程常见的三种方式")]),a._v(" "),s("h3",{attrs:{id:"_1继承thread类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1继承thread类"}},[a._v("#")]),a._v(" ①继承Thread类")]),a._v(" "),s("p",[a._v("MyThread.java")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('public class MyThread extends Thread {\n\t@Override\n\tpublic void run() {\n\t\tsuper.run();\n\t\tSystem.out.println("MyThread");\n\t}\n}\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("p",[a._v("Run.java")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('public class Run {\n\n\tpublic static void main(String[] args) {\n\t\tMyThread mythread = new MyThread();\n\t\tmythread.start();\n\t\tSystem.out.println("运行结束");\n\t}\n\n}\n\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])]),s("p",[a._v("运行结果：\n"),s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/3/20/16243e80f22a2d54?w=161&h=54&f=jpeg&s=7380",alt:"结果"}}),a._v("\n从上面的运行结果可以看出：线程是一个子任务，CPU以不确定的方式，或者说是以随机的时间来调用线程中的run方法。")]),a._v(" "),s("h3",{attrs:{id:"_2实现runnable接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2实现runnable接口"}},[a._v("#")]),a._v(" ②实现Runnable接口")]),a._v(" "),s("p",[a._v("推荐实现Runnable接口方式开发多线程，因为Java单继承但是可以实现多个接口。")]),a._v(" "),s("p",[a._v("MyRunnable.java")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('public class MyRunnable implements Runnable {\n\t@Override\n\tpublic void run() {\n\t\tSystem.out.println("MyRunnable");\n\t}\n}\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("p",[a._v("Run.java")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('public class Run {\n\n\tpublic static void main(String[] args) {\n\t\tRunnable runnable=new MyRunnable();\n\t\tThread thread=new Thread(runnable);\n\t\tthread.start();\n\t\tSystem.out.println("运行结束！");\n\t}\n\n}\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])]),s("p",[a._v("运行结果：\n"),s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/3/20/16243f4373c6141a?w=137&h=46&f=jpeg&s=7316",alt:"运行结果"}})]),a._v(" "),s("h3",{attrs:{id:"_3使用线程池"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3使用线程池"}},[a._v("#")]),a._v(" ③使用线程池")]),a._v(" "),s("p",[s("strong",[a._v("在《阿里巴巴Java开发手册》“并发处理”这一章节，明确指出线程资源必须通过线程池提供，不允许在应用中自行显示创建线程。")])]),a._v(" "),s("p",[s("strong",[a._v("为什么呢？")])]),a._v(" "),s("blockquote",[s("p",[s("strong",[a._v("使用线程池的好处是减少在创建和销毁线程上所消耗的时间以及系统资源开销，解决资源不足的问题。如果不使用线程池，有可能会造成系统创建大量同类线程而导致消耗完内存或者“过度切换”的问题。")])])]),a._v(" "),s("p",[s("strong",[a._v("另外《阿里巴巴Java开发手册》中强制线程池不允许使用 Executors 去创建，而是通过 ThreadPoolExecutor 的方式，这样的处理方式让写的同学更加明确线程池的运行规则，规避资源耗尽的风险")])]),a._v(" "),s("blockquote",[s("p",[a._v("Executors 返回线程池对象的弊端如下：")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("FixedThreadPool 和 SingleThreadExecutor")]),a._v(" ： 允许请求的队列长度为 Integer.MAX_VALUE,可能堆积大量的请求，从而导致OOM。")]),a._v(" "),s("li",[s("strong",[a._v("CachedThreadPool 和 ScheduledThreadPool")]),a._v(" ： 允许创建的线程数量为 Integer.MAX_VALUE ，可能会创建大量线程，从而导致OOM。")])])]),a._v(" "),s("p",[a._v("对于线程池感兴趣的可以查看我的这篇文章："),s("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzU4NDQ4MzU5OA==&mid=2247484042&idx=1&sn=541dbf2cb969a151d79f4a4f837ee1bd&chksm=fd9854ebcaefddfd1876bb96ab218be3ae7b12546695a403075d4ed22e5e17ff30ebdabc8bbf#rd",target:"_blank",rel:"noopener noreferrer"}},[a._v("《Java多线程学习（八）线程池与Executor 框架》"),s("OutboundLink")],1),a._v(" 点击阅读原文即可查看到该文章的最新版。")]),a._v(" "),s("h2",{attrs:{id:"_6-线程的优先级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-线程的优先级"}},[a._v("#")]),a._v(" 6 线程的优先级")]),a._v(" "),s("p",[a._v("每个线程都具有各自的优先级，"),s("strong",[a._v("线程的优先级可以在程序中表明该线程的重要性，如果有很多线程处于就绪状态，系统会根据优先级来决定首先使哪个线程进入运行状态")]),a._v("。但这个并不意味着低\n优先级的线程得不到运行，而只是它运行的几率比较小，如垃圾回收机制线程的优先级就比较低。所以很多垃圾得不到及时的回收处理。")]),a._v(" "),s("p",[s("strong",[a._v("线程优先级具有继承特性。")]),a._v(" 比如A线程启动B线程，则B线程的优先级和A是一样的。")]),a._v(" "),s("p",[s("strong",[a._v("线程优先级具有随机性。")]),a._v(" 也就是说线程优先级高的不一定每一次都先执行完。")]),a._v(" "),s("p",[a._v("Thread类中包含的成员变量代表了线程的某些优先级。如"),s("strong",[a._v("Thread.MIN_PRIORITY（常数1）")]),a._v("，"),s("strong",[a._v("Thread.NORM_PRIORITY（常数5）")]),a._v(",\n"),s("strong",[a._v("Thread.MAX_PRIORITY（常数10）")]),a._v("。其中每个线程的优先级都在"),s("strong",[a._v("Thread.MIN_PRIORITY（常数1）")]),a._v(" 到"),s("strong",[a._v("Thread.MAX_PRIORITY（常数10）")]),a._v(" 之间，在默认情况下优先级都是"),s("strong",[a._v("Thread.NORM_PRIORITY（常数5）")]),a._v("。")]),a._v(" "),s("p",[a._v("学过操作系统这门课程的话，我们可以发现多线程优先级或多或少借鉴了操作系统对进程的管理。")]),a._v(" "),s("h2",{attrs:{id:"_7-java多线程分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-java多线程分类"}},[a._v("#")]),a._v(" 7 Java多线程分类")]),a._v(" "),s("h3",{attrs:{id:"用户线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户线程"}},[a._v("#")]),a._v(" 用户线程")]),a._v(" "),s("p",[a._v("运行在前台，执行具体的任务，如程序的主线程、连接网络的子线程等都是用户线程")]),a._v(" "),s("h3",{attrs:{id:"守护线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#守护线程"}},[a._v("#")]),a._v(" 守护线程")]),a._v(" "),s("p",[a._v("运行在后台，为其他前台线程服务.也可以说守护线程是JVM中非守护线程的 "),s("strong",[a._v("“佣人”")]),a._v("。")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("特点：")]),a._v(" 一旦所有用户线程都结束运行，守护线程会随JVM一起结束工作")]),a._v(" "),s("li",[s("strong",[a._v("应用：")]),a._v(" 数据库连接池中的检测线程，JVM虚拟机启动后的检测线程")]),a._v(" "),s("li",[s("strong",[a._v("最常见的守护线程：")]),a._v(" 垃圾回收线程")])]),a._v(" "),s("p",[s("strong",[a._v("如何设置守护线程？")])]),a._v(" "),s("p",[a._v("可以通过调用 Thead 类的 "),s("code",[a._v("setDaemon(true)")]),a._v(" 方法设置当前的线程为守护线程。")]),a._v(" "),s("p",[a._v("注意事项：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("1.  setDaemon(true)必须在start（）方法前执行，否则会抛出IllegalThreadStateException异常\n2. 在守护线程中产生的新线程也是守护线程\n3. 不是所有的任务都可以分配给守护线程来执行，比如读写操作或者计算逻辑\n")])])]),s("h2",{attrs:{id:"_8-sleep-方法和wait-方法简单对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-sleep-方法和wait-方法简单对比"}},[a._v("#")]),a._v(" 8 sleep()方法和wait()方法简单对比")]),a._v(" "),s("ul",[s("li",[a._v("两者最主要的区别在于："),s("strong",[a._v("sleep方法没有释放锁，而wait方法释放了锁")]),a._v(" 。")]),a._v(" "),s("li",[a._v("两者都可以暂停线程的执行。")]),a._v(" "),s("li",[a._v("Wait通常被用于线程间交互/通信，sleep通常被用于暂停执行。")]),a._v(" "),s("li",[a._v("wait()方法被调用后，线程不会自动苏醒，需要别的线程调用同一个对象上的notify()或者notifyAll()方法。sleep()方法执行完成后，线程会自动苏醒。")])]),a._v(" "),s("h2",{attrs:{id:"_9-为什么我们调用start-方法时会执行run-方法-为什么我们不能直接调用run-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-为什么我们调用start-方法时会执行run-方法-为什么我们不能直接调用run-方法"}},[a._v("#")]),a._v(" 9 为什么我们调用start()方法时会执行run()方法，为什么我们不能直接调用run()方法？")]),a._v(" "),s("p",[a._v("这是另一个非常经典的java多线程面试问题，而且在面试中会经常被问到。很简单，但是很多人都会答不上来！")]),a._v(" "),s("p",[a._v("new一个Thread，线程进入了新建状态;调用start()方法，会启动一个线程并使线程进入了就绪状态，当分配到时间片后就可以开始运行了。\nstart()会执行线程的相应准备工作，然后自动执行run()方法的内容，这是真正的多线程工作。 而直接执行run()方法，会把run方法当成一个mian线程下的普通方法去执行，并不会在某个线程中执行它，所以这并不是多线程工作。")]),a._v(" "),s("p",[s("strong",[a._v("总结： 调用start方法方可启动线程并使线程进入就绪状态，而run方法只是thread的一个普通方法调用，还是在主线程里执行。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);