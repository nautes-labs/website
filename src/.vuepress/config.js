const { description } = require('../../package')
const path = require('path');

module.exports = {
  
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Nautes',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

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

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: '/logo.png',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: '文档',
        link: '/guide/',
      },
      {
        text: 'API',
        link: '/api/',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/nautes-labs/nautes',
      },
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

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
