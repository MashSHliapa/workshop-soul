import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { IPropsNavbar } from '../../types/interfaces';
import { BlogMenu } from '../BlogMenu/BlogMenu';
import { pathnameMainPage } from '../../helpers/pathnameMainPage';
import vectorExpland from '../images/esoterics/vector_expland.svg';
import vectorRollUp from '../images/esoterics/vector_rollup.svg';
import './Navbar.scss';

export function Navbar(props: IPropsNavbar) {
  const location = useLocation();
  pathnameMainPage(location);

  const [openMenu, setOpenMenu] = useState(false);
  const buttonVector = openMenu ? vectorRollUp : vectorExpland;

  const handleClickOpenMenu = () => {
    setOpenMenu((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutsideMenu = (event: MouseEvent | React.MouseEvent) => {
      if (!(event.target as HTMLFormElement).closest('.item-blog')) {
        setOpenMenu(false);
      }
    };
    document.addEventListener('click', handleClickOutsideMenu);
    return () => document.removeEventListener('click', handleClickOutsideMenu);
  }, []);

  return (
    <div className="navbar">
      <nav className="navbar__body">
        <ul className="navbar__list">
          <li className="navbar__item item-blog" onClick={handleClickOpenMenu}>
            <div className="item-blog__button">
              <div className="item-blog__text">Блог</div>
              <div className="item-blog__vector">
                <img src={buttonVector} alt="vector" />
              </div>
            </div>
            {openMenu && (
              <div className="item-blog__blog-menu">
                <BlogMenu />
              </div>
            )}
          </li>
          {pathnameMainPage(location) ? (
            <li className="navbar__item" onClick={() => (window.location.href = '#contacts')}>
              {props.contacts}
            </li>
          ) : (
            <NavLink to="contacts" target="_top" className="navbar__item">
              {props.contacts}
            </NavLink>
          )}
          {pathnameMainPage(location) ? (
            <li className="navbar__item" onClick={() => (window.location.href = '#new-items')}>
              {props.newItems}
            </li>
          ) : (
            <NavLink to="newItems/1" target="_top" className="navbar__item">
              {props.newItems}
            </NavLink>
          )}
          {pathnameMainPage(location) ? (
            <li className="navbar__item" onClick={() => (window.location.href = '#catalog')}>
              {props.catalog}
            </li>
          ) : (
            <NavLink to="catalog" target="_top" className="navbar__item">
              {props.catalog}
            </NavLink>
          )}
        </ul>
      </nav>
    </div>
  );
}
