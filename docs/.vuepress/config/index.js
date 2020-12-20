module.exports = {
    plugins: [
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
    ]
};
