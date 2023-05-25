# 6、idea-提示不智能



​	因为默认设置是区分大小写的，我们可以取消大小写



![1684512138619](../../../.vuepress/public/images/1684512138619.png)

​			这个时候他的联想的内容就比之前多了



比如

![1684512203116](../../../.vuepress/public/images/1684512203116.png)





​	日志为什么打的特别工整，使用life template

![1684512309031](../../../.vuepress/public/images/1684512309031.png)



​	模板生成的代码

![1684512344427](../../../.vuepress/public/images/1684512344427.png)



​	例如

![1684512417058](../../../.vuepress/public/images/1684512417058.png)





​	如何配置这个打印日志的小技巧呢

​		使用live template 模板代码

![1684512532040](../../../.vuepress/public/images/1684512532040.png)



​	然后我们需要编辑变量--设置变量模板

![1684512586518](../../../.vuepress/public/images/1684512586518.png)



​	

​	我们可以搜索一下这个groovy的脚本

![1684512635666](../../../.vuepress/public/images/1684512635666.png)

​	添加进去就ok了

​	也可以在视频中的评论区找



```
loge
log.error($content$,$params$);
content 参数：
groovyScript("def params = _2.collect {'【'+it+' = {}】'}.join(', '); return '\"' + _1 + '() called with exception => ' + (params.empty  ? '' : params) + '\"'", methodName(), methodParameters())
params参数：
groovyScript("def params = _1.collect {it}.join(', '); return   (params.empty  ? '' : params) + ',e' ",  methodParameters())

logm
log.info($content$,$params$);
content参数：
groovyScript("def params = _2.collect {'【'+it+' = {}】'}.join(', '); return '\"' + _1 + '() called with parameters => ' + (params.empty  ? '' : params) + '\"'", methodName(), methodParameters())
params参数：
groovyScript("def params = _1.collect {it}.join(', '); return   (params.empty  ? '' : params) ",  methodParameters())



logr
log.info("$METHOD_NAME$() returned: " +  $result$);
METHOD_NAME参数: 
methodName()
result参数：
variableOfType(methodReturnType())


```







https://www.bilibili.com/video/BV1uR4y1p7Lh/?spm_id_from=pageDriver&vd_source=243ad3a9b323313aa1441e5dd414a4ef





















​	



​	