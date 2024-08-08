import { NavLink, useLocation } from 'react-router-dom'
import { BurgerMenu } from '../BurgerMenu/BurgerMenu'
import { Logo } from '../Logo/Logo'
import { Name } from '../Name/Name'
import { Navbar } from '../Navbar/Navbar'
import { pathnameMainPage } from '../../helpers/pathnameMainPage'
import './Header.scss'

export function Header() {

  const location = useLocation()
  pathnameMainPage(location)

  return (
    <div className="header">
      <div className="header__container _container">
        <div className="header__body">
          <NavLink to='/' className="header__brand">
            <div className="header__logo">
              <Logo />
            </div>
            <div className="header__name">
              <Name />
            </div>
          </NavLink>
          <div className="header__navbar">
            <Navbar blog="Блог" contacts="Контакты" newItems="Новинки" catalog="Каталог" />
          </div>
          <div className="header__burger">
            <BurgerMenu />
          </div>
        </div>
      </div>
    </div>
  )
}
