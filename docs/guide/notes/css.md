---
title: css
date: 2020-12-02
categories:
 - frontEnd
tags:
 - css
---

box-shadow

```css
.container {
		background: red;
		width: 10px;
		height: 10px;
		margin:10px;
		border-radius: 5px;
		box-shadow: 200px 200px 0 5px green,
		230px 200px 0 5px green,
		215px 215px 0 -3px red;
	}
	
<div class="container">

</div>
```



text-shadow

```html
<style type="text/css">
	.container {
		/*上下外边距为0 左右自适应*/
		margin:0 auto;
		max-width: 800px;
		font-size: 18px;
		line-height: 2em;
		font-family: STKaiti;
		/*text-shadow: 1px 1px 0 #aaa;*/
		/*text-shadow: 0 0 1px rgba(128,128,128,.5);*/

		background: black;
		text-shadow: -1px -1px 0 white,
		-1px 1px 0 white,
		1px -1px 0 white,
		1px 1px 0 white;
	}

	.container p {
		text-indent: 2em;
	}
</style>

<div class="container">
	<p>我与什么什么什么好久不见 阿罗拉绿绿绿绿 啦啦啦啦啦</p>
</div>
```



border-radius

```
圆角矩形
圆形
半圆、扇形 
```

```html
<style type="text/css">
	.container {
		width: 100px;
		height: 100px;
		background: red;
		/*border-radius: 10px;*/
		
		/*border-radius: 50%;*/

		/*border:50px solid green;
		border-top-left-radius: 100px;
		border-top-right-radius: 0px;
		border-bottom-right-radius: 0px;
		border-bottom-left-radius: 0px;*/

		/*width: 0px;
		height: 0px;
		border:10px solid green;
		border-radius: 30px 30px 30px 30px / 30px 33px 20px 20px;*/
	}
</style>
<div class="container">
	
</div>
```



background

```
纹理 图案 雪碧图动画 渐变 背景图尺寸适应
```

```html
<!DOCTYPE html>
<html>
<head>
	<title>background动画效果</title>
</head>
<body>
<div class="container">
	<div class="i"></div>
</div>
</body>
</html>
<style type="text/css">
	.container {

	}
	.i{
		width: 20px;
		height: 20px;
		background: url(img/service1.png) no-repeat;
		background-size: 20px 40px;
		transition: background-position .4s;
	}

	.i:hover {
		background-position: 0 -20px;
	}
</style> 
```

```html
<style type="text/css">
	.container {
		width: 400px;
		height: 300px;
		border: 1px solid red;
		background: url(img/service1.png);

		/*用来控制背景图的位置*/
		background-position: center center;

		background-repeat: no-repeat;

		/*background-size: 50% 50%;*/
		/*background-size: cover;*/
		background-size: contain;
	}
</style>

<div class="container">
	
</div>
```



clip-path

```
按路径对容器进行裁剪
几何图形
自定义路径
```

```html
<style type="text/css">
	.container {
		width: 400px;
		height: 300px;
		border: 1px solid red;
		background: url(img/changjing_02.jpg);

		/*用来控制背景图的位置*/
		background-position: center center;

		background-repeat: no-repeat;

		/*background-size: 50% 50%;*/
		/*background-size: cover;*/
		/*background-size: contain;*/

		/*clip-path: inset(100px 50px);*/
		clip-path: circle(40px at 100px 100px);
		transition: clip-path .4s;
	}
	.container:hover {
		clip-path: circle(80px at 100px 100px);
	}
</style>

<div class="container">
	
</div> 
```



```css
多边形
clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
```



```html
使用svg达到同样的效果
<svg>
	<defs>
		<clipPath id="clipPath">
			<circle cx="60" cy="60" r="50" fill="#34538b"/>
		</clipPath>
	</defs>
</svg>

clip-path: url(#clipPath);

```



3D-transform

- translate
- scale
- skew
- rotate 

```html
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<div class="container">
	<div id="cube">
		<div class="front">1</div>
	</div>
</div>
</body>
</html>
<style type="text/css">
	.container{
		margin:50px;
		padding: 10px;
		border:1px solid red;
		width: 200px;
		height: 200px;
		position: relative;

		/*透视距离*/
		perspective: 500px;
	}

	#cube{
		width: 200px;
		height: 200px;

		/*3d-透视*/
		transform-style: preserve-3d;
	}

	#cube div {
		width: 200px;
		height: 200px;
		position: absolute;
		line-height: 200px;
		font-size: 50px;
		text-align: center;
	}

	.front {
		/*x轴偏移100px*/
		/*transform: translateX(100px);*/

		/*x轴偏移100px y轴偏移100px 旋转25度 变换如果交换顺序 会变化的 不能随便交换*/
		/*transform: translateX(100px) translateY(100px) rotate(25deg);*/


		/*z轴偏移100px*/
		transform: translateZ(100px);
		background:rgba(255,0,0,.3);
	}
</style>
```



