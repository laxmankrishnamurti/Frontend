import { useState } from "react"

function App() {
  const [number, setNumber] = useState(0)
  const [username, setUsername] = useState("")
  const [state, setState] = useState("")

  return (
    <>
      <h1 className="bg-cyan-600 text-white text-center p-4 text-2xl shadow shadow-black">Understanding React</h1>
      <div className="bg-amber-200
      -300 h-screen">

        <form

          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="number"
            className="border-black mr-2 p-2 rounded-md"
            value={number}
            onChange={(e) => setNumber(() => e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter your username"
            className="mr-2 p-2 rounded-md"
            value={username}
            onChange={(e) => setUsername(() => e.target.value)}
          />

          <select value={state} onChange={(e) => setState(() => e.target.value)}>
            <option>Select your state</option>
            <option>Bihar</option>
            <option>Gujarat</option>
            <option>Maharastra</option>
            <option>Delhi</option>
            <option>Utter pradesh</option>
            <option>Himachal Pradesh</option>
            <option>Shimla</option>
            <option>Assam</option>
            <option>Rajasthan</option>
            <option>Kasmir</option>
            <option>Shrinagar</option>
            <option>Kerala</option>
          </select>

          {console.log("User state : ", state)}

          <button type="submit" className="bg-pink-400 text-white px-6 py-2 rounded-md hover:bg-black transition-all ease-in duration-200 mt-2">Submit</button>
        </form>
      </div>
    </>
  )
}

export default App