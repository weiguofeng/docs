---
title: elementUI
date: 2020-12-03
categories:
 - front
tags:
 - elementUI
---

### element

#### 构建项目element-test

```
//安装cnpm
npm  install  -g  cnpm  --registry=https://registry.npm.taobao.org
//卸载旧版本的vue-cli
npm uninstall vue-cli -g
//全局安装新版本的vue-cli
cnpm install -g @vue/cli

vue create element-test
//参考以下文章进行步骤
https://www.cnblogs.com/coober/p/10875647.html

运行项目
npm run serve
cnpm i element-ui -S


//在main.js引入element插件以及样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
```



1.简单的button演示

```
<template>
  <div id="app">
    <el-button :plain="true" @click="show">按钮</el-button>
    <el-button :round="true" @click="show2">按钮2</el-button>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    show () {
      this.$message.success('这是一条成功消息')
    },
    show2 () {
      this.$message({
        message: '这是一条警告消息',
        type: 'warning'
      })
    }
  }
}
</script>
```



#### 按需加载

```
//按需加载
npm run build
app.fe60121e.js  //代码文件 比如main.js App.vue
chunk-vendors.92203221.js //库文件

//vendors 库高达 789KB
-rw-r--r--  1 sam  staff   789518 10 27 20:40 chunk-vendors.cd583f5b.js

//安装 babel-plugin-component
cnpm i -D babel-plugin-component
//修改 babel.config.js
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}

//参照官网进行修改
https://element.eleme.cn/#/zh-CN/component/quickstart#quan-ju-pei-zhi
```

```
//若报错参照https://www.jianshu.com/p/4014c68fa05e
module.exports = {
  presets: [
    '@vue/app',
    ['@babel/preset-env', // 添加 babel-preset-env 配置
      {
        modules: false
      }
    ]
  ],
  plugins: [ // element官方教程
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}
```

#### 插件引用

#### 构建项目element-test2

```
//创建项目 演示插件引用
vue create element-test2
vue add element
npm run serve
```

#### 表单基本用法

设置 `inline` 属性可以让表单域变为行内的表单域



```
<template>
  <div id="app">
    <el-form inline :model="data">
      <el-form-item label="审批人">
        <el-input v-model="data.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="data.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        data: {
          user: 'sam',
          region: '区域二'
        }
      }
    },
    methods: {
      onSubmit() {
        console.log(this.data)
      }
    }
  }
</script>

```

#### 表单校验基本用法

```
<template>
  <div id="app">
    <el-form inline :rules="rules" ref="form" :model="data">
      <el-form-item label="审批人" prop="user">
        <el-input v-model="data.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="data.password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="data.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      const userValidator = (rule, value, callback) => {
        if (value.length > 3) {
          callback()
        } else {
          callback(new Error('密码长度必须大于3'))
        }
      }
      return {
        data: {
          user: '',
          password: '',
          region: ''
        },
        rules: {
          user: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, trigger: 'change', message: '密码必须录入' },
            { validator: userValidator, trigger: 'change' }
          ]
        }
      }
    },
    methods: {
      onSubmit() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm() {
        this.$refs.form.resetFields();
      }
    }
  }
</script>

```

#### 表单校验高级用法

1. 动态改变校验规则
2. 手动控制校验状态

```
<template>
  <div id="app">
    <el-form
            :inline="false"
            :rules="rules"
            ref="form"
            :model="data"
            validate-on-rule-change
            status-icon
            label-width="100px"
            style="width: 700px"
    >
      <el-form-item label="审批人" prop="user" :error="error"
                    :validate-status="status">
        <el-input v-model="data.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="data.password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="data.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-row :gutter="20" style="margin-left: 20px">
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button @click="resetForm">重置</el-button>
        <el-button @click="addRule">动态添加规则</el-button>
        <el-button @click="showSuccess" type="success">校验成功</el-button>
        <el-button @click="showError" type="danger">校验失败</el-button>
        <el-button @click="showValidating" type="info">校验中</el-button>
      </el-row>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      const passValidator = (rule, value, callback) => {
        if (value.length > 3) {
          callback()
        } else {
          callback(new Error('密码长度必须大于3'))
        }
      }
      return {
        status: '',
        error: '',
        data: {
          user: '',
          password: '',
          region: ''
        },
        rules: {
          user: [
            { required: true, message: '请输入活动名称', trigger: 'blur'},
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, trigger: 'blur', message: '密码必须录入' },
            { validator: passValidator, trigger: 'change' }
          ]
        }
      }
    },
    methods: {
      onSubmit() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm() {
        this.$refs.form.resetFields();
      },
      addRule() {
        const userValidator = (rule, value, callback) => {
          if (value.length > 3) {
            callback()
          } else {
            callback(new Error('用户名长度必须大于3'))
          }
        }
        const newRule = [
          ...this.rules.user,
          { validator: userValidator, trigger: 'change' }
        ]
        this.rules = Object.assign({}, this.rules, { user: newRule })
      },
      showError() {
        this.status = 'error'
        this.error = '用户名输入有误'
      },
      showSuccess() {
        this.status = 'success'
        this.error = ''
      },
      showValidating() {
        this.status = 'validating'
        this.error = ''
      }
    }
  }
</script>


```

#### 表单属性解析

```
 <el-form :inline="false"
            :rules="rules"
            ref="form"
            :model="data"
            validate-on-rule-change
            status-icon
            label-width="100px"
            style="width: 700px"
            label-position="left"
            label-suffix=":"
            disabled
            size="small"
            hide-required-asterisk
    >
```



#### Vuex原理解析

```vue
<html>
  <head>
    <title>vuex 原理解析</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  </head>
  <body>
   <!--  <div id="root">{{data}}</div> -->
    <div id="root2">{{data2}}</div>
    <div id="root3">
      <button @click="change">change</button>
    </div>
    <script>
      function registerPlugin(Vue) {
        const vuex = {}
        vuex._vm = new Vue({
          data: {
            message: 'hello vue.js'
          }
        })
        vuex.state = vuex._vm //这里state实质上是上面的vue对象
        vuex.mutations = { //通过mutations来更新state
          setMessage(value) {
            vuex.state.message = value
          }
        }
        function init() {
          this.$store = vuex //使用this.$store来引用vuex  $store 是挂载在 Vue 实例上的（即Vue.prototype）
        }
        Vue.mixin({ //全局mixin 会对vue里面的所有实例在beforecreate时候调用init方法
          beforeCreate: init
        })
      }
      Vue.use(registerPlugin)
      new Vue({
        el: '#root',
        computed: {
          data() {
            return this.$store.state.message
          }
        }
      })
      new Vue({
        el: '#root2',
        computed: {
          data2() {
            return this.$store.state.message
          }
        }
      })
      new Vue({
        el: '#root3',
        methods: {
          change() {
            const newValue = this.$store.state.message + '.'
            this.$store.mutations.setMessage(newValue)
          }
        }
      })
    </script>
  </body>
</html>
```

