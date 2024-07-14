import { useSelector } from 'react-redux'
import Slider from 'react-slick'
import { IconAndTitle } from '../../components/IconAndTitle/IconAndTitle'
import { RootState } from '../../redux/store'
import { ItemCard } from '../ItemCard/ItemCard'
import { sliderSettings } from './sliderSettings'
import './SectionItems.scss'

export function BijouterieItems() {
  const { data: posts } = useSelector((state: RootState) => state.bijouterie)

  const bijouterie = posts.map((item) => <ItemCard key={item.id} post={item} />)

  return (
    <div className="section-items" id="bijouterie">
      <div className="section-items__container _container">
        <div className="section-items__body">
          <div className="section-items__title">
            <IconAndTitle>Бижутерия</IconAndTitle>
          </div>
          <div className="section-items__slider slider-items">
            <div className="slider-items slider">
              <Slider
                {...sliderSettings}>
                {bijouterie}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
