import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => {
                return todo.id !== action.payload
            })
        },
        updateTodo: (state, action) => {
            console.log("action value is : ", action)
            console.log("all todos : ", state)
            const todo = state.todos.filter((todo) => {
                console.log("Todo is  : ", todo)
                return todo.id === action.payload
            })
            console.log("Todo is : ", todo)
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer