import Script from 'next/script'

const Analytics = () => {
  return (
    <Script strategy="afterInteractive" src="https://sight.aozaki.cc/app.js" />
  )
}

export default Analytics
