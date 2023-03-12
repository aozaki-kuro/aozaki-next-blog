import Script from 'next/script'

const Analytics = () => {
  return (
    <Script
      strategy="afterInteractive"
      data-website-id="0a65d059-5317-4bb9-bf8f-ad710d5dc95e"
      src="https://sight.aozaki.cc/app.js"
    />
  )
}

export default Analytics
