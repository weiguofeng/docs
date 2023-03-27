# 2、使用Lora制作AI网红



![1679827193937](../../.vuepress/public/images/1679827193937.png)

## 1、前提

​	首先需要下载SD程序--使用git拉取https://github.com/AUTOMATIC1111/stable-diffusion-webui

​	需要python环境 -- 3.10.6的版本以上https://www.python.org/downloads/windows/

​	注意，在运行的时候是--进入到我们拉取代码的路径下D:\software\Stable-Diffusion-web-UI\stable-diffusion-webui

​		windows--双击webui-user.bat 可执行文件进行运行--第一次启动需要下载很多依赖比较慢



​	注意：可能有些python依赖的下载报错---需要修改lunch.py文件的镜像地址，或者是科学上网处理。

​		



首先需要下载制作AI网红照片 所需要的Stable Diffusion模型

​		然后加上Lora就可以制作出这样的效果，以及AI Coser



####  中文--汉化

​	点击 Extensions

![1679846475499](../../.vuepress/public/images/1679846475499.png)

​	![1679846565737](../../.vuepress/public/images/1679846565737.png)

​	搜索ZH -- 然后install

![1679846636866](../../.vuepress/public/images/1679846636866.png)



​	然后点击settings 然后reload UI

![1679846736480](../../.vuepress/public/images/1679846736480.png)





​	确认中文包勾选	然后点击Apply and restart UI

![1679846812032](../../.vuepress/public/images/1679846812032.png)



然后点击settings点击user interface 用户接口

![1679846920124](../../.vuepress/public/images/1679846920124.png)



然后设置最下面的localization 为中文

![1679846974227](../../.vuepress/public/images/1679846974227.png)



然后保存设置---重启UI

![1679847028362](../../.vuepress/public/images/1679847028362.png)



ok--汉化完成







#### 下载Stable Diffusion 模型

​	打开 https://civitai.com/

![1679827376420](../../.vuepress/public/images/1679827376420.png)



​	搜索ChilloutMix  就可以找到 ChilloutMix  的模型页面

![1679827803504](../../.vuepress/public/images/1679827803504.png)

​		可能因为这个模型的过于火爆，产生了一些舆论问题所以 Civit AI把他下架了

​	我们也可以通过Chillout Mix-NI模型的google银盘备份来使用，请不要做一些违背法律或风俗的事情



下载模型

![1679828138908](../../.vuepress/public/images/1679828138908.png)





#### Lora 模型

​	https://civitai.com/models

​	搜索Lora模型

​	在Civit AI 搜索 Doll Likeness 就可以找到Korean Doll Likeness、Taiwan Doll Likeness、Japanese Doll Likeness等等

​	可以三个Lora模型都下载下来--等一下会使用到

![1679828703746](../../.vuepress/public/images/1679828703746.png)





## 2、模型下载和存放



​	把下载完成的Chillout Mix 模型  复制 到Stable Diffusion web ui下的Model文件夹下的 Stable Diffusion文件夹内![1679844994680](../../.vuepress/public/images/1679844994680.png)





然后把下载完毕的三个Lora模型复制到model文件夹下的Lora文件夹内，这样模型就准备完成

![1679844961538](../../.vuepress/public/images/1679844961538.png)



![1679845111266](../../.vuepress/public/images/1679845111266.png)



## 3、安装Additional NetWorks外挂

​	执行webui-user.bat 打开Stable Diffusion

​	选择模型--点击扩展

![1679847142568](../../.vuepress/public/images/1679847142568.png)



​	选择可用---加载

​			这里加载的就是官方的扩展列表--也就是外挂列表

![1679847204087](../../.vuepress/public/images/1679847204087.png)



​	我们找到[Kohya-ss Additional Networks](https://github.com/kohya-ss/sd-webui-additional-networks.git)

​			这个扩展--点击安装

![1679847345364](../../.vuepress/public/images/1679847345364.png)

​	然后重启UI



## 4、生成图片

​	点击Lora 选择每个Lora模型，配置权重

![1679848249746](../../.vuepress/public/images/1679848249746.png)



​	注意，所有的Lora全部加起来权重不超过1

![1679848338432](../../.vuepress/public/images/1679848338432.png)





​	然后输入提示词--与负面提示词

​		正向提示词 就是--我们希望看到的

​	提示词语法：https://www.youtube.com/watch?v=nHfdvgxsPUU

​		反向提示词就是--我们不希望什么样的



#### 1、设置采样方法

​	DPM++SD 各种方法生成效果不一样

![1679848928318](../../.vuepress/public/images/1679848928318.png)



​	采样迭代步数 设置为30

![1679848971542](../../.vuepress/public/images/1679848971542.png)





​	按下show extra networks 收起规则--点击生成就可以生成图片了

![1679849018019](../../.vuepress/public/images/1679849018019.png)







​	效果如下：

![1679849191801](../../.vuepress/public/images/1679849191801.png)





#### 	2、可以把生成批量 设置为9

![1679849259837](../../.vuepress/public/images/1679849259837.png)





https://www.youtube.com/watch?v=OoTgK7w-gjQ

























打开Civit AI

