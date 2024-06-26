import Header from './components/header/Header'
import TodoInputForm from './components/input/TodoInputForm'
import { useSelector } from 'react-redux'
import TodoList from './components/todos/TodoList'

function App() {

  const todoList = useSelector(state => state.todos)
  console.log("todoList : ", todoList)


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
