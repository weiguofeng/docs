---
title: js进阶应用
date: 2020-12-03
categories:
 - js
 - frontEnd
tags:
 - js
---

### 1.预解释(变量提升)

#### 基本数据类型

> number string boolean null undefined 

引用数据类型

> object：[]，{}，/$/，Date
>
> function



- 当浏览器加载html页面的时候，首先会提供一个供全局js代码执行的环境->全局作用域（global/window）

```js
var name = "aaa";
	var obj = {
		name: "bbb",
		age : 8
	};
	function fn(){
		console.log("ccc")
	};
console.log(fn) //输出函数本身
console.log(fn()) //返回当前函数的执行结果(即return返回的值，如果没有return,则默认返回undefined)
```

![image-20200902111521557](C:\Users\Admin\Desktop\study\js\js笔记\02-jsweek1\img\image-20200902111521557.png)



#### 1.1什么是预解释

> 在当前的作用域中，js代码执行之前，浏览器首先会默认的把所有带var和function进行提前的声明或者定义



##### 声明和定义

- var num =12;
- 声明：var num; 告诉浏览器在全局作用域中有一个num的变量了
  - 如果一个变量只是声明了但是没有赋值，默认的值 undefined
- 定义：num=12; 给变量赋值



##### var和function的预解释操作的区别

- var：在预解释的时候只是提前的声明
- function：在预解释的时候提前声明+定义都完成



```js
console.log(name); //=>undefined
var name = "aaa";
console.log(name); //=>aaa
	var obj = {
		name: "bbb",
		age : 8
	};
fn(100,200); //=>可以在上面执行，因为预解释的时候声明+定义就已经完成了
	function fn(num1,num2){
		total = num1+num2;
        console.log(total);
	};
```



>  预解释只发生在当前的作用域下，例如：开始只对window下的进行预解释，只有函数执行的时候才会对函数中的进行预解释



##### js中栈内存与堆内存

- 栈内存：用来提供一个供JS代码执行的环境-->作用域
- 堆内存：用来存储引用数据类型的值->对象存储的是属性名和属性值，函数存储的是代码字符串



##### 思考题

```js
console.log(total); //=>undefined
	var total = 0;
	function fn(num1,num2){
		console.log(total) //=>undefined
		var total = num1+num2;
        console.log(total); //=>300
	};
	fn(100.200);
	console.log(total); //=>0
```

![image-20200902141909923](C:\Users\Admin\Desktop\study\js\js笔记\02-jsweek1\img\image-20200902141909923.png)

##### 区分私有变量与全局变量

- 在全局作用域下声明(预解释的时候)的变量是全局变量
- 在私有作用域中`声明的变量`和`函数的形参`都是私有变量
  - 在私有作用域中，代码执行的时候遇到了一个变量，首先需要确定它是否为私有的变量，如果是私有的变量，那么和外面的任何东西都没有关系
  - 如果不是私有的，则往作用域的上级作用域进行查找，如果上级作用域也没有则继续查找，一直找到window作用域  ===>"作用域链"



当函数执行的时候(目的是让函数体中的代码执行)，首先会形成一个新的私有作用域

- 如果有形参，先给形参赋值
- 进行私有作用域中的预解释
- 私有作用域中的代码从上而下执行

- 函数形成一个新的私有的作用域保护了里面的私有变量不受外界的干扰（外面修改不了私有的，私有的也修改不了外面的） =>"闭包"



```js
console.log(total); //=>undefined
	var total = 0;
	function fn(num1,num2){
		console.log(total) //=>0 total不是私有的，找全局下的total,也就是在这里出现的所有total其实应该都是全局的
		var total = num1+num2;
        console.log(total); //=>全局的 300
	};
	fn(100.200);
	console.log(total); //=>300
```



### 2.全局变量下的细节问题

##### 在全局作用域中 带var和不带var的区别

- 带var的可以进行预解释，所以在赋值的前面执行不会报错，不带var的是不能进行预解释的，在前面执行会报错

```js
console.log(num); //=>undefined
var num =12; 

console.log(num); //=>Uncaught ReferenceError: num is not defined
num =12; 
```



##### 前面执行时定义var与不定义var的关系

- num=12 =>//相当于给window增加了一个叫做num的属性名，属性值是12

- var num=12 =>//相当于给全局作用域增加了一个全局变量num，但是不仅如此，它也相当于给window增加了一个属性名num，属性值是12

```js
var num =12; 
console.log(num); //=>12

num =12; 
console.log(num); //=>12 window.num
```



私有作用域中出现的一个变量不是私有的，就往上级作用域进行查找，上级没有则继续向上查找，一直找到window为止，如果window下也没有的情况下：

- 如果是获取值：console.log(total); =>报错
- 如果是赋值：total = 100; =>相当于给window增加了一个属性名total，属性值是100

```js
function fn(){
	//console.log(total); //=>Uncaught ReferenceError: total is not defined
	total = 100;
}
fn();
console.log(total);
```

js中如果不进行特殊处理的情况下，上面的代码报错，下面的代码都不在执行了



### 3.预解释特殊情况下的处理

#####  in的使用

- "name" in obj 判断name是否为obj这个对象的一个属性，是的话返回true，不是的话返回false

```js
var obj = {name:"aaa",age:8};
console.log("name" in obj); =>true
console.log("eat" in obj); =>false
```



##### 例1

- 预解释的时候不管你的条件是否成立，都要把带var的进行提前的声明

- window的预解释：var num; -> window.num;

```js
if(!("num" in window)) { //=>条件false
	var num = 12;
}
console.log(num); //=>undefined
```



##### 例2

