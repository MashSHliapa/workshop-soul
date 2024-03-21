import './Footer.scss'
import background from '../../components/images/background_footer.png'
import { Logo } from '../Logo/Logo'
import { Name } from '../Name/Name'
import { LinkBlog } from '../LinkBlog/LinkBlog'
import { LinkContacts } from '../LinkContacts/LinkContacts'
import { LinkCatalog } from '../LinkCatalog/LinkCatalog'
import { LinkNewItems } from '../LinkNewItems/LinkNewItems'

export function Footer() {
  return (
    <div className="footer">
      <div className="footer__container _container">
        <div className="footer__body">
          <div className="footer__brand">
            <Logo />
            <Name />
          </div>
          <div className="footer__navbar navbar">
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
          </div>
          <p className="footer__copyright">Все права защищены 2024</p>
        </div>
      </div>
      <div className="footer__background _ibg">
        <img src={background} alt="background" />
      </div>
    </div>
  )
}
