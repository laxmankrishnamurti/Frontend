import { useState } from 'react'
import { Resume } from './components/index'
import resumeData from './data/resumeData'
import { useEffect } from 'react'

function App() {

  const [data, setData] = useState([])
  const [theme, setTheme] = useState('white')

  useEffect(() => {
    setData(resumeData)
  }, [])

  function updateContact(id, value) {
    resumeData[0].contact.phone = value.phone
    resumeData[0].contact.email = value.email
  }

  function handleTheme() {
    if (theme == 'white') {
      setTheme('dark')
    } else {
      setTheme('white')
    }
  }

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
            data.map((rmData) => (
              <Resume key={`resume-${data.id}`} data={rmData} updateContact={updateContact} />
            ))
          }

        </div>
      </div>
    </>
  )
}

export default App
