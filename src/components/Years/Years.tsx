import type { Props } from './types'
import type { TDate } from '@type/Date'
import { useRef, useContext } from 'react'
import { DatePickerContext } from '@contexts/DatePicker'
import './Years.scss'

export const Years: React.FC<Props> = ({}) => {
  const { setDate } = useContext(DatePickerContext)
  const years = useRef<number[]>(
    new Array(200).fill(null).map((_el, index) => index + 1250)
  )

  const setYear = (year: number) => {
    setDate((prevState: TDate) => ({ ...prevState, year }))
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
