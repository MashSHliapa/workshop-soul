import './CatalogCardsOdd.scss'
// import image1 from '../images/catalog/bijouterie_image.png'
// import image1 from '../images/newitems/picture6.jpg'
import image1 from '../images/newitems/picture8.jpg'
import icon from '../images/contacts/contacts_icon.png'
import vector from '../images/catalog/catalog_vector_right.png'

export function CatalogCardsOdd() {
  return (
    <div className="card-odd">
      <div className="card-odd__body">

        <div className="card-odd__info">
          <div className="card-odd__name">
            <div className="card-odd__icon">
              <img src={icon} alt="icon" />
            </div>
            <div className="card-odd__title">бижутерия</div>
          </div>

          <div className="card-odd__subtitle">В каждом завершенном образе можно увидеть "изюминку"- украшение, подчёркивающее характер. Это необходимая часть гардероба стильного человека. Здесь Вы найдёте уникальную бижутерию для любого образа.</div>

          <div className="card-odd__direction">
            <div className="card-odd__text">СМОТРЕТЬ ИЗДЕЛИЯ</div>
            <div className="card-odd__vector">
              <img src={vector} alt="vector" />
            </div>
          </div>
        </div>


        <div className="card-odd__image">
          <img src={image1} alt="image1" />
        </div>


      </div>
    </div>
  )
}
