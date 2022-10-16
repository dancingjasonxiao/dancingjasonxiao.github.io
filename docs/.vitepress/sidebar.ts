import { createSideBarConfig } from './util';
const PREFIX_PATH = '/docs';
const JS_PATH = '/js/';
const CSS_PATH = '/css/';
const FRAMEWORK_PATH = '/framework/';
const ENGINEERING_PATH = '/docs/engineering';
const PERFORMANCE_PATH = '/docs/performance';
const NETWORK_PATH = '/docs/network';
const SECURITY_PATH = '/docs/security';
const DESIGN_PATTERNS_PATH = '/docs/design_patterns';
const ALGORITHM_PATH = '/docs/algorithm';
const REVIEW_PATH = '/docs/review';
const INTERVIEW_PATH = '/docs/interview';
const OTHER_PATH = '/docs/other';


export default {
    [JS_PATH]: [
        createSideBarConfig({
            text: 'JS-基础',
            textList: ['数据类型', '继承', '执行上下文/作用域链/闭包'],
            prefixPath: PREFIX_PATH + JS_PATH + 'base/'
        }),
        createSideBarConfig({
            text: 'JS-深入数组',
            textList: ['数组原理', '数组排序', 'JS数组方法底层实现'],
            prefixPath: PREFIX_PATH + JS_PATH + 'array/'
        }),
        // createSideBarConfig('JS-异步编程', JS_PATH),
        // createSideBarConfig('JS-引擎原理', JS_PATH)
    ],
    [CSS_PATH]: [
        createSideBarConfig({
            text: 'CSS-基础',
            textList: ['01', '02'],
            prefixPath: PREFIX_PATH + CSS_PATH + 'base/'
        }),
        createSideBarConfig({
            text: 'CSS-动画原理',
            textList: ['01', '02'],
            prefixPath: PREFIX_PATH + CSS_PATH + 'animation/'
        }),
        // createSideBarConfig('CSS-预处理器', CSS_PATH + '/preprocessor'),
        // createSideBarConfig('CSS-工程化', CSS_PATH + '/engineering')
    ],
    [FRAMEWORK_PATH]: [
        createSideBarConfig({
            text: 'Vue',
            textList: ['01', '02'],
            prefixPath: PREFIX_PATH + FRAMEWORK_PATH + 'vue/'
        }),
        createSideBarConfig({
            text: 'React',
            textList: ['01', '02'],
            prefixPath: PREFIX_PATH + FRAMEWORK_PATH + 'react/'
        })
    ],
    // [ENGINEERING_PATH]: [
    //     createSideBarConfig('工程化', ENGINEERING_PATH)
    // ],
    // [PERFORMANCE_PATH]: [
    //     createSideBarConfig('性能优化-打包优化', PERFORMANCE_PATH + '/package'),
    //     createSideBarConfig('性能优化-网络优化', PERFORMANCE_PATH + '/network'),
    //     createSideBarConfig('性能优化-代码优化', PERFORMANCE_PATH + '/code')
    // ],
    // [NETWORK_PATH]: [
    //     createSideBarConfig('网络-DNS', NETWORK_PATH + '/dns'),
    //     createSideBarConfig('网络-HTTP', NETWORK_PATH + '/http'),
    //     createSideBarConfig('网络-TCP', NETWORK_PATH + '/tcp'),
    //     createSideBarConfig('网络-HTTPS', NETWORK_PATH + '/https'),
    //     createSideBarConfig('网络-CDN', NETWORK_PATH + '/cdn')
    // ],
    // [SECURITY_PATH]: [],
    // [DESIGN_PATTERNS_PATH]: [
    //     createSideBarConfig('设计模式-创建型', PERFORMANCE_PATH + '/package'),
    //     createSideBarConfig('设计模式-结构型', PERFORMANCE_PATH + '/network'),
    //     createSideBarConfig('设计模式-行为型', PERFORMANCE_PATH + '/code')
    // ],
    // [ALGORITHM_PATH]: [],
    // [REVIEW_PATH]: [
    //     createSideBarConfig('CSS 基础', REVIEW_PATH + '/css'),
    //     createSideBarConfig('JavaScript 基础', REVIEW_PATH + '/javascript'),
    //     createSideBarConfig('框架相关', REVIEW_PATH + '/framework'),
    //     createSideBarConfig('工程化', REVIEW_PATH + '/engineering'),
    //     createSideBarConfig('性能优化', REVIEW_PATH + '/performance'),
    //     createSideBarConfig('网络相关', REVIEW_PATH + '/network'),
    //     createSideBarConfig('安全', REVIEW_PATH + '/security')
    // ],
    // [INTERVIEW_PATH]: [
    //     createSideBarConfig('面试', INTERVIEW_PATH + '/skill'),
    //     createSideBarConfig('高频面试题', INTERVIEW_PATH + '/question')
    // ],
    // [OTHER_PATH]: [
    //     createSideBarConfig('开发工具', OTHER_PATH + '/tools'),
    //     createSideBarConfig('博客搭建', OTHER_PATH + '/blog')
    // ]
}