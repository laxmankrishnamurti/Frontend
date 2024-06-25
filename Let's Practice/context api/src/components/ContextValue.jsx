import React from 'react'

function ContextValue({ count, name }) {
    return (
        <div className='ml-4 mt-4'>
            <h1 className="mt-4 text-2xl">Context value checking which is wrapped in the App component and both are wrapped in a seperate context Provider :: CountProvider-01</h1>

            <p>Count context value is : {count} </p>
            <p>Name context value is : {name} </p>
        </div>
    )
}

export default ContextValue