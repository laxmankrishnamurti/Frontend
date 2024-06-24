import React, { useCallback, useState } from 'react'
import { Container, Input, Button } from '../index'

function Contact() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')


    return (
        <Container>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    console.log("username is : ", { username })
                    console.log("password is : ", { password })
                    console.log("email is : ", { email })
                }}
            >
                <Input
                    id="username"
                    label="Username"
                    type='text'
                    value={username}
                    onValueChange={setUsername}
                    placeholder={"Enter username"}
                    disabled={false}
                />
                <Input
                    id="password"
                    label="Password"
                    type='text'
                    value={password}
                    onValueChange={setPassword}
                    placeholder={"Enter password"}
                    disabled={false}
                />
                <Input
                    id="email"
                    label="Email"
                    type='text'
                    value={email}
                    onValueChange={setEmail}
                    placeholder={"Enter email"}
                    disabled={false}
                />
                <Button
                    type='submit'
                    value="Submit"
                />
            </form>
        </Container>
    )
}

export default Contact