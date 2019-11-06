const sidebar = require('./config/sidebar');
const nav = require('./config/nav');
const routeConfig = require('./plugins/routeConfig');

module.exports = {
  title: "不是博客",
  description: "不是博客",
  head: [
    // 这里的 '/' 指向 docs/.vuepress/public 文件目录 
    ['link', {
      rel: 'icon',
      href: '/img/witch.ico'
    }]
  ],
  base: '/blog/', // 部署到github会用到的配置
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  // 顶部导航栏
  themeConfig: {
    displayAllHeaders: true, //展开侧边栏所有的小标题
    sidebarDepth: 1, //提取markdown中h2标题，作为小标题显示在侧边栏上。
    lastUpdated: '最后更新', // 文档更新时间：每个文件git最后提交的时间,
    nav, //导航
    sidebar, //侧边栏
  },
  plugins: [
    routeConfig,
    [
      'vuepress-plugin-helper-live2d', {
        live2d: {
          // 是否启用(关闭请设置为false)(default: true)
          enable: true,
          // 模型名称(default: hibiki)>>>取值请参考：
          // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
          model: 'hibiki',
          display: {
            position: "right", // 显示位置：left/right(default: 'right')
            width: 135, // 模型的长度(default: 135)
            height: 300, // 模型的高度(default: 300)
            hOffset: 65, //  水平偏移(default: 65)
            vOffset: 0, //  垂直偏移(default: 0)
          },
          mobile: {
            show: false // 是否在移动设备上显示(default: false)
          },
          react: {
            opacity: 0.8 // 模型透明度(default: 0.8)
          }
        }
      }
    ]
  ],
}