'use client'
import React from 'react'
import Script from 'next/script'

const AnalyticsWrapper = () => {
  return (
    <Script
      strategy="lazyOnload"
      src="https://beacon.aozaki.cc/app.js"
      data-domain="aozaki.cc"
    />
  )
}

export default AnalyticsWrapper
