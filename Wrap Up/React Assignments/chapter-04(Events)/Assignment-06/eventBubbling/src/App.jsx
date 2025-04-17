import './App.css'

function App() {

  function grandParent() {
    console.log("Grand-Parent")
  }

  function parent() {
    console.log("Parent")
  }

  function child() {
    console.log("Child")
  }


  return (
    <>
      <div onClick={grandParent} className='w-80 h-52 border-black border-2 flex justify-center items-center'>
        <div onClick={parent} className='w-48 h-36 border-orange-500 border-2 flex justify-center items-center'>
          <div onClick={child} className='w-24 h-9 border-blue-500 border-2'>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
