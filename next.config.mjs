/** @type {import('next').NextConfig} */
import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.tsx',
  staticImage: true,
})

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]

export default withNextra({
  reactStrictMode: true,
  cleanDistDir: true,

  // Image Loaders
  images: {
    domains: ['img.aozaki.cc'],
    unoptimized: true,
  },

  // Ignore Lint during Build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Security Headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },

  // Fix Routing by Redirecting
  async redirects() {
    return [
      {
        source: '/posts/kanaut-nishe-goods-1',
        destination: '/posts/kanaut-nishe-merch',
        permanent: true,
      },
      {
        source: '/blog/:slug*',
        destination: '/posts/:slug*',
        permanent: true,
      },
      {
        source: '/portfoilo/:slug*',
        destination: '/photography/:slug*',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
      {
        source: '/desk-new-layout',
        destination: '/posts/new-desktop-layout',
        permanent: true,
      },
      {
        source: '/bladerunner-revisit',
        destination: '/posts/bladerunner-revisit',
        permanent: true,
      },
    ]
  },
})
