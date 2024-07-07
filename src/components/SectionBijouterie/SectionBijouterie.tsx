import { useSelector } from 'react-redux'
import Slider from 'react-slick'
import { IconAndTitle } from '../IconAndTitle/IconAndTitle'
import { RootState } from '../../redux/store'
import { ItemCard } from '../ItemCard/ItemCard'
import { sliderSettings } from './sliderSettings'
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
          <div className="section-bijouterie__slider slider-items">
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
