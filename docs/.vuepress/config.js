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
        sidebar: {
            '/softskill/': [
                '',
                '软技能-代码之外的生存指南1（职业篇）',
                '软技能-代码之外的生存指南2（自我营销篇）',
                '软技能-代码之外的生存指南3（自我学习）',
                '软技能-代码之外的生存指南4（生产力）',
                '软技能-代码之外的生存指南5（理财）',
                '软技能-代码之外的生存指南6（健身）',
                '软技能-代码之外的生存指南7（精神）'
            ],
            '/webgl/': ['']
        }
    }
}