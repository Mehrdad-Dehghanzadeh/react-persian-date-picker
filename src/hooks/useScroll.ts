import { useRef, useEffect, useLayoutEffect, useContext } from 'react'
import { DatePickerContext } from '@contexts/DatePicker'

export function useScroll(selectedId: string, selectedClassName: string) {
  const { date } = useContext(DatePickerContext)

  const wrapperEl = useRef<HTMLDivElement>(null)

  const scrollToSelected = (behavior: ScrollBehavior = 'smooth') => {
    const el: HTMLDivElement | null = document.querySelector(`#${selectedId}`)
    const offsetTop: number = el?.offsetTop ?? 0

    if (wrapperEl?.current && offsetTop) {
      wrapperEl?.current?.scrollTo({
        left: 0,
        top: offsetTop - 100,
        behavior
      })
    }
  }

  const removeClassName = () => {
    document.getElementById(selectedId)?.classList.remove(selectedClassName)
  }

  const addClassName = () => {
    document.getElementById(selectedId)?.classList.add(selectedClassName)
  }

  useEffect(() => {
    removeClassName()
    scrollToSelected()
    addClassName()
  }, [date])

  useLayoutEffect(() => {
    scrollToSelected('auto')
  }, [])

  return {
    removeClassName,
    wrapperEl
  }
}
