---
title: 9、Flask
date: 2024-06-20
categories:
 - cs50
tags:
 - cs50
---





# 9、Flask--服务容器



​		创建一个web服务器---

​		![image-20240620153256215](./../.vuepress/public/images/image-20240620153256215.png)









​	页面设置变量

![image-20240620153736459](./../.vuepress/public/images/image-20240620153736459.png)

​				注意将name改为placeholder



​	服务器传递参数			

![image-20240620153942859](./../.vuepress/public/images/image-20240620153942859.png)





浏览器测试



​	![image-20240620154037941](./../.vuepress/public/images/image-20240620154037941.png)



​		修改变量值的判断

![image-20240620154340204](./../.vuepress/public/images/image-20240620154340204.png)

​		或者是这样

![image-20240620154535061](./../.vuepress/public/images/image-20240620154535061.png)



​		添加路由

![image-20240620155502628](./../.vuepress/public/images/image-20240620155502628.png)



​	form表单提交

![image-20240620155651528](./../.vuepress/public/images/image-20240620155651528.png)



![image-20240620155714159](./../.vuepress/public/images/image-20240620155714159.png)



![image-20240620155736782](./../.vuepress/public/images/image-20240620155736782.png)







#### 		创建模板代码

​					因为有很多重复的内容 -- 我们可以尝试做单页面模板



​		{% block body%} 代码块占位符 

![image-20240620160237650](./../.vuepress/public/images/image-20240620160237650.png)



​	使用继承的方式使用模板

![image-20240620160445263](./../.vuepress/public/images/image-20240620160445263.png)

![image-20240620160549812](./../.vuepress/public/images/image-20240620160549812.png)





#### 	POST请求

![image-20240620161524184](./../.vuepress/public/images/image-20240620161524184.png)



​		同时支持GET和POST

![image-20240620162151636](./../.vuepress/public/images/image-20240620162151636.png)

​	



![image-20240620162342483](./../.vuepress/public/images/image-20240620162342483.png)





#### 	结合SQLite

![image-20240620223508787](./../.vuepress/public/images/image-20240620223508787.png)





​	删除

![image-20240620223744894](./../.vuepress/public/images/image-20240620223744894.png)



​		![image-20240620223815463](./../.vuepress/public/images/image-20240620223815463.png)

​		

​	数据被清空了

![image-20240620223838660](./../.vuepress/public/images/image-20240620223838660.png)





#### 	cookie

​			我们一般登录web一次之后，就会记住我们的一些信息---保持会话

![image-20240620224715795](./../.vuepress/public/images/image-20240620224715795.png)



​			登录

![image-20240620225319052](./../.vuepress/public/images/image-20240620225319052.png)



![image-20240620225749241](./../.vuepress/public/images/image-20240620225749241.png)





​		清除session

![image-20240620225951498](./../.vuepress/public/images/image-20240620225951498.png)















https://www.youtube.com/watch?v=4o1SCMICZzo















