import { NavLink } from 'react-router-dom'
import { LinkCatalog } from '../LinkCatalog/LinkCatalog'
import { LinkContacts } from '../LinkContacts/LinkContacts'
import { LinkNewItems } from '../LinkNewItems/LinkNewItems'
import './Navbar.scss'

export function Navbar() {
  return (
    <div className="navbar">
      <nav className="navbar__body">
        <ul className="navbar__list">
          <NavLink to="/selected/1/blog" className="navbar__item">
            Блог
          </NavLink>
          <li className="navbar__item">
            <LinkContacts />
          </li>
          <li className="navbar__item">
            <LinkNewItems />
          </li>
          <li className="navbar__item">
            <LinkCatalog />
          </li>
        </ul>
      </nav>
    </div>
  )
}
