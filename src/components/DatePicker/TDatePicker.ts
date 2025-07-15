import React from 'react'
import type { TValue } from '@type/Value'


type T = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>

export type TProps = T & {
  value?: string
  setValue?: TSetState<string>
  onChange?: (value: TValue) => void
}
