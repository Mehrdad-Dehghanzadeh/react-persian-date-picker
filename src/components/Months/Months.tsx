import type { TPersianMonth } from '@type/Month'
import type { Props } from './types'
import { useRef } from 'react'
import { persianMonths } from '@data/month'
import './style.scss'

export const Months: React.FC<Props> = () => {
  const months = useRef<TPersianMonth>(persianMonths)

  return (
    <div className="persian-date-picker-months">
      {months.current.map((el) => (
        <span className="persian-date-picker-months__item" key={`months-${el.number}`}>
          {el.name}
        </span>
      ))}
    </div>
  )
}
