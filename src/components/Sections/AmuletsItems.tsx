import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Action, ThunkDispatch } from '@reduxjs/toolkit'
import Slider from 'react-slick'
import { sliderSettings } from './sliderSettings'
import { toggleDescription } from '../../helpers/toggleDescription'
import { closeDescription } from '../../helpers/closeDescription'
import { ItemEsotericCard } from '../ItemEsotericCard/ItemEsotericCard'
import { IconAndTitle } from '../IconAndTitle/IconAndTitle'
import { RootState } from '../../redux/store'
import { fetchAmulets } from '../../redux/amuletsSlice'
import { ReturnBack } from '../ReturnBack/ReturnBack'
import { IPropsFuncReturnBack, IPropsItems } from '../../types/interfaces'

export const AmuletsItems = ({handleClickReturnBack} : IPropsFuncReturnBack) => {
  const { data: posts, loading, error } = useSelector((state: RootState) => state.amulets)
  const dispatch = useDispatch<ThunkDispatch<RootState, null, Action>>()
  const [isOpenDescription, setIsOpenDescription] = useState({} as boolean[])

  const handleClickToggleDescription = (id: number) => {
    setIsOpenDescription((prev) => toggleDescription(prev, id))
  }

  useEffect(() => {
    const handleClickCloseDescription = (event: MouseEvent | React.MouseEvent) => {
      closeDescription(event, setIsOpenDescription)
    }
    document.addEventListener('click', handleClickCloseDescription)
    return () => document.removeEventListener('click', handleClickCloseDescription)
  }, [])

  useEffect(() => {
    dispatch(fetchAmulets())
  }, [dispatch])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div className="text-danger">{error}</div>
  }

  const amulets = posts.map((item: IPropsItems) => <ItemEsotericCard
  key={item.id}
  post={item}
  handleClickToggleDescription={handleClickToggleDescription}
  isOpenDescription={isOpenDescription[item.id]}
  />)

  return (
    <div className="section-items" id="amulets">
      <div className="section-items__body">
        <div className="section-items__header-box">
          <div className="section-items__title _title-with-back">
            <IconAndTitle>Обереги</IconAndTitle>
          </div>
          <div className="section-items__return-back">
            <ReturnBack handleClickReturnBack={handleClickReturnBack} />
          </div>
        </div>
        <div className="section-items__slider slider-items">
          <div className="slider-items slider">
            <Slider
              {...sliderSettings}>
              {amulets}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}
