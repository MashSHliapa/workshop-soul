import './NewItem.scss'
import newitems4 from '../../components/images/newitems/picture6.jpg'
import label from '../../components/images/newitems/new_label.png'

export function NewItem() {
  return (
    <div className="new-item">
      <div className="new-item__body">
        <div className="new-item__image">
          <img src={newitems4} alt="newitem" />
        </div>
        <div className="new-item__image-label">
          <img src={label} alt="label" />
        </div>
        <div className="new-item__data">
          <h4 className="new-item__title">ОБЕРЕГ <span>“ночной лес”</span></h4>
          <div className="new-item__separator"></div>
          <div className="new-item__text-size">Размер: 40х25мм</div>
          <div className="new-item__text-material">Материал: серебряная цепочка, природный камень и дерево хвойных пород</div>
        </div>
      </div>
    </div>
  )
}
