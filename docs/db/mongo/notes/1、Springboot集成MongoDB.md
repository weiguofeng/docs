# 1、Springboot集成MongoDB



## 1、引入pom依赖

```p
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-mongodb</artifactId>
</dependency>
```



​		配置文件配置：

​		在 application.properties 或 application.yml 中配置 MongoDB 连接:

​				spring.data.mongodb.uri=mongodb://localhost:27017/mydatabase

​	



## 2、创建实体模型

​	用户实体

```java
@Document(collection = "users")
public class User {
    @Id
    private String id;
    private String name;
    private int age;

    // getters and setters
}

```



## 3、创建一个接口

​		

接口用于实体的CURD，接口继承 MongoRespository<User,String>

创建一个扩展 MongoRepository 并提供查询和操作数据方法的存储库接口:

```java
public interface UserRepository extends MongoRepository<User, String> {
    List<User> findByName(String name);
    List<User> findByAgeGreaterThan(int age);
}

```



​	

## 4、Controller调用



​	在本例中，我们使用 MongoRepository 提供的 findAll ()、 save ()和 delete teById ()方法对 User 集合执行 CRUD 操作。我们还使用@RequestBody 和@Pathvariable 注释来处理传入的请求，并从请求主体和 URL 参数中提取数据。

```java
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable String id, @RequestBody User updatedUser) {
        updatedUser.setId(id);
        return userRepository.save(updatedUser);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable String id) {
        userRepository.deleteById(id);
    }
}

```



## 5、自定义查询

​		要在 Spring Data MongoDB 中创建自定义查询，可以使用 MongoTemplate 类执行 MongoRepository 未提供的操作。下面是如何使用 MongoTemplate 创建自定义查询的示例:



​	假设我们有一个名为 users 的集合，其中包含字段 name 和 age。我们希望检索所有年龄超过一定阈值的用户

```java
public List<User> findUsersAboveAge(int ageThreshold) {
    Query query = new Query();
    query.addCriteria(Criteria.where("age").gt(ageThreshold));
    return mongoTemplate.find(query, User.class);
}

```

在这个示例中，我们创建一个 Query 对象并添加一个条件来只检索年龄大于 ageThreshold 的用户。然后，我们使用 Query 对象和 User 类作为参数调用 MongoTemplate 对象上的 find 方法来执行查询并检索结果。



您还可以使用 MongoTemplate 执行更新、插入和删除:

在本例中，我们使用 Query 和 Update 类更新具有特定名称字段的所有 User 对象，以获得新的 age 字段值

```java
public void updateAgeByName(String name, int newAge) {
    Query query = new Query();
    query.addCriteria(Criteria.where("name").is(name));
    Update update = new Update();
    update.set("age", newAge);
    mongoTemplate.updateMulti(query, update, User.class);
}

```

通过 MongoTemplate，您可以完全控制可以创建的 MongoDB 查询，从而为您提供最大的灵活性，以便根据需要执行自定义操作。







































































