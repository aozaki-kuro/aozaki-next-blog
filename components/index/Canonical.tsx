import { useRouter } from 'next/router'
import Head from 'next/head'

const Canonical = () => {
  const router = useRouter()
  const canonicalUrl = (
    `https://aozaki.cc` + (router.asPath === '/' ? '' : router.asPath)
  ).split('?')[0]
  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
    </>
  )
}

export default Canonical
