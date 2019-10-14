const nav = [{
        text: '首页',
        link: '/'
    }, // 内部链接 以docs为根目录
    {
        text: '文章',
        items: [{
            text: '软技能',
            link: '/softskill/'
        }]
    },
    {
        text: '大前端',
        items: [{
                text: '基础',
                items: [{
                        text: 'Javascript',
                        link: '/Javascript/'
                    },
                    {
                        text: 'ES6',
                        link: '/ES6/'
                    }
                ]
            },
            {
                text: '框架',
                items: [{
                        text: 'Vue',
                        link: '/Vue/'
                    },
                    {
                        text: 'React',
                        link: '/React/'
                    }
                ]
            },
        ]
    },
    {
        text: '随笔',
        link: '/jottings/'
    },
    {
        text: '关于作者',
        items: [{
                text: 'GitHub',
                link: 'https://github.com/ordinaryA'
            },
            {
                text: '掘金',
                link: 'https://juejin.im/user/5c38537d518825260d7ec96c'
            }
        ]
    },
];

module.exports = nav;