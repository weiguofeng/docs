//总侧边栏分布
module.exports = {
    //指南
    '/guide/': require('../guide/sidebar'),

    //git
    '/git/': require('../git/sidebar'),

    //面试宝典初级
    '/baodian/zero': require('../baodian/zero/sidebar'),

    //面试宝典高级
    '/baodian/high': require('../baodian/high/sidebar'),

    //面试必备
    '/baodian/must': require('../baodian/must/sidebar'),


    //java系列
    '/java/base': require('../java/base/sidebar'),
    '/java/lambda-stream': require('../java/lambda-stream/sidebar'),
    '/java/thread': require('../java/thread/sidebar'),
    '/java/other': require('../java/other/sidebar'),
    '/java/zookeeper': require('../java/zookeeper/sidebar'),

    //框架系列
    '/frame/spring': require('../frame/spring/sidebar'),
    '/frame/mybatis': require('../frame/mybatis/sidebar'),

    //k8s 及容器化
    '/k8s': require('../k8s/sidebar'),

    //数据库系列
    '/db/mysql': require('../db/mysql/sidebar'),
    '/db/oracle': require('../db/oracle/sidebar'),
    '/db/redis': require('../db/redis/sidebar'),
    '/db/mongo': require('../db/mongo/sidebar'),
    '/db/dataStructure': require('../db/dataStructure/sidebar'),

    //前端系列
    //    React学习文档
    '/front/react': require('../front/react/sidebar'),
    '/front/vue': require('../front/vue/sidebar'),
    '/front/base': require('../front/base/sidebar'),
    '/front/angular': require('../front/angular/sidebar'),
    '/front/layui': require('../front/layui/sidebar'),


    //工具系列
    //    mac的使用文档
    '/mac': require('../mac/sidebar'),
    '/tools/tool': require('../tools/tool/sidebar'),
    '/tools/computerNetwork': require('../tools/computerNetwork/sidebar'),

    //杂谈及问题
    '/questions/question': require('../questions/question/sidebar'),
    '/questions/talk': require('../questions/talk/sidebar'),
};
