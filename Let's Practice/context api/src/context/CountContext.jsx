import { createContext, useState } from 'react'

export const CountContext = createContext(null)

export const CountProvider = (props) => {
    const [count, setCount] = useState(0)
    return (<CountContext.Provider value={{ count, setCount }}>
        {props.children}
    </CountContext.Provider>)
}