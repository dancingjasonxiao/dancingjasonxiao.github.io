/**
 * Generated by "@vuepress/internal-site-data"
 */
export const siteData = {
  "title": "JasonXiao",
  "description": "Jason's blog",
  "base": "/",
  "headTags": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    [
      "script",
      {},
      "\n            var _hmt = _hmt || [];\n            (function() {\n            // 引入谷歌,不需要可删除这段\n            var hm = document.createElement(\"script\");\n            hm.src = \"https://www.googletagmanager.com/gtag/js?id=G-NKDP0YRMH6\";\n            var s1 = document.getElementsByTagName(\"script\")[0]; \n            s1.parentNode.insertBefore(hm, s1);\n            })();\n\n            // 谷歌加载,不需要可删除\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n\n            gtag('config', 'G-NKDP0YRMH6');"
    ]
  ],
  "pages": [
    {
      "title": "Home",
      "frontmatter": {
        "home": true,
        "heroText": "JasonXiao",
        "tagline": "认真写点东西",
        "bgImageStyle": {
          "height": "450px"
        }
      },
      "regularPath": "/",
      "relativePath": "README.md",
      "key": "v-500534d3",
      "path": "/",
      "lastUpdated": "4/6/2021, 11:47:31 AM"
    },
    {
      "title": "position",
      "frontmatter": {
        "title": "position",
        "date": "2021-02-13T00:00:00.000Z",
        "categories": [
          "CSS"
        ],
        "tags": [
          "CSS"
        ]
      },
      "regularPath": "/docs/css/02.html",
      "relativePath": "docs/css/02.md",
      "key": "v-72ecb542",
      "path": "/docs/css/02.html",
      "lastUpdated": "4/6/2021, 11:47:31 AM"
    },
    {
      "title": "数据类型",
      "frontmatter": {
        "title": "数据类型",
        "date": "2021-03-31T00:00:00.000Z",
        "categories": [
          "JavaScript"
        ],
        "tags": [
          "JavaScript"
        ]
      },
      "regularPath": "/docs/javascript/js-base/01.html",
      "relativePath": "docs/javascript/js-base/01.md",
      "key": "v-02a0af95",
      "path": "/docs/javascript/js-base/01.html",
      "lastUpdated": "4/6/2021, 11:47:31 AM"
    },
    {
      "title": "权重/优先级",
      "frontmatter": {
        "title": "权重/优先级",
        "date": "2021-02-10T00:00:00.000Z",
        "sidebar": "auto",
        "categories": [
          "CSS"
        ],
        "tags": [
          "CSS"
        ]
      },
      "regularPath": "/docs/css/01.html",
      "relativePath": "docs/css/01.md",
      "key": "v-649ee722",
      "path": "/docs/css/01.html",
      "lastUpdated": "4/6/2021, 11:47:31 AM"
    },
    {
      "title": "执行上下文/作用域链/闭包",
      "frontmatter": {
        "title": "执行上下文/作用域链/闭包",
        "date": "2021-04-01T00:00:00.000Z",
        "categories": [
          "JavaScript"
        ],
        "tags": [
          "JavaScript"
        ]
      },
      "regularPath": "/docs/javascript/js-base/02.html",
      "relativePath": "docs/javascript/js-base/02.md",
      "key": "v-7894c093",
      "path": "/docs/javascript/js-base/02.html",
      "lastUpdated": "4/6/2021, 11:47:31 AM"
    },
    {
      "frontmatter": {
        "layout": "Tags",
        "title": "Tags"
      },
      "regularPath": "/tag/",
      "key": "v-b1564aac",
      "path": "/tag/"
    },
    {
      "frontmatter": {
        "layout": "FrontmatterKey",
        "title": "Categories"
      },
      "regularPath": "/categories/",
      "key": "v-ef9325c4",
      "path": "/categories/"
    },
    {
      "frontmatter": {
        "layout": "TimeLines",
        "title": "Timeline"
      },
      "regularPath": "/timeline/",
      "key": "v-6319eb4e",
      "path": "/timeline/"
    },
    {
      "frontmatter": {
        "layout": "Tag",
        "title": "CSS Tags"
      },
      "regularPath": "/tag/CSS/",
      "key": "v-3259a754",
      "path": "/tag/CSS/"
    },
    {
      "frontmatter": {
        "layout": "Tag",
        "title": "JavaScript Tags"
      },
      "regularPath": "/tag/JavaScript/",
      "key": "v-7a5f6990",
      "path": "/tag/JavaScript/"
    },
    {
      "frontmatter": {
        "layout": "Category",
        "title": "CSS Categories"
      },
      "regularPath": "/categories/CSS/",
      "key": "v-7efe64ca",
      "path": "/categories/CSS/"
    },
    {
      "frontmatter": {
        "layout": "Category",
        "title": "JavaScript Categories"
      },
      "regularPath": "/categories/JavaScript/",
      "key": "v-081e6844",
      "path": "/categories/JavaScript/"
    }
  ],
  "themeConfig": {
    "mode": "light",
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      }
    ],
    "sidebar": {
      "/docs/javascript": [
        {
          "title": "JS 基础",
          "collapsable": true,
          "children": [
            "/docs/javascript/js-base/01",
            "/docs/javascript/js-base/02"
          ]
        }
      ],
      "/docs/css": [
        {
          "title": "CSS 基础",
          "collapsable": true,
          "children": [
            "/docs/css/01",
            "/docs/css/02"
          ]
        }
      ],
      "/docs/net": [],
      "/docs/performance": [],
      "/docs/interview": [],
      "/docs/browser": []
    },
    "subSidebar": "auto",
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "vssueConfig": {
      "platform": "github",
      "owner": "dancingjasonxiao",
      "admins": [
        "dancingjasonxiao"
      ],
      "repo": "dancingjasonxiao.github.io",
      "clientId": "e5804c8629e4cf634859",
      "clientSecret": "7c9283b4127ae6816300d28911409a0c1295fc61",
      "autoCreateIssue": true
    },
    "repo": "https://github.com/dancingjasonxiao",
    "author": "JasonXiao",
    "authorAvatar": "/logo.png",
    "logo": "/logo.png",
    "startYear": "2021",
    "friendLink": [
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ]
  }
}