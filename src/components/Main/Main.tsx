import { Catalog } from '../../pages/Catalog/Catalog';
import { Contacts } from '../../pages/Contacts/Contacts';
import { NewItems } from '../../pages/NewItems/NewItems';
import { Tagline } from '../Tagline/Tagline';
import dowm from '../images/main_down.png';
import background from '../../components/images/background_main.png';
import './Main.scss';

export function Main() {
  return (
    <>
      <div className="main">
        <div className="main__container _container">
          <div className="main__body">
            <h1 className="main__title">
              ИЗДЕЛИЯ <br /> РУЧНОЙ РАБОТЫ <span>ИЗ ПРИРОДНЫХ МАТЕРИАЛОВ</span>
            </h1>
            <div className="main__info">
              <h4 className="main__text">
                Сказочна и богата природа. Разнообразные чувства переполняют нас при встрече с ней! В любое время года
                она открывает все свои стороны, давая простор фантазии и творчеству, наполняя нежностью и добротой душу
                человека. Так и изделия, изготовленные в мастерской SOUL, наполнены энергией природы. Каждое изделие
                индивидуально и неповторимо, благодаря умениям и внимательному подходу к деталям, профессионального
                художника-мастера Анастасии Кирашёвой.
              </h4>
              <button className="main__button _button" onClick={() => (window.location.href = '#catalog')}>
                Каталог
              </button>
            </div>
            <a href="#new-items" className="main__down">
              <img src={dowm} alt="down" />
            </a>
          </div>
        </div>
        <div className="main__background background _ibg">
          <img src={background} alt="background" />
        </div>
      </div>
      <NewItems />
      <Catalog />
      <Contacts />
      <Tagline />
    </>
  );
}
