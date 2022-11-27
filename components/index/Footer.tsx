const Footer = () => {
  const YEAR = new Date().getFullYear()
  return (
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
        <a href="/feed.xml" target="_blank" rel="noreferrer" className="RSS">
          RSS
        </a>
      </small>
    </div>
  )
}

export default Footer