#### Vue Router

```
npm i -S vue-router
cnpm i -S vue-router
安装vue-router
```

```
在src下创建router.js
import Vue from 'vue'
import Route from 'vue-router'
import HelloWorld from './components/HelloWorld'

Vue.use(Route)
const routes = [
    { path: '/hello-world', component: HelloWorld }
]
const router = new Route({
    routes
})

export default router

```

```
//在 main.js 中引用 router，并加入 vue 实例
import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from "./router";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
```

```vue
 <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
 <template>
    <div id="app">
        <router-link to="/hello-world">Go to</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: '#app'

    }
</script>
```

组件路由

```vue
在componnets中创建Start.vue
<template>
    <div id="start">
       start
    </div>
</template>

<script type="text/javascript">
	export default {
		name: '#start'
	}
</script>



```

```
//在router.js中引入Start组件
import Start from './components/Start'
Vue.use(Route)
const routes = [
    {path: '/start',component: Start},
    { path: '/hello-world', component: HelloWorld }
]
const router = new Route({
    routes
})

export default router

```



#### 全局守卫

```
在router.js中定义全局守卫
import Vue from 'vue'
import Route from 'vue-router'
import HelloWorld from './components/HelloWorld'
import Start from './components/Start'

Vue.use(Route)
const routes = [
    {path: '/start',component: Start},
    { path: '/hello-world', component: HelloWorld }
]
const router = new Route({
    routes
})


router.beforeEach((to, from, next) => {
  console.log('beforeEach', to, from)
  next()
})

router.beforeResolve((to, from, next) => {
  console.log('beforeResolve', to, from)
  next()
})

router.afterEach((to, from) => {
  console.log('afterEach', to, from)
})
export default router

```

```vue
修改Start.vue代码
<template>
    <div id="start">
       start
    </div>
</template>

<script>
	export default {
		name: 'start',

	beforeCreate(){
		console.log("beforeCreate")
		},

	created(){
		console.log("created")
		}

	}


</script>



```

全局守卫会在钩子函数之前执行



#### 局部守卫

```vue
在Start.vue中添加局部守卫
<template>
    <div id="start">
       start
    </div>
</template>

<script>
	/* eslint-disable */
	export default {
		name: 'start',

	beforeCreate(){
		console.log("beforeCreate")
		},

	created(){
		console.log("created")
		},
	beforeMount(){
		console.log("beforeMount")
		},
	mounted(){
		console.log("mounted")
		},
	beforeDestroy(){
		console.log("beforeDestroy")
		},

	beforeRouteEnter (to, from, next) {
	  // 不能获取组件实例 `this`
	  console.log('beforeRouteEnter', to, from)
	  next()
	},
	beforeRouteUpdate (to, from, next) {
	  console.log('beforeRouteUpdate', to, from)
	  next()
	},
	beforeRouteLeave (to, from, next) {
	  console.log('beforeRouteLeave', to, from)
	  next()
	}
	}


</script>



```

#### 路由元信息

```vue
通过路由元信息动态修改标题
方法一
新增加一个组件B.vue做对比
<template>
	<div>this is B</div>
</template>


```

router.js

```
const routes = [
    {path: '/start',component: Start, meta: {title: 'component start'}},
    {path: '/b',component: B},
    { path: '/hello-world', component: HelloWorld, meta: {title: 'component hello-world'} }
]

router.beforeEach((to, from, next) => {
  console.log('beforeEach', to, from)
  if(to.meta&&to.meta.title){
  		document.title  = to.meta.title
  }else{
  	document.title = 'default title'
  }
  next()
})
```



```
方法2 通过Vue.mixin实现
Vue.mixin({
	beforeCreate(){
		if(this.$route.meta&&this.$route.meta.title){
		  		document.title  = this.$route.meta.title
		  }else{
		  	document.title = 'default title'
		  }
	}
})
```

我们可以在任何组件内通过 `this.$router` 访问路由器，也可以通过 `this.$route` 访问当前路由

建议使用方法1放在全局守卫中使用

#### vue router API使用

```
动态添加route
注释掉route.js中的componnet B
```

```vue
Start.vue
<template>
    <div id="start">
       start
    <button @click="addRoute">add route</button>
    <router-link to="/b">b.vue</router-link>
    </div>

</template>

methods: {
			addRoute(){
				this.$router.addRoutes([{
			      path: '/b', component: B, meta: { title: 'Custom Title B' },
			    }])
			}
		},
```



#### 构建项目element-admin

#### 前端项目初始化

```
git clone https://github.com/PanJiaChen/vue-element-admin
cd vue-element-admin
npm i
npm run dev
```

#### 前端项目精简

```
删除 src/views 下的源码，保留：
dashboard：首页
error-page：异常页面
login：登录
redirect：重定向

对 src/router/index 进行相应修改
删除 src/router/modules 文件夹
删除 src/vendor 文件夹
```

#### 项目配置

```
通过 src/settings.js 进行全局配置：

title：站点标题，进入某个页面后，格式为：
页面标题 - 站点标题

showSettings：是否显示右侧悬浮配置按钮
tagsView：是否显示页面标签功能条
fixedHeader：是否将头部布局固定
sidebarLogo：菜单栏中是否显示LOGO
errorLog：默认显示错误日志的环境

```

#### 源码调试

如果需要进行源码调试，需要修改 vue.config.js：

```
config
  // https://webpack.js.org/configuration/devtool/#development
  .when(process.env.NODE_ENV === 'development',
    config => config.devtool('cheap-source-map')
  )
```

将 cheap-source-map 改为 source-map，如果希望提升构建速度可以改为 eval

通常建议开发时保持 eval 配置，以增加构建速度，当出现需要源码调试排查问题时改为 source-map



#### 前端项目结构

- api：接口请求
- assets：静态资源
- components：通用组件
- directive：自定义指令
- filters：自定义过滤器
- icons：图标组件
- layout：布局组件
- router：路由配置
- store：状态管理
- styles：自定义样式
- utils：通用工具方法
  - auth.js：token 存取
  - permission.js：权限检查
  - request.js：axios 请求封装
  - index.js：工具方法
- views：页面
- permission.js：登录认证和路由跳转
- settings.js：全局配置
- main.js：全局入口文件
- App.vue：全局入口组件



#### 后端框架搭建

node.js介绍

Node 是一个基于 V8 引擎的 Javascript 运行环境，它使得 Javascript 可以运行在服务端，直接与操作系统进行交互，与文件控制、网络交互、进程控制等

