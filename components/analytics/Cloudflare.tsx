import Script from 'next/script'

const Cloudflare = () => {
  return (
    <>
      <Script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "0924c3623b6c48f788122183b773629c"}'
      />
    </>
  )
}

export default Cloudflare
