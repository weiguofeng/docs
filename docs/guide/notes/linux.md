---
title: linux
date: 2020-12-02
categories:
 - linux
tags:
 - linux
---

- 如何找到一个命令

```
按两次tab键 补全命令
```

- 命令历史记录

```
向上键 向下键

ctrl+R用于查找使用过的命令

history 用于列出之前使用过的所有命令 用!编号执行使用过的命令
```

- 快捷键

```
ctrl+L 清理终端 同clear
ctrl+D 给终端传递EOF(文件结束符)
shift + PgUp 向上滚屏 
shift + PgDn 向下滚屏 
ctrl +A 光标跳到一行命令的开头 Home键
ctrl +E 光标跳到一行命令的结尾 End键
ctrl +U 删除光标左侧的字符
ctrl +K 删除光标右侧的字符
ctrl +W 删除光标左侧的一个"单词"
ctrl +Y 粘贴用 ctrl +U ctrl +K ctrl +W
```

- 目录组织

```
普通文件
文本类型（txt doc odt）
声音文件（wav mp3 ogg）

特殊文件
光盘 驱动器

根目录 / 
/usr/bin
在linux下命名目录时尽量不使用空格或其他特殊符号 尽量用小写英文字母

根目录直属子目录
bin: binary "二进制文件" 包含了会被所有用户使用的可执行程序
boot：启动 包含了与linux启动相关的文件
dev：device 设备 包含外设 里面的子目录，每一个对应一个外设
etc：目录包含系统的配置文件
home：用户的私人目录 放置私人文件 /home/chq
lib：library 库 包含被程序所调用的库文件 例：.so文件
media：媒体 可移动的外设(usb盘 sd卡 光盘)插入电脑时 通过media的子目录来访问这些外设的内容
mnt：mount挂载 临时挂载一些装置
opt：可选的应用软件包 用于安装多数第三方软件和插件
root：超级用户root的家目录
sbin：system binary的缩写，系统二进制文件 包含系统级的重要可执行程序
srv：service 服务 包含一些网络服务启动之后所需要取用的数据
tmp：temporary 普通用户和程序存放临时文件的地方
usr：unix操作系统软件资源 类似c:\windows c:\program files这两个文件夹的集合，安装了大部分用户要调用的程序
var：variable 包含程序的数据 比如log日志文件


```

- pwd which

```
pwd 显示当前目录的路径
which 获取命令的可执行文件的位置
linux 每一条命令其实对应了一个可执行程序 
which pwd =>/usr/bin/pwd
```

- ls

```
ls：列出文件和目录
centOS中，蓝色--》目录，绿色--》可执行文件，红色--》压缩文件，浅蓝色--》链接文件，灰色--》其它文件
开启颜色标注：ls --color=auto
关闭颜色标注：ls --color=none

常用参数
-a:显示所有文件和目录，包括隐藏的， 以.开头的是隐藏文件，不包括开头的.(当前目录) 与..(上一级目录)
-A:与-a作用一样，不列出.和..这两个文件
-l:详细列表
total 68
lrwxrwxrwx.  1 root    root        7 Aug 18  2017 bin -> usr/bin
dr-xr-xr-x.  4 root    root     4096 Sep 12  2017 boot
drwxr-xr-x  19 root    root     2980 Jul  2 22:02 dev
drwxr-xr-x. 82 root    root     4096 Jul  3 06:00 etc
drwx------   2 ftpuser ftpuser  4096 Nov  8  2019 ftpfile
drwxr-xr-x.  3 root    root     4096 Jun 13  2019 home
lrwxrwxrwx.  1 root    root        7 Aug 18  2017 lib -> usr/lib
lrwxrwxrwx.  1 root    root        9 Aug 18  2017 lib64 -> usr/lib64
drwx------.  2 root    root    16384 Aug 18  2017 lost+found
drwxr-xr-x.  2 root    root     4096 Nov  5  2016 media
drwxr-xr-x.  2 root    root     4096 Nov  5  2016 mnt
drwxr-xr-x.  2 root    root     4096 Nov  5  2016 opt

这里total表示的是千字节
文件权限:dr-xr-xr-x
链接的数目:1 4 之类
文件所有者名称
文件所在的群组
文件大小: 单位是byte 7 4096等
文件最近修改时间
文件或目录的名称

-h:以ko mo go的形式显示文件大小
-t:按文件最近一次修改时间排序
ls-lath叠加效果
```

