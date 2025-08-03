import type { TProps } from './TDatePicker'
import type { TDate, TValue } from '@type/index'
import { Days, Months, Years } from '@components'
import { useEffect, useMemo, useState } from 'react'
import jalaali from 'jalaali-js'
import { DatePickerContext } from '@contexts/DatePicker'
import './DatePicker.scss'

export const DatePicker: React.FC<TProps> = ({ onChange, show, onClose }) => {
  const [date, setDate] = useState<TDate | null>(null)
  const [initialdate, setInitialdate] = useState<TDate | null>(null)

  const cancel = () => {
    setDate(initialdate)
    onClose()
  }

  const apply = () => {
    setInitialdate(date)
    onClose()
  }

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
    show && (
      <div className="persian-date-picker">
        <div className="persian-date-picker__inputs">
          <DatePickerContext.Provider value={DatePickerContextValue}>
            <Days />
            <Months />
            <Years />
          </DatePickerContext.Provider>
        </div>

        <div className="persian-date-picker__btns">
          <button type="button" onClick={apply}>
            تایید
          </button>

          <button type="button" onClick={cancel}>
            بستن
          </button>
        </div>
      </div>
    )
  )
}
