import logo from '../images/logo.svg'
import './Logo.scss'

export function Logo() {
  return (
    <div className="logo">
      <div className="logo__image">
        <img src={logo} alt="logo" />
      </div>
    </div>
  )
}
