import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: []
})

export const TodoContextProvider = TodoContext.Provider

export function useTodo() {
    return useContext(TodoContext)
}
