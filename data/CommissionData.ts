import { Props } from './types'

import { Laxy } from '#data/commission/Laxy'
import { Lucia } from './commission/Lucia'
import { Nishe } from './commission/Stale/Nishe'
import { Tkmt } from './commission/Stale/Tkmt'

export const commissionData: Props[] = [
  // Illustrators
  ...Laxy,

  // Characters
  ...Lucia,

  // Stale
  ...Tkmt,
  ...Nishe
]
