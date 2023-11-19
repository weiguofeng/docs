# 12、MybatisPlus分页插件



![1700311306583](../../.vuepress/public/images/1700311306583.png)





#### 1、配置类

​			首先需要添加一个配置类

![1700311513534](../../.vuepress/public/images/1700311513534.png)









#### 2、测试

​	![1700311783832](../../.vuepress/public/images/1700311783832.png)



​	查看SQL

![1700311835574](../../.vuepress/public/images/1700311835574.png)

https://www.bilibili.com/video/BV12R4y157Be?p=42&spm_id_from=pageDriver&vd_source=243ad3a9b323313aa1441e5dd414a4ef





#### 3、分页相关数据获取

​	![1700311968788](../../.vuepress/public/images/1700311968788.png)

​		getRecords --获取当前数据

​		getCurrent --获取当前页码

​		![1700312923900](../../.vuepress/public/images/1700312923900.png)

![1700312963717](../../.vuepress/public/images/1700312963717.png)







#### 5、自定义分页

​			自定义的sql如何实现分页查询呢



​		首先是接口定义

​				通过年龄查询用户且分页

![1700313219544](../../.vuepress/public/images/1700313219544.png)



设置类型别名对应的包

![1700313381081](../../.vuepress/public/images/1700313381081.png)

​	

映射xml写sql语句

​		默认的别名就是类名，且不区分大小写

![1700313449448](../../.vuepress/public/images/1700313449448.png)





​		测试：

![1700313528046](../../.vuepress/public/images/1700313528046.png)



![1700313585681](../../.vuepress/public/images/1700313585681.png)



https://www.bilibili.com/video/BV12R4y157Be?p=44&spm_id_from=pageDriver&vd_source=243ad3a9b323313aa1441e5dd414a4ef







































































