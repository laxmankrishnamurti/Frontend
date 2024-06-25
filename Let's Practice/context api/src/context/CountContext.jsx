import { createContext, useContext } from 'react'

export const CountContext = createContext({
    count: null,
    name: null,
    changeName: function (value) {
        this.name = value
    }
})

export const CountProvider = CountContext.Provider

export const useCount = () => {
    return useContext(CountContext)
}