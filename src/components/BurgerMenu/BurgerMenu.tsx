import { useEffect, useState } from 'react';
import { Navbar } from '../Navbar/Navbar';
import './BurgerMenu.scss';

export function BurgerMenu() {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  function handleClickToggleNavbar() {
    setIsOpenNavbar(!isOpenNavbar);
    document.body.style.overflow = isOpenNavbar ? 'auto' : 'hidden';

    const burgerIcon = document.querySelector('.burger-menu__icon');
    burgerIcon?.classList.toggle('_active');

    const navbarBody = document.querySelector('.navbar__body');
    navbarBody?.classList.toggle('_active');
  }

  useEffect(() => {
    const handleClickCloseNavbar = (event: MouseEvent | React.MouseEvent) => {
      if (
        !(event.target as HTMLElement).closest('.burger-menu__icon') &&
        !(event.target as HTMLElement).closest('.item-blog')
      ) {
        setIsOpenNavbar(false);
        document.body.style.overflow = !isOpenNavbar ? 'auto' : 'hidden';
        const burgerIcon = document.querySelector('.burger-menu__icon');
        burgerIcon?.classList.remove('_active');
      }
    };

    document.addEventListener('click', handleClickCloseNavbar);
    return () => document.removeEventListener('click', handleClickCloseNavbar);
  }, []);

  return (
    <nav className="burger-menu">
      <div className="burger-menu__icon" onClick={handleClickToggleNavbar}>
        <span></span>
      </div>
      <div className={`nav ${isOpenNavbar ? 'nav__display-block' : 'nav__display-none'}`}>
        <div className="burger-menu__navbar">
          <Navbar blog="Блог" contacts="Контакты / Доставка" newItems="Новинки" catalog="Каталог изделий" />
        </div>
      </div>
    </nav>
  );
}
