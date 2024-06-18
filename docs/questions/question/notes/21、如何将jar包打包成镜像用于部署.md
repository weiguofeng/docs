# 21、如何将jar包打包成镜像用于部署

要将 Sentinel Dashboard JAR 文件打包成 Docker 镜像以用于部署，您可以创建一个包含 Java 运行时环境和 Sentinel Dashboard JAR 文件的 Docker 镜像。以下是一个通用的步骤：

1. 创建一个 Dockerfile： 在您的项目目录中创建一个名为 `Dockerfile` 的文件，该文件包含构建 Docker 镜像的指令。

   ```shell
   # 使用一个基础的 Java 运行时环境镜像
   FROM openjdk:8-jre
   
   # 设置环境变量
   ENV SENTINEL_VERSION=1.8.6
   
   # 复制 Sentinel Dashboard JAR 文件到容器中
   ADD sentinel-dashboard-${SENTINEL_VERSION}.jar /app/sentinel-dashboard.jar
   
   # 在容器中运行 Sentinel Dashboard
   CMD ["java", "-jar", "/app/sentinel-dashboard.jar"]
   ```

   请确保将 `sentinel-dashboard-1.8.6.jar` 文件放在与 Dockerfile 相同的目录中，或者根据您的文件结构修改 `ADD` 行的路径。

   

2. 构建 Docker 镜像： 打开终端，导航到包含 Dockerfile 的目录，然后运行以下命令来构建 Docker 镜像：

   ```
   docker build -t sentinel-dashboard:1.8.6 .
   ```

   这会构建一个名为 `sentinel-dashboard` 的 Docker 镜像，版本为 1.8.6。请确保 Docker 已经安装并正在运行。

3. 运行 Sentinel Dashboard 容器： 构建成功后，您可以运行 Sentinel Dashboard 容器：

   ```
   run -d -p 8080:8080 sentinel-dashboard:1.8.6
   ```

   这会在后台启动 Sentinel Dashboard 容器，并将其映射到主机的端口 8080。您可以根据需要更改端口映射。

4. 访问 Sentinel Dashboard： Sentinel Dashboard 应该现在在 Docker 容器中运行，您可以通过浏览器访问它：

   ```
   http://localhost:8080
   ```

   如果您在步骤 3 中更改了端口映射，请相应地修改 URL。

这样，您就可以将 Sentinel Dashboard JAR 文件打包成 Docker 镜像并在容器中运行它，以用于部署和监视您的应用程序。确保 Docker 已正确安装和配置，并已将 Sentinel Dashboard JAR 文件准备好放在 Dockerfile 目录中。

























































































































