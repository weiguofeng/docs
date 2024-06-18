# 5、windows打包镜像替换镜像



## 	1、前期准备			

​		1、使用Virtualbox----下载清华源的release镜像 ios



​		2、然后安装系统



​		3、安装docker





## 	2、docker处理

​		拉取镜像

```
	docker pull 
```



​		进行构建

```
	docker-compose build
```



​		打包镜像

```
	docker save -o aaa.tar 镜像名称
```

​		

​		加载镜像--- 原先的镜像会替换镜像为一个none的镜像

```
	docker load -i aaa.tar
```



​		替换容器

```
	docker-compose up -d aaa
```

