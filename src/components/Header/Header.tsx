import { LinkBlog } from '../LinkBlog/LinkBlog'
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
            <Logo />
            <Name />
          </div>
          <div className="header__navbar">
            <ul className="header__list">
              <li className="header__item">
                <LinkContacts />
              </li>
              <li className="header__item">
                <LinkBlog />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
