import icon from '../images/icon_eye.png'
import './IconAndTitle.scss'

export function IconAndTitle(props: { children: string }) {
  return (
    <div className='icon-title'>
      <div className="icon-title__icon">
        <img src={icon} alt="icon" />
      </div>
      <h4 className="icon-title__title">{props.children}</h4>
    </div>
  )
}
