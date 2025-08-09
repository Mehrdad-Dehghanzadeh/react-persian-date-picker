import type { Props } from './types'
import type { TDate } from '@type/Date'
import { useRef, useContext, useId } from 'react'
import { DatePickerContext } from '@contexts/DatePicker'
import { useScroll } from '@hooks'
import './Years.scss'

export const Years: React.FC<Props> = () => {
  const { date, setDate } = useContext(DatePickerContext)
  const selfId = useId()
  const selectedId = `persian-date-picker-years__item--selected-${selfId}`
  const selectedClassName = 'persian-date-picker-years__item--selected'

  const { wrapperEl, removeClassName } = useScroll(selectedId, selectedClassName)

  const years = useRef<number[]>(
    new Array(200).fill(null).map((_el, index) => index + 1250)
  )

  const setYear = (year: number) => {
    setDate((prevState: TDate) => ({ ...prevState, year }))
  }

  return (
    <div className="persian-date-picker-years" ref={wrapperEl}>
      {years.current.map((year) => (
        <span
          className={`persian-date-picker-years__item${year === date?.year ? ' ' + selectedClassName : ''}`}
          key={`years-${selfId}-${year}`}
          id={year === date?.year ? selectedId : undefined}
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
