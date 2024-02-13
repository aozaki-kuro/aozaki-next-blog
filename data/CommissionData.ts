import { Props } from './types'

import { Laxy } from '#data/commission/Laxy'
import { Lucia } from './commission/Lucia'
import { Nishe } from './commission/Stale/Nishe'
import { Tkmt } from './commission/Stale/Tkmt'
import { Sera } from './commission/Alba_sera'

export const commissionData: Props[] = [
  // Illustrators
  ...Laxy,

  // Characters
  ...Lucia,
  ...Sera,

  // Stale
  ...Tkmt,
  ...Nishe,
]