- cd

```
cd:切换目录
cd /
cd.. 回到上一级目录
cd .当前目录
cd../..后退两个层级
相对路径:相对于当前目录
绝对路径:不因当前目录而改变的 总是以/开头
cd ~家目录
cd 家目录
tab键也可以进行路径的补全
```

- du

```
du:显示目录包含的文件大小 ，默认情况下，du命令只显示目录的大小
知道文件和目录所占的空间大小
du命令会深入遍历每个目录的子目录，统计所有文件的大小

-h:以ko mo go的形式显示文件大小
-a:显示文件和目录大小
-s:只显示总计大小
```

- 显示文件内容

```
cat:一次性显示文件的所有内容
cat -n 显示行号

less:分页显示文件内容
more没有less强大
空格键:文件内容读取下一个终端屏幕的行数
回车键:文件内容读取下一行，前进一行
d键:前进半页(半个屏幕)
b键:后退一页
y键:后退一行
u键:后退半页
q键:停止读取文件,中止less命令
=号:显示你在文件中的什么位置
h键;帮助文档
q键:退出帮助文档
/:进入搜索模式 /you,n键(跳到下一个符合项目),N键(shift+n，跳到上一个符合项目)

head:显示文件的开头几行,默认10行
-n:指定行数
tail:显示文件的结尾几行,默认尾10行
-n:指定行数
-f:实时追踪文件的更新,默认每过1秒检查一下文件是否有新内容
-s:指定间隔检查的秒数,tail -f -s 4 xxx
ctrl+c:可以终止大部分终端的命令
```

- touch&mkdir

```
touch:创建一个空白文件
mkdir:创建一个目录
-p:递归创建目录结构 mkdir -p one/two/three
如果文件名有空格加双引号
```

- 文件复制，移动，删除，链接

```
cp:拷贝文件或目录
单个文件，多个文件，目录 cp new_file new_file_copy
复制文件到另一个目录 cp new_file /one，cp new_file one/new_file_copy
-r,-R:拷贝目录

通配符*:替代任意字符串
cp *.txt folder:吧当前目录下所有txt文件拷贝到folder目录中,cp ha* folder

mv:移动文件(目录),重命名文件(目录)
mv *.txt one:将当前目录下所有txt文件移动到one目录
mv new_file renamed_file:重命名文件

rm:删除文件和目录
-i:向用户确认是否删除
-f:强制删除
-r:递归的删除
rmdir:只能删除空的目录
千万不要输入 rm -rf/* 或者 rm -rf / 删除整个系统
sudo rm -rf --no-preserve-root / 递归删除所有文件


ln:创建链接,快捷方式
链接类型
physical link:物理链接或硬链接
symbolic link:符号链接或软连接

文件的存储
文件大致分为两部分;文件名和文件内容
文件名的列表是存储在硬盘的其它地方,和文件内容分开存放
其实文件有三部分:文件名，权限，文件内容

每个文件的文件内容被分配到一个标识号码，就是inode
因此每个文件名都绑定到它的文件内容(用inode标识)

创建硬链接:使连接的两个文件共享同样文件内容，就是同样的inode
如果文件1和文件2之间有了硬链接
那么修改文件1或文件2，修改的是相同的一块内容
缺点:只能创建指向文件的硬链接，不能创建指向目录的，需要改参数支持
创建文件file2,使之成为file1的硬链接:ln file1 file2
ls -i:-i参数可以显示文件的inode
对于硬链接，删除任一方文件，共同指向的文件内容并不会从硬盘上被删除

软连接:可以支持指向文件或目录,对于目录，一般都是用软链接
创建软链接需要加上 -s参数
ln -s file1 file2:创建file1的软链接file2,表示file2指向file1,权限的第一个字母变成了l,表示link
file2软链接只是file1的一个快捷方式
inode不同

删除file2,file1没有影响
删除file1,file2会变成死链接
```

- 用户和权限

