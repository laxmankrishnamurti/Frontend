import { useState } from "react"
import CounterButton from "./components/CounterButton"
import { CountProvider, useCount } from './context/CountContext'
import ContextValue from "./components/ContextValue"
import ContextDemoChecking from "./components/ContextDemoChecking"
import CountCheckThird from "./components/CountCheckThird"

function App() {

  let [count, setCount] = useState(0)
  let [name, setName] = useState("")

  function add() {
    if (count >= 0) {
      count += 1
      setCount(count)
    } else {
      return
    }
  }

  function subtract() {
    if (count > 0) {
      count -= 1
      setCount(count)
    } else {
      window.alert("Count should not be a Negative integer")
    }
  }

  return (
    <>
      <h1 className="bg-red-400 text-white font-bold text-2xl p-4 text-center">Context API in React</h1>
      <CountProvider value={{ count, name }}>
        <h3 className="ml-4">Count value is : {count}</h3>
        <CounterButton
          value="Increament"
          bgColor="bg-green-400"
          onClick={add}
        />
        <CounterButton
          value="Decreament"
          bgColor="bg-red-400"
          onClick={subtract}
        />
        <input
          className="border-2 border-black ml-4 mt-4 px-2 py-1 rounded-md"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p className="ml-4 mt-4">name value is : {name}</p>
        <ContextValue
          count={count}
          name={name}
        />
        <ContextDemoChecking />
        <CountCheckThird />
      </CountProvider>
    </>
  )
}

export default App

