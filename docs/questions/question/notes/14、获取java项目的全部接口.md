# 14、获取java项目的全部接口





​		思路：

​	要获取Java项目中全部的Controller接口，您可以使用Spring Boot Actuator提供的特殊端点来获取。以下是一些步骤：

1. 确保您的项目中已经添加了Spring Boot Actuator依赖项。在Maven中，可以添加以下条目（如果您使用的是Gradle，请使用相应的语法）：



```cpp
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```

1. 启用特殊的Meta（管理）端点 。创建以下配置类以启用它：



```cpp
@Configuration
public class ActuatorConfig implements WebMvcConfigurer {
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addRedirectViewController("/actuator", "/actuator/index.html");
    }

    @Bean
    ServletRegistrationBean<WebServlet> h2servletRegistration() {
        ServletRegistrationBean<WebServlet> registrationBean = new ServletRegistrationBean<>(new WebServlet());
        registrationBean.addUrlMappings("/actuator/h2-console/*");
        return registrationBean;
    }
}
```

1. 启动应用程序，并导航到http://localhost:8080/actuator/mappings URL。这将显示您应用程序中所有Controller的映射。









