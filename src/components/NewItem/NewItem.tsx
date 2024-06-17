import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from '../../redux/store'
import label from '../../components/images/newitems/new_label.png'
import './NewItem.scss'

export function NewItem() {
  const { data: posts } = useSelector((state: RootState) => state.newItemsAdd)
  const { newItemId } = useParams<string>()
  const selectedNewItem = posts.find((item) => item.id == newItemId)

  return (
    <div className="new-item">
      <div className="new-item__body">
        <div className="new-item__image">
          <img src={selectedNewItem?.image} alt="newitem" />
        </div>
        <div className="new-item__image-label">
          <img src={label} alt="label" />
        </div>
        <div className="new-item__data">
          <h4 className="new-item__title">{selectedNewItem?.item} <span>{selectedNewItem?.name}</span></h4>
          <div className="new-item__separator"></div>
          <div className="new-item__text-size">Размер: {selectedNewItem?.size}мм</div>
          <div className="new-item__text-material">Материал: {selectedNewItem?.material}</div>
        </div>
      </div>
    </div>
  )
}
