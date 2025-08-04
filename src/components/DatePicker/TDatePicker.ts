import React from 'react'
import type { TValue } from '@type/Value'

type T = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>

export type TProps = T & {
  onChange?: (value: TValue) => void
  defaultValue?: string
  show: boolean
  onClose: (arg?: any) => any
}
