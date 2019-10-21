const 大前端 = [{
        title: "JavaScript",
        collapsable: false,
        children: [
            ['01.Javascript/01.函数式编程.md', '函数式编程'],
            ['01.Javascript/02.正则表达式.md', '正则表达式'],
        ],
    },
    {
        title: "ES6",
        collapsable: false,
        children: [
            ['02.ES6/01.ES6.md', 'ES6'],
        ],
    },
    {
        title: "Vue",
        collapsable: false,
        children: [
            ['03.Vue/01.混入.md', '混入函数'],
        ],
    },
    {
        title: "React",
        collapsable: false,
        children: [
            ['04.React/01.React小技巧.md', 'React小技巧'],
        ],
    },
];

const 随笔 = [{
    title: "林俊杰",
    collapsable: false,
    children: [
        ['01.将故事写成我们.md', '将故事写成我们'],
    ],
}];

const 尝试 = [{
        title: "神奇的Vue",
        collapsable: false,
        children: [
            ['01.游戏.md', '小游戏'],
            ['02.聊天室.md', '聊天室'],
        ],
    },
]


module.exports = {
    '/大前端/': 大前端,
    '/随笔/': 随笔,
    '/尝试/': 尝试,
}