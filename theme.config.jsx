/* eslint sort-keys: error */
const YEAR = new Date().getFullYear()
const Site = `Aozaki's blog`

export default {
  head: ({ meta }) => {
    return (
      <>
        <title>
          {meta.title === `About` ? Site : `${meta.title} - ${Site}`}
        </title>
        <meta name="author" content="Aozaki" />
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.description} />
        <meta property="description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content="https://aozaki.cc" />
        <meta
          property="og:image"
          content={meta.image || 'https://img.aozaki.cc/twitter-card.jpg'}
        />
        <meta
          property="twitter:card"
          content={meta.image ? 'summary_large_image' : 'summary'}
        />
        <meta property="twitter:site" content="@Aozaki__" />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:url" content="https://aozaki.cc" />
        <meta
          property="twitter:image"
          content={meta.image || 'https://img.aozaki.cc/twitter-card.jpg'}
        />
      </>
    )
  },
  footer: (
    <div>
      <hr />
      <div className="social">
        <a href="https://twitter.com/Aozaki__" target="_blank" rel="noreferrer">
          Twitter
        </a>{' '}
        ·{' '}
        <a
          href="https://github.com/aozaki-kuro"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>{' '}
        ·{' '}
        <a href="https://t.me/aozaki_ch" target="_blank" rel="noreferrer">
          Telegram
        </a>{' '}
        ·{' '}
        <a href="mailto:i@aozaki.cc" target="_blank" rel="noreferrer">
          i@aozaki.cc
        </a>
      </div>
      <small style={{ display: 'block', marginTop: '8rem' }}>
        <abbr
          title="This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License."
          style={{ cursor: 'help' }}
        >
          CC BY-NC 4.0
        </abbr>{' '}
        <time>{YEAR}</time> © Aozaki.
        <a href="/feed.xml" aria-label="RSS" target="_blank" rel="noreferrer">
          RSS
        </a>
        <style jsx>{`
          a {
            float: right;
          }
        `}</style>
      </small>
    </div>
  )
}
