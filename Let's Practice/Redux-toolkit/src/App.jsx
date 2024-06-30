import Header from './components/header/Header'
import TodoInputForm from './components/input/TodoInputForm'
import TodoList from './components/todos/TodoList'

function App() {

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
