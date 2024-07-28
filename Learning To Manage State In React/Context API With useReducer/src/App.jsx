import { useEffect, useState, useReducer } from "react";
import { Header, InputForm, TodoList, Footer } from "./components/index";
import { TodoProvider, useTodo } from "./Context/index.context";

function App() {
  let [todos, setTodos] = useState([]);

  const [todo, dispatch] = useReducer(todoReducer, todos);

  function addTodo(todo) {
    setTodos((prevTodo) => [{ ...todo }, ...prevTodo]);
    //short syntax
    setTodos([{ ...todo }, ...todos]);
  }

  function updateTodo(id, message) {
    todos = todos.map((todo) =>
      todo._id === id ? { ...todo, todoMessage: message } : todo
    );
    setTodos(todos);
  }

  function deleteTodo(id) {
    todos = todos.filter((todo) => todo._id !== id);
    setTodos(todos);
  }

  function completeTodo(id) {
    setTodos((prevTodo) =>
      prevTodo.map((todoList) =>
        todoList._id === id
          ? { ...todoList, completed: !todoList.completed }
          : todoList
      )
    );
  }

  useEffect(() => {
    const getTodoFromLocalStorage = JSON.parse(localStorage.getItem("todos"));

    if (getTodoFromLocalStorage && getTodoFromLocalStorage.length > 0) {
      setTodos(getTodoFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <TodoProvider
        value={{ todos, addTodo, updateTodo, deleteTodo, completeTodo }}
      >
        <Header />
        <InputForm />
        <Footer />
        {todos.map((todo) => (
          <TodoList key={todo._id} todo={todo} />
        ))}
      </TodoProvider>
    </>
  );
}

export default App;
