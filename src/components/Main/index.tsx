import background from '../../components/images/background_main.png'
import dowm from '../images/main_down.png'
import './Main.scss'

export function Main() {
  return (
    <div className="main">
      <div className="main__container _container">
        <div className="main__body">
          <h1 className="main__title">ИЗДЕЛИЯ <br /> РУЧНОЙ РАБОТЫ <span>ИЗ ПРИРОДНЫХ МАТЕРИАЛОВ</span></h1>
          <div className="main__info">
            <div className="main__text">Сказочна и богата природа. Какие разнообразные чувства переполняют нас при встрече с ней! В любое время года она открывает свои прелести по-разному, давая простор фантазии и творчеству, укрепляя нежные и добрые чувства в человеке. Все эти чувства человек должен пережить в детстве, чтобы потом, с накоплением жизненного опыта</div>
            <div className="main__button _button">
              <a href="#">Каталог</a>
            </div>
          </div>
          <div className="main__down">
            <img src={dowm} alt="down" />
          </div>
        </div>
      </div>
      <div className="main__background _ibg">
        <img src={background} alt="background" />
      </div>
    </div>
  )
}
