import { useSelector } from 'react-redux'
import { IconAndTitle } from '../IconAndTitle/IconAndTitle'
import { RootState } from '../../redux/store'
import { ItemCard } from '../ItemCard/ItemCard'
import './SectionBijouterie.scss'

export function SectionBijouterie() {
  const { data: posts } = useSelector((state: RootState) => state.bijouterie)

  const bijouterie = posts.map((item) => <ItemCard key={item.id} post={item} />)

  return (
    <div className="section-bijouterie" id="bijouterie">
      <div className="section-bijouterie__container _container">
        <div className="section-bijouterie__body">
          <div className="section-bijouterie__title">
          <IconAndTitle>Бижутерия</IconAndTitle>
          </div>
          <div className="section-bijouterie__cards">
            {bijouterie}
          </div>
        </div>
      </div>
    </div>
  )
}
