import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Action, ThunkDispatch } from '@reduxjs/toolkit'
import Slider from 'react-slick'
import { sliderSettings } from './sliderSettings'
import { ItemCard } from '../ItemCard/ItemCard'
import { IconAndTitle } from '../IconAndTitle/IconAndTitle'
import { RootState } from '../../redux/store'
import { fetchMusic } from '../../redux/musicSlice'
import { IPropsItems } from '../../types/interfaces'

export const MusicItems = () => {
  const { data: posts, loading, error } = useSelector((state: RootState) => state.music)
  const dispatch = useDispatch<ThunkDispatch<RootState, null, Action>>()

  useEffect(() => {
    dispatch(fetchMusic())
  }, [dispatch])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div className="text-danger">{error}</div>
  }

  const music = posts.map((item: IPropsItems) => <ItemCard key={item.id} post={item} />)

  return (
    <div className="section-items" id="music">
      <div className="section-items__body">
        <div className="section-items__title _title-catalog">
          <IconAndTitle>Музыка</IconAndTitle>
        </div>
        <div className="section-items__slider slider-items">
          <div className="slider-items slider">
            <Slider
              {...sliderSettings}>
              {music}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}
