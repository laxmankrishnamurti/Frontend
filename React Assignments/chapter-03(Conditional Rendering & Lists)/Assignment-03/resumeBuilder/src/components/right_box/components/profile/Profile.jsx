import React from 'react'

function Profile(props) {

    const profileData = props.data.personalDetails

    return (
        <div>
            <h1 className='text-4xl text-gray-700 mb-1 tracking-wider '>
                <span className='font-bold inline-block mr-2'>{profileData.username.first_name}</span>
                <span>{profileData.username.last_name}</span>
            </h1>
            <h2 className='text-1xl mb-4 tracking-wider'>{profileData.position}</h2>
            <p className='text-sm mb-5'>{profileData.bio}</p>
        </div>
    )
}

export default Profile