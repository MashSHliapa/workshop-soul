import { IconAndTitle } from '../IconAndTitle/IconAndTitle'
import { IPropsCatalogCards } from '../../types/interfaces'

export function CatalogCardsEven({ handleClickOpenSection, ...props }: IPropsCatalogCards) {
  return (
    <div className="card-even _card-catalog">
      <div className="card-even__body _body-catalog">

        <div className="card-odd__image _image-catalog">
          <img src={props.image} alt="image" />
        </div>

        <div className="card-even__info-catalog info-catalog">
          <div className="info-catalog__icon-and-title">
            <IconAndTitle>{props.name}</IconAndTitle>
          </div>
          <h5 className="info-catalog__subtitle">{props.description}</h5>
          <div className="info-catalog__direction" onClick={handleClickOpenSection}>
            <div className="info-catalog__text">СМОТРЕТЬ ИЗДЕЛИЯ</div>
            <div className="info-catalog__vector"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
