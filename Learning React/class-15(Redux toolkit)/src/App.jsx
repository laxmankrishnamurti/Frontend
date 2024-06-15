import TodoForm from "./components/TodoForm"
import TodoItems from "./components/TodoItems"

function App() {

  return (
    <>
      <h1 className='bg-violet-600 text-white p-4 text-center text-2xl font-bold'>Introduction to Redux toolkit</h1>
      <div className="mt-4 ml-4 w-4/5 flex flex-col">
        <TodoForm />
        <TodoItems />
      </div>
    </>
  )
}

export default App
