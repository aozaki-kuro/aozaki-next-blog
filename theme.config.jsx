/* eslint sort-keys: error */
import Footer from '#components/index/Footer'
const Site = `Aozaki's blog`

export default {
  head: ({ meta }) => {
    const currentTitle =
      meta.title === `About` ? Site : `${meta.title} - ${Site}`
    return (
      <>
        <title>{currentTitle}</title>
        <meta name="author" content="Aozaki" />
        <meta name="title" content={currentTitle} />
        <meta name="description" content={meta.description} />
        <meta name="og:site_name" content={Site} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={currentTitle} />
        <meta property="og:description" content={meta.description} />
        <meta
          property="og:image"
          content={meta.image || 'https://img.aozaki.cc/twitter-card.jpg'}
        />
        <meta
          property="twitter:card"
          content={meta.image || 'summary_large_image'}
        />
        <meta property="twitter:site" content="@Aozaki__" />
        <meta property="twitter:title" content={currentTitle} />
        <meta property="twitter:description" content={meta.description} />
        <meta
          property="twitter:image"
          content={meta.image || 'https://img.aozaki.cc/twitter-card.jpg'}
        />
        <meta name="application-name" content={Site} />
        <meta name="apple-mobile-web-app-title" content={Site} />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#6fa8dc"
        />
        <link
          rel="feed"
          href="/index.xml"
          type="application/rss+xml"
          title={Site}
        />
      </>
    )
  },
  footer: <Footer />
}
