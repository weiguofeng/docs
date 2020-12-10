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
        text: 'Tools', link: '/tools/',icon: 'reco-blog',
        items: [
            {text: 'tools', link: '/tools/'}
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
