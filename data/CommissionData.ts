import { Props } from './types'

import { Laxy } from '#data/commission/Laxy'
import { Misc } from '#data/commission/Misc'
import { Shino } from '#data/commission/Shino'

export const commissionData: Props[] = [
  // Illustrators
  ...Laxy,
  ...Shino,

  // Other not so important ones
  ...Misc
]
