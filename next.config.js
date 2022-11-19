/** @type {import('next').NextConfig} */
const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.js',
  unstable_staticImage: true,
  images: {
    domains: ['img.aozaki.cc'],
  },
})

module.exports = withNextra({
  i18n: {
    locales: ['zh'],
    defaultLocale: 'zh',
  },
  async redirects() {
    return [
      {
        source: '/posts/kanaut-nishe-goods-1',
        destination: '/posts/kanaut-nishe-merch',
        permanent: true,
      },
    ]
  },
})
