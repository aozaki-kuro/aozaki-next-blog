import Link from 'next/link'

interface IllustratorInfoProps {
  PublishDate: string
  Name: string
  Twitter: string
  Skeb: string
  Pixiv: string
}

const IllustratorInfo = ({
  PublishDate,
  Name,
  Twitter,
  Skeb,
  Pixiv
}: IllustratorInfoProps) => {
  const year = PublishDate?.slice(0, 4)
  const month = PublishDate?.slice(4, 6)
  const day = PublishDate?.slice(6, 8)

  const createLink = (url: string, text: string) => {
    return url ? (
      <Link
        href={url}
        className="pr-1 underline-offset-[0.2rem]"
        target="_blank"
      >
        {text}
      </Link>
    ) : (
      <span className="cursor-not-allowed">{text}</span>
    )
  }

  return (
    <div className="grid grid-cols-4 font-mono text-sm ss:text-xs">
      <div className="col-span-1">
        {day}/{month}/{year}
      </div>
      <div className="col-span-1">{Name || '-'}</div>
      <div className="col-span-2 text-right">
        {'[ '}
        {createLink(Twitter, 'Twitter')} {createLink(Pixiv, 'Pixiv')}{' '}
        {createLink(Skeb, 'Skeb')}
        {' ]'}
      </div>
    </div>
  )
}

export default IllustratorInfo
