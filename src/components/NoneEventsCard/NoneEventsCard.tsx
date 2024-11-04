import { NavLink } from 'react-router-dom'
import { InstagramAndVK } from '../InstagramAndVK/InstagramAndVK'
import './NoneEventsCard.scss'

export function NoneEventsCard() {
  return (
    <div className="none-events-card">
      <div className="none-events-card__body">
        <h3 className="none-events-card__title"> В БЛИЖАЙШЕЕ ВРЕМЯ МЕРОПРИЯТИЙ НЕ ОЖИДАЕТСЯ </h3>
        <h4 className="none-events-card__subtitle">Следите за всеми  новостями в моих соц.сетях</h4>
        <div className="none-events-card__social-media">
          <InstagramAndVK />
        </div>
        <p className="none-events-card__text">А чтобы не скучать, переходите в каталог и закажите что-то для себя!</p>
        <p className="none-events-card__link">
          <NavLink to="/catalog" target="_top">перейти в каталог</NavLink>
        </p>
      </div>
    </div>
  )
}
