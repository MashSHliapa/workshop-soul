import { createSlice } from '@reduxjs/toolkit'
import bijouterie1 from '../components/images/newitems/picture6.jpg'
import bijouterie2 from '../components/images/newitems/picture7.jpg'
import bijouterie3 from '../components/images/newitems/picture8.jpg'
import bijouterie4 from '../components/images/newitems/picture9.jpg'

export const bijouterieSlice = createSlice({
  name: 'bijouterie',
  initialState: {
    data: [
      {
        id: '1',
        image: bijouterie1,
        item: 'Браслет',
        name: '“Красота”',
        size: '18x30',
        material: 'Камень и дерево хвойных пород камень и дерево хвойных пород',
      },
      {
        id: '2',
        image: bijouterie2,
        item: 'Серьги',
        name: '“Ты - лучшая”',
        size: '10x25',
        material: 'Камень и дерево хвойных пород камень и дерево хвойных пород и еще какой-то текст',
      },
      {
        id: '3',
        image: bijouterie3,
        item: 'Подвеска',
        name: '“Василек”',
        size: '40x45',
        material: 'Камень и дерево хвойных пород камень и дерево хвойных пород и еще какой-то текст описания какой-то текст описания',
      },
      {
        id: '4',
        image: bijouterie4,
        item: 'Ожерелье',
        name: '“Вдохновение”',
        size: '40x45',
        material: 'Камень и дерево хвойных пород',
      },
    ]
  },
  reducers: {
    setBijouterie(state, action) {
      state.data = action.payload
    }
  }
})

export const { setBijouterie } = bijouterieSlice.actions
export const bijouterieReducer = bijouterieSlice.reducer
