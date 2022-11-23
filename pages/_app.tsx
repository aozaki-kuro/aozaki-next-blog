//Next.js
import type { AppProps } from 'next/app'
import type { Page } from '../types/page'
// CSS
import 'nextra-theme-blog/style.css'
import '../styles/main.css'
// Components
import Font from '#components/Font'
import Plausible from '#components/analytics/Plausible'

type Props = AppProps & {
  Component: Page
}

const Nextra = ({ Component, pageProps }: Props) => {
  const getLayout = Component.getLayout || (page => page)
  return (
    <>
      <Font />
      {getLayout(<Component {...pageProps} />)}
      <Plausible />
    </>
  )
}

export default Nextra
