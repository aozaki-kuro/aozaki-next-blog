import Link from 'next/link'

const Caption = ({
  Year,
  Name,
  Skeb,
  Url
}: {
  Year: string
  Name: string
  Url: string
  Skeb: boolean
}) => {
  const displaySkeb = Skeb == true ? `/ Skeb` : null
  return (
    <div className="text-center">
      © {Year} [{' '}
      <Link href={Url} target="_blank" rel="noreferrer">
        {Name}
      </Link>{' '}
      {displaySkeb} ]
    </div>
  )
}

export default Caption
