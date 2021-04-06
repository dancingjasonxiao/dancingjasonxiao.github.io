const { createSideBarConfig } = require('./util');
const JAVASCRIPT_PATH = '/docs/javascript';
const CSS_PATH = '/docs/css';
const NET_PATH = '/docs/net';
const PERFORMANCE_PATH = '/docs/performance';
const INTERVIEW_PATH = '/docs/interview';
const BROWSER_PATH = '/docs/browser';

module.exports = {
    [JAVASCRIPT_PATH]: [
        createSideBarConfig('JS 基础', JAVASCRIPT_PATH + '/js-base')
        // createSideBarConfig('JS-深入数组', JAVASCRIPT_PATH + '/js-array'),
        // createSideBarConfig('JS-其它API原理', JAVASCRIPT_PATH + '/js-api'),
        // createSideBarConfig('JS-V8引擎原理', JAVASCRIPT_PATH + '/js-v8'),
        // createSideBarConfig('JS-异步I/O及异步编程', JAVASCRIPT_PATH + '/js-async'),
    ],
    [CSS_PATH]: [
        createSideBarConfig('CSS 基础', CSS_PATH)
    ],
    [NET_PATH]: [
        // createSideBarConfig("TCP 协议", NET_PATH + '/tcp'),
        // createSideBarConfig("HTTP 协议", NET_PATH + '/http')
    ],
    [PERFORMANCE_PATH]: [
        // createSideBarConfig('前端性能优化', PERFORMANCE_PATH)
    ],
    [INTERVIEW_PATH]: [
        // createSideBarConfig('面试经历', INTERVIEW_PATH)
    ],
    [BROWSER_PATH]: [
        // createSideBarConfig('浏览器渲染', BROWSER_PATH + '/browser-render'),
        // createSideBarConfig('浏览器安全', BROWSER_PATH + '/browser-security')
    ]
}