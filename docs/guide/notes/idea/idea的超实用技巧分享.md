---
title: IntelliJ IDEA Git版本冲突解决方法
date: 2021-09-02 
categories:
 - IDEA
tags:
 - IDEA
---





# idea的超实用技巧分享

#### 知识点概览

	- 高效率配置
 - 日常使用 必备快捷键（☆☆）
   	- 查找
      	- 跳转切换
   	- 编码相关
   	- 代码阅读相关
   	- 版本管理相关
- 编码效率相关（☆☆）
  - 文件代码模板
  - 实时代码模板
  - 其他
- 代码调试  源码阅读相关（☆☆☆）
  - 视图模式
  - 代码调试
  - ...
- 插件方面
  - 插件的安装与使用
  - 插件推荐
- 参考



### 高效率配置

#### 1.代码提示不区分大小写

Settings -> Editor -> General -> Code Completion

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c611497f44e172~tplv-t2oaga2asx-watermark.awebp)

(低版本 将 Case sensitive completion 设置为 None 就可以了)



#### 2.自动导包功能及相关优化功能

Settings -> Editor -> General -> Auto Import

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c6114980a46a32~tplv-t2oaga2asx-watermark.awebp)



#### 3.CTRL + 滑动滚轮 调整窗口显示大小

Settings -> Editor -> General -> Change font size (Zoom) with Ctrl+Mouse wheel

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c6114980df6ebc~tplv-t2oaga2asx-watermark.awebp)

选择之后，就可以通过CTRL+滑动滚轮的方式，调整编辑器窗口的字体大小



#### 4. tab多行显示

这点因人而异，有些人喜欢直接取消所有tab，改用快捷键的方式，我屏幕比较大，所以喜欢把tab全部显示出来。

`Window -> Editor Tabs -> Tabs Placement`，取消勾选 `Show Tabs In Single Row`选项。

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c6114980f36e16~tplv-t2oaga2asx-watermark.awebp)



效果如下：

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c6114982335281~tplv-t2oaga2asx-watermark.awebp)



#### 5.代码编辑区显示行号

`Settings -> Editor -> General -> Appearance `勾选 `Show Line Numbers`

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c6116dfed0084c~tplv-t2oaga2asx-watermark.awebp)

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c61149a4416fce~tplv-t2oaga2asx-watermark.awebp)



### 日常使用 必备快捷键（★★）



#### 1.查找

| 快捷键                 | 介绍                       |
| ---------------------- | -------------------------- |
| Ctrl + F               |                            |
| Ctrl + R               | 在当前文件进行文本替换     |
| Shift +Ctrl +F         | 在项目进行文本查找         |
| Shift +Ctrl +R         | 在项目进行文本替换         |
| Shift + Shift          | 快速搜索                   |
| Ctrl + N               | 查找class                  |
| Ctrl + Shift + N       | 查找文件                   |
| Ctrl + Shift + Alt + N | 查找symbol--查找某个方法名 |



#### 2.跳转切换

| 快捷键           | 介绍               |
| ---------------- | ------------------ |
| Ctrl + E         | 最近文件           |
| Ctrl + Tab       | 切换文件           |
| Ctrl + Alt + ←/→ | 跳转历史光标所在处 |
| Alt + ←/→ 方向键 | 切换子Tab          |
| Ctrl + G         | go to 跳转制定行号 |





#### 3.编码相关

| 快捷键                      | 介绍                                                         |
| --------------------------- | ------------------------------------------------------------ |
| Ctrl                        | 快速选中                                                     |
| (Shift + Ctrl) + Alt + J    | 快速选中同文本                                               |
| Ctrl + C/Ctrl + X/Ctrl + D  | 快速复制或剪切                                               |
| 多行选中 Tab / Shift + Tab  | tab                                                          |
| Ctrl + Y                    | 删除整行                                                     |
| 滚轮点击变量/方法/类        | 快速进入变量/方法/类的定义处                                 |
| Shift + 点击Tab             | 快速关闭tab                                                  |
| Ctrl + Z 、Ctrl + Shift + Z | 后悔药，撤销/取消撤销                                        |
| Ctrl + Shift + enter        | 自动收尾，代码自动补全                                       |
| Alt + enter                 | IntelliJ IDEA 根据光标所在问题，提供快速修复选择，光标放在的位置不同提示的结果也不同 |
| Alt + ↑/↓                   | 方法快速跳转                                                 |
| F2                          | 跳转到下一个高亮错误 或 警告位置                             |
| Alt + Insert                | 代码自动生成，如生成对象的 set / get 方法，构造函数，toString() 等 |
| Ctrl + Shift + L            | 格式化代码                                                   |
| Shift + F6                  | 快速修改方法名、变量名、文件名、类名等                       |
| Ctrl + F6                   | 快速修改方法签名                                             |





