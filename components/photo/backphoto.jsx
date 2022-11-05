import Link from "next/link"

function backphoto(props) {
  const Url = `/photography#${props.Name}`
  return (
    <p style={{ textAlign: 'center' }}>
      <i>
        For other photo works, please <Link href={Url}>Click HERE</Link>
      </i>
    </p>
  )
}

export default backphoto
