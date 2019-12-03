const comment = [
    'vuepress-plugin-comment',
    {
        choosen: 'gitalk',
        options: {
            clientID: '5dd39f85e86ae8e82929',
            clientSecret: '403c1b0eef69f013c04f3846d813e8456afe872d',
            repo: 'Alan-blog',
            owner: 'ordinaryA',
            admin: ['ordinaryA'],
            id: '<%- frontmatter.commentid || frontmatter.permalink %>',      // Ensure uniqueness and length less than 50
            distractionFreeMode: false,  // Facebook-like distraction free mode
            labels: ['Gitalk', 'Comment'],
            title: '「评论」<%- frontmatter.title %>',
            body: '<%- frontmatter.title %>：<%- window.location.origin %><%- window.location.pathname %>'
            // frontmatter.to.path
        }
    }
];

module.exports = comment;