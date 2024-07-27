import { createContext, useContext } from "react";

export const TodoContext = createContext((todos = []));

export default function useTodo() {
  return useContext(TodoContext);
}
