import imageTop from '../images/green_vector_up.png'
import './GoToTop.scss'

export function GoToTop() {
  return (
    <a href="#top" className="goToTop">
      <span className="goToTop__title">Наверх</span>
      <img src={imageTop} className="goToTop__image" />
    </a>
  )
}
