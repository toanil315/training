import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { History, Location, Weather } from '../utils/type'

const API_KEY = process.env.REACT_APP_API_KEY

export interface ResultOfGetWeather {
    current: Weather;
    hourly: Weather[];
}

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://congtoandni.korconnect.io/weather-app/',
        prepareHeaders: (headers, { getState }) => {
            // If we have a token set in state, let's assume that we should be passing it.
            headers.set('x-api-key', process.env.REACT_APP_API_KEY ? process.env.REACT_APP_API_KEY : '123')
            return headers
          },
    }),
    keepUnusedDataFor: 40,
    tagTypes: ['Weather'],
    endpoints: (builder) => ({
        getLocation: builder.query<Location[], string>({
            query: (name) => `/geo/1.0/direct?q=${name}&limit=1`
        }),
        getWeather: builder.query<ResultOfGetWeather, Partial<Location>>({
            query: ({lat, lon}) => `/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=daily,minutely,alerts&units=metric`
        }),
        
    }),
})

export const {useLazyGetWeatherQuery, useLazyGetLocationQuery} = weatherApi;
