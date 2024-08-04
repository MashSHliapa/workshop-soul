import { NavLink, useLocation } from 'react-router-dom'
import { pathnameMainPage } from '../../helpers/pathnameMainPage'
import './Navbar.scss'

export function Navbar() {

  const location = useLocation()
  pathnameMainPage(location)

  return (
    <div className="navbar">
      <nav className="navbar__body">
        <ul className="navbar__list">
          <NavLink to="blog" className="navbar__item navbar__item_blog-link">
            Блог
          </NavLink>

          {pathnameMainPage(location) ? (
            <div className="navbar__item" onClick={() => window.location.href = "#contacts"}>
              Контакты / Доставка
            </div>
          ) : (
            <NavLink to="contacts" className="navbar__item">
              Контакты / Доставка
            </NavLink>
          )}

          {pathnameMainPage(location) ? (
            <div className="navbar__item navbar__item_new-items" onClick={() => window.location.href = "#new-items"}>
              Новинки
            </div>
          ) : (
            <NavLink to="newItems/1" className="navbar__item navbar__item_new-items">
              Новинки
            </NavLink>
          )}

          {pathnameMainPage(location) ? (
            <div className="navbar__item" onClick={() => window.location.href = "#catalog"}>
              Католог изделий
            </div>
          ) : (
            <NavLink to="catalog" className="navbar__item">
              Католог изделий
            </NavLink>
          )}
        </ul>
      </nav>
    </div>
  )
}
