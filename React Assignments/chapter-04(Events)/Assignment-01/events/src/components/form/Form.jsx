import React from 'react'

function Form({ label, type, placeholder }) {

    function handleOnFocus() {
        console.log("Focused on the text box")
    }

    function handleOnBlur() {
        console.log("Out of textbox")
    }

    function handleOnCopy(e) {
        console.log(e)
        window.alert(`"${e.target.value}" is copied`)
    }

    function handleOnPaste(e) {
        console.log("paste :: ", e.target.value)
        window.alert(`"${e.target.value}" is pasted in the input box`)
    }

    function handleOnCut(e) {
        window.alert(`"${e.target.value}" is cut from the input field`)
    }

    return (
        <div>
            <form
                id='input-form'
                className='flex flex-col w-1/3 items-start border-2 border-pink-500 p-4 gap-4 '
            >
                <label htmlFor={label}>{label}</label>
                <input
                    className='w-52 px-2 py-1 border-none outline-none bg-pink-500 placeholder:text-black rounded-md'
                    type={type}
                    placeholder={placeholder}
                    id={label}
                    onFocus={handleOnFocus}
                    onBlur={handleOnBlur}
                    onCopy={handleOnCopy}
                    onPaste={handleOnPaste}
                    onCut={handleOnCut}
                />
                <button type='submit' className='bg-red-400 px-8 py-2 rounded-md'>Submit</button>
            </form>
        </div>
    )
}

export default Form