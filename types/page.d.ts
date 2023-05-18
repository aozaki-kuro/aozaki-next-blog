import { NextPage } from 'next'
import { ComponentType, ReactElement, ReactNode } from 'react'

export type Page = NextPage & {
  // You can disable whichever you don't need
  getLayout?: (page: ReactElement) => ReactNode
  layout?: ComponentType
}
