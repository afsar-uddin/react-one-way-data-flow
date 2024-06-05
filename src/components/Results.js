import React from 'react'

export default function Results({count}) {
  return (
    <div>
        <div className='p-4 h-40 flex flex-col items-center justify-center space-y-5 bg-white rounded shadow'>
            <h2>Results</h2>
            <div className='text-2xl font-semibold'>
                Total Count : {count}
            </div>
        </div>
    </div>
  )
}
