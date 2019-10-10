module.exports = {
    title: 'Alan Blog', // 页签标题 : A001_VuePress博客搭建的简单教程&问题分析 # | Wiki 1001
    description: 'Alan Blog', // meta 中的描述文字，意义不大，SEO用
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        // 增加一个自定义的 favicon(网页标签的图标)
        // 这里的 '/' 指向 docs/.vuepress/public 文件目录 
        // 即 docs/.vuepress/public/img/geass-bg.ico
        ['link', {
            rel: 'icon',
            href: '/img/test_ico.ico'
        }],
    ],
    base: '/Learn-React/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: true // 代码块显示行号
    },

    // 主题参数 顶部导航栏
    themeConfig: {
        displayAllHeaders: true,
        // sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: '最后更新', // 文档更新时间：每个文件git最后提交的时间,
        // 顶部导航栏
        nav: [{
                text: '前端算法',
                link: '/algorithm/'
            }, // 内部链接 以docs为根目录
            {
                text: '博客',
                link: 'http://obkoro1.com/'
            }, // 外部链接
            // 下拉列表
            {
                text: 'GitHub',
                items: [{
                        text: 'GitHub地址',
                        link: 'https://github.com/OBKoro1'
                    },
                    {
                        text: '算法仓库',
                        link: 'https://github.com/OBKoro1/Brush_algorithm'
                    }
                ]
            }
        ],
    },

    // 侧边栏菜单( 一个模块对应一个菜单形式 )
    sidebar: {
        // 打开FAQ主页链接时生成下面这个菜单
        // docs文件夹下面的accumulate文件夹 文档中md文件 书写的位置(命名随意)
        '/accumulate/': [
            '/accumulate/', // accumulate文件夹的README.md 不是下拉框形式
            {
                title: '侧边栏下拉框的标题1',
                children: [
                    '/accumulate/JS/test', // 以docs为根目录来查找文件 
                    // 上面地址查找的是：docs>accumulate>JS>test.md 文件
                    // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
                ]
            }
        ],
        // docs文件夹下面的algorithm文件夹 这是第二组侧边栏 跟第一组侧边栏没关系
        '/algorithm/': [
            '/algorithm/',
            {
                title: '第二组侧边栏下拉框的标题1',
                children: [
                    '/algorithm/simple/test'
                ]
            }
        ]
    },
}