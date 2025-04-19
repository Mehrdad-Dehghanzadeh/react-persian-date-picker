import type { Props } from './types'
import { Days, Months, Years } from '../index'

import './style.scss'

export const Wrapper: React.FC<Props> = () => {
  return (
    <div className="persian-date-picker-wrapper">
      <div className="persian-date-picker-wrapper__inputs">
        <Days />
        <Months />
        <Years />
      </div>

      <div ></div>
    </div>
  )
}