> Chrome 浏览器同样是集成了 V8 引擎的 Javascript 运行环境，与 Node 不同的是他们向 Javascript 注入的内容不同，Chrome 向 Javascript 注入了 window 对象，Node 注入的是 global，这使得两者应用场景完全不同，Chrome 的 Javascript 所有指令都需要通过 Chrome 浏览器作为中介实现



express简介

express 是一个轻量级的 Node Web 服务端框架，它可以帮助我们快速搭建基于 Node 的 Web 应用



#### 项目初始化

```
mkdir admin-imooc-node
cd admin-imooc-node
npm init -y

cnpm i -S express
```



创建app.js

在settings中设置配置node.js

```
const express = require('express')

// 创建 express 应用
const app = express()

// 监听 / 路径的 get 请求
app.get('/', function(req, res) {
    res.send('hello node')
})

// 使 express 监听 5000 端口号发起的 http 请求
const server = app.listen(5000, function() {
    const { address, port } = server.address()
    console.log('Http Server is running on http://%s:%s', address, port)
})

```

在浏览器中运行localhost:5000



#### express基础讲解

- 中间件

中间件是一个函数，在请求和响应周期中被顺序调用

```
const myLogger = function(req, res, next) {
  console.log('myLogger')
  next()
}

app.use(myLogger)
```

> 中间件需要在响应结束前被调用
>
> 如果在post，get请求过程中的回调函数没有next()参数，那么就匹配上第一个路由，就不会往下匹配了。如果想往下匹配的话，就需要写next();
>
> https://blog.csdn.net/qq_42074075/article/details/90512098



- 路由

应用如何响应请求的一种规则



响应 / 路径的 get 请求：

```
app.get('/', function(req, res) {
  res.send('hello node')
})
```

响应/路径的post请求:

```
app.post('/', function(req, res) {
  res.send('hello node')
})
```



规则主要分两部分：

请求方法：get、post......

请求的路径：/、/user、/.*fly$/......



- 异常处理

通过自定义异常处理中间件处理请求中产生的异常

```
app.get('/', function(req, res) {
  throw new Error('something has error...')
})

const errorHandler = function (err, req, res, next) {
  console.log('errorHandler...')
  res.status(500)
  res.send('down...')
}

app.use(errorHandler)
```



>- 第一，参数一个不能少，否则会视为普通的中间件
>- 第二，中间件需要在请求之后引用



#### 项目搭建

安装 boom 依赖：

```
cnpm i -S boom
```



app.js

```
const express = require('express')
const router = require('./router')


// 创建 express 应用
const app = express()

app.use('/',router)

// 使 express 监听 5000 端口号发起的 http 请求
const server = app.listen(5000, function() {
    const { address, port } = server.address()
    console.log('Http Server is running on http://%s:%s', address, port)
})

```

创建router目录 

- index.js
- user.js

```
const express = require('express')
const boom = require('boom')
const userRouter = require('./user')
const CODE_ERROR = require('../utils/constant')

//注册路由
const router = express.Router()

router.get('/',function(req,res){
    res.send('欢迎学习读书管理后台')
})


// 通过 userRouter 来处理 /user 路由，对路由处理进行解耦
router.use('/user',userRouter)

/**
 * 集中处理404请求的中间件
 * 注意：该中间件必须放在正常处理流程之后
 * 否则，会拦截正常请求
 */

router.use(function (req,res,next) {
    next(boom.notFound('接口不存在'))

})

/**
 * 自定义路由异常处理中间件
 * 注意两点：
 * 第一，方法的参数不能减少
 * 第二，方法必须放在路由最后
 */

router.use((err, req, res, next) => {
    console.log(err)
    const msg = (err && err.message) || '系统错误'
    const statusCode = (err.output && err.output.statusCode) || 500;
    const errorMsg = (err.output && err.output.payload && err.output.payload.error) || err.message
    res.status(statusCode).json({
        code: CODE_ERROR,
        msg,
        error: statusCode,
        errorMsg
    })
})

module.exports = router

```



```
const express = require('express')

const router = express.Router()

router.get('/info',function (req,res,next) {
    res.json('user info ...')
})

module.exports = router

```



创建utils目录

- constant.js

```
module.exports = {
    CODE_ERROR: -1
}
```



#### 配置nginx服务

在vhost中添加upload.conf

```
server
{
  #字符编码
  charset utf-8;
  #监听的端口号
  listen 8089;
  server_name http_host;
  #资源文件路径
  root /home/wwwroot/;
  #是否打开索引
  autoindex on;
  #不使用缓存
  add_header Cache-Control "no-cache, must-revalidate";
  #路由 /表示监听所有的路由 response里在加一个header 帮助跨域
  location / {
    add_header Access-Control-Allow-Origin *;
  }
}

#https服务
server
{
  listen 443 default ssl;
  server_name https_host;
  root /vhost/;
  autoindex on;
  add_header Cache-Control "no-cache, must-revalidate";
  location / {
    add_header Access-Control-Allow-Origin *;
  }
  #证书
  ssl_certificate /Users/sam/Desktop/https/book_youbaobao_xyz.pem;
  #密钥
  ssl_certificate_key /Users/sam/Desktop/https/book_youbaobao_xyz.key;
  ssl_session_timeout  5m;
  ssl_protocols  SSLv3 TLSv1;
  ssl_ciphers  ALL:!ADH:!EXPORT56:RC4+RSA:+HIGH:+MEDIUM:+LOW:+SSLv2:+EXP;
  ssl_prefer_server_ciphers  on;
}
```





```
启动nginx
nginx

重启nginx
nginx -s reload

停止nginx
nginx -s stop

检查配置文件是否存在语法错误
nginx -t
```



#### 资源文件

资源文件下载地址：

https://pan.baidu.com/s/1x2N7vl8nd2x6x7FnlQH3Cg#list/path=%2F

提取码：ksjv

将 epub 和 epub2 目录放入 /home/wwwroot/



数据库中导入book.sql



#### 登录分析1



##### 修改login/index.vue，为登录入口文件

```vue
<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      autocomplete="on"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">我爱读书</h3>
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="Username"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        ></el-input>
      </el-form-item>
      <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="Password"
            name="password"
            tabindex="2"
            autocomplete="on"
            @keyup.native="checkCapslock"
            @blur="capsTooltip = false"
            @keyup.enter.native="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-form-item>
      </el-tooltip>
      <el-button
        :loading="loading"
        type="primary"
        style="width:100%;margin-bottom:30px;"
        @click.native.prevent="handleLogin"
      >
        登录
      </el-button>
    </el-form>
  </div>
</template>
```

