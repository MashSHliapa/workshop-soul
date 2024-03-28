// import image1 from '../images/catalog/bijouterie_image.png'
// import image1 from '../images/newitems/picture6.jpg'
import { IconAndTitle } from '../IconAndTitle/IconAndTitle'
import image1 from '../images/newitems/picture6.jpg'
import vector from '../images/catalog/catalog_vector_right.png'
import './CatalogCardsOdd.scss'


export function CatalogCardsOdd() {
  return (
    <div className="card-odd">
      <div className="card-odd__body _body-catalog">

        <div className="card-odd__info-catalog info-catalog">
          <div className="info-catalog__icon-and-title">
            <IconAndTitle>Бижутерия</IconAndTitle>
          </div>

          <div className="info-catalog__subtitle">В каждом завершенном образе можно увидеть "изюминку"- украшение, подчёркивающее характер. Это необходимая часть гардероба стильного человека. Здесь Вы найдёте уникальную бижутерию для любого образа.</div>

          <div className="info-catalog__direction">
            <div className="info-catalog__text">СМОТРЕТЬ ИЗДЕЛИЯ</div>
            <div className="info-catalog__vector">
              <img src={vector} alt="vector" />
            </div>
          </div>
        </div>

        <div className="card-odd__image _image-catalog">
          <img src={image1} alt="image1" />
        </div>

      </div>
    </div>
  )
}
