import type { ComponentProps } from 'react'
import type { TValue } from '@type/Value'

type T = Omit<ComponentProps<'div'>, 'onChange'>

export type TProps = T & {
  show: boolean
  onClose: (arg?: any) => any
  onChange?: (value: TValue) => void
  defaultValue?: string
  maxWidth?: string
}
