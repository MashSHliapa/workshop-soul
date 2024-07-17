import { Link } from 'react-router-dom'
import { IPropsNewItems } from '../../types/interfaces'
import { useRef } from 'react'
import { newItemsScroll } from '../../helpers/newItemsScroll'
import './NewItemAdd.scss'

export function NewItemAdd(props: { post: IPropsNewItems }) {

  const pageElement = useRef(null)

  function handleClickPageWithScroll() {
    newItemsScroll(pageElement)
  }
  return (
    <Link to={`/selected/${props.post.id}`} ref={pageElement}>
      <div className="new-item-add" onClick={handleClickPageWithScroll}>
        <div className="new-item-add__body">
          <div className="new-item-add__image">
            <img src={props.post.image} alt="newitems2" />
          </div>
          <div className="new-item-add__data">
            <h6 className="new-item-add__title _title">{props.post.item} <span>{props.post.name}</span></h6>
            <div className="new-item-add__separator _separator"></div>
          </div>
        </div>
      </div>
    </Link>
  )
}
