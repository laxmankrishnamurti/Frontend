import { useEffect, useState } from 'react'
import { useUserContext } from './context/userContext'

import RenderUser from './components/RenderUser'

function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')

  const fetchAllData = useUserContext()

  function handleAddUser(e) {
    e.preventDefault()

    let newUserObject = {
      _id: `${Date.now()}`,
      name: name,
      age: age,
      email: email
    }

    fetchAllData.addUser(newUserObject)
    setName('')
    setAge('')
    setEmail('')
  }

  return (
    <>
      <h1 className='bg-violet-500 p-4 text-center font-bold text-3xl text-white'>Context API</h1>
      <form
        onSubmit={handleAddUser}
        className='mt-8 ml-8'>
        <input
          type='text'
          placeholder='Enter your name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='border-2 border-red-500 px-2 py-1 outline-none rounded-md block mb-1'
        />
        <input
          type='text'
          placeholder='Enter your age'
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className='border-2 border-red-500 px-2 py-1 outline-none rounded-md block mb-1'
        />
        <input
          type='text'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='border-2 border-red-500 px-2 py-1 outline-none rounded-md block mb-1'
        />
        <button type='submit' className='bg-red-400 px-24 py-2 rounded-md ml-1 mt-4'>Add User</button>
      </form>
      <div className='mt-8'>
        <RenderUser />
      </div>
    </>
  )
}

export default App
