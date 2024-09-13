import './NavbarCategories.scss'

export function NavbarCategories({ handleClickOpenSection }: { handleClickOpenSection: (section: string) => void }) {
  return (
    <div className="navbar-categories">
      <ul className="navbar-categories__list">
        <li className="navbar-categories__item">
          <div className="navbar-categories__link" onClick={() => handleClickOpenSection('bijouterie')}>
            БИЖУТЕРИЯ
          </div>
        </li>
        <li className="navbar-categories__item">
          <div className="navbar-categories__link" onClick={() => handleClickOpenSection('esoteric')}>
            Эзотерика
          </div>
          <ul className="navbar-categories__list-esoteric" >
            <li className="navbar-categories__item-esoteric">
              <div className="navbar-categories__link-esoteric" onClick={() => handleClickOpenSection('amulets')}>
                ОБЕРЕГИ
              </div>
            </li>
            <li className="navbar-categories__item-esoteric">
              <div className="navbar-categories__link-esoteric" onClick={() => handleClickOpenSection('runes')}>
                РУНЫ
              </div>
            </li>
            <li className="navbar-categories__item-esoteric">
              <div className="navbar-categories__link-esoteric" onClick={() => handleClickOpenSection('talisman')}>
                ТАЛИСМАНЫ
              </div>
            </li>
            <li className="navbar-categories__item-esoteric">
              <div className="navbar-categories__link-esoteric" onClick={() => handleClickOpenSection('')}>
                ЛОВЦЫ СНОВ
              </div>
            </li>
          </ul>
        </li>
        <li className="navbar-categories__item">
          <div className="navbar-categories__link" onClick={() => handleClickOpenSection('decor')}>
            Декор
          </div>
        </li>
        <li className="navbar-categories__item">
          <div className="navbar-categories__link" onClick={() => handleClickOpenSection('lighting')}>
            ОСВЕЩЕНИЕ
          </div>
        </li>
        <li className="navbar-categories__item">
          <div className="navbar-categories__link" onClick={() => handleClickOpenSection('music')}>
            МУЗЫКАЛЬНЫЕ ИНСТРУМЕНТЫ
          </div>
        </li>
        <li className="navbar-categories__item">
          <div className="navbar-categories__link" onClick={() => handleClickOpenSection('forgedProducts')}>
            КОВАННЫЕ ИЗДЕЛИЯ
          </div>
        </li>
      </ul>
    </div>
  )
}
