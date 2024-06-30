import { CatalogCardsEven } from '../CatalogCardsEven'
import { CatalogCardsOdd } from '../CatalogCardsOdd'
import { ItemCard } from '../ItemCard/ItemCard'
import background from '../images/background_catalog.png'
import './Catalog.scss'

export function Catalog() {
  return (
    <div className="catalog" id="catalog">
      <div className="catalog__container _container">
        <div className="catalog__body">

          <div className="catalog__row">
            <div className="catalog__column">
              <div className="catalog__title">КАТАЛОГ <span> изделий</span></div>
            </div>

            <div className="catalog__column">
              <div className="catalog__subtitle">Анастасии Кирашёвой</div>
              <div className="catalog__separator"></div>
            </div>
          </div>

          <div className="catalog__cards">
            <CatalogCardsOdd />
            <div className="catalog__esoterics">
            <ItemCard />
          </div>
            <CatalogCardsEven />
          </div>
        </div>

      </div>
      <div className="catalog__background _ibg">
        <img src={background} alt="background" />
      </div>
    </div>
  )
}
