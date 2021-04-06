const sidebar = require('./sidebar');

module.exports = {
    base: '/',
    title: 'JasonXiao',
    description: 'Jason\'s blog',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    markdown: {
        lineNumbers: true
    },
    plugins: ['@vuepress-reco/vuepress-plugin-comments', '@vuepress/medium-zoom'],
    theme: 'reco',
    themeConfig: {
        mode: 'light',
        nav: [
            { text: '主页', link: '/', icon: 'reco-home' },
            { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' }
        ],
        sidebar,
        subSidebar: 'auto',
        type: 'blog',
        blogConfig: {
            category: {
                location: 2,
                text: '分类'
            },
            tag: {
                location: 3,
                text: '标签'
            }
        },
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: "Last Updated",
        vssueConfig: {
            platform: 'github',
            owner: 'dancingjasonxiao',
            repo: 'blog',
            clientId: 'e5804c8629e4cf634859',
            clientSecret: '7c9283b4127ae6816300d28911409a0c1295fc61'
        },
        repo: "https://github.com/dancingjasonxiao/blog",
        author: 'JasonXiao',
        authorAvatar: '/logo.png',
        logo: '/logo.png',
        startYear: '2021',
        friendLink: [
            {
                title: 'vuepress-theme-reco',
                desc: 'A simple and beautiful vuepress Blog & Doc theme.',
                avatar: 'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
                link: 'https://vuepress-theme-reco.recoluan.com'
            }
        ]
    }
}