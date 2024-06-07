import './App.scss'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

export function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}
