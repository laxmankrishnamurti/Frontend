import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/'
    }),
    endpoints: (builder) => (
        {
            getUserById: builder.query({
                query: (id) => `users/${id}`,
            }),
            getAllUsers: builder.query({
                query: () => `users`,
            })
        }
    )
})

export const { useGetUserByIdQuery, useGetAllUsersQuery } = userApi
