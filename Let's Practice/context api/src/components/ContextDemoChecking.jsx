import React, { useCallback, useState } from 'react'
import { useCount, CountProvider } from '../context/CountContext'

function ContextDemoChecking() {

    let [name, setName] = useState("")
    let { count } = useCount()

    const saveName = useCallback(() => {
        localStorage.setItem("name", JSON.stringify(name))
        let getValue = JSON.parse(localStorage.getItem("name"))
        console.log("saved value is : ", getValue)
        console.log("type of getValue is : ", typeof (getValue))
    }, [name])

    return (
        <CountProvider value={{ count, name }}>
            <h1 className='text-2xl ml-4 mt-6'>Context value from Demo checking which is wrapped in a seperate context Provider :: CountProvider-02(Context-demo-checking)</h1>
            <div className='ml-4 mt-4'>
                <input
                    className='border-2 border-black rounded-md'
                    type='text'
                    onChange={(e) => (setName(e.target.value))}
                />
                <p>Count from demo checking : {count}</p>
                <p>name from demo checking : {name}</p>
                <button onClick={saveName} className='bg-pink-400 px-4 py-2 rounded-md'>Save</button>
            </div>
        </CountProvider>
    )
}

export default ContextDemoChecking