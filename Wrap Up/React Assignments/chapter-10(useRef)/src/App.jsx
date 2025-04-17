import { useRef, useState } from 'react'

function App() {

  const [inputMsg, setInputMsg] = useState('')
  const [isSending, setIsSending] = useState(false)
  let eventId = useRef(null)

  function handleMessage() {
    setIsSending(prev => !prev)
    eventId.current = setTimeout(() => {
      alert("Message send successfully")
      setIsSending(prev => !prev)
    }, 3000);
  }

  function stopMessage() {
    setIsSending(false)
    clearTimeout(eventId.current)
  }

  return (
    <>
      <h1 className='bg-violet-400 p-4 text-center text-3xl font-bold'>useRef Hook</h1>
      <div>
        <input
          type='text'
          value={inputMsg}
          onChange={(e) => setInputMsg(e.target.value)}
          className='border-2 border-black my-4 ml-4'
        />
        <button
          onClick={handleMessage}
          className='px-4 py-1 bg-green-400 rounded-md ml-4'>{isSending ? "Sending..." : "Send"}</button>
        {isSending && (
          <button
            onClick={stopMessage}
            className='px-4 py-1 bg-green-400 rounded-md ml-4'>Undo</button>
        )}
      </div>
    </>
  )
}

export default App
