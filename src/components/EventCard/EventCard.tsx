import { IPropsEventCard } from '../../types/interfaces'
import './EventCard.scss'

export function EventCard(props: {post: IPropsEventCard}) {

  return (
    <div className="event-card">
      <div className="event-card__body">
        <div className="event-card__info-event info-event">
          <div className="info-event__image _image">
            <img src={props.post.image} alt="img" />
          </div>
          <div className="info-event__name">
            <div className="info-event__title">{props.post.title}</div>
            <div className="info-event__subtitle">{props.post.subtitle}</div>
          </div>

          <div className="info-event__date date">
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

        <div className="event-card__description-event description-event">
          <div className="description-event__info">
            <div className="description-event__title">{props.post["title-description"]}<br />
              {props.post["subtitle-description"]}
            </div>
            <div className="description-event__text"><p>{props.post.text1}</p><p>{props.post.text2}</p>
            </div>
          </div>

          <div className="description-event__clarifications">
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
