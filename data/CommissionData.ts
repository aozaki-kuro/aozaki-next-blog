import { Props } from './types'

import { Laxy } from '#data/commission/Laxy'
import { Shino } from '#data/commission/Shino'
import { Misc } from '#data/commission/Misc'

export const commissionData: Props[] = [
  // Illustrators
  ...Laxy,
  ...Shino,

  // Other not so important ones
  ...Misc
]
