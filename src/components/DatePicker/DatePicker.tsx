import type { TProps } from './TDatePicker'
import type { TDate, TValue } from '@type/index'
import { Days, Months, Years } from '@components'
import { useLayoutEffect, useMemo, useState } from 'react'
import jalaali from 'jalaali-js'
import { DatePickerContext } from '@contexts/DatePicker'
import './DatePicker.scss'

export const DatePicker: React.FC<TProps> = ({
  onChange,
  show,
  onClose,
  defaultValue,
  ...props
}) => {
  const [date, setDate] = useState<TDate | null>(null)
  const [initialDate, setInitialDate] = useState<TDate | null>(null)

  const convertUTCToDate = (str: string) => {
    let val: TDate | null = null
    const substr = str.replace(/T.*/, str)

    if (RegExp(/\d{4}-\d{2}-\d{2}/).test(substr)) {
      const temp = substr.split('-')
      const jalaaliDate = jalaali.toJalaali(+temp[0], +temp[1], +temp[2])
      val = {
        year: jalaaliDate.jy,
        month: jalaaliDate.jm,
        day: jalaaliDate.jd
      }
    } else {
      console.error('UTC Format Is wrong')
    }

    return val
  }

  const setValue = () => {
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
  }

  const cancel = () => {
    setDate(initialDate)
    onClose()
  }

  const apply = () => {
    setValue()
    setInitialDate(date)
    onClose()
  }

  useLayoutEffect(() => {
    if (defaultValue) {
      const date = convertUTCToDate(defaultValue)
      setDate(date)
      setInitialDate(date)
    }
  }, [])

  const DatePickerContextValue = useMemo(() => ({ date, setDate }), [date])

  return (
    show && (
      <div className="persian-date-picker" {...props}>
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
