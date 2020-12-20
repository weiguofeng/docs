---
title: vuePress搭建2配置
date: 2020-12-20 
categories:
 - front
tags:
 - vuepress
---
# vuePress搭建2配置

### 4.配置vuePress



#### config配置

```js
module.exports = {
    title: '锋格blog',
    description: '锋格blog',
    base: '/docs/',	//这里要多注意，设置后部署会有路径上的差异，不设置也可能会导致样式加载错误
    // dest: './dist', 默认在.vuepress目录下生成
    port: '7777',
    head: [
        // 网页标签栏图标
        ['link', { rel: 'icon', href: '/vuepress/favicon.ico' }],
        // 移动栏优化
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    //配置语言
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        type: 'blog',
        subSidebar: 'auto',
        logo: '/fenggelogo.jpg',
        authorAvatar: '/fenggelogo.jpg',
        nav: require('./nav.js'),
        sidebar: require('./sidebar'),
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！',
        // vssueConfig: {
        //     platform: 'github',
        //     owner: 'OWNER_OF_REPO',
        //     repo: 'NAME_OF_REPO',
        //     clientId: 'YOUR_CLIENT_ID',
        //     clientSecret: 'YOUR_CLIENT_SECRET',
        // }
        friendLink: [
            {
                title: 'vuepress-theme-reco',
                desc: 'A simple and beautiful vuepress Blog & Doc theme.',
                logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                link: 'https://vuepress-theme-reco.recoluan.com'
            },
            {
                title: '午后南杂',
                desc: 'Enjoy when you can, and endure when you must.',
                email: 'recoluan@qq.com',
                link: 'https://www.recoluan.com'
            },
            // ...
        ],
        record: '京ICP备2018019108号-1',
        recordLink: 'http://beian.miit.gov.cn/',
    },
    theme: 'reco',
    plugins: [
        // ["@vuepress-reco/vuepress-plugin-bgm-player",
        //     {
        //         audios: [
        //             // 网络文件示例
        //             {
        //                 name: 'mojito',
        //                 artist: '周杰伦',
        //                 url: 'http://storage.chqyys.top/music/3.mp3',
        //                 cover: './fenggelogo.jpg'
        //             }
        //         ] ,
        //         // 自动缩小
        //         autoShrink:true ,
        //         // 悬浮窗模式，吸边
        //         shrinkMode: 'float' ,
        //         // 悬浮窗位置
        //         floatStyle:{ bottom: '10px', 'z-index': '999999' },
        //
        //     }],
        [
            'vuepress-plugin-comment',
            {
                choosen: 'valine',
                visitor: true, // 阅读量统计
                // options选项中的所有参数，会传给Valine的配置
                options: {
                    el: '#valine-vuepress-comment',
                    appId: 'AfFAE0L44yanB796wFczMbzG-gzGzoHsz',
                    appKey: 'dp9nuN1hb1mLaDjqJnV8kd0b'
                }
            }
        ],
        ['cursor-effects'],
        [
            "ribbon"
        ],
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: {
                message: "发现新内容可用",
                buttonText: "刷新"
            }
        }],
        ["dynamic-title",
            {
                showIcon: "vuepress/smile.ico",
                showText: "(/≧▽≦/)欢迎帅哥美女！",
                hideIcon: "vuepress/1.jsp",
                hideText: "(●—●)呜呜，不要走嘛！！",
                recoverTime: 2000
            }],
        ['meting', {
            // metingApi: "http://music.163.com/playlist?id=417639577&userid=301312374",
            meting: {
                server: "netease",
                type: "playlist",
                mid: "5361802856",
                auto: "http://music.163.com/playlist?id=5361802856"
            },
            // 不配置该项的话不会出现全局播放器
            aplayer: {
                // 吸底模式
                fixed: true,
                mini: true,
                // 自动播放
                autoplay: true,
                // 歌曲栏折叠
                listFolded:true,
                // 颜色
                theme: '#f9bcdd',
                // 播放顺序为随机
                order: 'random',
                // 初始音量
                volume: 0.3,
                // 关闭歌词显示
                lrcType: 0
            },
            mobile :{
                // 手机端去掉cover图
                cover: false,
            }
        }],
        ['@vuepress-reco/vuepress-plugin-kan-ban-niang',{
            theme: 'shizuku',
            modelStyle:{
                left: '50px',
                bottom: '-20px',
                opacity: '0.9'
            },
            messageStyle:{ left: '28px', bottom: '190px' },
            btnStyle:{left: '50px', bottom: '40px'}
        }],

        ["vuepress-plugin-nuggets-style-copy", {
            copyText: "复制代码",
            tip: {
                content: "复制成功!"
            }
        }],
]
}


```



