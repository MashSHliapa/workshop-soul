import icon from '../images/contacts/contacts_icon.png'
import vector from '../images/catalog/catalog_vector_right.png'
import image1 from '../images/newitems/picture7.jpg'


export function CatalogCardsEven() {
  return (
    <div className="card-even _card-catalog">
      <div className="card-even__body _body-catalog">

        <div className="card-odd__image _image-catalog">
          <img src={image1} alt="image1" />
        </div>

        <div className="card-even__info-catalog info-catalog">
          <div className="info-catalog__name">
            <div className="info-catalog__icon">
              <img src={icon} alt="icon" />
            </div>
            <div className="info-catalog__title">освещение</div>
          </div>

          <div className="info-catalog__subtitle">Свет наполняет людей спокойствием и теплом. Он нас завораживает, даёт ощущение праздника и наполняет сердце тайной.
            Насладитесь мягким светом неповторимых ночников "Soul"</div>

          <div className="info-catalog__direction">
            <div className="info-catalog__text">СМОТРЕТЬ ИЗДЕЛИЯ</div>
            <div className="info-catalog__vector">
              <img src={vector} alt="vector" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
