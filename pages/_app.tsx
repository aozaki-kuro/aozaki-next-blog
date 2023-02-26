// Next.js Basics
import type { AppProps } from 'next/app'
import type { Page } from '../types/page'

// CSS
import 'nextra-theme-blog/style.css'
import '../styles/main.css'
// Font Loader
import localFont from 'next/font/local'

// Components
import CustomAnalytics from '#components/analytics/Plausible'

const inter = localFont({
  variable: '--font-inter',
  display: 'block',
  style: 'normal',
  src: [
    {
      path: '../public/fonts/InterDisplay-roman.var.woff2',
      weight: '100',
      style: 'normal'
    },
    {
      path: '../public/fonts/InterDisplay-roman.var.woff2',
      weight: '900',
      style: 'normal'
    }
  ]
})

type Props = AppProps & {
  Component: Page
}

const Nextra = ({ Component, pageProps }: Props) => {
  const getLayout = Component.getLayout || (page => page)
  return (
    <main className={`${inter.variable} font-sans`}>
      <link
        rel="alternate"
        type="application/rss+xml"
        title="RSS"
        href="/feed.xml"
      />
      {getLayout(<Component {...pageProps} />)}
      <CustomAnalytics />
    </main>
  )
}

export default Nextra
