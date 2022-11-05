const YEAR = new Date().getFullYear()

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faRss } from '@fortawesome/free-solid-svg-icons'

export default {
  head: ({ meta }) => {
    return (
      <>
        <meta name="author" content="Aozaki" />
        <link rel="canonical" href="https://blog.aozaki.cc" />
        <meta name="title" content={meta.title} />
        <meta property="description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content="https://blog.aozaki.cc" />
        <meta
          property="og:image"
          content={meta.image || 'https://img.aozaki.cc/twitter-card.jpg'}
        />
        <meta property="twitter:card" content={meta.image ? 'summary_large_image' : 'summary'} />
        <meta property="twitter:site" content="@Aozaki__" />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:url" content="https://blog.aozaki.cc" />
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
      <span style={{ fontSize: '1.2rem' }}>
        <a href="https://twitter.com/Aozaki__" target="_blank" style={{ paddingRight: '1rem' }}>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://t.me/aozaki_ch" target="_blank" style={{ paddingRight: '1rem' }}>
          <FontAwesomeIcon icon={faTelegram} />
        </a>
        <a href="https://github.com/aozaki-kuro" target="_blank" style={{ paddingRight: '1rem' }}>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="mailto:i@aozaki.cc" target="_blank" style={{ paddingRight: '1rem' }}>
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="/feed.xml">
          <FontAwesomeIcon icon={faRss} />
        </a>
      </span>
      <small style={{ display: 'block', marginTop: '8rem' }}>
        <abbr
          title="This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License."
          style={{ cursor: 'help' }}
        >
          CC BY-NC 4.0
        </abbr>{' '}
        <time>{YEAR}</time> © Aozaki.
        <div style={{ wordBreak: 'break-word', float: 'right' }}>Afezeria</div>
        <style jsx>{`
          a {
            float: right;
          }
        `}</style>
      </small>
    </div>
  ),
}
