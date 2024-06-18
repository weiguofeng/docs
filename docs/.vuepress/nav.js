module.exports = [
    {
        text: '主页', link: '/',icon: 'reco-home'
    },
    {
        text: 'Java', link: '/java/',icon: 'reco-blog',
        items: [
            {text: '基础部分', link: '/java/base/'},
            {text: 'lambda-stream', link: '/java/lambda-stream/'},
            {text: '多线程', link: '/java/thread/'},
            {text: 'zookeeper', link: '/java/zookeeper/'},
            {text: '其他', link: '/java/other/'},
        ]
    },
    {
        text: 'frame', link: '/frame/',icon: 'reco-blog',
        items: [
            {text: 'spring', link: '/frame/spring/'},
            {text: 'Mybatis', link: '/frame/mybatis/'}
        ]
    },
    {
        text: '数据库', link: '/db/',icon: 'reco-blog',
        items: [
            {text: 'MySQL', link: '/db/mysql/'},
            {text: 'Oracle', link: '/db/oracle/'},
            {text: 'Redis', link: '/db/redis/'},
            {text: 'MongoDB', link: '/db/mongo/'},
            {text: '数据结构与算法', link: '/db/dataStructure/'},
        ]
    },
    {
        text: '前端', link: '/front/',icon: 'reco-tag',
        items: [
            {text: 'React', link: '/front/react/'},
            {text: '前端基础', link: '/front/base/'},
            {text: 'Vue', link: '/front/vue/'},
            {text: 'AngularJs', link: '/front/angular/'},
            {text: 'LayUI', link: '/front/layui/'},
        ]
    },
    {
        text: '面试宝典', link: '/baodian/',icon: 'reco-blog',
        items: [
            {text: '初级开发篇', link: '/baodian/zero/'},
            {text: '中高进阶篇', link: '/baodian/high/'},
            {text: '面试必备', link: '/baodian/must/'},
        ]
    },
    {
        text: 'Git', link: '/git/',icon: 'reco-blog',
        items: [
            {text: 'Git持续集成', link: '/git/'},
        ]
    },
    {
        text: 'K8S', link: '/k8s/',icon: 'reco-blog',
        items: [
            {text: 'k8s基础', link: '/k8s/'},
        ]
    },
    {
        text: '开发指南', link: '/guide/',icon: 'reco-blog',
        items: [
            {text: '开发指南', link: '/guide/'},
        ]
    },
    {
        text: '问题', link: '/question/',icon: 'reco-blog',
        items: [
            {text: '问题', link: '/questions/question/'},
            {text: '闲谈', link: '/questions/talk/'},
        ]
    },
    {
        text: 'Tools', link: '/tools/',icon: 'reco-blog',
        items: [
            {text: 'Mac', link: '/mac/'},
            {text: 'Tools', link: '/tools/tool/'},
            {text: '计算机网络与数据通信', link: '/tools/computerNetwork/'}
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
];