- 匿名函数之函数表达式：把函数定义的部分当做一个值赋值给我们的变量/元素的某一个事件
- 预解释的时候只预解释“=”左边的，右边的是值，不参与预解释
- 推荐该方式定义函数

```js
//window下的预解释：var fn;
fn();//=>undefined() 报错 Uncaught TypeError: fn is not a function
var fn = function() {
	console.log("ok");
}
```

```js
fn(); //=>ok
function fn() {
	console.log("ok");
}
fn(); //=>ok
```



##### 例3

- 自执行函数：定义和执行一起完成了
- 自执行函数定义的那个function在全局作用域下不进行预解释，当代码执行到这个位置的时候定义和执行一起完成了

```js
(function(num) {}) (100);
+function(num) {}(100);
~function(num) {}(100);
-function(num) {}(100);
!function(num) {}(100);
```



##### 例4

- 函数体中return后面的代码虽然不在执行了，但是需要进行预解释
- return后面跟着的都是我们要返回的值，所以不进行预解释

```js
function fn() {
    //var num;
	console.log(num); //=>undefined
	return function () {
	
	};
	var num = 100;
}
fn();
```



##### 例5

- 在js中如果变量的名字和函数的名字重复了，也算冲突
- 预解释：var fn; window.fn; fn=xxxfff000 window.fn=xxxfff000
- 在预解释的时候，如果名字已经声明过了，不需要重新的声明，但是需要重新的赋值

```js
var fn = 13;
function fn() {  
	console.log("ok");
}
```

```js
//window预解释
//声明+定义 fn = xxxfff111
//声明 var fn;(不需要重新声明)
//声明(不重复进行)+定义 fn = xxxfff222
//->fn=xxxfff222
fn(); //=>2
function fn(){console.log(1);};
fn(); //=>2
var fn = 10; //=>fn=10;
fn(); //=>10();  fn is not a function 报错
function fn(){console.log(2);};
fn();
```



### 4.作用域

##### 如何查找上级作用域

- 看当前函数是在哪个作用域下定义的，那么它的上级作用域就是谁，和函数在哪执行没有任何关系

```js
var num = 12;
	function fn(){
		var num = 120;
		return function(){
			console.log(num);
		};
	}
	var f = fn();
	f(); //=>120

	~function () {
		var num = 1200;
		f(); //=>120
	}();
```

![image-20200902160449321](C:\Users\Admin\Desktop\study\js\js笔记\02-jsweek1\img\image-20200902160449321.png)



### 5.内存释放以及作用域销毁

##### 堆内存释放

- 对象数据类型或者函数数据类型在定义的时候首先都会开辟一个堆内存，堆内存有一个引用的地址，如果外面有变量指向这个地址，则这个内部才能被占用了，就不能销毁了
- 要让堆内存销毁，则需把指向它的变量赋值为null

```js
var obj1 = {name:"张三"};
var obj2 = obj1;

//要让堆内存销毁，则需把指向它的变量赋值为null
obj1 = null; //(空对象指针)
obj2 = null;
```



##### 栈内存释放

全局作用域

- 只有当页面关闭的时候才会销毁

私有作用域(函数执行时产生的作用域)

- 一般情况下，函数执行会产生一个私有作用域，当私有作用域中的代码执行完成后，会主动的进行释放或销毁
- 特殊情况，当前作用域中的部分内存被作用域以外的东西占用了，那么当前的这个作用域就不能销毁了
- 函数执行返回了一个引用数据类型的值，并且在函数的外面被一个其他的东西给接收了，这种情况下一般形成的私有作用域都不会销毁
- 在一个私有的作用域中给dom元素的事件绑定方法，一般情况下我们的私有作用域都不销毁

```js
function fn() {
	var num = 100;
	return function () {
	
	}
}
var f = fn(); //fn执行形成的这个私有作用域就不能销毁了

```

```js
<div id="div1">1111</div>

var oDiv = document.getElementById("div1");
~function (){
	oDiv.onclick = function () {
	
	}
}(); //当前自执行函数形成的这个私有的作用域也不销毁
```



- 该情况下fn返回的函数没有被其它的东西占用，但是还需要执行一次，所以暂时不销毁，当返回的值执行完成后，浏览器会在空闲的时候把它销毁了
- 不立即销毁

```js
function fn () {
	var num = 100;
	return function () {
	
	}
}
fn()(); 
```



##### 作用域练习题

to do //课时7

### 6.this

- 在js中主要研究的都是函数中的this，js中的this代表的是当前行为的主体
- js中的context(上下文)代表的是当前行为执行的环境(区域)
- this和上下文没有必然联系
- this和函数在哪定义的和在哪执行的都没有任何的关系
- 如何区分this
  - 函数执行，首先看函数名前面是否有“.”，有的话，"."前面的this就是谁，没有的话this就是window
  - 自执行函数中的this永远是window
  - 给元素的某一个事件绑定方法，当事件触发的时候，执行对应的方法，方法中的this是当前的元素

例如：我在路边摊 吃烧烤 this->我，context->路边摊,，行为->吃路边摊

```js
function fn(){
	console.log(this);
}
var obj = {fn:fn};
fn(); //=>this->window
obj.fn();//=>this->obj

function sum(){ //=>this->window
    fn();//=>this->window
}
sum();

var oo = {
    sum: function (){//=>this->oo
        fn(); //=>this->window
    }
}

oo.sum();
```

```js
<div id="div1">1111</div>

function fn(){
	console.log(this);
}
var obj = {fn:fn};
fn(); //=>this->window
obj.fn();//=>this->obj

document.getElementById("div1").onclick = fn; //=>this->div
document.getElementById("div1").onclick = function () {
    //this->#div1
    fn();//=>this->window
}
```

