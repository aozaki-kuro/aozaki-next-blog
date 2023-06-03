import Image from 'next/image'
import IllustratorInfo from './illustrator-info'
import { commissionData } from '#data/CommissionData'
import { priorityList } from '#data/PriorityList'
import type { CommissionInfoProps } from 'CommissionInfoProps'

const Featured = () => {
  // Step 1: Converting the commissionerData object to an array and then adding the PublishDate and Creator properties to each commission object based on the fileName property.
  const commissionsValue = Object.values(
    commissionData
  ) as CommissionInfoProps[] // Creating an array of CommissionInfoProps from the values of commissionDataObj.

  const formattedCommissions = commissionsValue.map(commission => ({
    // Adding PublishDate & Creator to Commission by mapping over each commission in commissionsValue array and returning a new object with additional properties
    ...commission, // using spread operator to include existing properties of the Commission
    PublishDate: commission.fileName.slice(0, 8), // Adding PublishDate property to Commission by slicing first 8 characters of fileName property
    Creator: commission.fileName.split('_')[1] // Adding Creator property to Commission by splitting fileName at '_' and taking second part
  }))

  // Step 2: Creating a new object called featuredCommissionsByCreator which stores the featured commission objects grouped by creator name
  const featuredCommissionsByCreator: {
    [creator: string]: CommissionInfoProps[] // Type definition to declare that the property names will be strings, and the property values will be arrays of CommissionInfoProps.
  } = {}

  for (const commission of formattedCommissions) {
    // Looping over all commissions in the formattedCommissions array
    if (commission.Featured) {
      // Checking if the commission is marked as "featured"
      if (!featuredCommissionsByCreator[commission.Creator]) {
        // Checking if an array for this commission's Creator already exists in featuredCommissionsByCreator object. If not, creating a new empty array
        featuredCommissionsByCreator[commission.Creator] = []
      }
      featuredCommissionsByCreator[commission.Creator].push(commission) // Adding this commission to the Creator's array in featuredCommissionsByCreator object
    }
  }

  // Step 3: Sorting the creators based on their priority level and name
  const sortedCreators = Object.keys(featuredCommissionsByCreator).sort(
    (a, b) => {
      // Using a sort function as a callback to sort creators by comparing their priority and name
      const aPriority = priorityList[a] || 0 // Assigning priority value of Creator 'a'. If priorityList has no entry for Creator 'a', assigning a default of 0.
      const bPriority = priorityList[b] || 0 // Assigning priority value of Creator 'b'. If priorityList has no entry for Creator 'b', assigning a default of 0.

      if (aPriority !== bPriority) {
        // If the priority levels of both creators are different, returning the difference between them
        return bPriority - aPriority
      }

      return a.localeCompare(b) // If the priority levels of both creators are identical, comparing the names of both creators using the localeCompare method and returning the result.
    }
  )

  // Step 4: Sorting the featured commissions for each creator by their publish date
  for (const creator of sortedCreators) {
    // Sorting the 'featuredCommissionsByCreator' array of each creator using a sort function as a callback. This sort function sorts the commissions based on their publish dates.
    featuredCommissionsByCreator[creator].sort((a, b) =>
      b.PublishDate.localeCompare(a.PublishDate)
    )
  }

  // Step 5: Flattening the nested object into a single array of commission objects
  const flattenedCommissions = sortedCreators.reduce(
    (acc: CommissionInfoProps[], creator) => {
      // Accessing all the commissions of the current creator using 'featuredCommissionsByCreator' object.
      const creatorCommissions = featuredCommissionsByCreator[creator]

      // Pushing all the commissions of the current creator to the accumulator array 'acc' using the spread operator(...)
      acc.push(...creatorCommissions)

      // returning the updated 'acc' array as the next accumulator value.
      return acc
    },
    [] // Initial value of the accumulator is an empty array.
  )

  // Step 6: Rendering a list of div elements containing Image and IllustratorInfo components for each commission in the flattenedCommissions array
  return (
    <>
      {flattenedCommissions.map(commission => (
        <div key={commission.fileName}>
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

// Exporting the Featured component as the default export
export default Featured
