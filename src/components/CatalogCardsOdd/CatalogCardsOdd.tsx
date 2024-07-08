import { IPropsCatalogCards } from '../../types/interfaces'
import { IconAndTitle } from '../IconAndTitle/IconAndTitle'
import image1 from '../images/newitems/picture6.jpg'
import './CatalogCards.scss'

export function CatalogCardsOdd({ handleClickOpenSection, ...props }: IPropsCatalogCards) {
  return (
    <div className="card-odd _card-catalog">
      <div className="card-odd__body _body-catalog">

        <div className="card-odd__info-catalog info-catalog">
          <div className="info-catalog__icon-and-title">
            <IconAndTitle>{props.name}</IconAndTitle>
          </div>
          <div className="info-catalog__subtitle">{props.description}</div>
          <div className="info-catalog__direction" onClick={handleClickOpenSection}>
            <div className="info-catalog__text">СМОТРЕТЬ ИЗДЕЛИЯ</div>
            <div className="info-catalog__vector"></div>
          </div>
        </div>

        <div className="card-odd__image _image-catalog">
          <img src={image1} alt="image1" />
        </div>

      </div>
    </div>
  )
}
