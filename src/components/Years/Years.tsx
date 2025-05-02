import type { Props } from './types'
import React, { useRef } from 'react'
import './style.scss'

export const Years: React.FC<Props> = ({ setDate }) => {
  const years = useRef<number[]>(
    new Array(200).fill(null).map((_el, index) => index + 1250)
  )

  const setYear = (year: number) => {
    setDate((state) => ({ ...state, year }))
  }

  return (
    <div className="persian-date-picker-years">
      {years.current.map((year) => (
        <span
          className="persian-date-picker-years__item"
          key={`years-${year}`}
          onClick={() => {
            setYear(year)
          }}
        >
          {year}
        </span>
      ))}
    </div>
  )
}
