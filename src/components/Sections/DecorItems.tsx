// import { useSelector } from 'react-redux'
import Slider from 'react-slick'
import { IconAndTitle } from '../../components/IconAndTitle/IconAndTitle'
// import { RootState } from '../../redux/store'
import { ItemCard } from '../ItemCard/ItemCard'
import { sliderSettings } from './sliderSettings'
import './SectionItems.scss'
import { useEffect, useState } from 'react'

export function DecorItems() {
  // const { data: posts } = useSelector((state: RootState) => state.decor)

  const [posts, setPosts] = useState<{ id: string; image: string; item: string; name: string; size: string; material: string }[]>([])

  useEffect(() => {
    fetch('http://localhost:8036/decor')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

  const decor = posts.map((item) => <ItemCard key={item.id} post={item} />)

  return (
    <div className="section-items" id="decor">
      <div className="section-items__container _container">
        <div className="section-items__body">
          <div className="section-items__title _title-catalog">
            <IconAndTitle>Декор</IconAndTitle>
          </div>
          <div className="section-items__slider slider-items">
            <div className="slider-items slider">
              <Slider
                {...sliderSettings}>
                {decor}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
