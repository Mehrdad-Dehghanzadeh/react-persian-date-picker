import type { Props } from './types'
import { TValue } from '@type/Value'
import { DatePicker } from '@components/DatePicker/DatePicker'
import { useState } from 'react'
import './Wrapper.scss'

export const Wrapper: React.FC<Props> = () => {
  const [value, setValue] = useState<TValue | null>(null)

  const onChange = (val: TValue) => {
    setValue(val)
  }

  return (
    <div className="persian-date-picker-wrapper">
      <DatePicker onChange={onChange} />

      <div className="">
        <input type="text" value={value?.jalaali} />
        <i>{ value?.utc}</i>
      </div>
    </div>
  )
}