#### 4.代码阅读相关

| 快捷键                     | 介绍                               |
| -------------------------- | ---------------------------------- |
| Ctrl + P                   | 方法参数提示显示                   |
| Ctrl + Shift + i           | 就可以在当前类里再弹出一个窗口出来 |
| Alt + F7                   | 可以列出变量在哪些地方被使用了     |
| 光标在子类接口名，Ctrl + u | 跳到父类接口                       |
| Alt + F1 + 1， esc         |                                    |
| (Shift) + Ctrl + +/-       | 代码块折叠                         |
| Ctrl + Shift + ←/→         | 移动窗口分割线                     |
| Ctrl + (Alt) + B           | 跳转方法定义/实现                  |
| Ctrl + H                   | 类的层级关系                       |
| Ctrl + F12                 | Show Members 类成员快速显示        |





#### 5.版本管理相关

| 快捷键       | 介绍               |
| ------------ | ------------------ |
| Ctrl + D     | Show Diff 显示区别 |
| (Shift) + F7 | （上）下一处修改   |

更多快捷键请参考此文章 [github.com/judasn/Inte…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fjudasn%2FIntelliJ-IDEA-Tutorial%2Fblob%2Fmaster%2Fkeymap-introduce.md)

**mac os** 快捷键请参考本文章 [github.com/judasn/Inte…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fjudasn%2FIntelliJ-IDEA-Tutorial%2Fblob%2Fmaster%2Fkeymap-win-mac.md)





### 编码效率相关（★★）



#### 1.文件代码模板

Settings -> Editor -> File and Code Template

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c61149a91faeb8~tplv-t2oaga2asx-watermark.awebp)



在这里可以看到IDEA所有内置的文件代码模板，当你选择某个文件生成时，就会按照这里面的模板生成指定的代码文件。

另外，你可以在这里设置文件头。

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c611ab6c2362f2~tplv-t2oaga2asx-watermark.awebp)



设置之后，效果如下

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c61149ad7f530f~tplv-t2oaga2asx-watermark.awebp)





#### 2.实时代码模板

IDEA提供了强大的实时代码模板功能，并且原生内置了很多的模板，比如，当你输入`sout`或者`psvm`，就会快速自动生成`System.out.println();`和`public static void main(String[] args) {}`的代码块。

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c61149adb67280~tplv-t2oaga2asx-watermark.awebp)

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c61149affa939d~tplv-t2oaga2asx-watermark.awebp)



这些的模板可以在`Settings -> Editor -> Live Templates `看到。使用者可以按照自己的使用习惯来熟悉相关的代码模板。

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c611ab734ec102~tplv-t2oaga2asx-watermark.awebp)



#### 3.定制代码模板

IDEA也提供自己定制实时代码模板的功能。

1. 创建自己的模板库
2. 创建定制的代码模板

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c61149c9dfaed9~tplv-t2oaga2asx-watermark.awebp)

图中的`MyGroup`就存放着我自己定义的代码模板。



#### 4.其他

#### CRTL+ALT+T

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c61149cfe12c3f~tplv-t2oaga2asx-watermark.awebp)

`Ctrl + Alt + T` 提供的是代码块包裹功能 - Surround With。可以快速将选中的代码块，包裹到选择的语句块中。



#### 本地历史版本

IDEA 自带本地版本管理的功能，能够让你本地编写代码变得更加的安心和方便。

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c61149e30a9c6f~tplv-t2oaga2asx-watermark.awebp)



### 代码调试  源码阅读相关（★★★）



#### 1.视图模式

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c61196606d0af1~tplv-t2oaga2asx-watermark.awebp)

IDEA提供两种特殊的视图模式，

1. Presentation Mode - 演示模式，专门用于Code Review这种需要展示代码的场景
2. Distraction Free Mode - 禅模式，专注于代码开发





#### 2.代码调试

##### 1.条件断点

IDEA 可以设置指定条件的断点，增加我们调试的效率。

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c6118ad25fe7f4~tplv-t2oaga2asx-watermark.awebp)



