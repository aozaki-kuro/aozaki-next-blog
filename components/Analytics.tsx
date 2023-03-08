import Script from 'next/script'

const Analytics = () => {
  return (
    <Script
      strategy="afterInteractive"
      data-website-id="7fb39801-1ffd-4cfc-b7e3-001cf60d421b"
      src="https://sight.aozaki.cc/app.js"
    />
  )
}

export default Analytics
