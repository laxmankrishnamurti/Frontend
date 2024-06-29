import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../features/todoSlice'

function TodoInputForm() {

    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()

        if (!input) return

        dispatch(addTodo(input))
        setInput("")
    }

    const todoList = useSelector((state) => state.todos)

    return (
        <>
            <form
                onSubmit={submitHandler}
                className='w-4/6 flex h-10'
            >
                <input
                    className='border-2 border-black w-full rounded-tl-md rounded-bl-md px-2'
                    type='text'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    className='bg-purple-400 px-8 py-2 text-white font-bold rounded-tr-md rounded-br-md '
                >Add
                </button>
            </form>
        </>
    )
}

export default TodoInputForm