import React from 'react'

function Form() {

    function handleSubmit(e) {
        e.preventDefault()
        setTimeout(() => {
            window.alert("Form prevented successfully")
        }, 1000);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type='text'
                    placeholder='Enter your username'
                    className='border-none outline-none bg-violet-500 placeholder:text-white ml-4 px-2 py-1 rounded-md text-white'
                />
                <button className='ml-4 bg-red-500 px-8 py-1 rounded-md text-white' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form 