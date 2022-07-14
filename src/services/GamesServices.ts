import {createApi, fetchBaseQuery, FetchBaseQueryError} from '@reduxjs/toolkit/query/react'
import { API_KEY } from '../utils/constant'
import { GameWithTrailer, MinGame } from '../utils/type'

interface GetGameListArgs {
    searchStr?: string;
    pageSize?: number;
    page?: number;
}

interface GetGameListResult<T> {
    next: string;
    previous: string | null;
    results: T[];
}

export const gameApi = createApi({
    reducerPath: "gameApi",
    baseQuery: fetchBaseQuery({
      baseUrl: "https://api.rawg.io/api/",
    }),
    tagTypes: ["Game"],
    endpoints: (builder) => ({
        getSearchList: builder.query<GetGameListResult<MinGame>, GetGameListArgs>({
            query: ({searchStr, pageSize, page}) => `games?search=${searchStr}&page_size=${pageSize ? pageSize : 5}&page=${page ? page : 1}&key=${API_KEY}`
        }),
        getGameList: builder.query<GetGameListResult<GameWithTrailer>, GetGameListArgs>({
            async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
                try {
                    const {data, error} = await fetchWithBQ(`games?&page_size=${_arg.pageSize}&key=${API_KEY}`)
                    const resultTrailers = await Promise.all([
                        ...(data as GetGameListResult<MinGame>).results.map((item, index) => {
                            return fetchWithBQ(`games/${item.id}/movies?key=${API_KEY}`)
                        })
                    ])

                    const listGameWithTrailer: GameWithTrailer[] = (data as GetGameListResult<MinGame>).results.map((item, index) => {
                        return {
                            ...item, trailer: (resultTrailers[index].data as any).results[0]
                        }
                    })

                    const results = {...(data as any), results: [...listGameWithTrailer]}

                    return { data: results as GetGameListResult<GameWithTrailer> }
                }
                catch(error) {
                    console.log(error)
                    return { error: error as FetchBaseQueryError }
                }
            }
        })
    }),
})

export const {useLazyGetSearchListQuery, useGetGameListQuery} = gameApi