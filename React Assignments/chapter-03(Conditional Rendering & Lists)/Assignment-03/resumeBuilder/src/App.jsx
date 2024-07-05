import { useState } from 'react'
import { Resume } from './components/index'
import resumeData from './data/resumeData.json'

function App() {

  const [theme, setTheme] = useState('white')

  function handleTheme() {
    if (theme == 'white') {
      setTheme('dark')
    } else {
      setTheme('white')
    }
  }

  // {theme == "white" ? "🔆" : "🌑"}

  return (
    <>
      <div className={`${theme == "white" && "bg-gray-300"} ${theme == "dark" && "bg-black"}`}>
        <button
          onClick={handleTheme}
          className={`${theme == "dark" && "bg-red-300 border-2 border-white"} absolute right-8 top-4 px-8 py-2 border-2 rounded-full border-black`}>
          {theme}
        </button>
        <div className='flex flex-col gap-8 justify-center items-center pt-4 w-3/5 mx-auto'>
          {
            resumeData.map((data) => (
              <Resume key={`resume-${data.id}`} data={data} />
            ))
          }

        </div>
      </div>
    </>
  )
}

export default App
