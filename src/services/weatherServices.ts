import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { Location, Weather } from '../utils/type'

const API_KEY = ''

export interface ResultOfGetWeather {
    current: Weather;
    hourly: Weather[];
}

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://api.openweathermap.org'
    }),
    keepUnusedDataFor: 40,
    tagTypes: ['Weather'],
    endpoints: (builder) => ({
        getLocation: builder.query<Location, string>({
            query: (name) => `/geo/1.0/direct?q=${name}&limit=1&appid=${API_KEY}`
        }),
        getWeather: builder.query<ResultOfGetWeather, Partial<Location>>({
            query: ({lat, lon}) => `/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=daily,minutely,alerts&units=metric&appid=${API_KEY}`
        })
    }),
})

export const {useLazyGetWeatherQuery, useLazyGetLocationQuery} = weatherApi;
