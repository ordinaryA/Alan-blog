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
    // 顶部导航栏
    themeConfig: {
        displayAllHeaders: true,
        // sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: '最后更新', // 文档更新时间：每个文件git最后提交的时间,
        nav: [{
                text: '首页',
                link: '/'
            }, // 内部链接 以docs为根目录
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
            // '/softskill/': [
            //     '',
            //     '软技能-代码之外的生存指南1（职业篇）',
            //     '软技能-代码之外的生存指南2（自我营销篇）',
            //     '软技能-代码之外的生存指南3（自我学习）',
            //     '软技能-代码之外的生存指南4（生产力）',
            //     '软技能-代码之外的生存指南5（理财）',
            //     '软技能-代码之外的生存指南6（健身）',
            //     '软技能-代码之外的生存指南7（精神）'
            // ],
            '/softskill/': [
                ['软技能-代码之外的生存指南1（职业篇）.md', '代码之外的生存指南1（职业篇）'],
                ['软技能-代码之外的生存指南2（自我营销篇）.md', '代码之外的生存指南2（自我营销篇）'],
                ['软技能-代码之外的生存指南3（自我学习）.md', '代码之外的生存指南3（自我学习）'],
                ['软技能-代码之外的生存指南4（生产力）.md', '代码之外的生存指南4（生产力）'],
                ['软技能-代码之外的生存指南5（理财）.md', '代码之外的生存指南5（理财）'],
                ['软技能-代码之外的生存指南6（健身）.md', '代码之外的生存指南6（健身）'],
                ['软技能-代码之外的生存指南7（精神.md）', '软技能-代码之外的生存指南7（精神.md）'],
            ],
            // '/softskill/': [
            //     '/softskill/', // softskill文件夹的README.md 不是下拉框形式
            //     {
            //         title: '侧边栏下拉框的标题1',
            //         children: [
            //             '/softskill/软技能-代码之外的生存指南1（职业篇）', // 以docs为根目录来查找文件 
            //             // 上面地址查找的是：docs>accumulate>JS>test.md 文件
            //             // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
            //             '/softskill/软技能-代码之外的生存指南2（自我营销篇）',
            //             '/softskill/软技能-代码之外的生存指南3（自我学习）',
            //             '/softskill/软技能-代码之外的生存指南4（生产力）',
            //             '/softskill/软技能-代码之外的生存指南5（理财）',
            //             '/softskill/软技能-代码之外的生存指南6（健身）',
            //             '/softskill/软技能-代码之外的生存指南7（精神）'
            //         ]
            //     }
            // ],
            '/webgl/': ['']
        }
    }
}