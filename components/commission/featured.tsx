import Image from 'next/image'
import { commissionData } from '#data/CommissionData'
import { priorityList } from '#data/PriorityList'
import type { CommissionInfoProps } from 'CommissionInfoProps'
import IllustratorInfo from './illustrator-info'

const Featured = () => {
  const commissions = Object.values(commissionData) as CommissionInfoProps[]

  const formattedCommissions = commissions.map(commission => ({
    ...commission,
    PublishDate: commission.fileName.slice(0, 8),
    Creator: commission.fileName.split('_')[1]
  }))

  const featuredCommissionsByCreator = formattedCommissions.reduce(
    (acc: Record<string, CommissionInfoProps[]>, commission) => {
      if (commission.Featured) {
        const creator = commission.Creator
        acc[creator] = acc[creator] || []
        acc[creator].push(commission)
      }
      return acc
    },
    {}
  )

  const sortedCreators = Object.entries(featuredCommissionsByCreator)
    .sort(([a], [b]) => {
      const aPriority = priorityList[a] || 0
      const bPriority = priorityList[b] || 0
      if (aPriority !== bPriority) {
        return bPriority - aPriority
      }
      return a.localeCompare(b)
    })
    .map(([creator]) => creator)

  const flattenedCommissions: CommissionInfoProps[] = sortedCreators.reduce(
    (acc: CommissionInfoProps[], creator: string) => {
      const creatorCommissions = featuredCommissionsByCreator[creator] || []
      return [...acc, ...creatorCommissions]
    },
    []
  )

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
          <IllustratorInfo {...commission} />
        </div>
      ))}
    </>
  )
}

export default Featured
