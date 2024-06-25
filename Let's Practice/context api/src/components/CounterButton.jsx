import React from 'react'

function CounterButton() {
    return (
        <div>
            <button className='bg-green-400 px-4 py-2 rounded-md ml-4 mt-4'>Increament</button>
            <button className='bg-red-400 px-4 py-2 rounded-md ml-4 mt-4'>Decreament</button>
        </div>
    )
}

export default CounterButton