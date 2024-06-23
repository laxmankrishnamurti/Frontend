import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Profile() {

    // const [userInfo, setUserInfo] = useState({})
    const userInfo = useLoaderData()

    // useEffect(() => {
    //     fetch('https://api.github.com/users/laxmankrishnamurti')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setUserInfo(data)
    //         })
    // }, [])

    return (
        <div className='shadow-sm shadow-black text-black w-1/4 mx-auto flex flex-col justify-center items-center rounded-md p-2 mt-24'>
            <span className='w-48 flex'><img className='w-full' src={userInfo?.avatar_url} /></span>
            <p>Username : {userInfo.name}</p>
            <p>Bio : {userInfo.bio}</p>
            <p>Address : {userInfo.location}</p>
        </div>
    )
}

export default Profile



export const getProfile = async () => {
    const response = await fetch('https://api.github.com/users/laxmankrishnamurti')
    return response.json()
}