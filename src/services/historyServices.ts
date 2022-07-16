import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { History } from '../utils/type'

export const historyApi = createApi({
    reducerPath: 'historyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/'
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
            query: (history) => ({
                url: `history/${history.id}`,
                body: history,
                method: 'PUT'
            }),
            invalidatesTags: [{type: 'History', id: 'LIST'}],
        })
    }),
})

export const {useGetHistoryListQuery, useAddHistoryMutation, useUpdateHistoryMutation} = historyApi;
