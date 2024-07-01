import { IconAndTitle} from '../IconAndTitle/IconAndTitle'
import image1 from '../images/newitems/picture7.jpg'

export function CatalogCardsEven() {
  return (
    <div className="card-even _card-catalog">
      <div className="card-even__body _body-catalog">

        <div className="card-odd__image _image-catalog">
          <img src={image1} alt="image1" />
        </div>

        <div className="card-even__info-catalog info-catalog">
          <div className="info-catalog__icon-and-title">
            <IconAndTitle>Освещение</IconAndTitle>
          </div>

          <div className="info-catalog__subtitle">Свет наполняет людей спокойствием и теплом. Он нас завораживает, даёт ощущение праздника и наполняет сердце тайной.
            Насладитесь мягким светом неповторимых ночников "Soul"</div>

          <div className="info-catalog__direction">
            <div className="info-catalog__text">СМОТРЕТЬ ИЗДЕЛИЯ</div>
            <div className="info-catalog__vector"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
