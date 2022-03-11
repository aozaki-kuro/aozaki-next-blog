if (!self.define) {
  let e,
    i = {}
  const a = (a, t) => (
    (a = new URL(a + '.js', t).href),
    i[a] ||
      new Promise((i) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = a), (e.onload = i), document.head.appendChild(e)
        } else (e = a), importScripts(a), i()
      }).then(() => {
        let e = i[a]
        if (!e) throw new Error(`Module ${a} didn’t register its module`)
        return e
      })
  )
  self.define = (t, s) => {
    const n = e || ('document' in self ? document.currentScript.src : '') || location.href
    if (i[n]) return
    let r = {}
    const c = (e) => a(e, n),
      f = { module: { uri: n }, exports: r, require: c }
    i[n] = Promise.all(t.map((e) => f[e] || c(e))).then((e) => (s(...e), r))
  }
}
define(['./workbox-304b7ce9'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/BX614Jkj2AMxzA9IyR261/_buildManifest.js',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/BX614Jkj2AMxzA9IyR261/_middlewareManifest.js',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/BX614Jkj2AMxzA9IyR261/_ssgManifest.js',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        { url: '/_next/static/chunks/164.ad96c3a07b238fa8.js', revision: 'BX614Jkj2AMxzA9IyR261' },
        { url: '/_next/static/chunks/207-09cd4deddfaf7896.js', revision: 'BX614Jkj2AMxzA9IyR261' },
        { url: '/_next/static/chunks/324-e9c7b339018841c4.js', revision: 'BX614Jkj2AMxzA9IyR261' },
        { url: '/_next/static/chunks/383.ac50753f2b4524fc.js', revision: 'BX614Jkj2AMxzA9IyR261' },
        { url: '/_next/static/chunks/473.096ff66d9423174b.js', revision: 'BX614Jkj2AMxzA9IyR261' },
        { url: '/_next/static/chunks/550.4eeba1e3c3bda653.js', revision: 'BX614Jkj2AMxzA9IyR261' },
        {
          url: '/_next/static/chunks/a65dbed8-d4d219b175db2af6.js',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/chunks/framework-fc10370853c19ed3.js',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        { url: '/_next/static/chunks/main-d155bfdd9725ac18.js', revision: 'BX614Jkj2AMxzA9IyR261' },
        {
          url: '/_next/static/chunks/pages/404-2237d43120dbb22b.js',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/chunks/pages/_app-2465b3201f23e0c9.js',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/chunks/pages/_error-1a6c834af11f22d5.js',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/chunks/pages/about-aa689be53c1668c9.js',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/chunks/pages/blog-dc370bb1eae833b3.js',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/chunks/pages/blog/%5B...slug%5D-7994f7da973918dd.js',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/chunks/pages/blog/page/%5Bpage%5D-dccff12acba0d803.js',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/chunks/pages/index-bc0c86e1d2a25d9e.js',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/chunks/pages/portfolio-554e36ae16704919.js',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/chunks/pages/tags-387a9d3a453edde8.js',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/chunks/pages/tags/%5Btag%5D-ddaca68f2c3208c2.js',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/chunks/polyfills-5cd94c89d3acac5f.js',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/chunks/webpack-02caf59be3964a9b.js',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        { url: '/_next/static/css/874f532132af5442.css', revision: 'BX614Jkj2AMxzA9IyR261' },
        {
          url: '/_next/static/media/KaTeX_AMS-Regular.1608a09b.woff',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_AMS-Regular.4aafdb68.ttf',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_AMS-Regular.a79f1c31.woff2',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Caligraphic-Bold.b6770918.woff',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Caligraphic-Bold.cce5b8ec.ttf',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Caligraphic-Bold.ec17d132.woff2',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Caligraphic-Regular.07ef19e7.ttf',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Caligraphic-Regular.55fac258.woff2',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Caligraphic-Regular.dad44a7f.woff',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Fraktur-Bold.9f256b85.woff',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Fraktur-Bold.b18f59e1.ttf',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Fraktur-Bold.d42a5579.woff2',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Fraktur-Regular.7c187121.woff',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Fraktur-Regular.d3c882a6.woff2',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Fraktur-Regular.ed38e79f.ttf',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Main-Bold.b74a1a8b.ttf',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Main-Bold.c3fb5ac2.woff2',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Main-Bold.d181c465.woff',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Main-BoldItalic.6f2bb1df.woff2',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Main-BoldItalic.70d8b0a5.ttf',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Main-BoldItalic.e3f82f9d.woff',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Main-Italic.47373d1e.ttf',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Main-Italic.8916142b.woff2',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Main-Italic.9024d815.woff',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Main-Regular.0462f03b.woff2',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Main-Regular.7f51fe03.woff',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Main-Regular.b7f8fe9b.ttf',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Math-BoldItalic.572d331f.woff2',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Math-BoldItalic.a879cf83.ttf',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Math-BoldItalic.f1035d8d.woff',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Math-Italic.5295ba48.woff',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Math-Italic.939bc644.ttf',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Math-Italic.f28c23ac.woff2',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_SansSerif-Bold.8c5b5494.woff2',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_SansSerif-Bold.94e1e8dc.ttf',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_SansSerif-Bold.bf59d231.woff',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_SansSerif-Italic.3b1e59b3.woff2',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_SansSerif-Italic.7c9bc82b.woff',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_SansSerif-Italic.b4c20c84.ttf',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_SansSerif-Regular.74048478.woff',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_SansSerif-Regular.ba21ed5f.woff2',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_SansSerif-Regular.d4d7ba48.ttf',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Script-Regular.03e9641d.woff2',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Script-Regular.07505710.woff',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Script-Regular.fe9cbbe1.ttf',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Size1-Regular.e1e279cb.woff',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Size1-Regular.eae34984.woff2',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Size1-Regular.fabc004a.ttf',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Size2-Regular.57727022.woff',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Size2-Regular.5916a24f.woff2',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Size2-Regular.d6b476ec.ttf',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Size3-Regular.9acaf01c.woff',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Size3-Regular.a144ef58.ttf',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Size3-Regular.b4230e7e.woff2',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Size4-Regular.10d95fd3.woff2',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Size4-Regular.7a996c9d.woff',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Size4-Regular.fbccdabe.ttf',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Typewriter-Regular.6258592b.woff',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Typewriter-Regular.a8709e36.woff2',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/KaTeX_Typewriter-Regular.d97aaf4a.ttf',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/inter-cyrillic-ext-variable-full-normal.9104569a.woff2',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/inter-cyrillic-variable-full-normal.e438c237.woff2',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/inter-greek-ext-variable-full-normal.17b3895d.woff2',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/inter-greek-variable-full-normal.26749be8.woff2',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/inter-latin-ext-variable-full-normal.099eb166.woff2',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/inter-latin-variable-full-normal.79d31200.woff2',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        {
          url: '/_next/static/media/inter-vietnamese-variable-full-normal.1c1580d2.woff2',
          revision: 'BX614Jkj2AMxzA9IyR261',
        },
        { url: '/feed.xml', revision: '17e25148752403e92feb2042b69ec8fc' },
        { url: '/sitemap.xml', revision: 'c4835b93692bc817b2501920b9651d66' },
        {
          url: '/static/favicons/android-chrome-192x192.png',
          revision: '1b48099fb20608142261ae83d29902ce',
        },
        {
          url: '/static/favicons/android-chrome-512x512.png',
          revision: '9bc3b62b0e622ec47ac07e6e02b3a9e9',
        },
        {
          url: '/static/favicons/apple-touch-icon.png',
          revision: '7cbeb0fb9457c7b49ece098ff53b1921',
        },
        { url: '/static/favicons/favicon-16x16.png', revision: '188959ca230f67b00b9cd46bae708020' },
        { url: '/static/favicons/favicon-32x32.png', revision: 'f4c1ab98efcacc04554faaf8f343a6a0' },
        { url: '/static/favicons/favicon.ico', revision: '69726115d48610f95065e992649c5be0' },
        {
          url: '/static/favicons/mstile-150x150.png',
          revision: '7079fd76dc302cb47de4c6ca7f221c99',
        },
        {
          url: '/static/favicons/safari-pinned-tab.svg',
          revision: '71c87eb853808e8f99007ecb51aa7dbd',
        },
        { url: '/static/favicons/site.webmanifest', revision: '529fed13c40820fcdfefd3752662a19f' },
        { url: '/static/featured/20220228_0001.jpg', revision: '53db1e141bb6a483549d5a60ebac2b16' },
        { url: '/static/featured/20220305_0034.jpg', revision: 'f5bdc840de476cbfda87e93fc636369d' },
        { url: '/static/images/avatar.jpg', revision: '7c067c0f8a8be6b22fea31c42f1d702b' },
        {
          url: '/static/images/featured_commission.jpg',
          revision: '858d23e9f408a852975e587549afffc0',
        },
        { url: '/static/images/logo.png', revision: 'dd7b352e3be1b8db89e4e33bf46e595a' },
        { url: '/static/images/tokomachi_wiki.jpg', revision: '267374297b8d84edd5d868de3ac5d857' },
        { url: '/static/images/twitter-card.jpg', revision: '440b54d4812c85dfb90dcd910712b134' },
        { url: '/static/images/vercel.png', revision: '754cd9b3860ed3055e863ff63ed631ab' },
        { url: '/static/logo_dark.svg', revision: 'a79c40fceeda78d34b379adcb26b2d7c' },
        { url: '/static/logo_light.svg', revision: '46c0407dbdbad88191467a481a9b889e' },
        { url: '/static/manifest.json', revision: '88d79506e18550e8733d42d4e58416b6' },
        { url: '/tags/art/feed.xml', revision: 'e16855ffa796fe7f0b7901fae29c79b3' },
        { url: '/tags/commission/feed.xml', revision: '21cd5074031b3ecf1fda40d3ea7821f7' },
        { url: '/tags/人像/feed.xml', revision: '3ad622fbdb5468e8329bb31418cee515' },
        { url: '/tags/医学/feed.xml', revision: '6017ccecd98cddae132a320b13c614a7' },
        { url: '/tags/博客/feed.xml', revision: 'f11c1f9a82b0428d573987ccd367fe98' },
        { url: '/tags/思考/feed.xml', revision: '9d5d7d00b0b6802f5174547bb01cffcb' },
        { url: '/tags/折腾/feed.xml', revision: '64e6f23cd3d546856a5b361eb53c199f' },
        { url: '/tags/摄影/feed.xml', revision: '579dbe2942941a2c52fffa689510da1a' },
        { url: '/tags/文献阅读/feed.xml', revision: '76ebc1e0130e802a59efa1879c60553d' },
        { url: '/tags/生活/feed.xml', revision: 'f5945f44966968dabd33f6da87aa93a1' },
        { url: '/tags/网络/feed.xml', revision: '4491c91b6dd6af19c727004774ea2971' },
        { url: '/tags/观影/feed.xml', revision: '87bfa01b8598bfbfd640aeb27a448aed' },
        { url: '/tags/阅读/feed.xml', revision: '4f7ccfbcfa0ad5784f7a2edc97bb894f' },
        { url: '/tags/随笔/feed.xml', revision: '1cbf88dfde63ff33c6963167e58ce8a7' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({ request: e, response: i, event: a, state: t }) =>
              i && 'opaqueredirect' === i.type
                ? new Response(i.body, { status: 200, statusText: 'OK', headers: i.headers })
                : i,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const i = e.pathname
        return !i.startsWith('/api/auth/') && !!i.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })],
      }),
      'GET'
    )
})
