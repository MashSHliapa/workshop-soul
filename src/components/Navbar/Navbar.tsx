import { LinkBlog } from '../LinkBlog/LinkBlog'
import { LinkCatalog } from '../LinkCatalog/LinkCatalog'
import { LinkContacts } from '../LinkContacts/LinkContacts'
import { LinkNewItems } from '../LinkNewItems/LinkNewItems'
import './Navbar.scss'

export function Navbar() {
  return (
    <div className="navbar">
      <nav className="navbar__body">
        <ul className="navbar__list">
          <li className="navbar__item">
            <LinkBlog />
          </li>
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
