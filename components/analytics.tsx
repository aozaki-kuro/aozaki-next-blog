import Script from 'next/script'

const Analytics = () => {
  if (process.env.NODE_ENV === 'development') {
    return null
  }

  return (
    <Script
      strategy="afterInteractive"
      src="https://sight.aozaki.cc/app.js"
      data-domain="blog.aozaki.cc"
    />
  )
}

export default Analytics
