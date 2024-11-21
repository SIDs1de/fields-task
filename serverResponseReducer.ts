import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IServerResponse } from './src/types'
import { RootState } from './store'

const initialState = {
  value: [] as IServerResponse[],
}

export const serverResponseSlice = createSlice({
  name: 'serverResponse',
  initialState,
  reducers: {
    setServerData: (state, action: PayloadAction<IServerResponse>) => {
      state.value.push(action.payload)
    },
  },
})

export const { setServerData } = serverResponseSlice.actions

export const serverData = (state: RootState) => state.serverResponse.value
export default serverResponseSlice.reducer
