/* eslint sort-keys: error */
import { useRouter } from 'next/router'
import Link from 'next/link'

// Fixed name and paths
const Site = `Aozaki's blog`
const twitterCard = `https://img.aozaki.cc/twitter-card.jpg`

// Year
const YEAR = new Date().getFullYear()

// Nextra blog theme config
export default {
  // <Head>
  head: ({
    meta
  }: {
    meta: { title: string; description: string; image: string }
  }) => {
    // Get current route for Url
    const router = useRouter()
    const canonicalUrl = (
      `https://blog.aozaki.cc` + (router.asPath === '/' ? '' : router.asPath)
    ).split('?')[0]

    // Get Current Title
    const currentTitle =
      meta.title === `About` ? Site : `${meta.title} - ${Site}`

    // Here goes the SEO part
    return (
      <>
        {/* SEO : Traditional */}
        <meta name="robots" content="noodp" />
        <title>{currentTitle}</title>
        <meta name="title" content={currentTitle} />
        <meta name="author" content="Aozaki" />
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={canonicalUrl} />

        {/* SEO : Opengraph */}
        <meta property="og:title" content={currentTitle} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={meta.image || twitterCard} />
        <meta name="og:site_name" content={Site} />

        {/* SEO : Twitter Card */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={meta.image || twitterCard} />
        <meta property="twitter:title" content={currentTitle} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:url" content={canonicalUrl} />
        <meta property="twitter:site" content="@Aozaki__" />

        {/* SEO : PWA realted */}
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

        {/* SEO : RSS */}
        <link
          rel="feed"
          href="/index.xml"
          type="application/rss+xml"
          title={Site}
        />
      </>
    )
  },

  // <Footer/>
  footer: (
    <div>
      <hr />
      <div className="social">
        <Link
          href="https://twitter.com/Aozaki__"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </Link>{' '}
        ·{' '}
        <Link
          href="https://github.com/aozaki-kuro"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </Link>{' '}
        ·{' '}
        <Link href="https://t.me/aozaki_ch" target="_blank" rel="noreferrer">
          Telegram
        </Link>{' '}
        ·{' '}
        <Link href="mailto:i@aozaki.cc" target="_blank" rel="noreferrer">
          i@aozaki.cc
        </Link>
      </div>
      <small className="cc-mark">
        <abbr
          title="This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License."
          className="cc-cursor"
        >
          CC BY-NC 4.0
        </abbr>{' '}
        <time>{YEAR}</time> © Aozaki.
        <Link href="/feed.xml" target="_blank" rel="noreferrer" className="RSS">
          RSS
        </Link>
      </small>
    </div>
  )
}
