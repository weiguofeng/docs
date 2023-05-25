# 7、idea-高效的使用maven



​		首先--我们知道maven是一个java的包管理工具



#### 1、maven的设置

​		

​	work offine -- 不建议勾选，如果远程有包的更新，是不会去拉远端的依赖的

​	大部分的都默认就可以

​	Thread count -- 用多少个线程来构建我们的maven仓库 一般配置个8

​	maven homepath -- 指定使用的maven

​	use setting file -- 指定使用的maven setting文件

​	local repository -- 本地仓库位置

![1684550920172](../../../.vuepress/public/images/1684550920172.png)





​	比如我们创建一个模块工程



![1684550985836](../../../.vuepress/public/images/1684550985836.png)





​	然后我们选择maven，我们可以通过archetype来创建maven

​		这个archetype其实就是之前别人写好的一些maven的模板

​		我们可以根据某个 模板创建自己的项目

![1684551125006](../../../.vuepress/public/images/1684551125006.png)





​		如果没有导航窗口

![1684551491495](../../../.vuepress/public/images/1684551491495.png)





#### 2、导航窗口

​	1、Reload All maven project -- 更新maven仓库，多数idea是会自动去刷新更新的，比如我们新增的包，如果没有更新或者是没有更新成功就点击刷新一下，或者多点几次

​	2、Generate Source --点击文件夹的这个是 生成Source和更新文件，这个是和源码相关的东西，很少使用

​	3、点击+ -- 这个是添加一个maven项目，这个基本也不用，因为我们一般使用new创建项目

​	4、run maven build -- 运行符号，这个是什么意思，比如我们现在有一个项目我们点击它就是对某个选中的maven项目或模块进行构建

​	![1684551661639](../../../.vuepress/public/images/1684551661639.png)



​	

​	比如，我们有一个maven的命令使用的非常多，我们可以右键命令

​		Assign Shortcut

![1684553538243](../../../.vuepress/public/images/1684553538243.png)

​	

​	这个是什么意思呢，就是可以把我们常用的这个maven命令关联一个快捷键组合

![1684553637641](../../../.vuepress/public/images/1684553637641.png)



​		Lifecycle下面

​				可以多选--ctrl然后右键点击运行

​	![1684554000203](../../../.vuepress/public/images/1684554000203.png)



​		Toggle offine mode -- 这个是离线的模式运行maven

​			这个尽量不要去点--保持在线的运行maven

![1684554123328](../../../.vuepress/public/images/1684554123328.png)



​	toggle Skip test mode

​		如果我们在运行maven的时候不想让人他运行测试用例，就可以勾选上这个

![1684554256258](../../../.vuepress/public/images/1684554256258.png)

​		点击后这个test就变灰了





​	show dependencies -- 这个是显示依赖

![1684554324713](../../../.vuepress/public/images/1684554324713.png)



​	

​	点击此轮--maven的设置

![1684554419755](../../../.vuepress/public/images/1684554419755.png)

​		其实就是打开的idea中的maven设置

![1684554448729](../../../.vuepress/public/images/1684554448729.png)







#### 	3、profiles -- 其实就是多套环境

​				我们可以根据自己的需求勾选环境

​					比如我们勾选local 那么当前环境就使用local

![1684554586055](../../../.vuepress/public/images/1684554586055.png)





#### 4、maven的插件 -- 			

![1684568142359](../../../.vuepress/public/images/1684568142359.png)



​	在项目上右键--可以使用一些maven的命令

![1684568105353](../../../.vuepress/public/images/1684568105353.png)



​	







https://www.bilibili.com/video/BV12r4y1S7ok/?spm_id_from=pageDriver&vd_source=243ad3a9b323313aa1441e5dd414a4ef





































