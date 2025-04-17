import { useState } from "react"

function App() {
  let [color, setColor] = useState('black')

  let body = document.body;
  body.style.backgroundColor = color;
  body.style.transition = 'all .3s ease';

  return (
    <>
      <div className="w-1/2 mx-auto my-2 h-10 flex justify-evenly">
        <button className="bg-orange-400 p-1 rounded-full text-black w-1/6"
          onClick={() => setColor('orange')}
        >Orange</button>
        <button className="bg-red-400 p-1 rounded-full text-black w-1/6"
          onClick={() => setColor('red')}
        >Red</button>
        <button className="bg-yellow-400 p-1 rounded-full text-black w-1/6"
          onClick={() => setColor('yellow')}
        >Yellow</button>
        <button className="bg-blue-400 p-1 rounded-full text-black w-1/6"
          onClick={() => setColor('blue')}
        >Blue</button>
        <button className="bg-pink-500 p-1 rounded-full text-black w-1/6"
          onClick={() => setColor('pink')}
        >Pink</button>
      </div>
    </>
  )
}

export default App
