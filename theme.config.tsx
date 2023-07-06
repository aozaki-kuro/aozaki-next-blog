import CustomHead from '#components/custom-head'
import Link from 'next/link'
import { FaGithub, FaMastodon, FaRss, FaTelegramPlane, FaTwitter } from 'react-icons/fa'

// Fixed name and paths

// Year
const YEAR = new Date().getFullYear()

// Nextra blog theme config
const BlogThemeConfig = {
  // <Head>
  head: CustomHead,

  // Date format
  dateFormatter: (date: any) => `${date.toDateString()}`,

  // <Footer/>
  footer: (
    <div>
      <hr />
      <div className="grid auto-cols-min grid-flow-col gap-8 text-xl ss:gap-4">
        <Link
          href="https://twitter.com/Aozaki__"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter"
          className=""
        >
          <FaTwitter />
        </Link>
        <Link
          href="https://m.cmx.im/@aozaki"
          target="_blank"
          rel="me"
          aria-label="Mastodon"
          className=""
        >
          <FaMastodon />
        </Link>
        <Link
          href="https://github.com/aozaki-kuro"
          target="_blank"
          rel="noreferrer"
          aria-label="Github"
          className=""
        >
          <FaGithub />
        </Link>
        <Link
          href="https://t.me/aozaki_ch"
          target="_blank"
          rel="noreferrer"
          aria-label="Telegram"
          className=""
        >
          <FaTelegramPlane />
        </Link>
        <Link href="/feed.xml" target="_blank" rel="noreferrer" aria-label="RSS" className="">
          <FaRss />
        </Link>
      </div>
      <small className="mt-32 block text-p-light dark:text-inherit">
        <abbr
          title="This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License."
          className="cursor-help"
        >
          CC BY-NC 4.0
        </abbr>{' '}
        <time>{YEAR}</time> © Aozaki.
        <div className="float-right">[ Afezria ]</div>
      </small>
    </div>
  ),
}

export default BlogThemeConfig
