import type { Props } from './types'
import { TValue } from '@type/Value'
import { DatePicker } from '@components/DatePicker/DatePicker'
import { useState, useCallback } from 'react'

export const Wrapper: React.FC<Props> = () => {
  const [value, setValue] = useState<TValue | null>(null)
  const [show, setShow] = useState<boolean>(false)

  const onClose = () => {
    setShow(false)
  }

  const onChange = useCallback((val: TValue) => {
    setValue(val)
  }, [])

  return (
    <div className="persian-date-picker-wrapper">
      <div className="">
        <input
          type="text"
          value={value?.jalaali}
          onFocus={() => {
            setShow(true)
          }}
        />
        <i>{value?.utc}</i>
      </div>
      <DatePicker show={show} onClose={onClose} onChange={onChange} />
    </div>
  )
}
