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
        ['02.将故事写成我们.md', '将故事写成我们'],
    ],
}];

const 练习 = [{
        title: "小游戏",
        collapsable: false,
        children: [
            ['01.前言.md', '前言'],
            ['02.扫雷.md', '扫雷'],
            ['03.管道小鸟.md', '管道小鸟'],
            ['04.贪吃蛇.md', '贪吃蛇'],
        ],
    },
    {
        title: "聊天室",
        collapsable: false,
        children: [
            ['05.聊天室.md', '聊天室'],
        ],
    },
];

const 摸鱼 = [{
    title: "上班摸鱼",
    collapsable: false,
    children: [
        ['01.上班摸鱼/01.摸鱼，是员工给公司的福报.md', '摸鱼，是员工给公司的福报'],
    ],
}, ];


module.exports = {
    '/大前端/': 大前端,
    '/随笔/': 随笔,
    '/练习/': 练习,
    '/摸鱼/': 摸鱼,
}