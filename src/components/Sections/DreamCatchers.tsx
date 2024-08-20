import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Action, ThunkDispatch } from '@reduxjs/toolkit'
import Slider from 'react-slick'
import { sliderSettings } from './sliderSettings'
import { ItemCard } from '../ItemCard/ItemCard'
import { IconAndTitle } from '../IconAndTitle/IconAndTitle'
import { RootState } from '../../redux/store'
import { fetchDreamCatchers } from '../../redux/dreamCatchersSlice'
import { IPropsItems } from '../../types/interfaces'

export const DreamCathers = () => {
  const {data: posts, loading, error} = useSelector((state:RootState) => state.dreamCatchers)
  const dispatch = useDispatch<ThunkDispatch<RootState, null, Action>>()

  useEffect(() => {
    dispatch(fetchDreamCatchers())
  }, [dispatch])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div className="text-danger">{error}</div>
  }

  const dreamCatchers = posts.map((item: IPropsItems) => <ItemCard key={item.id} post={item} />)

  return (
    <div className="section-items">
      <div className="section-items__container">
        <div className="section-items__body">
          <div className="section-items__title _title-catalog">
            <IconAndTitle>Ловцы снов</IconAndTitle>
          </div>
          <div className="section-items__slider slider-items">
            <div className="slider-items slider">
              <Slider
                {...sliderSettings}>
                {dreamCatchers}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
