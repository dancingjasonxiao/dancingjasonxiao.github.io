const sidebar = require('./sidebar');

module.exports = {
    base: '/',
    title: 'JasonXiao',
    description: 'Jason\'s blog',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }],
        ['link', { rel: 'apple-touch-icon', href: '/logo.png' }],
        ['link', { rel: 'mask-icon', href: '/logo.png', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/logo.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
        ['script', {}, `
            var _hmt = _hmt || [];
            (function() {
            // 引入谷歌,不需要可删除这段
            var hm = document.createElement("script");
            hm.src = "https://www.googletagmanager.com/gtag/js?id=G-NKDP0YRMH6";
            var s1 = document.getElementsByTagName("script")[0]; 
            s1.parentNode.insertBefore(hm, s1);
            })();

            // 谷歌加载,不需要可删除
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-NKDP0YRMH6');`
        ]
    ],
    markdown: {
        lineNumbers: true
    },
    plugins: [
        '@vuepress-reco/vuepress-plugin-comments',
        '@vuepress/medium-zoom',
        ['@vuepress/google-analytics', { 'ga': 'G-NKDP0YRMH6' }],
        ['@vuepress/pwa', {
                'serviceWorker': true,
                'updatePopup': {
                    message: '发现新内容可用',
                    buttonText: '刷新'
                }
            }
        ]
    ],
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
        /* 如果登录不了GitHub，先打开https://cors-anywhere.herokuapp.com/corsdemo获取临时访问权限（弃坑）
         * TODO https://vssue.js.org/zh/options/#proxy后续配置新的代理
         * 因cors-anywhere无法代理，暂时没有找到合适的代理工具，弃用vssue。
        */
        // vssueConfig: {
        //     platform: 'github',
        //     owner: 'dancingjasonxiao',
        //     admins: ['dancingjasonxiao'],
        //     repo: 'dancingjasonxiao.github.io',
        //     clientId: 'e5804c8629e4cf634859',
        //     clientSecret: '7c9283b4127ae6816300d28911409a0c1295fc61',
        //     autoCreateIssue: true
        // },
        // 前往https://console.leancloud.cn/配置
        valineConfig: {
            appId: 'rb1CptvovedrxYoLUO45XKXM-gzGzoHsz',
            appKey: 'LdTWr2Rzd8dm7FIkqy7Y9f7L',
            visitor: true
        },
        repo: "https://github.com/dancingjasonxiao",
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