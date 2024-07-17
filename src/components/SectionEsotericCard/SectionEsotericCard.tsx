import image from '../../components/images/newitems/picture6.jpg'
import './SectionEsotericCard.scss'
export const SectionEsotericCard = () => {
  return (
    <div className="section-esoteric-card">
      <div className="section-esoteric-card__body">
        <div className="section-esoteric-card__data">
          <div className="section-esoteric-card__image">
            <img src={image} alt="newitem" />
          </div>
          <div className="section-esoteric-card__info">
            <h5 className="section-esoteric-card__title _title">Обереги</h5>
            <div className="section-esoteric-card__separator _separator"></div>
            <div className="section-esoteric-card__text">В каждом завершенном образе можно увидеть "изюминку"- украшение, подчёркивающее характер. Это необходимая часть гардероба стильного человека. Здесь Вы найдёте уникальную бижутерию для любого образа.</div>
          </div>
        </div>
        <div className="section-esoteric-card__button _button">
          <a href="#">Смотреть</a>
        </div>
      </div>
    </div>
  )
}
