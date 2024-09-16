import './App.scss'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { useState } from 'react'
import { store } from './redux/store'
import { router } from './router'
import { SliderContext } from './components/Context/SliderContext'

export function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <Provider store={store}>
      <SliderContext.Provider value={{ activeIndex, setActiveIndex }}>
        <RouterProvider router={router} />
      </SliderContext.Provider>
    </Provider>
  )
}
