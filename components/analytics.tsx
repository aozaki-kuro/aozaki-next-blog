import Script from 'next/script'

const Analytics = () => {
  if (process.env.NODE_ENV === 'development') {
    return null
  }

  return (
    <Script
      strategy="afterInteractive"
      data-domain="blog.aozaki.cc"
      src="/sight/app.js"
      data-api="/sight/event"
    />
  )
}

export default Analytics
