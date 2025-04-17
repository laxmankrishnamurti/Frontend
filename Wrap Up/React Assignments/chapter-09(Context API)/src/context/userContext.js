import { createContext, useContext } from 'react'

const userInfo = []

const userContext = createContext({
    users: userInfo,
    addUser: function (userPayload) {
        let payloadValue = Object.values(userPayload)
        for (let i = 0; i < payloadValue.length; i++) {
            if (payloadValue[i] === undefined || payloadValue[i] === '') {
                return window.alert('All fields are required to create a user account')
            }
        }
        this.users.push(userPayload)
    },
    removeUser: function (email) {
        if (!email) {
            return window.alert("Email is required to delete the user data")
        }
        console.log("prev users : ", this.users)
        this.users = this.users.filter((user) => user.email !== email)
        console.log("post users : ", this.users)
    }
})



function useUserContext() {
    return useContext(userContext)
}

export { userContext, useUserContext }