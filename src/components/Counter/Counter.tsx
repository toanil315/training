import React from 'react'
import type { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../redux/slices/CounterSlice'
import { useAppSelector } from '../../redux/hook/hook'

export function Counter() {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}