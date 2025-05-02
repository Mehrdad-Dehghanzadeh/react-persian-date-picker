import type { Props } from './types'
import './style.scss'
import { useRef } from 'react'

export const Days: React.FC<Props> = () => {
  const days = useRef<number[]>(new Array(30).fill(null).map((_el, index) => index + 1))

  return (
    <div className="persian-date-picker-days">
      {days.current.map((el) => (
        <span className="persian-date-picker-days__item" key={`day-${el}`}>
          {el}
        </span>
      ))}
    </div>
  )
}
