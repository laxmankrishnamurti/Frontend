import { useSelector, useDispatch } from "react-redux"
import { addUser, removeUser } from "./features/testing"
import { useState } from "react"
import User from "./components/User"

function App() {

  const [inputUser, setInputUser] = useState("")

  const users = useSelector((state) => {
    return state.users
  })

  const dispatch = useDispatch()

  const add = () => {
    dispatch(addUser({
      id: Date.now(),
      username: inputUser
    }))
    setInputUser("")
  }

  return (
    <>
      <h1 className="bg-violet-600 text-white p-4 text-center text-2xl font-bold">Introduction to Redux toolkit</h1>
      <div className="ml-4">
        <form
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            value={inputUser}
            onChange={(e) => setInputUser(e.target.value)}
            className="border-2 border-black block mt-4 p-2"
          />

          <button
            onClick={add}
            className="px-3 py-2 bg-green-600 mt-4 mb-4 rounded-md text-white"
          >Add User</button>
        </form>
        <p>Current state is : {users.length}</p>
        <p>User lis :: </p>
        {users.length > 0 ? <div className="flex justify-between my-4 bg-slate-600 px-3 py-2 rounded-md mr-3 flex-wrap gap-4 text-white text-sm">
          {
            users.map((user) => <User key={user.id} user={user} />)
          }
        </div> : ""}
      </div>
    </>
  )
}

export default App
