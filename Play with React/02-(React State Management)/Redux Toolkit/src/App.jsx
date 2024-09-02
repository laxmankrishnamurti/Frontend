import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByValue } from './features/counter/counterSlice'
import './App.css'

function App() {

  const data = useSelector((state) => state.counter.value)
  const dispath = useDispatch()

  function handleInputDispatch(e) {
    e.preventDefault()
    dispath(incrementByValue(Number(e.target[0].value)))
    e.target[0].value = ""
  }

  return (
    <>
      <p>Data : {data}</p>
      <button onClick={() => dispath(increment())} className='bg-violet-400 px-4 py-2 rounded-md mx-2'>Increase</button>
      <button onClick={() => dispath(decrement())} className='bg-violet-400 px-4 py-2 rounded-md mx-2'>Decrease</button>
      <form onSubmit={handleInputDispatch}>
        <input type='text' placeholder='Input value' className='border-pink-400 border-2 px-2 py-1 rounded-md' />
        <button type='submit' className='bg-violet-400 px-4 py-2 rounded-md mx-2'>Increase By Input valule</button>
      </form >
    </>
  )
}

export default App
