import { useState } from 'react'
import { Video } from './components/index'
import videoData from './data/videoData.json'

function App() {
  let [videos, setVideos] = useState(videoData)

  function deleteVideo(id) {
    videos = videos.filter((video) => {
      return video.id !== id
    })
    setVideos(videos)
  }


  return (
    <>
      <Video videoData={videos} deleteVideo={deleteVideo} />
    </>
  )
}

export default App
