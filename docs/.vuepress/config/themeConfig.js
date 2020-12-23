const navConf = require('./../nav.js');
const sidebar = require('./../sidebar.js');

module.exports = {
    type: 'blog',
    //自动侧边栏
    subSidebar: 'auto',
    //logo配置
    logo: '/feathersjs.svg',
    authorAvatar: '/fenggelogo.jpg',
    //导航栏配置
    nav: navConf,

    //侧边栏配置
    sidebar: sidebar,
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
};