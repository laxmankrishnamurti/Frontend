import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function TodoForm() {

    const [input, setInput] = React.useState("")
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type='text'
                    placeholder='Enter todo.......'
                    className='border-2 border-black outline-none px-1 py-2 text-violet-800'
                />
                <button
                    type='submit'
                    className='bg-violet-500 px-3 py-2.5 text-white rounded-tr-md rounded-br-md'
                >Add</button>
            </form>
        </>
    )
}

export default TodoForm