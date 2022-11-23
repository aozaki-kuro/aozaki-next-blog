import Link from 'next/link'

const BackPhoto = ({ Name }: { Name: string }) => {
  const Url = `/photography#${Name}`
  return (
    <p className="centered">
      <i>
        For other photo works, please <Link href={Url}>Click HERE</Link>
      </i>
    </p>
  )
}

export default BackPhoto
