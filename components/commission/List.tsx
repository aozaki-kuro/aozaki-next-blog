import data from './data.json'
import IllustratorInfo from './IllustratorInfo'
import Image from 'next/image'

interface Props {
  CharaFilter?: string
  Featured?: boolean
}

interface Commission {
  Name: string
  PublishDate: string
  fileName: string
  Character: string
  Twitter: string
  Pixiv: string
  Skeb: string
  Featured: boolean
}

const List = ({ CharaFilter, Featured }: Props) => {
  let filteredCommissions = Object.values(data) as Commission[]

  if (CharaFilter) {
    filteredCommissions = filteredCommissions.filter(
      commission =>
        commission.Character === CharaFilter &&
        (!Featured || !commission.Featured)
    )
  } else if (Featured) {
    filteredCommissions = filteredCommissions.filter(
      commission => commission.Featured
    )
  }

  return (
    <div>
      {filteredCommissions
        .sort((a, b) => b.PublishDate.localeCompare(a.PublishDate))
        .map(commission => (
          <div key={commission.PublishDate}>
            <Image
              src={require(`public/images/commission/${commission.fileName}.jpg`)}
              alt={`${commission.Name} ©️ ${commission.PublishDate}`}
              quality={95}
              placeholder="blur"
            />
            <IllustratorInfo {...commission} />
          </div>
        ))}
    </div>
  )
}

export default List
