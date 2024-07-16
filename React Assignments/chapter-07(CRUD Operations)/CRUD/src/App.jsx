import { useEffect, useState } from 'react'
import { Video } from './components/index'
import videoData from './data/videoData'

function App() {
  let [videos, setVideos] = useState(videoData)

  function deleteVideo(id) {
    videos = videos.filter((video) => {
      return video.id !== id
    })
    setVideos(videos)
  }

  function addVideo(title, channelName) {
    let newVideo = {
      "id": `${videos.length + 1}`,
      "channelName": `${channelName}`,
      "title": `${title}`,
      "views": "20K",
      "verified": false,
      "uploadedOn": "1 Day age "
    }

    setVideos([...videos, newVideo])
  }

  function editVide(id, title, channelName) {
    videos = videos.map((video) => {
      if (video.id === id) {
        video = {
          ...video,
          "channelName": `${channelName}`,
          "title": `${title}`,
        }
      }
      return video
    })
    setVideos(videos)
  }

  return (
    <>
      <Video videoData={videos} deleteVideo={deleteVideo} addVideo={addVideo} editVideo={editVide} />
    </>
  )
}

export default App
