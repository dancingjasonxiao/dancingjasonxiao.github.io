const { createSideBarConfig } = require('./util');
const JAVASCRIPT_PATH = '/docs/javascript';
const CSS_PATH = '/docs/css';
const FRAMEWORK_PATH = '/docs/framework';
const ENGINEERING_PATH = '/docs/engineering';
const PERFORMANCE_PATH = '/docs/performance';
const NETWORK_PATH = '/docs/network';
const SECURITY_PATH = '/docs/security';
const DESIGN_PATTERNS_PATH = '/docs/design_patterns';
const ALGORITHM_PATH = '/docs/algorithm';
const REVIEW_PATH = '/docs/review';
const INTERVIEW_PATH = '/docs/interview';
const OTHER_PATH = '/docs/other';

module.exports = {
    [JAVASCRIPT_PATH]: [
        createSideBarConfig('JS-基础', JAVASCRIPT_PATH + '/base'),
        createSideBarConfig('JS-深入数组', JAVASCRIPT_PATH + '/array'),
        createSideBarConfig('JS-异步编程', JAVASCRIPT_PATH + '/async'),
        createSideBarConfig('JS-引擎原理', JAVASCRIPT_PATH + '/engine')
    ],
    [CSS_PATH]: [
        createSideBarConfig('CSS-基础', CSS_PATH + '/base'),
        createSideBarConfig('CSS-动画原理', CSS_PATH + '/animation'),
        createSideBarConfig('CSS-预处理器', CSS_PATH + '/preprocessor'),
        createSideBarConfig('CSS-工程化', CSS_PATH + '/engineering')
    ],
    [FRAMEWORK_PATH]: [
        createSideBarConfig("框架-Vue", FRAMEWORK_PATH + '/vue'),
        createSideBarConfig("框架-React", FRAMEWORK_PATH + '/react')
    ],
    [ENGINEERING_PATH]: [
        createSideBarConfig('工程化', ENGINEERING_PATH)
    ],
    [PERFORMANCE_PATH]: [
        createSideBarConfig('性能优化-打包优化', PERFORMANCE_PATH + '/package'),
        createSideBarConfig('性能优化-网络优化', PERFORMANCE_PATH + '/network'),
        createSideBarConfig('性能优化-代码优化', PERFORMANCE_PATH + '/code')
    ],
    [NETWORK_PATH]: [
        createSideBarConfig('网络-DNS', NETWORK_PATH + '/dns'),
        createSideBarConfig('网络-HTTP', NETWORK_PATH + '/http'),
        createSideBarConfig('网络-TCP', NETWORK_PATH + '/tcp'),
        createSideBarConfig('网络-HTTPS', NETWORK_PATH + '/https'),
        createSideBarConfig('网络-CDN', NETWORK_PATH + '/cdn')
    ],
    [SECURITY_PATH]: [],
    [DESIGN_PATTERNS_PATH]: [
        createSideBarConfig('设计模式-创建型', PERFORMANCE_PATH + '/package'),
        createSideBarConfig('设计模式-结构型', PERFORMANCE_PATH + '/network'),
        createSideBarConfig('设计模式-行为型', PERFORMANCE_PATH + '/code')
    ],
    [ALGORITHM_PATH]: [],
    [REVIEW_PATH]: [
        createSideBarConfig('CSS 基础', REVIEW_PATH + '/css'),
        createSideBarConfig('JavaScript 基础', REVIEW_PATH + '/javascript'),
        createSideBarConfig('框架相关', REVIEW_PATH + '/framework'),
        createSideBarConfig('工程化', REVIEW_PATH + '/engineering'),
        createSideBarConfig('性能优化', REVIEW_PATH + '/performance'),
        createSideBarConfig('网络相关', REVIEW_PATH + '/network'),
        createSideBarConfig('安全', REVIEW_PATH + '/security')
    ],
    [INTERVIEW_PATH]: [
        createSideBarConfig('面试', INTERVIEW_PATH + '/skill'),
        createSideBarConfig('高频面试题', INTERVIEW_PATH + '/question')
    ],
    [OTHER_PATH]: [
        createSideBarConfig('开发工具', OTHER_PATH + '/tools'),
        createSideBarConfig('博客搭建', OTHER_PATH + '/blog')
    ]
}