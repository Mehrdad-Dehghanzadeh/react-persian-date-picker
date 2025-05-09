import { Days, Months, Years } from '../index'

export const DatePicker: React.FC = () => {
  return (
    <div className="persian-date-picker-wrapper__inputs">
      <Days />
      <Months />
      <Years />
    </div>
  )
}
