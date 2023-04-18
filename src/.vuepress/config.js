const { description } = require('../../package')
const path = require('path');

module.exports = {

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  
  locales: {
    '/en/': {
      lang: 'en-US',
      title: 'Nautes',
      description: 'Kubernetes-native all-in-one Internal Developer Platform',
    },
    '/': {
      lang: 'zh-CN',
      title: 'Nautes',
      description: 'Kubernets 原生的一站式开发者平台',
    },
  },

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    locales: {
      '/': {
        selectText: '选择语言',
        label: '中文',
        nav: [
          {
            text: '文档',
            link: '/guide/user-guide/introduction',
          },
          {
            text: 'API',
            link: '/api/',
          },
          {
            text: 'GitHub',
            link: 'https://github.com/nautes-labs/nautes',
          }
        ],
        sidebar: {
          '/guide/': [
            {
              title: '快速入门',
              collapsable: false,
              children: [
                '/guide/user-guide/introduction',
                '/guide/user-guide/installation',
                '/guide/user-guide/deploy-an-application',
                '/guide/user-guide/clean-environment'
              ],
            },
            {
              title: '用户指南',
              collapsable: false,
              children: [
                '/guide/user-guide/main-process',
                '/guide/user-guide/cluster',
                '/guide/user-guide/product',
                '/guide/user-guide/project',
                '/guide/user-guide/code-repo',
                '/guide/user-guide/environment',
                '/guide/user-guide/deployment-runtime',
                '/guide/user-guide/deployment-results'
              ],
            },
          ],
        },
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        nav: [
          {
            text: 'Document',
            link: '/en/guide/user-guide/introduction',
          },
          {
            text: 'API',
            link: '/en/api/',
          },
          {
            text: 'GitHub',
            link: 'https://github.com/nautes-labs/nautes',
          },
        ],
        sidebar: {
          '/en/guide/': [
            {
              title: 'Getting Started',
              collapsable: false,
              children: [
                '/en/guide/user-guide/introduction',
                '/en/guide/user-guide/installation',
                '/en/guide/user-guide/deploy-an-application',
                '/en/guide/user-guide/clean-environment'
              ],
            },
            {
              title: 'User Guide',
              collapsable: false,
              children: [
                '/en/guide/user-guide/main-process',
                '/en/guide/user-guide/cluster',
                '/en/guide/user-guide/product',
                '/en/guide/user-guide/project',
                '/en/guide/user-guide/code-repo',
                '/en/guide/user-guide/environment',
                '/en/guide/user-guide/deployment-runtime',
                '/en/guide/user-guide/deployment-results'
              ],
            },
          ],
        },
      },
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],
}
