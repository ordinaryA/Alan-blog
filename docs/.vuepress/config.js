module.exports = {
    title: "Alan Blog",
    description: "Alan Blog",
    head: [
        // 增加一个自定义的 favicon(网页标签的图标)
        // 这里的 '/' 指向 docs/.vuepress/public 文件目录 
        // 即 docs/.vuepress/public/img/geass-bg.ico
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }]
    ],
    base: '/Alan-blog/', // 这是部署到github相关的配置
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