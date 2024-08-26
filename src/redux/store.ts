import { configureStore } from '@reduxjs/toolkit'
import { tradeFairsReducer } from './tradeFairsSlice'
import { newItemsAddReducer } from './newItemsAddSlice'
import { bijouterieReducer } from './bijouterieSlice'
import { decorReducer } from './decorSlice'
import { forgedProductsReducer } from './forgedProductsSlice'
import { runesReducer } from './runesSlice'
import { dreamCatchersReducer } from './dreamCatchersSlice'
import { talismansReducer } from './talismansSlice'
import { musicReducer } from './musicSlice'
import { amuletsReducer } from './amuletsSlice'

export const store = configureStore({
  reducer: {
    tradeFairs: tradeFairsReducer,
    newItemsAdd: newItemsAddReducer,
    bijouterie: bijouterieReducer,
    decor: decorReducer,
    forgedProducts: forgedProductsReducer,
    runes: runesReducer,
    dreamCatchers: dreamCatchersReducer,
    talismans: talismansReducer,
    music: musicReducer,
    amulets: amuletsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
