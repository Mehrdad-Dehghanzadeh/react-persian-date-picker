import type { TProps } from './TDatePicker'
import type { TDate, TValue } from '@type/index'
import { Days, Months, Years } from '@components'
import { useEffect, useMemo, useState } from 'react'
import jalaali from 'jalaali-js'
import { DatePickerContext } from '@contexts/DatePicker'

export const DatePicker: React.FC<TProps> = ({ onChange }) => {
  const [date, setDate] = useState<TDate | null>(null)

  useEffect(() => {
    let val: TValue = {
      utc: '',
      jalaali: ''
    }

    if (date?.year && date?.month && date?.day) {
      const gregorian = jalaali.toGregorian(date.year, date.month, date.day)
      val.utc = `${gregorian.gy}-${gregorian.gm}-${gregorian.gd}T00:00:00Z`
      val.jalaali = `${date?.year}/${date?.month}/${date?.day}`
    }

    onChange?.(val)
  }, [date])

  const DatePickerContextValue = useMemo(() => ({ date, setDate }), [date])

  return (
    <div className="persian-date-picker-wrapper__inputs">
      <DatePickerContext.Provider value={DatePickerContextValue}>
        <Days />
        <Months />
        <Years />
      </DatePickerContext.Provider>

      <div className="persian-date-picker__btns">
        <button type="button">تایید</button>
        <button type="button">بستن</button>
      </div>
    </div>
  )
}
