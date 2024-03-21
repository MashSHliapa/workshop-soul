import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'
import './Layout.scss'
import { Main } from '../Main'
import { NewItems } from '../NewItems'
import { Contacts } from '../Contacts'
import { Tagline } from '../Tagline'
import { Catalog } from '../Catalog'
import { TradeFairs } from '../../pages/TradeFairs'
import { Footer } from '../Footer/Footer'


export function Layout() {
  return(
    <div className="Layout">
      <Header/>
      <Main/>
      <Outlet/>
      <NewItems/>
      <Catalog/>
      <Contacts/>
      <Tagline/>
      <TradeFairs/>
      <Footer/>
    </div>
  )
}
