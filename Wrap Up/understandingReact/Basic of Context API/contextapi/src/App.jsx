import Login from "./components/Login/Login"
import Profile from "./components/Profile/Profile"
import UserContextProvider from "./context/UserContext/UserContextProvider"

function App() {

  return (
    <>
      <h1 className="bg-violet-500 p-4 text-center text-2xl text-white font-bold">Context API</h1>
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  )
}

export default App