##### 5.强制返回

IDEA 可以在打断点的方法栈处，强制返回你想要的方法返回值给调用方。非常灵活！

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c61149e788d9fb~tplv-t2oaga2asx-watermark.awebp)

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c61149e393ca86~tplv-t2oaga2asx-watermark.awebp)





##### 3.模拟异常

IDEA 可以在打断点的方法栈处，强制抛出异常给调用方。这个在调试源码的时候非常有用。

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c61149eee46d16~tplv-t2oaga2asx-watermark.awebp)





##### 4.Evaluate Expression

IDEA 还可以在调试代码的时候，动态修改当前方法栈中变量的值，方便我们的调试。

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/5/16c611804ccff3ff~tplv-t2oaga2asx-watermark.awebp)





### 插件方面



#### 1.插件安装

```
File -> Setting -> Plugin 
```

插件安装，可以直接在IDEA的插件库中实时搜索安装。`browse plugin repository `

对于**网络不好**的用户，可以登录官方插件仓库地址：[plugins.jetbrains.com/idea，下载压缩包之…](https://link.juejin.cn?target=https%3A%2F%2Fplugins.jetbrains.com%2Fidea%EF%BC%8C%E4%B8%8B%E8%BD%BD%E5%8E%8B%E7%BC%A9%E5%8C%85%E4%B9%8B%E5%90%8E%EF%BC%8C%E9%80%89%E6%8B%A9%60install) from disk`





#### 2.插件推荐

#### Alibaba Java Coding Guidelines

阿里Java编程规约插件



#### FindBugs

代码缺陷扫描

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/9/16c73ffbbd65298d~tplv-t2oaga2asx-watermark.awebp)

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/9/16c73ffbbe46bfb2~tplv-t2oaga2asx-watermark.awebp)





#### PMD

代码缺陷扫描



#### InnerBuilder

builder模式快速生成

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/9/16c73ffe15c5b83f~tplv-t2oaga2asx-watermark.awebp)



#### lombok plugin

lombok 插件



#### maven helper

maven 依赖管理助手 ，解析maven pom结构，分析冲突；

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/9/16c73ffbf073a355~tplv-t2oaga2asx-watermark.awebp)



![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/9/16c73ffbeb7cf8f5~tplv-t2oaga2asx-watermark.awebp)







#### Rainbow brackets

让代码中的括号更具标识性

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/9/16c73ffbf5a42a8a~tplv-t2oaga2asx-watermark.awebp)



#### String Manipulation

String相关辅助简化，搭配 CTRL+W 、ALT+J等文本选择快捷键使用

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/9/16c740ecf85311f1~tplv-t2oaga2asx-watermark.awebp)







#### Translation

翻译插件，阅读源码必备

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/9/16c73ffc0e8fcf94~tplv-t2oaga2asx-watermark.awebp)

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/9/16c73ffc1151bc04~tplv-t2oaga2asx-watermark.awebp)



#### Key Promoter X

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/9/16c73ffc3961f45d~tplv-t2oaga2asx-watermark.awebp)





#### GenerateSerialVersionUID

`Alt` + `Insert` 快速生成SerialVersionUID

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/4/9/169fdcd9198470ef~tplv-t2oaga2asx-watermark.awebp)



#### GsonFormat

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/9/16c73ffc38211aa1~tplv-t2oaga2asx-watermark.awebp)







#### RestfulToolkit

1. 快速跳转到Restful Api处( use: Ctrl(Command) + \ or Ctrl + Alt + N )
2. 展示Resultful 接口结构
3. http 简单请求工具

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/9/16c73ffc39e6ed1a~tplv-t2oaga2asx-watermark.awebp)

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/9/16c73ffc78f61716~tplv-t2oaga2asx-watermark.awebp)





#### Material Theme UI

本人自用的主题就是这个。

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/8/9/16c73ffc4b4c7331~tplv-t2oaga2asx-watermark.awebp)



#### MyBatis Log Plugin

把 Mybatis 输出的sql日志还原成完整的sql语句，看起来更直观。

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/4/9/169fdcd962a3eb7c~tplv-t2oaga2asx-watermark.awebp)



#### Free Mybatis

MyBatis 免费的插件





## 参考

1. [github.com/judasn/Inte…](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fjudasn%2FIntelliJ-IDEA-Tutorial)

(By the way, 更多IDEA使用请参考此延伸文档以及官方文档)



































