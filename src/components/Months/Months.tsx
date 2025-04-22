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
        <div className="persian-date-picker-months__item" key={el.number}>
          {el.name}
        </div>
      ))}
    </div>
  )
}
