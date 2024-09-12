import { IconAndTitle } from '../IconAndTitle/IconAndTitle'
import './NavbarCategories.scss'

export function NavbarCategories({ handleClickOpenSection }: { handleClickOpenSection: (section: string) => void }) {
  return (
    <div className="navbar-categories">
      <ul className="navbar-categories__list">
        <li className="navbar-categories__item">
          <div className="navbar-categories__link" onClick={() => handleClickOpenSection('bijouterie')}>
            <IconAndTitle>БИЖУТЕРИЯ</IconAndTitle>
          </div>
        </li>
        <li className="navbar-categories__item">
          <div className="navbar-categories__link" onClick={() => handleClickOpenSection('esoteric')}>
            <IconAndTitle>Эзотерика</IconAndTitle>
          </div>
          <ul className="navbar-categories__list-esoteric" >
            <li className="navbar-categories__item-esoteric">
              <div className="navbar-categories__link-esoteric" onClick={() => handleClickOpenSection('amulets')}>
                <IconAndTitle>ОБЕРЕГИ</IconAndTitle>
              </div>
            </li>
            <li className="navbar-categories__item-esoteric">
              <div className="navbar-categories__link-esoteric" onClick={() => handleClickOpenSection('runes')}>
                <IconAndTitle>РУНЫ</IconAndTitle>
              </div>
            </li>
            <li className="navbar-categories__item-esoteric">
              <div className="navbar-categories__link-esoteric" onClick={() => handleClickOpenSection('talisman')}>
                <IconAndTitle>ТАЛИСМАНЫ</IconAndTitle>
              </div>
            </li>
            <li className="navbar-categories__item-esoteric">
              <div className="navbar-categories__link-esoteric" onClick={() => handleClickOpenSection('')}>
                <IconAndTitle>ЛОВЦЫ СНОВ</IconAndTitle>
              </div>
            </li>
          </ul>
        </li>
        <li className="navbar-categories__item">
          <div className="navbar-categories__link" onClick={() => handleClickOpenSection('decor')}>
            <IconAndTitle>Декор</IconAndTitle>
          </div>
        </li>
        <li className="navbar-categories__item">
          <div className="navbar-categories__link" onClick={() => handleClickOpenSection('lighting')}>
            <IconAndTitle>ОСВЕЩЕНИЕ</IconAndTitle>
          </div>
        </li>
        <li className="navbar-categories__item">
          <div className="navbar-categories__link" onClick={() => handleClickOpenSection('music')}>
            <IconAndTitle>МУЗЫКАЛЬНЫЕ ИНСТРУМЕНТЫ</IconAndTitle>
          </div>
        </li>
        <li className="navbar-categories__item">
          <div className="navbar-categories__link" onClick={() => handleClickOpenSection('forgedProducts')}>
            <IconAndTitle>КОВАННЫЕ ИЗДЕЛИЯ</IconAndTitle>
          </div>
        </li>
      </ul>
    </div>
  )
}
