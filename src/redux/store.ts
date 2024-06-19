import { configureStore } from '@reduxjs/toolkit'
import { tradeFairsReducer } from './tradeFairsSlice'
import { newItemsAddReducer } from './newItemsAddSlice'
import { bijouterieReducer} from './bijouterieSlice'

export const store = configureStore({
  reducer: {
    tradeFairs: tradeFairsReducer,
    newItemsAdd: newItemsAddReducer,
    bijouterie: bijouterieReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
