import { configureStore } from '@reduxjs/toolkit'
import { tradeFairsReducer } from './tradeFairsSlice'

export const store = configureStore({
  reducer: {
    tradeFairs: tradeFairsReducer
  },
})
