//总侧边栏分布
module.exports = {
    //指南
    '/guide/': require('../guide/sidebar'),

    //面试宝典初级
    '/baodian/zero': require('../baodian/zero/sidebar'),

    //面试宝典高级
    '/baodian/high': require('../baodian/high/sidebar'),

    //面试必备
    '/baodian/面试必备': require('../baodian/面试必备/sidebar'),


    //java系列
    '/java/base': require('../java/base/sidebar'),
    '/java/spring': require('../java/spring/sidebar'),
    '/java/mybatis': require('../java/mybatis/sidebar'),
    '/java/thread': require('../java/thread/sidebar'),
    '/java/other': require('../java/other/sidebar'),


    //数据库系列
    '/db/mysql': require('../db/mysql/sidebar'),
    '/db/oracle': require('../db/oracle/sidebar'),
    '/db/redis': require('../db/redis/sidebar'),
    '/db/mongo': require('../db/mongo/sidebar'),
    '/db/数据库与算法': require('../db/数据库与算法/sidebar'),

    //前端系列
    '/front/vue': require('../front/vue/sidebar'),

    //工具系列
    '/tools/tool': require('../tools/tool/sidebar'),
    '/tools/计算机网络与数据通信': require('../tools/计算机网络与数据通信/sidebar'),

    //杂谈及问题
    '/question/': require('../question/sidebar'),
    '/question/闲谈': require('../question/闲谈/sidebar'),
};