```vue
<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="on" label-position="left">

      <div class="title-container">
        <h3 class="title">我爱读书</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="用户名"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>

      <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="密码"
            name="password"
            tabindex="2"
            autocomplete="on"
            @keyup.native="checkCapslock"
            @blur="capsTooltip = false"
            @keyup.enter.native="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-form-item>
      </el-tooltip>

      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">Login</el-button>

<!--      <div style="position:relative">-->
<!--        <div class="tips">-->
<!--          <span>Username : admin</span>-->
<!--          <span>Password : any</span>-->
<!--        </div>-->
<!--        <div class="tips">-->
<!--          <span style="margin-right:18px;">Username : editor</span>-->
<!--          <span>Password : any</span>-->
<!--        </div>-->

<!--        <el-button class="thirdparty-button" type="primary" @click="showDialog=true">-->
<!--          Or connect with-->
<!--        </el-button>-->
<!--      </div>-->
    </el-form>

<!--    <el-dialog title="Or connect with" :visible.sync="showDialog">-->
<!--      Can not be simulated on local, so please combine you own business simulation! ! !-->
<!--      <br>-->
<!--      <br>-->
<!--      <br>-->
<!--      <social-sign />-->
<!--    </el-dialog>-->
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'
// import SocialSign from './components/SocialSignin'

export default {
  name: 'Login',
  // components: { SocialSign },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码长度必须大于6位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: '111111'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {}
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  created() {
    // window.addEventListener('storage', this.afterQRScan)
  },
  mounted() {
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    checkCapslock(e) {
      const { key } = e
      this.capsTooltip = key && key.length === 1 && (key >= 'A' && key <= 'Z')
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
    // afterQRScan() {
    //   if (e.key === 'x-admin-oauth-code') {
    //     const code = getQueryObject(e.newValue)
    //     const codeMap = {
    //       wechat: 'code',
    //       tencent: 'code'
    //     }
    //     const type = codeMap[this.auth_type]
    //     const codeName = code[type]
    //     if (codeName) {
    //       this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
    //         this.$router.push({ path: this.redirect || '/' })
    //       })
    //     } else {
    //       alert('第三方登录失败')
    //     }
    //   }
    // }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>

```



#### 安装vue-devtools插件

https://github.com/vuejs/vue-devtools

```
注意安装时切换到master分支
解压 
进入文件夹目录
cnpm install
cnpm run build

修改目录中shells->chrome->manifest.json 
将persistent 改为 true

点击加载已解压的扩展程序，然后将shells->chrome文件夹放入

重启vue项目
```



#### 配置路由

在router目录下index.js中的 asyncRoutes中配置路由

目的是区分管理员和一般登录用户

```
{
    path: '/book',
    component: Layout,
    redirect: '/book/create',
    meta: { title: '添加图书', icon: 'documentation'},
    children: [
      {
        path: '/book/create',
        component: () => import('@/views/book/create'),
        meta: { title: '上传图书', icon: 'edit'}
      }
    ]
  },
```

在views目录下创建book目录，创建create.vue

```vue
<template>
  <div>
    create
  </div>
</template>

<script>
</script>

```



在meta中加入 roles属性 当只有管理员权限时才会显示添加图书 和上传图书页面

```vue
meta: { title: '添加图书', icon: 'documentation', roles: ['admin'] },
meta: { title: '上传图书', icon: 'edit', roles: ['admin'] }
```



#### 路由和权限校验

##### 路由处理逻辑分析





##### 路由场景分析

中后台路由常见的常见如下：

- 已获取 Token：
  - 访问 `/login`：重定向到 `/`
  - 访问 `/login?redirect=/xxx`：重定向到 `/xxx`
  - 访问 `/login` 以外的路由：直接访问 `/xxx`
- 未获取 Token：
  - 访问 `/login`：直接访问 `/login`
  - 访问 `/login` 以外的路由：如访问 `/dashboard`，实际访问路径为 `/login?redirect=%2Fdashboard`，登录后会直接重定向 `/dashboard`



##### 路由逻辑源码

在main.js中引用了permission.js

```
//查看permission.js源码
//permission定义了全局路由守卫
router.beforeEach(async(to, from, next) => {
    
  debugger //可以在这里加一个debugger 进行调试
  // 启动进度条
  NProgress.start()

  // 修改页面标题
  document.title = getPageTitle(to.meta.title)

  // 从 Cookie 获取 Token
  const hasToken = getToken()

  // 判断 Token 是否存在
  if (hasToken) {
    // 如果当前路径为 login 则直接重定向至首页
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      // 判断用户的角色是否存在
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      // 如果用户角色存在，则直接访问
      if (hasRoles) {
        next()
      } else {
        try {
          // 异步获取用户的角色
          const { roles } = await store.dispatch('user/getInfo')
          // 根据用户角色，动态生成路由
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
          // 调用 router.addRoutes 动态添加路由
          router.addRoutes(accessRoutes)
          // 使用 replace 访问路由，不会在 history 中留下记录
          next({ ...to, replace: true })
        } catch (error) {
          // 移除 Token 数据
          await store.dispatch('user/resetToken')
          // 显示错误提示
          Message.error(error || 'Has Error')
          // 重定向至登录页面
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    // 如果访问的 URL 在白名单中，则直接访问
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      // 如果访问的 URL 不在白名单中，则直接重定向到登录页面，并将访问的 URL 添加到 redirect 参数中
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // 停止进度条
  NProgress.done()
})
```



##### 动态路由分析



生成动态路由的源码位于 `src/store/modules/permission.js` 中的 `generateRoutes` 方法

```
import { asyncRoutes, constantRoutes } from '@/router'

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  // 检查路由是否包含 meta 和 meta.roles 属性
  if (route.meta && route.meta.roles) {
    // 判断 route.meta.roles 中是否包含用户角色 roles 中的任何一个权限，如果包含则返回 true，否则为 false
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    // 如果路由没有 meta 或 meta.roles 属性，则视为该路由不需要进行权限控制，所有用户对该路由都具有访问权限
    return true
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes 异步加载的路由
 * @param roles 用户的角色，数组形式
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []

  // 遍历全部路由
  routes.forEach(route => {
    // 对路由进行浅拷贝，注意 children 不会拷贝，因为不需要对 children 进行判断，所以可以使用浅拷贝
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      // 当路由具有访问权限时，判断路由是否具备 children 属性
      if (tmp.children) {
        // 当路由包含 children 时，对 children 迭代调用 filterAsyncRoutes 方法
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      // 当路由具有访问权限时，将 tmp 保存到 res 中
      res.push(tmp)
    }
  })

  return res
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    // 将 routes 保存到 state 中的 addRoutes
    state.addRoutes = routes
    // 将 routes 集成到 src/router/index.js 的 constantRoutes 中
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  generateRoutes({ commit }, roles) {
    // 返回 Promise 对象
    return new Promise(resolve => {
      let accessedRoutes
      if (roles.includes('admin')) {
        // 如果角色中包含 admin，则直接跳过判断，直接将 asyncRoutes 全部返回
        accessedRoutes = asyncRoutes || []
      } else {
        // 如果角色中没有包含 admin，则调用 filterAsyncRoutes 过滤路由
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
      }
      // 将路由保存到 vuex 中
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

```

