import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  completeTodo: (id) => {},
});

export const useTodo = function () {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
