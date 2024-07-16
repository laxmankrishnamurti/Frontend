import React from 'react'
import { VideoList } from '../index'

function Video({ videoData, deleteVideo }) {
    return (
        <div>
            <h1 className='bg-red-400 p-4 text-center text-white text-2xl font-bold'>Video App </h1>
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