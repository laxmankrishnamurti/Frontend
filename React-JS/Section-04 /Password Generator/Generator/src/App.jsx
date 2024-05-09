import { useState, useCallback, useEffect, useRef } from "react"

function App() {
  const [length, setLength] = useState(6);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = useCallback(() => {          //Callback memorize function
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let getPass = '';

    if (number) {
      str += '0123456789';
    }

    if (char) {
      str += '@#$%&';
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      getPass += str.charAt(char);
    }

    setPassword(getPass);

  }, [length, number, char, setPassword])   //Dependencies :: Only for Optimization

  useEffect(() => {     //Synchronize with effect.
    generatePassword()
  }, [length, number, char, generatePassword])    //Dependencies :: For user action

  //useRef Hook

  const passwordRef = useRef(null);   //default value : null

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()

    //Define Selection Range
    passwordRef.current?.setSelectionRange(0, 10)

    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className="max-w-md mx-auto bg-slate-600 text-orange-500 rounded px-4 py-3 my-8">
        <h1 className="text-center text-white my-3 text-2xl">Password Generator</h1>
        <div className="w-full flex mb-4">
          <input
            className="w-full outline-none py-1 px-3"
            type="text"
            placeholder="Password"
            value={password}
            ref={passwordRef}
            readOnly
          />
          <button
            className="bg-blue-700 text-white outline-none px-3 py-0.5"
            onClick={copyPassword}
          >Copy</button>
        </div>

        <div className='flex justify-between'>
          <div className='flex justify-between'>
            <input
              type='range'
              min={6}
              max={30}
              value={length}
              className='cursor-pointer mr-1'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length : {length}</label>
          </div>
          <div>
            <input
              type='checkbox'
              id="numbers"
              className="m-1"
              defaultChecked={number}
              onChange={() => {
                setNumber((prev) => !prev)
              }}
            />
            <label className='text-orange-500' htmlFor="numbers">Numbers</label>
          </div>
          <div>
            <input
              type='checkbox'
              id="char"
              className="m-1"
              defaultChecked={char}
              onChange={() => {
                setChar((prev) => !prev)
              }}
            />
            <label htmlFor="char">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
