import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)
  const [totalSeconds, setTotalSeconds] = useState(0)

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setTotalSeconds((prev) => {
          if (prev > 0) {
            return (prev - 1)
          } else {
            clearInterval(timer)
            setRunning(false)
            window.alert("Time's up")
            return 0;
          }
        })
      }, 1000);
    }

    return () => clearInterval(timer)
  }, [running])

  useEffect(() => {
    setTotalSeconds((hours * 3600) + (minutes * 60) + (seconds))
  }, [hours, minutes, seconds])

  const startStopWatch = () => {
    setRunning(true);
  }

  const stopStopWatch = () => {
    setRunning(false)
  }

  const resetStopWatch = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    running(false);
    totalSeconds(0);
  }

  const displayTime = () => {

    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor(totalSeconds / 60);
    const second = (totalSeconds % 60)

    return `${hrs.toString().padStart(2, '0')} :: ${mins.toString().padStart(2, '0')} :: ${second.toString().padStart(2, '0')}`
  }


  return (
    <>
      <h1 className='text-3xl font-bold'>Stop Watch</h1>
      <div className='mt-4'>
        <input
          type='range'
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          min={1}
          max={24}
        />
        <label>Hours : {hours}</label>
        <input
          type='range'
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
          min={0}
          max={59}
        />
        <label>Minutes : {minutes}</label>
        <input
          type='range'
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
          min={0}
          max={59}
        />
        <label>Seconds : {seconds}</label>
      </div>
      <div className='mt-4'>
        <h2>Remaining time :: {displayTime()}</h2>
        <button
          onClick={startStopWatch}
          disabled={running}
          className='px-8 py-2 bg-green-400 rounded-md mr-2 mt-4'>Start</button>
        <button
          onClick={stopStopWatch}
          disabled={!running}
          className='px-8 py-2 bg-red-400 rounded-md mr-2 mt-4'>Stop</button>
        <button
          onClick={resetStopWatch}
          className='px-8 py-2 bg-blue-400 rounded-md mr-2 mt-4'>Reset</button>
      </div>
    </>
  )
}

export default App
