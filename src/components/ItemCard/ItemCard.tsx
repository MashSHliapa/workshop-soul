import { IPropsNewItems } from '../../types/interfaces'
import './ItemCard.scss'

export const ItemCard = (props: { post: IPropsNewItems }) => {
  return (
    <div className="item-card">
      <div className="item-card__body">
        <div className="item-card__image">
          <img src={props.post.image} alt="img" />
        </div>
        <div className="item-card__data">
          <h6 className="item-card__title _title">{props.post.item} <span>{props.post.name}</span></h6>
          <div className="item-card__separator _separator"></div>
          <div className="item-card__text-size">Размер: {props.post.size} мм</div>
          <div className="item-card__text-material">Материал: {props.post.material}</div>
        </div>
      </div>
    </div>
  )
}
