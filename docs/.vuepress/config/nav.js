const nav = [
    // {
    //     text: '首页',
    //     link: '/'
    // }, // 内部链接 以docs为根目录
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
        text: '练习',
        items: [{
                text: '小游戏',
                link: '/PAGE/2019-10-23-before/',
            },
            {
                text: '聊天室',
                link: '/PAGE/2019-10-14-myChat/',
            }
        ]
    },
    {
        text: '摸鱼',
        items: [
            {
                text: '上班摸鱼',
                items: [{
                    text: '摸鱼，是员工...',
                    link: '/PAGE/2019-10-23-touch-fish-hhhh/',
                }]
            },
            // {
            //     text: '开发管理',
            //     items: [{
            //         text: 'Git',
            //         link: '/PAGE/2019-10-23-git-contribution/',
            //     }]
            // },
        ]
    },
    {
        text: '其他',
        items: [{
                text: '随笔',
                items: [{
                    text: '林俊杰',
                    link: '/PAGE/2019-10-14-note-01/',
                }]
            },
            {
                text: '开发管理',
                items: [{
                    text: 'Git',
                    link: '/PAGE/2019-10-23-git-contribution/',
                }]
            },
        ]
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