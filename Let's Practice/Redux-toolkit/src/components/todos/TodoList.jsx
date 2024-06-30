import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../../features/todoSlice'

function TodoList() {

    const [noEdit, setNoEdit] = useState(true)
    const todoList = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    return (
        <>
            {
                todoList.map((todo) => (
                    <li
                        className='list-none flex justify-between w-4/6 bg-slate-500 my-4 p-2 rounded-md'
                        key={todo._id}>
                        <input
                            className={`${noEdit ? "bg-transparent" : "border-2 border-white"}`}
                            type='text'
                            value={todo.todoText}
                            onChange={(e) => dispatch()}
                            disabled={noEdit}
                        />
                        <div>
                            <button
                                onClick={() => (setNoEdit((prev) => !prev))}
                            >Edit</button>
                            <button
                                className='pl-4'
                                onClick={() => {
                                    return dispatch(removeTodo(todo._id))
                                }}
                            >Remove</button>
                        </div>
                    </li>
                ))
            }
        </>
    )
}

export default TodoList