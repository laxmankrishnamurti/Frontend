import React, { useState } from 'react'
import { VideoList } from '../index'

function Video({ videoData, dispatch }) {

    const [title, setTitle] = useState('')
    const [channelName, setChannelName] = useState('')
    const [editMode, setEditMode] = useState(false)
    const [editVideoId, setEditVideoId] = useState('')

    function handleAddAndEditVideo(title, channelName) {
        if (editMode) {
            dispatch({
                type: 'UPDATE',
                payload: {
                    id: editVideoId,
                    title: title,
                    channelName: channelName
                }
            })
            setEditMode(false)
            setTitle('')
            setChannelName('')
        } else {

            if (title === '' && channelName === '') {
                return window.alert("title and channelName is required")
            }

            dispatch({
                type: 'ADD',
                payload: {
                    title: title,
                    channelName: channelName
                }
            })
            setTitle('')
            setChannelName('')
        }
    }

    function populateVideoData(id) {
        setEditMode(true)
        let editableVideoInfo = videoData.find((video) => {
            return video.id === id
        })
        setTitle(editableVideoInfo.title)
        setChannelName(editableVideoInfo.channelName)
        setEditVideoId(id)
    }


    return (
        <div>
            <h1 className='bg-red-400 p-4 text-center text-white text-2xl font-bold'>Video App </h1>
            <div className='mt-4 ml-24'>
                <input
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Enter video title'
                    className='border-black px-2 py-2 rounded-md border-2 block mb-2'
                />
                <input
                    type='text'
                    value={channelName}
                    onChange={(e) => setChannelName(e.target.value)}
                    placeholder='Enter channel name'
                    className='border-black px-2 py-2 rounded-md border-2 block mb-2'
                />
                <button
                    onClick={(e) => handleAddAndEditVideo(title, channelName)}
                    className='bg-green-500 px-28 py-1 mt-2 rounded-md'
                >{editMode ? "Save" : "Add"}</button>
            </div>
            <div className='my-4 mx-auto w-4/5 flex justify-start flex-wrap gap-4 items-start'>
                {videoData.map((data) => (
                    <VideoList
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        channelName={data.channelName}
                        views={data.views}
                        verified={data.verified}
                        uploadedOn={data.uploadedOn}
                        dispatch={dispatch}
                        populateVideoId={populateVideoData}
                    />
                ))}
            </div>
        </div>
    )
}

export default Video