```
sudo:以root身份运行命令，暂时成为root
sudo su:一直成为root
exit退出root
centOs中还可以使用su,su -, sudo -i

用户组织
root
群组
用户

用户管理的命令 root
useradd:添加新用户,命令后接要创建的用户名
passwd:可以修改用户的密码
userdel:删除已创建的用户,只会删除用户，但是不会删除在/home目录中的用户家目录
-r:连此用户的家目录一并删除 --remove

群组的管理
linux中每一个用户都属于一个特定的群组
如果不设置用户的群组，默认会创建一个和它的用户名一样的群组，并且把用户划归到群组
groupadd:创建群组
usermod:修改用户账户
-l:对用户重命名 /home中的用户家目录名不改变 需要手动修改
-g:修改用户所在群组
-G:将一个用户添加到多个群组
-G -a:不想离开原先的群组，又想加入新的群组
usermod -g friends thomas 将thomas这个用户放到我刚创建的friends这个群组里
groups:可以获知一个用户属于哪个群组
groupdel:删除群组

修改文件的所有者和群组
chown:改变文件的所有者
chown thomas file.txt 后接新的所有者的用户名，再接文件名
-R:递归设置子目录和子文件,使得被修改的目录的所有子目录和子文件都改变所有者,或者连群组也改变
chown oscar:friends file.txt 把file.txt文件的所有者改为oscar，群组改为friends
chown -R oscar:oscar /home/thomas 把用户thomas的家目录的所有子目录和文件占为已有
chgrp:改变文件的群组
chgrp thomas file.txt 后接新的群组名，再接文件名


文件权限管理
chmod:修改访问权限
d:directory 目录
-:普通文件
l:link 链接
r:读
w:写 如果有写的权限 则有删除的权限
x:执行 如果x在一个目录上，表示这个目录可以被读
访问权限按用户划分
d rwx(所有者) rwx(群组用户) rwx(其它用户)

chmod 不需要是root用户才能运行
r 4 w 2 x 1
chmod 600 rename_file

u:user 用户，表示所有者
g:group 群组 群组用户
o:other 其它 其它用户
a:all 所有 所有用户
+：添加权限 -：去除权限 =：分配权限
chmod u+rx file 文件file的所有者增加读和运行的权限
-R:递归的修改访问权限
chmod -R 700 /home/oscar 允许oscar能 读，写，运行/home/oscar目录的所有文件
```

- 软件包和依赖关系

```
一个软件包其实是软件的所有文件的压缩包
red hat(centOs)一般软件包后缀是.rpm
debian(ubuntu)软件包后缀是.deb

几乎所有的.rpm软件包存放在相同的地方，称为软件仓库(repository)

依赖关系:一个软件经常需要使用其他程序或者其他程序的片段(称之为 库)

如何切换软件仓库
centOS系统使用的软件仓库的列表是记录在一个文件中的 vim /etc/yum.repos.d/CentOS-Base.repo

终端的软件包管理命令一般用yum
yum是CentOS中的默认包管理器工具，也用于red hat 一族
yum update/ upgrade:更新软件包
yum search:搜索软件包
yum install:安装软件包
yum remove:删除软件包
```

- RTFM手册

```
man:manual显示使用手册
手册分为
1.可执行程序或Shell命令
2.系统调用(Linux内核提供的函数)
3.库调用(程序库中的函数)
4.文件(例如 /etc/passwd)
5.特殊文件(通常在/dev下)
6.系统管理命令
7.内核子程序
安装手册:sudo yum install -y man-pages
更新手册:sudo mandb
输入 man+数字+命令/函数，可以查到相关的命令和函数
man ls
向上向下: 一行一行的跳转
PgUp和PgDn(空格键):实现上一页和下一页的跳转
键盘上的Home和End键:实现开始和结尾的跳转
/:搜索 与less命令中功能类似
q键:退出手册页

手册页不同区域
name 名字
synopsis 概要
description 描述

例如:man mkdir
synopsis区域: mkdir [OPTION]... DIRECTORY...
中括号括起来的表示可选的
...表示可以有多个此类的内容
区域中粗体的文字表示要原封不动的输入
下划线的文字表示要用实际的内容替换

选项参数一般在description区域中

apropos:查找命令

-h --help: 显示帮助文档
whatis:只会列出man命令显示的手册的开头部分，就是概述命令的作用

```