#### 总结

#### 关于路由处理

- vue-element-admin 对所有访问的路由进行拦截；
- 访问路由时会从 Cookie 中获取 Token，判断 Token 是否存在：
  - 如果 Token 存在，将根据用户角色生成动态路由，然后访问路由，生成对应的页面组件。这里有一个特例，即用户访问 `/login` 时会重定向至 `/` 路由；
  - 如果 Token 不存在，则会判断路由是否在白名单中，如果在白名单中将直接访问，否则说明该路由需要登录才能访问，此时会将路由生成一个 redirect 参数传入 login 组件，实际访问的路由为：`/login?redirect=/xxx`。

#### 关于动态路由和权限校验

- vue-element-admin 将路由分为：constantRoutes 和 asyncRoutes
- 用户登录系统时，会动态生成路由，其中 constantRoutes 必然包含，asyncRoutes 会进行过滤；
- asyncRoutes 过滤的逻辑是看路由下是否包含 meta 和 meta.roles 属性，如果没有该属性，所以这是一个通用路由，不需要进行权限校验；如果包含 roles 属性则会判断用户的角色是否命中路由中的任意一个权限，如果命中，则将路由保存下来，如果未命中，则直接将该路由舍弃；
- asyncRoutes 处理完毕后，会和 constantRoutes 合并为一个新的路由对象，并保存到 vuex 的 permission/routes 中；
- 用户登录系统后，侧边栏会从 vuex 中获取 `state.permission.routes`，根据该路由动态渲染用户菜单。



#### 侧边栏处理

##### el-menu用法解析

```
构建element-test3
vue create element-test3
加入elemment依赖
vue add element
```

在App.vue中构建如下代码

```vue
<template>
      <el-row class="tac">
        <el-col :span="12">
          <el-menu
                  default-active="1-1"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#ffd04b"
                  mode="vertical"
                  unique-opened
                  :collapse="isCollapse"
                  :collapse-transition="false"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose"
                  @select="handleSelect"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
              </template>
              <el-menu-item index="2-1">选项2-1</el-menu-item>
            </el-submenu>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col>
          <el-button @click="isCollapse = !isCollapse">折叠</el-button>
        </el-col>
      </el-row>
    </template>


<script>
export default {
  data() {
    return {
      isCollapse: false
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log('handleSelect', key, keyPath)
    },
    handleOpen(key, keyPath) {
      console.log('handleOpen', key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log('handleClose', key, keyPath)
    }
  }
}
</script>

<style>
</style>

```






##### el-menu

el-menu 表示菜单容器组件：

- `default-active`：激活的菜单，注意如果存在子菜单，需要填入子菜单 ID

- `background-color`="#545c64" //菜单的背景色

- `text-color`="#fff" //菜单的文字颜色

- `active-text-color`="#ffd04b" //当前激活菜单的文字颜色

- `unique-opened`：是否保持一个菜单打开

- `mode`：枚举值，分为 vertical 和 horizontal 两种

- `collapse`：是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）

- `collapse-transition`：是否显示折叠动画

- `@select`：点击菜单事件，keyPath 代表菜单的访问路径，如：1-4-1 菜单的点击日志为：

  ```
  handleSelect 1-4-1 (3) ["1", "1-4", "1-4-1"]
  ```

  获取 keyPath 我们可以获取 1-4-1 菜单的所有父级菜单的 ID

- `@open`：父菜单打开时触发事件 展开指定的 sub-menu 

- `@close`：父菜单关闭时触发事件 收起指定的 sub-menu



##### el-submenu

子菜单容器，el-submenu 与 el-menu 不同，el-menu 表示整个菜单，而 el-submenu 表示一个具体菜单，只是该菜单还包含了子菜单

el-submenu 可以通过定制 slot 的 title 来自定义菜单样式：

```html
<el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span>导航一</span>
    </template>
</el-submenu>
```

el-submenu 容器内 default 的 slot 用来存放子菜单，可以包含三种子菜单组件：

- `el-menu-item-group`：菜单分组，为一组菜单添加一个标题，`el-menu-item-group` 容器内容需要存放 `el-menu-item` 组件，支持通过 title 的 slot 来定制标题样式
- `el-submenu`：`el-submenu` 支持循环嵌套 `el-submenu`，这使得超过两级子组件得以实现
- `el-menu-item`：子菜单组件





#### sidebar分析

- sidebar 引用自 layout 组件，layout 组件位于 `src/layout/index.vue`
- sidebar 组件源码位于 `src/layout/components/Sidebar/index.vue`

```vue
<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  components: { SidebarItem, Logo },
  computed: {
    ...mapGetters([
      'permission_routes',
      'sidebar'
    ]),
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>

```

- activeMenu：通过 meta.activeMenu 属性，指定路由对应的高亮菜单，meta.activeMenu 需要提供一个合法的路由，否则将不能生效

- isCollapse：NavBar 中点击按钮，会修改 Cookie 中的 sidebarStatus，从 vuex 取值时会将 sidebarStatus 转为 Boolean，并判断默认是否需要收缩左侧菜单栏
- showLogo：判断 settings.js 中的配置项是否需要展示 Logo
- variables：从 `@/styles/variables.scss` 中获取 scss 对象，从而获取样式

https://www.youbaobao.xyz/admin-docs/guide/interactive/tech.html sidebar 源码中应用的一些技巧

sidebar 中通过 sidebar-item 实现子菜单，下面我们来分析 sidebar-item 组件



#### sidebar-item分析

```vue
<template>
  <div v-if="!item.hidden">
    <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow">
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}">
          <item :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)" :title="onlyOneChild.meta.title" />
        </el-menu-item>
      </app-link>
    </template>

    <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
      <template slot="title">
        <item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="item.meta.title" />
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
import { isExternal } from '@/utils/validate'
import Item from './Item'
import AppLink from './Link'
import FixiOSBug from './FixiOSBug'

export default {
  name: 'SidebarItem',
  components: { Item, AppLink },
  mixins: [FixiOSBug],
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    // To fix https://github.com/PanJiaChen/vue-admin-template/issues/237
    // TODO: refactor with render function
    this.onlyOneChild = null
    return {}
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item
          return true
        }
      })

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ... parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>

```



#### side-item props 分析

side-item 的 props 如下：

- item：路由对象
- basePath：路由路径



#### sidebar-item 展示逻辑分析

sidebar-item 最重要是展示逻辑，主要分为以下几步：

