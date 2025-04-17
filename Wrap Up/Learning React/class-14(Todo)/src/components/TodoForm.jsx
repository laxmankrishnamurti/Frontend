import { useState } from "react"
import { useTodo } from "../context"

function Input() {

    const [todo, setTodo] = useState("")
    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault()

        if (!todo) return

        addTodo({ id: Date.now(), todo: todo, completed: false })
        setTodo("")
    }

    return (
        <>
            <form
                onSubmit={add}
                className='w-full flex'>
                <input
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    type='text'
                    placeholder='Enter todo.......'
                    className='p-2 rounded-bl-md rounded-tl-md outline-none border-2 w-full' />

                <button type='submit' className='bg-green-400 px-8 py-2 rounded-br-md rounded-tr-md'>Add</button>
            </form>
        </>
    )
}

export default Input