import type { Props } from './types'
import { DatePicker } from '@components/DatePicker/DatePicker'
import './style.scss'

export const Wrapper: React.FC<Props> = () => {
  return (
    <div className="persian-date-picker-wrapper">
      <DatePicker />

      <div className="persian-date-picker__btns">
        <button type="button">تایید</button>
        <button type="button">بستن</button>
      </div>

      <div className=""></div>
    </div>
  )
}
