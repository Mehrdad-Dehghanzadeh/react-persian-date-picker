import type { TPersianMonth } from '@type/Month'
import type { Props } from './types'
import type { TDate } from '@type/Date'
import { DatePickerContext } from '@contexts/DatePicker'
import { useRef, useContext } from 'react'
import { persianMonths } from '@data/month'
import './Months.scss'

export const Months: React.FC<Props> = ({}) => {
  const { date, setDate } = useContext(DatePickerContext)
  const months = useRef<TPersianMonth>(persianMonths)

  const setMonth = (month: number) => {
    setDate((prevState: TDate) => ({ ...prevState, month }))
  }

  return (
    <div className="persian-date-picker-months">
      {months.current.map((month) => (
        <span
          className={`persian-date-picker-months__item${month.number === date.month ? ' persian-date-picker-months__item--selected' : ''}`}
          key={`months-${month.number}`}
          onClick={() => {
            setMonth(month.number)
          }}
        >
          {month.name}
        </span>
      ))}
    </div>
  )
}
