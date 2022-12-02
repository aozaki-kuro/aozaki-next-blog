import Link from 'next/link'

const Caption = ({
  Year,
  Name,
  Url
}: {
  Year: string
  Name: string
  Url: string
}) => {
  return (
    <div className="centered">
      © {Year} [{' '}
      <Link href={Url} target="_blank" rel="noreferrer">
        {Name}
      </Link>{' '}
      ]
    </div>
  )
}

export default Caption
