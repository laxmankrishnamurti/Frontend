import { Image, Button, Form } from './components/index'

function App() {

  function handleOnCopy(e) {
    console.log(e)
    window.alert(`"${e.target.childNodes[0].data}" is copied`)
  }

  function handleOnCut(e) {
    window.alert("something is pasted")
  }

  return (
    <>
      <div className='w-full flex flex-col gap-4 ml-8 mt-4'>
        <Image id={5} />
        <Button value={"Click"} />
        <Form
          label="username"
          type="text"
          placeholder="Enter your username"
        />
        <p onCopy={handleOnCopy} onCut={handleOnCut}>This is a paragraph section</p>
      </div>
    </>
  )
}

export default App
