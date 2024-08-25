(window.webpackJsonp=window.webpackJsonp||[]).push([[568],{1105:function(e,r,a){e.exports=a.p+"assets/img/1608739121027.99ee925e.png"},1106:function(e,r,a){e.exports=a.p+"assets/img/1608739134075.10146ff8.png"},1107:function(e,r,a){e.exports=a.p+"assets/img/1608739142445.cd8c2732.png"},8855:function(e,r,a){"use strict";a.r(r);var t=a(5),n=Object(t.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("ul",[t("li",[t("a",{attrs:{href:"#%E4%B8%80-jdk-%E6%8F%90%E4%BE%9B%E7%9A%84%E5%B9%B6%E5%8F%91%E5%AE%B9%E5%99%A8%E6%80%BB%E7%BB%93"}},[e._v("一 JDK 提供的并发容器总结")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#%E4%BA%8C-concurrenthashmap"}},[e._v("二 ConcurrentHashMap")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#%E4%B8%89-copyonwritearraylist"}},[e._v("三 CopyOnWriteArrayList")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#31-copyonwritearraylist-%E7%AE%80%E4%BB%8B"}},[e._v("3.1 CopyOnWriteArrayList 简介")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#32-copyonwritearraylist-%E6%98%AF%E5%A6%82%E4%BD%95%E5%81%9A%E5%88%B0%E7%9A%84%EF%BC%9F"}},[e._v("3.2 CopyOnWriteArrayList 是如何做到的？")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#33-copyonwritearraylist-%E8%AF%BB%E5%8F%96%E5%92%8C%E5%86%99%E5%85%A5%E6%BA%90%E7%A0%81%E7%AE%80%E5%8D%95%E5%88%86%E6%9E%90"}},[e._v("3.3 CopyOnWriteArrayList 读取和写入源码简单分析")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#331-copyonwritearraylist-%E8%AF%BB%E5%8F%96%E6%93%8D%E4%BD%9C%E7%9A%84%E5%AE%9E%E7%8E%B0"}},[e._v("3.3.1 CopyOnWriteArrayList 读取操作的实现")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#332-copyonwritearraylist-%E5%86%99%E5%85%A5%E6%93%8D%E4%BD%9C%E7%9A%84%E5%AE%9E%E7%8E%B0"}},[e._v("3.3.2 CopyOnWriteArrayList 写入操作的实现")])])])])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#%E5%9B%9B-concurrentlinkedqueue"}},[e._v("四 ConcurrentLinkedQueue")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#%E4%BA%94-blockingqueue"}},[e._v("五 BlockingQueue")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#51-blockingqueue-%E7%AE%80%E5%8D%95%E4%BB%8B%E7%BB%8D"}},[e._v("5.1 BlockingQueue 简单介绍")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#52-arrayblockingqueue"}},[e._v("5.2 ArrayBlockingQueue")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#53-linkedblockingqueue"}},[e._v("5.3 LinkedBlockingQueue")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#54-priorityblockingqueue"}},[e._v("5.4 PriorityBlockingQueue")])])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#%E5%85%AD-concurrentskiplistmap"}},[e._v("六 ConcurrentSkipListMap")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#%E4%B8%83-%E5%8F%82%E8%80%83"}},[e._v("七 参考")])])]),e._v(" "),t("h2",{attrs:{id:"一-jdk-提供的并发容器总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-jdk-提供的并发容器总结"}},[e._v("#")]),e._v(" 一 JDK 提供的并发容器总结")]),e._v(" "),t("p",[e._v("JDK提供的这些容器大部分在 "),t("code",[e._v("java.util.concurrent")]),e._v(" 包中。")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("ConcurrentHashMap:")]),e._v(" 线程安全的HashMap")]),e._v(" "),t("li",[t("strong",[e._v("CopyOnWriteArrayList:")]),e._v(" 线程安全的List，在读多写少的场合性能非常好，远远好于Vector.")]),e._v(" "),t("li",[t("strong",[e._v("ConcurrentLinkedQueue:")]),e._v(" 高效的并发队列，使用链表实现。可以看做一个线程安全的 LinkedList，这是一个非阻塞队列。")]),e._v(" "),t("li",[t("strong",[e._v("BlockingQueue:")]),e._v(" 这是一个接口，JDK内部通过链表、数组等方式实现了这个接口。表示阻塞队列，非常适合用于作为数据共享的通道。")]),e._v(" "),t("li",[t("strong",[e._v("ConcurrentSkipListMap:")]),e._v(" 跳表的实现。这是一个Map，使用跳表的数据结构进行快速查找。")])]),e._v(" "),t("h2",{attrs:{id:"二-concurrenthashmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-concurrenthashmap"}},[e._v("#")]),e._v(" 二 ConcurrentHashMap")]),e._v(" "),t("p",[e._v("我们知道 HashMap 不是线程安全的，在并发场景下如果要保证一种可行的方式是使用 "),t("code",[e._v("Collections.synchronizedMap()")]),e._v(" 方法来包装我们的 HashMap。但这是通过使用一个全局的锁来同步不同线程间的并发访问，因此会带来不可忽视的性能问题。")]),e._v(" "),t("p",[e._v("所以就有了 HashMap 的线程安全版本—— ConcurrentHashMap 的诞生。在ConcurrentHashMap中，无论是读操作还是写操作都能保证很高的性能：在进行读操作时(几乎)不需要加锁，而在写操作时通过锁分段技术只对所操作的段加锁而不影响客户端对其它段的访问。")]),e._v(" "),t("p",[e._v("关于 ConcurrentHashMap 相关问题，我在 "),t("a",{attrs:{href:"https://github.com/Snailclimb/JavaGuide/blob/master/Java%E7%9B%B8%E5%85%B3/%E8%BF%99%E5%87%A0%E9%81%93Java%E9%9B%86%E5%90%88%E6%A1%86%E6%9E%B6%E9%9D%A2%E8%AF%95%E9%A2%98%E5%87%A0%E4%B9%8E%E5%BF%85%E9%97%AE.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("《这几道Java集合框架面试题几乎必问》"),t("OutboundLink")],1),e._v(" 这篇文章中已经提到过。下面梳理一下关于 ConcurrentHashMap 比较重要的问题：")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/Snailclimb/JavaGuide/blob/master/Java%E7%9B%B8%E5%85%B3/%E8%BF%99%E5%87%A0%E9%81%93Java%E9%9B%86%E5%90%88%E6%A1%86%E6%9E%B6%E9%9D%A2%E8%AF%95%E9%A2%98%E5%87%A0%E4%B9%8E%E5%BF%85%E9%97%AE.md#concurrenthashmap-%E5%92%8C-hashtable-%E7%9A%84%E5%8C%BA%E5%88%AB",target:"_blank",rel:"noopener noreferrer"}},[e._v("ConcurrentHashMap 和 Hashtable 的区别"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/Snailclimb/JavaGuide/blob/master/Java%E7%9B%B8%E5%85%B3/%E8%BF%99%E5%87%A0%E9%81%93Java%E9%9B%86%E5%90%88%E6%A1%86%E6%9E%B6%E9%9D%A2%E8%AF%95%E9%A2%98%E5%87%A0%E4%B9%8E%E5%BF%85%E9%97%AE.md#concurrenthashmap%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%E7%9A%84%E5%85%B7%E4%BD%93%E5%AE%9E%E7%8E%B0%E6%96%B9%E5%BC%8F%E5%BA%95%E5%B1%82%E5%85%B7%E4%BD%93%E5%AE%9E%E7%8E%B0",target:"_blank",rel:"noopener noreferrer"}},[e._v("ConcurrentHashMap线程安全的具体实现方式/底层具体实现"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"三-copyonwritearraylist"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三-copyonwritearraylist"}},[e._v("#")]),e._v(" 三 CopyOnWriteArrayList")]),e._v(" "),t("h3",{attrs:{id:"_3-1-copyonwritearraylist-简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-copyonwritearraylist-简介"}},[e._v("#")]),e._v(" 3.1 CopyOnWriteArrayList 简介")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("public class CopyOnWriteArrayList<E>\nextends Object\nimplements List<E>, RandomAccess, Cloneable, Serializable\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("在很多应用场景中，读操作可能会远远大于写操作。由于读操作根本不会修改原有的数据，因此对于每次读取都进行加锁其实是一种资源浪费。我们应该允许多个线程同时访问List的内部数据，毕竟读取操作是安全的。")]),e._v(" "),t("p",[e._v("这和我们之前在多线程章节讲过 "),t("code",[e._v("ReentrantReadWriteLock")]),e._v(" 读写锁的思想非常类似，也就是读读共享、写写互斥、读写互斥、写读互斥。JDK中提供了 "),t("code",[e._v("CopyOnWriteArrayList")]),e._v(" 类比相比于在读写锁的思想又更进一步。为了将读取的性能发挥到极致，"),t("code",[e._v("CopyOnWriteArrayList")]),e._v(" 读取是完全不用加锁的，并且更厉害的是：写入也不会阻塞读取操作。只有写入和写入之间需要进行同步等待。这样一来，读操作的性能就会大幅度提升。"),t("strong",[e._v("那它是怎么做的呢？")])]),e._v(" "),t("h3",{attrs:{id:"_3-2-copyonwritearraylist-是如何做到的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-copyonwritearraylist-是如何做到的"}},[e._v("#")]),e._v(" 3.2 CopyOnWriteArrayList 是如何做到的？")]),e._v(" "),t("p",[t("code",[e._v("CopyOnWriteArrayList")]),e._v(" 类的所有可变操作（add，set等等）都是通过创建底层数组的新副本来实现的。当 List 需要被修改的时候，我并不修改原有内容，而是对原有数据进行一次复制，将修改的内容写入副本。写完之后，再将修改完的副本替换原来的数据，这样就可以保证写操作不会影响读操作了。")]),e._v(" "),t("p",[e._v("从 "),t("code",[e._v("CopyOnWriteArrayList")]),e._v(" 的名字就能看出"),t("code",[e._v("CopyOnWriteArrayList")]),e._v(" 是满足"),t("code",[e._v("CopyOnWrite")]),e._v(" 的ArrayList，所谓"),t("code",[e._v("CopyOnWrite")]),e._v(" 也就是说：在计算机，如果你想要对一块内存进行修改时，我们不在原有内存块中进行写操作，而是将内存拷贝一份，在新的内存中进行写操作，写完之后呢，就将指向原来内存指针指向新的内存，原来的内存就可以被回收掉了。")]),e._v(" "),t("h3",{attrs:{id:"_3-3-copyonwritearraylist-读取和写入源码简单分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-copyonwritearraylist-读取和写入源码简单分析"}},[e._v("#")]),e._v(" 3.3 CopyOnWriteArrayList 读取和写入源码简单分析")]),e._v(" "),t("h4",{attrs:{id:"_3-3-1-copyonwritearraylist-读取操作的实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-copyonwritearraylist-读取操作的实现"}},[e._v("#")]),e._v(" 3.3.1 CopyOnWriteArrayList 读取操作的实现")]),e._v(" "),t("p",[e._v("读取操作没有任何同步控制和锁操作，理由就是内部数组 array 不会发生修改，只会被另外一个 array 替换，因此可以保证数据安全。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('    /** The array, accessed only via getArray/setArray. */\n    private transient volatile Object[] array;\n    public E get(int index) {\n        return get(getArray(), index);\n    }\n    @SuppressWarnings("unchecked")\n    private E get(Object[] a, int index) {\n        return (E) a[index];\n    }\n    final Object[] getArray() {\n        return array;\n    }\n\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br")])]),t("h4",{attrs:{id:"_3-3-2-copyonwritearraylist-写入操作的实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-copyonwritearraylist-写入操作的实现"}},[e._v("#")]),e._v(" 3.3.2 CopyOnWriteArrayList 写入操作的实现")]),e._v(" "),t("p",[e._v("CopyOnWriteArrayList 写入操作 add() 方法在添加集合的时候加了锁，保证了同步，避免了多线程写的时候会 copy 出多个副本出来。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    /**\n     * Appends the specified element to the end of this list.\n     *\n     * @param e element to be appended to this list\n     * @return {@code true} (as specified by {@link Collection#add})\n     */\n    public boolean add(E e) {\n        final ReentrantLock lock = this.lock;\n        lock.lock();//加锁\n        try {\n            Object[] elements = getArray();\n            int len = elements.length;\n            Object[] newElements = Arrays.copyOf(elements, len + 1);//拷贝新数组\n            newElements[len] = e;\n            setArray(newElements);\n            return true;\n        } finally {\n            lock.unlock();//释放锁\n        }\n    }\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br")])]),t("h2",{attrs:{id:"四-concurrentlinkedqueue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四-concurrentlinkedqueue"}},[e._v("#")]),e._v(" 四 ConcurrentLinkedQueue")]),e._v(" "),t("p",[e._v("Java提供的线程安全的 Queue 可以分为"),t("strong",[e._v("阻塞队列")]),e._v("和"),t("strong",[e._v("非阻塞队列")]),e._v("，其中阻塞队列的典型例子是 BlockingQueue，非阻塞队列的典型例子是ConcurrentLinkedQueue，在实际应用中要根据实际需要选用阻塞队列或者非阻塞队列。 "),t("strong",[e._v("阻塞队列可以通过加锁来实现，非阻塞队列可以通过 CAS 操作实现。")])]),e._v(" "),t("p",[e._v("从名字可以看出，"),t("code",[e._v("ConcurrentLinkedQueue")]),e._v("这个队列使用链表作为其数据结构．ConcurrentLinkedQueue 应该算是在高并发环境中性能最好的队列了。它之所有能有很好的性能，是因为其内部复杂的实现。")]),e._v(" "),t("p",[e._v("ConcurrentLinkedQueue 内部代码我们就不分析了，大家知道ConcurrentLinkedQueue 主要使用 CAS 非阻塞算法来实现线程安全就好了。")]),e._v(" "),t("p",[e._v("ConcurrentLinkedQueue 适合在对性能要求相对较高，同时对队列的读写存在多个线程同时进行的场景，即如果对队列加锁的成本较高则适合使用无锁的ConcurrentLinkedQueue来替代。")]),e._v(" "),t("h2",{attrs:{id:"五-blockingqueue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五-blockingqueue"}},[e._v("#")]),e._v(" 五 BlockingQueue")]),e._v(" "),t("h3",{attrs:{id:"_5-1-blockingqueue-简单介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-blockingqueue-简单介绍"}},[e._v("#")]),e._v(" 5.1 BlockingQueue 简单介绍")]),e._v(" "),t("p",[e._v("上面我们己经提到了 ConcurrentLinkedQueue 作为高性能的非阻塞队列。下面我们要讲到的是阻塞队列——BlockingQueue。阻塞队列（BlockingQueue）被广泛使用在“生产者-消费者”问题中，其原因是BlockingQueue提供了可阻塞的插入和移除的方法。当队列容器已满，生产者线程会被阻塞，直到队列未满；当队列容器为空时，消费者线程会被阻塞，直至队列非空时为止。")]),e._v(" "),t("p",[e._v("BlockingQueue 是一个接口，继承自 Queue，所以其实现类也可以作为 Queue 的实现来使用，而 Queue 又继承自 Collection 接口。下面是 BlockingQueue 的相关实现类：")]),e._v(" "),t("p",[t("img",{attrs:{src:a(1105),alt:"1608739121027"}})]),e._v(" "),t("p",[t("strong",[e._v("下面主要介绍一下:ArrayBlockingQueue、LinkedBlockingQueue、PriorityBlockingQueue，这三个 BlockingQueue 的实现类。")])]),e._v(" "),t("h3",{attrs:{id:"_5-2-arrayblockingqueue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-arrayblockingqueue"}},[e._v("#")]),e._v(" 5.2 ArrayBlockingQueue")]),e._v(" "),t("p",[t("strong",[e._v("ArrayBlockingQueue")]),e._v(" 是 BlockingQueue 接口的有界队列实现类，底层采用"),t("strong",[e._v("数组")]),e._v("来实现。ArrayBlockingQueue一旦创建，容量不能改变。其并发控制采用可重入锁来控制，不管是插入操作还是读取操作，都需要获取到锁才能进行操作。当队列容量满时，尝试将元素放入队列将导致操作阻塞;尝试从一个空队列中取一个元素也会同样阻塞。")]),e._v(" "),t("p",[e._v("ArrayBlockingQueue 默认情况下不能保证线程访问队列的公平性，所谓公平性是指严格按照线程等待的绝对时间顺序，即最先等待的线程能够最先访问到 ArrayBlockingQueue。而非公平性则是指访问 ArrayBlockingQueue 的顺序不是遵守严格的时间顺序，有可能存在，当 ArrayBlockingQueue 可以被访问时，长时间阻塞的线程依然无法访问到 ArrayBlockingQueue。如果保证公平性，通常会降低吞吐量。如果需要获得公平性的 ArrayBlockingQueue，可采用如下代码：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("private static ArrayBlockingQueue<Integer> blockingQueue = new ArrayBlockingQueue<Integer>(10,true);\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"_5-3-linkedblockingqueue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-linkedblockingqueue"}},[e._v("#")]),e._v(" 5.3 LinkedBlockingQueue")]),e._v(" "),t("p",[t("strong",[e._v("LinkedBlockingQueue")]),e._v(" 底层基于"),t("strong",[e._v("单向链表")]),e._v("实现的阻塞队列，可以当做无界队列也可以当做有界队列来使用，同样满足FIFO的特性，与ArrayBlockingQueue 相比起来具有更高的吞吐量，为了防止 LinkedBlockingQueue 容量迅速增，损耗大量内存。通常在创建LinkedBlockingQueue 对象时，会指定其大小，如果未指定，容量等于Integer.MAX_VALUE。")]),e._v(" "),t("p",[t("strong",[e._v("相关构造方法:")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    /**\n     *某种意义上的无界队列\n     * Creates a {@code LinkedBlockingQueue} with a capacity of\n     * {@link Integer#MAX_VALUE}.\n     */\n    public LinkedBlockingQueue() {\n        this(Integer.MAX_VALUE);\n    }\n\n    /**\n     *有界队列\n     * Creates a {@code LinkedBlockingQueue} with the given (fixed) capacity.\n     *\n     * @param capacity the capacity of this queue\n     * @throws IllegalArgumentException if {@code capacity} is not greater\n     *         than zero\n     */\n    public LinkedBlockingQueue(int capacity) {\n        if (capacity <= 0) throw new IllegalArgumentException();\n        this.capacity = capacity;\n        last = head = new Node<E>(null);\n    }\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br")])]),t("h3",{attrs:{id:"_5-4-priorityblockingqueue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-priorityblockingqueue"}},[e._v("#")]),e._v(" 5.4 PriorityBlockingQueue")]),e._v(" "),t("p",[t("strong",[e._v("PriorityBlockingQueue")]),e._v(" 是一个支持优先级的无界阻塞队列。默认情况下元素采用自然顺序进行排序，也可以通过自定义类实现 "),t("code",[e._v("compareTo()")]),e._v(" 方法来指定元素排序规则，或者初始化时通过构造器参数 "),t("code",[e._v("Comparator")]),e._v(" 来指定排序规则。")]),e._v(" "),t("p",[e._v("PriorityBlockingQueue 并发控制采用的是 "),t("strong",[e._v("ReentrantLock")]),e._v("，队列为无界队列（ArrayBlockingQueue 是有界队列，LinkedBlockingQueue 也可以通过在构造函数中传入 capacity 指定队列最大的容量，但是 PriorityBlockingQueue 只能指定初始的队列大小，后面插入元素的时候，"),t("strong",[e._v("如果空间不够的话会自动扩容")]),e._v("）。")]),e._v(" "),t("p",[e._v("简单地说，它就是 PriorityQueue 的线程安全版本。不可以插入 null 值，同时，插入队列的对象必须是可比较大小的（comparable），否则报 ClassCastException 异常。它的插入操作 put 方法不会 block，因为它是无界队列（take 方法在队列为空的时候会阻塞）。")]),e._v(" "),t("p",[t("strong",[e._v("推荐文章：")])]),e._v(" "),t("p",[e._v("《解读 Java 并发队列 BlockingQueue》")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://javadoop.com/post/java-concurrent-queue",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://javadoop.com/post/java-concurrent-queue"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"六-concurrentskiplistmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六-concurrentskiplistmap"}},[e._v("#")]),e._v(" 六 ConcurrentSkipListMap")]),e._v(" "),t("p",[e._v("下面这部分内容参考了极客时间专栏"),t("a",{attrs:{href:"https://time.geekbang.org/column/intro/126?code=zl3GYeAsRI4rEJIBNu5B/km7LSZsPDlGWQEpAYw5Vu0=&utm_term=SPoster",target:"_blank",rel:"noopener noreferrer"}},[e._v("《数据结构与算法之美》"),t("OutboundLink")],1),e._v("以及《实战Java高并发程序设计》。")]),e._v(" "),t("p",[t("strong",[e._v("为了引出ConcurrentSkipListMap，先带着大家简单理解一下跳表。")])]),e._v(" "),t("p",[e._v("对于一个单链表，即使链表是有序的，如果我们想要在其中查找某个数据，也只能从头到尾遍历链表，这样效率自然就会很低，跳表就不一样了。跳表是一种可以用来快速查找的数据结构，有点类似于平衡树。它们都可以对元素进行快速的查找。但一个重要的区别是：对平衡树的插入和删除往往很可能导致平衡树进行一次全局的调整。而对跳表的插入和删除只需要对整个数据结构的局部进行操作即可。这样带来的好处是：在高并发的情况下，你会需要一个全局锁来保证整个平衡树的线程安全。而对于跳表，你只需要部分锁即可。这样，在高并发环境下，你就可以拥有更好的性能。而就查询的性能而言，跳表的时间复杂度也是 "),t("strong",[e._v("O(logn)")]),e._v(" 所以在并发数据结构中，JDK 使用跳表来实现一个 Map。")]),e._v(" "),t("p",[e._v("跳表的本质是同时维护了多个链表，并且链表是分层的，")]),e._v(" "),t("p",[t("img",{attrs:{src:a(1106),alt:"1608739134075"}})]),e._v(" "),t("p",[e._v("最低层的链表维护了跳表内所有的元素，每上面一层链表都是下面一层的子集。")]),e._v(" "),t("p",[e._v("跳表内的所有链表的元素都是排序的。查找时，可以从顶级链表开始找。一旦发现被查找的元素大于当前链表中的取值，就会转入下一层链表继续找。这也就是说在查找过程中，搜索是跳跃式的。如上图所示，在跳表中查找元素18。")]),e._v(" "),t("p",[t("img",{attrs:{src:a(1107),alt:"1608739142445"}})]),e._v(" "),t("p",[e._v("查找18 的时候原来需要遍历 18 次，现在只需要 7 次即可。针对链表长度比较大的时候，构建索引查找效率的提升就会非常明显。")]),e._v(" "),t("p",[e._v("从上面很容易看出，"),t("strong",[e._v("跳表是一种利用空间换时间的算法。")])]),e._v(" "),t("p",[e._v("使用跳表实现Map 和使用哈希算法实现Map的另外一个不同之处是：哈希并不会保存元素的顺序，而跳表内所有的元素都是排序的。因此在对跳表进行遍历时，你会得到一个有序的结果。所以，如果你的应用需要有序性，那么跳表就是你不二的选择。JDK 中实现这一数据结构的类是ConcurrentSkipListMap。")]),e._v(" "),t("h2",{attrs:{id:"七-参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#七-参考"}},[e._v("#")]),e._v(" 七 参考")]),e._v(" "),t("ul",[t("li",[e._v("《实战Java高并发程序设计》")]),e._v(" "),t("li",[e._v("https://javadoop.com/post/java-concurrent-queue")]),e._v(" "),t("li",[e._v("https://juejin.im/post/5aeebd02518825672f19c546")])])])}),[],!1,null,null,null);r.default=n.exports}}]);