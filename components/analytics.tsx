import Script from 'next/script'

const Analytics = () => {
  if (process.env.NODE_ENV === 'development') {
    return null
  }

  return (
    <Script
      strategy="afterInteractive"
      src="https://sight.aozaki.cc/script.js"
      data-website-id="a9c6dcd0-2c12-4342-a0cc-d1d9ba27b3d6"
    />
  )
}

export default Analytics