- 通过 item.hidden 控制菜单是否展示
- 通过`hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow逻辑判断 template` 菜单是否展示，template 代表单一菜单；
  - `hasOneShowingChild`：判断是否只有一个需要展示的子路由
  - `!onlyOneChild.children||onlyOneChild.noShowingChildren`：判断需要展示的子菜单，是否包含 children 属性，如果包含，则说明子菜单可能存在孙子菜单，此时则需要再判断 noShowingChildren 属性
  - `!item.alwaysShow`：判断路由中是否存在 alwaysShow 属性，如果存在，则返回 false，不展示 template 菜单，也就说只要配置了 alwaysShow 属性就会直接进入 el-submenu 组件



#### hasOneShowingChild 方法源码详解

入参：

- children：router 对象的 children 属性
- item：router 对象

```
hasOneShowingChild(children = [], parent) {
  const showingChildren = children.filter(item => {
    // 如果 children 中的路由包含 hidden 属性，则返回 false
    if (item.hidden) {
      return false
    } else {
      // 将子路由赋值给 onlyOneChild，用于只包含一个路由时展示 
      this.onlyOneChild = item
      return true
    }
  })

  // 如果过滤后，只包含展示一个路由，则返回 true
  if (showingChildren.length === 1) {
    return true
  }

  // 如果没有子路由需要展示，则将 onlyOneChild 的 path 设置空路由，并添加 noShowingChildren 属性，表示虽然有子路由，但是不需要展示子路由
  if (showingChildren.length === 0) {
    this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
    return true
  }

  // 返回 false，表示不需要展示子路由，或者超过一个需要展示的子路由
  return false
}
```



- 如果展示 template 组件，首先会展示 app-link 组件，然后是 el-menu-item，最里面嵌套的是 item 组件：

item 组件需要路由 meta 中包含 title 和 icon 属性，否则将渲染内容为空的 vnode 对象

```
<app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
  <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}">
      <item :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)" :title="onlyOneChild.meta.title" />
  </el-menu-item>
</app-link>
```



- 如果 template 菜单不展示，则展示 el-submenu 菜单，el-submenu 逻辑中采用了嵌套组件的做法，将 sidebar-item 嵌套在 el-submenu 中：

```
<el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
  <template slot="title">
    <item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="item.meta.title" />
  </template>
  <sidebar-item
    v-for="child in item.children"
    :key="child.path"
    :is-nest="true"
    :item="child"
    :base-path="resolvePath(child.path)"
    class="nest-menu"
  />
</el-submenu>
```



el-submenu 中的 sidebar-item 有两点区别：

- 第一是传入 is-nest 参数
- 第二是传入 base-path 参数



#### app-link 源码分析

app-link 是一个动态组件，通过解析 to 参数，如果包含 http 前缀则变成一个 a 标签，否则变成一个 router-link 组件

```
<template>
  <!-- eslint-disable vue/require-component-is -->
  <component v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script>
import { isExternal } from '@/utils/validate'

export default {
  props: {
    to: {
      type: String,
      required: true
    }
  },
  methods: {
    linkProps(url) {
      if (isExternal(url)) {
        return {
          is: 'a',
          href: url,
          target: '_blank',
          rel: 'noopener'
        }
      }
      return {
        is: 'router-link',
        to: url
      }
    }
  }
}
</script>
```



`isExternal` 函数通过一个正则表达式匹配 http 链接：

```
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
```



#### item 组件源码分析

item 组件通过定义 render 函数完成组件渲染

```
<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render(h, context) {
    const { icon, title } = context.props
    const vnodes = []

    if (icon) {
      vnodes.push(<svg-icon icon-class={icon}/>)
    }

    if (title) {
      vnodes.push(<span slot='title'>{(title)}</span>)
    }
    return vnodes
  }
}
</script>
```



#### 总结

- sidebar：sidebar 主要包含 el-menu 容器组件，el-menu 中遍历 vuex 中的 routes，生成 sidebar-item 组件。sidebar 主要配置项如下：
  - activeMenu：根据当前路由的 meta.activeMenu 属性控制侧边栏中高亮菜单
  - isCollapse：根据 Cookie 的 sidebarStatus 控制侧边栏是否折叠
  - variables：通过 `@/styles/variables.scss` 填充 el-menu 的基本样式
- sidebar-item：sidebar-item 分为两部分：
  - 第一部分是当只需要展示一个 children 或者没有 children 时进行展示，展示的组件包括：
    - app-link：动态组件，path 为链接时，显示为 a 标签，path 为路由时，显示为 router-link 组件
    - el-menu-item：菜单项，当 sidebar-item 为非 nest 组件时，el-menu-item 会增加 submenu-title-noDropdown 的 class
    - item：el-menu-item 里的内容，主要是 icon 和 title，当 title 为空时，整个菜单项将不会展示
  - 第二部分是当 children 超过两项时进行展示，展示的组件包括：
    - el-submenu：子菜单组件容器，用于嵌套子菜单组件
    - sidebar-item：el-submenu 迭代嵌套了 sidebar-item 组件，在 sidebar-item 组件中有两点变化：
      - 设置 is-nest 属性为 true
      - 根据 child.path 生成了 base-path 属性传入 sidebar-item 组件



```
 meta: { title: 'Dashboards', icon: 'dashboard', affix: true }
 affix表示当前的tag会被固定在tags-view中(不可被关闭)
```



#### 项目的重定向

login/index.vue中对 $route 进行监听

```
<script>
watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  }


getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
   </script>
```

`this.getOtherQuery(query)` 的用途是获取除 redirect 外的其他查询条件，登录成功后

```
handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
```

其中，完成重定向的代码为

```
 this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
```



#### 重定向组件

vue-element-admin 提供了专门的重定向组件，redirect/index.vue源码如下

```
<script>
export default {
  created() {
    const { params, query } = this.$route
    const { path } = params
    this.$router.replace({ path: '/' + path, query })
  },
  render: function(h) {
    return h() // avoid warning message
  }
}
</script>
```

重定向组件配置了动态路由：

```
{
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
}
```



这里有一个细节：

```
path: '/redirect/:path*'
```



表示匹配零个或多个路由，比如路由为 `/redirect` 时，仍然能匹配到 redirect 组件。如果将路由改为：

```
path: '/redirect/:path'
```



此时路由 `/redirect` 将只能匹配到 Layout 组件，而无法匹配到 redirect 组件

#### Breadcrumb 面包屑导航

- el-breadcrumb：面包屑导航容器，`separator` 控制面包屑导航文本中分割线
- el-breadcrumb-item：面包屑子项目，可以使用 `to` 属性切换路由，slot 中可以包含 `a` 标签来跳转到外链

```html
<el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
  <el-breadcrumb-item>活动列表</el-breadcrumb-item>
  <el-breadcrumb-item>活动详情</el-breadcrumb-item>
</el-breadcrumb>
```

