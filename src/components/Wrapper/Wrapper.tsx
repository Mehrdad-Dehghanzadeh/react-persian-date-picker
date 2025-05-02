import type { Props } from './types'
import { Days, Months, Years } from '../index'
import { useState } from 'react'

import './style.scss'

export const Wrapper: React.FC<Props> = () => {
  const [value, setValue] = useState<string>('')

  return (
    <div className="persian-date-picker-wrapper">
      <div className="persian-date-picker-wrapper__inputs">
        <Days setValue={setValue} />
        <Months />
        <Years />
      </div>

      <div></div>

      <input type="hidden" value={value} />
    </div>
  )
}
