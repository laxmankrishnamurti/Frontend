import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../../features/todoSlice'

function TodoList() {

    const todoList = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    return (
        <div>
            {todoList.map((todo) => (
                <li key={todo._id}>
                    <input
                        type='text'
                        value={todo.todoText}
                        readOnly
                    />
                    <button
                        onClick={() => {
                            return dispatch(removeTodo(todo._id))
                        }}
                    >Remove</button>
                </li>
            ))}
        </div>
    )
}

export default TodoList