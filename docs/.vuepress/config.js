module.exports = {
    title: "前端蜗牛路",
    description: "郭邯同学的个人博客",
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }]
    ],
    themeConfig: {
        nav: [{
                text: '首页',
                link: '/'
            },
            {
                text: '文章',
                items: [{
                        text: '软技能',
                        link: '/softskill/'
                    },
                    {
                        text: 'webgl',
                        link: '/webgl/'
                    }
                ]
            },
            {
                text: '掘金',
                link: 'https://juejin.im/user/5b0f41de518825153a440dd9'
            },
            {
                text: 'GitHub',
                link: 'https://github.com/ggwork'
            },
            {
                text: '知乎',
                link: 'https://www.zhihu.com/people/yagb/activities'
            },
            {
                text: '女朋友',
                link: '/girlfriend/'
            }
        ],
    }
}