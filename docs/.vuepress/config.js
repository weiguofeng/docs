module.exports = {
    title: '锋格blog',
    description: '锋格blog',
    base: '/docs/',
    // dest: './dist', 默认在.vuepress目录下生成
    port: '7777',
    head: [
        // 网页标签栏图标
        ['link', {rel: 'icon', href: '/vuepress/favicon.ico'}],
        // 移动栏优化
        ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}]
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
        //自动侧边栏
        subSidebar: 'auto',
        //logo配置
        logo: '/fenggelogo.jpg',
        authorAvatar: '/fenggelogo.jpg',
        //导航栏配置
        nav: require('./nav.js'),

        //侧边栏配置
        sidebar: require('./sidebar'),
        //左右侧边栏
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',

        //最大查询展示10个
        searchMaxSuggestoins: 10,

        //pwa的更新提示
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

        //友链
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

        //备案号
        record: '京ICP备2018019108号-1',
        //备案查询连接
        recordLink: 'http://beian.miit.gov.cn/',
    },
    //主题
    theme: 'reco',

    //插件
    plugins: [
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
        // 动态标题
        ["dynamic-title",
            {
                showIcon: "vuepress/favicon.ico",
                showText: "欢迎帅哥美女！",
                hideIcon: "favicon.ico",
                hideText: "(●—●)关注我哦！！",
                recoverTime: 2000
            }],

        //音乐插件
        ['meting', {
            // metingApi: "http://music.163.com/playlist?id=417639577&userid=301312374",
            meting: {
                server: "netease",
                type: "playlist",
                mid: "5374044223",
                auto: "https://music.163.com/#/playlist?id=5374044223"
            },
            // 不配置该项的话不会出现全局播放器
            aplayer: {
                // 吸底模式
                fixed: true,
                mini: true,
                // 自动播放
                autoplay: true,
                // 歌曲栏折叠
                listFolded: true,
                // 颜色
                theme: '#f9bcdd',
                // 播放顺序为随机
                order: 'random',
                // 初始音量
                volume: 0.3,
                // 关闭歌词显示
                lrcType: 0
            },
            mobile: {
                // 手机端去掉cover图
                cover: false,
            }
        }],

        //看板娘插件
        ['@vuepress-reco/vuepress-plugin-kan-ban-niang', {
            theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
            modelStyle: {
                left: '50px',
                bottom: '-20px',
                opacity: '0.9'
            },
            messageStyle: {left: '28px', bottom: '190px'},
            btnStyle: {left: '50px', bottom: '40px'}
        }],

        //代码复制插件
        ["vuepress-plugin-nuggets-style-copy", {
            copyText: "复制代码",
            tip: {
                content: "复制成功!"
            }
        }],

        ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
            body: [
                {
                    type: 'title',
                    content: '欢迎加入QQ交流群 🎉🎉🎉',
                    style: 'text-aligin: center;'
                },
                {
                    type: 'image',
                    src: '/fenggelogo.jpg'
                }
            ],
            footer: [
                {
                    type: 'button',
                    text: '打赏',
                    link: '/donate'
                },
                {
                    type: 'button',
                    text: '打赏',
                    link: '/donate'
                }
            ]
        }],
    ]
}

