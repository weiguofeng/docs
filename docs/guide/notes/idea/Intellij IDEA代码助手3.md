---
title: Intellij IDEA代码助手3
date: 2021-09-02 
categories:
 - IDEA
tags:
 - IDEA
---

# Intellij IDEA代码助手3



### 1.列操作

比如根据左侧的响应码生成一个枚举类

![1631460150282](../../../.vuepress/public/images/1631460150282.png)



首选创建枚举类

然后将转换的代码copy过来

![1631460329282](../../../.vuepress/public/images/1631460329282.png)

我们发现所有需要转换的都有一个冒号

我们把冒号选中，还有就是注意选中单词

![1631461149381](../../../.vuepress/public/images/1631461149381.png)

这个是选中单词的shift + 右



![1631461272531](../../../.vuepress/public/images/1631461272531.png)



大小写切换是在 Edit--》toggle case

![1631461352398](../../../.vuepress/public/images/1631461352398.png)



将字符串移动到前面 move caret to line start 

![1631463659886](../../../.vuepress/public/images/1631463659886.png)

![1631463817573](../../../.vuepress/public/images/1631463817573.png)

对于每一行都是这么个操作





![1631463915566](../../../.vuepress/public/images/1631463915566.png)



Ctrl + Alt + Y

![1631464092680](../../../.vuepress/public/images/1631464092680.png)



这样我们就 可以批量操作了





批量修改完可能发现代码比较乱，需要格式化一下代码 Ctrl + Alt + L

![1631464235616](../../../.vuepress/public/images/1631464235616.png)





![1631464303207](../../../.vuepress/public/images/1631464303207.png)





#### 2.Live template

​	设置代码模板

![1631464531888](../../../.vuepress/public/images/1631464531888.png)



然后创建一个分组

![1631464774706](../../../.vuepress/public/images/1631464774706.png)



创建完分组创建模板： $参数$

![1631465246351](../../../.vuepress/public/images/1631465246351.png)



![1631465264003](../../../.vuepress/public/images/1631465264003.png)





比如除了main函数，还有psfi和psfs

静态变量作为模板来处理

![1631465457270](../../../.vuepress/public/images/1631465457270.png)

![1631465659503](../../../.vuepress/public/images/1631465659503.png)



var1代表敲完后光标位置在var1的位置，当你输入完之后按回车键光标会在var2的位置





还有pi和ps也是常用的操作

![1631466015365](../../../.vuepress/public/images/1631466015365.png)



![1631466173800](../../../.vuepress/public/images/1631466173800.png)



比如我们需要带注释的

![1631466413520](../../../.vuepress/public/images/1631466413520.png)

![1631466609521](../../../.vuepress/public/images/1631466609521.png)



![1631466625623](../../../.vuepress/public/images/1631466625623.png)



```
/**
* $var1$
*/
private String $var2$;

$END$

```

代表输入完第一个参数回车，光标跳转为第二个var2的位置回车后，光标跳转到End的位置结束模板。





設置代码提示，可能有时候不提示修改热键

![1631467193393](../../../.vuepress/public/images/1631467193393.png)













































































