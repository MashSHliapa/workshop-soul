import { createSlice } from '@reduxjs/toolkit'
import newitems5 from '../components/images/newitems/picture5.jpg'
import image1 from '../../src/components/images/newitems/picture8.jpg'
import newitems1 from '../components/images/newitems/new_items1.png'
import newitems3 from '../components/images/newitems/picture7.jpg'
import newitems2 from '../components/images/newitems/picture9.jpg'
import newitems4 from '../components/images/newitems/picture8.jpg'
import newitems6 from '../components/images/newitems/picture6.jpg'

const newItemsAddSlice = createSlice({
  name: 'newItemsAdd',
  initialState: {
    data: [
      {
        id: '1',
        image: newitems5,
        item: 'Подвеска',
        name: '“ВАСИЛЁК”',
        size: '40x25',
        material: 'серебряная цепочка, природный камень и дерево хвойных пород',
        description: 'Сказочна и богата природа. Какие разнообразные чувства переполняют нас при встрече с ней!',
      },
      {
        id: '2',
        image: image1,
        item: 'Колечко',
        name: '“Вдохновение”',
        size: '80x45',
        material: 'серебряная цепочка, природный камень Какие разнообразные чувства переполняют нас при встрече с ней нас при встрече с ней',
        description: 'Сказочно красивый текст для описания данного изделия В любое время года она открывает свои прелести по-разному, давая простор фантазии и творчеству, укрепляя нежные и добрые чувства в человеке. Сказочна и богата природа. Какие разнообразные чувства переполняют нас при встрече с ней!',
      },
      {
        id: '3',
        image: newitems1,
        item: 'Браслет',
        name: '“Красота”',
        size: '10x25',
        material: 'камень и дерево хвойных пород камень и дерево хвойных пород',
        description: 'Сказочно красивый текст для описания данного изделия, полностью описывающее суть данного изделия, его текстуру полностью описывающее суть данного изделия',
      },
      {
        id: '4',
        image: newitems3,
        item: 'Украшние',
        name: '“Бесконечность”',
        size: '80x45',
        material: 'серебряная цепочка, кулон из изумрудного камня в серебрянной оправе. Застежка змейка',
        description: 'Сказочно красивый текст, его текстуру полностью описывающее суть данного изделия',
      },
      {
        id: '5',
        image: newitems4,
        item: 'Оберег',
        name: '“Луна”',
        size: '80x45',
        material: 'серебряная цепочка, природный камень',
        description: 'Сказочно красивый текст для описания данного изделия В любое время года она открывает свои прелести по-разному, давая простор фантазии и творчеству, укрепляя нежные и добрые чувства в человеке. Сказочна и богата природа. Какие разнообразные чувства переполняют нас при встрече с ней!',
      },
      {
        id: '6',
        image: newitems2,
        item: 'Ловец снов',
        name: '“Превосходно”',
        size: '10x25',
        material: 'камень и дерево хвойных пород камень и дерево хвойных пород',
        description: 'Сказочно красивый текст для описания данного изделия, полностью описывающее суть данного изделия, его текстуру полностью описывающее суть данного изделия',
      },
      {
        id: '7',
        image: newitems6,
        item: 'Шум дождя',
        name: '“Безмятежность”',
        size: '80x45',
        material: 'серебряная цепочка, природный камень и камень и дерево хвойных пород камень и дерево хвойных пород',
        description: 'Сказочно красивый текст для описания данного изделия В любое время года она открывает свои прелести по-разному, давая простор фантазии и творчеству, укрепляя нежные и добрые чувства в человеке.  Сказочна и богата природа. Какие разнообразные чувства переполняют нас при встрече с ней!',
      },
    ],
  },
  reducers: {
    setNewItemsAdd(state, action) {
      state.data = action.payload
    }
  }
})

export const { setNewItemsAdd } = newItemsAddSlice.actions
export const newItemsAddReducer = newItemsAddSlice.reducer

