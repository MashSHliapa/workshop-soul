import logo from '../../components/images/logo.svg'
import './Header.scss'

export function Header() {
  return (
    <div className="header">
      <div className="header__container _container">
        <div className="header__body">
          <div className="header__logo">
            <img src={logo} alt="logo" />
            <div className='header__name'>Творческая мастерская <br /> <span>Анастасии Кирашёвой</span></div>
          </div>
          <div className="header__navbar navbar">
            <div className="navbar__list">
              <div className="navbar__item">
                <a href="#" className="navbar__link">Контакты / Доставка</a>
              </div>
              <div className="navbar__item">
                <a href="#" className="navbar__link">Блог</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
