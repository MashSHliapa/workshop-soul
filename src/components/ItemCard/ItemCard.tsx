import img from '../../components/images/newitems/picture6.jpg'

import './ItemCard.scss'
export const ItemCard = () => {
  return (
    <div className="item-card">
      <div className="item-card__body">
        <div className="item-card__image">
          <img src={img} alt="item" />
        </div>
        <div className="item-card__data">
          <h6 className="item-card__title">Шум дождя <span>"Бесконечность"</span></h6>
          <div className="item-card__separator"></div>
          <div className="item-card__text-size">Размер: 40X25 мм</div>
          <div className="item-card__text-material">Материал: серебряная цепочка,
          природный камень и дерево хвойных пород c высокой плотностью</div>
        </div>
      </div>
    </div>
  )
}
