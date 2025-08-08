import type { Props } from './types'
import type { TDate } from '@type/Date'
import { useRef, useContext, useEffect, useId, useLayoutEffect } from 'react'
import { DatePickerContext } from '@contexts/DatePicker'
import './Years.scss'

export const Years: React.FC<Props> = () => {
  const { date, setDate } = useContext(DatePickerContext)
  const selfId = useId()
  const selectedId = `persian-date-picker-years__item--selected-${selfId}`
  const wrapperEl = useRef<HTMLDivElement>(null)
  const years = useRef<number[]>(
    new Array(200).fill(null).map((_el, index) => index + 1250)
  )

  const setYear = (year: number) => {
    setDate((prevState: TDate) => ({ ...prevState, year }))
  }

  const scrollToSelected = () => {
    const el: HTMLDivElement | null = document.querySelector(`#${selectedId}`)
    const offsetTop: number = el?.offsetTop ?? 0

    if (wrapperEl?.current && offsetTop) {
      wrapperEl?.current?.scrollTo({ left: 0, top: offsetTop - 100, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    scrollToSelected()
  }, [date])

  useLayoutEffect(() => {
    scrollToSelected()
  }, [])



  return (
    <div className="persian-date-picker-years" ref={wrapperEl}>
      {years.current.map((year) => (
        <span
          className={`persian-date-picker-years__item${year === date?.year ? ' persian-date-picker-years__item--selected' : ''}`}
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
