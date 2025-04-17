import { useCallback, useEffect, useRef, useState } from "react"

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordGenerator = useCallback(() => {
    let password = ""
    let passwordString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      passwordString += "0123456789";
    }

    if (charAllowed) {
      passwordString += "@#$%&?!";
    }

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * passwordString.length + 1);
      password += passwordString.charAt(index);
    }

    setPassword(password)

  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, charAllowed, numberAllowed, setPassword])

  const passwordReference = useRef(null);

  const copyToClipboard = useCallback(() => {
    passwordReference.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-orange-300 text-center'>Password generator</h1>
        <div className="my-4 flex shadow rounded-lg overflow-hidden mb-4">

          <input
            className="outline-none w-full py-1 px-3"
            type="text"
            placeholder="Password"
            value={password}
            ref={passwordReference}
            readOnly
          />

          <button onClick={copyToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
        </div>
        <div className="flex gap-5">
          <div>
            <input
              type="range"
              min={8}
              max={30}
              id="passwordRange"
              className="mr-1"
              value={length}
              onChange={(e) => { setLength(e.target.value) }}
            />
            <lable htmlFor="passwordRange">Range {length}</lable>
          </div>
          <div>
            <input
              type="checkbox"
              className="mr-1"
              id="number"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="number">Number</label>
          </div>
          <div>
            <input
              type="checkbox"
              className="mr-1"
              id="character"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="character">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
