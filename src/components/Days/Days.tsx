import type { Props } from './types'
import { useRef } from 'react'
import './style.scss'

export const Days: React.FC<Props> = ({ setDate }) => {
  const days = useRef<number[]>(new Array(30).fill(null).map((_el, index) => index + 1))
  const setDay = (day: number) => {
    setDate((state) => ({ ...state, day }))
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
