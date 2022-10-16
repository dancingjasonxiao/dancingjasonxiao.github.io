import { defineConfig } from 'vitepress';
import sidebar from './sidebar';

export default defineConfig({
    title: 'JasonXiao',
    description: 'Jason\'s blog',
    base: '/',
    head: [
        // ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        // ['link', { rel: 'manifest', href: '/manifest.json' }],
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
    ignoreDeadLinks: true,
    lastUpdated: true,
    markdown: {
        theme: 'material-palenight',
        lineNumbers: true
    },
    themeConfig: {
        logo: {
            light: {
                src: '',
                alt: 'logo'
            },
            dark: {
                src: '',
                alt: 'logo'
            }
        },
        nav: [
            { text: 'css', link: '/css/', activeMatch: '/css/' },
            { text: 'js', link: '/js/', activeMatch: '/js/' },
            { text: 'framework', link: '/framework/', activeMatch: '/framework/' }
        ],
        sidebar
    }
})