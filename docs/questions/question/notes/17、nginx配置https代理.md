# 17、nginx配置https代理



####   1、秘钥openssl生成参考

​	https://blog.csdn.net/weixin_53060366/article/details/129714026





####   2、配置文件参考



nginx.conf

```

#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

    server {
		listen 8180;
		server_name localhost;

		return 301 https://$server_name$request_uri;
	}

	server {
		listen 443 ssl;
		server_name localhost;

		# 秘钥
		ssl_certificate      C:/Users/Lenovo/Desktop/nginx-1.22.1/666tp.crt;
		ssl_certificate_key  C:/Users/Lenovo/Desktop/nginx-1.22.1/666tp.key;
		
		#这些指令指定Nginx用于SSL加密的SSL协议，密码和服务器偏好设置。在这种情况下，它使用TLSv1.1和TLSv1.2协议，以及一组被认为是安全的密码。
		ssl_protocols TLSv1.1 TLSv1.2;
		ssl_ciphers HIGH:!aNULL:!eNULL:!EXPORT:!CAMELLIA:!DES:!MD5:!PSK:!RC4;
		ssl_prefer_server_ciphers on;

		# 其他 SSL 相关配置
		location / {
			# 其他配置项
			proxy_pass http://192.168.52.1:3000;  # 您的后端服务地址
			
			# 这个指令设置HTTP请求头中的Host字段为当前请求的原始主机名。这个请求头对于一些Web服务器非常重要，因为它通常用于标识目标服务器上应该响应的虚拟主机。
			proxy_set_header Host $host;
			
			# 这个指令设置一个名为X-Real-IP的HTTP请求头，其中包含实际客户端的IP地址。这通常是在使用反向代理和负载平衡技术时使用的，因为这些技术可能会隐藏客户端的实际IP地址。
			proxy_set_header X-Real-IP $remote_addr;
			
			# 这个指令将一个名为X-Forwarded-For的HTTP请求头添加到请求中。该请求头包含了一个逗号分隔的客户端IP地址列表，代理服务器的IP和端口号等。这个请求头通常用于调试，负载平衡，应用程序日志记录和安全事件调查等方面。
			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		}
	}


}

```



#### 	3、原始nginx配置文件

```

#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

    server {
        listen       80;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   html;
            index  index.html index.htm;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}

}

```

​	

















































