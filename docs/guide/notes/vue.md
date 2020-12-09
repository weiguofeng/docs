---
title: vue
date: 2020-12-3
categories:
 - vue
tags:
 - vue
---

[[toc]]

# vue开发去哪儿网

### 1.原生js代码与Vue对比


```html
打印hello world
</!DOCTYPE html>
<html>
<head>
	<title>hello world</title>
	<script src= "./vue.js"></script>
</head>
<body>

<div id="app">
	{{content}}
</div>
<script type="text/javascript">
	// var dom = document.getElementById('app');
	// dom.innerHTML = 'hello world'

	var app = new Vue({

		el: '#app',
		data: {
			content: 'hello world'
		}
	})
</script>
</body>
</html>
```


el:配置项 实例负责管理的一个区域


data:定义一些数据


```html
js隔两秒改变字符
<div id="app">
	
</div>
<script type="text/javascript">
	var dom = document.getElementById('app');
	dom.innerHTML = 'hello world'

	setTimeout(function(){
		dom.innerHTML = 'bye world'
	},2000)
</script>


vue代码编写
<div id="app">
	{{content}}
</div>
<script type="text/javascript">
	var app = new Vue({

		el: '#app',
		data: {
			content: 'hello world'
		}
	})

	setTimeout(function(){
		app.$data.content='bye world'
	},2000)
</script>
```


$data表示这一部分的对象{
content: 'hello world'
}


### 2.v-for指令的学习


```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>toDoList</title>
	<script src="./vue.js" type="text/javascript"></script>

</head>
<body>
	<div id="app">
		<input type="text">
		<button>提交</button>
		<ul>
			<li v-for='item in list'>{{item}}</li>
			
		</ul>
	</div>

	<script type="text/javascript">
		var app = new Vue({
			el: '#app',
			data: {
				list: ['第一课的内容','第二课的内容','第三课的内容']
			}
})
	</script>

</body>
</html>
```


item表示list中循环遍历出来的每一项内容


### 3.v-on命令


```html
<div id="app">
		<input type="text">
		<button v-on:click='handleBtnClick'>提交</button>
		
	</div>

	<script type="text/javascript">
		var app = new Vue({
			el: '#app',
			data: {
				list: []
			},
			methods: {
				handleBtnClick: function(){
					alert('click')
				}
			}
})
	</script>
```


v-on绑定点击事件


### 4.v-model指令


```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>toDoList</title>
	<script src="./vue.js" type="text/javascript"></script>

</head>
<body>
	<div id="app">
		<input type="text" v-model="inputValue"/>
		<button v-on:click='handleBtnClick'>提交</button>
		<ul>
			<li v-for='item in list'>{{item}}</li>
			
		</ul>
	</div>

	<script type="text/javascript">
		var app = new Vue({
			el: '#app',
			data: {
				list: [],
				inputValue: ''
			},
			methods: {
				handleBtnClick: function(){
					this.list.push(this.inputValue)
					/*alert(this.inputValue)*/
					this.inputValue=''
				}
			}
})
	</script>

</body>
</html>
```


v-model双向绑定


当页面input框中的内容发生变化时 app.$data.inputValue中的内容也发生变化


当app.$data.inputValue中的内容发生变化时 页面输入框中的内容也会发生变化


### 5.jquerytoDoList实现


```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>jquery-todolist</title>
<script src="js/jquery-3.4.1.min.js"></script>
</head>
<body>
  <div>
      <input id="input" type="text" />
      <button id="btn">提交</button>
      <ul id="ul"></ul>
    </div>
    <script>
      $(function() {
        //创建构造函数
        function Page() {

        }

        //通过JQ的.extend()以及.prototype属性给构造函数Page增加一些内容

        //$.extend()将内容合并到目标对象

        //prototype属性为对象添加属性和方法

        $.extend(Page.prototype, {
          //1、首先给按钮绑定一个方法，创建一个init(),在里面调用bindEvents()[实际的绑定事件方法]
          init: function() {
           this.bindEvents();
          },

          //2、创建bindEvents()
          bindEvents: function() {
            //获取按钮
            var btn = $('#btn');
            console.log(btn)
            //给按钮绑定点击事件
            //并通过JQ的.proxy方法改变this的指向（Page对象）,并绑定handleBtnClick事件
            btn.on("click", $.proxy(this.handleBtnClick, this));
          },

          //3、创建handleBtnClick()，并在此方法里面添加点击按钮时需要执行的代码，需要将input的值通过点击按钮添加到ul标签里，并同时清空input框
          handleBtnClick: function() {
            //alert(123)
            //获取input的value值
            var inputElem = $('#input');
            var inputValue = inputElem.val();
            //获取ul标签，并向里面添加内容
            var ulElem = $('#ul');
            ulElem.append('<li>' + inputValue + '</li>');
            //清空input的值
            inputElem.val('');
          }

        })

        //4、创建Page的实例，并调用init方法
        var page = new Page();
        page.init();
      })

    </script>

</body>

</html>
```


