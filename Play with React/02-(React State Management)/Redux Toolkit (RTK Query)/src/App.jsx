import { useGetUserByIdQuery } from './services/users'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [userData, setUserData] = useState({})
  const { data, isError, isFetching } = useGetUserByIdQuery('1')

  useEffect(() => {
    if (!isFetching && data) {
      setUserData(data)
    }
  }, [isFetching, data])

  return (
    <>
      {isError ? (<p>Oops..... Something went wrong</p>) : isFetching ? (<p>Fetching</p>) : userData ? (
        <p>Username is : {userData.name}</p>
      ) : null}
    </>
  )
}

export default App
