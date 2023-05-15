import Image from 'next/image'
import IllustratorInfo from './illustrator-info'

// import commission data files
import { commissionData } from '#data/CommissionData'
import { priorityList } from '#data/PriorityList'

// define the interface for each commission
interface CommissionInfo {
  fileName: string
  Character: string
  Twitter: string
  Pixiv: string
  Skeb: string
  Featured: boolean
  Creator: string
  PublishDate: string
}

const Featured = () => {
  // format commission data by manipulating formattedCommissions object
  const commissionsValue = Object.values(commissionData) as CommissionInfo[]
  const formattedCommissions = commissionsValue.map(commission => ({
    ...commission,
    PublishDate: commission.fileName.slice(0, 8),
    Creator: commission.fileName.split('_')[1]
  }))

  // group featured commissions by creator
  const featuredCommissionsByCreator: { [creator: string]: CommissionInfo[] } =
    {}
  for (const commission of formattedCommissions) {
    if (commission.Featured) {
      if (!featuredCommissionsByCreator[commission.Creator]) {
        featuredCommissionsByCreator[commission.Creator] = []
      }
      featuredCommissionsByCreator[commission.Creator].push(commission)
    }
  }

  // create a priority list object and sort creators by priority and then alphabetically
  const sortedCreators = Object.keys(featuredCommissionsByCreator).sort(
    (a, b) => {
      const aPriority = priorityList[a] || 0
      const bPriority = priorityList[b] || 0

      if (aPriority !== bPriority) {
        return bPriority - aPriority
      }

      return a.localeCompare(b)
    }
  )

  // sort each creator's commissions by date
  for (const creator of sortedCreators) {
    featuredCommissionsByCreator[creator].sort((a, b) =>
      b.PublishDate.localeCompare(a.PublishDate)
    )
  }

  // flatten the commissions and create a sorted array
  const flattenedCommissions = sortedCreators.reduce(
    (acc: CommissionInfo[], creator) => {
      const creatorCommissions = featuredCommissionsByCreator[creator]
      acc.push(...creatorCommissions)
      return acc
    },
    []
  )

  // display each commission's image and information
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
