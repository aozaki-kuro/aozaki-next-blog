import Script from 'next/script'

const Analytics = () => {
  if (process.env.NODE_ENV === 'development') {
    return null
  }

  return <Script strategy="afterInteractive" data-domain="blog.aozaki.cc" src="/app.js" />
}

export default Analytics
