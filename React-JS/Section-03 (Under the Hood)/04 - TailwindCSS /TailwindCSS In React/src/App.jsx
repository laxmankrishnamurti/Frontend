import Card from "../Components/Card"

function App() {

  return (
    <>
      <div className="block">
        <nav className="float-right mt-6">
          <ul>
            <li className="inline m-4 p-4 bg-slate-500 cursor-pointer rounded">Home</li>
            <li className="inline m-4 p-4 bg-slate-500 cursor-pointer rounded">About</li>
            <li className="inline m-4 p-4 bg-slate-500 cursor-pointer rounded">Services</li>
            <li className="inline m-4 p-4 bg-slate-500 cursor-pointer rounded">Carrer</li>
            <li className="inline m-4 p-4 bg-slate-500 cursor-pointer rounded">Sign Up</li>
          </ul>
        </nav>
      </div>
      <Card btnText='Add' />
      <Card btnText='Subtract' />
    </>
  )
}
export default App