import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { sliderSettings } from './sliderSettings'
import { IconAndTitle } from '../IconAndTitle/IconAndTitle'
import { ItemCard } from '../ItemCard/ItemCard'

export const Talismans = () => {
  const [posts, setPosts] = useState<{ id: string; image: string; item: string; name: string; size: string; material: string }[]>([])

  useEffect (() => {
    fetch('http://localhost:8036/talismans')
    .then(res => res.json())
    .then(data => setPosts(data))
  })

  const talismans = posts.map((item) => <ItemCard key={item.id} post={item} />)

  return (
    <div className="section-items">
      <div className="section-items__container">
        <div className="section-items__body">
          <div className="section-items__title _title-catalog">
            <IconAndTitle>Талисманы</IconAndTitle>
          </div>
          <div className="section-items__slider slider-items">
            <div className="slider-items slider">
              <Slider
                {...sliderSettings}>
                {talismans}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}