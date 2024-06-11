import { useState } from "react"
import { TodoContextProvider } from "./context/todo/TodoContext"

function App() {

  const [username, setUsername] = useState()

  return (
    <>
      <TodoContextProvider value={username}>
        <h1 className='bg-emerald-600 text-center text-white text-2xl p-4 font-bold shadow-black shadow'>Context API</h1>

        <p>Username is : {username ? "Harshad" : "Sonu"}</p>
      </TodoContextProvider>
    </>
  )
}

export default App