#### 补间动画

位置-平移

left/right/margin/transform

方位-旋转(transform)

大小-缩放(transform)

透明度(opacity)

其它-线性变换(transform)

```html
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<div>
	<div class="container">
		
	</div>
</div>
</body>
</html>
<style type="text/css">
	.container{
		width: 100px;
		height: 100px;
		background: red;
		/*延迟1秒 动画开始 属性宽度 动画时长1s*/
		/*transition: 1s width 1s;*/

		/*指定多个属性*/
		transition: width 1s,background 3s;

		/*指定已有的所有的属性*/
		transition: all 1s;


		/*transition-delay: 1s;*/
	}
	/*选择鼠标指针浮动在其上的元素，并设置其样式：*/
	.container:hover{
		width: 800px;
		background: green;
	}
</style>
```



定义动画进度和时间的关系

打开调试面板 点击esc 打开动画调试面板

```css
/*线性变换*/
transition-timing-function: linear;

transition-timing-function: ease-in-out;

```

| linear                        | 规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）。 |
| ----------------------------- | ------------------------------------------------------------ |
| ease                          | 规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）。 |
| ease-in                       | 规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）。  |
| ease-out                      | 规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）。  |
| ease-in-out                   | 规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）。 |
| cubic-bezier(*n*,*n*,*n*,*n*) | 在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值。 |

可以在网上搜索相关工具实现自定义效果



#### 关键帧动画

相当于多个补间动画

与元素状态的变化无关

```html
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<div class="container">
	
</div>
</body>
</html>
<style>
	.container{
		width: 100px;
		height: 100px;
		background: red;
		animation: run 1s linear;

		/*指定正向还是反向*/
		/*animation-direction: reverse;*/

		/*指定循环次数*/
		/*animation-iteration-count: infinite;*/

		/*动画播放状态*/
		/*animation-play-state: paused;*/

		/*决定动画停在哪里*/
		/*animation-fill-mode: forwards;*/
	}

	/*此处run的动画名称需要对应*/
	@keyframes run {
		/*此处0%可以写成from 100%可以写成to*/
		0%{
			width: 100px;
		}
		/*50%{
			width: 200px;
		}*/
		100%{
			width: 800px;
		}
	}
</style>
```



#### 逐帧动画

每一帧都是关键帧

适用于无法补间计算的动画

资源较大

使用steps()

```html
实现猎豹动画
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<div class="container">
	
</div>
</body>
</html>
<style type="text/css">
	.container {
		width: 100px;
		height: 100px;
		border:1px solid red;
		background: url(img/liebaodonghua.png) no-repeat;
		animation: run 1s infinite;
		/*时间增加的时候 动画不动 比如0%到12.5% 中间没有过渡*/
		animation-timing-function: steps(1);
	}
	@keyframes run{
        0%{
            background-position: 0 0;
        }
        12.5%{
            background-position: -100px 0;
        }
        25%{
            background-position: -200px 0;
        }
        37.5%{
            background-position: -300px 0;
        }
        50%{
            background-position: 0 -100px;
        }
        62.5%{
            background-position: -100px -100px;
        }
        75%{
            background-position: -200px -100px;
        }
        87.5%{
            background-position: -300px -100px;
        }
        100%{
            background-position: 0 0;
        }
    }
</style>
```



```
css动画实现方式有几种
transition
keyframes(animation)

过渡动画和关键帧动画区别
过渡动画需要有状态变化
关键帧动画不需要状态变化
关键帧动画能控制更精细

如何实现逐帧动画
使用关键帧动画
去掉补间(steps)

css动画性能
性能不坏
部分情况下优于js
js可以做到更好
部分高危属性
box-shadow
```



#### css预处理器

基于css的另一种语言

通过工具编译成css

添加了css不具备的特性

能提升css文件的组织

less sass



- 嵌套 反映层级和约束
- 变量和计算 减少重复代码
- extend 和Mixin代码片段
- 循环 适用于复杂有规律的样式
- import css文件模块化



