import { IconAndTitle } from '../IconAndTitle/IconAndTitle';
import { IPropsCatalogCards } from '../../types/interfaces';

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
            <div className="info-catalog__vector">
              <svg width="101" height="15" viewBox="0 0 101 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M100.707 8.20711C101.098 7.81658 101.098 7.18342 100.707 6.79289L94.3431 0.428932C93.9526 0.0384078 93.3195 0.0384078 92.9289 0.428932C92.5384 0.819457 92.5384 1.45262 92.9289 1.84315L98.5858 7.5L92.9289 13.1569C92.5384 13.5474 92.5384 14.1805 92.9289 14.5711C93.3195 14.9616 93.9526 14.9616 94.3431 14.5711L100.707 8.20711ZM0 8.5H100V6.5H0V8.5Z"
                  fill="#18362B"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
