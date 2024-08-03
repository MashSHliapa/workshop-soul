import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'
import './Layout.scss'
import { Footer } from '../Footer/Footer'

export function Layout() {
  return(
    <div className="Layout">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