### 6.MVP
![1.png](https://cdn.nlark.com/yuque/0/2020/png/1534454/1591176522611-a3a1968a-67d5-4b72-a4bc-4481dd9de7cc.png#align=left&display=inline&height=403&margin=%5Bobject%20Object%5D&name=1.png&originHeight=403&originWidth=724&size=53571&status=done&style=none&width=724)


v层(视图层)


```html
<div>
      <input id="input" type="text" />
      <button id="btn">提交</button>
      <ul id="ul"></ul>
    </div>
```


p层(控制器)


```
按钮被点击 控制器层执行 控制器层去负责所有的业务逻辑
控制器会通过dom操作 去改变视图
```


m层(模型层)


```
一般是ajax请求 一般控制层操作ajax请求
```


### 7.MVVM
![2.png](https://cdn.nlark.com/yuque/0/2020/png/1534454/1591176542339-a9c673d8-b9a4-497c-bff9-adbb4ebc10ae.png#align=left&display=inline&height=438&margin=%5Bobject%20Object%5D&name=2.png&originHeight=438&originWidth=869&size=97586&status=done&style=none&width=869)


m层


```
data: {
				list: [],
				inputValue: ''
			},
```


v层


```
<div id="app">
		<input type="text" v-model="inputValue"/>
		<button v-on:click='handleBtnClick'>提交</button>
		<ul>
			<li v-for='item in list'>{{item}}</li>
			
		</ul>
	</div>
```


vm层


是vue来实现 监听到视图层有事件触发 通过vm调用逻辑代码 改变m层数据


监听到m层变化 反之映射到视图层


注意力主要集中在m层


### 8.前端组件化


#### 父组件向子组件传值


```html
全局组件的使用
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>toDoList</title>
	<script src="./vue.js" type="text/javascript"></script>

</head>
<body>
	<div id="app">
		<input type="text" v-model="inputValue"/>
		<button v-on:click='handleBtnClick'>提交</button>
		<ul>
			<!-- v-bind向子组件传入绑定值-->
			<todo-item
			v-bind:content="item"
			v-for="item in list"></todo-item>
			
		</ul>
	</div>

	<!-- 创建全局组件TodoItem -->
	<script type="text/javascript">
		Vue.component("TodoItem",{
			//props我从父组件接收什么样的内容
			// props对content进行接收 如果想使用父组件传递过来的数据 接收完后 模板中用到content中 
			props:['content'],
			template: "<li>{{content}}</li>"
		
		})

		var app = new Vue({
			el: '#app',
			data: {
				list: [],
				inputValue: ''
			},
			methods: {
				handleBtnClick: function(){
					this.list.push(this.inputValue)
					this.inputValue=''
				}
			}
})
	</script>

</body>
</html>
```


```html
局部组件的使用
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>toDoList</title>
	<script src="./vue.js" type="text/javascript"></script>

</head>
<body>
	<div id="app">
		<input type="text" v-model="inputValue"/>
		<button v-on:click='handleBtnClick'>提交</button>
		<ul>
			<!-- v-bind向子组件传入绑定值-->
			<todo-item
			v-bind:content="item"
			v-for="item in list"></todo-item>
			
		</ul>
	</div>

	
	<script type="text/javascript">
		// 局部组件的使用
		var TodoItem ={
			props:['content'],
			template: "<li>{{content}}</li>"
		}

		// 将TodoItem注册到vue实例中
		var app = new Vue({
			el: '#app',
			components: {
				TodoItem: TodoItem
			}
			data: {
				list: [],
				inputValue: ''
			},
			methods: {
				handleBtnClick: function(){
					this.list.push(this.inputValue)
					this.inputValue=''
				}
			}
})
	</script>

</body>
</html>
```


#### 子组件向父组件传值


```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>toDoList</title>
	<script src="./vue.js" type="text/javascript"></script>

</head>
<body>
	<div id="app">
		<input type="text" v-model="inputValue"/>
		<button v-on:click='handleBtnClick'>提交</button>
		<ul>
			<!-- v-bind向子组件传入绑定值-->
			<todo-item
			v-bind:content="item"
			v-bind:index="index"
			v-for="(item,index) in list"
			@delete="handleItemDelete"> //父组件监听  并拿到index值
			</todo-item>
		</ul>
	</div>

	
	<script type="text/javascript">
		

		// 局部组件的使用
		var TodoItem ={
			props:['content','index'],
			template: "<li @click='handleItemClick'>{{content}}</li>",
			methods: {
				handleItemClick: function(){
                    //$emit向上一层触发事件
					this.$emit("delete",this.index);
				}
			}
		}

		// 将TodoItem注册到vue实例中
		var app = new Vue({
			el: '#app',
			components: {
				TodoItem: TodoItem
			},
			data: {
				list: [],
				inputValue: ''
			},
			methods: {
				handleBtnClick: function(){
					this.list.push(this.inputValue)
					this.inputValue=''
				},

				handleItemDelete: function(index){
					//alert("delete");
					this.list.splice(index,1)
				}
			}
})
	</script>

</body>
</html>
```


### 9.vue实例


```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>vue 实例</title>
	<script src="./vue.js" type="text/javascript"></script>
</head>
<body>

<!-- v-on: 相当于@ -->
<div id="app">
<div  v-on:click="handleClick">
	{{message}}
</div>

<item></item>

</div>

<script type="text/javascript">

	Vue.component('item',{
		template:'<div>hello item</div>'
	})

	//vue实例接管div dom 
	var app = new Vue({ //父组件
		el: '#app',
		data: {
			message: 'hello world'
		},
		methods: {
			handleClick: function(){
				alert("1")
			}
		}
	})
</script>
</body>
</html>
```


一个vue的项目实际上是由很多个小的组件构成，或者是由很多很多vue的实例拼装组成的
![3.png](https://cdn.nlark.com/yuque/0/2020/png/1534454/1591176575295-bb35a7fb-1c4c-4dce-b935-d15fc885ab17.png#align=left&display=inline&height=162&margin=%5Bobject%20Object%5D&name=3.png&originHeight=162&originWidth=398&size=29475&status=done&style=none&width=398)


凡是以$开头的都是vue的实例属性(data el) 或者实例方法destory()销毁实例的方法


### 10.vue实例的生命周期钩子
![4.png](https://cdn.nlark.com/yuque/0/2020/png/1534454/1591176603954-8902fae2-cf2f-4e5a-b6f3-dc935c8f96ef.png#align=left&display=inline&height=333&margin=%5Bobject%20Object%5D&name=4.png&originHeight=333&originWidth=475&size=29646&status=done&style=none&width=475)
![5.png](https://cdn.nlark.com/yuque/0/2020/png/1534454/1591176674507-c34eea21-6338-4834-9cb1-94d43a92f578.png#align=left&display=inline&height=118&margin=%5Bobject%20Object%5D&name=5.png&originHeight=118&originWidth=539&size=7190&status=done&style=none&width=539)




```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>vue实例生命周期函数</title>
	<script src="./vue.js" type="text/javascript"></script>
</head>
<body>
<div id="app">{{test}}</div>

<script type="text/javascript">
	//生命周期函数就是vue实例在某一时间点自动执行的函数
	var app = new Vue({
		el: '#app',
		//template: "<div>hello </div>",
		data:{
			test: 'hello 1'
		},

		beforeCreate: function(){
			console.log("beforeCreate");
		},
		created: function(){
			console.log("created");
		},
		// 1.vue的初始化基本结束 

		// 2.询问是否有el选项
		// 3.询问是否有template属性  如果有模板会用模板渲染 没有的话 会把el即app所在的div当做模板来进行渲染

		//4.在页面渲染之前 会打印beforemount函数
		beforeMount: function(){
			console.log(this.$el);
			console.log("beforeMount");
		},
		// 5.模板挂载到页面之后
		mounted: function(){
			console.log(this.$el);
			console.log("mounted");
		},

		// 调用app.$destory() 还没销毁之前调用beforeDestory
		beforeDestroy: function(){
			console.log("beforeDestroy");
		},

		// 完全销毁vue实例 调用destoryed
		destroyed: function(){
			console.log("destroyed");
		},

		// 当数据发生改变 还没有重新渲染之前
		beforeUpdate: function(){
			console.log("beforeUpdate");
		},

		//渲染之后
		updated: function(){
			console.log("updated");
		}
	})
</script>
</body>
</html>
```


activated deactivated errorCaptured 一共11个生命周期函数


### 11.vue的模板语法


#### 11.1插值表达式{{}}


```html
<!DOCTYPE html>
<html>
<head>
	<title>vue的模板语法</title>
	<script type="text/javascript" src="./vue.js"></script>
</head>
<body>
<div id="app">{{name}}</div>

<script type="text/javascript">
	var app = new Vue({
		el: '#app',
		data:{
			name: 'hell0'
		}
	})
</script>
</body>
</html>
```


#### 11.2v-text vs v-html


```html
<!DOCTYPE html>
<html>
<head>
	<title>vue的模板语法</title>
	<script type="text/javascript" src="./vue.js"></script>
</head>
<body>
<div id="app">
	<div v-on:click="btnClick">{{name}}</div>
	<!--通过v-once指令 也能执行一次性插值 当数据改变时 插值处的内容不会更新  但可能会影响该节点上的其它数据绑定-->
    
    <!--这三个语法中都可以写js表达式 不仅仅写一个变量 -->
	<div v-once>{{name + 'Lee'}}</div>   
	<div v-text="name+ 'Lee'"></div>
	<div v-html="name+ 'Lee'"></div>
</div>

<script type="text/javascript">
	var app = new Vue({
		el: '#app',
		data:{
			name: '<h1>hell0</h1>'
		},
		methods: {
			btnClick: function(){
				app.$data.name='world'
			}
		}
	})
</script>
</body>
</html>
```


v-text="name"当看到vue指令后面跟一个值的时候 这个值不再是字符串 它指的是一个js表达式


v-text是指将div中的innertext中的值修改为name表达式的值


v-text进行了字符的转义


#### 11.3计算属性，方法，侦听器


```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>计算属性，方法，侦听器</title>
	<script  src="./vue.js" type="text/javascript"></script>
</head>
<body>
	<div id="id">
		{{fullname}}
		{{age}}
	</div>

<script type="text/javascript">
	var app = new Vue({
		el:'#id',
		data: {
			firstname: 'chen',
			lastname: 'huiqing',
			age: '22'
		},
		//计算属性 内置缓存
		computed:{
			fullname: function(){

			console.log("计算了一次");
			return this.firstname+ ' ' +this.lastname
			}
	    } 
	})
</script>
</body>
</html>
```


计算属性


fullname所依赖的firstname和lastname属性如果没有修改 则从缓存中取值


如图只修改了age的值 并没有调用computed的函数


当依赖的属性发生变化时 计算属性会重新计算一次


![6.png](https://cdn.nlark.com/yuque/0/2020/png/1534454/1591176637582-f9528904-0904-4296-a471-ddeaf854ff97.png#align=left&display=inline&height=225&margin=%5Bobject%20Object%5D&name=6.png&originHeight=225&originWidth=1152&size=17525&status=done&style=none&width=1152)
```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>计算属性，方法，侦听器</title>
	<script  src="./vue.js" type="text/javascript"></script>
</head>
<body>
	<div id="id">
		{{fullname()}}
		{{age}}
	</div>

<script type="text/javascript">
	var app = new Vue({
		el:'#id',
		data: {
			firstname: 'chen',
			lastname: 'huiqing',
			age: '22'
		},

		methods: {
			console.log("方法调用了一次");
			fullname: function(){
				return this.firstname+ ' ' +this.lastname
			}
		}
	})
</script>
</body>
</html>
```


用方法同样能实现相同的效果 但是并不如computed性能高


```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>计算属性，方法，侦听器</title>
	<script  src="./vue.js" type="text/javascript"></script>
</head>
<body>
	<div id="id">
		{{fullname}}
		{{age}}
	</div>

<script type="text/javascript">
	var app = new Vue({
		el:'#id',
		data: {
			firstname: 'chen',
			lastname: 'huiqing',
			fullname: 'chen huiqing'
			age: '22'
		},

		watch: {

			firstname: function(){
				console.log("watch了一次");
				this.fullname=this.firstname+ " " +this.lastname;
			}
			lastname: function(){
				console.log("watch了一次");
				this.fullname=this.firstname+ " " +this.lastname;
			}
		}
	})
</script>
</body>
</html>
```


watch和computed都具备缓存的机制，但是watch语法比computed复杂 所以一个功能既可以通过watch和computed和methods实现时，推荐computed


#### 11.4计算属性的setter和getter


```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>计算属性的setter和getter</title>
	<script  src="./vue.js" type="text/javascript"></script>
</head>
<body>
	<div id="id">{{fullname}}</div>

<script type="text/javascript">
	var app = new Vue({
		el:'#id',
		data: {
			firstname: 'ch',
			lastname: 'qing'
		},
		computed: {
			fullname:{
				get: function(){
					return this.firstname+ " "+this.lastname;
				},
				set: function(value){
					var arr = value.split(" ");
					this.firstname=arr[0];
					this.lastname=arr[1];
					// console.log(value);
				}
			}
		}
	})
</script>
</body>
</html>
```


#### 11.5vue中的样式绑定


class的对象绑定


```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>vue中的样式绑定</title>
	<script  src="./vue.js" type="text/javascript"></script>
	<style type="text/css">
		.actived{
			color: red
		}
	</style>
</head>
<body>
	<!-- class的对象绑定 -->
	<div id="id" @click="handlerBtnClick" :class="{actived:isActived}">
		{{comment}}
	</div>

<script type="text/javascript">
	var app = new Vue({
		el:'#id',
		data: {
			comment: 'hello',
			isActived: false
		},
		methods: {
			handlerBtnClick: function(){
				this.isActived=!this.isActived
			}
		}
	})
</script>
</body>
</html>
```


class和数组绑定 其中actived代表变量


```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>vue中的样式绑定</title>
	<script  src="./vue.js" type="text/javascript"></script>
	<style type="text/css">
		.actived{
			color: red
		}
	</style>
</head>
<body>
	
	<div id="id" @click="handlerBtnClick" :class="[actived,activedOne]">
		{{comment}}
	</div>

<script type="text/javascript">
	var app = new Vue({
		el:'#id',
		data: {
			comment: 'hello',
			actived: '',
            activedOne: 'actived-one'
		},
		methods: {
			handlerBtnClick: function(){
				// if(this.actived === "actived"){
				// 	this.actived=""
				// }else{
				// 	this.actived="actived"
				// }

				this.actived= this.actived==="actived" ? "" :"actived";
				
			}
		}
	})
</script>
</body>
</html>
```


style对象的样式绑定


```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>vue中的样式绑定</title>
	<script  src="./vue.js" type="text/javascript"></script>
	
</head>
<body>
	
	<div id="id" :style="styleObj" @click="handlerBtnClick">
		hello
	</div>

<script type="text/javascript">
	var app = new Vue({
		el:'#id',
		data: {
			styleObj: {
				color: "black"
			}
		},
		methods: {
			handlerBtnClick: function(){
				this.styleObj.color=this.styleObj.color==="black"?"red":"black";
			}
		}
		
		
	})
</script>
</body>
</html>
```


style的数组绑定


```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>vue中的样式绑定</title>
	<script  src="./vue.js" type="text/javascript"></script>
	
</head>
<body>
	
	<div id="id" :style="[styleObj,{fontSize: '50px'}]" @click="handlerBtnClick">
		hello
	</div>

<script type="text/javascript">
	var app = new Vue({
		el:'#id',
		data: {
			styleObj: {
				color: "black"
			}
		},
		methods: {
			handlerBtnClick: function(){
				this.styleObj.color=this.styleObj.color==="black"?"red":"black";
			}
		}
		
		
	})
</script>
</body>
</html>
```


#### 11.6vue中的条件渲染


```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>vue中的条件渲染</title>
	<script  src="./vue.js" type="text/javascript"></script>
</head>
<body>
	<div id="id">
	<div v-if="msg" data-test="v-if">{{hello}}</div>
	<div v-show="msg" data-test="v-show">{{hello}}</div>
	</div>
<script type="text/javascript">
	var app = new Vue({
		el:'#id',
		data: {
			hello : "world",
			msg: false
		}
	})
</script>
</body>
</html>
```
![7.png](https://cdn.nlark.com/yuque/0/2020/png/1534454/1591176717951-26b60f76-3251-4bf1-a646-1b423d64c895.png#align=left&display=inline&height=245&margin=%5Bobject%20Object%5D&name=7.png&originHeight=245&originWidth=535&size=17890&status=done&style=none&width=535)


v-if与v-show都能条件判断，v-if属性设置为false时，在dom中会移除


v-show为false时，在dom中是disolay:none的形式


用v-show性能会高一些


```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>条件渲染</title>
	<script  src="./vue.js" type="text/javascript"></script>
</head>
<body>
	<div id="id">
		<!-- v-if指令用于条件性地渲染一块内容 这块内容只会在指令表达式返回truthy值得时候被渲染 -->
		<!-- v-else 元素必须紧跟在带 v-if 或者 v-else-if 的元素的后面，否则它将不会被识别。 -->
		<h1 v-if="awesome"> Vue is awesome</h1>
		<h1 v-else>on no</h1>

		<div v-if="type === 'A'">
			A
		</div>
		<div v-else-if="type === 'B'">
			B
		</div>
		<div v-else-if="type === 'C'">
			C
		</div>
		<div v-else>
			not abc
		</div>

		<template v-if="ok">
			<h1>title</h1>
			<p>paragraph1</p>
			<p>paragraph2</p>
		</template>
	</div>

<script type="text/javascript">
	var app = new Vue({
		el:'#id',
		data: {
			awesome: false,
			ok: '1',
			type: 'A'
		}
	})
</script>
</body>
</html>
```


当给某个元素标签加上一个key值时 当两个key值不一样 vue就不会去尝试复用以前的标签


```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>vue中的条件渲染</title>
	<script  src="./vue.js" type="text/javascript"></script>
</head>
<body>
	<div id="id">
	<div v-if="msg" >
		用户名: <input key="username"/>
	</div>
	<div v-else >
		邮箱名: <input key="password"/>
	</div>
	</div>
<script type="text/javascript">
	var app = new Vue({
		el:'#id',
		data: {
			
			msg: false
		}
	})
</script>
</body>
</html>
```


#### 11.7vue中的列表渲染


```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>vue中的列表渲染</title>
	<script  src="./vue.js" type="text/javascript"></script>
</head>
<body>
	<div id="id">
		<!-- 每一个循环项上都带一个key值，提高性能。item.id既是唯一的 又不是index下标 性能高-->
		<div v-for="(item,index) of list" 
			 :key="item.id">
			{{item.text}} ----{{index}}
		</div>
	</div>

<script type="text/javascript">
	var app = new Vue({
		el:'#id',
		data: {
			list:[
				{
					id: "001",
					text: "nice"
				},
				{
					id: "002",
					text: "to"
				},
				{
					id: "003",
					text: "meet"
				},
				{
					id: "004",
					text: "you"
				},
			]
		}
	})
</script>
</body>
</html>
```


当我们尝试修改数组中的值时 不能通过vm.list[4]下标的方式去改变


要通过vue给的变异方法去改变 push() pop() shift() unshift() splice() sort() reverse()
![8.png](https://cdn.nlark.com/yuque/0/2020/png/1534454/1591176749145-2ad5fc0e-ea06-4e73-9d81-56de5d55efcb.png#align=left&display=inline&height=395&margin=%5Bobject%20Object%5D&name=8.png&originHeight=395&originWidth=543&size=36951&status=done&style=none&width=543)


使用splice方法 将会使页面的数据发生变化
![9.png](https://cdn.nlark.com/yuque/0/2020/png/1534454/1591176766381-361a48da-49b3-4472-a216-c147b6369e6b.png#align=left&display=inline&height=267&margin=%5Bobject%20Object%5D&name=9.png&originHeight=267&originWidth=545&size=22696&status=done&style=none&width=545)


除此之外的方法改变数组的引用
![10.png](https://cdn.nlark.com/yuque/0/2020/png/1534454/1591176782691-2e5b4139-d723-4ae0-9896-b6bc95aa0ada.png#align=left&display=inline&height=332&margin=%5Bobject%20Object%5D&name=10.png&originHeight=332&originWidth=554&size=12955&status=done&style=none&width=554)


可以Vue.set(vm.userinfo,1,5)改变数组的值
![14.png](https://cdn.nlark.com/yuque/0/2020/png/1534454/1591176812761-06761a83-16ac-4aae-9970-917c97ed5a82.png#align=left&display=inline&height=312&margin=%5Bobject%20Object%5D&name=14.png&originHeight=312&originWidth=809&size=48240&status=done&style=none&width=809)


模板占位符可以帮助我们去包裹一些元素，但是在循环的过程中并不会真正的被渲染到页面上。


```html
<div id="id">
		<!-- 每一个循环项上都带一个key值，提高性能。item.id既是唯一的 又不是index下标 性能高-->
		<template v-for="(item,index) of list" 
			 :key="item.id">
		<div >
			{{item.text}} ----{{index}}
		</div>

		<span>
			{{item.text}}
		</span>
		</template>
	</div>
```


除了对数组做循环，我们还可以对对象做循环


```html
<body>
	<div id="id">
		<div v-for="(item,key,index) of userinfo">
			{{item}}---{{key}}---{{index}}
		</div>	
	</div>

<script type="text/javascript">
	var app = new Vue({
		el:'#id',
		data: {
			userinfo:{
				age: 28,
				gender: "male",
				name: "chen1",
				id: "1614431002"
			}
		}
	})
</script>
</body>
```


如果要动态的添加值进去 让他的引用指向新的值
![11.png](https://cdn.nlark.com/yuque/0/2020/png/1534454/1591176846514-7f8cdb4d-f55a-4e7d-801c-3f9ac10592fa.png#align=left&display=inline&height=320&margin=%5Bobject%20Object%5D&name=11.png&originHeight=320&originWidth=1050&size=125373&status=done&style=none&width=1050)


通过set方法注入数据
![12.png](https://cdn.nlark.com/yuque/0/2020/png/1534454/1591176863866-7f9730a2-f779-4ff6-84cf-53beda640182.png#align=left&display=inline&height=228&margin=%5Bobject%20Object%5D&name=12.png&originHeight=228&originWidth=557&size=20897&status=done&style=none&width=557)


set方法不仅是全局方法 并且是vue的一个实例方法
![13.png](https://cdn.nlark.com/yuque/0/2020/png/1534454/1591176878580-0fe1378d-1b29-43f3-b396-8800bbeefc81.png#align=left&display=inline&height=118&margin=%5Bobject%20Object%5D&name=13.png&originHeight=118&originWidth=537&size=4440&status=done&style=none&width=537)


#### 11.8组件使用中的细节点


##### table  ul ol select 中 is 属性的使用 可以解决一些bug问题


```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>组件使用中的细节点</title>
	<script  src="./vue.js" type="text/javascript"></script>
</head>
<body>
	<div id="root">
        <!--符合h5的编码规范 <ul><li></li></ul>  <select><option></option></select>-->
		<table>
			<tbody>
				<tr is="row"></tr> 
				<tr is="row"></tr>
				<tr is="row"></tr>
			</tbody>
		</table>
	</div>

<script type="text/javascript">

	Vue.component("row",{
		template: '<tr><td>this is row</td></tr>'
	})


	var app = new Vue({
		el:'#root',
		data: {

		}
	})
</script>
</body>
</html>
```


![15.png](https://cdn.nlark.com/yuque/0/2020/png/1534454/1591176898265-0a0b402c-bbd6-4cf7-8b05-c2e24beb34a5.png#align=left&display=inline&height=367&margin=%5Bobject%20Object%5D&name=15.png&originHeight=367&originWidth=387&size=18264&status=done&style=none&width=387)
##### 在子组件中定义data的时候，data必须是函数 不能是对象 只有根组件中定义的是对象


主要是为了让每一个子组件都有独立的数据存储


```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>组件使用中的细节点</title>
	<script  src="./vue.js" type="text/javascript"></script>
</head>
<body>
	<div id="root">
		<table>
			<tbody>
				<tr is="row"></tr>
				<tr is="row"></tr>
				<tr is="row"></tr>
			</tbody>
		</table>
	</div>

<script type="text/javascript">

	Vue.component("row",{
		data: function(){
			return{
				content: 'this is rows'
			}
		},

		template: '<tr><td>{{content}}</td></tr>'
	})


	var app = new Vue({
		el:'#root',
		
	})
</script>
</body>
</html>
```


##### ref引用内容


$refs表示所有的引用


```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>组件使用中的细节点</title>
	<script  src="./vue.js" type="text/javascript"></script>
</head>
<body>
	<div id="root">
		<div ref="hello" @click="btnClick">
			hello world
		</div>
	</div>

<script type="text/javascript">

	var app = new Vue({
		el:'#root',
		methods: {
			btnClick: function(){
				alert(this.$refs.hello.innerHTML)
			}
		}
	})
</script>
</body>
</html>
```


ref写在组件上 ref实际上是conter子组件的一个引用


```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>组件使用中的细节点</title>
	<script  src="./vue.js" type="text/javascript"></script>
</head>
<body>
	<div id="root">
		<!-- //监听change事件 -->
		<conter ref="one" @change="handlerChange"></conter> 
		<conter ref="two" @change="handlerChange"></conter>
		<div>{{total}}</div>

	</div>

<script type="text/javascript">

	Vue.component("conter",{
		template: '<div @click="handlerBtnClick">{{number}}</div>',
		data: function(){
			return{
				number: 0
			}
		},
		methods: {
			handlerBtnClick: function(){
				 this.number++;
				 // 子组件向父组件传值
				 this.$emit('change') //触发一个事件告诉父组件 我已经被改变了
			}
		}
	})

	var app = new Vue({
		el:'#root',
		data:{
			total:0
		},
		methods:{
			handlerChange:function(){
				this.total=this.$refs.one.number+this.$refs.two.number;
				// console.log(this.$refs.one.number);
				// console.log(this.$refs.two.number);
			}
		}
	})
</script>
</body>
</html>
```


#### 11.9父子组件的数据传递


##### 父组件如何向子组件传值


父组件通过属性 的形式向子组件传递数据


父组件通过属性的形式向conter这个子组件 传递了一个名字叫count的数据


```html
<div id="id">
		<conter :count="0"></conter>
		<conter :count="1"></conter>
	</div>
```


子组件如何接收


子组件需要接收父组件传递过来的什么内容 这样就可以在子组件模板里使用父组件传递过来的数据了


```html
<script>
//首先创建一个名字为conter的子组件(局部组件)
	var conter={
		props: ['count'],
		template: '<div>{{count}}</div>'
	}
</script>
```


**单向数据流的概念：子组件只能去用父组件传递过来的内容，子组件不能修改父组件传递过来的内容**


如果父组件传递过来的是对象 可能会对其它子组件产生影响


可以在子组件中复制一份父组件传递过来的数据 在data中定义 number接收父组件传过来的数据


```html
<script>
//首先创建一个名字为conter的子组件(局部组件)
	var conter={
		props: ['count'],
		data: function(){
			return{
				number: this.count
			}
		},
		template: '<div @click="btnClick">{{number}}</div>',
		methods:{
			btnClick: function(){
				this.number++
			}
		}
	}
</script>
```


##### 子组件如何向父组件传值


子组件通过事件触发的形式向父组件传值


```html
<script>
var conter={
		props: ['count'],
		data: function(){
			return{
				number: this.count
			}
		},
		template: '<div @click="btnClick">{{number}}</div>',
		methods:{
			btnClick: function(){
				this.number++=this.number+2; 
				this.$emit('inc',2)	//我会告诉父组件 我发生了改变 我新增了2
			}
		}
	}
</script>
```


父组件监听


```html
<div id="id">
		<conter :count="3" @inc="handle"></conter>
		<conter :count="2" @inc="handle"></conter>
		<div>{{total}}</div>
	</div>


<script>
var app = new Vue({
		el:'#id',
		data: {
			total:5
		},
		//因为他是一个局部组件 使用时需要注册
		components: {
			conter: conter
		},

		methods: {
			handle: function(step){
				this.total+=step;
			}
		}
	})
</script>
```


完整代码


```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>父子组件传值</title>
	<script  src="./vue.js" type="text/javascript"></script>
</head>
<body>
	<div id="id">
		<conter :count="3" @inc="handle"></conter>
		<conter :count="2" @inc="handle"></conter>
		<div>{{total}}</div>
	</div>

<script type="text/javascript">
	
	//首先创建一个名字为conter的子组件(局部组件)
	var conter={
		props: ['count'],
		data: function(){
			return{
				number: this.count
			}
		},
		template: '<div @click="btnClick">{{number}}</div>',
		methods:{
			btnClick: function(){
				this.number=this.number+2;
				this.$emit('inc',2)
			}
		}
	}


	var app = new Vue({
		el:'#id',
		data: {
			total:5
		},
		//因为他是一个局部组件 使用时需要注册
		components: {
			conter: conter
		},

		methods: {
			handle: function(step){
				this.total+=step;
			}
		}
	})
</script>
</body>
</html>
```


#### 11.10组件参数校验与非Props特性


子组件接收的参数是数组中的String Number类型


```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>组件参数校验与非props特性</title>
	<script  src="./vue.js" type="text/javascript"></script>
</head>
<body>
	<div id="id">
		<child :content="123"></child>
	</div>

<script type="text/javascript">

	Vue.component("child",{
		props: {
			content: [Number,String]
		},
		template: '<div>{{content}}</div>'
	})

	var app = new Vue({
		el:'#id',
		data: {

		}
	})
</script>
</body>
</html>
```


```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>组件参数校验与非props特性</title>
	<script  src="./vue.js" type="text/javascript"></script>
</head>
<body>
	<div id="id">
		<child content="hello world"></child>
	</div>

<script type="text/javascript">
//required 表示子组件接收content属性 这个属性是必传的
	Vue.component("child",{
		props: {
			content: {
				type:String,
				// required: true,
				// default: 'default value'

				//校验器校验传入的内容必须大于5
				validator: function(value)	{
					return (value.length>5)
				}
			}
		},
		template: '<div>{{content}}</div>'
	})

	var app = new Vue({
		el:'#id',
		data: {

		}
	})
</script>
</body>
</html>
```


非props特性


props特性要求父组件传 子组件要接


1.父组件向子组件传递了一个属性 子组件并没有props那块的内容，子组件并没有声明要接受父组件的内容。


2.如果使用的是非props特性，这个属性会展示在 子组件最外层的这个dom标签的 html属性中
![16.png](https://cdn.nlark.com/yuque/0/2020/png/1534454/1591176939794-4959791e-232f-46c6-a5e6-60295ae96db2.png#align=left&display=inline&height=468&margin=%5Bobject%20Object%5D&name=16.png&originHeight=468&originWidth=774&size=151465&status=done&style=none&width=774)


#### 11.11给组件绑定原生事件


```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>给组件绑定原生事件</title>
	<script  src="./vue.js" type="text/javascript"></script>
</head>
<body>
	<div id="id">
		<!-- 此时监听的是一个自定义的事件   加上native修饰监听原生的点击事件-->
		<child @click.native="handlerClick"></child> 
	</div>

<script type="text/javascript">

	Vue.component('child',{

		template: '<div>Child</div>'
	})

	var app = new Vue({
		el:'#id',
		data: {

		},
		methods: {
			handlerClick: function(){
				alert('click')
			}
		}
	})
</script>
</body>
</html>
```


#### 11.12非父子组件间的传值


复杂的组件之间传值问题


![18.png](https://cdn.nlark.com/yuque/0/2020/png/1534454/1591176961920-81d8185d-a1e6-43a0-bc3c-6cabcd4cf1c4.png#align=left&display=inline&height=291&margin=%5Bobject%20Object%5D&name=18.png&originHeight=291&originWidth=727&size=55545&status=done&style=none&width=727)
解决方法


vuex


发布订阅模式(总线机制)(观察者模式)


兄弟节点


```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>非父子组件间的传值</title>
	<script  src="./vue.js" type="text/javascript"></script>
</head>
<body>
	<div id="id">
		<!-- 要实现将点击dell时将lee也变成dell 同样点击lee时 将dell变成lee -->
		<child content="dell"></child>
		<child content="lee"></child>

	</div>

<script type="text/javascript">

	//在Vue的类上挂载了bus属性
	Vue.prototype.bus = new Vue()
	
	Vue.component('child',{
		data: function(){
			return{
				selfcontent:this.content
			}
		},
		props: {
			content: String
		},
		template: '<div @click="handlerclick">{{selfcontent}}</div>',
		methods: {
			handlerclick: function(){
				//alert(this.content)
				//vue实例的总线向外触发事件 同时携带数据 其它的组件监听它
				this.bus.$emit('change',this.selfcontent)
			}
		},

		mounted: function(){
			var this_ =this
			//监听bus的改变 bus是vue的实例 监听change事件
			this.bus.$on('change',function(msg){
				this_.selfcontent=msg
			})
		}
	})

	var app = new Vue({
		el:'#id',
		data: {

		}
	})
</script>
</body>
</html>
```


#### 11.13在vue中使用插槽


使用一般方法


- 多出了一个div标签 只想显示p标签 template渲染不出来
- 第二个 当content中很多内容时 代码臃肿



```html
<body>
	<div id="id">
		<child content='<p>hello</p>'></child>
	</div>

<script type="text/javascript">

	Vue.component('child',{
		props :['content'],
		template: '<div><p>dell</p><div v-html="this.content"></div></div>'
	})

	var app = new Vue({
		el:'#id',
		data: {

		}
	})
</script>
</body>
```


使用插槽来解决


```html
<body>
	<div id="id">
		<child>
			<p>dell</p>
		</child>
	</div>

<script type="text/javascript">

	Vue.component('child',{
		// 通过插槽可以更方便的向子组件传递dom元素 子组件使用也很简单
		
		template: `<div>
						<p>hello</p> 
						<slot>默认内容</slot>
				   </div>`
	})

	var app = new Vue({
		el:'#id',
		data: {

		}
	})
</script>
</body>
```


##### 具名插槽的使用


bodycontent显示的内容区域由组件决定的 header和footer由外面传递进来的


```html
<body>
	<div id="id">
		<bodycontent>
			<div class="header" slot="header">header</div>
			<div class="footer" slot="footer">footer</div>
		</bodycontent>
	</div>

<script type="text/javascript">

	Vue.component('bodycontent',{
		//bodycontent显示的内容区域由组件决定的 header和footer由外面传递进来的
		
		template: `<div>
						<slot name="header"></slot>
						<div class="content">content</div>
						<slot name="footer"></slot>
				   </div>`
	})

	var app = new Vue({
		el:'#id',
		data: {

		}
	})
</script>
</body>
```


##### 作用域插槽使用


//子组件实现一个功能 循环显示一个列表


作用域插槽必须是template开头和结尾的内容


```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>vue中的作用域插槽</title>
	<script  src="./vue.js" type="text/javascript"></script>
</head>
<body>
	<div id="id">
		<child>
			<template slot-scope="props">
				 <li>{{props.item}}--hello</li>
			</template>
		</child>
	</div>

<script type="text/javascript">

	//子组件实现一个功能 循环显示一个列表
	Vue.component('child',{
		data: function(){
			return{
				list: [1,2,3,4]
			}
		},
		template: `<div>
						<ul>
						<slot v-for="item of list" :item=item></slot>
						</ul>
					</div>`
	})

	var app = new Vue({
		el:'#id',
		data: {

		}
	})
</script>
</body>
</html>
```


#### 11.14动态组件与v-once指令


一般实现切换toggle方法


v-once指令可以有效提高一些静态内容的展示效率


```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>动态组件与v-once指令</title>
	<script  src="./vue.js" type="text/javascript"></script>
</head>
<body>
	<div id="id">
		<child-one v-if="type === 'child-one'"></child-one>
		<child-two v-if="type ==='child-two'"></child-two>
		<button @click="btnClick">change</button>
	</div>

<script type="text/javascript">

	Vue.component('child-one',{

		template: '<div v-once>child-one</div>'
	})

	Vue.component('child-two',{

		template: '<div v-once>child-two</div>'
	})

	var app = new Vue({
		el:'#id',
		data: {
			type: 'child-one'
		},
		methods: {

			btnClick: function(){
			this.type = this.type === 'child-one' ? 'child-two' : 'child-one';
			}
		}
		
	})
</script>
</body>
</html>
```


使用动态组件方法实现


```html
<!-- 根据is里面数据的变化，自动加载不同的组件 -->
<div id="id">
		<component :is="type"></component>
		<button @click="btnClick">change</button>
	</div>
```


### 12.vue中的动画特效


#### 12.1vue中CSS动画原理


transition过渡动画原理
![19.png](https://cdn.nlark.com/yuque/0/2020/png/1534454/1591176995310-151c09fe-ce1c-4a42-bb9f-8ab17cc7930f.png#align=left&display=inline&height=382&margin=%5Bobject%20Object%5D&name=19.png&originHeight=382&originWidth=790&size=112356&status=done&style=none&width=790)


```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>vue中css动画原理</title>
	<script  src="./vue.js" type="text/javascript"></script>
	<style type="text/css">
		.fade-enter{
			opacity: 0;
		}
		.fade-enter-active {
			transition: opacity 3s;
		}
		.fade-leave-to {
			opacity: 0;
		}
		.fade-leave-active {
			transition: opacity 3s;
		}
	</style>
</head>
<body>
	<div id="id">
		<!-- transition包裹的内容会有一个过渡的动画效果 -->
		<transition name="fade">
		<div v-if="show">hello</div>  //用v-show也可以 动态组件也可以
		</transition>

		<button @click="btnClick">change</button>
	</div>

<script type="text/javascript">
	var app = new Vue({
		el:'#id',
		data: {
			show: true
		},
		methods: {
			btnClick: function(){
				this.show = !this.show
			}
		}

	})
</script>
</body>
</html>
```


#### 12.2在vue中使用Animate.css库


```html
<style type="text/css">
		@keyframes bounce-in {
			0% {
				transform: scale(0);
			}
			50% {
				transform: scale(1.5);
			}
			100% {
				transform: scale(1);
			}
		}

		.fade-enter-active {
			transform-origin: left center;
			animation: bounce-in 1s;
		}
		
		.fade-leave-active {
			transform-origin: left center;
			animation: bounce-in 1s reverse;
		}
	</style>
```


如果想自定义fade-leave-active等相关名称


```html
修改以下代码
<style>
active {
			transform-origin: left center;
			animation: bounce-in 1s;
		}
		
		.leave {
			transform-origin: left center;
			animation: bounce-in 1s reverse;
		}
</style>
_________________________________________________
<div id="id">
		<!-- transition包裹的内容会有一个过渡的动画效果 -->
		<transition name="fade" enter-active-class="active" leave-active-class="leave">
		<div v-if="show">hello</div>
		</transition>

		<button @click="btnClick">change</button>
	</div>
```


##### 引入animate.css实现动画效果


```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>在vue中使用Animate.css库</title>
	<script  src="./vue.js" type="text/javascript"></script>
	<link rel="stylesheet" type="text/css" href="./animate.css"/>
	

</head>
<body>
	<div id="id">
		<!-- transition包裹的内容会有一个过渡的动画效果 -->
		<transition name="fade"
		 enter-active-class="animated swing"
		 leave-active-class="animated shake">
		<div v-if="show">hello</div>
		</transition>

		<button @click="btnClick">change</button>
	</div>
 
<script type="text/javascript">
	var app = new Vue({
		el:'#id',
		data: {
			show: true
		},
		methods: {
			btnClick: function(){
				this.show = !this.show
			}
		}

	})
</script>
</body>
</html>
```


#### 12.3在vue中同时使用过渡和动画


##### 第一次想要刷新页面时 就能展示动画效果


```html
<div id="id">
		
		<!-- 第一次想要刷新页面时 就能展示动画效果 -->
		<transition name="fade"
		 appear
		 enter-active-class="animated swing"
		 leave-active-class="animated shake"
		 appear-active-class="animated swing">
		<div v-if="show">hello</div>
		</transition>

		<button @click="btnClick">change</button>
	</div>
```


##### 希望入场动画不仅有css效果 还有过渡动画效果


```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>在vue中同时使用过渡和动画</title>
	<script  src="./vue.js" type="text/javascript"></script>
	<link rel="stylesheet" type="text/css" href="./animate.css"/>

	<style type="text/css">
		.fade-enter,
		.fade-leave-to{
			opacity: 0;
		}

		.fade-enter-active,
		.fade-leave-active{
			transition: opacity 3s;
		}
	</style>
</head>
<body>
	<div id="id">
		
		<!-- 第一次想要刷新页面时 就能展示动画效果 -->
		<!-- 假设我希望入场动画不仅有css效果 还有过渡动画效果 -->
		<!-- =动画时长以transition为准  以3秒作为整个动画执行的时间 type="transition"-->
		<!-- 自定义动画时长  :duration="10000"
			:duration="{enter: 5000, leave: 10000}"
		-->
		<transition
		 :duration="10000"
		 name="fade" 
		 appear
		 enter-active-class="animated swing fade-enter-active"
		 leave-active-class="animated shake fade-leave-active"
		 appear-active-class="animated swing">
		<div v-if="show">hello</div>
		</transition>

		<button @click="btnClick">change</button>
	</div>
 
<script type="text/javascript">
	var app = new Vue({
		el:'#id',
		data: {
			show: true
		},
		methods: {
			btnClick: function(){
				this.show = !this.show
			}
		}

	})
</script>
</body>
</html>
```


#### 12.4vue中的js动画与velocity.js结合


##### js动画钩子


```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>vue中的js动画与velocity.js结合</title>
	<script  src="./vue.js" type="text/javascript"></script>
	<link rel="stylesheet" type="text/css" href="./animate.css"/>
	

</head>
<body>
	<div id="id">
		<!-- transition包裹的内容会有一个过渡的动画效果 -->
		<transition name="fade"
		@before-enter="handleBeforeEnter"
		@enter="handleEnter"
		@after-enter="handleAfterEnter"
		@before-leave="handleBeforeleave"
		@leave="handleLeave"
		@after-leave="handleAfterLeave"
		
		>
		<div v-if="show">hello</div>
		</transition>

		<button @click="btnClick">change</button>
	</div>
 
<script type="text/javascript">
	var app = new Vue({
		el:'#id',
		data: {
			show: true
		},
		methods: {
			btnClick: function(){
				this.show = !this.show
			},

			// el就是指 动画包裹的div标签
			handleBeforeEnter: function(el){
				el.style.color = 'red'
			},

			handleEnter: function(el, done){
				setTimeout(() => {
					el.style.color='green'
				},2000)
// 4秒的时候才让动画结束 使显示效果明显
				setTimeout(() => {
					done()
				},4000)
			},

			handleAfterEnter: function(el){
				el.style.color = "#000"
			}
		}

	})
</script>
</body>
</html>
```


##### js动画库velocity.js


```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>vue中的js动画与velocity.js结合</title>
	<script  src="./vue.js" type="text/javascript"></script>
	<script type="text/javascript" src="./velocity.js"></script>
	

</head>
<body>
	<div id="id">
		<!-- transition包裹的内容会有一个过渡的动画效果 -->
		<transition name="fade"
		@before-enter="handleBeforeEnter"
		@enter="handleEnter"
		@after-enter="handleAfterEnter"
		@before-leave="handleBeforeleave"
		@leave="handleLeave"
		@after-leave="handleAfterLeave"
		
		>
		<div v-if="show">hello</div>
		</transition>

		<button @click="btnClick">change</button>
	</div>
 
<script type="text/javascript">
	var app = new Vue({
		el:'#id',
		data: {
			show: true
		},
		methods: {
			btnClick: function(){
				this.show = !this.show
			},

			// el就是指 动画包裹的div标签
			handleBeforeEnter: function(el){
				el.style.opacity = 0;
			},

			handleEnter: function(el, done){
				// 对el实现一个动画 透明度变成1 时间为1000ms
				Velocity(el,{opacity: 1},
				 {duration: 1000,complete: done
				 })
			},

			handleAfterEnter: function(el){
				alert("动画结束")
			}
		}

	})
</script>
</body>
</html>
```


#### 12.5vue中多个元素或组件的过渡


##### 多个元素的过渡效果


```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>vue中多个元素或组件的过渡</title>
	<script  src="./vue.js" type="text/javascript"></script>
	<style type="text/css">
		.v-enter,.v-leave-to{
			opacity: 0;
		}
		.v-enter-active,.v-leave-active{
			transition: opacity 3s;
		}
	</style>
</head>
<body>
	<div id="id">
		<!-- in-out要显示的元素先进入 要隐藏的元素才会隐藏 -->
		<!-- out-in 要隐藏的元素先隐藏 要显示的元素后显示 -->
		<transition mode="in-out">
			<!-- transition标签里面包裹的是两个元素 
				vue在切换这两个元素时 会尽量的复用dom
				加上key
			-->
			<div v-if="show" key="hello">hello</div>
			<div v-else key="bye">bye</div>
		</transition>
		<button @click="btnclick">change</button>
	</div>

<script type="text/javascript">
	var app = new Vue({
		el:'#id',
		data: {
			show: true
		},
		methods: {
			btnclick: function(){
				this.show=!this.show
			}
		}
	})
</script>
</body>
</html>
```


##### 多个组件的过渡效果


实现方法一


```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>vue中多个元素或组件的过渡</title>
	<script  src="./vue.js" type="text/javascript"></script>
	<style type="text/css">
		.v-enter,.v-leave-to{
			opacity: 0;
		}
		.v-enter-active,.v-leave-active{
			transition: opacity 3s;
		}
	</style>
</head>
<body>
	<div id="id">
		<!-- in-out要显示的元素先进入 要隐藏的元素才会隐藏 -->
		<!-- out-in 要隐藏的元素先隐藏 要显示的元素后显示 -->
		<transition mode="in-out">
			<child v-if="show"></child>
			<child-one v-else></child-one>
		</transition>
		<button @click="btnclick">change</button>
	</div>

<script type="text/javascript">

	Vue.component('child',{
		template: '<div>child</div>'
	})
	
	Vue.component('child-one',{
		template: '<div>child-one</div>'
	})

	var app = new Vue({
		el:'#id',
		data: {
			show: true
		},
		methods: {
			btnclick: function(){
				this.show=!this.show
			}
		}
	})
</script>
</body>
</html>
```


实现方法二 使用动态组件显示


```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>vue中多个元素或组件的过渡</title>
	<script  src="./vue.js" type="text/javascript"></script>
	<style type="text/css">
		.v-enter,.v-leave-to{
			opacity: 0;
		}
		.v-enter-active,.v-leave-active{
			transition: opacity 3s;
		}
	</style>
</head>
<body>
	<div id="id">
		<!-- in-out要显示的元素先进入 要隐藏的元素才会隐藏 -->
		<!-- out-in 要隐藏的元素先隐藏 要显示的元素后显示 -->
		<transition mode="in-out">
			
			<component :is="type"></component>

		</transition>
		<button @click="btnclick">change</button>
	</div>

<script type="text/javascript">

	Vue.component('child',{
		template: '<div>child</div>'
	})
	
	Vue.component('child-one',{
		template: '<div>child-one</div>'
	})

	var app = new Vue({
		el:'#id',
		data: {
			type: 'child'
		},
		methods: {
			btnclick: function(){
				this.type= this.type === 'child' ? 'child-one' : 'child'
			}
		}
	})
</script>
</body>
</html>
```


#### 12.6vue中的列表过渡


- 先有一个列表项  列表循环显示一个数组中的内容



```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>vue中的列表过渡</title>
	<!-- 有一个列表项  列表循环显示一个数组中的内容-->
	<script  src="./vue.js" type="text/javascript"></script>
</head>
<body>
	<div id="id">
		<div v-for="item of list" :key="item.id">
			{{item.title}}
		</div>
		<button @click="handleBtnClick">add</button>
	</div>

<script type="text/javascript">
	var count = 0;
	var app = new Vue({
		el:'#id',
		data: {
			list:[]
		},
		methods: {
			handleBtnClick: function(){
				this.list.push({
				id: count++,
				title: 'hello world'
			})
				
			}
		
		}
	})
</script>
</body>
</html>
```


代码实现


```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>vue中的列表过渡</title>
	<!-- 有一个列表项  列表循环显示一个数组中的内容-->
	<script  src="./vue.js" type="text/javascript"></script>
	<style>
		.v-enter,.v-leave-to{
			opacity: 0;
		}
		.v-enter-active,.v-leave-active{
			transition: opacity 2s;
		}
	</style>
</head>
<body>
	<div id="id">
		<transition-group>
		<div v-for="item of list" :key="item.id">
			{{item.title}}
		</div>
		</transition-group>
		<button @click="handleBtnClick">add</button>
	</div>

<script type="text/javascript">
	var count = 0;
	var app = new Vue({
		el:'#id',
		data: {
			list:[]
		},
		methods: {
			handleBtnClick: function(){
				this.list.push({
				id: count++,
				title: 'hello world'
			})

			}
		
		}
	})
</script>
</body>
</html>
```


相当于在每一个div外层添加了
![20.png](https://cdn.nlark.com/yuque/0/2020/png/1534454/1591177033024-0613e8b0-4724-491e-b885-edce5fb72533.png#align=left&display=inline&height=394&margin=%5Bobject%20Object%5D&name=20.png&originHeight=394&originWidth=677&size=149491&status=done&style=none&width=677)


#### 12.7vue中的动画封装


```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>vue中的动画封装</title>
	<script  src="./vue.js" type="text/javascript"></script>
	
</head>
<body>
	<div id="id">
		<fade :show="show">
		<div >hello</div>
		</fade>

		<fade :show="show">
		<h1>hello world</h1>
		</fade>
		
		<button @click="handlerBtnClick">change</button>
	
	</div>

<script type="text/javascript">

	Vue.component('fade',{
		props: ['show'],
		template: `<transition
		@before-enter="handlerBeforeEnter"
		@enter="handlerEnter"
		><slot v-if="show"></slot></transition>`,

		methods: {
			handlerBeforeEnter: function(el){
				el.style.color= 'red'
			},
			handlerEnter: function(el,done){
				setTimeout(() =>{
					el.style.color = 'green'
					done()
				},2000)
			}
		}
	})

	var app = new Vue({
		el:'#id',
		data: {
			show: false
		},
		methods: {
			handlerBtnClick: function(){
			this.show=!this.show
		}
		}
	})
</script>
</body>
</html>
```


### 13.项目环境准备


##### 下载node.js


```
node -v
npm -v
注册码云账号 
本地安装git
输入 git --version

打开git bash 输入生成ssh公钥的一些命令
ssh-keygen -t rsa -C "1294905355@qq.com"
cat ~/.ssh/id_rsa.pub
生成的公钥
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCz79iAzuJATR9i0iiYElaDznbnCI2qSwjkxNjllC45Urjh9lpR6lv2toW78EJLZqMVRmXNRM3YBjZwBqyd0CXXNAf50/Q7wRLvBe3v9A+d8JPtb3lYQth6osMLYDNR5L7lUwMV138Xvsb6gse++qpQSjl0S/jqFo1u+tqJsTByyEM3vIVXcWOfhsVBsk3LKvBAtC6GCrkWIZP4HFdAL2NC3uRffUCigAZTx0aSN3YWGhlgvtBbFOLeIri/E7s1tRVqO8PKRh+RtEBt4gxXS8CmFvB+QWOGP/ScxeTV9wNtHtMyjw/6l39P1PsD4VkLNZtSP0DZ6VVHMfuRfYhr5zD/isK7DDiV+RPlwgbtNBldcbrJj5xXlnJaxKqo6N6rSGSJCKgXjzBHkAXtIXAhw90TYurj15AapiCGH3n7rffWuohsvj//IGnhuvKLLojRQP7asZ3X3TBVJBaCh1tk9CWEv48K6PjGdX41uOabKGFfpdiXfNAjD1DEkIq/6hflF+8= 1294905355@qq.com
添加公钥

然后将项目克隆到本地
 git clone git@gitee.com:chqyys1234/travle.git

在travel中创建一个vue项目
打开终端
npm install --global vue-cli
```
![21.png](https://cdn.nlark.com/yuque/0/2020/png/1534454/1591177058888-31848bb1-4a9f-4c31-9c8e-8d3365f61ee6.png#align=left&display=inline&height=309&margin=%5Bobject%20Object%5D&name=21.png&originHeight=309&originWidth=789&size=10028&status=done&style=none&width=789)


cd travle


npm run dev 自动化打包


[http://localhost:8086](http://localhost:8086)


```
打开 git bash
进入到travle目录下
git status
git add .
git commit -m 'project initialized'
git push
```


![22.png](https://cdn.nlark.com/yuque/0/2020/png/1534454/1591177108064-f375ee70-ae15-44cd-b8e6-d56a4dc77378.png#align=left&display=inline&height=668&margin=%5Bobject%20Object%5D&name=22.png&originHeight=668&originWidth=1325&size=73362&status=done&style=none&width=1325)
### 14.项目代码结构
![23.png](https://cdn.nlark.com/yuque/0/2020/png/1534454/1591177136197-0d36804a-65ba-4cb0-8c9f-357a70e43c6a.png#align=left&display=inline&height=437&margin=%5Bobject%20Object%5D&name=23.png&originHeight=437&originWidth=626&size=21967&status=done&style=none&width=626)


```
package.json
表示在开发该项目时 第三方模块的依赖

package-lock.json
package的锁文件 可以帮助我们去确定 安装的第三方包具体的版本

index.html
项目默认的首页模板文件

postcssrc.js
是对postcss的一个配置项

gitignore
当我们使用git的时候 希望把代码上传到线上 有一些特殊的文件不想上传到git上去

eslintrc.js
配置了一些代码的规范

eslintignore
这些文件夹 的文件语法 不会被检测

editorconfig
配置了一些编辑器里面的语法

babelrc
语法转换 转换成浏览器能够执行编译的代码

static目录
放一些静态资源

node_modules
项目依赖的一些第三方的node包

src目录
main.js 项目入口文件
App.vue 项目最原始的根组件
router 路由
components 组件
assets 用到的图片

config目录 项目的配置文件
index.js 基础的配置信息
dev.env.js 开发环境的配置信息
prod.env.js 线上环境配置信息

build目录
webpack的一些内容 webpack配置项
```


### 15.单文件组件以及vue中的路由


#### 15.1main.js


main.js会使用app组件 退出终端时按两次ctrl+c退出npm


```
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App: App }, //定义一个局部组件的使用 es6语法
  template: '<App/>'	//把App局部组件渲染出来
})
```

---

#### 15.2App.vue


当一个文件以vue结尾，这种文件叫做单文件组件。放的是vue的组件 App.vue


```
以前的样式
Vue.component('fade',{
	template: ''
})
```


现在组件的模板放在template之间


```html
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>
```


组件的逻辑


```html
<script>
export default {
  name: 'App'
}
</script>
```


组件的css样式


```html
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```


#### 15.3路由


路由就是根据网址的不同，返回不同的内容给用户


显示的是当前路由地址所对应的内容


路由的配置都放在router文件夹的index.js中


App.vue是整个组件的根内容


##### 路由开发逻辑


### 16.多页面应用与单页面应用


#### 多页面应用


- 页面跳转都会返回一个新的html页面
- 首屏时间快 seo效果好 页面切换慢



#### 单页面应用


- 页面跳转  并不加载新的html文件 而是 js动态删除当前页面内容，再去渲染新的页面的结构 不需要做html页面的请求
- 页面切换快 首屏时间慢



### 17.项目代码初始化


1.在index.html加入以下代码


```html
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
```


2.引入reset.css 把不同手机的初始化样式统一


新建src/assets/styles目录


在main.js中引用以下


应用reset.css文件


```html
import './assets/styles/reset.css'
```


3.1像素边框解决方案 border.css文件


```
import './assets/styles/border.css'
```


4.移动端300ms点击延迟的问题


```
在终端中引入 fastclick库
npm install fastclick --save
npm run start
```


```
import fastclick from 'fastclick'
fastclick.attach(document.body)
```


5.管理iconfont


```
注册iconfont网站
新建项目
```
![24.png](https://cdn.nlark.com/yuque/0/2020/png/1534454/1591177168650-0485e825-56d4-4f43-baa3-d2b4df311017.png#align=left&display=inline&height=422&margin=%5Bobject%20Object%5D&name=24.png&originHeight=422&originWidth=1032&size=46468&status=done&style=none&width=1032)


##### 将修改的代码上传到git


```
在bash中
git add . 把本地的修改提交本地的一个git缓冲区
git commit -m 'project init' 把本地缓冲区的内容提交到本地的仓库 留一条信息 这次的操作是 project init
git push 把本机的代码推到线上去
```


### 18.首页header区域开发


```
打开cmd终端
npm install stylus --save
npm install stylus-loader --save  
npm run start
```


在home目录下新建components目录 新建header.vue


```
<!-- 1rem =html font-size =50px  86/100-->
```


#### 18.1header.vue的开发


```html
<template>
	<div class="header">
		<div class="header-left">返回</div>
		<div class="header-input">输入城市/景点/游玩主题</div>
		<div class="header-right">城市</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		name: 'HomeHeader'
	}
</script>

<style lang="stylus" scoped>
.header
	display: flex
	line-height: .86rem
	background: #00bcd4
	color:#fff
.header-left
	width: .64rem
	float: left
.header-input
	flex: 1
	height: .64rem
	line-height: .64rem
	margin-top: .12rem
	margin-left: .2rem
	background: #fff
	border-radius: .1rem
	color: #ccc
	
.header-right
	width: 1.24rem
	float: right
	text-align: center
   
</style>
```


![25.png](https://cdn.nlark.com/yuque/0/2020/png/1534454/1591177197264-730e3300-5330-47a7-a3f7-e0a98ac61ac9.png#align=left&display=inline&height=364&margin=%5Bobject%20Object%5D&name=25.png&originHeight=364&originWidth=381&size=7355&status=done&style=none&width=381)
#### 18.2iconfont的使用和代码优化


进入iconfont选择图标


将代码下载到本地 将  iconfont.css, iconfont.eot, iconfont.svg, iconfont.ttf, iconfont.woff 复制到项目中


**样式里面引入样式需要用[@import ](/import ) **


```html
@import '../../../assets/styles/varibles.styl'
另一种写法
@import '~@/assets/styles/varibles.styl' 其中@代表src目录 在css中引入其他的css
```


##### 因为 styles目录使用频繁 给styles目录起一个别名


打开webpack.base.conf.js文件


```
 resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'styles': resolve('src/assets/styles'),
    } 
  },
```


新建了一个varibles.styl 将重复的css样式放进去


```html
$bgColor = #00bcd4

.header
	display: flex
	line-height: .86rem
	background: $bgColor
	color:#fff
```


head.vue代码如下


```html
<template>
	<div class="header">
		<div class="header-left">
			<div class="iconfont back-icon">&#xe624;</div>
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe632;</span>
		输入城市/景点/游玩主题</div>
		<div class="header-right">
			城市
			<span class="iconfont arrow-icon">&#xe64a;</span>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		name: 'HomeHeader'
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'

.header
	display: flex
	line-height: .86rem
	background: $bgColor
	color:#fff
.header-left
	width: .64rem
	float: left
	.back-icon
		text-align: center
		font-size: .4rem
.header-input
	flex: 1
	height: .64rem
	line-height: .64rem
	margin-top: .12rem
	margin-left: .2rem
	padding-left: .2rem
	background: #fff
	border-radius: .1rem
	color: #ccc
	
.header-right
	width: 1.24rem
	float: right
	text-align: center
    .arrow-icon
	font-size: .24rem
	margin-left: -.04rem
    	
</style>
```


### 19.首页轮播图开发


创建git分支


```
新建分支 index-swiper
将线上分支拉到本地 git pull
本地切换分支 git checkout index-swiper
git status
npm run start
```


##### 第三方轮播插件


```
进入cmd
安装插件npm install swiper vue-awesome-swiper@2.6.7 --save
如何在全局使用插件  import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

通过Vue.use使用插件
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
```


在components目录下新建Swiper.vue文件


##### 在vue文件中使用


```html
<swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>I'm Slide 1</swiper-slide>
    <swiper-slide>I'm Slide 2</swiper-slide>
    <swiper-slide>I'm Slide 3</swiper-slide>
    <swiper-slide>I'm Slide 4</swiper-slide>
    <swiper-slide>I'm Slide 5</swiper-slide>
    <swiper-slide>I'm Slide 6</swiper-slide>
    <swiper-slide>I'm Slide 7</swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
```


调整图片大小


```html
height: 0
padding-bottom: 30%
overflow: hidden
```


样式进行穿透


```html
.wrapper >>> .swiper-pagination-bullet-active
		background: red !important
```


循环输出轮播图


```html
swiperlist: [
					{
						id: '0001',
						imgurl: 'https://img1.qunarzz.com/qs/1912/50/067a6d82e1ca0b02.jpg'
					},{
						id: '0002',
						imgurl: 'https://img1.qunarzz.com/qs/2003/18/8013e794c150e502.jpg'
					},{
						id: '0003',
						imgurl: 'https://img1.qunarzz.com/qs/1909/c5/649aae0f58224002.jpg'
					}
				]
<swiper-slide v-for="img of swiperlist">
    	<img class="swiper-img" :src="img.imgurl"/>
    </swiper-slide>
```


编写的swiper.vue


```html
<template>
	<div class="wrapper">
	<swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="img of swiperlist" :key="img.id">
    	<img class="swiper-img" :src="img.imgurl"/>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination">
    	
    </div>
  </swiper>
  </div>
</template>

<script type="text/javascript">
	export default{
		name: 'HomeSwiper',
		data: function(){
			return{
				swiperOption: {
					pagination : '.swiper-pagination',
					loop: true
				},
				swiperlist: [
					{
						id: '0001',
						imgurl: 'https://img1.qunarzz.com/qs/1912/50/067a6d82e1ca0b02.jpg'
					},{
						id: '0002',
						imgurl: 'https://img1.qunarzz.com/qs/2003/18/8013e794c150e502.jpg'
					},{
						id: '0003',
						imgurl: 'https://img1.qunarzz.com/qs/1909/c5/649aae0f58224002.jpg'
					}
				]
			}
		}
	}
</script>

<style lang="stylus" scoped>

.wrapper >>> .swiper-pagination-bullet-active
		background: #fff
.wrapper
	width: 100%
	height: 0
	padding-bottom: 55%
	overflow: hidden
	background: #eee
	.swiper-img
		width:100%
</style>
```


把index-swiper分支上的内容合并到master分支上


```
git checkout master 切换到master分支
git merge origin/index-swiper
git push
```


### 20.图标区域页面布局


```
新建分支index.icons
bash
git pull 将新分支拉到本地
git checkout index-icons 切换分支
```


在components中新建一个icons.vue


```html
<template>
	<div class="icons">
		<div class="icon">
			<div class="icon-img">
			<img  class='icon-imgcontent' src="//s.qunarzz.com/homenode/images/touchheader/piao.png"/>
			</div>
			<p class="icon-desc">热门景点</p>
		</div>
		<div class="icon">
		</div>
		<div class="icon">
		</div>
		<div class="icon">
		</div>
		<div class="icon">
		</div>
		<div class="icon">
		</div>
		<div class="icon">
		</div>
		<div class="icon">
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name: 'HomeIcons'
	}
</script>


<style lang="stylus" scoped="">
@import '~styles/varibles.styl'
	.icons
		height: 0
		padding-bottom:50%
		overflow: hidden
		
		.icon
			position: relative
			overflow: hidden
			width: 25%
			float: left
			height: 0
			padding-bottom:25%
			
			.icon-img
				position: absolute
				top: 0
				left: 0
				right: 0
				bottom: .44rem
				box-sizing: border-box
				padding: .1rem
				
				.icon-imgcontent
					display: block
					margin: 0 auto
					height:100%
			.icon-desc
				position: absolute
				left: 0
				right: 0
				bottom: 0
				height: .44rem
				line-height: .44rem
				text-align: center
				color: $darkTextColor
</style>
```


实现将图标循环输出 而且当图标超过8个时可以左右拖动 实现轮播


#### 20.1图标区域逻辑实现


让数据循环输出


如果图片有9个 既可以实现轮播效果


可以下载扩展程序 vue.js devtool


```html
<template>
	<div class="icons">
		<swiper>
		<swiper-slide v-for="(page,index) of pages" :key="index">
		<div class="icon" v-for="item of page" :key="item.id">
			<div class="icon-img">
				<img  class='icon-imgcontent' :src='item.imgUrl' />
			</div>
			<p class="icon-desc">{{item.desc}}</p>
		</div>
		</swiper-slide>
		</swiper>
	</div>
</template>
<script type="text/javascript">
	export default{
		name: 'HomeIcons',
		data() {
			return {
				iconList: [
				{
					id: '0001',
					imgUrl: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
					desc: '景点门票'
				},
				{
					id: '0002',
					imgUrl: '//s.qunarzz.com/homenode/images/touchheader/package.png',
					desc: '度假景点'
				},
				{
					id: '0003',
					imgUrl: '//s.qunarzz.com/homenode/images/touchheader/flight.png',
					desc: '飞行机票'
				},
				{
					id: '0004',
					imgUrl: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
					desc: '旅馆酒店'
				},
				{
					id: '0005',
					imgUrl: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
					desc: '景点门票'
				},
				{
					id: '0006',
					imgUrl: '//s.qunarzz.com/homenode/images/touchheader/package.png',
					desc: '度假景点'
				},
				{
					id: '0007',
					imgUrl: '//s.qunarzz.com/homenode/images/touchheader/flight.png',
					desc: '飞行机票'
				},
				{
					id: '0008',
					imgUrl: '//s.qunarzz.com/homenode/images/touchheader/hotel.png',
					desc: '旅馆酒店'
				},
				{
					id: '0009',
					imgUrl: '//s.qunarzz.com/homenode/images/touchheader/train.png',
					desc: '火车机票'
				}
					]
			}
		},
		computed: {
			pages (){
				const pages = []
				this.iconList.forEach((item,index) => {
					const page = Math.floor(index / 8)
					if(!pages[page]){
						pages[page]=[]
					}
					pages[page].push(item)
				})
				return pages
			}
		}
	}
</script>


<style lang="stylus" scoped="">
@import '~styles/varibles.styl'
	.icons
		height: 0
		padding-bottom:50%
		overflow: hidden
		
	.icon
		position: relative
		overflow: hidden
		width: 25%
		float: left
		height: 0
		padding-bottom:25%
			
		.icon-img
			position: absolute
			top: 0
			left: 0
			right: 0
			bottom: .44rem
			box-sizing: border-box
			padding: .1rem
				
			.icon-imgcontent
				display: block
				margin: 0 auto
				height:100%
		.icon-desc
			position: absolute
			left: 0
			right: 0
			bottom: 0
			height: .44rem
			line-height: .44rem
			text-align: center
			color: $darkTextColor
</style>
```


如果p标签中的字数过多 希望实现...的效果


在styles中新建一个mixins.styl文件 封装这些代码


```
ellipsis()
	overflow: hidden
	white-space: nowrap
	text-overflow: ellipsis
```


##### 提交分支


```
git add .
git commit -m 'add icons'
git push
git checkout master
git merge origin/index-icons
git push
```


### 21.推荐组件开发


```
新建分支index-recommend
git pull
git checkout index-recommend
git status 
npm run start
```


```html
创建Recommend.vue

<template>
	<div>
	<div class="recommend-title">首页推荐</div>
	<ul>
		<li class="item border-bottom" v-for="item of recommendList"
		:key="item.id">
			<img :src="item.imgUrl" class="item-img"/>
			<div class="item-info">
			<p class="item-title">{{item.title}}</p>
			<p class="item-desc">{{item.desc}}</p>
			<button class="item-button">查看详情</button>
			</div>
		</li>
	</ul>
	</div>
</template>
<script type="text/javascript">
	export default{
		name: 'HomeRecommend',
		data() {
			return {
				recommendList: [
				{
					id: '0001',
					imgUrl:'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg',
					title: '故宫',
					desc: '东方宫殿建筑代表，世界宫殿建筑典范'
				},
				{
					id: '0002',
					imgUrl:'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg',
					title: '故宫',
					desc: '东方宫殿建筑代表，世界宫殿建筑典范'
				},
				{
					id: '0003',
					imgUrl:'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg',
					title: '故宫',
					desc: '东方宫殿建筑代表，世界宫殿建筑典范'
				}
			]
			}
		}
	}
</script>

<style lang="stylus" scoped="">
	@import '~styles/mixins.styl'
	.recommend-title
		margin-top: .2rem
		line-height: .8rem
		background: #eee
		text-indent: .2rem
	.item
		overflow: hidden
		height: 1.9rem
		display: flex
		
		.item-img
			width: 1.7rem
			height: 1.7rem
			padding: .1rem
		.item-info
			flex: 1
			padding: .1rem
			min-width: 0
			.item-title
				line-height: .54rem
				font-size: .32rem
				ellipsis()
			.item-desc
				line-height: .4rem
				color: #ccc
				ellipsis()
			.item-button
				line-height: .44rem
				margin-top: .16rem
				background: #ff9300
				padding: 0 .2rem
				border-radius: .06rem
				color: #fff
				
</style>
```


### 22.周末游组件开发


创建weekend.vue组件


```html
<template>
	<div>
	<div class="recommend-title">周末去哪儿</div>
	<ul>
		<li class="border-bottom" v-for="item of recommendList"
		:key="item.id">
			<div class="item-img-wrapper">
			<img :src="item.imgUrl" class="item-img"/>
			</div>

			<div class="item-info">
			<p class="item-title">{{item.title}}</p>
			<p class="item-desc">{{item.desc}}</p>
			</div>
		</li>
	</ul>
	</div>
</template>
<script type="text/javascript">
	export default{
		name: 'HomeWeekend',
		data() {
			return {
				recommendList: [
				{
					id: '0001',
					imgUrl:'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg',
					title: '故宫',
					desc: '东方宫殿建筑代表，世界宫殿建筑典范'
				},
				{
					id: '0002',
					imgUrl:'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg',
					title: '故宫',
					desc: '东方宫殿建筑代表，世界宫殿建筑典范'
				},
				{
					id: '0003',
					imgUrl:'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg',
					title: '故宫',
					desc: '东方宫殿建筑代表，世界宫殿建筑典范'
				}
			]
			}
		}
	}
</script>

<style lang="stylus" scoped="">
	@import '~styles/mixins.styl'
	.recommend-title
		line-height: .8rem
		background: #eee
		text-indent: .2rem
	.item-img-wrapper
		overflow: hidden
		height: 0
		padding-bottom: 33.9%
		.item-img
			width: 100%
	.item-info
		padding: .1rem
		.item-title
			line-height: .54rem
			font-size: .32rem
			ellipsis()
		.item-desc
			line-height: .4rem
			color: #ccc
			ellipsis()
				
</style>
```


```
提交代码
git add .
git commit -m 'add recommend'
git push
```


### 23.Ajax获取首页数据


```
创建新分支 index-ajax
git oull
git checkout index-ajax
git branch
将recommend代码合并到主分支
git merge index-recommend
npm install axios --save
npm run start
```


将静态文件放在static/mock下 并且不上传到git上


```
在gitignore中
static/mock
```


```javascript
对api/.json文件的请求转发到static目录的mock文件夹下

 config/index.js文件
 proxyTable: {
        '/api': {
            target: 'http://localhost:8086',
            pathRewrite: {
                '^/api': '/static/mock'
            }
        }
    },
        
修改配置文件后重启服务器 npm run start
```


将源码中index.json的内容复制到我们创建的index.json中


#### 23.1如何把ajax获取的到的数据传给每个子组件


##### 首页父子组件数据传递


```
父组件向子组件传值
data() {
		return{
			city: ''
		}
	},
<home-header :city="city"></home-header>

子组件接收
export default{
		name: 'HomeHeader',
		props: {
			city: String
		}

	}
```


```html
让轮播图不要自动滚动
在icons.vue中
<swiper :options="swiperOption">

data(){
			return{
				swiperOption: {
					autoplay: false
				}
			}
		},
```


修改了 Home.vue weekend.vue Recommend.vue Swiper.vue Icons.vue


```
将代码提交到git上
git add .
git commit -m 'index-finish'
git push

git checkout master
git merge index-ajax
git push
```


### 24.列表页面开发


#### 24.1城市选择页面路由配置


```
git pull
git checkout city-router
npm run dev


写完代码后提交
git add .
git commit -m 'city router'
git push
git checkout master
git merge city-router
git push
```


```vue
点击北京时 进行页面跳转 header.vue
<router-link to='/city'>
		<div class="header-right">
			北京
			<span class="iconfont arrow-icon">&#xe64a;</span>
		</div>
	</router-link>
```


在pages下新建city目录，创建City.vue


在pages/city/新建components目录/Header.vue


另外可以把代码中的行高等 定义到varibles.styl中


```vue
City.vue代码
<template>
	<div>
		<city-header></city-header>
	</div>
</template>

<script>
import CityHeader from './components/Header'
	export default{
		name: 'City',
		components:{
			CityHeader: CityHeader
		}
	}
</script>

<style lang="stylus" scoped="">
	
</style>
```


```vue
Header.vue代码
<template>
	<div class="header">
		城市选择
		<router-link to="/">
		<div class="iconfont header-back">&#xe624;</div>
		</router-link>
	</div>
</template>

<script>
	export default{
		name: 'CityHeader'
	}
</script>

<style lang="stylus" scoped="">
@import '~styles/varibles.styl'
	.header
		position: relative
		overflow: hidden
		height: .86rem
		line-height: .86rem
		text-align: center
		color: #fff
		background: $bgColor
		font-size: .32rem
		.header-back
			position: absolute
			top: 0
			left: 0
			width: .64rem
			text-align: center
			font-size: .4rem
			color: #fff
</style>
```


#### 24.2搜索框的布局


```
git pull
git checkout city-search
npm run dev

git add .
git commit -m 'add search to city'
git push
git checkout master
git merge city-search
git push
```


```vue
Search.vue
<template>
	<div class="search">
	<input class="search_input" type="text" placeholder="输入城市名或拼音" />
	</div>
</template>

<script>
	export default{
		name: 'CitySearch'
	}
</script>

<style lang="stylus" scoped="">
@import '~styles/varibles.styl'
	.search
		height: .72rem
		padding: 0 .1rem
		background: $bgColor
		.search_input
			box-sizing: border-box
			width: 100%
			height: .62rem
			padding: 0 .1rem
			line-height: .62rem
			text-align: center
			border-radius: .06rem
			color: #666
</style>
```


#### 24.3列表布局


```
git pull
git checkout city-list
npm run dev

git add .
git commit -m 'finish city css'
git push
git checkout master
git merge city-list
git push
```


```vue
List.vue代码
<template>
	<div class="list">
		<div class="area">
			<div class="title border-topbottom">当前城市</div>
			<div class="button-list">
				<div class="button-wrapper">
				<div class="button">北京</div>
				</div>
			</div>
		</div>
		<div class="area">
			<div class="title border-topbottom">热门城市</div>
			<div class="button-list">
				<div class="button-wrapper">
				<div class="button">北京</div>
				</div>
				<div class="button-wrapper">
				<div class="button">北京</div>
				</div>
				<div class="button-wrapper">
				<div class="button">北京</div>
				</div>
				<div class="button-wrapper">
				<div class="button">北京</div>
				</div>
			</div>
		</div>
		<div class="area">
			<div class="title border-topbottom">A</div>
			<div class="item-list">
				<div class="item border-bottom">阿拉尔</div>
				<div class="item border-bottom">阿拉尔</div>
				<div class="item border-bottom">阿拉尔</div>
				<div class="item border-bottom">阿拉尔</div>
				<div class="item border-bottom">阿拉尔</div>
			</div>
		</div>
		<div class="area">
			<div class="title border-topbottom">A</div>
			<div class="item-list">
				<div class="item border-bottom">阿拉尔</div>
				<div class="item border-bottom">阿拉尔</div>
				<div class="item border-bottom">阿拉尔</div>
				<div class="item border-bottom">阿拉尔</div>
				<div class="item border-bottom">阿拉尔</div>
			</div>
		</div>
		<div class="area">
			<div class="title border-topbottom">A</div>
			<div class="item-list">
				<div class="item border-bottom">阿拉尔</div>
				<div class="item border-bottom">阿拉尔</div>
				<div class="item border-bottom">阿拉尔</div>
				<div class="item border-bottom">阿拉尔</div>
				<div class="item border-bottom">阿拉尔</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'CityList'
	}
</script>

<style lang="stylus" scoped="">
@import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem	
</style>
```


#### 24.4Better-scroll的使用及字母表布局


[https://github.com/ustbhuangyi/better-scroll](https://github.com/ustbhuangyi/better-scroll)


```
进入终端
npm install better-scroll --save
npm run start
```


ref="wrapper"可以帮助我们获取dom


mounted(){}会在页面dom挂载完毕之后执行


```vue
<div class="list" ref="wrapper">
export default{
		name: 'CityList',
		mounted (){
			this.scroll= new Bscroll(this.$refs.wrapper)
		}
```


```vue
Alphabet.vue 字母表布局
<template>
	<ul class="list">
		<li class="item">A</li>
		<li class="item">A</li>
		<li class="item">A</li>
		<li class="item">A</li>
		<li class="item">A</li>
	</ul>
</template>

<script>
	export default{
		name: 'CityAlphabet'
	}
</script>

<style lang="stylus" scoped="">
@import '~styles/varibles.styl'
.list
	display: flex
	flex-direction: column
	justify-content: center
	position: absolute
	right: 0
	bottom: 0
	top: 1.58rem
	width: .4rem
	
	.item
		line-height: .4rem
		text-align: center
		color: $bgColor
</style>
```


#### 24.5页面的动态数据渲染


```
创建新分支 city-ajax
git pull
git checkout city-ajax

git add .
git commit -m 'ajax city'
git push
git checkout master
git merge city-ajax
git push
```


拷贝city.json


```vue
List.vue
<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper">
					<div class="button">北京</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<div class="button-wrapper" v-for="item of hot" :key="item.id">
					<div class="button">{{item.name}}</div>
					</div>
				</div>
			</div>
			<div class="area" v-for="(item, key) of cities" :key="key">
				<div class="title border-topbottom">{{key}}</div>
				<div class="item-list">
					<div class="item border-bottom"
					 v-for="innerItem of item"
					 :key="innerItem.id"
					 >
					{{innerItem.name}}
				</div>
				</div>
			</div>
			
			
		</div>
	</div>
</template>

<script>
	import Bscroll from 'better-scroll'
	export default{
		name: 'CityList',
		props: {
			hot: Array,
			cities: Object
		},
		mounted (){
			this.scroll= new Bscroll(this.$refs.wrapper)
		}
	}
</script>

<style lang="stylus" scoped="">
@import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem	
</style>
```


```vue
Alphabet.vue
<template>
	<ul class="list">
		<li class="item" v-for="(item, key) of cities" :key="key"
		>{{key}}</li>
	</ul>
</template>

<script>
	export default{
		name: 'CityAlphabet',
		props: {
			cities: Object
		}
	}
</script>

<style lang="stylus" scoped="">
@import '~styles/varibles.styl'
.list
	display: flex
	flex-direction: column
	justify-content: center
	position: absolute
	right: 0
	bottom: 0
	top: 1.58rem
	width: .4rem
	
	.item
		line-height: .4rem
		text-align: center
		color: $bgColor
</style>
```

#### 24.6兄弟组件联动

非父子组件可以用bus传值


需求：点击右侧字母表，左侧的列表会自动的滚动到对应的区域


```javascript
创建新分支 city-components
git pull
git checkout city-components
npm run start

git add .
git commit -m 'city components'
git push
git checkout master
git merge city-components
git push
```

在Alphabet.vue中添加如下代码

当点击某个字母 会拿到一个事件对象

console.log(e.target.innerHTML); 会输出点击的字母

把字母传递给list组件(Alphabet传给City组件 city组件再传给list组件)

 this.$emit("change", e.target.innerText); //向外触发事件 携带内容e.target.innerText



```javascript
<template>
	<ul class="list">
		<li class="item" v-for="(item, key) of cities" :key="key" 
		@click="handleLetterClick"
		>{{key}}</li>
		
	</ul>
</template>

methods: {
    handleLetterClick(e) {
      //console.log(e.target.innerHTML);
      this.$emit("change", e.target.innerText); //向外触发事件
    }
  }
```
在City.vue中添加代码 监听事件



```javascript
<template>
	<div>
		<city-header></city-header>
		<city-search></city-search>
		<city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
		<city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
	</div>
</template>

handleLetterChange(letter) {
			//console.log(letter) //父组件获得子组件传递过来的letter数据
      		this.letter = letter
    	}
```
父组件City.vue将letter给子组件List.vue
在City.vue中定义letter
```javascript
data(){
			return{
				hotCities: [],
				cities: {},
				letter: ""

			}
		}
吧letter传递给city-list组件
<city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
```
list.vue接收letter

加一个:ref="key"

```javascript
props: {
			hot: Array,
			cities: Object,
			letter: String
		}

watch: { //监听letter的变化
    letter () {
      if (this.letter) {
      	//console.log(this.letter) //
        const element = this.$refs[this.letter][0]
        //console.log(element)
        this.scroll.scrollToElement(element) //可以让Bscroll自动滚到某一区域上
      }
    }
  }


<div class="area" v-for="(item, key) of cities" :key="key"
			:ref="key">
   
```
需求:右侧字母表拖拽时，左侧数据也会联动
在Alphabet.vue中修改代码

```javascript
<template>
	<ul class="list">
		<li class="item" v-for="item of letters" :key="item" 
		:ref="item"
		@touchstart="handlerTouchStart"
		@touchmove="handlerTouchMove"
		@touchend="handlerTouchEnd"
		@click="handleLetterClick"
		>{{item}}</li>
		
	</ul>
</template>

<script>
	export default{
		name: 'CityAlphabet',
		props: {
			cities: Object
		},
		computed:{
			letters(){
				const letters = []
				for (let i in this.cities) {
					letters.push(i)
				}
				return letters
			}
		},
		data(){
			return {
				touchStatus: false
			}
		},
		methods: {
    handleLetterClick(e) {
      //console.log(e.target.innerHTML);
      this.$emit("change", e.target.innerText);
    },
    handlerTouchStart() {
    	this.touchStatus = true
    },
    handlerTouchMove(e) {
    	if(this.touchStatus){
    		const startY = this.$refs['A'][0].offsetTop
    		//console.log(startY)
    		//手指距离最顶部的高度 - 顶部绿色像素
    		const touchY = e.touches[0].clientY -79
    		const index = Math.floor((touchY - startY) / 20)
    		//console.log(index)
    		if(index >=0 && index <this.letters.length){
    			this.$emit('change',this.letters[index])
    		}
    		
    	}
    },
    handlerTouchEnd() {
    	this.touchStatus = false
    }
  }
	}
</script>
```
#### 24.7列表切换性能优化
修改如下代码
```javascript
data(){
			return {
				touchStatus: false,
				startY: 0,
				timer: null
			}
		}

 handlerTouchMove(e) {
    	if(this.touchStatus){
    		if(this.timer){
    			clearTimeout(this.timer)
    		}
    		this.timer = setTimeout(()=>{
    			//console.log(startY)
    		//手指距离最顶部的高度 - 顶部绿色像素
    		const touchY = e.touches[0].clientY -79
    		const index = Math.floor((touchY - this.startY) / 20)
    		//console.log(index)
    		if(index >=0 && index <this.letters.length){
    			this.$emit('change',this.letters[index])
    		}
    		},16)
    		
    		
    	}
    }
```
#### 24.8搜索功能实现
创建新分支 city-search-logic
```javascript
git pull 
git checkout city-search-logic
npm run start

git add .
git commit -m 'search finish'
git push
git checkout master
git merge city-search-logic
git push
```
Search.vue编码如下
```javascript
<template>
	<div>
	<div class="search">
	<input v-model="keyword" class="search_input" type="text" placeholder="输入城市名或拼音" />
	</div>
	<div class="search-content" ref="search">
		<ul>
			<li class="search-item border-bottom" 
			v-for="item of list">
			{{item.name}}</li>
		</ul>
	</div>
</div>
</template>

<script>
	import Bscroll from 'better-scroll'
	export default{
		name: 'CitySearch',
		props: {
			cities: Object
		},
		data() {
			return{
			keyword:'', //input框输入的搜索词和数据绑定 双向绑定
			list:[],
			timer: null
			}
		},
		watch: { //侦听器 监听keyword的改变
			keyword() {
				if(this.timer){
					clearTimeout(this.timer)
				}
				this.timer = setTimeout(() =>{
					const result =[]
					for (let i in this.cities){
						this.cities[i].forEach((value) =>{
						if(value.spell.indexOf(this.keyword) >-1 ||
	                       value.name.indexOf(this.keyword) > -1)
							{
								result.push(value)
							}
						})
					}
					this.list = result
				},100)
			}

		},
		mounted (){
			this.scroll= new Bscroll(this.$refs.search) //使搜索出来的数据可以滚动
		}
	}
</script>

<style lang="stylus" scoped="">
@import '~styles/varibles.styl'
	.search
		height: .72rem
		padding: 0 .1rem
		background: $bgColor
		.search_input
			box-sizing: border-box
			width: 100%
			height: .62rem
			padding: 0 .1rem
			line-height: .62rem
			text-align: center
			border-radius: .06rem
			color: #666
			
	.search-content
		z-index: 1
		overflow: hidden
		position: absolute
		top: 1.58rem
		left: 0
		right: 0
		bottom: 0
		background: #eee
		
		.search-item
			line-height: .62rem
			padding-left: .2rem
			background: #fff
			color: #666
</style>

```
在City.vue中添加如下代码，将数据传给子组件
```javascript
<city-search :cities="cities"></city-search>
```
修改Search.vue如下代码
```javascript
<div class="search-content" ref="search" v-show="keyword">
		<ul>
			<li class="search-item border-bottom" 
			v-for="item of list">
			{{item.name}}</li>
			<li class="search-item border-bottom" 
			v-show="hasNoData">没有搜索到相关数据</li>
		</ul>
	</div>
```
```javascript
if(!this.keyword){
					this.list = []
					return 
				}
```
```javascript
computed:{
			hasNoData(){
				return !this.list.length
			}
		}
```
### 25.使用vuex实现数据共享
```javascript
git pull
git checkout city-vuex
npm run start

git add .
git commit -m 'use vuex'
git push
git checkout master
git merge city-vuex
git push
```
涉及到大量数据传递的时候使用框架vuex
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1534454/1594714361940-edcf2fa9-9fcd-4ead-adf4-31d78b8cf111.png#align=left&display=inline&height=514&margin=%5Bobject%20Object%5D&name=image.png&originHeight=514&originWidth=683&size=23875&status=done&style=none&width=683)
vuex指的是图中虚线部分的内容
理解为一个store仓库，公用数据都放在state中
改变state数据，比较复杂的同步操作或者异步操作放到action中
mutations中放的是一个一个同步的对state的修改
组件调用actions，actions调用mutations，然后改变公用数据
组件也可以直接调用mutations
可以使用Devtools对代码进行调试
#### 25.1安装vuex
```javascript
npm install vuex --save

```
新建目录store，创建index.js
```javascript
import Vue from 'vue'
import Vuex from 'vuex'

//因为Vuex是插件
Vue.use(Vuex)

export default new Vuex.Store({ //创建一个vuex仓库
	state: {
		city: '北京'
	}
})
```
在main.js中引入
```javascript
import store from './store'
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
```
哪些模块需要使用公用数据 header


去掉Home.vue中与city相关代码
```javascript
<home-header></home-header>
// city: '',
// this.city=data.city
```
修改Header.vue代码
```javascript
不用再接收数据
		// props: {
		// 	city: String
		// }

<div class="header">
		<div class="header-left">
			<div class="iconfont back-icon">&#xe624;</div>
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe632;</span>
		输入城市/景点/游玩主题</div>

		<router-link to='/city'>
		<div class="header-right">
			{{this.$store.state.city}} //使用store
			<span class="iconfont arrow-icon">&#xe64a;</span>
		</div>
	</router-link>
	</div>
```
修改List.vue中的当前城市，不在固定写死
```javascript
<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper">
					<div class="button">{{this.$store.state.city}}</div>
					</div>
				</div>
```
#### 25.2改变公用数据 state
调用dispatch调用Action


修改List.vue
```javascript
<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<div class="button-wrapper" v-for="item of hot" :key="item.id" @click="handleCityClick(item.name)">
					<div class="button">{{item.name}}</div>
					</div>

methods: {
      handleCityClick(city){
        this.$store.dispatch('changeCity',city)
      }
    },
```


修改index.vue
```javascript
actions:{
		changeCity(ctx,city){//两个参数 一个上下文，一个传过来的数据city

		}

	}
```
#### 25.3actions调用mutations,mutations改变state
修改index.js
```javascript
state: {
		city: '北京'
	},
	actions:{
		changeCity(ctx,city){//两个参数 一个上下文，一个传过来的数据city
			//actions调用mutations
			ctx.commit('changeCity',city)
		}
	},
	mutations: {
		changeCity(state,city){
			state.city = city
		}
	}
```
#### 25.4组件直接调用mutations
删除掉Index.js中的actions
```javascript
 methods: {
      handleCityClick(city){
        // this.$store.dispatch('changeCity',city)
        //直接调用mutations
         this.$store.commit('changeCity',city)
      }
    },
```
点击列表中的城市时也可以切换
```javascript
<div class="area" v-for="(item, key) of cities" :key="key"
			:ref="key">
				<div class="title border-topbottom">{{key}}</div>
				<div class="item-list">
					<div class="item border-bottom"
					 v-for="innerItem of item"
					 :key="innerItem.id"
           @click="handleCityClick(innerItem.name)"
					 >
					{{innerItem.name}}
				</div>
				</div>
			</div>
```
点击输入框中搜索的城市时，也可以切换
```javascript
methods: {
			handleCityClick(city){
        // this.$store.dispatch('changeCity',city)
        //直接调用mutations
         this.$store.commit('changeCity',city)
      		}
		},

<div class="search-content" ref="search" v-show="keyword">
		<ul>
			<li class="search-item border-bottom" 
		v-for="item of list" @click="handleCityClick(item.name)">
			{{item.name}}</li>
			<li class="search-item border-bottom" 
			v-show="hasNoData">没有搜索到相关数据</li>
		</ul>
	</div>
```
### 26.Vue Router
点击热门城市时不仅会改变当前城市，并且还会跳到首页
在List.vue和Search.vue中修改
```javascript
methods: {
			handleCityClick(city){
        // this.$store.dispatch('changeCity',city)
        //直接调用mutations
         this.$store.commit('changeCity',city)
         this.$router.push('/')
      		}
		},
```
### 27.vuex的高级使用以及localStorage
localStorage类似cookie实现本地存储
```javascript
import Vue from 'vue'
import Vuex from 'vuex'

//因为Vuex是插件
Vue.use(Vuex)

let defaultStorage = '北京'
try{
	if(localStorage.city){
	defaultStorage = localStorage.city
	}
}catch(e){}


export default new Vuex.Store({ //创建一个vuex仓库
	state: {
		city: defaultStorage
	},
	// actions:{
	// 	changeCity(ctx,city){//两个参数 一个上下文，一个传过来的数据city
	// 		//actions调用mutations
	// 		ctx.commit('changeCity',city)
	// 	}
	// },
	mutations: {
		changeCity(state,city){
			state.city = city
			try{
				localStorage.city = city
			}catch(e){}
			
		}
	}
})
```
#### 27.1拆分模块
创建state.js与mutations.js模块
```javascript
let defaultStorage = '北京'
try{
	if(localStorage.city){
	defaultStorage = localStorage.city
	}
}catch(e){}

export default {
	city: defaultStorage
}
```
```javascript
export default {
		changeCity(state,city){
			state.city = city
			try{
				localStorage.city = city
			}catch(e){}
			
		}
	}
```
index.js
```javascript
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

//因为Vuex是插件
Vue.use(Vuex)

export default new Vuex.Store({ //创建一个vuex仓库
	state: state,
	mutations: mutations
	
})
```
修改header.vue样式
```javascript
.header-right
	min-width: 1.24rem
	padding: 0 .1rem
	float: right
	text-align: center
	color: #fff
    .arrow-icon
	font-size: .24rem
	margin-left: -.04rem
```
#### 27.2对vuex相关代码进行优化
##### 对vuex中state调用公用数据进行优化

修改header.vue

```
//吧vuex中的数据映射到computed的计算属性里，将city的公用数据映射到city的计算属性中
import { mapState } from 'vuex'
computed: {

			...mapState(['city'])
			
		}

<div class="header">
		<div class="header-left">
			<div class="iconfont back-icon">&#xe624;</div>
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe632;</span>
		输入城市/景点/游玩主题</div>

		<router-link to='/city'>
		<div class="header-right">
			{{this.city}}
			<span class="iconfont arrow-icon">&#xe64a;</span>
		</div>
	</router-link>
	</div>
```
list.vue
```
computed: {
      ...mapState({
        currentCity: 'city' //对象 把vuex中的公用数据city映射到计算属性currentCity
      })
    }
    
<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper">
					<div class="button">{{this.currentCity}}</div>
					</div>
				</div>
			</div>
```

##### 对vuex中mutations相关代码进行优化

List.vue与search.vue中进行修改

```
import { mapMutations } from 'vuex'
methods: {
      handleCityClick(city){
        // this.$store.dispatch('changeCity',city)
        //直接调用mutations
         //this.$store.commit('changeCity',city)
         this.changeCity(city)
         this.$router.push('/')
      },
      //将mutations映射到组件中名字叫做changeCity的方法
      ...mapMutations(['changeCity'])
    }
```
#### 27.3vuex中getter的使用

类似于computed计算属性，当我们需要根据state中的数据算出一些新的数据，我们就可以借助getter来提供新的数据，避免数据冗余

index.js中代码的修改

```
getters: {
		doubleCity (state) {
			return state.city + ' '+state.city
		}
	}
```
header.vue代码的修改
```html
computed: {

			...mapState(['city']),
			...mapGetters(['doubleCity'])
			
		}
```

#### 27.4Module的使用

当state,mutation等模块过于复杂时，可以使用Module将 store 分割成**模块（module）**。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割

```
const moduleA = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> moduleA 的状态
store.state.b // -> moduleB 的状态
```

https://vuex.vuejs.org/zh/guide/modules.html

### 28.使用Keep-alive优化网页性能

```
创建新分支 city-keepalive
git pull
git checkout city-keepalive
npm run start

git add .
git commit -m 'finish page'
git push
git checkout master
git merge city-keepalive
git push
```

network-xhr可以看到发送的请求

优化每次切换城市，即路由切换ajax都会重新发送，页面会重新渲染

修改App.vue

```
<template>
  <div id="app">
  	路由的内容被加载过一次之后，就把路由的内容放到内存之中，下一次重新进入路由的时候，不需要再重新渲染组件，不需要执行钩子函数
  	<keep-alive>
    <router-view/>
  	</keep-alive>
  </div>
</template>
```

但是城市改变的时候，首页得改变，所以需要做一次ajax请求

当使用keep-alive时，生命周期中会多处生命周期函数 activated(){}

对Home.vue进行修改

```javascript
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/weekend'
import axios from 'axios'
import { mapState } from 'vuex'
//Header.vue是一个局部组件 需要声明
export default{
	name: 'Home',
	components: {
		HomeHeader: HomeHeader,
		HomeSwiper: HomeSwiper,
		HomeIcons: HomeIcons,
		HomeRecommend: HomeRecommend,
		HomeWeekend: HomeWeekend
	},

	data() {
		return{
			// city: '',
			lastCity: '',
			swiperList: [],
			iconList: [],
			recommendList: [],
			weekendList: []
		}
	},
	computed: {
		...mapState(['city'])
	},

	methods: {
		getHomeInfo() {
			axios.get('/api/index.json?city='+this.city)
			.then(this.getHomeInfoSucc)
		},
		getHomeInfoSucc(res) {
			res=res.data
			if(res.ret && res.data){
				const data=res.data
				// this.city=data.city
				this.swiperList=data.swiperList
				this.iconList=data.iconList
				this.recommendList=data.recommendList
				this.weekendList=data.weekendList
			}
		}
	},

	mounted (){//页面初次加载的时候一定会发一个ajax请求
		this.lastCity = this.city
		this.getHomeInfo()
	},
	activated (){//当页面重新被显示的时候，activated一定会被重新执行
		//判断当前城市和上一次是否相同 
		if(this.lastCity !== this.city){
			this.lastCity = this.city
			this.getHomeInfo()
		}
	}
}
</script>
```

### 29.详情页面开发

#### 29.1详情页动态路由及banner布局

```
创建新分支 detail-banner
git pull
git checkout detail-banner
npm run start


```

点击故宫时可以进入详情页

修改Recommend.vue组件

```javascript
使用router-link vue会默认渲染成a标签
<router-link to='/detail'>
		<li class="item border-bottom" v-for="item of list"
		:key="item.id">
			<img :src="item.imgUrl" class="item-img"/>
			<div class="item-info">
			<p class="item-title">{{item.title}}</p>
			<p class="item-desc">{{item.desc}}</p>
			<button class="item-button">查看详情</button>
			</div>
		</li>
		</router-link>
		
		
代码做如下修改
<router-link tag="li" 
		class="item border-bottom" 
		v-for="item of list"
		:key="item.id"
		:to="'/detail/' + item.id"
		>
			<img :src="item.imgUrl" class="item-img"/>
			<div class="item-info">
			<p class="item-title">{{item.title}}</p>
			<p class="item-desc">{{item.desc}}</p>
			<button class="item-button">查看详情</button>
			</div>
		</router-link>
```



配置动态的路由

修改router->index.js

```
import Detail from '@/pages/detail/Detail'

{
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
```

在pages中创建文件夹detail，创建Detail.vue

在detail文件夹中创建文件夹components，创建Banner.vue

#### 29.2banner布局开发

```html
<template>
	<div class="banner">
		<img  class="banner-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg">
		<div class="banner-info">
			<div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
			<div class="banner-number">
			<span class="banner-icon iconfont">&#xe692;</span>
			39</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name:'DetailBanner'
	}
</script>

<style lang="stylus" scoped>
	.banner
		position: relative
		overflow: hidden
		height: 0
		padding-bottom: 55%
		.banner-img
			width: 100%
		.banner-info
			position: absolute
			display: flex
			left: 0
			right: 0
			bottom: 0
			line-height: .6rem
			color: #fff
			background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
			.banner-title
				flex: 1
				font-size: .32rem
				padding: 0 .2rem
			.banner-number
				height: .32rem
				line-height: .32rem
				margin-top: .14rem
				padding: 0 .4rem
				font-size: .24rem
				border-radius: .2rem
				background: rgba(0, 0, 0, .8)
				
			
			
</style>
```

#### 29.3公用图片画廊组件拆分

创建common文件夹，创建gallary文件夹。创建Gallary.vue文件

在webpack.base.conf.js中添加别名

```
'common': resolve('src/common')
```

重启服务器



在Banner.vue中导入Gallary.vue

```
import CommonGallary from 'common/gallary/Gallary'
export default {
		name:'DetailBanner',
		//通过局部组件的形式来使用
		components: {
			CommonGallary
		}
	}
```

使用局部组件

```
<common-gallary></common-gallary>
```

