import { useState } from "react"
import Profile from "./components/Profile"

function App() {

  const [username, setUsername] = useState("")
  const [count, setCount] = useState(0)

  const states = ["Bihar", "Jharkhand", "Delhi", "Utter Pradesh", "Udisha", "Rajasthan", "Maharasthra", "Gujarat", "Shimla"]

  // const users = ["Jitendra yadav", "Rani devi", "Laxman krishnamurti", "Anjali kumari", "Fruti kumari", "Vikram Kumar"]

  return (
    <>
      <h1 className="shadow shadow-black p-4 text-center text-xl">Reusable Component</h1>
      <Profile
        type={"text"}
        value={username}
        changeInputState={setUsername}
      // stateOptions={states}
      // selectLabel={"Select your state"}
      />

      <Profile
        type={"number"}
        value={count}
        changeInputState={setCount}
      />

    </>
  )
}

export default App
