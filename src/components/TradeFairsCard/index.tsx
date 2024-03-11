import './TradeFairsCard.scss'
import image from '../images/newitems/picture8.jpg'

export function TradeFairsCard() {
  return (
    <div className="fairs-card">
      <div className="fairs-card__body">
        <div className="fairs-card__info-fairs info-fairs">
          <div className="info-fairs__image">
            <img src={image} alt="img" />
          </div>
          <div className="info-fairs__name">
            <div className="info-fairs__title">Горошекмаркетgggg ggggggg gggggg</div>
            <div className="info-fairs__subtitle">в ТЦ МОМО</div>
          </div>

          <div className="info-fairs__date date">
            <div className="date__deadlines">
              <span className='date__deadlines-pretext'>с</span>
              <span className='date__number'>27</span>сентября
            </div>
            <div className="date__deadlines">
              <span className='date__deadlines-pretext'>по</span>
              <span className='date__number'>5</span>октября
            </div>
            <div className="date__year">2024</div>
          </div>
        </div>

        <div className="fairs-card__description-fairs description-fairs">
          <div className="description-fairs__title">Тёплый «Горошекмаркет» <br />
            27 и 28 февраля в ТЦ МОМО на 2 этаже.
          </div>
          <div className="description-fairs__text"><p>Уютная встреча с любимыми мастерами, у которых вы найдёте множестводушевных вещиц ручной работы:</p>
            Обложки на документы из натуральной кожи с забавными изображениямисвечи из соевого воска и арома-диффузоры с оригинальными ароматамиигрушки из кожи и меха, дерева и текстиля, которые порадуют не только детей, но и взрослых пряники, мёд и домашний квас</div>
          <div className="description-fairs__info">
            27, 28 января 2024 года<br />
            <b>10:00-22:00</b><br />
            2 этаж ТЦ МОМО (пр-т Партизанский, 150А)<br />
            вход свободный!<br />
            <b>0+</b><br />
          </div>
        </div>
      </div>
    </div>
  )
}
