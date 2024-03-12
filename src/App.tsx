import './App.scss'
import { Layout } from './components/Layout'
import { Provider } from 'react-redux'
import { store } from './redux/store'

export function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  )
}
