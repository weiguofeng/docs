const themeConf = require('./config/themeConfig.js');
const pluginsConf = require('./config/pluginsConfig.js');
const headConf = require('./config/headConfig.js');
module.exports = {
    //主题
    theme: 'reco',
    title: '锋格blog',
    description: '要么孤独、要么庸俗',
    base: '/docs/',
    // dest: './dist', 默认在.vuepress目录下生成
    port: '7777',
    head: headConf,
    //配置语言
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    markdown: {
        lineNumbers: true
    },
    themeConfig: themeConf,

    //插件
    plugins: pluginsConf,
};

