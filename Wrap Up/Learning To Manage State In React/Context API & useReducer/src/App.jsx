import { useEffect, useReducer, useState } from 'react';
import { InputForm, TodoList } from './components/index.components'
import { TodoContextProvider, useTodo } from './context/TodoContext';

const initialState = () => {
  const fetchTodoFromLocalStorage = localStorage.getItem("todos");
  return fetchTodoFromLocalStorage ? JSON.parse(fetchTodoFromLocalStorage) : []
}

function App() {

  let [todos, dispatch] = useReducer(todoReducer, [], initialState)

  function todoReducer(todos, action) {
    switch (action.type) {
      case "ADD":
        return [...todos, action.payload]

      case "DELETE":
        todos = todos.filter((todo) => todo._id !== action.payload)
        return todos;

      case "COMPLETE":
        todos = todos.map((todo) => todo._id === action.payload ? { ...todo, isCompleted: !todo.isCompleted } : todo)
        return todos;

      case "EDIT":
        todos = todos.map((todo) => todo._id === action.payload.id ? { ...todo, todoMessage: action.payload.todoMessage } : todo)
        return todos;

      default:
        return todos;
    }
  }

  function handleAddTodo(todoMessage) {
    const newTodo = {
      _id: Date.now(),
      todoMessage: todoMessage,
      isCompleted: false
    }

    dispatch({
      type: "ADD",
      payload: newTodo
    })
  }

  function handleDeleteTodo(id) {
    dispatch({
      type: "DELETE",
      payload: id
    })
  }

  function handleComplete(id) {
    dispatch({
      type: "COMPLETE",
      payload: id
    })
  }

  function handleEditTodo(id, todoMessage) {
    dispatch({
      type: "EDIT",
      payload: {
        id: id,
        todoMessage: todoMessage
      }
    })
    console.log("todos from edit todo :: ", todos)
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <TodoContextProvider value={{ todos }}>
        <h1 className="bg-violet-500 p-4 text-center text-white text-3xl font-bold">Todo Application</h1>
        <InputForm handleAddTodo={handleAddTodo} />
        <div className='w-3/5 mx-auto'>
          {
            todos.map((todo) => (
              <TodoList key={todo._id} todo={todo} handleDeleteTodo={handleDeleteTodo} handleComplete={handleComplete} handleEditTodo={handleEditTodo} />
            ))
          }
        </div>
      </TodoContextProvider>
    </>
  );
}

export default App;
