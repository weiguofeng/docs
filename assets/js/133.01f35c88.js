(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{1927:function(t,s,p){t.exports=p.p+"assets/img/1638773042828.16479435.png"},1928:function(t,s,p){t.exports=p.p+"assets/img/1638772510047.f85287dc.png"},1929:function(t,s,p){t.exports=p.p+"assets/img/1638772568134.77dd0d94.png"},1930:function(t,s,p){t.exports=p.p+"assets/img/1638773289030.ccb26b74.png"},1931:function(t,s,p){t.exports=p.p+"assets/img/1638773444955.430830f9.png"},1932:function(t,s,p){t.exports=p.p+"assets/img/1638773771589.01c89301.png"},1933:function(t,s,p){t.exports=p.p+"assets/img/1638773960034.05b0548c.png"},1934:function(t,s,p){t.exports=p.p+"assets/img/1638774044019.28d65e08.png"},1935:function(t,s,p){t.exports=p.p+"assets/img/1638774490245.3acd8bee.png"},1936:function(t,s,p){t.exports=p.p+"assets/img/1638775786710.61b892a2.png"},1937:function(t,s,p){t.exports=p.p+"assets/img/1638774324230.0b97e326.png"},1938:function(t,s,p){t.exports=p.p+"assets/img/1638778595245.40c81856.png"},1939:function(t,s,p){t.exports=p.p+"assets/img/1638778741068.e4629116.png"},1940:function(t,s,p){t.exports=p.p+"assets/img/1638778819929.06dc5f27.png"},1941:function(t,s,p){t.exports=p.p+"assets/img/1638778908998.1f9e15a2.png"},1942:function(t,s,p){t.exports=p.p+"assets/img/1638780040369.fdb4dd21.png"},1943:function(t,s,p){t.exports=p.p+"assets/img/1638780113723.c435ce8c.png"},1944:function(t,s,p){t.exports=p.p+"assets/img/1638780193416.e6fbec2f.png"},8290:function(t,s,p){"use strict";p.r(s);var e=p(5),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_13-后端sidemenu"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-后端sidemenu"}},[t._v("#")]),t._v(" 13.后端SideMenu")]),t._v(" "),e("p",[t._v("我们先放入一个db.json的数据文件")]),t._v(" "),e("p",[e("img",{attrs:{src:p(1927),alt:"1638773042828"}})]),t._v(" "),e("p",[t._v("​\t\t然后用JSONServer给运行起来")]),t._v(" "),e("p",[e("img",{attrs:{src:p(1928),alt:"1638772510047"}})]),t._v(" "),e("p",[t._v("我们访问一下这个地址：可以看到Resources给我们提供了很多的接口")]),t._v(" "),e("p",[e("img",{attrs:{src:p(1929),alt:"1638772568134"}})]),t._v(" "),e("p",[t._v("我们后端SideMenu需要的接口就是rights这个接口的数据---然后我们发现这个接口没有下级的属性--就是没有下一层，比如我们之前使用的是children 属性作为下一层，在这里下一层可以调用另外一个接口-children这个接口来获取下级的数据")]),t._v(" "),e("p",[t._v("我们可以看一下这个children接口")]),t._v(" "),e("p",[t._v("​\t\t发现接口中的数据有rightId--可以向上关联获取到具体的 right接口的数据")]),t._v(" "),e("p",[e("img",{attrs:{src:p(1930),alt:"1638773289030"}})]),t._v(" "),e("p",[t._v("我们看一下这个rights接口：")]),t._v(" "),e("p",[t._v("​\t\tchildren接口中rightId是2的都属于用户管理下的内容")]),t._v(" "),e("p",[e("img",{attrs:{src:p(1931),alt:"1638773444955"}})]),t._v(" "),e("p",[t._v("我们关联一下请求共同返回的效果看看---数据是我们正好需要的")]),t._v(" "),e("p",[e("img",{attrs:{src:p(1932),alt:"1638773771589"}})]),t._v(" "),e("h4",{attrs:{id:"代码实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[t._v("#")]),t._v(" 代码实现：")]),t._v(" "),e("p",[t._v("​\t\t发起请求：")]),t._v(" "),e("p",[e("img",{attrs:{src:p(1933),alt:"1638773960034"}})]),t._v(" "),e("p",[t._v("我们的数据是可以获取到的没有问题")]),t._v(" "),e("p",[e("img",{attrs:{src:p(1934),alt:"1638774044019"}})]),t._v(" "),e("p",[t._v("在我们获取到数据展示的时候，需要区分权限，而我们现在的权限和后台的约定是pagepermisson字段不为空的时候才显示---这个字段的用处还是比较大的，后期可以用于菜单显示的开关标识字段")]),t._v(" "),e("p",[e("img",{attrs:{src:p(1935),alt:"1638774490245"}})]),t._v(" "),e("p",[t._v("将请求回来的数据放入")]),t._v(" "),e("p",[e("img",{attrs:{src:p(1936),alt:"1638775786710"}})]),t._v(" "),e("p",[t._v("页面数据获取成功，可以全部展示")]),t._v(" "),e("p",[e("img",{attrs:{src:p(1937),alt:"1638774324230"}})]),t._v(" "),e("p",[t._v("在页面渲染的时候加入判断，判断是否渲染")]),t._v(" "),e("p",[t._v("​\t我们除了判断children 还需要其他判断放入一个函数中进行")]),t._v(" "),e("p",[e("img",{attrs:{src:p(1938),alt:"1638778595245"}})]),t._v(" "),e("p",[t._v("Menu.Item也需要判断一下")]),t._v(" "),e("p",[e("img",{attrs:{src:p(1939),alt:"1638778741068"}})]),t._v(" "),e("p",[t._v("函数中判断pagepermisson===1的时候为真true ，其他的为false")]),t._v(" "),e("p",[e("img",{attrs:{src:p(1940),alt:"1638778819929"}})]),t._v(" "),e("p",[t._v("然后我们现在再看一下菜单栏效果：")]),t._v(" "),e("p",[t._v("​\t\t\t发现菜单正常显示了")]),t._v(" "),e("p",[e("img",{attrs:{src:p(1941),alt:"1638778908998"}})]),t._v(" "),e("p",[t._v("目前我们的icon图标不能显示---我们需要自己做一个icon图标映射表")]),t._v(" "),e("p",[t._v("​\t我们把路径作为key 然后把图标组件作为value")]),t._v(" "),e("p",[e("img",{attrs:{src:p(1942),alt:"1638780040369"}})]),t._v(" "),e("p",[t._v("元素中获取icon对应的组件属性")]),t._v(" "),e("p",[e("img",{attrs:{src:p(1943),alt:"1638780113723"}})]),t._v(" "),e("p",[t._v("我们看一下页面效果：有图标了")]),t._v(" "),e("p",[e("img",{attrs:{src:p(1944),alt:"1638780193416"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);