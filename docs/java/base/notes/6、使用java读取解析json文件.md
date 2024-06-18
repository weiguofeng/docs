# 6、使用java读取解析json文件

​	

​		场景：  我们在调用其他系统的时候，因为对方给我们一些接口，而我们在本地开发由于环境不一致，本地无法直接请求到接口---所以我们使用api工具拿到json数据先在本地进行开发。

​	

​		我们拿到的json数据存放到本地--某个位置

```java
// 我们使用spring的注解读取这个json文件
//使用io流 Resource来接

    @Value("classpath:/sample/nas/nasSSDHost.json")
    private org.springframework.core.io.Resource nasSSDHost;

	public String getResource(Resource resourcePath){
		BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(resourcePath.getInputStream(),StandardCharsets.UTF_8)){
		
		return bufferedReader.lines.collect(Collectors.joining("\n"))
		}
	}
	
	//这样就获取到了json的字符串
	String json = this.getResource(nasSSDHost)
	
	
	//然后将json的字符串映射成java对象就ok了
	NasSSDHostDomain data = JSONObject.parseObject(json,NasSSDHostDomain.class)
	
	//映射完对象之后---就可以进行具体的业务处理了
	



```

















































