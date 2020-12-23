module.exports = [
    [
        'vuepress-plugin-comment',
        {
            choosen: 'valine',
            visitor: true, // 阅读量统计
            // options选项中的所有参数，会传给valine的配置
            options: {
                el: '#valine-vuepress-comment',
                appid: 'scjuydngfe4sn6me1dgcogtl-gzgzohsz',
                appkey: 'twtsjtw1fivtin239k7ghv8f'
            }
        }
    ],
    ['cursor-effects'],
    [
        "ribbon"
    ],
    ['@vuepress/pwa', {
        serviceworker: true,
        updatepopup: {
            message: "发现新内容可用",
            buttontext: "刷新"
        }
    }],
    // 动态标题
    ["dynamic-title",
        {
            showicon: "/feathersjs.svg",
            showtext: "欢迎帅哥美女！",
            hideicon: "/favicon.ico",
            hidetext: "(●—●)关注我哦！！",
            recovertime: 2000
        }],

    //音乐插件
    ['meting', {
        // metingapi: "http://music.163.com/playlist?id=417639577&userid=301312374",
        meting: {
            // 歌单地址-> 如果输入可忽略server|type|mid
            // 但是不知道为什么不写上这三个会报错, 所以我都写上了
            auto: "https://music.163.com/#/playlist?id=5374044223",

            // 当前服务为netease -> 网易
            server: "netease",
            // 类型为歌单
            type: "playlist",
            // 歌单id
            mid: "5374044223"
        },
        // 不配置该项的话不会出现全局播放器
        aplayer: {
            // 吸底模式
            fixed: true,
            mini: true,
            // 自动播放
            autoplay: true,
            // 歌曲栏折叠
            listfolded: true,
            // 颜色
            theme: '#f9bcdd',
            // 播放顺序为随机
            order: 'random',
            // 初始音量
            volume: 0.3,
            // 关闭歌词显示
            lrctype: 0
        },
        mobile: {
            // 手机端去掉cover图
            cover: false,
        }
    }],

    //看板娘插件
    ['@vuepress-reco/vuepress-plugin-kan-ban-niang', {
        theme: ['shizuku', 'blackcat', 'whitecat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi',  'wanko', 'miku', 'z16'],
        modelstyle: {
            left: '50px',
            bottom: '-20px',
            opacity: '0.9'
        },
        messagestyle: {left: '28px', bottom: '190px'},
        btnstyle: {left: '50px', bottom: '40px'}
    }],

    //代码复制插件
    ["vuepress-plugin-nuggets-style-copy", {
        copyText: "复制代码",
        tip: {
            content: "复制成功!"
        }
    }],
    // ["@vuepress-yard/vuepress-plugin-window",{
    //     title: "公告",  //vuepress公告插件 先安装在配置 npm install @vuepress-yard/vuepress-plugin-window --save
    //     contentInfo: {
    //         title: "欢迎进来的朋友们 🎉🎉🎉",
    //         needImg: true,
    //         imgUrl: "https://weiguofeng.github.io/docs/fenggelogo.jpg",
    //         content: "喜欢博皮可以关注收藏",
    //         contentStyle: ""
    //     },
    //     bottomInfo: {
    //         btnText: '关于',
    //         linkTo: 'https://cnblogs.com/glassysky'
    //     },
    //     closeOnce: false
    // }],

];