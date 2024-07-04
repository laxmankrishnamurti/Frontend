import { Resume } from './components/index'
import resumeData from './data/resumeData.json'

function App() {

  return (
    <>
      <div className='flex flex-col gap-8 justify-center items-center mt-4 w-3/5 mx-auto'>
        {
          resumeData.map((data) => (
            <Resume key={`resume-${data.id}`} data={data} />
          ))
        }

      </div>
    </>
  )
}

export default App
