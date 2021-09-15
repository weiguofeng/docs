---
title: IntelliJ IDEA使用技巧2
date: 2021-09-02 
categories:
 - IDEA
tags:
 - IDEA
---

# IntelliJ IDEA使用技巧2



![1631452008882](../../../.vuepress/public/images/1631452008882.png)



![1631452134955](../../../.vuepress/public/images/1631452134955.png)

## idea界面介绍

![1631452311251](../../../.vuepress/public/images/1631452311251.png)



```
	File主要是对文本进行操作
	
	Edit主要是对文本进行操作
	
	View是视图的选择有哪些
	
	Navigate就是你在项目工程中的跳转
	
	Code就是你的源码文件的操作
	
	Analyze是对你的源码进行分析或者说是对你项目的依赖关系进行分析
	
	Refactor是在代码重构的时候有一些比较快捷的功能去选择，比如抽取方法等等
	
	Build是当你的项目是J2EE之类的工程文件的时候，它可以帮助我们构建
	
	Run是运行，或者是调试
	
	Tools是亮点，是工具可以帮助我们快速操作
	
	VCS是 版本控制
	
	
	help--比如help下的keymap resource 可以生成快捷键的pdf
	
	
```



## 左边栏目

![1631452811626](../../../.vuepress/public/images/1631452811626.png)



```
	project:当前项目的项目文件的一个导航
	
	注意：菜单上面的标号，比如project标的是1，我们可以使用alt + 1 进行快速呼出和隐藏
	
	
	Favorites：特别是浏览源码的时候使用-标记记录，或者是调试的过程中加了断点
	
```



## 2.无处不在的跳转



#### 2.1 比如项目的跳转

![1631453511377](../../../.vuepress/public/images/1631453511377.png)

可以根据快捷键切换上一个窗口和下一个窗口



#### 2.2文件之间的跳转

​	recent Files ：最近的文件 ctrl + E

![1631453766583](../../../.vuepress/public/images/1631453766583.png)



Ctrl + E 这样就会显示出最近使用的文件

![1631453800735](../../../.vuepress/public/images/1631453800735.png)



Ctrl + Shift + A:是help下面的Find Action 就是追踪一个Action后面的一个快捷键



 浏览修改的位置跳转：比如编辑了A的代码，然后又编辑了B的代码，我们突然想返回到A重新编辑怎么办？

我们可以使用菜单的Navigate--》Last Edit Location 上次编辑的位置---或者是Alt + 箭头可以跳转到上次或者下次光标的浏览的位置

![1631454607220](../../../.vuepress/public/images/1631454607220.png)



 

#### 2.3 高效的定位代码

![1631455137643](../../../.vuepress/public/images/1631455137643.png)

​	书签就是在你浏览别人的代码的时候做一些标记

​	bookmarks--快捷键是 Ctrl + Shift + F11--------Shift + F11是查看标签

![1631455357724](../../../.vuepress/public/images/1631455357724.png)

![1631455386221](../../../.vuepress/public/images/1631455386221.png)

![1631455265263](../../../.vuepress/public/images/1631455265263.png)



带有标记的书签 ctrl + shift + 1--9 或者A-Z

![1631455800126](../../../.vuepress/public/images/1631455800126.png)



比如我们标记过后，使用Ctrl + 标记的1-9或者是字母 就可以实现快速的切换，比如ctrl + 1 在1标签中，ctrl + 2切换到2的标签中

​	在快速学习别人的源码或者是看别人代码的时候阅读的时候加入标签是非常有用的。



**收藏位置和文件** 

​	就是Favorites 一般是alt + 2

![1631456189109](../../../.vuepress/public/images/1631456189109.png)

五角星就代表的收藏的意思，比如感觉A这个类写的不错，想收藏一下ctrl + shift + A呼出搜索框，输入 add to Facorites 添加收藏

![1631456428413](../../../.vuepress/public/images/1631456428413.png)

![1631456514871](../../../.vuepress/public/images/1631456514871.png)

![1631456681146](../../../.vuepress/public/images/1631456681146.png)

add New 。。。是添加新的收藏列表

然后就可以把收藏的内容添加到新的列表中了

![1631456784625](../../../.vuepress/public/images/1631456784625.png)







#### 比如说看见这段函数写的不错想收藏一下

​	将光标定位到函数，然后快捷键 ctrl + shift + F 

![1631457019197](../../../.vuepress/public/images/1631457019197.png)





#### 字符跳转插件emacsIdea置跳转

![1631457156500](../../../.vuepress/public/images/1631457156500.png)

![1631457253820](../../../.vuepress/public/images/1631457253820.png)



选中字符后按ctrl + J可以上下寻找同样的字符

![1631457612453](../../../.vuepress/public/images/1631457612453.png)



查看插件的配置：

![1631457763596](../../../.vuepress/public/images/1631457763596.png)



然后可以 查看和修改快捷键

![1631458098690](../../../.vuepress/public/images/1631458098690.png)



Windows 系统键盘 meta 对应 Windows 徽标键





**编辑文件与文件的跳转**

​	比如我们正在写代码，写完后想在项目中选中一个文件打卡可以使用alt + 1就打开文件导航目录了

从左边栏跳转到右边的代码编辑区，按Esc就可以了



























































