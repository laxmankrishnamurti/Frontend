import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: []
}

export const testingSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload);
        },
        removeUser: (state, action) => {
            state.users = state.users.filter((user) => user.id !== action.payload.id)
        }
    }
})

export const { addUser, removeUser } = testingSlice.actions
export default testingSlice.reducer