- 查找文件

```
locate:快速查找 搜索包含关键字的所有文件和目录
locate并不能查出刚创建的文件 还没有收录文件数据库
locate不会对实际的整个硬盘查找，而是在文件的数据库里查找记录
updatedb:强制系统立即更新文件数据库

find:遍历实际硬盘
find <何处> <何物> <做什么>
何处:指定在哪个目录查找，此目录的所有子目录也会被查找,没有指定就会在当前目录及子目录查找
何物:查找什么
做什么:后续处理

文件名查找:find -name "new_file"
在/var/log目录下查找名为syslog的文件:find /var/log -name "syslog"
可以使用通配符
在整个硬盘查找:find / -name "syslog"
根据文件大小查找:find /var -size +10M +是大于 -是小于
根据文件的最近访问时间查找:find -name "*.txt" -atime -7 7天之内

仅查找目录或文件
-type d:只查找目录类型
-type f:只查找文件类型

操作查找结果
find -name "*.jpg" <=>find -name "*.jpg" -print
find -name "*.txt" -printf "%p - %u\n"
%p:文件名
-：分隔符
%u:文件的所有者

删除查找到的文件:find -name "*.jpg" -delete

调用命令
-exec 后接一个命令，对每个查找到的文件进行操作
将one目录下所有查找到的txt文件的访问权限都改为600:find one -name "*.txt" -exec chmod 600 {}\;
{}:会用查找到的每个文件来替换
\;是必须的结尾
-ok替换-exec会提示是否执行操作
```

- 数据处理

```
grep:筛选数据 全局搜索一个正则表达式，并且打印
grep text file
text:代表要搜索的文本，file代表供搜索的文件
grep path /etc/profile
grep "hello" file
-i:忽略大小写
-n:显示行号 显示搜索到的文本所在的行号
-v:只显示文本不在的行
-r:在所有子目录和子文件中查找
rgrep相当于 grep -r
-E:使用正则表达式
egrep相当于 grep -E

配合正则表达式
.:匹配除"\n"之外的任何单个字符
^:行首(匹配输入字符串的开始位置) ^后面的字符须要出现在一行的开始
$:行尾(匹配输入字符串的结束位置)
[]:在中括号中的任意一个字符
?:问号前面的元素出现0次或1次
*:星号前面的元素可能出现0次，1次，多次
+:加号前面的元素必须出现一次以上(包含一次)
|:逻辑或
():表达式的分组(表示范围和优先度)

sort:为文件排序
-o:将排序后的内容写入新文件
sort -o sorted.txt name.txt
-r:倒序排列
-R:随机排序
-n:对数字排序

wc:文件的统计 
wc:显示三个数字
行数 单词数 字节数
-l:统计行数
-w:统计单词数
-c:统计字节数
-m:统计字符数

uniq:删除文件中的重复内容，只能将连续的重复行变为一行
-c:统计重复的行数
-d:只显示重复行的值

cut:剪切文件的一部分内容
-c:根据字符数来剪切
cut -c 2-4 name.txt
根据分隔符来剪切
.csv
逗号分隔值
-d:用于指定用什么分隔符
-f:表示剪切下用分隔符分隔的哪一块或哪几块区域
cut -d , -f 1 notes.csv
```

- 流 管道 重定向

```
重定向:把本来要显示在终端的命令结果，输送到别的地方
重定向到:文件或者另一个命令的输入
如何实现:通过在命令间插入特定的符号
>和>>:重定向到文件
将剪切的文件重定向到新的文件:cut -d , -f 1 notes.csv > students.txt
黑洞文件:/dev/null
重定向到文件末尾:cut -d , -f 1 notes.csv >> students.txt

stdin:从键盘向终端输入数据，标准输入 标准输入流。 文件描述符0
stdout:终端接收键盘输入的命令，标准输出(不含错误信息) 标准输出流。 文件描述符1
stderr:标准错误输出流 文件描述符2
文件描述符:是一个用于表述指向文件的引用的抽象化概念

2>:标准错误输出重定向到文件
2>>:将标准错误输出重定向到文件末尾
2>&1:将标准错误输出重定向到与标准输出相同的地方


< <<:从文件或键盘读取
<:用于指定命令的输入 cat < notes.csv等价于 cat notes.csv
<<:将命令的输入重定向为键盘输入 sort -n << END
sort -n <<END > numbers_sorted.txt 2>&1

管道 | :把两个命令连起来使用，一个命令的输出作为另一个命令的输入
 按学生名字排序:cut -d , -f 1 notes.csv | sort
 cut -d , -f 1 notes.csv | sort >sorted_names.txt
 根据大小排序目录:du |sort -nr | head
 列出包含关键字的文件:sudo grep log -lr /var/log | cut -d : -f 1 | sort | uniq
 sudo grep log -lr /var/log：遍历/var/log 目录及其子目录,列出所有包含log这个关键字的行，-l用于排除二进制文件，-r参数用于递归遍历
 
```

