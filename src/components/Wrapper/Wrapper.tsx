import type { Props } from './types'
import type { TDate } from '@type/Date'
import type { TValue } from '@type/Value'
import { useMemo, useState } from 'react'
import { DatePickerContext } from '@contexts/DatePicker'
import jalaali from 'jalaali-js'
import { DatePicker } from '@components/DatePicker/DatePicker'
import './style.scss'

export const Wrapper: React.FC<Props> = () => {
  const [date, setDate] = useState<TDate | null>(null)

  const value = useMemo<TValue>(() => {
    let val = {
      utc: '',
      jalaali: ''
    }

    if (date?.year && date?.month && date?.day) {
      const gregorian = jalaali.toGregorian(date.year, date.month, date.day)
      val.utc = `${gregorian.gy}-${gregorian.gm}-${gregorian.gd}T00:00:00Z`
      val.jalaali = `${date?.year}/${date?.month}/${date?.day}`
    }

    return val
  }, [date])

  const DatePickerContextValue = useMemo(() => ({ date, setDate }), [date])

  return (
    <div className="persian-date-picker-wrapper">
      <DatePickerContext.Provider value={DatePickerContextValue}>
        <DatePicker />
        
        <div className="persian-date-picker__btns">
          <button type="button" disabled={!(value.jalaali || value.utc)}>
            تایید
          </button>
          <button type="button">بستن</button>
        </div>

        <div className=""></div>
      </DatePickerContext.Provider>
    </div>
  )
}
