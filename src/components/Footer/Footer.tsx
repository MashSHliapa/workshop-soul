import { Logo } from '../Logo/Logo'
import { Name } from '../Name/Name'
import { Navbar } from '../Navbar/Navbar'
import background from '../../components/images/background_footer.png'
import './Footer.scss'

export function Footer() {
  return (
    <div className="footer">
      <div className="footer__container _container">
        <div className="footer__body">
          <div className="footer__brand">
            <div className="footer__logo">
              <Logo />
            </div>
            <div className="footer__name">
              <Name />
            </div>
          </div>
          <div className="footer__navbar">
            <Navbar />
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
