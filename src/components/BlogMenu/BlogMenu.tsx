import { NavLink } from 'react-router-dom';
import './BlogMenu.scss';

export function BlogMenu() {
  return (
    <div className="blog-menu">
      <ul className="blog-menu__list">
        <li className="blog-menu__item">
          <NavLink to="/blog" target="_top">
            Обо мне
          </NavLink>
        </li>
        <li className="blog-menu__item">
          <NavLink to="/blog/tradeFairs" target="_top">
            Ярмарки
          </NavLink>
        </li>
        <li className="blog-menu__item">
          <NavLink to="/blog/festivals" target="_top">
            Фестивали
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
