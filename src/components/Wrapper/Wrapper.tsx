import type { Props } from './types'
import { DatePicker } from '@components/DatePicker/DatePicker'
import './Wrapper.scss'

export const Wrapper: React.FC<Props> = () => {
  return (
    <div className="persian-date-picker-wrapper">
      <DatePicker />

      <div className=""></div>
    </div>
  )
}
