import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Action, ThunkDispatch } from '@reduxjs/toolkit'
import Slider from 'react-slick'
import { sliderSettings } from './sliderSettings'
import { ItemCard } from '../ItemCard/ItemCard'
import { IconAndTitle } from '../../components/IconAndTitle/IconAndTitle'
import { RootState } from '../../redux/store'
import { fetchBijouterie } from '../../redux/bijouterieSlice'
import { IPropsItems } from '../../types/interfaces'
import './SectionItems.scss'

export function BijouterieItems() {
  const { data: posts, loading, error } = useSelector((state: RootState) => state.bijouterie)
  const dispatch = useDispatch<ThunkDispatch<RootState, null, Action>>()

  useEffect(() => {
    dispatch(fetchBijouterie())
  }, [dispatch])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div className="text-danger">{error}</div>
  }

  const bijouterie = posts.map((item: IPropsItems) => <ItemCard key={item.id} post={item} />)

  return (
    <div className="section-items" id="bijouterie">
      <div className="section-items__container _container">
        <div className="section-items__body">
          <div className="section-items__title _title-catalog">
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
