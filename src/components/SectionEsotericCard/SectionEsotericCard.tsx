import { IPropsSectionEsotericCard } from '../../types/interfaces'
import './SectionEsotericCard.scss'

export const SectionEsotericCard = (props: IPropsSectionEsotericCard) => {
  return (
    <div className="section-esoteric-card">
      <div className="section-esoteric-card__body">
        <div className="section-esoteric-card__data">
          <div className="section-esoteric-card__image">
            <img src={props.image} alt="newitem" />
          </div>
          <div className="section-esoteric-card__info">
            <h5 className="section-esoteric-card__title _title">{props.item}</h5>
            <div className="section-esoteric-card__separator _separator"></div>
            <div className="section-esoteric-card__text">{props.description}</div>
          </div>
        </div>
        <button className="section-esoteric-card__button _button" onClick={() => window.location.href = "#"}>
          Смотреть
        </button>
      </div>
    </div>
  )
}
