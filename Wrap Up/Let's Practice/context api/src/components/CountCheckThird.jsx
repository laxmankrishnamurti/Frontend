import React, { useCallback, useEffect, useState } from 'react'
import { useCount, CountProvider } from '../context/CountContext'

function CountCheckThird() {

    let [name, setName] = useState("")
    let { count } = useCount()
    const [users, setUsers] = useState([])

    const saveUsers = useCallback(() => {
        const user = {
            _id: Date.now(),
            "name": name
        }
        setUsers([...users, user])
    }, [name])

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users))
    }, [users])

    return (
        <CountProvider value={{ count, name }}>
            <h1 className='text-2xl ml-4 mt-6'>Context value from Demo checking which is wrapped in a seperate context Provider :: CountProvider-03(Third)</h1>
            <div className='ml-4 mt-4'>
                <input
                    className='border-2 border-black rounded-md'
                    type='text'
                    onChange={(e) => (setName(e.target.value))}
                />
                <p>Count from demo checking : {count}</p>
                <p>name from demo checking : {name}</p>
                <button onClick={saveUsers} className='bg-pink-400 px-4 py-2 rounded-md'>Save Users</button>
            </div>
        </CountProvider>
    )
}

export default CountCheckThird