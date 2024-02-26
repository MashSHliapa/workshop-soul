import { Outlet } from 'react-router-dom'
import { Header } from '../Header'
import './Layout.scss'
import { Main } from '../Main'
import { NewItems } from '../NewItems'


export function Layout() {
  return(
    <div className="Layout">
      <Header/>
      <Main/>
      <Outlet/>
      <NewItems/>
    </div>
  )
}
