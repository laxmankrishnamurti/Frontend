import React from 'react'

function Container({ children }) {
    return (
        <div className='w-5/6 shadow-sm shadow-black rounded-md mx-auto p-4 flex justify-center items-center flex-col'>
            {children}
        </div>
    )
}

export default Container