import { Outlet } from 'react-router-dom'
import { Header } from '../Header'
import './Layout.scss'
import { Main } from '../Main'
import { NewItems } from '../NewItems'
import { Contacts } from '../Contacts'
import { Tagline } from '../Tagline'
import { Catalog } from '../Catalog'


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
    </div>
  )
}
