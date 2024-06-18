# 6、Stream流收集方法Collect详解



#### 1、收集List集合

![1673772636718](../../.vuepress/public/images/1673772636718.png)



​	运行结果：

![1673772655850](../../.vuepress/public/images/1673772655850.png)





收集到Set集合

![1673772840686](../../.vuepress/public/images/1673772840686.png)

​	Set去除重复元素



	##### 收集到map中

​	收集到map集合需要 确定什么是key 什么是value

![1673772978549](../../.vuepress/public/images/1673772978549.png)



​	参考注释：

![1673773337045](../../.vuepress/public/images/1673773337045.png)



​		参数二：

![1673773404739](../../.vuepress/public/images/1673773404739.png)



​	编写规则：

![1673773485678](../../.vuepress/public/images/1673773485678.png)

​	

​			这里需要注意的点是--可能key会重复的话代码会报错，必须保证key唯一

![1673773621354](../../.vuepress/public/images/1673773621354.png)





​	我们使用lambda来写一下：

​	![1673773833983](../../.vuepress/public/images/1673773833983.png)

​	程序运行没有问题

![1673773862058](../../.vuepress/public/images/1673773862058.png)







#### 总结：

![1673774032366](../../.vuepress/public/images/1673774032366.png)





https://www.bilibili.com/video/BV1te411w722?p=6&spm_id_from=pageDriver&vd_source=243ad3a9b323313aa1441e5dd414a4ef





































