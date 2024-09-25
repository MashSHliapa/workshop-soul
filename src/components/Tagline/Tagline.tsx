import image from '../images/tagline_image.png'
import './Tagline.scss'

export function Tagline() {
  return (
    <div className="tagline">
      <div className="tagline__container _container">
        <div className="tagline__body">
          <div className="tagline__row">
            <div className="tagline__info">
              <div className="tagline__title">Когда ищешь красоту</div>
              <div className="tagline__subtitle">найдешь её в природе!</div>
              <div className="tagline__text">Надо только <br /> присмотреться!</div>
            </div>
            <div className="tagline__image">
              <img src={image} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
