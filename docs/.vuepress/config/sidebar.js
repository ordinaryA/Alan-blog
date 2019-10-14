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
}, {
    title: "ES6",
    collapsable: false,
    children: [
        ['02.ES6/01.ES6.md', 'ES6'],
    ]
}];


module.exports = {
    "/大前端/": 大前端,
}