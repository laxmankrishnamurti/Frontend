import React, { useState } from 'react'
import './VideoList.css'

function VIdeoList({ id, channelName, title, views, verified, uploadedOn, dispatch, populateVideoId }) {

    const [play, setPlay] = useState(false)

    function handleClick(e) {
        e.stopPropagation()
        if (play) {
            setPlay(false)
        } else {
            setPlay(true)
        }
    }


    return (
        <div className='small-width w-2/6 border-2 h-80 cursor-pointer p-4 rounded-md'>

            <div className='relative'>
                <button
                    onClick={(e) => populateVideoId(id)}
                    className='bg-red-200 px-3 py-1 rounded-md absolute right-12 top-1'
                > Edit </button>
                <button
                    onClick={(e) => dispatch({
                        type: 'DELETE',
                        payload: id
                    })}
                    className='bg-red-200 px-3 py-1 rounded-md absolute right-1 top-1'
                > X </button>
                <div className='w-full'>
                    <img src={`https://picsum.photos/id/${id}/160/90`} alt='thumbnail' className='w-full' />
                </div>
                <div className='flex mt-2 gap-2'>

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