> 通过设置 `separator-class` 可使用相应的 `iconfont` 作为分隔符，注意这将使 `separator` 设置失效
>
> separator-class="el-icon-arrow-right"



使用 `to` 属性和 `a` 标签切换路由区别是：`to` 属性切换路由是动态替换 `App.vue` 中的路由内容，而 `a` 标签切换路由会刷新页面。我们通过 Network 中查看请求可以论证这一点，使用 `to` 属性不会发送网络请求



#### 路由与面包屑导航映射

components/Breadcrumb/index.vue

```
getBreadcrumb() {
      // only show routes with meta.title
      let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
      const first = matched[0]

      if (!this.isDashboard(first)) {
        matched = [{ path: '/dashboard', meta: { title: 'Dashboard' }}].concat(matched)
      }

      this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
    }
```

面包屑导航实现的逻辑如下：

- 获取 `this.$route.matched`，并过滤其中不包含 `item.meta.title` 的项，生成新的面包屑导航数组 `matched`
- 判断 `matched` 第一项是否为 dashboard，如果不是，则添加 dashboard 为面包屑导航第一项
- 再次过滤 `matched` 中 `item.meta.title` 为空的项和 `item.meta.breadcrumb` 为 false 的项

> 这里的关键是 `this.$route.matched` 属性，它是一个数组，记录了路由的匹配过程，这就是面包屑导航实现的基础



`isDashboard` 实现如下：

```
isDashboard(route) {
      const name = route && route.name
      if (!name) {
        return false
      }
      return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
    }
```



#### 渲染面包屑导航

```html
<el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
        <span v-if="item.redirect==='noRedirect'||index==levelList.length-1" class="no-redirect">{{ item.meta.title }}</span>
        <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
```

`el-breadcrumb-item` 内做了一个判断，如果是最后一个元素或者路由的 `redirect` 属性指定为 `noRedirect` 则不会生成链接，否则将使用 `a` 标签生成链接，但是这里使用了 `@click.prevent` 阻止了默认 `a` 标签事件触发，而使用自定义的 `handleLink` 方法处理路由跳转，`handleLink` 方法源码如下：

```
handleLink(item) {
      const { redirect, path } = item
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      this.$router.push(this.pathCompile(path))
    }
```

```
pathCompile(path) {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params } = this.$route
      var toPath = pathToRegexp.compile(path)
      return toPath(params)
    }
```

这里的 `pathCompile` 用于解决动态路由的匹配问题



#### 登录分析2

#### 布局分析

登录组件 login.vue 布局要点如下：

- el-form 容器，包含 username 和 password 两个 el-form-item，el-form 主要属性：
  - model 为 loginForm
  - rules 为 loginRules
- password 使用了 el-tooltip 提示，当用户打开大小写时，会进行提示，主要属性：
  - manual：手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效
  - placement：提示出现的位置
- password 对应的 el-input 主要属性：
  - `@keyup.native="checkCapslock"` 键盘按键时绑定 checkCapslock 事件
  - `@keyup.enter.native="handleLogin"` 监听键盘 enter 按下后的事件

> 这里绑定 `@keyup` 事件时需要添加 `.native` 修饰符，这是因为我们的事件绑定在 el-input 组件上，所以如果不添加 `.native` 修饰符，事件将无法绑定到原生的 input 标签上

- 包含一个 el-button，点击时调用 `handleLogin` 方法，并触发 loading 效果

#### checkCapslock 方法

`checkCapslock` 方法的主要用途是监听用户键盘输入，显示提示文字的判断逻辑如下：

- 按住 shift 时输入小写字符
- 未按 shift 时输入大写字符

当按下 CapsLock 按键时，如果按下后是小写模式，则会立即消除提示文字

```
checkCapslock({ shiftKey, key } = {}) {
  if (key && key.length === 1) {
    if (shiftKey && (key >= 'a' && key <= 'z') || !shiftKey && (key >= 'A' && key <= 'Z')) {
      this.capsTooltip = true
    } else {
      this.capsTooltip = false
    }
  }
  if (key === 'CapsLock' && this.capsTooltip === true) {
    this.capsTooltip = false
  }
}
```



#### handleLogin 方法

`handleLogin` 方法处理流程如下：

- 调用 el-form 的 `validate` 方法对 rules 进行验证；
- 如果验证通过，则会调用 vuex 的 `user/login` action 进行登录验证；
- 登录验证通过后，会重定向到 redirect 路由，如果 redirect 路由不存在，则直接重定向到 `/` 路由

> 这里需要注意：由于 vuex 中的 user 指定了 namespaced 为 true，所以 dispatch 时需要加上 namespace，否则将无法调用 vuex 中的 action

```
handleLogin() {
  this.$refs.loginForm.validate(valid => {
    if (valid) {
      this.loading = true
      this.$store.dispatch('user/login', this.loginForm)
        .then(() => {
          this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
    } else {
      console.log('error submit!!')
      return false
    }
  })
}
```



this.$store.dispatch('user/login', this.loginForm)调用user/login action

位于store/module/user.js

### user/login 方法

`user/login` 方法调用了 login API，传入 username 和 password 参数，请求成功后会从 response 中获取 token，然后将 token 保存到 Cookie 中，之后返回。如果请求失败，将调用 reject 方法，交由我们自定义的 request 模块来处理异常

```
login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
}
```



调用了login方法 位于api/user.js

login API 的方法如下：

```
import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
```

这里使用 request 方法，它是一个基于 axios 封装的库，目前我们的 `/user/login` 接口是通过 mock 实现的，用户数据位于 `/mock/user.js`



#### axios 用法分析

request 库使用了 axios 的手动实例化方法 create 来封装请求，要理解其中的用法，我们需要首先学习 axios 库的用法

