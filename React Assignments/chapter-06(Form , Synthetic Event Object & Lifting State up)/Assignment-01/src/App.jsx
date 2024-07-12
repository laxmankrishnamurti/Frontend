import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [countryProps, setCountryProps] = useState([])
  const [country, setCountry] = useState([])
  const [name, setName] = useState('')
  const [code, setCode] = useState('')

  function handleAdd() {
    const newCountry = {
      [name]: code
    }
    setCountry([...country, { ...newCountry }])
    setName("")
    setCode("")
  }

  useEffect(() => {
    country.map((count) => {
      for (let key in count) {
        if (countryProps.includes(key)) {
          return
        } else {
          setCountryProps([...countryProps, key])
        }
      }
    })
  }, [country])

  return (
    <>
      <div>
        <h1 className='text-4xl mb-8'>Dropdown menu</h1>
        <div>
          <div className='mb-4'>
            <label htmlFor='name' className='mr-4'>Enter country name</label>
            <input
              type='text'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='border-2 border-black px-2 py-1 outline-pink-500 rounded-md'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='code' className='mr-4'>Enter country Code</label>
            <input
              type='text'
              id='code'
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className='border-2 border-black px-2 py-1 outline-pink-500 rounded-md'
            />
          </div>
          <div className='mb-8'>
            <button
              className='w-64 bg-black text-white px-4 py-2 rounded-md'
              onClick={handleAdd}
            >Add</button>
          </div>
          <div>
            {country.length > 0 ? (<select onClick={(e) => console.log(e.target.value)} className='w-40 px-4 py-2 bg-green-400 rounded-md'>
              {countryProps.map((prop) => {
                return <option key={prop} name={prop} value={country.map(count => count[prop])} > {country.map(count => count[prop])}</option>
              })}
            </select>) : null}
          </div>
        </div>
      </div >
    </>
  )
}

export default App


// {
//   countryProps.map((prop) => (
//     <option key={prop} name={prop} value={optionValue.map((value) => value)}>{optionValue.map(value => value)}</option>
//   ))
// }
