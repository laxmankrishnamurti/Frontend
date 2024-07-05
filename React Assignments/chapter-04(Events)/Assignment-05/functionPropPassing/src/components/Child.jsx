import React from 'react'

function Child({ onPlay }) {

    onPlay()

    function handleClick() {
        onplay()
    }

    return (
        <div>
            <button onClick={handleClick} className='bg-pink-500 px-8 py-3 rounded-md'>Click me</button>
        </div>
    )
}

export default Child