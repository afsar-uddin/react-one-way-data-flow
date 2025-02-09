import React from 'react'
import Count from './Count'
import Button from './Button'

export default function Counter({ id, count, increment, decrement }) {


  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-4 bg-white rounded shadow">
        <Count count={count} />

        <div className="flex space-x-3">

            <Button handler={() => increment(id)}>Increment</Button>
            <Button handler={() => decrement(id)}>Decrement</Button>

        </div>
    </div>
  )
}
