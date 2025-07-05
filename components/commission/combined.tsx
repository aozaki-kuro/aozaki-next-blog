import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import commissionData from '#data/commission.json'
import { priorityList } from '#data/PriorityList'
import type { CommissionInfoProps } from './types'

const IllustratorInfo = ({
  PublishDate,
  Creator,
  Twitter,
  Skeb,
  Pixiv,
  Fantia,
}: CommissionInfoProps) => {
  const formattedDate =
    PublishDate.slice(0, 4) + '/' + PublishDate.slice(4, 6) + '/' + PublishDate.slice(6, 8)

  const createLink = (url: string, text: string) => {
    return url ? (
      <>
        <span className="pr-3 ss:pr-2" />
        <Link href={url} className="underline-offset-[0.1rem]" target="_blank">
          {text}
        </Link>
      </>
    ) : null
  }

  const isAllLinksEmpty = !Twitter && !Skeb && !Pixiv && !Fantia

  return (
    <div className="flex flex-auto font-mono text-sm ss:text-xs">
      <span className="">{formattedDate}</span>
      <span className="pr-16 ss:pr-6" />
      <span className="">{Creator || '-'}</span>
      <span className="grow text-right">
        <span className="pr-3 ss:pr-2" />
        {isAllLinksEmpty ? (
          <span className="pr-3 ss:pr-2">N/A</span>
        ) : (
          <>
            {createLink(Twitter ? Twitter : '', 'Twitter')}
            {createLink(Pixiv ? Pixiv : '', 'Pixiv')}
            {createLink(Fantia ? Fantia : '', 'Fantia')}
          </>
        )}
      </span>
    </div>
  )
}

function prepareData(
  commissions: CommissionInfoProps[],
  priorities: { [creator: string]: number },
): CommissionInfoProps[] {
  const formatted = commissions.map(c => ({
    ...c,
    PublishDate: c.fileName.slice(0, 8),
    Creator: c.fileName.split('_')[1],
  }))

  const byCreator: { [creator: string]: CommissionInfoProps[] } = {}

  for (const commission of formatted) {
    if (commission.Featured) {
      if (!byCreator[commission.Creator]) {
        byCreator[commission.Creator] = []
      }
      byCreator[commission.Creator].push(commission)
    }
  }

  const sortedCreators = Object.keys(byCreator).sort((a, b) => {
    const aPriority = priorities[a] || 0
    const bPriority = priorities[b] || 0

    if (aPriority !== bPriority) {
      return bPriority - aPriority
    }

    return a.localeCompare(b)
  })

  for (const creator of sortedCreators) {
    byCreator[creator].sort((a, b) => b.PublishDate.localeCompare(a.PublishDate))
  }

  const flattened = sortedCreators.reduce((acc: CommissionInfoProps[], creator) => {
    acc.push(...byCreator[creator])
    return acc
  }, [])

  return flattened
}

interface Commission extends CommissionInfoProps {
  PublishDate: string
  Creator: string
}

const List = ({ Character }: CommissionInfoProps) => {
  const filtered: Commission[] = (commissionData as Commission[])
    .map(c => ({
      ...c,
      PublishDate: c.fileName.slice(0, 8),
      Creator: c.fileName.split('_')[1],
    }))
    .filter(c => c.Character === Character && !c.Featured)
    .sort((a, b) => b.PublishDate.localeCompare(a.PublishDate))

  return (
    <>
      {filtered.map(commission => (
        <div key={commission.Creator + commission.PublishDate}>
          <Image
            src={require(`public/images/commission/${commission.fileName}.jpg`)}
            alt={`${commission.Creator} ©️ ${commission.PublishDate}`}
            quality={95}
            placeholder="blur"
          />
          <IllustratorInfo {...commission} />
        </div>
      ))}
    </>
  )
}

const Featured = () => {
  const commissionsValue = commissionData as CommissionInfoProps[]
  const flattened = useMemo(() => prepareData(commissionsValue, priorityList), [commissionsValue])

  return (
    <>
      {flattened.map(commission => (
        <div key={commission.fileName}>
          <Image
            src={require(`public/images/commission/${commission.fileName}.jpg`)}
            alt={`${commission.Creator} ©️ ${commission.PublishDate}`}
            quality={95}
            placeholder="blur"
          />
          <IllustratorInfo {...commission} />
        </div>
      ))}
    </>
  )
}

const Stale = ({ Character }: { Character: string }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoaded) {
          setIsLoaded(true)
        }
      },
      {
        rootMargin: '0px',
        threshold: 1.0,
      },
    )

    const current = containerRef.current
    if (current) {
      observer.observe(current)
    }
    return () => {
      if (current) {
        observer.unobserve(current)
      }
    }
  }, [isLoaded])

  return (
    <div ref={containerRef}>
      {isLoaded ? (
        <List
          Character={Character}
          fileName=""
          PublishDate=""
          Creator=""
          Twitter=""
          Pixiv=""
          Skeb=""
          Fantia=""
          Featured={false}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export { Featured, List, Stale }
