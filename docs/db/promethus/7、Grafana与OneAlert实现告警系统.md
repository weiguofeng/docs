# 7、Grafana与OneAlert实现告警系统



​		Grafana除了可以监控--其实还可以把我们检测到的运维异常，通过，邮件，微信，电话的方式，反馈给我们的运维负责人



![1678631065290](../../.vuepress/public/images/1678631065290.png)



## 1、设置时间同步很重要

​	多窗口执行 nptdate 

![1678631183878](../../.vuepress/public/images/1678631183878.png)

​	不然的话可能会出现报警异常  报警不成功的情况





## 2、oneAlert

​	是国内一家公司 -- 叫睿象云 智能告警平台

![1678631334629](../../.vuepress/public/images/1678631334629.png)



​	在这个系统注册一个账号就可以使用了--目前免费



​	我们选择Grafana可视化工具

![1678631446241](../../.vuepress/public/images/1678631446241.png)



​	新建应用

![1678631543365](../../.vuepress/public/images/1678631543365.png)



​	这个key很重要---通过这个key就可以实现报警了

![1678631599971](../../.vuepress/public/images/1678631599971.png)





## 3、Grafana中配置



​	在grafana中配置webhook 路径

![1678631641248](../../.vuepress/public/images/1678631641248.png)



​	增加告警通道

![1678631855153](../../.vuepress/public/images/1678631855153.png)

![1678631762892](../../.vuepress/public/images/1678631762892.png)



​	url平台会自动生成

![1678632044679](../../.vuepress/public/images/1678632044679.png)



​	保存：

![1678632109406](../../.vuepress/public/images/1678632109406.png)





## 4、添加告警

​	比如--cpu的监控图表中--设置告警

​	点击编辑edit

![1678632262628](../../.vuepress/public/images/1678632262628.png)



​	

然后选择alert--添加告警

![1678632324654](../../.vuepress/public/images/1678632324654.png)



​	设置名称，设置阈值比如0.5

![1678632472160](../../.vuepress/public/images/1678632472160.png)



设置通知：选择使用oneAlert报警，设置报警内容

![1678632672859](../../.vuepress/public/images/1678632672859.png)

​	点击右上角保存

![1678632759410](../../.vuepress/public/images/1678632759410.png)



![1678632789105](../../.vuepress/public/images/1678632789105.png)







## 5、测试一下

​	这个比较消耗cpu我们执行一下测试

![1678632900472](../../.vuepress/public/images/1678632900472.png)





点击测试：到达0.5之后触发

![1678633258719](../../.vuepress/public/images/1678633258719.png)





## 6、oneAlert通知配置

​	默认使用邮件进行发送



![1678633106903](../../.vuepress/public/images/1678633106903.png)



![1678633307930](../../.vuepress/public/images/1678633307930.png)







https://www.bilibili.com/video/BV16J411z7SQ?p=11&spm_id_from=pageDriver&vd_source=243ad3a9b323313aa1441e5dd414a4ef



​	



​	





















































