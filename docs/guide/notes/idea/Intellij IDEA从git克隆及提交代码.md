---
title: intellij IDEA从git克隆及提交代码
date: 2021-08-02 
categories:
 - IDEA
tags:
 - IDEA
---

# Intellij IDEA从git克隆及提交代码



#### 1.检出项目

![1631717081335](../../../.vuepress/public/images/1631717081335.png)



登录github：

![1631717247240](../../../.vuepress/public/images/1631717247240.png)



输入检出地址

![1631717174939](../../../.vuepress/public/images/1631717174939.png)



检出项目：

![1631717284454](../../../.vuepress/public/images/1631717284454.png)



项目down下来之后：

![1631717330970](../../../.vuepress/public/images/1631717330970.png)





#### 提交代码

我们修改代码后进行提交

**提交到版本库**

方法一、先按逻辑走，先add(添加) 然后 commit（提交）接着 push（推送） 

右键git->Add 

添加： 

![1631717512952](../../../.vuepress/public/images/1631717512952.png)



右键git->Commit Directory….. 

提交和推送：**注意：**这里可以一起来 

![1631717542621](../../../.vuepress/public/images/1631717542621.png)

上面选择Commit and push,别忘记了填写Commit Message,接着会出现一个窗口

![1631717615418](../../../.vuepress/public/images/1631717615418.png)

看见有个Define remote了吗？点击它，然后又有一个小窗口



![1631717692650](../../../.vuepress/public/images/1631717692650.png)

这里的URL，就是之前在GitBlit创建的版本库的时候的url，填写进去，确定就好，会弹出一个窗口，输入你的密码，点确定，然后点push就好了。

![1631717714594](../../../.vuepress/public/images/1631717714594.png)



这是结果：

![1631717745011](../../../.vuepress/public/images/1631717745011.png)

我们去gitblit上看看：





#### git的一些操作

![1631717387121](../../../.vuepress/public/images/1631717387121.png)



#### Repository的功能

![1631717431624](../../../.vuepress/public/images/1631717431624.png)





## 2.IDEA关于git的基本操作

#### 2.1、更新代码：

![1631717835503](../../../.vuepress/public/images/1631717835503.png)



#### 2.2、提交代码

![1631717861881](../../../.vuepress/public/images/1631717861881.png)

选择commit或者commit and push就好了



#### 2.3、忽略上传文件 

**方法1**

1.点击File—》Settings

![1631719459323](../../../.vuepress/public/images/1631719459323.png)



**方法2**

点击Version Control–>Local Changes 然后点击下图中的Configure Ignored Files

![1631719706273](../../../.vuepress/public/images/1631719706273.png)



点击右侧+号。配置你所需要忽略的文件或者文件夹

![1631719747342](../../../.vuepress/public/images/1631719747342.png)

![1631719807449](../../../.vuepress/public/images/1631719807449.png)



配置成功如图

![1631719832877](../../../.vuepress/public/images/1631719832877.png)





#### 2.4添加分支

右下角点击，然后选择+New Branch，就可以创建一个分支

![1631721017845](../../../.vuepress/public/images/1631721017845.png)

![1631721040231](../../../.vuepress/public/images/1631721040231.png)

输入分支名称

![1631721075142](../../../.vuepress/public/images/1631721075142.png)



#### 2.5切换分支

在Local Branchs中选择，然后在新的菜单中选择checkout就好

![1631721222790](../../../.vuepress/public/images/1631721222790.png)



#### 2.6合并分支

![1631721356846](../../../.vuepress/public/images/1631721356846.png)



#### 2.7 同步远程分支

选择项目，右键 git

![1631721512074](../../../.vuepress/public/images/1631721512074.png)





#### 2.8文件恢复 

![1631721560421](../../../.vuepress/public/images/1631721560421.png)

![1631721598465](../../../.vuepress/public/images/1631721598465.png)



#### 2.9、版本回退

​	点击Version Control 然后查看log

![1631721754019](../../../.vuepress/public/images/1631721754019.png)

找到想要回退的版本然后右键

![1631721892384](../../../.vuepress/public/images/1631721892384.png)



接着会弹出一个窗口

![1631721972990](../../../.vuepress/public/images/1631721972990.png)

这里我们选择hard，属于硬恢复，文件将回退到这个版本，所有本地都会被覆盖，局部的更改都会丢失。



soft方式是，文件不会改变，差异的文件将被暂存用于后期提交



Mixed方式：混合文件不会被改变，差异不会被暂存



Keep方式：文件恢复到所选的状态，本地修改会保持





#### 2.9.1单个文件回退版本

 找到相应要回退的版本---》项目右键--》git--》show history

![1631723365190](../../../.vuepress/public/images/1631723365190.png)



然后点击相应的版本--》右键--》查看差异

![1631723525445](../../../.vuepress/public/images/1631723525445.png)

![1631723614231](../../../.vuepress/public/images/1631723614231.png)



然后继续右键---》

![1631724440352](../../../.vuepress/public/images/1631724440352.png)





















