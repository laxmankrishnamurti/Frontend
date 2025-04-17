import { useState } from 'react'
import { useEffect } from 'react'
import SearchList from './SearchList'
import './App.css'

function App() {
  const [country, setCountry] = useState()
  const [inputValue, setInputValue] = useState('')
  const [searchCountry, setSearchCountry] = useState([])



  useEffect(() => {
    const countryList = ["India", "China", "Russia", "Pakistan", "Nepal", "Bangladesh", "Srilanka", "Afganistan", "Iran", "Irak", "United arab emirat", "Isreal", "Gaza", "Pelestine", "Seriya", "England", "Franch", "Finland", "Turky", "Japan", "Taiwan", "Ukraine", "Tanjaniya", "Bhutan", "South korea", "North korea", "Myanmar", "Burundi", "Egypt", "Kuwait", "United states of america", "Germany", "Canada", "Australia", "Newzland", "South africa", "Katar", "Spain", "Lebnan", "Turkmenistan", "Tibbat"]

    setCountry(countryList)
  }, [])

  useEffect(() => {
    if (inputValue.length > 0) {
      const filteredCountry = country.filter((count) => {
        return count.toLowerCase().includes(inputValue.toLowerCase())
      })
      console.log(filteredCountry)
      setSearchCountry(filteredCountry)
    } else {
      setSearchCountry([])
    }
  }, [inputValue, country])


  return (
    <>
      <h1>Searchable LIst</h1>

      <form onSubmit={e => e.preventDefault()}>
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className='border-black border-2 rounded-md px-2 py-2'
        />
      </form>
      <div className='mt-8'>
        <p className='mb-4'>Country List - {searchCountry.length}</p>
        {searchCountry.length > 0 && <SearchList searchCountry={searchCountry} />}
      </div >
    </>
  )
}

export default App








// try-01 
// country.map((count) => {
//   let start = count.startsWith(inputValue)
//   let end = count.endsWith(inputValue)
//   if (start || end) {
//     if (!searchCountry.includes(count)) {
//       setSearchCountry([...searchCountry, count])
//     }
//   }
//   return
// })


//try-02

// country.map((count) => {
//   let countStr = count.split("")
//   let inputStr = inputValue.split("")
//   inputStr.map((inputChar) => {
//     if (countStr.includes(inputChar)) {
//       if (!searchCountry.includes(count)) {
//         setSearchCountry([...searchCountry, count])
//       }
//     }
//   })
// })


//try-03

// useEffect(() => {
//   if (inputValue.length > 0) {

//     country.map((count) => {
//       let checkStartingPosition = count.startsWith(inputValue)
//       let checkEndPosition = count.endsWith(inputValue)

//       if (checkStartingPosition || checkEndPosition) {
//         if (!searchCountry.includes(count)) {
//           setSearchCountry([...searchCountry, count])
//         }
//       }
//     })

//     console.log("searchCountry ::", searchCountry)
//   }
//   return
// }, [inputValue])

//try-04


// function handleSearch() {
//   if (inputValue.length > 0) {

//     country.map((count) => {
//       let checkStartingPositionForUpper = count.startsWith(inputValue)
//       let checkEndPositionForUpper = count.endsWith(inputValue)
//       let checkStartingPositionForLower = count.startsWith(inputValue.toLowerCase())
//       let checkEndPositionForLower = count.endsWith(inputValue.toLowerCase())

//       if (checkStartingPositionForUpper || checkEndPositionForUpper || checkStartingPositionForLower || checkEndPositionForLower) {
//         if (!searchCountry.includes(count)) {
//           setSearchCountry([...searchCountry, count])
//         }
//       }
//     })

//     console.log("searchCountry ::", searchCountry)
//   }
//   return
// }