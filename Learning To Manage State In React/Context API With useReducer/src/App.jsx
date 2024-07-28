import { useEffect, useState, useReducer } from "react";
import { Header, InputForm, TodoList, Footer } from "./components/index";
import { TodoProvider, useTodo } from "./Context/index.context";

function App() {
  // let [todos, setTodos] = useState([]);

  const [todoList, dispatch] = useReducer(todoReducer, []);

  function todoReducer(todoList, action) {
    switch (action.type) {
      case "ADD":
        return [{ ...action.payload }, ...todoList];

      case "DELETE":
        todoList = todoList.filter((todo) => todo._id !== payload);
        return todoList;

      case "UPDATE":
        todoList = todoList.map((todo) =>
          todo._id === payload.id
            ? { ...todo, todoMessage: payload.updatedMessage }
            : todo
        );
        return todoList;

      case "COMPLETED":
        todoList = todoList.map((todo) =>
          todo._id === payload ? { ...todo, completed: !todo.completed } : todo
        );
    }
  }

  function addTodo(message) {
    dispatch({
      type: "ADD",
      payload: {
        _id: Date.now(),
        todoMessage: message,
        completed: false,
      },
    });
  }

  function updateTodo(id, message) {}

  function deleteTodo(id) {}

  function completeTodo(id) {}

  // useEffect(() => {
  //   const getTodoFromLocalStorage = JSON.parse(localStorage.getItem("todos"));

  //   if (getTodoFromLocalStorage && getTodoFromLocalStorage.length > 0) {
  //     setTodos(getTodoFromLocalStorage);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  return (
    <>
      <TodoProvider
        value={{ todoList, addTodo, updateTodo, deleteTodo, completeTodo }}
      >
        <Header />
        <InputForm dispatch={dispatch} />
        <Footer />
        {todoList.map((todo) => (
          <TodoList key={todo._id} todo={todo} dispatch={dispatch} />
        ))}
      </TodoProvider>
    </>
  );
}

export default App;
