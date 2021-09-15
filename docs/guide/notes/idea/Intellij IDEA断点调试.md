---
title: Intellij IDEA断点调试
date: 2021-09-02 
categories:
 - IDEA
tags:
 - IDEA
---

# Intellij IDEA断点调试



添加断点：ctrl + shift + B

![1631632425587](../../../.vuepress/public/images/1631632425587.png)





#### 单步运行 debug

![1631632525114](../../../.vuepress/public/images/1631632525114.png)

然后F8一行一行的单步运行



#### resume

​	假设我们在这里按一下F8单步运行后，后面的不想运行了--跳到下一个断点，如果没有断点直接运行结束程序

![1631632662611](../../../.vuepress/public/images/1631632662611.png)

![1631632782979](../../../.vuepress/public/images/1631632782979.png)



#### 查看所有断点

![1631632939847](../../../.vuepress/public/images/1631632939847.png)



![1631632863335](../../../.vuepress/public/images/1631632863335.png)





#### 禁止所有断点

![1631633067928](../../../.vuepress/public/images/1631633067928.png)



断点都变为白灰色了

![1631633100763](../../../.vuepress/public/images/1631633100763.png)



#### 条件断点

​		在断点上右键

​	在打断点的时候，必须满足某一个条件这个断点才会生效



比如：List中的元素 在元素中是 张三的时候进入断点

![1631633360518](../../../.vuepress/public/images/1631633360518.png)



Condition里面输入条件，使用Java表达式

比如：s.equals("zhangsan")

![1631633426695](../../../.vuepress/public/images/1631633426695.png)

![1631633489052](../../../.vuepress/public/images/1631633489052.png)



在s是zhangsan的时候进入了断点

![1631633860999](../../../.vuepress/public/images/1631633860999.png)







#### 表达式求值

​	在我们跳转断点的过程中，在断点处可能你要看看某一个值在计算之后是什么样的结果

![1631634154881](../../../.vuepress/public/images/1631634154881.png)





到这个断点的时候---选中需要计算的地方然后ctrl + U 可以输入表达式

![1631634216328](../../../.vuepress/public/images/1631634216328.png)



输入表达式后可以看到result的返回值

![1631634301926](../../../.vuepress/public/images/1631634301926.png)



#### 运行到指定行

​	我们在调试的过程中有的代码是非常长的，我们想运行到某一行



​	运行到光标所处的这一行

![1631634514732](../../../.vuepress/public/images/1631634514732.png)

![1631634562767](../../../.vuepress/public/images/1631634562767.png)



中间的过程就没有全部展示了，直接就运行到光标所处的位置了





#### setValue

​	我们可以设置一些值进行测试

在断点处--然后在Varlables里面找到需要设置值的变量，按F2进行设置

![1631634764288](../../../.vuepress/public/images/1631634764288.png)



比如设置为null，然后回车

![1631634804757](../../../.vuepress/public/images/1631634804757.png)



然后之后的程序就按这个修改的值进行后续的逻辑了

![1631634856958](../../../.vuepress/public/images/1631634856958.png)





#### run anywhere if you can

​	当你在一个可运行环境中，你就可以运行

![1631635098592](../../../.vuepress/public/images/1631635098592.png)



其实就是光标所停的位置，去往上找可以运行的最小单元然后进行一个代码的运行

![1631635214646](../../../.vuepress/public/images/1631635214646.png)



我们发现会运行这2个函数

![1631635282584](../../../.vuepress/public/images/1631635282584.png)



好处就是当我们需要迅速的执行一下代码的时候可以使用这个功能





shift + alt + F9是我们可以运行的，可以选择一个

![1631635524477](../../../.vuepress/public/images/1631635524477.png)



其实就是debug的运行，选择相应的需要执行的





#### 编辑当前运行

![1631635713106](../../../.vuepress/public/images/1631635713106.png)



![1631635760127](../../../.vuepress/public/images/1631635760127.png)



我们改为xixi

![1631635865829](../../../.vuepress/public/images/1631635865829.png)









