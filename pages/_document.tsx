import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-back-light tracking-custom antialiased selection:bg-selected dark:bg-back-dark ss:min-h-dynamic">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
