import { configureStore } from '@reduxjs/toolkit'
import { tradeFairsReducer } from './tradeFairsSlice'
import { newItemsAddReducer } from './newItemsAddSlice'
import { bijouterieReducer} from './bijouterieSlice'
import { decorReducer } from './decorSlice'

export const store = configureStore({
  reducer: {
    tradeFairs: tradeFairsReducer,
    newItemsAdd: newItemsAddReducer,
    bijouterie: bijouterieReducer,
    decor: decorReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
