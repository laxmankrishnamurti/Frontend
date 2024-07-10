import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const newDate = setInterval(() => {
      setDate(new Date())
    }, 1000);

    return () => clearInterval(newDate);  //Cleanup interval on component unmount
  }, [])

  function getTimeFormat(time) {
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    if (seconds == 0) {
      console.log("1 minute is completed");
      // window.alert("1 Minute is completed");
    }

    return `${hours} : ${minutes} : ${seconds}`
  }

  return (
    <>
      <div>
        <h1>Time</h1>
        <p>{getTimeFormat(date)}</p>
      </div>
    </>
  )
}

export default App
