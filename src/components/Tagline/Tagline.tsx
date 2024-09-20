import './Tagline.scss'
import image from '../images/tagline_image.png'

export function Tagline() {
  return (
    <div className="tagline">
      <div className="tagline__container _container">
        <div className="tagline__body">
          <div className="tagline__row">
            <div className="tagline__column">
              <div className="tagline__info">
                <div className="tagline__title">Здесь твой слоган Здесь твой слоган!!!</div>
                <div className="tagline__subtitle">это надпись, все будет ок!!</div>
                <div className="tagline__text">никогда не унывай!</div>
              </div>
            </div>

            <div className="tagline__column">
              <div className="tagline__image">
                <img src={image} alt="image" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
