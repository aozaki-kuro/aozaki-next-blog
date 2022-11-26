import Head from 'next/head'

const Font = () => {
  return (
    <Head>
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
    </Head>
  )
}

export default Font
