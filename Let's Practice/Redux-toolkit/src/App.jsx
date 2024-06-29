import Header from './components/header/Header'
import TodoInputForm from './components/input/TodoInputForm'
import TodoList from './components/todos/TodoList'
import { useSelector } from 'react-redux'
import { updateTodo } from './features/todoSlice'

function App() {

  const todoList = updateTodo()
  console.log("todoList by updateTodo reducer : ", todoList)

  return (
    <>
      <Header />
      <div className='w-full mx-auto mt-4 flex flex-col justify-center items-center'>
        <TodoInputForm />
        <TodoList />
      </div>
    </>
  )
}

export default App
