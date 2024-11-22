import { configureStore } from '@reduxjs/toolkit'
import serverResponseReducer from './serverResponseReducer'

export const store = configureStore({
  reducer: {
    serverResponse: serverResponseReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