- 进程&系统监测

```
w:系统中目前有哪些用户登录着，以及在干什么
uptime:与w命令第一行相同 
系统正常运行时间:up 4 days
负载:load average: 0.00, 0.02, 0.05,数值分别表示1分钟之内的平均负载，5分钟之内的平均负载，15分钟之内的平均负载
tload:负载图
登录的用户列表:who

16:38:31 up 4 days, 18:38,  1 user,  load average: 0.00, 0.02, 0.05
USER()     TTY()      FROM         LOGIN@   IDLE   JCPU   PCPU WHAT
root     pts/0    210.45.123.201   08:55    7.00s  0.02s  0.00s w

user:登录的用户
tty:登录的终端
from:用户连接到的服务器ip地址
LOGIN@:用户连接系统时间
IDLE:空闲的 没运行任何命令
JCPU:该终端所有相关的进程使用的CPU的时间
PCPU:表示cpu执行当期程序所消耗的时间
WHAT:当下用户正运行的程序



ps&top:列出运行的进程
ps:进程的静态列表，不会随时间而更新 
PID(进程号) TTY(进程运行所在的终端)        TIME(进程运行了多久)    CMD(产生这个进程的程序名)
 9402               pts/0            00:00:00              bash
10025               pts/0            00:00:00               ps

ps -ef:列出所有进程
UID        PID  PPID  C STIME TTY          TIME CMD
root         1     0  0 Jul02 ?        00:00:03 /usr/lib/systemd/systemd --switched-root
root         2     0  0 Jul02 ?        00:00:00 [kthreadd]
uid:用户名 运行进程的用户
ppid:程序的父进程号
ps -ef | less

ps -efH:以乔木状列出所有进程
ps -u:列出此用户运行的进程
ps -aux:通过cpu和内存使用来过滤进程
根据cpu使用率来降序排列:ps -aux --sort -pcpu | less
根据内存使用率来降序排列:ps -aux --sort -pmem | less
将cpu和内存参数合并到一起:ps -aux --sort -pcpu,+pmem | head
pstree或 ps -axjf:以树形结构显示进程
```

- 进程操作和系统重启

```
top:进程的动态列表,默认按照使用处理器的比率来排序的
q退出
f/F:在进程列表中添加或删除某些列
h帮助
...

glances软件 htop软件

ctrl +c &kill:停止进程
在终端中拷贝与粘贴:ctrl+shift+c和ctrl+shift+v来执行
kill -9:立即强制结束进程
killall:结束多个进程 ，接程序名

halt&reboot:停止和重启系统
sudo halt
poweroff:关机
```

- 前后台进程

```
&符号和nohup:后台运行进程
前台进程:默认情况下，用户创建的进程都是前台进程
后台进程:后台进程的优点是不必等待程序运行结束，就可以输入其它命令
在后台运行进程:在要运行的命令最后加上&这个符号
&缺点:后台进程与终端相关联,一旦终端关闭或者用户登出，进程就自动结束

nohup:使进程与终端分离

ctrl+z,jobs,bg,fg:控制进程的前后台切换
ctrl+z:转到后台，并暂停运行
bg:使进程转到后台，会唤醒暂停的进程

5种进程状态
运行 R
中断 S
不可中断 D
僵死 进程已终止 但进程描述符依然存在，直到父进程调用wait4()系统函数后将进程释放 Z
停止 T

jobs：显示后台进程状态
fg:使进程转到前台 
```

- 压缩解压

