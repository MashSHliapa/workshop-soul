import { IPropsTradeCard } from '../../types/interfaces'
import './TradeFairsCard.scss'

export function TradeFairsCard(props: {post: IPropsTradeCard}) {

  return (
    <div className="fairs-card">
      <div className="fairs-card__body">
        <div className="fairs-card__info-fairs info-fairs">
          <div className="info-fairs__image _image">
            <img src={props.post.image} alt="img" />
          </div>
          <div className="info-fairs__name">
            <div className="info-fairs__title">{props.post.title}</div>
            <div className="info-fairs__subtitle">{props.post.subtitle}</div>
          </div>

          <div className="info-fairs__date date">
            <div className="date__deadlines">
              <span className='date__deadlines-pretext'>{props.post["date-pretext-from"]}</span>
              <span className='date__number'> {props.post["number-from"]}</span>{props.post["month-from"]}
            </div>
            <div className="date__deadlines">
              <span className='date__deadlines-pretext'>{props.post["date-pretext-to"]}</span>
              <span className='date__number'> {props.post["number-to"]}</span>{props.post["month-to"]}
            </div>
          </div>
          <div className="date__year">{props.post.year}</div>
        </div>

        <div className="fairs-card__description-fairs description-fairs">
          <div className="description-fairs__info">
            <div className="description-fairs__title">{props.post["title-description"]}<br />
              {props.post["subtitle-description"]}
            </div>
            <div className="description-fairs__text"><p>{props.post.text1}</p><p>{props.post.text2}</p>
            </div>
          </div>

          <div className="description-fairs__clarifications">
            {props.post['date-description']}<br />
            <b>{props.post['time-description']}</b><br />
            {props.post['adress-description']}<br />
            {props.post.condition}<br />
            <b>{props.post.age}</b><br />
          </div>

        </div>
      </div>
    </div>
  )
}
