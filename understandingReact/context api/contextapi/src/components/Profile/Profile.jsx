import { useContext } from 'react'
import UserContext from '../../context/UserContext/UserContext'

function Profile() {

    const { user } = useContext(UserContext)

    if (!user) return <div className='text-center mt-4 bg-pink-600 p-4 text-white font-bold text-2xl'>Please Login</div>

    return <div className='text-center mt-4 bg-pink-600 p-4 text-white font-bold text-2xl'>Welcome {user.username}</div>
}

export default Profile