import React from 'react'

export type TProps = React.HTMLAttributes<HTMLDivElement> & {
  value?: string
  setValue?: TSetState<string>
}
