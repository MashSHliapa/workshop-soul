import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Action, ThunkDispatch } from '@reduxjs/toolkit'
import Slider from 'react-slick'
import { sliderSettings } from './sliderSettings'
import { ItemCard } from '../ItemCard/ItemCard'
import { IconAndTitle } from '../IconAndTitle/IconAndTitle'
import { RootState } from '../../redux/store'
import { fetchTalismans } from '../../redux/talismansSlice'
import { ReturnBack } from '../ReturnBack/ReturnBack'
import { IPropsFuncReturnBack, IPropsItems } from '../../types/interfaces'

export const Talismans = ({ handleClickReturnBack }: IPropsFuncReturnBack) => {
  const { data: posts, loading, error } = useSelector((state: RootState) => state.talismans)
  const dispatch = useDispatch<ThunkDispatch<RootState, null, Action>>()

  useEffect(() => {
    dispatch(fetchTalismans())
  }, [dispatch])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div className="text-danger">{error}</div>
  }

  const talismans = posts.map((item: IPropsItems) => <ItemCard key={item.id} post={item} />)

  return (
    <div className="section-items">
      <div className="section-items__container">
        <div className="section-items__body">
          <div className="section-items__header-box">
            <div className="section-items__title _title-catalog">
              <IconAndTitle>Талисманы</IconAndTitle>
            </div>
            <div className="section-items__return-back">
              <ReturnBack handleClickReturnBack={handleClickReturnBack} />
            </div>
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
