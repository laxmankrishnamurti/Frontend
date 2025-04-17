import Child from './components/Child'
import './App.css'

function App() {

  return (
    <>
      <Child onPlay={() => console.log("function received successfully")} />
    </>
  )
}

export default App
