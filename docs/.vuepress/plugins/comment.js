const comment = [
    'vuepress-plugin-comment',
    {
        choosen: 'gitalk',
        options: {
            clientID: '6558fdf298fa596c5d8c',
            clientSecret: process.env.clientSecret || '',
            repo: 'blog',
            owner: 'dongyuanxin',
            admin: ['dongyuanxin'],
            id: '<%- frontmatter.commentid || frontmatter.permalink %>',      // Ensure uniqueness and length less than 50
            distractionFreeMode: false,  // Facebook-like distraction free mode
            labels: ['Gitalk', 'Comment'],
            title: '「评论」<%- frontmatter.title %>',
            body: '<%- frontmatter.title %>：<%- window.location.origin %><%- frontmatter.to.path || window.location.pathname %>'
        }
    }
];

module.exports = comment;