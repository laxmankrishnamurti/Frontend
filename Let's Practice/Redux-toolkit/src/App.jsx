import Header from './components/header/Header'
import TodoInputForm from './components/input/TodoInputForm'
import TodoList from './components/todos/TodoList'
import { useSelector } from 'react-redux'

function App() {

  const todoList = useSelector((state) => state.todos)
  console.log("todoList from App component : ", todoList)

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
