import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-back-light tracking-custom antialiased selection:bg-selected ss:min-h-dynamic dark:bg-back-dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
