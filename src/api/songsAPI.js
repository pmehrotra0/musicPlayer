import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'

export const fetchSongList = createApi({
    reducerPath: 'fetchSongList',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL
    }),
    endpoints: (builder) => ({
        getSongList: builder.query({ query: () => '/items/songs'})
    })
})

export const {
    useGetSongListQuery,
} = fetchSongList;