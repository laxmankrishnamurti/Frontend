import React from 'react'

function CounterButton({ value, onClick, bgColor }) {
    return (
        <div>
            <button
                onClick={onClick}
                className={`${bgColor} px-4 py-2 rounded-md ml-4 mt-4`}
            >{value}</button>
        </div >
    )
}

export default CounterButton