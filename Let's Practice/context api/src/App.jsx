import CounterButton from "./components/CounterButton"
import { CountContext } from './context/CountContext'
import { useContext } from "react"

function App() {

  const { count, setCount } = useContext(CountContext)

  return (
    <>
      <h1 className="bg-red-400 text-white font-bold text-2xl p-4 text-center">Context API in React</h1>
      <h3>Count value is : {count}</h3>
      <CounterButton />
    </>
  )
}

export default App

