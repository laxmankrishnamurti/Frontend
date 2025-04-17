import { useReducer } from 'react'
import { Video } from './components/index'
import videoData from './data/videoData'

function App() {
  let [videos, dispatch] = useReducer(videoReducer, videoData)

  function videoReducer(videos, action) {
    switch (action.type) {
      case 'ADD':
        let newVideo = {
          "id": `${videos.length + 1}`,
          "channelName": `${action.payload.channelName}`,
          "title": `${action.payload.title}`,
          "views": `${Math.floor(Math.random() * 100) + 1} K`,
          "verified": false,
          "uploadedOn": `${Math.floor(Math.random() * 30) + 1} Day ago`
        }
        return [...videos, newVideo];

      case 'DELETE':
        videos = videos.filter((video) => {
          return video.id !== action.payload
        })
        return videos

      case 'UPDATE':
        function editVideo() {
          videos = videos.map((video) => {
            if (video.id === action.payload.id) {
              video = {
                ...video,
                "channelName": `${action.payload.channelName}`,
                "title": `${action.payload.title}`,
              }
              return video
            }
            return video
          })
          return videos
        }
        return editVideo()

      default:
        return videos;
    }
  }



  function deleteVideo(id) {
    dispatch({ type: 'DELETE', payload: id })
  }

  function addVideo(title, channelName) {
    dispatch({
      type: 'ADD',
      payload: {
        title: title,
        channelName: channelName
      }
    })
  }

  function editVide(id, title, channelName) {
    dispatch({
      type: 'UPDATE',
      payload: {
        id: id,
        title: title,
        channelName: channelName
      }
    })
  }

  return (
    <>
      {/* <Video videoData={videos} deleteVideo={deleteVideo} addVideo={addVideo} editVideo={editVide} /> */}
      <Video videoData={videos} dispatch={dispatch} />
    </>
  )
}

export default App
