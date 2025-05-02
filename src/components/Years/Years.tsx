import React, { useRef } from 'react'
import './style.scss'

export const Years: React.FC = () => {
  const years = useRef<number[]>(
    new Array(200).fill(null).map((_el, index) => index + 1250)
  )

  return (
    <div className="persian-date-picker-years">
      {years.current.map((el) => (
        <span className="persian-date-picker-years__item" key={`years-${el}`}>
          {el}
        </span>
      ))}
    </div>
  )
}
