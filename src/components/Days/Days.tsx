import type { Props } from './types'
import type { TDate } from '@type/Date'
import { useRef, useContext } from 'react'
import { DatePickerContext } from '@contexts/DatePicker'
import './style.scss'

export const Days: React.FC<Props> = ({}) => {
  const { setDate } = useContext(DatePickerContext)
  const days = useRef<number[]>(new Array(30).fill(null).map((_el, index) => index + 1))

  const setDay = (day: number) => {
    setDate((prevState: TDate) => ({ ...prevState, day }))
  }
  return (
    <div className="persian-date-picker-days">
      {days.current.map((el) => (
        <span
          className="persian-date-picker-days__item"
          key={`day-${el}`}
          onClick={() => {
            setDay(el)
          }}
        >
          {el}
        </span>
      ))}
    </div>
  )
}
