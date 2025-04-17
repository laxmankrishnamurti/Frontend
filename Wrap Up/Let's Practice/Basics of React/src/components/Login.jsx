import React from 'react'

function Login(props) {
    const { username, password } = props.credentials

    return (
        <div>
            <h1>Login Credential Details</h1>
            <p>username : {username}</p>
            <p>Password : {password}</p>
        </div>
    )
}

export default Login