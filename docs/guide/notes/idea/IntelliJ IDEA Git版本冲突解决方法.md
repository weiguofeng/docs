---
title: IntelliJ IDEA Git版本冲突解决方法
date: 2021-09-02 
categories:
 - IDEA
tags:
 - IDEA
---
# IntelliJ IDEA Git版本冲突解决方法



在一个大项目开发，经常多个人一起开发会改到同一个文件，这个时候第一个pull的可以正常，但是后面的pull就会有问题了。

![1630652240311](../../../.vuepress/public/images/1630652240311.png)



- **先在git上修改文件**

![1630652263621](../../../.vuepress/public/images/1630652263621.png)



分别进行了修改删除新增

- **在idea上修改文件，没有进行更新的情况下**

![1630652308328](../../../.vuepress/public/images/1630652308328.png)



- **进行拉取，会有报错提示。**

![1630652339727](../../../.vuepress/public/images/1630652339727.png)



- 这个本地对比结果

![1630652435916](../../../.vuepress/public/images/1630652435916.png)





- **创建本地版本**

![1630652478189](../../../.vuepress/public/images/1630652478189.png)



- **版本标识**

![1630652528898](../../../.vuepress/public/images/1630652528898.png)



- **将代码pull下来，对比**

![1630652560865](../../../.vuepress/public/images/1630652560865.png)



- **对比代码**

![1630652582269](../../../.vuepress/public/images/1630652582269.png)



- **对比同一个文件改的地方，合并到同一文件**

![1630652671207](../../../.vuepress/public/images/1630652671207.png)



































