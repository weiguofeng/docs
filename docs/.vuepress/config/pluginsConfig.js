module.exports = [
    ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
        body: [
            {
                type: 'title',
                content: '欢迎加入QQ交流群 🎉🎉🎉',
                style: 'text-aligin: center;'
            },
            {
                type: 'image',
                src: '/rvcode_qq.png'
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
    '@vuepress/plugin-medium-zoom', {
        selector: 'img',
        options: {
            margin: 20
        }
    },
    '@vuepress/search', {
        search: true, //默认false
        searchMaxSuggestions: 10 // 默认是5
    },
    '@vuepress-reco/vuepress-plugin-bgm-player', {
        audios: [
            {
                name: '用胳膊当枕头',
                artist: '최낙타',
                url: 'https://assets.smallsunnyfox.com/music/3.mp3',
                cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
            }
        ],
        floatPosition: 'left'
    }
    ,

    '@vuepress-reco/vuepress-plugin-pagation', {
        options: {
            perPage: 5
        }
    }
	
];