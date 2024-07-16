import React, { useState } from 'react'
import { VideoList } from '../index'

function Video({ videoData, deleteVideo, addVideo }) {

    const [title, setTitle] = useState()
    const [channelName, setChannelName] = useState()

    function handleAddVideo(title, channelName) {

        if (title === '' && channelName === '') {
            return window.alert("title and channelName is required")
        }

        addVideo(title, channelName)
        setTitle('')
        setChannelName('')
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
                    onClick={(e) => handleAddVideo(title, channelName)}
                    className='bg-green-500 px-28 py-1 mt-2 rounded-md'
                >Add</button>
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
                        deleteVideo={deleteVideo}
                    />
                ))}
            </div>
        </div>
    )
}

export default Video