```
打包 压缩
1.用tar将多个文件归档为一个总的文件，称为archive
-cvf:创建一个tar归档 tar -cvf sorting.tar sorting/
tar -cvf archive.tar file1.txt file2.txt file3.txt
-tf:显示归档里的内容，并不解开归档，tar -tf sorting.tar
-rvf:追加文件到归档，tar -rvf archive.tar file_extra.txt
-xvf:解开归档 x是extract的缩写，表示提取，取出，tar -xvf sorting.tar
c:create 表示创建 
v:verbose 表示冗余 会显示操作的细节
f:file 表示文件 指定归档文件

2.用gzip或bzip2命令将archive压缩为更小的文件
gzip,bzip2:压缩归档
.tar.gz:用gzip命令压缩后的文件后缀名
.tar.bz2:用bzip2命令压缩后的文件后缀名
gunzip,bunzip2:解压
gunzip sorting.tar.gz
bunzip2 sorting.tar.bz2

用tar命令同时归档和压缩
tar -zcvf sorting.tar.gz sorting 
解压:tar -zxvf sorting.tar.gz

-jcvf:归档，然后用bzip2来压缩归档
tar -jcvf sorting.tar.bz2 sorting
解压:tar -jxvf sorting.tar.bz2

zcat/bzcat,zmore/bzmore,zless/bzless:显示用gzip/bzip2压缩的文件的内容
zcat sorting.tar.gz
bzcat sorting.tar.bz2

zip/unzip,rar/unrar:压缩、解压zip和rar文件
unzip archive.zip
zip -r sorting.zip sorting/ 压缩为.zip文件
-r:递归的
```

- 编译安装软件

```
下载源代码 
https://hisham.hm/htop/releases
chown oscar:oscar htop-2.2.0.tar.gz
解压压缩包
tar -zxvf htop-2.2.0.tar.gz
配置
./configure
缺少依赖 sudo yum -y install ncurses-devel
编译
make
安装
sudo make install
运行
htop
alien可以将deb安装包与rpm安装包互相转换
```

- centOS服务器配置

```
ifconfig:net-tools
ip addr:iproute2
```

- 连接远程终端

```
telnet
明文:传送方想要接收方获得的可读信息
密文:经过加密所产生的信息被称为密文
ssh协议


加密算法
对称加密和非对称加密
对称加密算法用一个密钥来加密信息，加密与解密使用的是同一个密钥
加密方和解密方都需要知道密钥


非对称加密：为了加密用于对称加密的密钥
用一个密钥来进行加密，用另一个密钥来进行解密
公钥：用于加密
私钥：用于解密

例如
公钥：2K49CB,可以在网络上以明文传输
密钥：5z3sR2
message --用2K49CB公钥加密--》i5%2&34
i5%2&34 --用5z3sR2私钥解密--》message

RSA算法

用ssh创建一个安全的通信管道
ssh结合使用非对称加密和对称加密两种方法(因为非对称加密消耗电脑资源)
1.使用非对称加密，安全的传输对称加密的密钥(非对称加密只是通信之初用于交换对称加密的密钥)
2.之后，一直使用对称加密的密钥来作为加密和解密的手段

客户机《--------公钥2k48E--服务器 (公钥2k48E 私钥5z3sR )
客户机(用公钥2k48E来加密自己的对称加密密钥 superkey) ----加密后的密钥是ch4b7--->服务器
客户机(superkey)                     服务器(用私钥5z3sR解密ch4b7得到对称加密的密钥是superkey)
现在客户机和服务器就可以使用superkey作为加密解密的手段了

用ssh连接
将电脑配置成ssh服务器
安装openssh
客户端：openssh-client
服务端：openssh-server(让自己的机器开放ssh服务)，会自动开启sshd精灵进程(守护进程)

如果只是想用ssh远程连接到别的机器
只需安装openssh-client
sudo yum install openssh-clients

服务器安装ssh服务
yum install openssh-server
systemctl start sshd
systemctl enable sshd
ps -ef | grep ssh

客户端安装ssh工具
xshell
yum install openssh-clients

客户端通过ssh连接服务器
config配置ssh
全局config文件
ssh客户端的配置：/etc/ssh/ssh_config
ssh服务端的配置: /etc/ssh/sshd_config


```

