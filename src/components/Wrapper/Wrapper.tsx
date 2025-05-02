import type { Props } from './types'
import type { TDate } from '@type/Date'
import { Days, Months, Years } from '../index'
import { useMemo, useState } from 'react'
import jalaali from 'jalaali-js'
import './style.scss'

export const Wrapper: React.FC<Props> = () => {
  const [date, setDate] = useState<TDate | null>(null)

  const value = useMemo<string>(() => {
    let val = ''
    if (date?.year && date?.month && date?.day) {
      const gregorian = jalaali.toGregorian(date.year, date.month, date.day)
      val = `${gregorian.gy}-${gregorian.gm}-${gregorian.gd}T00:00:00Z`
    }

    return val
  }, [date])

  return (
    <div className="persian-date-picker-wrapper">
      <div className="persian-date-picker-wrapper__inputs">
        <Days setDate={setDate} />
        <Months setDate={setDate} />
        <Years setDate={setDate} />
      </div>

      <div></div>

      <input type="hidden" value={value} />
    </div>
  )
}
