import { commissionData } from '#data/CommissionData'
import Image from 'next/image'
import type { CommissionInfoProps } from './types'
import IllustratorInfo from './illustrator-info'

// Defining an interface for the Commission object, which extends the CommissionInfoProps interface and adds two properties - PublishDate and Creator
interface Commission extends CommissionInfoProps {
  PublishDate: string
  Creator: string
}

const List = ({ Character }: CommissionInfoProps) => {
  // Step 1: Filtering the commissionData array to create a new array called filteredCommissions, which contains only the commissions that match the given character name and are not featured. The PublishDate and Creator properties are added to each commission object based on the fileName property.

  const filteredCommissions: Commission[] = commissionData
    // map method is used to add PublishDate and Creator properties to each commission object.
    .map(commission => ({
      ...commission,
      PublishDate: commission.fileName.slice(0, 8),
      Creator: commission.fileName.split('_')[1]
    }))

    // filter method is used to filter out only those commission objects that match the given Character name and are not Featured.
    .filter(
      commission => commission.Character === Character && !commission.Featured
    )

    // sort method is used here to sort the resulting filteredCommissions array in descending order of PublishDate
    .sort((a, b) => b.PublishDate.localeCompare(a.PublishDate))

  // Step 2: Returns a list of div elements containing an Image component and an IllustratorInfo component for each commission in the filteredCommissions array
  return (
    <>
      {filteredCommissions.map(commission => (
        <div key={commission.Creator + commission.PublishDate}>
          <Image
            // Dynamically generating the image source path using the fileName property of the commission object
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

export default List
