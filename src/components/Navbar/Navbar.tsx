import { NavLink, useLocation } from 'react-router-dom'
import { pathnameMainPage } from '../../helpers/pathnameMainPage'
import { IPropsNavbar } from '../../types/interfaces'
import './Navbar.scss'

export function Navbar(props: IPropsNavbar) {

  const location = useLocation()
  pathnameMainPage(location)

  return (
    <div className="navbar">
      <nav className="navbar__body">
        <ul className="navbar__list">
          <NavLink to="blog" className="navbar__item">
            {props.blog}
          </NavLink>

          {pathnameMainPage(location) ? (
            <li className="navbar__item" onClick={() => window.location.href = "#contacts"}>
              {props.contacts}
            </li>
          ) : (
            <NavLink to="contacts" className="navbar__item">
              {props.contacts}
            </NavLink>
          )}

          {pathnameMainPage(location) ? (
            <li className="navbar__item" onClick={() => window.location.href = "#new-items"}>
              {props.newItems}
            </li>
          ) : (
            <NavLink to="newItems/1" className="navbar__item">
              {props.newItems}
            </NavLink>
          )}

          {pathnameMainPage(location) ? (
            <li className="navbar__item" onClick={() => window.location.href = "#catalog"}>
              {props.catalog}
            </li>
          ) : (
            <NavLink to="catalog" className="navbar__item">
              {props.catalog}
            </NavLink>
          )}
        </ul>
      </nav>
    </div>
  )
}
