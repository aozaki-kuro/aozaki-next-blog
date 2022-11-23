'use client'
import React from 'react'
import Script from 'next/script'

export default function AnalyticsWrapper() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-TZVWSY3MXW"
        async
        id="GA-1"
      />
      <Script
        id="GA-2"
        dangerouslySetInnerHTML={{
          __html: `
      window.dataLayer=window.dataLayer||[]
      function gtag(){dataLayer.push(arguments)}
      gtag('js',new Date)
      gtag('config','G-TZVWSY3MXW')
    `
        }}
      />
    </>
  )
}
