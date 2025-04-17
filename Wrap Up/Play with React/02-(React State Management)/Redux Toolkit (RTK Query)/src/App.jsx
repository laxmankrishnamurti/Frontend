import { useGetUserByIdQuery, useGetAllUsersQuery } from './services/users'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [userData, setUserData] = useState({})
  const [allUsers, setAllUsers] = useState([])
  const { data, isError, isFetching } = useGetUserByIdQuery('1')
  const { currentData, error, isLoading } = useGetAllUsersQuery()

  useEffect(() => {
    if (!isFetching && data) {
      setUserData(data)
    }
    if (!isLoading && currentData) {
      setAllUsers(currentData)
    }
  }, [isFetching, data, isLoading, currentData])

  return (
    <>
      {isError ? (<p>Oops..... Something went wrong</p>) : isFetching ? (<p>Fetching</p>) : userData ? (
        <p>Username is : {userData.name}</p>
      ) : null}

      <table>
        <thead>
          <tr>
            <th>Uesr_id</th>
            <th>Username</th>
            <th>Age</th>
            <th>Email</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          {
            allUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>{user.class}</td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </>
  )
}

export default App
