import { Link, useLocation } from 'react-router-dom'
import { useRef } from 'react'
import { newItemsScroll } from '../../helpers/newItemsScroll'
import { pathnameMainPage } from '../../helpers/pathnameMainPage'
import { IPropsItems } from '../../types/interfaces'
import './NewItemAdd.scss'

export function NewItemAdd(props: { post: IPropsItems }) {
  const pageElement = useRef(null)

  const location = useLocation()
  pathnameMainPage(location)

  function handleClickPageWithScroll() {
    newItemsScroll(pageElement)
  }

  return (
    <Link to={pathnameMainPage(location) ? `/selected/${props.post.id}` : `/newItems/${props.post.id}`} ref={pageElement}>
      <div className="new-item-add" onClick={handleClickPageWithScroll}>
        <div className="new-item-add__body">
          <div className="new-item-add__image _image">
            <img src={props.post.image} alt="newitems2" />
          </div>
          <div className="new-item-add__data">
            <h6 className="new-item-add__title">
              {props.post.item} <span>{props.post.name}</span>
            </h6>
            <div className="new-item-add__separator _separator"></div>
          </div>
        </div>
      </div>
    </Link>
  )
}
