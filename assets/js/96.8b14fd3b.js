(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{6066:function(t,s,a){t.exports=a.p+"assets/img/1673180100012.74bb6ea3.png"},6067:function(t,s,a){t.exports=a.p+"assets/img/1673180533659.daf2725d.png"},6068:function(t,s,a){t.exports=a.p+"assets/img/1673180616516.593adbb6.png"},6069:function(t,s,a){t.exports=a.p+"assets/img/1673180651282.eaf266a7.png"},6070:function(t,s,a){t.exports=a.p+"assets/img/1673180784264.d4d27039.png"},6071:function(t,s,a){t.exports=a.p+"assets/img/1673180845653.cf65d721.png"},6072:function(t,s,a){t.exports=a.p+"assets/img/1673180960018.01947502.png"},6073:function(t,s,a){t.exports=a.p+"assets/img/1673180996823.cd2ac5bf.png"},6074:function(t,s,a){t.exports=a.p+"assets/img/1673181182287.e16b2f67.png"},6075:function(t,s,a){t.exports=a.p+"assets/img/1673181205469.994dfad2.png"},6076:function(t,s,a){t.exports=a.p+"assets/img/1673181402176.2521091a.png"},6077:function(t,s,a){t.exports=a.p+"assets/img/1673181511626.dd8d919c.png"},6078:function(t,s,a){t.exports=a.p+"assets/img/1673181676469.f4ab01a3.png"},6079:function(t,s,a){t.exports=a.p+"assets/img/1673181749463.c4ec48c6.png"},6080:function(t,s,a){t.exports=a.p+"assets/img/1673181767046.ad024fa0.png"},6081:function(t,s,a){t.exports=a.p+"assets/img/1673770227275.f63b6840.png"},6082:function(t,s,a){t.exports=a.p+"assets/img/1673770303839.52ea2846.png"},6083:function(t,s,a){t.exports=a.p+"assets/img/1673770707858.748b8dfb.png"},6084:function(t,s,a){t.exports=a.p+"assets/img/1673770733072.9ce29314.png"},6085:function(t,s,a){t.exports=a.p+"assets/img/1673771133946.51c0a1f4.png"},6086:function(t,s,a){t.exports=a.p+"assets/img/1673771151151.73211457.png"},6087:function(t,s,a){t.exports=a.p+"assets/img/1673771272421.e35a290c.png"},8805:function(t,s,a){"use strict";a.r(s);var r=a(5),p=Object(r.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"_4、stream流中间方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4、stream流中间方法"}},[t._v("#")]),t._v(" 4、Stream流中间方法")]),t._v(" "),r("h4",{attrs:{id:"_1、常见的中间方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1、常见的中间方法"}},[t._v("#")]),t._v(" 1、常见的中间方法")]),t._v(" "),r("p",[t._v("​")]),t._v(" "),r("p",[t._v("​\t\t注意合并流 concat 是将俩个流合并为一个，类型需要一致，如果不一致也是 父子关系的类型才可以")]),t._v(" "),r("p",[r("img",{attrs:{src:a(6066),alt:"1673180100012"}})]),t._v(" "),r("p",[t._v("​\t中间方法的一系列操作 对原集合数据是不影响的，因为我们只是操作或修改流中的集合数据。")]),t._v(" "),r("h4",{attrs:{id:"_2、案例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2、案例"}},[t._v("#")]),t._v(" 2、案例")]),t._v(" "),r("h4",{attrs:{id:"_2-1、filter方法-过滤"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1、filter方法-过滤"}},[t._v("#")]),t._v(" 2.1、filter方法 -- 过滤")]),t._v(" "),r("p",[t._v("​\t\t我们先以内部类的方式实现一下")]),t._v(" "),r("p",[r("img",{attrs:{src:a(6067),alt:"1673180533659"}})]),t._v(" "),r("p",[t._v("使用lamda的方式")]),t._v(" "),r("p",[r("img",{attrs:{src:a(6068),alt:"1673180616516"}})]),t._v(" "),r("p",[t._v("输出没有问题")]),t._v(" "),r("p",[r("img",{attrs:{src:a(6069),alt:"1673180651282"}})]),t._v(" "),r("p",[t._v("​\t为了测试stream是否只能使用一次--我们使用变量的方式重复调用试试")]),t._v(" "),r("p",[r("img",{attrs:{src:a(6070),alt:"1673180784264"}})]),t._v(" "),r("p",[t._v("​\t\t现在是没有问题，数据也没问题")]),t._v(" "),r("p",[r("img",{attrs:{src:a(6071),alt:"1673180845653"}})]),t._v(" "),r("p",[t._v("​\t但是如果现在我们还想再使用一次stream1---发现会报错")]),t._v(" "),r("p",[r("img",{attrs:{src:a(6072),alt:"1673180960018"}})]),t._v(" "),r("p",[t._v("​\t错误提示：流已经关闭了")]),t._v(" "),r("p",[r("img",{attrs:{src:a(6073),alt:"1673180996823"}})]),t._v(" "),r("p",[t._v("​\t因为只能使用一次stream 所以就没有必要使用变量的方式使用了--使用链式编程")]),t._v(" "),r("p",[t._v("​\t修改流中的数据不会影响到 原集合数据--我们验证一下")]),t._v(" "),r("p",[r("img",{attrs:{src:a(6074),alt:"1673181182287"}})]),t._v(" "),r("p",[t._v("​\t确实不会影响到")]),t._v(" "),r("p",[r("img",{attrs:{src:a(6075),alt:"1673181205469"}})]),t._v(" "),r("h4",{attrs:{id:"_2-2、limit方法-获取前几个数据"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2、limit方法-获取前几个数据"}},[t._v("#")]),t._v(" 2.2、limit方法 -- 获取前几个数据")]),t._v(" "),r("p",[r("img",{attrs:{src:a(6076),alt:"1673181402176"}})]),t._v(" "),r("h4",{attrs:{id:"_2-3、skip方法-跳过几个数据"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-3、skip方法-跳过几个数据"}},[t._v("#")]),t._v(" 2.3、skip方法 -- 跳过几个数据")]),t._v(" "),r("p",[t._v("​\t跳过前4个数据")]),t._v(" "),r("p",[r("img",{attrs:{src:a(6077),alt:"1673181511626"}})]),t._v(" "),r("p",[t._v("练习：")]),t._v(" "),r("p",[r("img",{attrs:{src:a(6078),alt:"1673181676469"}})]),t._v(" "),r("p",[t._v("​\t第二种思路：")]),t._v(" "),r("p",[r("img",{attrs:{src:a(6079),alt:"1673181749463"}})]),t._v(" "),r("p",[r("img",{attrs:{src:a(6080),alt:"1673181767046"}})]),t._v(" "),r("h4",{attrs:{id:"_2-4、distinct方法-去重"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-4、distinct方法-去重"}},[t._v("#")]),t._v(" 2.4、distinct方法-去重")]),t._v(" "),r("p",[t._v("​\t\t\t注意 使用distinct方法可能需要重写equals和hashcode方法")]),t._v(" "),r("p",[r("img",{attrs:{src:a(6081),alt:"1673770227275"}})]),t._v(" "),r("p",[t._v("​\t\t查看运行结果：张无忌-显示一条说明已经去重了")]),t._v(" "),r("p",[r("img",{attrs:{src:a(6082),alt:"1673770303839"}})]),t._v(" "),r("h4",{attrs:{id:"_2-5、concat合并-流"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-5、concat合并-流"}},[t._v("#")]),t._v(" 2.5、concat合并 流")]),t._v(" "),r("p",[t._v("​\t\t\t\t合并流要保证俩个流中的数据类型是一致的")]),t._v(" "),r("p",[r("img",{attrs:{src:a(6083),alt:"1673770707858"}})]),t._v(" "),r("p",[t._v("​\t合并成功：")]),t._v(" "),r("p",[r("img",{attrs:{src:a(6084),alt:"1673770733072"}})]),t._v(" "),r("h4",{attrs:{id:"_2-6-map方法-数据类型转换"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-map方法-数据类型转换"}},[t._v("#")]),t._v(" 2.6 map方法，数据类型转换")]),t._v(" "),r("p",[t._v("​\t我们先以匿名内部类的方式写一下")]),t._v(" "),r("p",[r("img",{attrs:{src:a(6085),alt:"1673771133946"}})]),t._v(" "),r("p",[t._v("​\t运行程序，没有问题")]),t._v(" "),r("p",[r("img",{attrs:{src:a(6086),alt:"1673771151151"}})]),t._v(" "),r("p",[t._v("​\t我们使用lambda表达式的形式")]),t._v(" "),r("p",[r("img",{attrs:{src:a(6087),alt:"1673771272421"}})]),t._v(" "),r("p",[t._v("https://www.bilibili.com/video/BV1te411w722/?p=4&spm_id_from=pageDriver&vd_source=243ad3a9b323313aa1441e5dd414a4ef")])])}),[],!1,null,null,null);s.default=p.exports}}]);