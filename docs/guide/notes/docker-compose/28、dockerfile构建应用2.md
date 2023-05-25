# 28、dockerfile构建应用2



​		![1683532052676](../../../.vuepress/public/images/1683532052676.png)

​		前面我们已经完成了前三步，接下来就是项目打包



## 1、打包

​		打包前我们先跳过测试

​		点击一下maven中的test，然后点击idea的闪电标识，代表跳过测试

![1683532183012](../../../.vuepress/public/images/1683532183012.png)



​	然后test就变成灰色的了--然后点击package

![1683532233453](../../../.vuepress/public/images/1683532233453.png)



​	jar包已生成

![1683532327246](../../../.vuepress/public/images/1683532327246.png)



## 2、根据jar包生成镜像

#### 	1、创建dockerfile

​	SFTP连接一下远程主机---因为我们的docker引擎是在远程主机上的

![1683532552188](../../../.vuepress/public/images/1683532552188.png)



​	创建一个apps目录---用来运行我们自己的项目

![1683532609315](../../../.vuepress/public/images/1683532609315.png)



​	这个apps作为dockerfile的上下文，将jar包传上来，然后再创建一个dockerfile文件

![1683532723142](../../../.vuepress/public/images/1683532723142.png)



idea的终端工具是在Tools下--这样可以使用sftp进行连接

![1683532892507](../../../.vuepress/public/images/1683532892507.png)





#### 	2、我们需要基于jdk的镜像

​			在docker hub 中寻找jdk8的版本

![1683533769143](../../../.vuepress/public/images/1683533769143.png)



​	基础镜像是java8的jre



#### 	3、编写dockerfile文件

![1683533928429](../../../.vuepress/public/images/1683533928429.png)

​		基础镜像 --》环境变量设置了个路径 --》工作路径 workdir --》添加jar包，且修改名字为apps.jar



​			描述端口 Expose 8989

​		存储卷 不需要



​			运行是-- ENTRYPOINT ，然后CMD 我们需要运行参数可变的是 apps.jar

![1683534150672](../../../.vuepress/public/images/1683534150672.png)

​		

​		修改完成--点击上传按钮 ，上传到SFTP服务器

![1683534261797](../../../.vuepress/public/images/1683534261797.png)



#### 4、开始构建

​		我们构建一个apps 1.0的版本

![1683536172821](../../../.vuepress/public/images/1683536172821.png)





构建完成后我们查看一下

![1683536244369](../../../.vuepress/public/images/1683536244369.png)



#### 5、运行镜像

​	加个  -p  将端口映射出来

![1683536349277](../../../.vuepress/public/images/1683536349277.png)



我们在访问的时候发现报错了

![1683536419858](../../../.vuepress/public/images/1683536419858.png)



​	原因是他没有数据库

​	所以所我们需要把应用所依赖的这些数据库 和中间件先运行起来



#### 6、运行一下mysql

![1683536596481](../../../.vuepress/public/images/1683536596481.png)



​	还需要加个-v数据持久化

![1683536668175](../../../.vuepress/public/images/1683536668175.png)



​	检查mysql运行没有问题

![1683536710288](../../../.vuepress/public/images/1683536710288.png)



#### 7、数据库初始化

​		连接创建数据库

![1683536840679](../../../.vuepress/public/images/1683536840679.png)



​	将表数据同步上来

![1683536884230](../../../.vuepress/public/images/1683536884230.png)





​	那么我们现在已经有mysql了，如果运行apps 1.0 的话需要他们在同一个网络中才可以进行连接



#### 8、构建一个网络

```
	docker network create app
```

![1683537034167](../../../.vuepress/public/images/1683537034167.png)



​	然后网络连接mysql

![1683537135475](../../../.vuepress/public/images/1683537135475.png)

![1683537168844](../../../.vuepress/public/images/1683537168844.png)



​	我们看一下这个网络---mysql已加入

![1683537205472](../../../.vuepress/public/images/1683537205472.png)

![1683537240965](../../../.vuepress/public/images/1683537240965.png)





既然这个app网络里面有mysql了

​	

我们的应用只需要和mysql在同一个网络里就可以通信了

​	这样的话我们的项目的数据库地址就可以写成 mysql了--这个mysql是容器的名称

![1683542867386](../../../.vuepress/public/images/1683542867386.png)



​	然后重新打包，重新构建



​	



#### 9、重新构建运行镜像



#### ![1683543096416](../../../.vuepress/public/images/1683543096416.png)

​		查看日志

​		docker logs 

![1683543161799](../../../.vuepress/public/images/1683543161799.png)			



把apps也加入到网络中

![1683543264055](../../../.vuepress/public/images/1683543264055.png)



现在访问就可以了

![1683543542273](../../../.vuepress/public/images/1683543542273.png)





https://www.bilibili.com/video/BV1wQ4y1Y7SE?p=29&spm_id_from=pageDriver&vd_source=243ad3a9b323313aa1441e5dd414a4ef









































