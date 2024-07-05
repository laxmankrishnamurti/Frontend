import React, { useState } from 'react'

function Input() {
    const [key, setKey] = useState("")

    function handleKeyEvent(e) {
        setKey(e.key)
        if (key === 'Enter') {
            window.alert("Enter key pressed!")
        } else if (key === 'Alt') {
            window.alert("Alt key pressed")
        }
    }

    return (
        <div>
            <textarea
                onKeyDown={handleKeyEvent}
                className='border-2 border-black rounded-md p-1'
                placeholder='Enter inputs.........'
            ></textarea>
            {key && <h2>Pressed key : {key}</h2>}
        </div>
    )
}

export default Input