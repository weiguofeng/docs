# 1、如何使用maven构建springboot多模块项目？各模块之间的关系是如何关联的



使用 Maven 构建 Spring Boot 多模块项目，需要按照以下步骤进行操作：

1. 创建一个 Maven 项目，选择 Maven 的父项目模板，并设置好 GroupId、ArtifactId 和 Version 等信息。
2. 在父项目中，创建子模块的 Maven 模块。可以通过以下命令创建：

```
mvn archetype:generate -DgroupId=com.example -DartifactId=my-module -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
```

其中，`com.example` 是项目的 GroupId，`my-module` 是模块的 ArtifactId，`maven-archetype-quickstart` 是 Maven 的模板。

1. 在每个子模块的 `pom.xml` 文件中，添加以下依赖：

```
phpCopy code<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter</artifactId>
</dependency>
```

这样就可以使用 Spring Boot 来开发应用程序了。

1. 在父项目的 `pom.xml` 文件中，添加以下内容：

```
phpCopy code<modules>
  <module>my-module</module>
</modules>
```





这样 Maven 就会将这个模块作为父项目的子模块来处理。

1. 配置子模块之间的依赖关系。如果一个子模块需要依赖另一个子模块，可以在 `pom.xml` 文件中添加以下内容：

```
phpCopy code<dependencies>
  <dependency>
    <groupId>com.example</groupId>
    <artifactId>my-other-module</artifactId>
    <version>1.0-SNAPSHOT</version>
  </dependency>
</dependencies>
```

其中，`com.example` 是项目的 GroupId，`my-other-module` 是依赖的子模块的 ArtifactId，`1.0-SNAPSHOT` 是子模块的版本号。

1. 在每个子模块的 `src/main/java` 目录下，创建 Spring Boot 应用程序。在应用程序类上添加 `@SpringBootApplication` 注解，这样 Spring Boot 就会自动配置应用程序。
2. 构建项目。在父项目的根目录下运行以下命令：

```
mvn clean install
```





​		这样 Maven 就会自动构建整个项目，并将所有的子模块打包成 jar 文件。你可以在每个子模块的 `target` 目录下找到对应的 jar 文件。

这样，你就成功地使用 Maven 构建了一个 Spring Boot 多模块项目，并且完成了各个模块之间的依赖关系。





