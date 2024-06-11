import { useContext, createContext } from "react";

export const TodoContext = createContext(username)

export const TodoContextProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}