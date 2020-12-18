module.exports = [
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
            showIcon: "../favicon.ico",
            showText: "欢迎帅哥美女！",
            hideIcon: "../favicon.ico",
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
];