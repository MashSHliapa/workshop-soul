import { useEffect } from 'react'
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import Slider from 'react-slick'
import { sliderSettings } from './sliderSettings'
import { IconAndTitle } from '../../components/IconAndTitle/IconAndTitle'
import { ItemCard } from '../ItemCard/ItemCard'
import { RootState } from '../../redux/store'
import { fetchDecor } from '../../redux/decorSlice'
import { IPropsItems } from '../../types/interfaces'
import './SectionItems.scss'

export function DecorItems() {
  const { data: posts, loading, error } = useSelector((state: RootState) => state.decor)
  const dispatch = useDispatch<ThunkDispatch<RootState, null, AnyAction>>()

  useEffect(() => {
    dispatch(fetchDecor())
  }, [dispatch])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div className="text-danger">{error}</div>
  }

  const decor = posts.map((item: IPropsItems) => <ItemCard key={item.id} post={item} />)

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
