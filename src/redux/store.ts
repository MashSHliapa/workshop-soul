import { configureStore } from '@reduxjs/toolkit'
import { tradeFairsReducer } from './tradeFairsSlice'

export const store = configureStore({
  reducer: {
    tradeFairs: tradeFairsReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
