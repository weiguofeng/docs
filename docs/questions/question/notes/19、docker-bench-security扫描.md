# 19、docker bench security 扫描



docker bench security是一个开源工具，用于评估和扫描Docker容器和宿主机的安全性。您可以按照以下步骤使用docker bench security进行扫描：

1. 首先，确保您的系统已安装Docker，以及docker bench security工具。

   - 安装Docker：根据您的系统和操作系统版本，参考官方Docker文档进行安装。
   - 安装docker bench security：您可以从docker bench security的GitHub仓库（https://github.com/docker/docker-bench-security）中获取最新的版本，并按照说明进行安装。

2. 执行扫描命令：

   - 打开终端或命令行界面。
   - 运行以下命令进行扫描：

   ```bash
   复制代码 sudo docker run -it --net host --pid host --userns host --cap-add audit_control \
    -e DOCKER_CONTENT_TRUST=$DOCKER_CONTENT_TRUST \
    -v /var/lib:/var/lib \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v /usr/lib/systemd:/usr/lib/systemd \
    -v /etc:/etc --label docker_bench_security \
    docker/docker-bench-security
   ```

   - 该命令会使用docker bench security工具在当前系统上运行安全性扫描。

3. 等待扫描完成：扫描可能需要一些时间，具体取决于您的系统配置和资源。

4. 查看扫描结果：扫描完成后，将会显示安全性评估的结果和建议。您可以检查这些结果以了解系统中存在的潜在安全问题，并采取相应的措施进行修复。

请注意，执行这些操作可能需要以root用户或具有适当权限的用户身份进行。确保在执行任何安全扫描之前，先备份重要的数据和配置文件，并仔细阅读docker bench security工具的文档和指南。







