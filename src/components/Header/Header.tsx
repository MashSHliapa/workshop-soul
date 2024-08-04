import { NavLink, useLocation } from 'react-router-dom'
import { BurgerMenu } from '../BurgerMenu/BurgerMenu'
import { Logo } from '../Logo/Logo'
import { Name } from '../Name/Name'
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
            <ul className="header__list">
              {pathnameMainPage(location) ? (
                <div className="header__item" style={{ cursor: 'pointer' }} onClick={() => window.location.href = "#contacts"}>
                  Контакты / Доставка
                </div>
              ) : (
                <NavLink to="contacts" className="header__item">
                  Контакты / Доставка
                </NavLink>
              )}
              <NavLink to="blog" className="header__item">
                Блог
              </NavLink>
            </ul>
          </div>
          <div className="header__burger">
            <BurgerMenu />
          </div>
        </div>
      </div>
    </div>
  )
}
