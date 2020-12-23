---
title: js基础知识
date: 2020-12-06
categories:
 - js
 - front
tags:
 - js
---


### 1.javascript简介
[https://es6.ruanyifeng.com/](es6入门教程)
js：轻量级的客户端脚本语言（面向对象编程），基于node可以做服务器端程序
#### 1.1js的组成部分

 - ESMAScript(ES)：JS的核心语法
 - DOM：document object model 文档对象模型
提供各种API(属性和方法)，让js可以获取或者操作页面中的HTML元素(DOM)
 - BOM：browser object model 浏览器对象模型，提供各种API，让js可以操作浏览器

#### 1.2ESMAScript
是js的语法规范，js中的变量、数据类型、语法规范、操作语句、设计模式等等都是ES规定的

#### 1.3变量
不是具体的值，只是用来存储具体值的容器或者代名词，因为存储的值可以改变，所以称为变量
在js中创建变量有以下方式

 - var (es3)
 - function (es3) 创建函数(函数名也是变量，只不过存储的值是函数类型的而已)
 - let(es6)
 - const(es6) 创建的是常量
 - import(es6) 基于es6的模块规范导出需要的信息
 - class(es6) 基于es6创建类


语法：
```javascript
var [变量名]=值;
let  [变量名]=值;
const [变量名]=值;
function 函数名() {}
var n=13;  
n=15;  
alert(n+10);=》 //结果是25
const n=100;  
n=200;  
alert(n);=》Uncaught TypeError: Assignment to constant variable 不能给一个常量重新赋值 常量存储的值不能被修改
```
#### 1.4命名规范

 - 严格区分大小写
 - 遵循驼峰命名法
 - 不能使用关键字和保留字：在js中有特殊含义的叫做关键字，未来可能会成为关键字的叫做保留字

#### 1.5数据类型

 - 基本数据类型(值类型)
	+ 数字number
	+ 字符串string
	+ 布尔boolean
	+ null
	+ undefined
 - 引用数据类型
	+ 对象object
		+ 普通对象
		+ 数组对象
		+ 正则对象
		+ 日期对象
	 + 函数function
 - es6中新增加了一个特殊的类型：Symbol，唯一的值

[基本数据类型]
```javascript
var n=13;  数字类型中有一个特殊的值NaN(不是一个有效的数字，但是属于number类型)
var s=' '; //=> ""  '13'  "{}" js中所有用单引号或双引号包裹起来的都是字符串，里面的内容是当前字符串中的字符(一个字符串由0到多个字符组成)
var b = true; //=>布尔类型只有两个值 true false
```
[引用数据类型]
```javascript
var o ={name:'chen',age:9}; //=>普通的对象：由大括号包裹起来，里面包含多组属性名和属性值(包含多组键值对) {}空对象
var ary = [12,23,45,56]; //=>中括号包裹起来，包含0到多项内容，这种事数组对象 []空数组
var reg = /-?(\d|([1-9]\d+))(\.\d+)?/g; //=>由元字符组成一个完整的正则
function fn() {} //=>函数
```
[Symbol]
```javascript
创建出来的是一个唯一的值
var a = Symbol('陈');
var b = Symbol('陈');
a==b =>false 不相等
const a = Symbol('flag'); =>不可更改且唯一
```
#### 1.6js代码运行及输出方式
[如何运行]
 - 代码运行在浏览器中(浏览器内核来渲染解析) 
 -  基于node来运行(node是一个基于v8引擎渲染和解析js的工具)

[如何输出结果]
 - alert：在浏览器中通过弹框的方式输出(浏览器提示框)
 - confirm：和alert用法一致，只不过提示的框中有确定和取消两个按钮，所以它是确认提示框
 - prompt：在confirm的基础上增加输入框
 - console.log：在浏览器控制台输出日志
 - console.dir：比log输出的更加详细一些(尤其是输出对象数据值时)
 - console.table：把一个json数据按照表格的方式输出
 - ...
```javascript
var num = 12;
alert(num); //=>window.alert
var str='chen';
alert(str);
alert(1+1); //=>'2' 基于alert输出的结果都会转换成字符串：把值(如果是表达式)通过toString这个方法转换为字符串，然后再输出
alert(true); //=>'true'
alert([12,23]); //=>'12,23'
alert({name:'xxx'}); =>'[object Object]'
    
var flag = ("你确定要退出吗");  
if(flag){  
//flag:true 点击的是确定按钮  
}else{  
//flag:false 点击的是取消按钮  
}
	
var num = 12;  
//num.log +tab快捷键  
console.log(num);
```
#### 1.7基本数据类型解析
##### 1.number数字类型
 NaN：not a number 但是它是数字类型
 isNaN：检测当前值是否不是有效数字，返回true不是有效数字，返回false是有效数字
```javascript
语法：isNaN([value])
var num=12;
isNaN(num); //=>检测num变量存储的值是否为非有效数字 false
isNaN('13') =>false
isNaN('陈') =>true
isNaN(true) =>false
isNaN(false) =>false
isNaN(null) =>false
isNaN(undefined) =>true
isNaN({xxx:'xxx'}) =>true
isNaN([12,23]) =>true
isNaN([12]) =>false
正则 函数 肯定是true
    
isNaN检测机制
1.首先验证当前要检测的值是否为数字类型，如果不是，浏览器会默认的把值转换为数字类型
把非数字类型的值转换成数字
- 其它基本类型转换为数字：直接使用Number这个方法转换的
[字符串转数字]
	Number('13') ->13
	Number('13.5') ->13.5 可以识别小数
	Number('13px')->NaN 如果当前字符串中出现任意一个非有效数字字符，结果则为NaN
[布尔转数字]
	Number(true)->1
	Number(false)->0
[其它]
	Number(null) ->0
	Number(undefined) ->NaN
	
- 把引用数据类型转换为数字：先把引用类型调取toString转换为字符串，然后再把字符串调取Number转换为数字
[对象]
    ({}).toString() -> "[object Object]" ->NaN
[数组]
    [12,23].toString() -> '12,23' ->NaN
    [12].toString() -> '12' ->12
[正则]
    /^$/.toString() ->"/^$/"->NaN
[特殊的情况]
    Number('')->0
    [].toString()->''
    =>isNaN([]) :false
    
2.当前检测的值已经是数字类型，是有效数字返回false，不是有效数字返回true(数字类型中只有NaN不是有效数字，其余都是有效数字)
```

##### 2.parseInt&parseFloat
>等同于Number,也是为了把其他类型的值转换为数字类型
>
>和Number的区别在于字符串转换分析上
>
>Number：出现任意非有效数字字符，结果就是NaN
>
>praseInt：把一个字符串中的整数部分解析出来，praseFloat是把一个字符串中的小数(浮点数）部分解析出来
```javascript
parseInt('13.5px') //->13
parseFloat('13.5px') //->13.5
parseInt('width:13.5px') //->NaN
parseInt：从字符串最左边字符开始查找有效数字字符，并且转换为数字，但是一旦遇到一个非有效数字字符，查找结束。
```

#####	3.NaN的比较
```javascript
 NaN==NaN :false NaN和谁都不相等，包括自己
```
思考题：有一个变量num，存储的值不知道，我想检测它否为一个有效数字
```javascript
if(Number(num) == NaN){
	alert('num不是有效数字');
}
NaN和谁都不相等，条件永远不成立(即使num不是有效数字，转换的结果是NaN 但是NaN!=NaN)
    
正确方法
if(isNaN(num)){
//=>检测是否是有效数字 只有这一种方案
	alert('num不是有效数字');
}
```
#####	4.布尔类型
>只有两个值：true/false

如何把其他数据类型转换为布尔类型
-	Boolean
-	!
-	!!
```javascript
Boolean(1)=>true
Boolean(0)=>false
Boolean(NaN)=>false
     
!'啦啦啦' =>先把其他数据类型转换为布尔类型，然后取反
!0 =>true
!'' =>true
    
!!null =>取两次反，等价于没取反，也就相当于转换为布尔类型了

```
规律：`在JS中只有“0、NaN、空字符串、null、undefined”这五个值转换为boolean类型为false，其余转换都为true`
    
#####	5.null && undefined
>都代表空
>null：空对象指针
>undefined：未定义

null：一般都是人为手动的先赋值为null，后面的程序会再次给它赋值
```javascript
var num =null; //->null是手动赋值的，后面会对num变量的值进行修改
num=12;
```
undefined：一般都不是人为设置的，大部分都是浏览器自主为空(后面可以赋值也可以不赋值)
```javascript
var num; //->此时变量的值，浏览器给分配的就是undefined
后面可以赋值 也可以不赋值
```
#### 1.8引用数据类型
##### 1.Object对象数据类型
>普通对象
- 由大括号包裹起来的
- 由0到多组属性名和属性值(键值对)组成

属性是用来描述当前对象特征的，属性名是当前具备这个特征，属性值是对这个特征的描述(属性名称为键[key]，属性值称为值[value])，一组属性名和属性值称为一组键值对
```javascript
 var obj = {
	 name:'陈',
	 age:9
};
对象的操作：对键值对的增删改查
[获取对象] 对象.属性名 / 对象[属性]
obj.name
obj['name'] 一般来说对象的属性名都是字符串格式(属性值不固定，任何格式都可以)
    
[增加/修改对象]
js对象中属性名是不允许重复的，是唯一的
obj.name='陈'; =>原有对象中存在name属性，此处属于修改属性值
obj.sex='男'; =>原有对象中不存在sex属性，此处相当于给当前对象增加一个属性sex
obj['age']=28;
    
[删除对象]
彻底删除：对象中不存在这个属性了
delete obj['age']; 
假删除：并没有移除这个属性，只是让当前属性的值为空
obj.sex=null;

----
在获取属性值的时候，如果当前对象有这个属性名，则可以正常获取到值（哪怕是null），但是如果没有这个属性名，则获取的结果是undefined
obj['friends'] =>undefined
```
##### 2.关于对象的细节知识
```javascript
var obj={
	name: '陈',
	age: 9
}
obj.name =>陈 获取name属性值
obj['name'] =>陈 获取name属性值
obj[name] =>undefined 此处的name代表的是一个变量，它代表的是本身存储的值，即obj['陈'] =>没有这个属性 属性值就是undefined
```

>'name'与name的区别
>'name'是一个字符串值，他代表本身
>name是一个变量，它代表的是本身存储的这个值

##### 3.数组也是对象
一个对象中的属性名不仅仅是字符串格式的，还有可能是数字格式
```javascript
var obj = {
	name: '陈',
	0: 100
};
obj[0] =>100
obj['0'] =>100
obj.0 => Uncaught SyntaxError: Unexpected number
```
 当我们存储的属性名不是字符串也不是数字的时候，浏览器会把这个值转换为字符串(toString)，然后在进行存储
```javascript
obj[{}]=600; =>先把({}).toString()后的结果作为对象的属性名存储起来，obj['[object Object]']=600
obj[{xxx:'xxx'}] =>600
```
   数组对象（对象由键值对组成）
```javascript
var ary = [12,23]; =>12 23都是属性值，观察结果属性名是数字(即为下标索引)
ary[0]
ary['0']
ary.0 = >报错
ary['age']=10 =>age:10
```
`数组与对象的关系`
       
#### 1.9js的运行机制(堆栈内存和不同数据类型操作方式)
```javascript
var a=12;
var b=a;
b=13;
console.log(a); //a=>12
    
var obj1={n:100};
var obj2=obj1;
obj2.n = 200;
console.log(obj1.n); //=>200
```
   >理解js的运行机制
   >1.当浏览器(内核、引擎)渲染和解析js的时候，会提供一个供js代码运行的环境，我们把这个环境称之为"全局作用域(global /window scope)"
   >2.代码自上而下执行(之前还有一个变量提升阶段)
   >=>基本数据类型的值会存储在当前作用域下
```javascript
解读 var a = 12;
首先开辟一个空间存储12
在当前作用域中声明一个变量a(var a)
让声明的变量和存储的12进行关联(把存储的12赋值给a =>赋值操作叫做定义)
        
解读var b=a
基本数据类型（值类型）：是按照值来操作的，把原有的值复制一份。重新把12复制一份放到新的存储空间，和原来的值没有关系，var b = 12 此时a/b没有关系
      
b=13
首先开辟一个空间存储13，b和13关联
```
>引用类型的值不能直接存储到当前作用域下(因为可能存储的内容过于复杂)，我们需要先开辟一个新的空间(理解为仓库)，把内容存储到这个空间中
```javascript
var obj1 = {n:100};
1.首先开辟一个新的内存空间，吧对象中的键值对依次存储起来(为了后面可以找到这个空间，此空间有一个16进制的地址)
2.声明一个变量
3.让变量和空间地址关联在一起(把空间地址赋值给变量)
    
var obj2=obj1;
引用类型不是按照值来操作，它操作的是空间的引用地址：把原来空间的地址赋值给新的变量，但是原来的空间没有被克隆，还是一个空间，这样就会出现多个变量关联的是相同的空间，相互之间就会存在影响
obj2.n = 200; 
```


![image1_global_action_scope](https://i.loli.net/2020/09/21/1HB9WVXUIQfEFq7.png)



>作用域空间叫做栈内存
>=>本身就是一个供js代码执行的环境，所有基本类型值都会直接的在栈内存中开辟一个位置进行存储
>引用类型新开空间，叫做堆内存
>=>用来存储引用类型中的信息值，对象存储的是键值对，函数存储的是代码字符串

#### 1.10堆栈内存习题
```javascript
var obj={
		n:10,
		m:obj.n*10 //=>Uncaught TypeError: Cannot read property 'n' of undefined
	}; 
	console.log(obj.m);
	1.开辟一个全局作用域(栈内存)
	2.代码自上而下执行
	3.开辟一个新的堆内存(AAAFFF111)，把键值对存储到堆内存中，
	n:10
	m:obj.n*10 =>obj.n
	此时堆内存信息还没有存储完成，空间地址还没有给obj,此时的obj是undefined，obj.n<=>undefined.n 基本类型没有属性这个概念
	
	var obj={
		n:10
	};
	obj.m=obj.n*10;
	console.log(obj.m);//=>obj.m=100
	
	数组对象
	var ary1=[3,4];
	var ary2=ary1;
	ary2[0]=1;
	ary2=[4,5];
	ary2[1]=2;
	ary1[1]=0;
	console.log(ary1,ary2); //=>[1,0] [4,2]
```
![](C:%5CUsers%5CAdmin%5CDesktop%5Cstudy%5Cjs%5Cjs%E7%AC%94%E8%AE%B0%5Cjs_md_files%5Cimage_20200521171308.png?v=1&type=image&token=V1:_dWKS7PZJ-AybuSF06pdwu-5ScgrFbS1pEf3MieG1KE)

#### 1.11if、else判断
1. if/else if/else
```javascript
    var num = 12;
    	if(num>10){
    		num++;
    	}else if(num>0 && num <=1=){
    		num--;
    	}else{
    		num+=2;
    	}
    	
    	只要有一个条件成立 后面不管条件成不成立，都不在判断执行了
    	var num = 10;
		if(num > 5){
			num+=2;
		}else if(num > 8){
			num+=3;
		}else{
			num+=4;
		}
		console.log(num) 
		if(条件){
		//不管你在条件中写什么，最后总要把其计算出true/false来判断条件是否成立(把其他类型的值转换为boolean类型，只有0/NaN/''/null/undefined是false，其余都是true)
		}

		if('3px'+3){
		//在js中，+ - * / %都是数学运算，除+以外，其余运算符在运算的时候，如果遇到了非数字类型的值，首先会转换为数字类型(Number)，然后再进行运算
		//+在js中除了数字相加，还有字符串拼接的作用(如果运算中遇到了字符串，则为字符串拼接，而不是数学运算)
		'3px'+3 = >'3px3'
		}
		
		经典题型
		var num =parseInt('width:35.5px'); //=>num =NaN
	if(num==35.5){
		alert(0);
	}else if(num==35){
		alert(1)
	}else if(num==NaN){
		alert(2)
	}else if(typeof num=='number'){
		//先算typeof num =='number' 
		//typeof NaN="number"
		alert(3)
	}else{
		alert(4)
	}
	//=>所以输出结果为‘3’
```


#### typeof

typeof：在js中用来检测数据类型的方式之一，除了它以外，还有
 - instanceof
 - constructor
 - Object.prototype.toString.call()

```js
语法:typeof [value] =>检测value的数据类型

返回值：使用typeof检测出来的结果是一个字符串，字符串中包含着对应的数据类型，例如："number"/"string"/"boolen"/"undefined"/"object"/"function"

typeof null =>"object" 因为null代表空对象指针(没有指向任何的内存空间)
typeof检测数组/正则/对象，最后返回的都是"object"，也就是基于这种方式无法细分对象
```

```javascript
经典题型
console.log(typeof []); =>"object"
console.log(typeof typeof []);=>"string"

```
#### 1.12三元运算符
语法：条件?成立做的事情:不成立做的事情;
```javascript
var num = 12;
    if(num>10){
	    num++;
    }else{
	    num--;
    }
    //=>改写成三元运算符 num>10 ? num++ : num--;
    
    特殊情况
    如果三元运算符中的某一部分不需要做任何的处理，我们用null/undefined/void 0...占位即可
    var num = 12;
    num>10?num++:null/undefined/void 0;
    
    //=>如果需要执行多项操作，我们把其用小括号包裹起来，每条操作语句用逗号分隔
    num=11;
    num>10?(num++,num*10):null;
    
    思考题
    var num =12;
    if(num>0){
    if(num<10){
	    num++;
	    }else{
		num--;  
		}
    }else{
    if(num==0){
	    num++;
	    num=num/10;
	    }
    }
    改写成三元运算符
```
#### 1.13swith case
js中的一种判断方式
```javascript
var num = 12;
    if(num==10){
	    num++;
    }else if(num==5){
	    num--;
    }else{
	    
    }
	//=>switch case 应用于变量(或者表达式等)在不同值情况下的不同操作，每一种case结束后都要加break(结束判断)
    改成switch case
    switch(num){
	    case 10:
		    num++;
		    break;
		case 5:
			num--;
			break;
		default:
			num=0;
    }
    
	switch case每一种case情况的比较都是基于"==="绝对相等来完成的
	‘10’==10 =>true 相等比较，如果等号左右两边的类型不一样，首先会转换为一样的数据类型，然后再进行比较	，即把字符串‘10’转换为数字了，然后再比较的
	‘10’===10绝对比较，如果两边的数据类型不一样，则直接不相等，它要求类型和值都完全一样才会相等(真实项目中为了保证代码的严谨性，我们应该更多使用绝对比较)
	//=>不加break时，后面的条件不管是否成立，都会被执行，利用此机制，我们可以完成一些特殊的处理，例如：如果num=10和=5都要做同一件事情，可以写在一起，不用加break即可
	var num = 10;
	switch(num){
	    case 10:
		case 5:
			num--;
			break;
		default:
			num=0;
    }
```
#### 1.14for循环
>循环的作用就是按照一定的规律，重复去做某件事情，此时我们就需要使用循环来处理了
```javascript
    var ary=[12,23,34];
    输出数组中的每一项内容
    console.log(ary[0],ary[1],ary[2]);
    
    for循环的语法组成
    1.定义初始值 var i=0
    2.设定循环成立的条件（条件成立循环继续，不成立循环结束） i<ary.length
    3.条件成立会执行循环体中的内容
    4.执行步长累加的操作 i++
    
    for(var i=0; i<ary.length; i++){
    //第一次循环：i=0 i<3 ... i=1 =>ary[0]
    //第二次循环：i=1 i<3 ... i=2 =>ary[1]
    //第三次循环：i=2 i<3 ... i=3 =>ary[2]
    //第四次循环：i=3 i<3  循环结束(本次未循环)
	    var obj = ary[i];
    }
    
    //=>输出每一项，倒着输出 34 23 12
    //=>ary.length-1 当前数组中最后一项的属性名(索引)
    for(var i = ary.length-1;i>=0;i--){
	    console.log(ary[i]);
    }
    
    //输出数组中的内容：输出奇数项的内容
    var ary=[12,23,34];

	 for(var i=0; i<ary.length;i++){
	    if(i%2===0){
	    	console.log(ary[i]);
	    }
    }
    
    for(var i=0; i<ary.length;i+=2){
  			console.log(ary[i]);
  		}
```
在for循环的循环体中，经常出现两个常用的关键字
 - continue：继续
 - break：中断或者结束
```javascript
for(var i=0; i<10;i++) {
	if(i<5){
		i++;
		continue; //=>结束本轮循环(循环体中continue后面代码将不再执行，继续执行下一轮循环)
	}
	if(i>7){
		i+=2;
		break; //=>强制结束整个循环，不做任何的处理
	}
	i+=1;
	}   ==》结果为10

	for(var i= 1; i<=10; i+=2){
	if(i<=5){
		i++;
		continue;
	}else{
		i-=2;
		break;
	}
	i--;
	console.log(i);
	}
	console.log(i);   //=>结果为5
```
#### 1.15基于css实现隔行变色
```html
<!DOCTYPE html>
	<html>
	<head>
		<title></title>
		<style type="text/css">
			*{
				margin: 0;
				padding: 0;
			}
			ul,ol{
				list-style: none;
			}
			.box{
				width:300px;
				margin:20px auto;
			}
			.box li{
				padding: 0 5px;
				line-height: 35px;
				border-bottom: 1px dashed #AAA;

				/*超出一行的内容自动裁剪，以省略号代替*/
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;

			}

			/*==css3
				nth-child(n)：当前容器所有子元素中的第n个
				.box li:nth-child(1):box容器所有子元素中的第一个并且标签名是li的

				nth-of-type(n)：先给当前容器按照某一个标签名进行分组，获取分组中的第n个
				.box li:nth-of-type(1)：先获取box中所有的Li,再获取li中的第一个
			*/

			.box li:nth-of-type(even){ /*even偶数 odd奇数*/
				background: lightcyan;
			}

			.box li:hover{/*鼠标滑过的样式 鼠标离开回归原有样式*/
				background: lightcoral;
			}

			/*.box li:nth-of-type(3n+1){
				color: red;
			}
			.box li:nth-of-type(3n+2){
				color: green;
			}
			.box li:nth-of-type(3n){
				color: blue;
			}*/

		</style>
	</head>
	<body>
	<ul class="box">
		<li>1111</li>
		<li>2222</li>
		<li>3333</li>
		<li>4444</li>
		<li>5555</li>
		<li>6666</li>
	</ul>
	</body>
	</html>
```
#### 1.16基于js实现隔行变色
##### 获取页面中的DOM元素
`document.getElementById`
>在整个文档中，通过元素的id属性值，获取到整个元素对象
>getElementById是获取元素的方法，而document限定了获取元素的范围，我们把这个范围称之为“上下文[context]”
```javascript
1.通过getElementById获取的元素是一个对象数据类型的值（里面包含很多内置的属性）
    var obox = document.getElementById('box');
    typeof obox =>"object"
2.分析包含的属性
    console.dir(obox);
    className: "box" =》存储的是一个字符串，代表当前元素的样式类名
    id: "box" =》存储的是当前元素的id值（字符串）
    innerHTML：存储当前元素中所有的内容（包含html标签）
    innerText：存储当前元素中所有的文本内容（没有元素标签）
    onclick：元素的一个事件属性，基于这个属性，可以给当前元素绑定点击事件
    onmouseover：鼠标滑过事件
    onmouseout：鼠标离开事件
    style：存储当前元素所有行内样式值（获取和操作的都只能是写在标签上的行内样式，写在样式表中的样式，无法基于这个属性获取到）
```
![](js_md_files/image_20200527151612.png?v=1&type=image&token=V1:Z86L1UvUXyhrRkgUrTsuJ6jRKUk9YEPEPwKtF5XuyQI)

```javascript
<script type="text/javascript">
	//1.获取box中所有的li(需要先获取box)
	var obox = document.getElementById('box');
	//2.想要修改box的样式
	//=>通过style修改行内样式
	//obox.style.backgroundColor='pink';

	//思考如何获取当前元素的所有样式

	//=>基于class-name属性修改box的样式类，从而改变样式
	//obox.className = 'box bgColor';
	obox['className'] += ' bgColor';
	</script>
	
	<style>
		.bgColor{
			background-color: pink;
		}
	</style>
```

 `[context].getElementsByTagName`
 >在指定的上下文中，通过元素的标签名获取一组元素集合  
 >上下文由我们自己来指定
```javascript
    在obox中获取所有li
    var boxList = obox.getElementsByTagName('li');
    1. 获取的结果是一个元素集合 HTMLCollection，它也是对象数据类型，结构和数组非常相似(数字作为索引，length代表长度)，但是不是数组，我们把它叫做“类数组”
    boxList[0]	获取当前集合中的第一个li（通过索引获取到具体的某一个li即可）
    boxList.length	获取集合中Li的数量
    2. 集合中的每一项存储的值又是一个元素对象（对象数据类型，包含很多的内置属性，例如：id/className...）
    boxList[1].style.color='red' 修改集合中第二个li的文字颜色
```
![](js_md_files/image_20200527160214.png?v=1&type=image&token=V1:nc_2Jbtr1dXRuX3OWn9YqsnuxnZISQtHVJv1Z1N91U4)

```javascript
<script type="text/javascript">
    for(var i=0; i<boxList.length;i++){
	 	if(i%2!==0){
	 		//boxList[i].style.backgroundColor = 'pink';
	 		//boxList[i].className += ' bgColor';
	 	}
	 }

	 for (var i = 1; i < boxList.length; i+=2) {
	 		boxList[i].className += ' bgColor';
	 }
    </script>
    思考题：实现隔三行变色
```
#### 1.17函数数据类型的运行机制
>在js中，函数就是一个方法（一个功能体），基于函数一般都是为了实现某个功能
```javascript
   var total=10;
    total+=10;
    total=total/2;
    total=total.toFixed(2); //=>保留小数点后两位
```
>函数诞生的目的就是为了实现封装，吧实现一个功能的代码封装到一个函数中，低耦合高内聚(减少页面中的冗余代码，提高代码的重复使用率)
```javascript
function fn(){
		var total=10;
	    total+=10;
	    total=total/2;
	    total=total.toFixed(2);
    }
    fn();
    
    ES3标准中
    语法:
    function 函数名([参数]){
	    函数体：实现功能的js代码
    }
    =====
    ES6标准中创建箭头函数
    语法:
    let 函数名(变量名)=([参数])=>{
	    函数体
    }
    
    let fn=()=>{
	    let total=10;
	    ...
    }
```
函数作为引用数据类型中的一种，它也是按照引用地址来操作的
```javascript
function fn(){
		var total=10;
	    total+=10;
	    total=total.toFixed(2);
	    console.log(total)
    }
    1.函数也是引用类型，首先会开辟一个新的堆内存，把函数体中的代码当做“字符串”存储到内存中(对象向内存中存储的是键值对)
    2.把开辟的堆内存地址赋值给函数名(变量名)
    
    [函数执行]
    把之前存储到堆内存中的代码字符串变为真正的js代码自上而下执行，从而实现应有的功能
    1.函数执行，首先会形成一个私有的作用域（一个供代码执行的环境，也是一个栈内存）
    2.把之前在堆内存中存储的字符串复制一份过来，变为真正的js代码，在新开辟的作用域中自上而下执行
```
![](C:\Users\Admin\Desktop\study\js\js笔记\js_md_files\image_20200601160456.png?v=1&type=image&token=V1:GfMJ-o9sRxXlrgqfzaD4icS-NiE5bEYk42NI_nUhX3M)

>输出fn代表当前函数本身，fn()执行函数

![](js_md_files/image_20200601155143.png?v=1&type=image&token=V1:_ztOiW229AoPfcwKhQeImnETeMxwqLODMOPmAjBpExw)

#### 1.18函数中的形参与实参
>参数是函数的入口：当我们在函数中封装一个功能，需要执行函数的时候用户传递进来才可以，此时我们就基于参数的机制，提供出入口即可
```javascript
//=>此处的参数是形参：入口，形参(n/m)是变量
     function sum(n,m){
	    var total = =0;
	    total = n+m;
	    console.log(total);
    }
    //=>此处函数执行传递的值是实参，实参是具体的数据值
    sum(2,6); //=>n=2,m=6
    sum(10); //=>n=10,m=undefined
    sum(); //=>m和n都是undefined
    sum(10,20,30); //=>n=10,m=20, 30没有形参变量接收
```
#### 1.19选项卡案例
>  div.tabox#tabbox>(ul>li*3)+(div*3) [tab] webstorm快捷键
```javascript
<!DOCTYPE html> 
	<html>
	<head>
		<title></title>
		<link rel="stylesheet" type="text/css" href="reset.min.css">
		<style type="text/css">
			.tabbox{
				width: 500px;
				margin: 20px auto;
			}

			.tabbox ul{
				position: relative;
				top: 1px;
				/*相对于自己之前的位置向下移动1px，使边框重合*/
			}

			.tabbox ul li{
				border: 1px solid #AAA;
				display: inline-block;
				padding: 0 10px;
				margin-right: 10px;
				line-height: 33px;
				cursor: pointer;
			}

			.tabbox ul li.active{
				color: green;
				font-weight: bold;
				border-bottom-color: #FFF; 
				/*当前li的边框覆盖着div的边框，我们让li的下边框是背景颜色白色，这样看上去就想没有边框*/
			}
			.tabbox div{
				display: none;
				border: 1px solid #AAA;
				line-height: 175px;

			}
			.tabbox div.active{
				display: block;
			}
		</style>
	</head>
	<body>
	<div class="tabbox" id="tabbox">
		<ul>
			<li class="active">新闻</li>
			<li>电影</li>
			<li>音乐</li>
		</ul>
		<div class="active">全国人大会议</div>
		<div>解忧杂货铺</div>
		<div>未闻花名</div>
	</div>
	</body>
	<script type="text/javascript">
		//思路
		//1.给所有的li点击绑定事件 当点击任何一个lI的时候，都做第二步操作
		//2.可以先让所有的li div class都为空 再让点击的li和当前的div有active样式即可

		var tabbox = document.getElementById("tabbox");
		var tagList = tabbox.getElementsByTagName("li");
		var divList = tabbox.getElementsByTagName("div");

		//=>不行的代码
		// for (var i = 0; i < tagList.length; i++) {
		// 	// tagList[i] <=>每一轮循环当前要操作的那个li对象
		// 	tagList[i].onclick= function (){
		// 		//=>事件绑定：给当前元素的某一个事件绑定一个方法，绑定的时候方法没有执行(属于创建一个方法)，当在页面中手动触发点击事件的时候绑定的方法才会执行
		// 		alert(i);
		// 		changeTab(i); //=>需要吧当前点击的这个li的索引传递进来
		// 	}
		// }

		console.log(tagList);
		//=>自定义属性方式
		for (var i = 0; i < tagList.length; i++) {
			//每一轮循环的时候，给每一个li设置一个自定义属性myIndex，存储的值是各自的索引
			tagList[i]['myIndex'] = i;
			tagList[i].onclick= function (){
				//this代表的是当前点击的这个li
				changeTab(this.myIndex);

			}
		}	



		//=>封装一个方法来完成页卡切换
		function changeTab(n){
			//=>n:形参变量，当执行这个方法的时候，会把当前点击的这个li的索引传递过来
			for (var i = 0; i < tagList.length; i++) {
				//1.所有都没有选中样式
				tagList[i].className = '';
				divList[i].className = '';
			}
			//2.当前点击的有选中样式
			tagList[n].className = 'active';
			divList[n].className = 'active';
		}
	</script>
	</html>

```
`另一种方法吧循环中的var i=0;改为let i =0`
`或者这样写`
```javascript
for (var i = 0; i < tagList.length; i++) {
	    ~function(i){
		    tabList[i].onclick = function(){
			    changeTab(i);
		    }
	    }(i);
    }
    
    for (var i = 0; i < tagList.length; i++) {
		    tabList[i].onclick = function(i){
		    return function (){
			    changeTab(i);
			    }
		    }(i);
    }
```
1.实现选项卡思路
2.隔行变色实现隔三行变色，并且基于js实现出鼠标滑过高亮显示
    



### 2.js中数据类型的转换

JS中的数据类型分为
【基本数据类型】
    数字 number
    字符串 string
    布尔 boolean
    空 null
    未定义 undefined
【引用数据类型】
    对象 object
       普通对象
       数组对象 (Array)
       正则对象 (RegExp)
       日期对象 (Date)
       数学函数 (Math)
       ...
    函数 function

真实项目中，根据需求，我们往往需要把数据类型之间进行转换

#### 2.1把其它数据类型转换为number类型

`1.发生的情况`

- isNaN检测的时候：当检测的值不是数字类型,浏览器会自己调用Number方法把它先转换为数字，然后再检测是否为非有效数字

```javascript
isNaN('3') =>false
  Number('3')->3
  isNaN(3)->false

isNaN('3px') =>true
  Number('3px')->NaN
  isNaN(NaN)->true
```

- 基于parseInt/parseFloat/Number去手动转换为数字类型
- 数学运算：+ - * / %，但是“+”不仅仅是数学运算，还可能是字符串拼接

```javascript
'3'-1 =>2
  Number('3')->3
  3-1->2

'3px'-1 =>NaN

'3px'+1 =>'3px1' 字符串拼接

var i='3';
i=i+1; =>'31'
i+=1; =>'31'
i++; =>4  i++就是单纯的数学运算，已经摒弃掉字符串拼接的规则
```

- 在基于“==”比较的时候，有时候也会把其它值转换为数字类型
- ...

`2.转换规律`

```javascript
//=>转换的方法：Number（浏览器自行转换都是基于这个方法完成的）

【把字符串转换为数字】
只要遇到一个非有效数字字符，结果就是NaN
'' ->0
' ' ->0 空格(Space)
'\n' ->0 换行符(Enter)
'\t' ->0 制表符(Tab)


【把布尔转换为数字】
true ->1
false ->0

【把没有转换为数字】
null ->0
undefined ->NaN

【把引用类型值转换为数字】
首先都先转换为字符串（toString），然后再转换为数字（Number）
```

#### 2.2把其它类型值转换为字符串

`1.发生的情况`

- 基于alert/confirm/prompt/document.write等方法输出内容的时候，会把输出的值转换为字符串，然后再输出

```javascript
alert(1) =>'1'
```

- 基于“+”进行字符串拼接的时候
- 把引用类型值转换为数字的时候，首先会转换为字符串，然后再转换为数字
- 给对象设置属性名，如果不是字符串，首先转换为字符串，然后再当做属性存储到对象中（对象的属性只能是数字或者字符串）
- 手动调用toString/toFixed/join/String等方法的时候，也是为了转换为字符串

```javascript
var n=Math.PI;//=>获取圆周率：
n.toFixed(2) =>'3.14'

var ary=[12,23,34];
ary.join('+') =>'12+23+34'
```

- ...

`2.转换规律`

```javascript
//=>调用的方法：toString

【除了对象，都是你理解的转换结果】
1 ->'1'
NaN ->'NaN'
null ->'null'
[] ->''
[13] ->'13'
[12,23] ->'12,23'
...

【对象】
{name:'xxx'} ->'[object Object]'
{} ->'[object Object]'
不管是啥样的普通对象，最后结果都一样
```

#### 2.3把其它值转换为布尔类型

`1.发生的情况`

- 基于!/!!/Boolean等方法转换
- 条件判断中的条件最后都会转换为布尔类型
- ...

```javascript
if(n){
  //=>把n的值转换为布尔验证条件真假
}

if('3px'+3){
  //=>先计算表达式的结果'3px3'，把结果转换为布尔true，条件成立
}
```

`2.转换的规律`
只有“0/NaN/''/null/undefined”五个值转换为布尔的false,其余都是转换为true


#### 2.5特殊情况：数学运算和字符串拼接 “+”

```javascript
//=>当表达式中出现字符串，就是字符串拼接，否则就是数学运算

1+true =>2 数学运算
'1'+true =>'1true' 字符串拼接

[12]+10 =>'1210' 虽然现在没看见字符串，但是引用类型转换为数字，首先会转换为字符串，所以变为了字符串拼接
({})+10 =>"[object Object]10"
[]+10 =>"10"

{}+10 =>10 这个和以上说的没有半毛钱关系，因为它根本就不是数学运算，也不是字符串拼接，它是两部分代码
  {} 代表一个代码块（块级作用域）
  +10 才是我们的操作
  严格写法：{}; +10;
```

思考题：

```javascript
12+true+false+null+undefined+[]+'珠峰'+null+undefined+[]+true
=>'NaN珠峰nullundefinedtrue'

12+true ->13
13+false ->13
13+null ->13
13+undefined ->NaN
NaN+[] ->'NaN'
'NaN'+'珠峰' ->'NaN珠峰'
...
'NaN珠峰trueundefined'
'NaN珠峰trueundefined'+[] ->'NaN珠峰trueundefined'
...
=>'NaN珠峰trueundefinedtrue'
```

#### 2.6特殊情况：“==”在进行比较的时候，如果左右两边的数据类型不一样，则先转换为相同的类型，再进行比较

对象==对象：不一定相等，因为对象操作的是引用地址，地址不相同则不相等

```javascript
{name:'xxx'}=={name:'xxx'} =>false
[]==[] =>false

var obj1={};
var obj2=obj1;
obj1==obj2 =>true
```

==========================>上面是重点强调的

对象==数字：把对象转换为数字
对象==布尔：把对象转换为数字，把布尔也转换为数字
对象==字符串：把对象转换为数字，把字符串也转换为数字
字符串==数字：字符串转换为数字
字符串==布尔：都转换为数字
布尔==数字：把布尔转换为数字
===========================>不同情况的比较，都是把其它值转换为数字，然后再进行比较的

null==undefined：true
null===undefined：false
null&&undefined和其它值都不相等

NaN==NaN：false
NaN和谁都不相等包括自己
===========================>以上需要特殊记忆

```javascript
1==true =>true
1==false =>false
2==true =>false  规律不要混淆，这里是把true变为数字1


[]==true：false  都转换为数字 0==1
![]==true：false

[]==false：true  都转换为数字 0==0
![]==false：true  先算![]，把数组转换为布尔取反=>false  =>false==false
```





### 3.js数组常用方法剖析

数组也是对象数据类型的，也是由键值对组成的

```javascript
var ary = [12,23,34];
/*
 * 结构:
 *  0:12
 *  1:23
 *  2:34
 *  length:3 
 */
1. 以数组作为索引（属性名），索引从零开始递增
2. 有一个LENGTH属性存储的是数组长度

ary[0] 获取第一项
ary[ary.length-1] 获取最后一项
```

数组中每一项的值可以是任何数据类型的

```javascript
//=>多维数组
var ary = [
	{
	  name:'xxx',
	  age:20
	},
	{
	  name:'xxx',
	  age:20
	}
];
```

#### 3.1数组中的常用方法

> 按照四个维度记忆：
>
> - 方法的作用
> - 方法的参数
> - 方法的返回值
> - 原有数组是否改变

**`push`**
作用：向数组“末尾”追加新的内容
参数：追加的内容（可以是一个，也可是多个）
返回值：新增后数组的长度
原有数组改变

```javascript
var ary = [12,23,34];
ary.push(100); //=>4  ary:[12,23,34,100]
ary.push(100,{name:'xxx'}); //=>6  ary:[12,23,34,100,100,{...}]
```

**`pop`**
作用：删除数组最后一项
参数：无
返回：被删除的那一项内容
原有数组改变
![Alt text](C:\Users\Admin\Desktop\study\js\js笔记\js_md_files/1522807069512.png)

**`shift`**
作用：删除数组中的第一项
参数：无
返回：被删除的那一项内容
原有数组改变
![Alt text](C:\Users\Admin\Desktop\study\js\js笔记\js_md_files/1522807360042.png)

**`unshift`**
作用：向数组开始位置追加新内容
参数：要新增的内容
返回：新增后数组的长度
原有数组改变
![Alt text](C:\Users\Admin\Desktop\study\js\js笔记\js_md_files/1522807538601.png)

**`splice`**
基于 SPLICE可以对数组进行很多的操作：删除指定位置的内容、向数组指定位置增加内容、还可以修改指定位置的信息

`删除：ary.splice(n,m)`
从索引n开始，删除m个内容，把删除的部分以一个新数组返回，原有数组改变
![Alt text](C:\Users\Admin\Desktop\study\js\js笔记\js_md_files/1522808089473.png)

`新增：ary.splice(n,0,x,...)`
从索引n开始删除零项（没删除），把X或者更多需要插入的内容存放到数组中索引N的“前面”
![Alt text](C:\Users\Admin\Desktop\study\js\js笔记\js_md_files/1522808358011.png)

`修改：ary.splice(n,m,x,...)`
修改的原理就是把原有内容删除掉，然后用新的内容替换这部分信息即可
![Alt text](C:\Users\Admin\Desktop\study\js\js笔记\js_md_files/1522808496818.png)

> 需求扩展：
>
> 1. 删除数组最后一项，你有几种办法?
> 2. 向数组末尾追加新内容，你有几种办法?

```javascript
//=>删除最后一项
ary.pop()
ary.splice(ary.length-1)
ary.length--

//=>向数组末尾追加新内容
ary.push(100)
ary.splice(ary.length,0,100)
ary[ary.length]=100
```

![Alt text](C:\Users\Admin\Desktop\study\js\js笔记\js_md_files/1522808841799.png)
![Alt text](C:\Users\Admin\Desktop\study\js\js笔记\js_md_files/1522808913543.png)

![Alt text](C:\Users\Admin\Desktop\study\js\js笔记\js_md_files/1522809139917.png)

**`slice`**
作用：在一个数组中，按照条件查找出其中的部分内容
参数：两个参数（n/m），从索引n开始，找到索引m处，但是不包含m
返回：以一个新数组存储查找的内容
原有数组不会变
![Alt text](C:\Users\Admin\Desktop\study\js\js笔记\js_md_files/1522810059943.png)

**`concat`**
作用：实现多个数组(或者值)的拼接
参数：数组或者值
返回：拼接后的新数组
原有数组不变
![Alt text](C:\Users\Admin\Desktop\study\js\js笔记\js_md_files/1522810449422.png)

**`toString`**
作用：把数组转换为字符串
参数：无
返回：数组中的每一项用逗号分隔的字符串
原有数组不变 

**`join`**
作用：和toString类似，也是把数组转换为字符串，但是我们可以设置变为字符串后，每一项之间的连接符
参数：指定的链接符
返回：字符串
原有数组不变 
![Alt text](C:\Users\Admin\Desktop\study\js\js笔记\js_md_files/1522810872841.png)

**`reverse`**
作用：把数组倒过来排列
参数：无
返回：排列后的新数组
原有数组改变
![Alt text](C:\Users\Admin\Desktop\study\js\js笔记\js_md_files/1522813231158.png)

**`sort`**
作用：给数组排序
参数：无/函数
返回：排序后的新数组
原有数组改变

```javascript
//=>sort在不传递参数的情况下，只能处理10以内数字排序
var ary=[1,3,2,4,5,6,7,9,8];
ary.sort(); =>[1,2,3,4,5,6,7,8,9]

var ary=[18,1,23,27,2,35,3,56];
ary.sort(); =>[1, 18, 2, 23, 27, 3, 35, 56] 没有按照我们想象中的排序

//=>真实项目中，基于sort排序，我们都需要传递参数
var ary=[18,1,23,27,2,35,3,56];
ary.sort(function (a,b){
	return a-b;//=>升序  return b-a; 降序
});
```

**`indexOf / lastIndexOf`**
这两个方法不兼容IE低版本浏览器(IE6~8)
作用：检测当前值在数组中第一次或者最后一次出现位置的索引
参数：要检测的值
返回：索引
原有数组不变
![Alt text](C:\Users\Admin\Desktop\study\js\js笔记\js_md_files/1522814181449.png)

```javascript
//=>验证数组中是否包含某一项
if(ary.indexOf(100)>-1){
   //=>ARY中包含100这一项
}
```

除了以上方法，数组中还包含很多常用的方法（Array.prototype）

- every
- filter
- find
- forEach
- includes
- keys
- map
- reduce / reduceRight
- some
- ...



### 4.JS中关于字符串的一些细节知识

> 在JS中所有用单引号或者双引号包起来的都是字符串，每一个字符串是由零到多个字符组成

```javascript
var str = 'zhufengpeixun';
str.length ->字符串长度
str[0] ->'z'
str[str.length-1] ->'n'
str[100] ->undefined

//=>字符串中的每一个字符都有一个自己对应位置的索引，也有类似于数组一样的length代表自己的长度

//=>循环遍历字符串，输出每一项字符
for(var i=0;i<str.length;i++){
   cosole.log(str[i]);
}
```

#### 4.1关于字符串中常用的方法

字符串是基本数据类型，字符串的每一次操作都是值直接的进行操作，不像数组一样是基于空间地址来操作的，所以不存在原有字符串是否改变这一说，肯定都是不变的

**`charAt/charCodeAt`**
作用：charAt根据索引获取指定位置的字符，charCodeAt不仅仅获取字符，它获取的是字符对应的Unicode编码值(ASC II码值)
参数：索引
返回：字符或者对应的编码
![Alt text](C:\Users\Admin\Desktop\study\js\js笔记\js_md_files/1522827478537.png)
![Alt text](C:\Users\Admin\Desktop\study\js\js笔记\js_md_files/1522827914683.png)

**`indexOf/lastIndexOf`**
基于这两个方法，可以获取字符在字符串中第一次或者最后一次出现位置的索引，有这个字符，返回大于等于零的索引，不包含这个字符，返回的结果是-1，所以可以基于这两个方法，验证当前字符串中是否包含某个字符

```javascript
var str='zhufengpeixun';
if(str.indexOf('@')>-1){
	//=>条件成立说明包含@符号
}
```

**`slice`**
作用：str.slice(n,m) 从索引n开始找到索引为m处(不包含m)，把找到的字符当做新字符串返回
![Alt text](C:\Users\Admin\Desktop\study\js\js笔记\js_md_files/1522828559550.png)

**`substring`**
和slice语法一模一样，唯一的区别在于：slice支持负数索引，而substring不支持负数索引
![Alt text](C:\Users\Admin\Desktop\study\js\js笔记\js_md_files/1522828740889.png)

**`substr`**
也是字符串截取的方法，用法是：str.substr(n,m)，从索引n开始截取m个字符
![Alt text](C:\Users\Admin\Desktop\study\js\js笔记\js_md_files/1522829116680.png)

**`toUpperCase/toLowerCase`**
实现字母的大小写转换，toUpperCase小写转大写，toLowerCase大写转小写
![Alt text](C:\Users\Admin\Desktop\study\js\js笔记\js_md_files/1522829337984.png)

**`split`**
和数组中的join相对应，数组中的join是把数组们一项按照指定的连接符变为字符串，而split是把字符串按照指定的分隔符，拆分成数组中每一项
![Alt text](C:\Users\Admin\Desktop\study\js\js笔记\js_md_files/1522829622564.png)

**`replace`**
作用：替换字符串中的原有字符
参数：原有字符，要替换的新字符
返回：替换后的字符串

```javascript
//=>把“zhufeng”替换为“珠峰”
var str = 'zhufeng2017zhufeng2018';
str = str.replace('zhufeng','珠峰'); //=>在不使用正则的情况下，没执行一次replace只能替换一个 “珠峰2017zhufeng2018”
str = str.replace('zhufeng','珠峰'); //=>“珠峰2017珠峰2018”

//===================
str = str.replace(/zhufeng/g,'珠峰');
```

字符串中还有很多常用方法，回去后大家可以自己扩展一下：（String.prototype）

- includes
- localeCompare
- search
- trim
- ...

#### 4.2真实项目中的需求

`1.时间字符串格式化`

> 有一个时间字符串 “2018-4-4 16:26:8” ，我们想基于这个字符串获取到 “04月04日 16时26分”

```javascript
/*
 * 1.基于SPLIT按照空格把字符串拆成两部分(数组中的两项)
 * 2.左边这一部分继续以SPLIT按照中杠来拆
 * 3.右边这一部分继续以SPLIT按照冒号来拆
 * 4.把需要的信息拼接在一起即可（拼接的时候不足十位的补零）
 */
function addZero(val) {
    return val < 10 ? '0' + val : val;
}

var str = '2018-4-4 16:32:8';
var ary = str.split(' '),//=>["2018-4-4", "16:32:8"]
    aryLeft = ary[0].split('-'),//=>["2018", "4", "4"]
    aryRight = ary[1].split(':');//=>["16", "32", "8"]
var month = addZero(aryLeft[1]),
    day = addZero(aryLeft[2]),
    hour = addZero(aryRight[0]),
    minute = addZero(aryRight[1]);
var result = month + '月' + day + '日 ' + hour + '时' + minute + '分';
console.log(result);
```

暂时提高眼界的：

```javascript
~function (pro) {
    pro.formatTime = function (template) {
        template = template || '{0}年{1}月{2}日 {3}时{4}分{5}秒';
        var ary = this.match(/\d+/g);
        template = template.replace(/\{(\d+)\}/g, function () {
            var n = arguments[1],
                val = ary[n] || '0';
            val < 10 ? val = '0' + val : null;
            return val;
        });
        return template;
    }
}(String.prototype);
```

#### 4.3URL地址问号传参解析

> 有一个URL地址“http://www.zhufengpeixun.cn/stu/?lx=1&name=AA&sex=man” 地址问号后面的内容是我们需要解析出来的参数信息
> {
> lx:1,
> name:'AA',
> sex:'man'
> }

```javascript
/*
 * 1.先找到问号，把问号后面的信息截取下来即可
 *  A.首先我们需要验证是否存在#哈希值，存在我们从问号开始截取到#，不存在我们直接截取到字符串的末尾
 * 2.以&进行拆分(数组)
 * 3.遍历数组中的每一项，把每一项在按照=进行拆分，把拆分后的第一项作为对象的属性名，第二项作为属性值进行存储即可
 */
var str = 'http://www.zhufengpeixun.cn/stu/?lx=1&name=AA&sex=man#teacher';//=>#后面的称为哈希(HASH)值,这个值可能有可能没有,我们需要处理,有的话我们截取的时候需要过滤掉

//=>获取问号和井号在字符串中索引位置
var indexASK = str.indexOf('?'),
    indexWell = str.indexOf('#');
//=>#可能有可能没有
if (indexWell > -1) {
    //=>存在井号,我们截取到井号的位置即可
    str = str.substring(indexASK + 1, indexWell);
} else {
    //=>没有井号,我们截取到末尾即可
    str = str.substr(indexASK + 1);
}

//=>str='lx=1&name=AA&sex=man'
var ary = str.split('&'),//=>["lx=1", "name=AA", "sex=man"]
    obj = {};
for (var i = 0; i < ary.length; i++) {
    var item = ary[i],
        itemAry = item.split('=');
    //console.log(itemAry);//=>["lx", "1"]  ["name", "AA"] ...
    var key = itemAry[0],
        value = itemAry[1];
    obj[key] = value;
}
console.log(obj);//=>{lx: "1", name: "AA", sex: "man"}
```

提高眼界：

```javascript
~function (pro) {
    pro.queryURLParameter = function () {
        var obj = {},
            reg = /([^?=&#]+)(?:=([^?=&#]+)?)/g;
        this.replace(reg, function () {
            var key = arguments[1],
                value = arguments[2] || null;
            obj[key] = value;
        });
        return obj;
    }
}(String.prototype);

var str = 'http://www.zhufengpeixun.cn/stu/?lx=1&name=&sex=#teacher';
console.log(str.queryURLParameter());
```



### 5.JS中的数学函数Math

Math称为数学函数，但是它属于对象类型的

```javascript
typeof Math =>"object"
```

之所以叫做数学函数，是因为Math这个对象中提供了很多操作数字的方法

#### 5.1Math中提供的常用方法

**`abs`**：取绝对值
![Alt text](C:\Users\Admin\Desktop\study\js\js笔记\js_md_files/1522836037072.png)





**`ceil/floor`**：向上或者向下取整
![Alt text](C:\Users\Admin\Desktop\study\js\js笔记\js_md_files/1522836155339.png)

**`round`**：四舍五入
![Alt text](C:\Users\Admin\Desktop\study\js\js笔记\js_md_files/1522836264717.png)

**`sqrt`**：开平方
![Alt text](C:\Users\Admin\Desktop\study\js\js笔记\js_md_files/1522836354875.png)

**`pow`**：取幂（N的M次方）
![Alt text](C:\Users\Admin\Desktop\study\js\js笔记\js_md_files/1522836489562.png)

**`max/min`**：获取最大值和最小值
![Alt text](C:\Users\Admin\Desktop\study\js\js笔记\js_md_files/1522836563335.png)

**`PI`**：获取圆周率
![Alt text](C:\Users\Admin\Desktop\study\js\js笔记\js_md_files/1522836614688.png)

**`random`**：获取0~1之间的随机小数
![Alt text](C:\Users\Admin\Desktop\study\js\js笔记\js_md_files/1522836725065.png)

`Math.round(Math.random()*(m-n)+n)`：获取n-m之间的随机整数



### 6.DOM树

> dom tree
> 当浏览器加载HTML页面的时候，首先就是DOM结构的计算，计算出来的DOM结构就是DOM树（把页面中的HTML标签像树桩结构一样，分析出之间的层级关系）

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>珠峰培训</title>
</head>
<body>
<div class="box" id="box">
    <ul>
        <li>新闻</li>
        <li>电影</li>
        <li>音乐</li>
    </ul>
    <div>最新新闻</div>
    <div>最新电影</div>
    <div>最新音乐</div>
</div>
</body>
</html>
```

![Alt text](C:\Users\Admin\Desktop\study\js\js笔记\js_md_files/1523065649334.png)

DOM树描述了标签和标签之间的关系（节点间的关系），我们只要知道任何一个标签，都可以依据DOM中提供的属性和方法，获取到页面中任意一个标签或者节点


#### 6.1在JS中获取DOM元素的方法

**`getElementById`**

> 通过元素的ID获取指定的元素对象，使用的时候都是 `document.getElementById('')` 此处的document是限定了获取元素的范围，我们把它称之为“上下文(context)”

1. getElementById的上下文只能是document

> 因为严格意义上，一个页面中的ID是不能重复的，浏览器规定在整个文档中既可以获取这个唯一的ID

2.如果页面中的ID重复了，我们基于这个方法只能获取到第一个元素，后面相同ID元素无法获取

3.在IE6~7浏览器中，会把表单元素(input...)的name属性值当做ID来使用（建议：以后使用表单元素的时候，不要让name和id的值有冲突）

**`getElementsByTagName`**

> `[context].getElementsByTagName`在指定的上下文中，根据标签名获取到一组元素集合（HTMLCollection）

1. 获取的元素集合是一个类数组（不能直接的使数组中的方法）
   ![Alt text](C:\Users\Admin\Desktop\study\js\js笔记\js_md_files/1523067328755.png)

2.它会把当前上下文中，子子孙孙（后代）层级内的标签都获取到（获取的不仅仅是儿子级的）

3.基于这个方法获取到的结果永远都是一个集合（不管里面是否有内容，也不管有几项，它是一个容器或者集合），如果想操作集合中具体的某一项，需要基于索引获取到才可以

**`getElementsByClassName`**

> `[context].getElementsByClassName()`在指定的上下文中，基于元素的样式类名（class='xxx'）获取到一组元素集合

1.真实项目中，我们经常是基于样式类来给元素设置样式，所以在JS中，我们也会经常基于样式类来获取元素，但是此方法在IE6~8下不兼容

兼容处理方案参考：

```javascript
Node.prototype.queryElementsByClassName = function queryElementsByClassName() {
    if (arguments.length === 0) return [];
    var strClass = arguments[0],
        nodeList = utils.toArray(this.getElementsByTagName('*'));
    strClass = strClass.replace(/^ +| +$/g, '').split(/ +/);
    for (var i = 0; i < strClass.length; i++) {
        var reg = new RegExp('(^| +)' + strClass[i] + '( +|$)');
        for (var k = 0; k < nodeList.length; k++) {
            if (!reg.test(nodeList[k].className)) {
                nodeList.splice(k, 1);
                k--;
            }
        }
    }
    return nodeList;
};
```

**`getElementsByName`**

> `document.getElementsByName()`它的上下文也只能是document，在整个文档中，基于元素的name属性值获取一组节点集合（也是一个类数组）

1.在IE浏览器中（IE9及以下版本），只对表单元素的name属性起作用（正常来说：我们项目中只会给表单元素设置name，给非表单元素设置name，其实是一个不太符合规范的操作）

**`querySelector`**

> `[context].querySelector()` 在指定的上下文中基于选择器（类似于CSS选择器）获取到指定的元素对象（获取的是一个元素，哪怕选择器匹配了多个，我们只获取第一个）

**`querySelectorAll`**

> 在querySelector的基础上，我们获取到选择器匹配到的所有元素，结果是一个节点集合（NodeList）

1. querySelector/querySelectorAll 都是不兼容IE6~8浏览器的（不考虑兼容的情况下，我们能用ById或者其它方式获取的，也尽量不要用这两个方法，这两个方法性能消耗较大）

**`document.head`**

> 获取HEAD元素对象

**`document.body`**

> 获取BODY元素对象

**`document.documentElement`**

> 获取HTML元素对象

```javascript
//=>需求：获取浏览器一屏幕的宽度和高度（兼容所有的浏览器）
document.documentElement.clientWidth || document.body.clientWidth

document.documentElement.clientHeight || document.body.clientHeight
```

面试题：获取当前页面中所有ID为HAHA的和元素（兼容所有的浏览器）

```javascript
//=>不能使用querySelectorAll

/*
 * 1.首先获取当前文档中所有的HTML标签
 * 2.依次遍历这些元素标签对象，谁的ID等于HAHA，我们就把谁存储起来即可
 */
function queryAllById(id) {
    //->基于通配符*获取到整个文档中所有的HTML标签
    var nodeList = document.getElementsByTagName('*');

    //->遍历集合中的每一项，把元素ID和传递ID相同的这一项存储起来
    var ary = [];
    for (var i = 0; i < nodeList.length; i++) {
        var item = nodeList[i];
        item.id === id ? ary.push(item) : null;
    }
    return ary;
}
console.log(queryAllById('HAHA'));
```

#### 6.2节点 （node）

> 在一个HTML文档中出现的所有东西都是节点
>
> - 元素节点（HTML标签）
> - 文本节点（文字内容）
> - 注释节点（注释内容）
> - 文档节点（document）
> - ...

每一种类型的节点都会有一些属性区分自己的特性和特征

- nodeType：节点类型
- nodeName：节点名称
- nodeValue：节点值

`元素节点`
nodeType：1
nodeName：大写标签名
nodeValue：null

`文本节点`
nodeType：3
nodeName：'#text'
nodeValue：文本内容

在标准浏览器中会把空格/换行等都当做文本节点处理

`注释节点`
nodeType：8
nodeName：'#comment'
nodeValue：注释内容

`文档节点`
nodeType：9
nodeName：'#document'
nodeValue：null

#### 6.3描述节点之间关系的属性

**`parentNode`**

> 获取当前节点唯一的父亲节点

**`childNodes`**

> 获取当前元素的所有子节点
>
> - 子节点：只获取儿子级别的
> - 所有：包含元素节点、文本节点等

**`children`**

> 获取当前元素所有的元素子节点
>
> 在IE6~8中会把注释节点也当做元素节点获取到，所以兼容性不好

**`previousSibling`**

> 获取当前节点的上一个哥哥节点（获取的哥哥可能是元素也可能是文本等）
>
> previousElementSibling：获取上一个哥哥元素节点（不兼容IE6~8）

**`nextSibling`**

> 获取当前节点的下一个弟弟节点 
>
> nextElementSibling：下一个弟弟元素节点（不兼容）

**`firstChild`**

> 获取当前元素的第一个子节点（可能是元素或者文本等）
>
> firstElementChild

**`lastChild`**

> 获取当前元素的最后一个子节点
>
> lastElementChild

----------------

需求一：获取当前元素的所有元素子节点

> 基于children不兼容IE低版本浏览器（会把注释当做元素节点）

```javascript
/*
 * children：get all the element nodes of the current element
 * @parameter
 *    curEle：[object] current element
 * @return
 *    [Array] all the element nodes
 * by team on 2018/04/07 12:36
 */
function children(curEle) {
    //=>首先获取当前元素下所有的子节点,然后遍历这些节点,筛选出元素的(NODE-TYPE===1),把筛选出来的结果单独存储起来即可
    var nodeList = curEle.childNodes,
        result = [];
    for (var i = 0; i < nodeList.length; i++) {
        var item = nodeList[i];
        if (item.nodeType === 1) {
            result.push(item);
        }
    }
    return result;
}
console.log(children(course));
```

需求二：获取当前元素的上一个哥哥元素节点

> previousSibling：上一个哥哥节点
> previousElementSibling：上一个哥哥元素节点，但是不兼容

```javascript
/*
 * prev：get the last elder brother element node of the current element
 * @parameter
 *    curEle：[object] current element
 * @return
 *    [object] last elder brother element
 * by team on 2018/04/07 12:44
 */
function prev(curEle) {
    //=>先找当前元素的哥哥节点,看是否为元素节点,不是的话,基于哥哥,找哥哥的上一个哥哥节点...一直到找到元素节点或者已经没有哥哥了(说明我就是老大)则结束查找
    var pre = curEle.previousSibling;
    while (pre && pre.nodeType !== 1) {
        /*
         * pre && pre.nodeType !== 1
         *   pre是验证还有没有，这样写代表有，没有pre是null
         *   pre.nodeType是验证是否为元素
         */
        pre = pre.previousSibling;
    }
    return pre;
}
```

回去后扩展：next下一个弟弟元素节点，prevAll获取所有哥哥元素节点，nextAll获取所有弟弟元素节点，siblings获取所有兄弟元素节点，index获取当前元素的索引...


#### 6.4关于DOM的增删改

**`createElement`**

> 创建一个元素标签(元素对象)
> `document.createElement([标签名])`

**`appendChild`**

> 把一个元素对象插入到指定容器的末尾
> `[container].appendChild([newEle])`

**`insertBefore`**

> 把一个元素对象插入到指定容器中某一个元素标签之前
> `[container].insertBefore([newEle],[oldEle])`

**`cloneNode`**

> 把某一个节点进行克隆
>
> `[curEle].cloneNode()`：浅克隆，只克隆当前的标签
> `[curEle].cloneNode(true)`：深克隆，当前标签及其里面的内容都一起克隆了

**`removeChild`**

> 在指定容器中删除某一个元素
>
> `[container].removeChild([curEle])`

**`set/get/removeAttribute`**

> 设置/获取/删除 当前元素的某一个自定义属性

```javascript
var oBox=document.getElementById('box');

//=>把当前元素作为一个对象，在对象对应的堆内存中新增一个自定义的属性
oBox.myIndex = 10;//=>设置
console.log(oBox['myIndex']);//=>获取
delete oBox.myIndex; //=>删除

//=>基于Attribute等DOM方法完成自定义属性的设置
oBox.setAttribute('myColor','red'); //=>设置
oBox.getAttribute('myColor'); //=>获取
oBox.removeAttribute('myColor'); //=>删除

上下两种机制属于独立的运作体制，不能互相混淆使用
- 第一种是基于对象键值对操作方式，修改当前元素对象的堆内存空间来完成
- 第二种是直接修改页面中HTML标签的结构来完成（此种办法设置的自定义属性可以在结构上呈现出来）

基于setAttribute设置的自定义属性值都是字符串
```

![Alt text](C:\Users\Admin\Desktop\study\js\js笔记\js_md_files/1523088229070.png)


需求：解析一个URL字符串问号传参和HASH值部分
