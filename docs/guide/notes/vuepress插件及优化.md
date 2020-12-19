---
title: vuePress插件及优化
date: 2020-12-19 
categories:
 - front
tags:
 - vuepress
---



# vuePress插件及优化



### 评论插件

https://leancloud.cn/dashboard/app.html?appid=SCjUYdngFE4sn6mE1DgcogTl-gzGzoHsz#/key

![1608406640262](../../images/1608406640262.png)



```
[
        'vuepress-plugin-comment',
        {
            choosen: 'valine',
            visitor: true, // 阅读量统计
            // options选项中的所有参数，会传给Valine的配置
            options: {
                el: '#valine-vuepress-comment',
                appId: 'SCjUYdngFE4sn6mE1DgcogTl-gzGzoHsz',
                appKey: 'TWtsjTW1FIVtin239k7GHV8f'
            }
        }
    ],
```



