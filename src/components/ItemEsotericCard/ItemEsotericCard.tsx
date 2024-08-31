import { IPropsItems } from '../../types/interfaces'
import extans from '../images/esoterics/vector_expland.svg'
import rollUp from '../images/esoterics/vector_rollup.svg'

export const ItemEsotericCard: React.FC<{ post: IPropsItems; handleClickToggleDescription: (id: number) => void; isOpenDescription: boolean }> = (props) => {

  const buttonImage = props.isOpenDescription ? rollUp : extans;

  return (
    <div className="item-esoteric-card" key={props.post.id}>
      <div className="item-esoteric-card__item-card item-card">
        <div className="item-card__body">
          <div className="item-card__image _image">
            <img src={props.post.image} alt="img" />
          </div>
          <div className="item-card__info">
            <h6 className="item-card__title _title">{props.post.item} <span>{props.post.name}</span></h6>
            <div className="item-card__separator _separator"></div>
            <div className="item-card__text-size">Размер: {props.post.size} мм</div>
            <div className="item-card__text-material">Материал: {props.post.material}</div>
            <button className="item-card__button _button-description" onClick={() => props.handleClickToggleDescription(props.post.id)}>
              <div className="item-card__button-text">Узнать описание</div>
              <div className="item-card__button-image">
                <img src={buttonImage} alt="vector" />
              </div>
            </button>
          </div>
        </div>
        {props.isOpenDescription && (
            <div className="item-card__text-description">{props.post.description}</div>
          )}
      </div>
    </div>
  )
}