#### 导航栏配置nav.js

```js
module.exports = [
    {
        text: '主页', link: '/',icon: 'reco-home'
    },
    {
        text: 'Java', link: '/java/',icon: 'reco-blog',
        items: [
            {text: '基础部分', link: '/baodian/high/'},
            {text: '多线程', link: '/baodian/zero/'},
            {text: 'Spring系列', link: '/baodian/zero/'},
            {text: 'Mybatis系列', link: '/baodian/zero/'},
            {text: '其他', link: '/baodian/zero/'},
        ]
    },
    {
        text: '数据库', link: '/baodian/',icon: 'reco-blog',
        items: [
            {text: 'MySQL', link: '/baodian/zero/'},
            {text: 'Oracle', link: '/baodian/high/'},
            {text: 'Redis', link: '/baodian/high/'},
            {text: 'MongoDB', link: '/baodian/high/'},
        ]
    },
    {
        text: '前端', link: '/guide/',icon: 'reco-tag',
        items: [
            {text: 'Vue', link: '/baodian/zero/'},
            {text: 'AngularJs', link: '/baodian/high/'},
            {text: 'LayUI', link: '/baodian/high/'},
        ]
    },
    {
        text: '面试宝典', link: '/baodian/',icon: 'reco-blog',
        items: [
            {text: '初级开发篇', link: '/baodian/zero/'},
            {text: '中高进阶篇', link: '/baodian/high/'},
        ]
    },
    {
        text: 'Tools', link: '/baodian/',icon: 'reco-blog',
        items: [
            {text: 'Linux', link: '/baodian/zero/'},
            {text: 'Windows', link: '/baodian/high/'},
        ]
    },
    { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
    {
        text: '关于',icon: 'reco-message',
        items: [
            {
                text: '在线编辑',
                items: [
                    {text: '图片压缩', link: 'https://tinypng.com/'}
                ]
            },
            {
                text: '在线服务',
                items: [
                    {text: '阿里云', link: 'https://www.aliyun.com/'},
                    {text: '腾讯云', link: 'https://cloud.tencent.com/'}
                ]
            },
            {
                text: '博客指南',
                items: [
                    {text: '掘金', link: 'https://juejin.im/'},
                    {text: 'CSDN', link: 'https://blog.csdn.net/'}
                ]
            }
        ]
    }
]

```





#### 侧边栏配置sidebar

**注意这里使用的是引入每个文件夹下的侧边栏 **

```js
module.exports = {
    '/guide/': require('../guide/sidebar'),
    '/baodian/zero': require('../baodian/zero/sidebar'),
    '/baodian/high': require('../baodian/high/sidebar'),
    '/java/': require('../java/sidebar'),
}

```

**比如：guide/sidebar **

```js
module.exports = [
    {
        title:'首页'
    },
    {
        title:'css',
        collapsable: true,
        children:[
            '/guide/notes/css',
        ]
    },
    {
        title:'linux',
        collapsable: true,
        children:[
            '/guide/notes/linux',
        ]
    },
    {
        title:'vue',
        collapsable: true,
        children:[
            '/guide/notes/vue',
        ]
    },
    {
        title:'js',
        collapsable: true,
        children:[
            '/guide/notes/js1',
            '/guide/notes/js2',
        ]
    },
    {
        title:'ele',
        collapsable: true,
        children:[
            '/guide/notes/ele'
        ]
    },
    {
        title:'微信小程序',
        collapsable: true,
        children:[
            '/guide/notes/微信小程序'
        ]
    }
]

```




