# 4、idea-http接口请求

​	

​			使用idea自带的 http request工具，进行Controller的调试



​	我们可以看到我们写的Controller的每个接口都会有一个图标有点像一个Spring的豆子，但是右下方有个地球的标识

![1684506595789](../../../.vuepress/public/images/1684506595789.png)





​	我们在点击这个图标的时候，他就会把我们带到一个generator request http这样的一个文件，然后我们点击一下这个文件定位，它就把我们带到这个scratches文件夹中，会生成一个generated-request.http的文件

![1684506742994](../../../.vuepress/public/images/1684506742994.png)

​	他是一个http 的描述文件



​	在我们点击这个运行的时候---会发起一个请求，然后生成一个json文件

​		下方也会有请求的参数和返回内容

![1684506875013](../../../.vuepress/public/images/1684506875013.png)



​	如果接口比较多的话，也可以点击run all 那么接口就全部运行发起请求了

![1684506944200](../../../.vuepress/public/images/1684506944200.png)

​	在点击运行的时候--会提示我们是否要加一些环境信息

![1684506999876](../../../.vuepress/public/images/1684506999876.png)



​	我们还可以配置一些环境的信息

![1684507109095](../../../.vuepress/public/images/1684507109095.png)



####  使用环境信息

​	![1684507147786](../../../.vuepress/public/images/1684507147786.png)





#### 	选择某个环境运行

![1684507222817](../../../.vuepress/public/images/1684507222817.png)



####  传入参数发起请求

请求头：比如Context Type

![1684507383041](../../../.vuepress/public/images/1684507383041.png)





参数-- 直接放我们的json数据就ok

![1684507532447](../../../.vuepress/public/images/1684507532447.png)





#### 	响应结果比对

​			多次请求后--会有多个json文件，可以进行比较

![1684507597571](../../../.vuepress/public/images/1684507597571.png)





#### 	请求模板

​		比如我们想创建一个请求--可以点击add request，然后可以选择请求方式，会携带模板生成

![1684507751464](../../../.vuepress/public/images/1684507751464.png)



​	生成post请求模板

![1684507776937](../../../.vuepress/public/images/1684507776937.png)



​	比如--post From with a file filed模板 --这个是还可以上传文件的请求-

​		左侧的三角 是我们可以引用一个绝对路径的文件

![1684507901761](../../../.vuepress/public/images/1684507901761.png)

​	



####  convert--

​		比如我们之前使用的postman导出，生成一个Convert的格式

![1684507998864](../../../.vuepress/public/images/1684507998864.png)



​	我们可以直接将其他的请求copy进来，转化过来

![1684508150814](../../../.vuepress/public/images/1684508150814.png)



​	转化后

​	![1684508174071](../../../.vuepress/public/images/1684508174071.png)

​	



#### 	log 查看请求的日志

![1684508236371](../../../.vuepress/public/images/1684508236371.png)



































































































