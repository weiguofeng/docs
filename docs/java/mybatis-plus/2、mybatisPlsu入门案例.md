# 2、mybatisPlsu入门案例

​	



![1697875907513](../../.vuepress/public/images/1697875907513.png)









#### 1、数据库设置

​		笔记地址

​			https://blog.csdn.net/weixin_48854649/article/details/126321036?spm=1001.2014.3001.5501

​	

​		注意：这里表的id使用的是bigint 原因是我们在使用mybatis-plus进行数据插入的时候，默认使用的是雪花算法-来生成id，长度比较长使用bigint就行

```

-- 创建数据库
CREATE DATABASE `mybatis_plus` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
use `mybatis_plus`;


-- 创建表
CREATE TABLE `user` (
`id` bigint(20) NOT NULL COMMENT '主键ID',
`name` varchar(30) DEFAULT NULL COMMENT '姓名',
`age` int(11) DEFAULT NULL COMMENT '年龄',
`email` varchar(50) DEFAULT NULL COMMENT '邮箱',
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- 添加数据 
INSERT INTO user (id, name, age, email) VALUES
(1, 'Jone', 18, 'test1@baomidou.com'),
(2, 'Jack', 20, 'test2@baomidou.com'),
(3, 'Tom', 28, 'test3@baomidou.com'),
(4, 'Sandy', 21, 'test4@baomidou.com'),
(5, 'Billie', 24, 'test5@baomidou.com');



```









































