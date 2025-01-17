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
    // domains: ['img.aozaki.cc'],
    unoptimized: true,
    minimumCacheTTL: 604800,
  },

  // Ignore Lint during Build
  eslint: {
    ignoreDuringBuilds: true,
  },

  experimental: {
    // webpackBuildWorker: true,
  },

  ...(process.env.CF_PAGES === 'true'
    ? /*
       * If true = Cloudflare Pages
       */
      {
        /*
         * bun run pre-build && bunx @cloudflare/next-on-pages
         * Change output dir: .vercel/output/static
         * Add compatibility flag: nodejs_compat
         * Then you can disable output: 'export'
         */
        output: 'export', // Use static output for Cloudflare Pages
      }
    : /*
       * If false = Not Cloudflare Pages
       */
      {
        // Add headers when NOT on Cloudflare Pages
        async headers() {
          return [
            {
              source: '/(.*)',
              headers: [...securityHeaders],
            },
          ]
        },
        // Fix Routing by Redirecting
        async redirects() {
          return [
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
        // Plausible Analytics
        async rewrites() {
          return [
            {
              source: '/sight/app.js',
              destination: 'https://sight.aozaki.cc/app.js',
            },
            {
              source: '/sight/event',
              destination: 'https://sight.aozaki.cc/api/event',
            },
          ]
        },
      }),
})
