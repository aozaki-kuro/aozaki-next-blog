/** @type {import('next').NextConfig} */
import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.jsx',
  unstable_staticImage: true
})

export default withNextra({
  i18n: {
    locales: ['zh'],
    defaultLocale: 'zh'
  },
  images: {
    domains: ['img.aozaki.cc']
  },
  async redirects() {
    return [
      {
        source: '/posts/kanaut-nishe-goods-1',
        destination: '/posts/kanaut-nishe-merch',
        permanent: true
      },
      {
        source: '/blog/:slug*',
        destination: '/posts/:slug*',
        permanent: true
      },
      {
        source: '/portfoilo/:slug*',
        destination: '/portrait/:slug*',
        permanent: true
      },
      {
        source: '/about',
        destination: '/',
        permanent: true
      }
    ]
  }
})
