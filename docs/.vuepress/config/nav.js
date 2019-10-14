const nav = [{
        text: '首页',
        link: '/'
    }, // 内部链接 以docs为根目录
    {
        text: '大前端',
        items: [{
                text: '基础',
                items: [{
                        text: 'Javascript',
                        link: '/PAGE/2019-10-14-js-reg/',
                    },
                    {
                        text: 'ES6',
                        link: '/PAGE/2019-10-14-es6/',
                    },
                ]
            },
            {
                text: '框架',
                items: [{
                        text: 'Vue',
                        link: '/PAGE/2019-10-14-vue-mixin/',
                    },
                    {
                        text: 'React',
                        link: '/PAGE/2019-10-14-react-personal/',
                    }
                ]
            },
        ]
    },
    {
        text: '随笔',
        link: '/PAGE/2019-10-14-note-01/',
    },
    {
        text: '关于作者',
        items: [{
                text: 'GitHub',
                link: 'https://github.com/ordinaryA',
            },
            {
                text: '掘金',
                link: 'https://juejin.im/user/5c38537d518825260d7ec96c',
            }
        ]
    },
];

module.exports = nav;