import { useContext } from 'react';
import { SliderContext } from '../Context/SliderContext';
import './NavbarCategories.scss';

export function NavbarCategories({ handleClickOpenSection }: { handleClickOpenSection: (section: string) => void }) {
  const { setActiveIndex } = useContext(SliderContext);

  function handleClickOpenSectionEsoteric(section: string, index: number) {
    handleClickOpenSection(section);
    setActiveIndex(index);
  }

  return (
    <div className="navbar-categories">
      <ul className="navbar-categories__list">
        <li className="navbar-categories__item">
          <div className="navbar-categories__link" onClick={() => handleClickOpenSection('bijouterie')}>
            Украшения
          </div>
        </li>
        <li className="navbar-categories__item">
          <div className="navbar-categories__link" onClick={() => handleClickOpenSection('esoteric')}>
            Эзотерика
          </div>
          <ul className="navbar-categories__list-esoteric">
            {['ОБЕРЕГИ', 'РУНЫ', 'ТАЛИСМАНЫ', 'ЛОВЦЫ СНОВ'].map((item, index) => (
              <li className="navbar-categories__item-esoteric" key={index}>
                <div
                  className="navbar-categories__link-esoteric"
                  onClick={() => handleClickOpenSectionEsoteric('esoteric', index)}
                >
                  {item}
                </div>
              </li>
            ))}
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
  );
}
