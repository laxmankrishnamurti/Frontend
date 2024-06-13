import { useEffect, useState } from "react"
import { TodoProvider } from './context'
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prevTodo) => [{ ...todo }, ...prevTodo])
  }

  const updateTodo = (id, todo) => {
    setTodos((prevTodo) => prevTodo.map((todoList) => (todoList.id === id ? todo : todoList)))
  }

  const deleteTodo = (id) => {
    setTodos((prevTodo) => (prevTodo.filter((todoList) => todoList.id !== id)))
  }

  const toggleComplete = (id) => {
    setTodos((prevTodo) => prevTodo.map((todoList) => todoList.id === id ? { ...todoList, completed: !todoList.completed } : todoList))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (

    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-blue-900 w-full">
        <h1 className='p-4 text-2xl font-bold text-center text-white shadow-white shadow'>Todo App</h1>
        <div className="w-5/6 mx-auto my-4">
          <div className="w-4/5 mx-auto">
            <TodoForm />
          </div>
          <div className="w-4/5 mx-auto mt-4">
            {
              todos.map((todo) => {
                return <div className="mb-2" key={todo.id}><TodoItem todo={todo} /></div>
              })
            }
          </div>
        </div>
      </div>
    </TodoProvider>

  )
}

export default App
