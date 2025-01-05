(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{2123:function(t,s,e){t.exports=e.p+"assets/img/1628500927140.6b911188.png"},2124:function(t,s,e){t.exports=e.p+"assets/img/1628501104692.0f9a3a72.png"},2125:function(t,s,e){t.exports=e.p+"assets/img/1628501124987.2f98b3f4.png"},2126:function(t,s,e){t.exports=e.p+"assets/img/1628501284811.df3d3ca5.png"},2127:function(t,s,e){t.exports=e.p+"assets/img/1628501307336.6b7cd191.png"},2128:function(t,s,e){t.exports=e.p+"assets/img/1628501614860.65d39f59.png"},2129:function(t,s,e){t.exports=e.p+"assets/img/1628501641872.e6cea5b3.png"},2130:function(t,s,e){t.exports=e.p+"assets/img/1628501915980.f906c803.png"},2131:function(t,s,e){t.exports=e.p+"assets/img/1628502197139.48d41b81.png"},2132:function(t,s,e){t.exports=e.p+"assets/img/1628502482485.3fd73dba.png"},2133:function(t,s,e){t.exports=e.p+"assets/img/1628502687624.0cd721cb.png"},2134:function(t,s,e){t.exports=e.p+"assets/img/1628502705906.608dbe7c.png"},2135:function(t,s,e){t.exports=e.p+"assets/img/1628502759695.d90f6eb8.png"},2136:function(t,s,e){t.exports=e.p+"assets/img/1628502778812.53ad3e62.png"},2137:function(t,s,e){t.exports=e.p+"assets/img/1628503300491.d04fe7f8.png"},2138:function(t,s,e){t.exports=e.p+"assets/img/1628503413792.7f899f36.png"},2139:function(t,s,e){t.exports=e.p+"assets/img/1628503518251.e5ba37eb.png"},2140:function(t,s,e){t.exports=e.p+"assets/img/1628503538034.0963c59e.png"},2141:function(t,s,e){t.exports=e.p+"assets/img/1628503657165.d6e251e7.png"},2142:function(t,s,e){t.exports=e.p+"assets/img/1628503696833.7af5511b.png"},2143:function(t,s,e){t.exports=e.p+"assets/img/1628503860546.72ef0816.png"},2144:function(t,s,e){t.exports=e.p+"assets/img/1628503886502.fced9fe3.png"},2145:function(t,s,e){t.exports=e.p+"assets/img/1628503999816.8b74df17.png"},9310:function(t,s,e){"use strict";e.r(s);var a=e(5),p=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_2-setstate方法的说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-setstate方法的说明"}},[t._v("#")]),t._v(" 2.setState方法的说明")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\t我们在更新的数据的时候调用的setState方法，当我们调用完修改值后立即打印新值，发现还是原来的旧值，那么发现原来他是异步操作的。\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:e(2123),alt:"1628500927140"}})]),t._v(" "),a("p",[t._v("代码验证：")]),t._v(" "),a("p",[a("img",{attrs:{src:e(2124),alt:"1628501104692"}})]),t._v(" "),a("p",[t._v("我们发现并没有及时更新")]),t._v(" "),a("p",[a("img",{attrs:{src:e(2125),alt:"1628501124987"}})]),t._v(" "),a("p",[t._v("比如：setState是可以调用多次的，假如我们调用2次")]),t._v(" "),a("p",[a("img",{attrs:{src:e(2126),alt:"1628501284811"}})]),t._v(" "),a("p",[t._v("调用俩次结果不应该是3吗？结果是2")]),t._v(" "),a("p",[a("img",{attrs:{src:e(2127),alt:"1628501307336"}})]),t._v(" "),a("p",[t._v("因为是异步更新的，所以拿到的值是还没有更新过的值")]),t._v(" "),a("p",[t._v("我们调用了多次setState那么他自动调用render的次数是几次呢？")]),t._v(" "),a("p",[t._v("测试：")]),t._v(" "),a("p",[a("img",{attrs:{src:e(2128),alt:"1628501614860"}})]),t._v(" "),a("p",[t._v("发现render是执行了一次")]),t._v(" "),a("p",[a("img",{attrs:{src:e(2129),alt:"1628501641872"}})]),t._v(" "),a("p",[t._v("为什么会这么做呢？其实是为了性能的考虑，如果调用一次setState就掉render渲染一次，会很消耗资源的，如果是调用多次setState的话他会进行多次后的合并，然后调用一次render进行渲染展示最终的setState")]),t._v(" "),a("p",[a("img",{attrs:{src:e(2130),alt:"1628501915980"}})]),t._v(" "),a("h4",{attrs:{id:"_2-推荐语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-推荐语法"}},[t._v("#")]),t._v(" 2.推荐语法")]),t._v(" "),a("p",[a("img",{attrs:{src:e(2131),alt:"1628502197139"}})]),t._v(" "),a("p",[t._v("传一个回调函数进来，有2个参数state-代表最新的state，props-代表最新的props")]),t._v(" "),a("p",[t._v("然后再return一个新的对象，将来这个回调函数返回的这个状态就是要更新的对象 了。")]),t._v(" "),a("p",[t._v("通过state就可以拿到最新的值了，就不需要之前this。state的取值了")]),t._v(" "),a("p",[a("img",{attrs:{src:e(2132),alt:"1628502482485"}})]),t._v(" "),a("p",[t._v("他也是异步更新的")]),t._v(" "),a("p",[t._v("他和之前的区别就是使用回调函数，那么使用回调函数有什么区别呢？就是如果调用多次的话，每次的新值是最新的，多次调用逻辑上不会发生问题，如果是之前不使用回调的方式，多次调用发现值都是一样的")]),t._v(" "),a("p",[a("img",{attrs:{src:e(2133),alt:"1628502687624"}})]),t._v(" "),a("p",[a("img",{attrs:{src:e(2134),alt:"1628502705906"}})]),t._v(" "),a("p",[a("img",{attrs:{src:e(2135),alt:"1628502759695"}})]),t._v(" "),a("p",[t._v("我们发现第二次调用的state是最新的值，是第一次state处理过的新值了")]),t._v(" "),a("p",[a("img",{attrs:{src:e(2136),alt:"1628502778812"}})]),t._v(" "),a("p",[t._v("那么这样写的方式，稍微比之前不使用回调函数的方式复杂了一些，但是这样写符合我们思维方式的逻辑性写代码过程，如果state可能改变多次也是符合要求的。")]),t._v(" "),a("h4",{attrs:{id:"_3-setstate的第二个参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-setstate的第二个参数"}},[t._v("#")]),t._v(" 3.setState的第二个参数")]),t._v(" "),a("p",[t._v("​\t\t如果你希望在状态更新和页面渲染之后 做一些事情的话，可以使用setState的第二个参数")]),t._v(" "),a("p",[a("img",{attrs:{src:e(2137),alt:"1628503300491"}})]),t._v(" "),a("p",[a("img",{attrs:{src:e(2138),alt:"1628503413792"}})]),t._v(" "),a("p",[a("img",{attrs:{src:e(2139),alt:"1628503518251"}})]),t._v(" "),a("p",[a("img",{attrs:{src:e(2140),alt:"1628503538034"}})]),t._v(" "),a("p",[t._v("我们看看是在渲染之前还是渲染之后获取到的值，就是先渲染，还是先获取到修改的值再渲染")]),t._v(" "),a("p",[a("img",{attrs:{src:e(2141),alt:"1628503657165"}})]),t._v(" "),a("p",[t._v("也就是说拿到的已经是渲染过的数据了")]),t._v(" "),a("p",[a("img",{attrs:{src:e(2142),alt:"1628503696833"}})]),t._v(" "),a("p",[t._v("那就说明：是更新完成，并且渲染完成后我们可以使用setState的第二个参数，进行一些操作")]),t._v(" "),a("p",[a("img",{attrs:{src:e(2143),alt:"1628503860546"}})]),t._v(" "),a("p",[t._v("标题发生改变")]),t._v(" "),a("p",[a("img",{attrs:{src:e(2144),alt:"1628503886502"}})]),t._v(" "),a("p",[a("img",{attrs:{src:e(2145),alt:"1628503999816"}})])])}),[],!1,null,null,null);s.default=p.exports}}]);