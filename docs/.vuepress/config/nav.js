const nav = [{
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
];

module.exports = nav;