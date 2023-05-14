import Script from 'next/script'

const Analytics = () => {
  return (
    <Script
      strategy="afterInteractive"
      data-domain="blog.aozaki.cc"
      src="https://sight.aozaki.cc/app.js"
    />
  )
}

export default Analytics
