// _app.tsx

import CustomAnalytics from '#components/analytics'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import '../styles/main.css'

// 定义自定义字体
export const inter = localFont({
  variable: '--font-inter',
  display: 'block',
  style: 'normal',
  src: [
    {
      path: '../public/fonts/InterDisplay-roman.var.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/InterDisplay-roman.var.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
})

const menlo = localFont({
  variable: '--font-menlo',
  display: 'block',
  style: 'normal',
  src: [
    {
      path: '../public/fonts/Menlo-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
})

// 定义 App 组件
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${menlo.variable} font-sans`}>
      {/* RSS 链接 */}
      <link rel="alternate" type="application/rss+xml" title="RSS" href="/feed.xml" />

      {/* 渲染页面组件 */}
      <Component {...pageProps} />

      {/* 自定义分析组件 */}
      <CustomAnalytics />
    </main>
  )
}
