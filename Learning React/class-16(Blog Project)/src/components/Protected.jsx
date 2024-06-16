import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Protected({ children, authentication = true }) {   //we can ignore the "authentication" parameter and only check on the basis of "authStatus"

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector((state) => {
        return state.auth.status
    })

    useEffect(() => {
        if (authentication && (authStatus !== authentication)) {
            navigate('/login')
        } else if (!authentication && (authStatus !== authentication)) {
            navigate('/')
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

    return loader ? <h1>Loading.........</h1> : <>{children}</>
}

export default Protected