> [查看](http://www.axios-js.com/zh-cn/docs/) axios 官网

#### axios 基本案例

```
构建element-test4
vue create element-test4
加入elemment依赖
vue add element
cnpm i -S axios
```



我们先从一个普通的 axios 示例开始：

```
import axios from 'axios'

const url = 'https://test.youbaobao.xyz:18081/book/home/v2?openId=1234'
axios.get(url).then(response => {
  console.log(response)
})
```



上述代码可以改为：

```
const url = 'https://test.youbaobao.xyz:18081/book/home/v2'
axios.get(url, { 
  params: { openId: '1234' }
})
```



如果我们在请求时需要在 http header 中添加一个 token，需要将代码修改为：

```
const url = 'https://test.youbaobao.xyz:18081/book/home/v2'
axios.get(url, { 
  params: { openId: '1234' },
  headers: { token: 'abcd' }
}).then(response => {
  console.log(response)
})
```



如果要捕获服务端抛出的异常，即返回非 200 请求，需要将代码修改为：

```
const url = 'https://test.youbaobao.xyz:18081/book/home/v2'
axios.get(url, { 
  params: { openId: '1234' },
  headers: { token: 'abcd' }
}).then(response => {
  console.log(response)
}).catch(err => {
  console.log(err)
})
```



这样改动可以实现我们的需求，但是有两个问题：

- 每个需要传入 token 的请求都需要添加 headers 对象，会造成大量重复代码
- 每个请求都需要手动定义异常处理，而异常处理的逻辑大多是一致的，如果将其封装成通用的异常处理方法，那么每个请求都要调用一遍



#### axios.create 示例

下面我们使用 axios.create 对整个请求进行重构：

```
const url = '/book/home/v2'
const request = axios.create({
  baseURL: 'https://test.youbaobao.xyz:18081',
  timeout: 5000
})
request({
  url, 
  method: 'get',
  params: {
    openId: '1234'
  }
})
```



首先我们通过 `axios.create` 生成一个函数，该函数是 axios 实例，通过执行该方法完成请求，它与直接调用 `axios.get` 区别如下：

- 需要传入 url 参数，`axios.get` 方法的第一个参数是 url
- 需要传入 method 参数，`axios.get` 方法已经表示发起 get 请求



#### axios 请求拦截器

上述代码完成了基本请求的功能，下面我们需要为 http 请求的 headers 中添加 token，同时进行白名单校验，如 `/login` 不需要添加 token，并实现异步捕获和自定义处理：

```
const whiteUrl = [ '/login', '/book/home/v2' ]
const url = '/book/home/v2'
const request = axios.create({
  baseURL: 'https://test.youbaobao.xyz:18081',
  timeout: 5000
})
request.interceptors.request.use(
  config => {
    // throw new Error('error...')
    const url = config.url.replace(config.baseURL, '')
      if (whiteUrl.some(wl => url === wl)) {
        return config
      }
    config.headers['token'] = 'abcd'
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
request({
  url, 
  method: 'get',
  params: {
    openId: '1234'
  }
}).catch(err => {
  console.log(err)
})
```

这里核心是调用了 `request.interceptors.request.use` 方法，即 axios 的请求拦截器，该方法需要传入两个参数，第一个参数是拦截器方法，包含一个 config 参数，我们可以在这个方法中修改 config 并且进行回传，第二个参数是异常处理方法，我们可以使用 `Promise.reject(error)` 将异常返回给用户进行处理，所以我们在 request 请求后可以通过 catch 捕获异常进行自定义处理

#### axios 响应拦截器

下面我们进一步增强 axios 功能，我们在实际开发中除了需要保障 http statusCode 为 200，还需要保证业务代码正确，上述案例中，我定义了 error_code 为 0 时，表示业务返回正常，如果返回值不为 0 则说明业务处理出错，此时我们通过 `request.interceptors.response.use` 方法定义响应拦截器，它仍然需要2个参数，与请求拦截器类似，注意第二个参数主要处理 statusCode 非 200 的异常请求，源码如下

```
const whiteUrl = [ '/login', '/book/home/v2' ]
const url = '/book/home/v2'
const request = axios.create({
  baseURL: 'https://test.youbaobao.xyz:18081',
  timeout: 5000
})
request.interceptors.request.use(
  config => {
    const url = config.url.replace(config.baseURL, '')
    if (whiteUrl.some(wl => url === wl)) {
      return config
    }
    config.headers['token'] = 'abcd'
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  response => {
    const res = response.data
    if (res.error_code != 0) {
      alert(res.msg)
      return Promise.reject(new Error(res.msg))
    } else {
      return res
    }
  },
  error => {
    return Promise.reject(error)
  }
)

request({
  url, 
  method: 'get',
  params: {
    openId: '1234'
  }
}).then(response => {
  console.log(response)
}).catch(err => {
  console.log(err)
})
```



#### request.js 代码分析

有了上述基础后，我们再看 request 库源码就非常容易了

```
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    // 如果存在 token 则附带在 http header 中
    if (store.getters.token) {
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data

    if (res.code !== 20000) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      // 判断 token 失效的场景
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // 如果 token 失效，则弹出确认对话框，用户点击后，清空 token 并返回登录页面
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
```



#### 登录细节分析

####  细节一：页面启动后自动聚焦

检查用户名或密码是否为空，如果发现为空，则自动聚焦到输入框：

```
mounted() {
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
}
```

#### 细节二：显示密码后自动聚焦

切换密码显示状态后，自动聚焦 password 输入框：

```
showPwd() {
  if (this.passwordType === 'password') {
    this.passwordType = ''
  } else {
    this.passwordType = 'password'
  }
  this.$nextTick(() => {
    this.$refs.password.focus()
  })
}
```



#### 细节三：通过 reduce 过滤对象属性,acc会进行叠加

{}->{a:"1"}->{a:"1",b:"2"}

http://localhost:9527/#/login?redirect=%2Fdashboard&a=1&b=2

```
watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  
  getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
```

#### 关闭mock接口

去掉 main.js 中 mock 相关代码：

```
import { mockXHR } from '../mock'
if (process.env.NODE_ENV === 'production') {
  mockXHR()
}
```



删除 `src/api` 目录下 2 个 api 文件：

```bash
article.js
qiniu.js
```



删除 `vue.config.js` 中的相关配置：

```
proxy: {
  // change xxx-api/login => mock/login
  // detail: https://cli.vuejs.org/config/#devserver-proxy
  [process.env.VUE_APP_BASE_API]: {
    target: `http://127.0.0.1:${port}/mock`,
    changeOrigin: true,
    pathRewrite: {
      ['^' + process.env.VUE_APP_BASE_API]: ''
    }
  }
},
after: require('./mock/mock-server.js')
```



修改后我们的项目里就不能使用 mock 接口，会直接请求到 http 接口，我们需要打开 SwitchHosts 配置 host 映射，让域名映射到本地 node 项目：

```bash
127.0.0.1	book.youbaobao.xyz
```

也可以直接修改 `/etc/hosts` 文件

## 修改接口地址

我们将发布到开发环境和生产环境，所以需要修改 `.env.development` 和 `.env.production` 两个配置文件：

```bash
VUE_APP_BASE_API = 'https://book.youbaobao.xyz:18082'
# VUE_APP_BASE_API = '/dev-api'
```

有两点需要注意：

- 这里我使用了域名 `book.youbaobao.xyz`，大家可以将其替换为你自己注册的域名，如果你还没注册域名，用 `localhost` 也是可行的，但如果要发布到互联网需要注册域名
- 如果没有申请 https 证书，可以采用 http 协议，同样可以实现登录请求，但是如果你要发布到互联网上建议使用 https 协议安全性会更好

重新启动项目后，发现登录接口已指向我们指定的接口：

```bash
Request URL: https://book.youbaobao.xyz:18082/user/login
```



#### 后端api处理流程





