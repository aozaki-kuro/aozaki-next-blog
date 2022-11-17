'use client'
import Script from 'next/script'

export function AnalyticsWrapper() {
  return (
    <Script
      strategy="lazyOnload"
      src="https://beacon.aozaki.cc/app.js"
      data-domain="blog.aozaki.cc"
    />
  )
}
