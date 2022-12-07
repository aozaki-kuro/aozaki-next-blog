//Next.js
import type { AppProps } from 'next/app'
import type { Page } from '../types/page'
// CSS
import 'nextra-theme-blog/style.css'
import '../styles/main.css'
// Components
import { Analytics } from '@vercel/analytics/react'

type Props = AppProps & {
  Component: Page
}

const Nextra = ({ Component, pageProps }: Props) => {
  const getLayout = Component.getLayout || (page => page)
  return (
    <>
      <link
        rel="alternate"
        type="application/rss+xml"
        title="RSS"
        href="/feed.xml"
      />
      <link
        rel="preload"
        href="/fonts/InterDisplay-roman.var.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      {getLayout(<Component {...pageProps} />)}
      <Analytics />
    </>
  )
}

export default Nextra
