import React, { useState } from 'react'

function VIdeoList({ id, channelName, title, views, verified, uploadedOn, onPlay, onPause }) {

    const [play, setPlay] = useState(false)

    function handleClick(e) {
        e.stopPropagation()
        if (play) {
            onPause()
            setPlay(false)
        } else {
            onPlay()
            setPlay(true)
        }
    }

    function handleParentClick() {
        console.log("Parent clicked")
    }

    return (
        <div
            onClick={handleParentClick}
            className='w-1/5 border-2 h-72 cursor-pointer p-4 rounded-md'>
            <div>
                <div className='w-full'>
                    <img src={`https://picsum.photos/id/${id}/160/90`} alt='thumbnail' className='w-full' />
                </div>
                <div className='flex mt-2 gap-2'>
                    {/* ChannelThumbnail  */}
                    <div className='w-8'>
                        <img src={`https://picsum.photos/id/${id}/160/90`} className='w-full rounded-full' />
                    </div>
                    {/* Video & channel info  */}
                    <div>
                        <h2 className='font-bold mb-1'>{title}</h2>
                        <div>
                            <span>{channelName}</span>
                            <span className='ml-2 text-sm'>{verified && "✅"}</span>
                        </div>
                        <div>
                            <span>{views}</span> <span>. {uploadedOn}</span>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={handleClick} className='bg-green-500 w-full p-2 rounded-md mt-2'>{play ? "⏸️" : "▶️"}</button>
        </div>
    )
}

export default VIdeoList