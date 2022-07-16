import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { History } from '../utils/type'

export const historyApi = createApi({
    reducerPath: 'historyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://pacific-castle-52275.herokuapp.com/'
    }),
    keepUnusedDataFor: 40,
    tagTypes: ['History'],
    endpoints: (builder) => ({
        getHistoryList: builder.query<History[], void>({
            query: () => '/history',
            providesTags: (result) => {
                return result
                  ? [
                      ...result.map(
                        ({ id }) =>
                          ({
                            type: "History",
                            id,
                          } as const)
                      ),
                      { type: "History", id: "LIST" },
                    ]
                  : [{ type: "History", id: "LIST" }];
              },
        }),
        addHistory: builder.mutation<void, History>({
            query: (history) => ({
                url: 'history',
                body: history,
                method: 'POST'
            }),
            invalidatesTags: [{type: 'History', id: 'LIST'}],
        }),
        updateHistory: builder.mutation<void, History>({
            query: ({id, ...restHistory}) => ({
                url: `history/${id}`,
                body: restHistory,
                method: 'PUT'
            }),
            invalidatesTags: [{type: 'History', id: 'LIST'}],
        })
    }),
})

export const {useGetHistoryListQuery, useAddHistoryMutation, useUpdateHistoryMutation} = historyApi;
