import { commissionData } from '#data/CommissionData'
import Image from 'next/image'
import IllustratorInfo from './illustrator-info'
import type { CommissionInfoProps } from './types'

interface Commission extends CommissionInfoProps {
  PublishDate: string
  Creator: string
}

const List = ({ Character }: CommissionInfoProps) => {
  const filteredCommissions: Commission[] = commissionData

    .map(commission => ({
      ...commission,
      PublishDate: commission.fileName.slice(0, 8),
      Creator: commission.fileName.split('_')[1],
    }))

    .filter(commission => commission.Character === Character && !commission.Featured)

    .sort((a, b) => b.PublishDate.localeCompare(a.PublishDate))

  return (
    <>
      {filteredCommissions.map(commission => (
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

export default List
