import type { TPersianMonth } from '@type/Month'
import type { Props } from './types'
import { useRef } from 'react'
import { persianMonths } from '@data/month'
import './style.scss'

export const Months: React.FC<Props> = ({ setDate }) => {
  const months = useRef<TPersianMonth>(persianMonths)

  const setMonth = (month: number) => {
    setDate((state) => ({ ...state, month }))
  }

  return (
    <div className="persian-date-picker-months">
      {months.current.map((month) => (
        <span
          className="persian-date-picker-months__item"
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
