import { useRef, useState } from 'react'

function App() {
  const [input, setInput] = useState('')
  const refValue = useRef()

  function handleReference() {
    console.log("refObject :  ", refValue)
    console.log("refValue is : ", refValue.current.value)
  }


  return (
    <>
      <h1 className='bg-violet-400 p-4 text-center text-3xl font-bold'>useRef Hook</h1>
      <div>
        <input
          ref={refValue}
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Enter your name'
          className='border-2 outline-pink-500 border-black block my-4'
        />
        <button
          onClick={handleReference}
          className='px-4 py-2 bg-pink-400 rounded-md '
        >Check Reference Vlaue </button>
      </div>
    </>
  )
}

export default App
