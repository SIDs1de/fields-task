import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from './store'
import { useEffect, useState } from 'react'

export function useDebounce(value: string, delay: number = 500) {
  if (delay < 0) {
    throw new Error('Delay should to be more or equal 0')
  }

  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
