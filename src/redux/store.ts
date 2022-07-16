import { configureStore } from '@reduxjs/toolkit'
import { historyApi } from '../services/historyServices'
import { weatherApi } from '../services/weatherServices'

export const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
    [historyApi.reducerPath]: historyApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
    .concat(weatherApi.middleware)
    .concat(historyApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch