import React, { useState } from 'react'
import { useContext } from 'react'
import UserContext from '../../context/UserContext/UserContext'

function Login() {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const { setUser } = useContext(UserContext)

    const handleSubmit = () => {
        setUser({ username, password })
    }

    return (
        <>
            <div className='bg-slate-500 w-1/2 mx-auto mt-4 flex justify-center'>
                <form
                    className='flex flex-col items-center w-1/2'
                    onSubmit={(e) => {
                        e.preventDefault()
                    }}
                >
                    <input
                        className='border-2 border-black p-2 mt-4 rounded outline-none'
                        type='text'
                        placeholder='Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        className='border-2 border-black p-2 mt-4 rounded outline-none'
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type='submit' onClick={handleSubmit} className='w-1/10 bg-blue-600 mt-4 px-16 py-3 mb-4 rounded-md text-white hover:shadow-md hover:shadow-black transition-all ease-in duration-150'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Login