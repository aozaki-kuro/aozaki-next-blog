/** @type {import('next').NextConfig} */
import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.tsx',
  unstable_staticImage: true
})

export default withNextra({
  reactStrictMode: true,
  i18n: {
    locales: ['zh-CN'],
    defaultLocale: 'zh-CN'
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
      },
      {
        source: '/desk-new-layout',
        destination: '/posts/new-desktop-layout',
        permanent: true
      },
      {
        source: '/bladerunner-revisit',
        destination: '/posts/bladerunner-revisit',
        permanent: true
      }
    ]
  }
})
