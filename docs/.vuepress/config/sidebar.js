// const 代码之外的生存指南 = [
//     '',
//     ['软技能-代码之外的生存指南1（职业篇）.md', '代码之外的生存指南1（职业篇）'],
// ];

// const NodeJS = [{
//     "title": "命令行交互",
//     "collapsable": false,
//     "children": [
//         ["01.命令行交互/01.玩转Nodejs命令行.md", "玩转Nodejs命令行"]
//     ]
// }];

const 大前端 = [{
        title: "JavaScript",
        collapsable: false,
        children: [
            ['01.Javascript/01.正则表达式.md', '正则表达式'],
        ]
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
}, ]


module.exports = {
    '/大前端/': 大前端,
    '/随笔/': 随笔,
}