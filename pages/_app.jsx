import Head from 'next/head'
import { AnalyticsWrapper } from '@/components/analytics/plausible'

import 'nextra-theme-blog/style.css'
import '../styles/main.css'
import '../styles/custom.css'

import { useRouter } from 'next/router'

export default function Nextra({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page)
  const router = useRouter()
  const canonicalUrl = (`https://aozaki.cc` + (router.asPath === '/' ? '' : router.asPath)).split(
    '?'
  )[0]
  return (
    <>
      <Head>
        <link rel="alternate" type="application/rss+xml" title="RSS" href="/feed.xml" />
        <link
          rel="preload"
          href="/fonts/InterDisplay-roman.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      {getLayout(<Component {...pageProps} />)}
      <AnalyticsWrapper />
    </>
  )
}
