# 5、promethus添加图形图像

​	

​		因为promethus本身自带的web界面展示的内容相比比较少

​	

​		原因是我们还少安装一个工具Grafana可视化图形工具

![1678619033075](../../.vuepress/public/images/1678619033075.png)



## 1、安装grafana

​	https://grafana.com/

​		官网中--进入down下载rpm的文件包

![1678619278075](../../.vuepress/public/images/1678619278075.png)

​		- i 是install  --- v是进入      h是





![1678619318491](../../.vuepress/public/images/1678619318491.png)



安装失败：需要另外俩个依赖包

![1678619438105](../../.vuepress/public/images/1678619438105.png)



​	安装另外依赖的软件包

![1678619493920](../../.vuepress/public/images/1678619493920.png)

​	这样rpm包也可以通过 yum来安装，因为yum最终也是通过rpm实现的

```
# 如果我们使用yum *** -y的方式安装可以帮助我们解决 依赖问题，自动加载依赖

yum install /root/Desktop/grafana-5.3.4-1.x86_64.rpm -y

```



​	然后启动和设置开机启动

![1678619781375](../../.vuepress/public/images/1678619781375.png)



检查端口

![1678619810226](../../.vuepress/public/images/1678619810226.png)





## 2、登录grafana

​	ip+3000端口---可以访问到我们刚刚启动的grafana

​	默认 用户名 密码都是admin

![1678619885966](../../.vuepress/public/images/1678619885966.png)



​	第一次登录--让先设置密码

![1678619999253](../../.vuepress/public/images/1678619999253.png)



这样就进入系统了

![1678620040335](../../.vuepress/public/images/1678620040335.png)









## 3、添加promethus的数据源

​	比较主流的监控系统像 nacos 它支持的都可以收集进来----它支持的版本还是很多的





### 3.1、添加数据源

​	点击 add data source

![1678620317574](../../.vuepress/public/images/1678620317574.png).



### 3.2、设置数据源 -名称，类型，ip等



​		它支持的数据源类型有很多种--我们选择promethus

![1678620482291](../../.vuepress/public/images/1678620482291.png)





​	url填写数据源的地址，Access默认

​	Auth -- 授权 公网需要授权，内网无需授权

![1678620624040](../../.vuepress/public/images/1678620624040.png)



​	

下面的设置，根据需要配置

![1678620784074](../../.vuepress/public/images/1678620784074.png)



### 3.3、查看是否添加成功

​	点击 设置 -- DataSource

![1678620939999](../../.vuepress/public/images/1678620939999.png)





## 4、查看数据--图形展示

​	点击+号，然后点击 DataSource

![1678621248095](../../.vuepress/public/images/1678621248095.png)



​	然后我们一般点击graph就是图像的意思

![1678621371675](../../.vuepress/public/images/1678621371675.png)



​	但是现在还没有数据---现在只是增加了一个图形

![1678621453823](../../.vuepress/public/images/1678621453823.png)

、

​	选择需要呈现的数据

​	点击 标题的 倒三角符号，编辑---增加我们的数据点

​	在这个过程中其实它就会收集一下数据

![1678621552071](../../.vuepress/public/images/1678621552071.png)



​	选择数据源--然后设置采集时间间隔点 3个点 比如5分钟维度，10分钟维度，30分钟维度

![1678621817988](../../.vuepress/public/images/1678621817988.png)

![1678621748138](../../.vuepress/public/images/1678621748138.png)



​	注意监测点：

![1678621894915](../../.vuepress/public/images/1678621894915.png)





​	这样就可以看到3条线的维度图表了

​		因为我们配置了3个监测点，如果多的话那么就是多条线

![1678621960819](../../.vuepress/public/images/1678621960819.png)

​		它查的其实是agent 被监控的服务器信息



​	这些图表我们也可以根据条件进行过滤和赛选查看

![1678622207605](../../.vuepress/public/images/1678622207605.png)



​	保存：

![1678622255448](../../.vuepress/public/images/1678622255448.png)

​	可以把我们设计好的图形--下次登录后还是可以看到

![1678622327869](../../.vuepress/public/images/1678622327869.png)



​	这样就一直可以看到cpu这个负载了

![1678622363346](../../.vuepress/public/images/1678622363346.png)



​	也可以设置变量--来过滤

​		比如--具体查看某一台 实例 的CPU -- 使用变量 花括号的表达方式进行过滤

![1678622494740](../../.vuepress/public/images/1678622494740.png)



![1678622702067](../../.vuepress/public/images/1678622702067.png)

































https://www.bilibili.com/video/BV16J411z7SQ?p=9&spm_id_from=pageDriver&vd_source=243ad3a9b323313aa1441e5dd414a4ef



























