# 7、JSON处理LinkedHashMap数据



​				场景-- 	我们通过调用接口返回一个数据结构的数据

```
	JSONArray jsonArray = responseBody.getJSONObject("data").getJSONArray("hsotList");
```

​			由此我们获取到了一个json数组 -- 目前是我们需要把这个数组转化成一个 java对象集合List<POJO>

​		

​			正常的转换是 JSON.paruse......

​		

​			但是由于有时候我们拿到的这个jsonArray是一个LinkedHashMap的数据，而不是ArrayList所以就需要另外一种转化方式

```java
	// 使用ObjectMapper
    ObjectMapper objectMapper = new ObjectMapper();
    
    List<POJO> list = objectMapper.convertValue(jsonArray,new TypeReference<List<POJO>>);
    
    
```

​		这样这个对象就成功的被转换成集合了

















