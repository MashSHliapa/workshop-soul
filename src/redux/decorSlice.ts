import { createSlice } from '@reduxjs/toolkit'
import decor1 from '../components/images/newitems/picture5.jpg'
import decor2 from '../components/images/newitems/picture8.jpg'
import decor3 from '../components/images/newitems/picture9.jpg'
import decor4 from '../components/images/newitems/picture7.jpg'

export const decorSlice = createSlice({
  name: 'decor',
  initialState: {
    data: [
      {
        id: '1',
        image: decor1,
        item: 'Светильник',
        name: '“Красота”',
        size: '18x30',
        material: 'Камень и дерево хвойных пород камень и дерево хвойных пород',
      },
      {
        id: '2',
        image: decor2,
        item: 'Подсвечник',
        name: '“Грация”',
        size: '10x25',
        material: 'Камень и дерево хвойных пород камень и дерево хвойных пород и еще какой-то текст',
      },
      {
        id: '3',
        image: decor3,
        item: 'Подставка',
        name: '“Василек”',
        size: '40x45',
        material: 'Камень и дерево хвойных пород камень и дерево хвойных пород и еще какой-то текст описания',
      },
      {
        id: '4',
        image: decor4,
        item: 'Столик',
        name: '“Удобство”',
        size: '90x45',
        material: 'Камень и дерево хвойных пород',
      },
    ]
  },
  reducers: {
    setDecor(state, action) {
      state.data = action.payload
    }
  }
})

export const { setDecor } = decorSlice.actions
export const decorReducer = decorSlice.reducer
