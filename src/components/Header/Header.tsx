import { NavLink } from 'react-router-dom'
import { BurgerMenu } from '../BurgerMenu/BurgerMenu'
import { LinkContacts } from '../LinkContacts/LinkContacts'
import { Logo } from '../Logo/Logo'
import { Name } from '../Name/Name'
import './Header.scss'

export function Header() {
  return (
    <div className="header">
      <div className="header__container _container">
        <div className="header__body">
          <div className="header__brand">
            <div className="header__logo">
              <Logo />
            </div>
            <div className="header__name">
              <Name />
            </div>
          </div>
          <div className="header__navbar">
            <ul className="header__list">
              <NavLink to="/selected/1" className="header__item">
                <div onClick={() => window.location.href = "#contacts"}>
                  <LinkContacts />
                </div>
              </NavLink>
              <NavLink to="/selected/1/blog" className="header__item">
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
