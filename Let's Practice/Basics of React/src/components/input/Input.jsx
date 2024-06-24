import React from 'react'

function Input({ type, value, onValueChange, placeholder, disabled, id, label }) {
    return (
        <>
            <div className='mb-2 w-1/2 flex justify-evenly'>
                {label && (
                    <label
                        htmlFor={id}
                        className='mr-2'
                    >
                        {label}
                    </label>
                )}
                <input
                    id={id}
                    className='border-2 border-black px-2 py-1 rounded-md'
                    type={type}
                    value={value}
                    onChange={(e) => onValueChange(e.target.value)}
                    placeholder={placeholder}
                    disabled={disabled}
                />
            </div>
        </>
    )
}

export default Input