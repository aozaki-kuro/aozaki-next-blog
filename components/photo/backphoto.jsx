import React from 'react'
import Link from 'next/link'

const backphoto = props => {
  const Url = `/photography#${props.Name}`
  return (
    <p style={{ textAlign: 'center', fontStyle: 'italic' }}>
      For other photo works, please <Link href={Url}>Click HERE</Link>
    </p>
  )
}

export default backphoto
