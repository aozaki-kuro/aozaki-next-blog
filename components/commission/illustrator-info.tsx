import { useMemo } from 'react'
import Link from 'next/link'
import { Transition } from '@headlessui/react'
import type { CommissionInfoProps } from 'CommissionInfoProps'

const IllustratorInfo = ({
  PublishDate = '',
  Creator,
  Twitter,
  Skeb,
  Pixiv
}: CommissionInfoProps) => {
  // format the date
  const formattedDate = useMemo(() => {
    if (PublishDate.length < 8) return '\u2000'.repeat(10)
    const date = new Date(
      `${PublishDate.slice(0, 4)}-${PublishDate.slice(
        4,
        6
      )}-${PublishDate.slice(6, 8)}`
    )
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
  }, [PublishDate])

  // create reusable function to generate links with proper styling
  const createLink = (url?: string, text?: string) =>
    url && text ? (
      <>
        <Link href={url} className="underline-offset-[0.2rem]" target="_blank">
          {text}
        </Link>
        <span className="pr-3 ss:pr-2" />
      </>
    ) : null

  // display illustrator information in a grid layout
  return (
    <Transition
      appear={true}
      show={true}
      enter="transition-opacity duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      <div className="flex flex-auto font-mono text-sm ss:text-xs">
        <div>{formattedDate}</div>
        <span className="pr-16 ss:pr-6" />
        <div>{Creator ?? '-'}</div>
        <div className="grow text-right">
          {'['}
          <span className="pr-3 ss:pr-2" />
          {createLink(Twitter, 'Twitter')}
          {createLink(Pixiv, 'Pixiv')}
          {createLink(Skeb, 'Skeb')}
          {']'}
        </div>
      </div>
    </Transition>
  )
}

export default IllustratorInfo
