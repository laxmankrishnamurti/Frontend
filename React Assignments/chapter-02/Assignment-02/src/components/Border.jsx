import React from 'react'

function Border({ children }) {
    return (
        <>
            <div className='border-2 border-black flex flex-col justify-center items-center h-screen rounded-md bg-violet-200'>
                {children}
            </div>
        </>
    )
}

export default Border