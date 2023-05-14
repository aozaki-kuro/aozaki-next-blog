import { data } from './data'
import IllustratorInfo from './IllustratorInfo'
import Image from 'next/image'

// define the expected props for List component
interface Props {
  CharaFilter: string
}

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

// filter commissions based on character and sort them by publish date
const filterCommissions = (charaFilter: string): CommissionInfo[] => {
  const commissions = Object.values(data) as CommissionInfo[]
  const commissionsWithDate = commissions.map(commission => ({
    ...commission,
    PublishDate: commission.fileName.slice(0, 8),
    Creator: commission.fileName.split('_')[1]
  }))
  return commissionsWithDate
    .filter(
      commission =>
        commission.Character === charaFilter && commission.Featured === false
    )
    .sort((a, b) => b.PublishDate.localeCompare(a.PublishDate))
}

const List = ({ CharaFilter }: Props) => {
  // get filtered commissions
  const filteredCommissions = filterCommissions(CharaFilter)

  // display all the filtered commissions' image and information
  return (
    <>
      {filteredCommissions.map(commission => (
        <div key={commission.Creator + commission.PublishDate}>
          <Image
            src={require(`public/images/commission/${commission.fileName}.jpg`)}
            alt={`${commission.Creator} ©️ ${commission.PublishDate}`}
            quality={95}
            placeholder="blur"
            priority={true}
          />
          <IllustratorInfo {...commission} />
        </div>
      ))}
    </>
  )
}

export default List
