import Link from 'next/link'

const backphoto = props => {
  const Url = `/photography#${props.Name}`
  return (
    <p className="centered">
      <i>
        For other photo works, please <Link href={Url}>Click HERE</Link>
      </i>
    </p>
  )
}

export default backphoto
