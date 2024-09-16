import { createContext } from 'react'

export const SliderContext = createContext({
  activeIndex: 0,
  setActiveIndex: (index: number) => { index }
})
