(window.webpackJsonp=window.webpackJsonp||[]).push([[545],{1339:function(e,n,s){e.exports=s.p+"assets/img/1608737583003.816e41f3.png"},1340:function(e,n,s){e.exports=s.p+"assets/img/1608737614472.092e0fe2.png"},1341:function(e,n,s){e.exports=s.p+"assets/img/1608737631797.f1fce365.png"},8307:function(e,n,s){"use strict";s.r(n);var a=s(5),t=Object(a.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"springbean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springbean"}},[e._v("#")]),e._v(" SpringBean")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E5%89%8D%E8%A8%80"}},[e._v("前言")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#%E4%B8%80-bean%E7%9A%84%E4%BD%9C%E7%94%A8%E5%9F%9F"}},[e._v("一  bean的作用域")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#1-singleton%E2%80%94%E2%80%94%E5%94%AF%E4%B8%80-bean-%E5%AE%9E%E4%BE%8B"}},[e._v("1. singleton——唯一 bean 实例")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#2-prototype%E2%80%94%E2%80%94%E6%AF%8F%E6%AC%A1%E8%AF%B7%E6%B1%82%E9%83%BD%E4%BC%9A%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E6%96%B0%E7%9A%84-bean-%E5%AE%9E%E4%BE%8B"}},[e._v("2. prototype——每次请求都会创建一个新的 bean 实例")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#3-request%E2%80%94%E2%80%94%E6%AF%8F%E4%B8%80%E6%AC%A1http%E8%AF%B7%E6%B1%82%E9%83%BD%E4%BC%9A%E4%BA%A7%E7%94%9F%E4%B8%80%E4%B8%AA%E6%96%B0%E7%9A%84bean%EF%BC%8C%E8%AF%A5bean%E4%BB%85%E5%9C%A8%E5%BD%93%E5%89%8Dhttp-request%E5%86%85%E6%9C%89%E6%95%88"}},[e._v("3. request——每一次HTTP请求都会产生一个新的bean，该bean仅在当前HTTP request内有效")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#4-session%E2%80%94%E2%80%94%E6%AF%8F%E4%B8%80%E6%AC%A1http%E8%AF%B7%E6%B1%82%E9%83%BD%E4%BC%9A%E4%BA%A7%E7%94%9F%E4%B8%80%E4%B8%AA%E6%96%B0%E7%9A%84-bean%EF%BC%8C%E8%AF%A5bean%E4%BB%85%E5%9C%A8%E5%BD%93%E5%89%8D-http-session-%E5%86%85%E6%9C%89%E6%95%88"}},[e._v("4. session——每一次HTTP请求都会产生一个新的 bean，该bean仅在当前 HTTP session 内有效")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#5-globalsession"}},[e._v("5. globalSession")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#%E4%BA%8C-bean%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F"}},[e._v("二  bean的生命周期")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#initialization-%E5%92%8C-destroy"}},[e._v("initialization 和 destroy")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#%E5%AE%9E%E7%8E%B0*aware%E6%8E%A5%E5%8F%A3-%E5%9C%A8bean%E4%B8%AD%E4%BD%BF%E7%94%A8spring%E6%A1%86%E6%9E%B6%E7%9A%84%E4%B8%80%E4%BA%9B%E5%AF%B9%E8%B1%A1"}},[e._v("实现*Aware接口 在Bean中使用Spring框架的一些对象")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#beanpostprocessor"}},[e._v("BeanPostProcessor")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#%E6%80%BB%E7%BB%93"}},[e._v("总结")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#%E5%8D%95%E4%BE%8B%E7%AE%A1%E7%90%86%E7%9A%84%E5%AF%B9%E8%B1%A1"}},[e._v("单例管理的对象")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#%E9%9D%9E%E5%8D%95%E4%BE%8B%E7%AE%A1%E7%90%86%E7%9A%84%E5%AF%B9%E8%B1%A1"}},[e._v("非单例管理的对象")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#%E4%B8%89-%E8%AF%B4%E6%98%8E"}},[e._v("三 说明")])])]),e._v(" "),a("h1",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),a("p",[e._v("在 Spring 中，那些组成应用程序的主体及由 Spring IOC 容器所管理的对象，被称之为 bean。简单地讲，bean 就是由 IOC 容器初始化、装配及管理的对象，除此之外，bean 就与应用程序中的其他对象没有什么区别了。而 bean 的定义以及 bean 相互间的依赖关系将通过配置元数据来描述。")]),e._v(" "),a("p",[a("strong",[e._v("Spring中的bean默认都是单例的，这些单例Bean在多线程程序下如何保证线程安全呢？")]),e._v(" 例如对于Web应用来说，Web容器对于每个用户请求都创建一个单独的Sevlet线程来处理请求，引入Spring框架之后，每个Action都是单例的，那么对于Spring托管的单例Service Bean，如何保证其安全呢？ "),a("strong",[e._v("Spring的单例是基于BeanFactory也就是Spring容器的，单例Bean在此容器内只有一个，Java的单例是基于 JVM，每个 JVM 内只有一个实例。")])]),e._v(" "),a("p",[e._v("在大多数情况下。单例 bean 是很理想的方案。不过，有时候你可能会发现你所使用的类是易变的，它们会保持一些状态，因此重用是不安全的。在这种情况下，将 class 声明为单例的就不是那么明智了。因为对象会被污染，稍后重用的时候会出现意想不到的问题。所以 Spring 定义了多种作用域的bean。")]),e._v(" "),a("h1",{attrs:{id:"一-bean的作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-bean的作用域"}},[e._v("#")]),e._v(" 一  bean的作用域")]),e._v(" "),a("p",[e._v("创建一个bean定义，其实质是用该bean定义对应的类来创建真正实例的“配方”。把bean定义看成一个配方很有意义，它与class很类似，只根据一张“处方”就可以创建多个实例。不仅可以控制注入到对象中的各种依赖和配置值，还可以控制该对象的作用域。这样可以灵活选择所建对象的作用域，而不必在Java Class级定义作用域。Spring Framework支持五种作用域，分别阐述如下表。")]),e._v(" "),a("p",[a("img",{attrs:{src:s(1339),alt:"1608737583003"}})]),e._v(" "),a("p",[e._v("五种作用域中，"),a("strong",[e._v("request、session")]),e._v(" 和 "),a("strong",[e._v("global session")]),e._v(" 三种作用域仅在基于web的应用中使用（不必关心你所采用的是什么web应用框架），只能用在基于 web 的 Spring ApplicationContext 环境。")]),e._v(" "),a("h3",{attrs:{id:"_1-singleton-唯一-bean-实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-singleton-唯一-bean-实例"}},[e._v("#")]),e._v(" 1. singleton——唯一 bean 实例")]),e._v(" "),a("p",[a("strong",[e._v("当一个 bean 的作用域为 singleton，那么Spring IoC容器中只会存在一个共享的 bean 实例，并且所有对 bean 的请求，只要 id 与该 bean 定义相匹配，则只会返回bean的同一实例。")]),e._v(" singleton 是单例类型(对应于单例模式)，就是在创建起容器时就同时自动创建了一个bean的对象，不管你是否使用，但我们可以指定Bean节点的 "),a("code",[e._v("lazy-init=”true”")]),e._v(" 来延迟初始化bean，这时候，只有在第一次获取bean时才会初始化bean，即第一次请求该bean时才初始化。 每次获取到的对象都是同一个对象。注意，singleton 作用域是Spring中的缺省作用域。要在XML中将 bean 定义成 singleton ，可以这样配置：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<bean id="ServiceImpl" class="cn.csdn.service.ServiceImpl" scope="singleton">\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("也可以通过 "),a("code",[e._v("@Scope")]),e._v(" 注解（它可以显示指定bean的作用范围。）的方式")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('@Service\n@Scope("singleton")\npublic class ServiceImpl{\n\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("h3",{attrs:{id:"_2-prototype-每次请求都会创建一个新的-bean-实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-prototype-每次请求都会创建一个新的-bean-实例"}},[e._v("#")]),e._v(" 2. prototype——每次请求都会创建一个新的 bean 实例")]),e._v(" "),a("p",[a("strong",[e._v("当一个bean的作用域为 prototype，表示一个 bean 定义对应多个对象实例。")]),e._v(" "),a("strong",[e._v("prototype 作用域的 bean 会导致在每次对该 bean 请求")]),e._v("（将其注入到另一个 bean 中，或者以程序的方式调用容器的 getBean() 方法**）时都会创建一个新的 bean 实例。prototype 是原型类型，它在我们创建容器的时候并没有实例化，而是当我们获取bean的时候才会去创建一个对象，而且我们每次获取到的对象都不是同一个对象。根据经验，对有状态的 bean 应该使用 prototype 作用域，而对无状态的 bean 则应该使用 singleton 作用域。**  在 XML 中将 bean 定义成 prototype ，可以这样配置：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<bean id="account" class="com.foo.DefaultAccount" scope="prototype"/>  \n 或者\n<bean id="account" class="com.foo.DefaultAccount" singleton="false"/> \n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("通过 "),a("code",[e._v("@Scope")]),e._v(" 注解的方式实现就不做演示了。")]),e._v(" "),a("h3",{attrs:{id:"_3-request-每一次http请求都会产生一个新的bean-该bean仅在当前http-request内有效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-request-每一次http请求都会产生一个新的bean-该bean仅在当前http-request内有效"}},[e._v("#")]),e._v(" 3. request——每一次HTTP请求都会产生一个新的bean，该bean仅在当前HTTP request内有效")]),e._v(" "),a("p",[a("strong",[e._v("request只适用于Web程序，每一次 HTTP 请求都会产生一个新的bean，同时该bean仅在当前HTTP request内有效，当请求结束后，该对象的生命周期即告结束。")]),e._v(" 在 XML 中将 bean 定义成 request ，可以这样配置：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<bean id="loginAction" class=cn.csdn.LoginAction" scope="request"/>\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"_4-session-每一次http请求都会产生一个新的-bean-该bean仅在当前-http-session-内有效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-session-每一次http请求都会产生一个新的-bean-该bean仅在当前-http-session-内有效"}},[e._v("#")]),e._v(" 4. session——每一次HTTP请求都会产生一个新的 bean，该bean仅在当前 HTTP session 内有效")]),e._v(" "),a("p",[a("strong",[e._v("session只适用于Web程序，session 作用域表示该针对每一次 HTTP 请求都会产生一个新的 bean，同时该 bean 仅在当前 HTTP session 内有效.与request作用域一样，可以根据需要放心的更改所创建实例的内部状态，而别的 HTTP session 中根据 userPreferences 创建的实例，将不会看到这些特定于某个 HTTP session 的状态变化。当HTTP session最终被废弃的时候，在该HTTP session作用域内的bean也会被废弃掉。")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<bean id="userPreferences" class="com.foo.UserPreferences" scope="session"/>\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"_5-globalsession"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-globalsession"}},[e._v("#")]),e._v(" 5. globalSession")]),e._v(" "),a("p",[e._v("global session 作用域类似于标准的 HTTP session 作用域，不过仅仅在基于 portlet 的 web 应用中才有意义。Portlet 规范定义了全局 Session 的概念，它被所有构成某个 portlet web 应用的各种不同的 portle t所共享。在global session 作用域中定义的 bean 被限定于全局portlet Session的生命周期范围内。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<bean id="user" class="com.foo.Preferences "scope="globalSession"/>\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h1",{attrs:{id:"二-bean的生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-bean的生命周期"}},[e._v("#")]),e._v(" 二 bean的生命周期")]),e._v(" "),a("p",[e._v("Spring Bean是Spring应用中最最重要的部分了。所以来看看Spring容器在初始化一个bean的时候会做那些事情，顺序是怎样的，在容器关闭的时候，又会做哪些事情。")]),e._v(" "),a("blockquote",[a("p",[e._v("spring版本：4.2.3.RELEASE\n鉴于Spring源码是用gradle构建的，我也决定舍弃我大maven，尝试下洪菊推荐过的gradle。运行beanLifeCycle模块下的junit test即可在控制台看到如下输出，可以清楚了解Spring容器在创建，初始化和销毁Bean的时候依次做了那些事情。")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Spring容器初始化\n=====================================\n调用GiraffeService无参构造函数\nGiraffeService中利用set方法设置属性值\n调用setBeanName:: Bean Name defined in context=giraffeService\n调用setBeanClassLoader,ClassLoader Name = sun.misc.Launcher$AppClassLoader\n调用setBeanFactory,setBeanFactory:: giraffe bean singleton=true\n调用setEnvironment\n调用setResourceLoader:: Resource File Name=spring-beans.xml\n调用setApplicationEventPublisher\n调用setApplicationContext:: Bean Definition Names=[giraffeService, org.springframework.context.annotation.CommonAnnotationBeanPostProcessor#0, com.giraffe.spring.service.GiraffeServicePostProcessor#0]\n执行BeanPostProcessor的postProcessBeforeInitialization方法,beanName=giraffeService\n调用PostConstruct注解标注的方法\n执行InitializingBean接口的afterPropertiesSet方法\n执行配置的init-method\n执行BeanPostProcessor的postProcessAfterInitialization方法,beanName=giraffeService\nSpring容器初始化完毕\n=====================================\n从容器中获取Bean\ngiraffe Name=李光洙\n=====================================\n调用preDestroy注解标注的方法\n执行DisposableBean接口的destroy方法\n执行配置的destroy-method\nSpring容器关闭\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br")])]),a("p",[e._v("先来看看，Spring在Bean从创建到销毁的生命周期中可能做得事情。")]),e._v(" "),a("h3",{attrs:{id:"initialization-和-destroy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initialization-和-destroy"}},[e._v("#")]),e._v(" initialization 和 destroy")]),e._v(" "),a("p",[e._v("有时我们需要在Bean属性值set好之后和Bean销毁之前做一些事情，比如检查Bean中某个属性是否被正常的设置好值了。Spring框架提供了多种方法让我们可以在Spring Bean的生命周期中执行initialization和pre-destroy方法。")]),e._v(" "),a("p",[a("strong",[e._v("1.实现InitializingBean和DisposableBean接口")])]),e._v(" "),a("p",[e._v("这两个接口都只包含一个方法。通过实现InitializingBean接口的afterPropertiesSet()方法可以在Bean属性值设置好之后做一些操作，实现DisposableBean接口的destroy()方法可以在销毁Bean之前做一些操作。")]),e._v(" "),a("p",[e._v("例子如下：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('public class GiraffeService implements InitializingBean,DisposableBean {\n    @Override\n    public void afterPropertiesSet() throws Exception {\n        System.out.println("执行InitializingBean接口的afterPropertiesSet方法");\n    }\n    @Override\n    public void destroy() throws Exception {\n        System.out.println("执行DisposableBean接口的destroy方法");\n    }\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br")])]),a("p",[e._v("这种方法比较简单，但是不建议使用。因为这样会将Bean的实现和Spring框架耦合在一起。")]),e._v(" "),a("p",[a("strong",[e._v("2.在bean的配置文件中指定init-method和destroy-method方法")])]),e._v(" "),a("p",[e._v("Spring允许我们创建自己的 init 方法和 destroy 方法，只要在 Bean 的配置文件中指定 init-method 和 destroy-method 的值就可以在 Bean 初始化时和销毁之前执行一些操作。")]),e._v(" "),a("p",[e._v("例子如下：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('public class GiraffeService {\n    //通过<bean>的destroy-method属性指定的销毁方法\n    public void destroyMethod() throws Exception {\n        System.out.println("执行配置的destroy-method");\n    }\n    //通过<bean>的init-method属性指定的初始化方法\n    public void initMethod() throws Exception {\n        System.out.println("执行配置的init-method");\n    }\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br")])]),a("p",[e._v("配置文件中的配置：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<bean name="giraffeService" class="com.giraffe.spring.service.GiraffeService" init-method="initMethod" destroy-method="destroyMethod">\n</bean>\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("需要注意的是自定义的init-method和post-method方法可以抛异常但是不能有参数。")]),e._v(" "),a("p",[e._v("这种方式比较推荐，因为可以自己创建方法，无需将Bean的实现直接依赖于spring的框架。")]),e._v(" "),a("p",[a("strong",[e._v("3.使用@PostConstruct和@PreDestroy注解")])]),e._v(" "),a("p",[e._v("除了xml配置的方式，Spring 也支持用 "),a("code",[e._v("@PostConstruct")]),e._v("和 "),a("code",[e._v("@PreDestroy")]),e._v("注解来指定 "),a("code",[e._v("init")]),e._v(" 和 "),a("code",[e._v("destroy")]),e._v(" 方法。这两个注解均在"),a("code",[e._v("javax.annotation")]),e._v(" 包中。为了注解可以生效，需要在配置文件中定义org.springframework.context.annotation.CommonAnnotationBeanPostProcessor或context:annotation-config")]),e._v(" "),a("p",[e._v("例子如下：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('public class GiraffeService {\n    @PostConstruct\n    public void initPostConstruct(){\n        System.out.println("执行PostConstruct注解标注的方法");\n    }\n    @PreDestroy\n    public void preDestroy(){\n        System.out.println("执行preDestroy注解标注的方法");\n    }\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br")])]),a("p",[e._v("配置文件：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('  \n<bean class="org.springframework.context.annotation.CommonAnnotationBeanPostProcessor" />\n\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("h3",{attrs:{id:"实现-aware接口-在bean中使用spring框架的一些对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现-aware接口-在bean中使用spring框架的一些对象"}},[e._v("#")]),e._v(" 实现*Aware接口 在Bean中使用Spring框架的一些对象")]),e._v(" "),a("p",[e._v("有些时候我们需要在 Bean 的初始化中使用 Spring 框架自身的一些对象来执行一些操作，比如获取 ServletContext 的一些参数，获取 ApplicaitionContext 中的 BeanDefinition 的名字，获取 Bean 在容器中的名字等等。为了让 Bean 可以获取到框架自身的一些对象，Spring 提供了一组名为*Aware的接口。")]),e._v(" "),a("p",[e._v("这些接口均继承于"),a("code",[e._v("org.springframework.beans.factory.Aware")]),e._v("标记接口，并提供一个将由 Bean 实现的set*方法,Spring通过基于setter的依赖注入方式使相应的对象可以被Bean使用。\n网上说，这些接口是利用观察者模式实现的，类似于servlet listeners，目前还不明白，不过这也不在本文的讨论范围内。\n介绍一些重要的Aware接口：")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("ApplicationContextAware")]),e._v(": 获得ApplicationContext对象,可以用来获取所有Bean definition的名字。")]),e._v(" "),a("li",[a("strong",[e._v("BeanFactoryAware")]),e._v(":获得BeanFactory对象，可以用来检测Bean的作用域。")]),e._v(" "),a("li",[a("strong",[e._v("BeanNameAware")]),e._v(":获得Bean在配置文件中定义的名字。")]),e._v(" "),a("li",[a("strong",[e._v("ResourceLoaderAware")]),e._v(":获得ResourceLoader对象，可以获得classpath中某个文件。")]),e._v(" "),a("li",[a("strong",[e._v("ServletContextAware")]),e._v(":在一个MVC应用中可以获取ServletContext对象，可以读取context中的参数。")]),e._v(" "),a("li",[a("strong",[e._v("ServletConfigAware")]),e._v("： 在一个MVC应用中可以获取ServletConfig对象，可以读取config中的参数。")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('public class GiraffeService implements   ApplicationContextAware,\n        ApplicationEventPublisherAware, BeanClassLoaderAware, BeanFactoryAware,\n        BeanNameAware, EnvironmentAware, ImportAware, ResourceLoaderAware{\n         @Override\n    public void setBeanClassLoader(ClassLoader classLoader) {\n        System.out.println("执行setBeanClassLoader,ClassLoader Name = " + classLoader.getClass().getName());\n    }\n    @Override\n    public void setBeanFactory(BeanFactory beanFactory) throws BeansException {\n        System.out.println("执行setBeanFactory,setBeanFactory:: giraffe bean singleton=" +  beanFactory.isSingleton("giraffeService"));\n    }\n    @Override\n    public void setBeanName(String s) {\n        System.out.println("执行setBeanName:: Bean Name defined in context="\n                + s);\n    }\n    @Override\n    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {\n        System.out.println("执行setApplicationContext:: Bean Definition Names="\n                + Arrays.toString(applicationContext.getBeanDefinitionNames()));\n    }\n    @Override\n    public void setApplicationEventPublisher(ApplicationEventPublisher applicationEventPublisher) {\n        System.out.println("执行setApplicationEventPublisher");\n    }\n    @Override\n    public void setEnvironment(Environment environment) {\n        System.out.println("执行setEnvironment");\n    }\n    @Override\n    public void setResourceLoader(ResourceLoader resourceLoader) {\n        Resource resource = resourceLoader.getResource("classpath:spring-beans.xml");\n        System.out.println("执行setResourceLoader:: Resource File Name="\n                + resource.getFilename());\n    }\n    @Override\n    public void setImportMetadata(AnnotationMetadata annotationMetadata) {\n        System.out.println("执行setImportMetadata");\n    }\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br"),a("span",{staticClass:"line-number"},[e._v("34")]),a("br"),a("span",{staticClass:"line-number"},[e._v("35")]),a("br"),a("span",{staticClass:"line-number"},[e._v("36")]),a("br"),a("span",{staticClass:"line-number"},[e._v("37")]),a("br"),a("span",{staticClass:"line-number"},[e._v("38")]),a("br"),a("span",{staticClass:"line-number"},[e._v("39")]),a("br"),a("span",{staticClass:"line-number"},[e._v("40")]),a("br")])]),a("h3",{attrs:{id:"beanpostprocessor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beanpostprocessor"}},[e._v("#")]),e._v(" BeanPostProcessor")]),e._v(" "),a("p",[e._v("上面的*Aware接口是针对某个实现这些接口的Bean定制初始化的过程，\nSpring同样可以针对容器中的所有Bean，或者某些Bean定制初始化过程，只需提供一个实现BeanPostProcessor接口的类即可。 该接口中包含两个方法，postProcessBeforeInitialization和postProcessAfterInitialization。 postProcessBeforeInitialization方法会在容器中的Bean初始化之前执行， postProcessAfterInitialization方法在容器中的Bean初始化之后执行。")]),e._v(" "),a("p",[e._v("例子如下：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('public class CustomerBeanPostProcessor implements BeanPostProcessor {\n    @Override\n    public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {\n        System.out.println("执行BeanPostProcessor的postProcessBeforeInitialization方法,beanName=" + beanName);\n        return bean;\n    }\n    @Override\n    public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {\n        System.out.println("执行BeanPostProcessor的postProcessAfterInitialization方法,beanName=" + beanName);\n        return bean;\n    }\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br")])]),a("p",[e._v("要将BeanPostProcessor的Bean像其他Bean一样定义在配置文件中")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<bean class="com.giraffe.spring.service.CustomerBeanPostProcessor"/>\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),a("p",[e._v("所以。。。结合第一节控制台输出的内容，Spring Bean的生命周期是这样纸的：")]),e._v(" "),a("ul",[a("li",[e._v("Bean容器找到配置文件中 Spring Bean 的定义。")]),e._v(" "),a("li",[e._v("Bean容器利用Java Reflection API创建一个Bean的实例。")]),e._v(" "),a("li",[e._v("如果涉及到一些属性值 利用set方法设置一些属性值。")]),e._v(" "),a("li",[e._v("如果Bean实现了BeanNameAware接口，调用setBeanName()方法，传入Bean的名字。")]),e._v(" "),a("li",[e._v("如果Bean实现了BeanClassLoaderAware接口，调用setBeanClassLoader()方法，传入ClassLoader对象的实例。")]),e._v(" "),a("li",[e._v("如果Bean实现了BeanFactoryAware接口，调用setBeanClassLoader()方法，传入ClassLoader对象的实例。")]),e._v(" "),a("li",[e._v("与上面的类似，如果实现了其他*Aware接口，就调用相应的方法。")]),e._v(" "),a("li",[e._v("如果有和加载这个Bean的Spring容器相关的BeanPostProcessor对象，执行postProcessBeforeInitialization()方法")]),e._v(" "),a("li",[e._v("如果Bean实现了InitializingBean接口，执行afterPropertiesSet()方法。")]),e._v(" "),a("li",[e._v("如果Bean在配置文件中的定义包含init-method属性，执行指定的方法。")]),e._v(" "),a("li",[e._v("如果有和加载这个Bean的Spring容器相关的BeanPostProcessor对象，执行postProcessAfterInitialization()方法")]),e._v(" "),a("li",[e._v("当要销毁Bean的时候，如果Bean实现了DisposableBean接口，执行destroy()方法。")]),e._v(" "),a("li",[e._v("当要销毁Bean的时候，如果Bean在配置文件中的定义包含destroy-method属性，执行指定的方法。")])]),e._v(" "),a("p",[e._v("用图表示一下(图来源:http://www.jianshu.com/p/d00539babca5)：")]),e._v(" "),a("p",[a("img",{attrs:{src:s(1340),alt:"1608737614472"}})]),e._v(" "),a("p",[e._v("与之比较类似的中文版本:")]),e._v(" "),a("p",[a("img",{attrs:{src:s(1341),alt:"1608737631797"}})]),e._v(" "),a("p",[a("strong",[e._v("其实很多时候我们并不会真的去实现上面说描述的那些接口，那么下面我们就除去那些接口，针对bean的单例和非单例来描述下bean的生命周期：")])]),e._v(" "),a("h3",{attrs:{id:"单例管理的对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单例管理的对象"}},[e._v("#")]),e._v(" 单例管理的对象")]),e._v(" "),a("p",[e._v("当scope=”singleton”，即默认情况下，会在启动容器时（即实例化容器时）时实例化。但我们可以指定Bean节点的lazy-init=”true”来延迟初始化bean，这时候，只有在第一次获取bean时才会初始化bean，即第一次请求该bean时才初始化。如下配置：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<bean id="ServiceImpl" class="cn.csdn.service.ServiceImpl" lazy-init="true"/>  \n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("如果想对所有的默认单例bean都应用延迟初始化，可以在根节点beans设置default-lazy-init属性为true，如下所示：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<beans default-lazy-init="true" …>\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("默认情况下，Spring 在读取 xml 文件的时候，就会创建对象。在创建对象的时候先调用构造器，然后调用 init-method 属性值中所指定的方法。对象在被销毁的时候，会调用 destroy-method 属性值中所指定的方法（例如调用Container.destroy()方法的时候）。写一个测试类，代码如下：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('public class LifeBean {\n    private String name;  \n\n    public LifeBean(){  \n        System.out.println("LifeBean()构造函数");  \n    }  \n    public String getName() {  \n        return name;  \n    }  \n\n    public void setName(String name) {  \n        System.out.println("setName()");  \n        this.name = name;  \n    }  \n\n    public void init(){  \n        System.out.println("this is init of lifeBean");  \n    }  \n\n    public void destory(){  \n        System.out.println("this is destory of lifeBean " + this);  \n    }  \n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br")])]),a("p",[e._v("life.xml配置如下：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<bean id="life_singleton" class="com.bean.LifeBean" scope="singleton" \n            init-method="init" destroy-method="destory" lazy-init="true"/>\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("测试代码：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('public class LifeTest {\n    @Test \n    public void test() {\n        AbstractApplicationContext container = \n        new ClassPathXmlApplicationContext("life.xml");\n        LifeBean life1 = (LifeBean)container.getBean("life");\n        System.out.println(life1);\n        container.close();\n    }\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br")])]),a("p",[e._v("运行结果：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("LifeBean()构造函数\nthis is init of lifeBean\ncom.bean.LifeBean@573f2bb1\n……\nthis is destory of lifeBean com.bean.LifeBean@573f2bb1\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("h3",{attrs:{id:"非单例管理的对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非单例管理的对象"}},[e._v("#")]),e._v(" 非单例管理的对象")]),e._v(" "),a("p",[e._v("当"),a("code",[e._v("scope=”prototype”")]),e._v("时，容器也会延迟初始化 bean，Spring 读取xml 文件的时候，并不会立刻创建对象，而是在第一次请求该 bean 时才初始化（如调用getBean方法时）。在第一次请求每一个 prototype 的bean 时，Spring容器都会调用其构造器创建这个对象，然后调用"),a("code",[e._v("init-method")]),e._v("属性值中所指定的方法。对象销毁的时候，Spring 容器不会帮我们调用任何方法，因为是非单例，这个类型的对象有很多个，Spring容器一旦把这个对象交给你之后，就不再管理这个对象了。")]),e._v(" "),a("p",[e._v("为了测试prototype bean的生命周期life.xml配置如下：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<bean id="life_prototype" class="com.bean.LifeBean" scope="prototype" init-method="init" destroy-method="destory"/>\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("测试程序：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('public class LifeTest {\n    @Test \n    public void test() {\n        AbstractApplicationContext container = new ClassPathXmlApplicationContext("life.xml");\n        LifeBean life1 = (LifeBean)container.getBean("life_singleton");\n        System.out.println(life1);\n\n        LifeBean life3 = (LifeBean)container.getBean("life_prototype");\n        System.out.println(life3);\n        container.close();\n    }\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br")])]),a("p",[e._v("运行结果：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("LifeBean()构造函数\nthis is init of lifeBean\ncom.bean.LifeBean@573f2bb1\nLifeBean()构造函数\nthis is init of lifeBean\ncom.bean.LifeBean@5ae9a829\n……\nthis is destory of lifeBean com.bean.LifeBean@573f2bb1\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("p",[e._v("可以发现，对于作用域为 prototype 的 bean ，其"),a("code",[e._v("destroy")]),e._v("方法并没有被调用。"),a("strong",[e._v("如果 bean 的 scope 设为prototype时，当容器关闭时，"),a("code",[e._v("destroy")]),e._v(" 方法不会被调用。对于 prototype 作用域的 bean，有一点非常重要，那就是 Spring不能对一个 prototype bean 的整个生命周期负责：容器在初始化、配置、装饰或者是装配完一个prototype实例后，将它交给客户端，随后就对该prototype实例不闻不问了。")]),e._v(" 不管何种作用域，容器都会调用所有对象的初始化生命周期回调方法。但对prototype而言，任何配置好的析构生命周期回调方法都将不会被调用。"),a("strong",[e._v("清除prototype作用域的对象并释放任何prototype bean所持有的昂贵资源，都是客户端代码的职责")]),e._v("（让Spring容器释放被prototype作用域bean占用资源的一种可行方式是，通过使用bean的后置处理器，该处理器持有要被清除的bean的引用）。谈及prototype作用域的bean时，在某些方面你可以将Spring容器的角色看作是Java new操作的替代者，任何迟于该时间点的生命周期事宜都得交由客户端来处理。")]),e._v(" "),a("p",[a("strong",[e._v("Spring 容器可以管理 singleton 作用域下 bean 的生命周期，在此作用域下，Spring 能够精确地知道bean何时被创建，何时初始化完成，以及何时被销毁。而对于 prototype 作用域的bean，Spring只负责创建，当容器创建了 bean 的实例后，bean 的实例就交给了客户端的代码管理，Spring容器将不再跟踪其生命周期，并且不会管理那些被配置成prototype作用域的bean的生命周期。")])]),e._v(" "),a("h1",{attrs:{id:"三-说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-说明"}},[e._v("#")]),e._v(" 三 说明")]),e._v(" "),a("p",[e._v("本文的完成结合了下面两篇文章，并做了相应修改：")]),e._v(" "),a("ul",[a("li",[e._v("https://blog.csdn.net/fuzhongmin05/article/details/73389779")]),e._v(" "),a("li",[e._v("https://yemengying.com/2016/07/14/spring-bean-life-cycle/")])]),e._v(" "),a("p",[e._v("由于本文非本人独立原创，所以未声明为原创！在此说明！")])])}),[],!1,null,null,null);n.default=t.exports}}]);