##### less嵌套

```
npm install less -g
lessc less1.less >less1.css
```

```less
body{
	padding:0px;
	margin:0px;
}

.wrapper{
	background: white;

	.nav{
		font-size: 12px;
	}
	.content{
		font-size: 14px;
		&:hover{
			background:red;
		}
	}
}
```

```css
body {
  padding: 0px;
  margin: 0px;
}
.wrapper {
  background: white;
}
.wrapper .nav {
  font-size: 12px;
}
.wrapper .content {
  font-size: 14px;
}
.wrapper .content:hover {
  background: red;
}
```



###### sass嵌套

```
npm install node-sass -g
node-sass sass1.scss >sass1.css

不保留嵌套
node-sass --output-style expanded sass1.scss >sass1.css
```



##### less变量

```less
@fontsize: 12px;
@bgcolor: red;
body{
	padding:0px;
	margin:0px;
}

.wrapper{
	background: lighten(@bgcolor,40%); //让颜色变浅40%

	.nav{
		font-size: @fontsize;
	}
	.content{
		font-size: @fontsize + 2px;
		&:hover{
			background:red;
		}
	}
}
```



##### sass变量

```
与less的差异在于符号
$fontsize: 12px;
$bgcolor: red;
```



##### less mixin

想实现一段代码的复用

```less
@fontsize: 12px;
@bgcolor: red;

.block(@fontsize){
	font-size:@fontsize;
	border: 1px solid red;
	border-radius: 4px;
}

.wrapper{
	background: lighten(@bgcolor,40%); //让颜色变浅40%

	.nav{
		.block(@fontsize);
	}
	.content{
		.block(@fontsize); + 2px;
		&:hover{
			background:red;
		}
	}
}
```



##### sass mixin

```scss
$fontsize: 12px;
$bgcolor: red;

@mixin block($fontsize){
	font-size:$fontsize;
	border: 1px solid red;
	border-radius: 4px;
}

.wrapper{
	background: lighten($bgcolor,40%); //让颜色变浅40%

	.nav{
		@include block($fontsize);
	}
	.content{
		@include block($fontsize + 2px);
		&:hover{
			background:red;
		}
	}
}
```



##### less extend

```less
@fontsize: 12px;
@bgcolor: red;

.block{
	font-size:@fontsize;
	border: 1px solid red;
	border-radius: 4px;
}

.wrapper{
	background: lighten(@bgcolor,40%); //让颜色变浅40%

    .nav:extend(.block){
        
    }
	.content:extend(.block){
		
		&:hover{
			background:red;
		}
	}
}
```



#### bootstrap4

使用flexbox布局

提供布局和reboot版本

##### bootstrap js组件

- 基于data-*属性使用
- 基于js api使用

##### bootstrap响应式布局

![image-20200918165527108](C:\Users\Admin\Desktop\study\css-响应式布局.png)

```html
<div class="container">
	<div class="row">
		<div class="content col-12 col-lg-3 col-md-4 col-sm-6"><div>内容</div></div>
		<div class="content col-12 col-lg-3 col-md-4"><div>内容</div></div>
		<div class="content col-12 col-lg-3 col-md-4"><div>内容</div></div>
		<div class="content col-12 col-lg-3 col-md-4"><div>内容</div></div>
		<div class="content col-12 col-lg-3 col-md-4"><div>内容</div></div>
		<div class="content col-12 col-lg-3 col-md-4"><div>内容</div></div>
		<div class="content col-12 col-lg-3 col-md-4"><div>内容</div></div>
		<div class="content col-12 col-lg-3 col-md-4"><div>内容</div></div>
		<div class="content col-12 col-lg-3 col-md-4"><div>内容</div></div>
	</div>
</div>
```



##### bootstrap定制方法

- 使用css同名类覆盖
- 修改源码重新构建
- 引用scss源文件 修改变量



```
bootstrap优缺点
代码结构合理 样式现成使用
定制繁琐体积大

bootstrap实现响应式布局
media query 设置不同分辨率的class
为不同分辨率选择不同的网格

定制样式

```



#### css工程化

PostCSS

css-postcss解析(模块化 前缀 兼容性)-css

特性主要靠插件

- import 模块合并
- autoprefixer自动加前缀
- cssnano压缩代码
- cssnext css新特性
- precss变量 mixin 循环

```
npm install postcss-cli
postcss src/postcss1.css  
```

<Valine></Valine>
