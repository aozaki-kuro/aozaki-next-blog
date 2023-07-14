import Link from 'next/link'
import type { CommissionInfoProps } from './types'

const IllustratorInfo = ({ PublishDate, Creator, Twitter, Skeb, Pixiv }: CommissionInfoProps) => {
  const Year = PublishDate.slice(0, 4)
  const Month = PublishDate.slice(4, 6)
  const Day = PublishDate.slice(6, 8)
  const formattedDate = `${Year}/${Month}/${Day}`

  const createLink = (url: string, text: string) => {
    return url ? (
      <>
        <Link href={url} className="underline-offset-[0.2rem]" target="_blank">
          {text}
        </Link>
        <span className="pr-3 ss:pr-2" />
      </>
    ) : null
  }

  const isAllLinksEmpty = !Twitter && !Skeb && !Pixiv

  return (
    <div className="flex flex-auto font-mono text-sm ss:text-xs">
      <span className="">{formattedDate}</span>
      <span className="pr-16 ss:pr-6" />
      <span className="">{Creator || '-'}</span>
      <span className="grow text-right">
        {'['}
        <span className="pr-3 ss:pr-2" />
        {isAllLinksEmpty ? (
          <span className="pr-3 ss:pr-2">N/A</span>
        ) : (
          <>
            {createLink(Twitter, 'Twitter')}
            {createLink(Pixiv, 'Pixiv')}
            {createLink(Skeb, 'Skeb')}
          </>
        )}
        {']'}
      </span>
    </div>
  )
}

export default IllustratorInfo
