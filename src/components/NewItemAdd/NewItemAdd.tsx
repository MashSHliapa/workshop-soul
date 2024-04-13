import { IPropsNewItems } from '../../types/interfaces'
import './NewItemAdd.scss'

export function NewItemAdd(props: { post: IPropsNewItems }) {
  return (
    <div className="new-item-add">
      <div className="new-item-add__body">
        <div className="new-item-add__image">
          <img src={props.post.image} alt="newitems2" />
        </div>
        <div className="new-item-add__data">
          <h6 className="new-item-add__title">{props.post.item} <span>{props.post.name}</span></h6>
          <div className="new-item-add__separator"></div>
          <div className="new-item-add__text-size">Размер: {props.post.size}мм</div>
          <div className="new-item-add__text-material">Материал: {props.post.material}</div>
        </div>
      </div>
    </div>
  )
}
