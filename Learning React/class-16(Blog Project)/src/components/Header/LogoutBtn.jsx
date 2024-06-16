import React from 'react'
import { useDispatch } from 'react-redux'
import service from '../../appwrite/config'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {

    const dispatch = useDispatch()

    const logoutHandler = () => {
        //Note :- all appwrite reducers are like a promise
        authService.logout()
            .then(() => {
                dispatch(logout())
            })
    }

    return (
        <button
            onClick={logoutHandler}
            className='inline-block px-6 py-2 hover:bg-blue-100 duration-200 rounded-full'
        >Logout</button>
    )
}

export default LogoutBtn