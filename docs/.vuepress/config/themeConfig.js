module.exports = {
    locales: {
        '/': {
            recoLocales: {
                homeBlog: {
                    article: '美文', // 默认 文章
                    tag: '标识', // 默认 标签
                    category: '类别', // 默认 分类
                    friendLink: '友链' // 默认 友情链接
                },
                pagation: {
                    prev: '上一页',
                    next: '下一页',
                    go: '前往',
                    jump: '跳转至'
                }
            }
        }
    },
    "nav": [
        {
            "text": "主页",
            "link": "/",
            "icon": "reco-home"
        },
        {
            "text": "时间线",
            "link": "/timeline/",
            "icon": "reco-date"
        },
        {
            "text": "前端",
            "icon": "reco-message",
            "items": [
                {
                    "text": "vue",
                    "link": "/docs/vue/"
                },
                {
                    "text": "angular",
                    "link": "/docs/angular/"
                }
            ]
        },
        {
            "text": "关于",
            "icon": "reco-message",
            "items": [
                {
                    "text": "GitHub",
                    "link": "",
                    "icon": "reco-github"
                },
                {
                    "text": "微信",
                    "link": "",
                    "icon": "reco-github"
                }
            ]
        }
    ],

    //带侧边栏的
    "sidebar": {
        "/docs/theme-reco/": [
            "",
            "theme",
            "plugin",
            "api"
        ],
        "/docs/vue/": [
            "",
            "theme",
            "plugin",
            "api"
        ],
    },
    "type": "blog",
    // 博客设置
    blogConfig: {
        category: {
            location: 2, // 在导航栏菜单中所占的位置，默认2
            text: '后端' // 默认 “分类”
        },
        tag: {
            location: 3, // 在导航栏菜单中所占的位置，默认3
            text: '标签' // 默认 “标签”
        },
        socialLinks: [
            {icon: 'reco-github', link: 'https://github.com'},
            {icon: 'fa-camera', link: 'https://www.npmjs.com/~reco_luan'}
        ]
    },
    //友链
    "friendLink": [
        {
            "title": "午后南杂",
            "desc": "Enjoy when you can, and endure when you must.",
            "email": "1156743527@qq.com",
            "link": "https://www.recoluan.com"
        },
        {
            "title": "vuepress-theme-reco",
            "desc": "A simple and beautiful vuepress Blog & Doc theme.",
            "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
            "link": ""
        }
    ],
    logo: '/fenggelogo.jpg',
    authorAvatar: '/fenggelogo.jpg',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    subSidebar: 'auto',
    sidebarDepth: 10,
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: '锋格',
    // 备案号
    record: '京（备1111111）',
    // 项目开始时间
    startYear: '2017',

    //  添加评论
    vssueConfig: {
        platform: 'github',
        owner: 'OWNER_OF_REPO',
        repo: 'NAME_OF_REPO',
        clientId: 'YOUR_CLIENT_ID',
        clientSecret: 'YOUR_CLIENT_SECRET',
    }
};
