import { configureStore } from '@reduxjs/toolkit'
import testingReducer from '../features/testing'

export const store = configureStore({
    reducer: testingReducer
})