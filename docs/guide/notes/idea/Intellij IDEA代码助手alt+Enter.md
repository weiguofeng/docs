---
title: Intellij IDEA代码助手alt+Enter
date: 2021-09-02 
categories:
 - IDEA
tags:
 - IDEA
---

# Intellij IDEA代码助手alt+Enter



alter + enter是非常有用的快捷键



action:  show intention 这个意思就是在你不知道如何去完成某一段代码的时候，你只需要按alt+enter 他就会给你智能的提示了，并且非常智能在不同的代码语境有不同的提示

![1631512230791](../../../.vuepress/public/images/1631512230791.png)





### 下面我们说几种提示功能



#### 1.自动创建函数：

![1631512577464](../../../.vuepress/public/images/1631512577464.png)

我们在调用一个没有的函数的时候，会提示我们创建这个函数



#### 2.list replace

![1631512767841](../../../.vuepress/public/images/1631512767841.png)

把光标放到for的前面，提示可以使用foreach进行代码简化



#### 3.字符串format或者build



比如：

![1631512974781](../../../.vuepress/public/images/1631512974781.png)



下面会有replace + with String .format

![1631513071379](../../../.vuepress/public/images/1631513071379.png)



点击format后

![1631513186266](../../../.vuepress/public/images/1631513186266.png)



如果不是在输出的情况下--会有String.format的方法包裹

![1631513266185](../../../.vuepress/public/images/1631513266185.png)





**build**：  也是一样的

![1631513350814](../../../.vuepress/public/images/1631513350814.png)



将生成StringBuilder给拼接字符串build为你节省内存

![1631513406104](../../../.vuepress/public/images/1631513406104.png)





#### 4.实现接口

![1631513554244](../../../.vuepress/public/images/1631513554244.png)



创建实现类的名称-Destination package是在哪个包下创建

![1631513694616](../../../.vuepress/public/images/1631513694616.png)







#### 5.单词拼写

​	对于我们英语不好的是相当的不错了

比如我们在写字符串的时候，单词错误idea会给我们一个波浪线

![1631513839946](../../../.vuepress/public/images/1631513839946.png)



![1631513905844](../../../.vuepress/public/images/1631513905844.png)



Change to 会给你几种建议

![1631513952437](../../../.vuepress/public/images/1631513952437.png)



矫正之后波浪线消失

![1631513985614](../../../.vuepress/public/images/1631513985614.png)





#### 6.导包

![1631514052323](../../../.vuepress/public/images/1631514052323.png)





























