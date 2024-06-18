# 16、nginx主备的配置





```
upstream myapp {
    server 192.168.10.10:8080 weight=5;
    server 192.168.10.11:8081 weight=5;
}


location / {
    proxy_pass http://myapp;
}


```

