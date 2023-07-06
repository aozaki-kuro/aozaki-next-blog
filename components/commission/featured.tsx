import { commissionData } from '#data/CommissionData'
import { priorityList } from '#data/PriorityList'
import Image from 'next/image'
import IllustratorInfo from './illustrator-info'
import type { CommissionInfoProps } from './types'

const Featured = () => {
  const commissionsValue = Object.values(commissionData) as CommissionInfoProps[]

  const formattedCommissions = commissionsValue.map(commission => ({
    ...commission,
    PublishDate: commission.fileName.slice(0, 8),
    Creator: commission.fileName.split('_')[1],
  }))

  const featuredCommissionsByCreator: {
    [creator: string]: CommissionInfoProps[]
  } = {}

  for (const commission of formattedCommissions) {
    if (commission.Featured) {
      if (!featuredCommissionsByCreator[commission.Creator]) {
        featuredCommissionsByCreator[commission.Creator] = []
      }
      featuredCommissionsByCreator[commission.Creator].push(commission)
    }
  }

  const sortedCreators = Object.keys(featuredCommissionsByCreator).sort((a, b) => {
    const aPriority = priorityList[a] || 0
    const bPriority = priorityList[b] || 0

    if (aPriority !== bPriority) {
      return bPriority - aPriority
    }

    return a.localeCompare(b)
  })

  for (const creator of sortedCreators) {
    featuredCommissionsByCreator[creator].sort((a, b) => b.PublishDate.localeCompare(a.PublishDate))
  }

  const flattenedCommissions = sortedCreators.reduce((acc: CommissionInfoProps[], creator) => {
    const creatorCommissions = featuredCommissionsByCreator[creator]

    acc.push(...creatorCommissions)

    return acc
  }, [])

  return (
    <>
      {flattenedCommissions.map(commission => (
        <div key={commission.fileName}>
          <Image
            src={require(`public/images/commission/${commission.fileName}.jpg`)}
            alt={`${commission.Creator} ©️ ${commission.PublishDate}`}
            quality={95}
            placeholder="blur"
          />
          {/* Passing the commission object as props to the IllustratorInfo component */}
          <IllustratorInfo {...commission} />
        </div>
      ))}
    </>
  )
}

export default Featured
