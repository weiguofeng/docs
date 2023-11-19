# 8、mybatisPlus常用注解



​	我们之前并没有指定mybatis要操作的表，为什么可以找到对应的表呢，我们之前看框架结构和实现就能明白，mybatis要操作的表由 实体 所决定，实体类进行和数据库表的匹配，和字段进行匹配，从而找到的表



​	比如我们现在数据库的表不叫user，叫t_user

![1697945339578](../../.vuepress/public/images/1697945339578.png)







​	然后我们执行一个添加数据的方法--报错

​		提示找不到user这个表

![1697945428809](../../.vuepress/public/images/1697945428809.png)



我们使用的表就是由实体决定了，是由代码中mapper的泛型T决定的

![1697945531584](../../.vuepress/public/images/1697945531584.png)



### 1、@Table

#### 	解决方案 2种



#### 	1、加入注解@TableName

​	![1697945643616](../../.vuepress/public/images/1697945643616.png)

​		再次测试数据可以正常插入了



![1697945684697](../../.vuepress/public/images/1697945684697.png)



#### 2、第二种-全局配置

​			全局配置前缀

![1697945816007](../../.vuepress/public/images/1697945816007.png)





### 2、@TableId

​	 			mybatis默认是将id作为主键

​			如果是表的主键 不是id -插入数据的时候就有问题了

​		没有给uid赋值，所以报错 uid没有默认值

![1697946308879](../../.vuepress/public/images/1697946308879.png)



​	我们可以通过@TableId指定id，在属性上添加

![1697946376349](../../.vuepress/public/images/1697946376349.png)



​	测试插入数据 -- uid已经作为主键了

![1697946469656](../../.vuepress/public/images/1697946469656.png)



https://www.bilibili.com/video/BV12R4y157Be/?p=22&spm_id_from=pageDriver&vd_source=243ad3a9b323313aa1441e5dd414a4ef





### 3、@TableId的value属性

​			mybatis默认将id为主键，使用TableId注解是将属性设置为主键



​		如果实体类属性名称和数据库属性匹配不上的情况下，可以使用@Table的Value属性指定数据库的字段名称



​	比如数据库是uid属性，会报错---在字段列表中没有找到id列

![1700274950418](../../.vuepress/public/images/1700274950418.png)



​	设置字段名称为uid就可以了

![1700275029715](../../.vuepress/public/images/1700275029715.png)



​	@TableId的value属性用于指定数据库表字段的主键属性





### 4、@TableId的Type

​			id默认的主键生成策略是雪花算法

​		比如我们现在不想使用雪花算法，想使用mysql的自动递增，该如何操作呢

​		首先数据库表设置主键为自动递增

​		然后设置@TableId的type属性 



![1700275487515](../../.vuepress/public/images/1700275487515.png)





![1700275528975](../../.vuepress/public/images/1700275528975.png)

​		如果我们在代码中设置了id，那么就不会自增了，或者是雪花算法，没有id的情况下会自动生成



### 5、全局配置主键生成策略

​	可以通过全局配置文件来进行主键的生成策略配置

![1700275977930](../../.vuepress/public/images/1700275977930.png)







### 6、@TableField

​		字段名称与数据库不一致的情况就可以使用@TableField

![1700276925384](../../.vuepress/public/images/1700276925384.png)





### 7、@TableLogic 逻辑删除

![1700277034113](../../.vuepress/public/images/1700277034113.png)



​	设置逻辑删除的字段

![1700277143160](../../.vuepress/public/images/1700277143160.png)



​	我们进行一个删除的操作--看看有什么效果

![1700277188658](../../.vuepress/public/images/1700277188658.png)

​	

​	我们发现之前的删除功能变为修改了

![1700277245788](../../.vuepress/public/images/1700277245788.png)





​		那么对于我们删除的数据用户是看不到的，我们现在执行查询看看效果



​	我们发现查询也是查询不到的

![1700277390904](../../.vuepress/public/images/1700277390904.png)







https://www.bilibili.com/video/BV12R4y157Be/?p=28&spm_id_from=pageDriver&vd_source=243ad3a9b323313aa1441e5dd414a4ef



































​		













































