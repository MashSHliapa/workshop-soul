import { NavLink } from 'react-router-dom'
import './BreadCrumbs.scss'

export function BreadCrumbs({ crumbs }: { crumbs: { name: string, path: string }[] }) {
  const currentCrumbs = crumbs[crumbs.length - 1].name

  return (
    <div className="breadCrumbs">
      <ul className="breadCrumbs__list">
        {crumbs.map((item, index) => (
          <li className={item.name === currentCrumbs ? 'breadCrumbs__item breadCrumbs__item_active' : 'breadCrumbs__item'} key={index}>
            {item.name === currentCrumbs ? item.name : <NavLink to={item.path} target="_top">{item.name}</NavLink>}
            {index < crumbs.length - 1 && <span className="breadCrumbs__slash">/</span>}
          </li>
        ))}
      </ul>
    </div>
  )
}
