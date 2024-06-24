import React from 'react'

function Button({ value, type }) {
    return (
        <div>
            <button
                className='bg-pink-400 rounded-md'
                type={type}
            >{value}</button>
        </div>
    )
}

export default Button