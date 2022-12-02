import Link from 'next/link'

const Footer = () => {
  const YEAR = new Date().getFullYear()
  return (
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

export default Footer
