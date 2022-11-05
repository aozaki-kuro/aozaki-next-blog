const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.js',
  unstable_staticImage: true,
  images: {
    domains: ['img.aozaki.cc'],
  },
})

module.exports = withNextra({})
