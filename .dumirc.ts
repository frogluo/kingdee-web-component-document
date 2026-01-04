import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    logo: '/logo.png',
    rtl: true,
    name: 'kwc',
    nav: {
      'zh-CN': [
        { title: '组件', link: '/components' },
        { title: '最佳实践', link: '/bestPractices' },
        { title: '开发指南', link: '/development-guide' },
        { title: '快速上手', link: '/getting-started'}
      ],
      'en-US': [
        { title: 'Guide', link: '/en-US/guide' },
        { title: 'Components', link: '/en-US/components' },
        { title: 'BestPractices', link: '/bestPractices' },
      ],
    },
  },
  // 开启 i18n
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'English' },
  ],
  links: [
    {
      rel: 'icon',
      href: '/favicon.ico',
      type: 'image/x-icon',
    },
  ],
  base: process.env.NODE_ENV === 'production' ? '/kwc/' : '/',
  publicPath: process.env.NODE_ENV === 'production' ? '/kwc/' : '/',
});
