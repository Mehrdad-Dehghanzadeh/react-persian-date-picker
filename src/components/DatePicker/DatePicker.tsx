import type { TDate, TValue } from '@type/index'
import { Days, Months, Years } from '@components'
import { useMemo, useState } from 'react'
import jalaali from 'jalaali-js'
import { DatePickerContext } from '@contexts/DatePicker'

export const DatePicker: React.FC = () => {
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
    <div className="persian-date-picker-wrapper__inputs">
      <DatePickerContext.Provider value={DatePickerContextValue}>
        <Days />
        <Months />
        <Years />
      </DatePickerContext.Provider>
    </div>
  )
}
