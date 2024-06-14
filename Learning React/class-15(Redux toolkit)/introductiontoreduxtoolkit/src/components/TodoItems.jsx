import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function TodoItems() {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (
        <>
            {
                todos.map((todo) => {
                    return (
                        <li key={todo.id} className='list-none mt-2 flex justify-between bg-slate-400 p-4'>
                            {todo.text}
                            <button
                                className='text-2xl bg-red-500 px-2 rounded-md text-white hover:shadow-black transition-all duration-200 ease-out shadow-md'
                                onClick={() => {
                                    return dispatch(removeTodo(todo.id))
                                }}
                            >X</button>
                            <button
                                className='text-2xl bg-red-500 px-2 rounded-md text-white hover:shadow-black transition-all duration-200 ease-out shadow-md'
                                onClick={() => {
                                    return dispatch(updateTodo(todo.id))
                                }}
                            >✔</button>
                        </li>
                    )
                })
            }
        </>
    )
}

export default TodoItems