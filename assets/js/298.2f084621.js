(window.webpackJsonp=window.webpackJsonp||[]).push([[298],{4166:function(t,s,a){t.exports=a.p+"assets/img/1683623770320.f5ba5e03.png"},4167:function(t,s,a){t.exports=a.p+"assets/img/1683624258495.1da31f3d.png"},4168:function(t,s,a){t.exports=a.p+"assets/img/1683631204139.8668be3d.png"},4169:function(t,s,a){t.exports=a.p+"assets/img/1683631471716.6b48a9c9.png"},4170:function(t,s,a){t.exports=a.p+"assets/img/1683631702489.d4af2d9c.png"},4171:function(t,s,a){t.exports=a.p+"assets/img/1683631801503.a43677f4.png"},4172:function(t,s,a){t.exports=a.p+"assets/img/1683631983479.a2c182a1.png"},4173:function(t,s,a){t.exports=a.p+"assets/img/1683632379355.afa48df0.png"},4174:function(t,s,a){t.exports=a.p+"assets/img/1683632475038.bbf0f632.png"},4175:function(t,s,a){t.exports=a.p+"assets/img/1683632636563.3ec383ec.png"},8540:function(t,s,a){"use strict";a.r(s);var r=a(5),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"_32、docker-compose命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_32、docker-compose命令"}},[t._v("#")]),t._v(" 32、docker-compose命令")]),t._v(" "),r("p",[t._v("​\t\t操作docker-compose的命令")]),t._v(" "),r("p",[t._v("​")]),t._v(" "),r("p",[t._v("​\t\t在docker-compose命令的后面 可以跟 项目，也可以是项目中的某个服务，如果什么都不跟 那么默认是对项目进行操作")]),t._v(" "),r("h4",{attrs:{id:"_1、up-命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1、up-命令"}},[t._v("#")]),t._v(" 1、up 命令")]),t._v(" "),r("p",[t._v("​\t\t\t会自动完成构建镜像，创建启动服务 -- 我们大部分使用这个命令来启动")]),t._v(" "),r("p",[t._v("​")]),t._v(" "),r("p",[t._v("​\t\t\t这个up命令的后面也可以跟 service")]),t._v(" "),r("p",[t._v("​\t\t\t\tup 【服务id】  -- 这个意思是只启动docker-compose中的某个服务")]),t._v(" "),r("p",[t._v("​")]),t._v(" "),r("p",[r("img",{attrs:{src:a(4166),alt:"1683623770320"}})]),t._v(" "),r("p",[t._v("​\t"),r("img",{attrs:{src:a(4167),alt:"1683624258495"}})]),t._v(" "),r("h4",{attrs:{id:"_2、down-命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2、down-命令"}},[t._v("#")]),t._v(" 2、down 命令")]),t._v(" "),r("p",[t._v("​\tdocker-compose down 对整个项目的停止")]),t._v(" "),r("p",[t._v("​\tdocker-compose down 服务id  关闭单个服务")]),t._v(" "),r("p",[t._v("​\tdown的时候 会移除镜像-----还会移除网桥")]),t._v(" "),r("p",[r("img",{attrs:{src:a(4168),alt:"1683631204139"}})]),t._v(" "),r("h4",{attrs:{id:"_3、exec-命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3、exec-命令"}},[t._v("#")]),t._v(" 3、exec 命令")]),t._v(" "),r("p",[t._v("​\t\t这个命令只能针对于具体的某个服务 -- 作用是进入到某个服务内部")]),t._v(" "),r("p",[t._v("​\t\tdocker-compose exec 服务id bash")]),t._v(" "),r("p",[r("img",{attrs:{src:a(4169),alt:"1683631471716"}})]),t._v(" "),r("h4",{attrs:{id:"_4、ps命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4、ps命令"}},[t._v("#")]),t._v(" 4、ps命令")]),t._v(" "),r("p",[t._v("​\t\t 列出所有运行的服务")]),t._v(" "),r("h4",{attrs:{id:"_5、restart-命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5、restart-命令"}},[t._v("#")]),t._v(" 5、restart 命令")]),t._v(" "),r("p",[t._v("​\t\t重启服务或项目")]),t._v(" "),r("p",[r("img",{attrs:{src:a(4170),alt:"1683631702489"}})]),t._v(" "),r("h4",{attrs:{id:"_6、rm命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6、rm命令"}},[t._v("#")]),t._v(" 6、rm命令")]),t._v(" "),r("p",[t._v("​\t\t删除某个服务 -- 只能删除停止的服务，也可以强制删除 加f参数")]),t._v(" "),r("p",[r("img",{attrs:{src:a(4171),alt:"1683631801503"}})]),t._v(" "),r("h4",{attrs:{id:"_7、start-stop-启动和停止服务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7、start-stop-启动和停止服务"}},[t._v("#")]),t._v(" 7、start--stop 启动和停止服务")]),t._v(" "),r("p",[r("img",{attrs:{src:a(4172),alt:"1683631983479"}})]),t._v(" "),r("h4",{attrs:{id:"_8、top-指令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8、top-指令"}},[t._v("#")]),t._v(" 8、top 指令")]),t._v(" "),r("p",[t._v("​\t\t\t\tdocker-compose top 服务id")]),t._v(" "),r("p",[t._v("​\t\t\t\t查看整个项目的所有服务容器内运行的进程，或 查看某个指定id服务的容器的进程")]),t._v(" "),r("h4",{attrs:{id:"_9、pause-和-unpause"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_9、pause-和-unpause"}},[t._v("#")]),t._v(" 9、pause 和 unpause")]),t._v(" "),r("p",[t._v("​\t\t\t暂停和恢复")]),t._v(" "),r("p",[t._v("​")]),t._v(" "),r("p",[r("img",{attrs:{src:a(4173),alt:"1683632379355"}})]),t._v(" "),r("p",[t._v("​\t单独恢复某个服务")]),t._v(" "),r("p",[r("img",{attrs:{src:a(4174),alt:"1683632475038"}})]),t._v(" "),r("h4",{attrs:{id:"_10、logs指令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_10、logs指令"}},[t._v("#")]),t._v(" 10、logs指令")]),t._v(" "),r("p",[t._v("​\t\tdocker-compose logs 服务id")]),t._v(" "),r("p",[t._v("​\t\t查看服务的日志")]),t._v(" "),r("p",[t._v("​\t\t如果加上 -f 就代表实时的运行日志")]),t._v(" "),r("p",[r("img",{attrs:{src:a(4175),alt:"1683632636563"}})]),t._v(" "),r("p",[t._v("https://www.bilibili.com/video/BV1wQ4y1Y7SE?p=32&spm_id_from=pageDriver&vd_source=243ad3a9b323313aa1441e5dd414a4ef")])])}),[],!1,null,null,null);s.default=e.exports}}]);