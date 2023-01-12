# 4、Stream流中间方法



#### 1、常见的中间方法

​	

​		注意合并流 concat 是将俩个流合并为一个，类型需要一致，如果不一致也是 父子关系的类型才可以

![1673180100012](../../.vuepress/public/images/1673180100012.png)



​	中间方法的一系列操作 对原集合数据是不影响的，因为我们只是操作或修改流中的集合数据。





#### 2、案例

#### 	2.1、filter方法 -- 过滤

​		我们先以内部类的方式实现一下

![1673180533659](../../.vuepress/public/images/1673180533659.png)



使用lamda的方式

![1673180616516](../../.vuepress/public/images/1673180616516.png)



输出没有问题

![1673180651282](../../.vuepress/public/images/1673180651282.png)



​	为了测试stream是否只能使用一次--我们使用变量的方式重复调用试试

![1673180784264](../../.vuepress/public/images/1673180784264.png)



​		现在是没有问题，数据也没问题

![1673180845653](../../.vuepress/public/images/1673180845653.png)



​	但是如果现在我们还想再使用一次stream1---发现会报错

![1673180960018](../../.vuepress/public/images/1673180960018.png)



​	错误提示：流已经关闭了

![1673180996823](../../.vuepress/public/images/1673180996823.png)

​	因为只能使用一次stream 所以就没有必要使用变量的方式使用了--使用链式编程





​	修改流中的数据不会影响到 原集合数据--我们验证一下

![1673181182287](../../.vuepress/public/images/1673181182287.png)



​	确实不会影响到

![1673181205469](../../.vuepress/public/images/1673181205469.png)





#### 	2.2、limit方法 -- 获取前几个数据

![1673181402176](../../.vuepress/public/images/1673181402176.png)





#### 2.3、skip方法 -- 跳过几个数据

​	跳过前4个数据

![1673181511626](../../.vuepress/public/images/1673181511626.png)



练习：

![1673181676469](../../.vuepress/public/images/1673181676469.png)

![1673181749463](../../.vuepress/public/images/1673181749463.png)

![1673181767046](../../.vuepress/public/images/1673181767046.png)















































https://www.bilibili.com/video/BV1te411w722/?p=4&spm_id_from=pageDriver&vd_source=243ad3a9b323313aa1441e5dd414a4ef































































