import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Action, ThunkDispatch } from '@reduxjs/toolkit'
import Slider from 'react-slick'
import { sliderSettings } from './sliderSettings'
import { ItemEsotericCard } from '../ItemEsotericCard/ItemEsotericCard'
import { IconAndTitle } from '../IconAndTitle/IconAndTitle'
import { RootState } from '../../redux/store'
import { fetchTalismans } from '../../redux/talismansSlice'
import { ReturnBack } from '../ReturnBack/ReturnBack'
import { IPropsFuncReturnBack, IPropsItems } from '../../types/interfaces'

export const Talismans = ({ handleClickReturnBack }: IPropsFuncReturnBack) => {
  const { data: posts, loading, error } = useSelector((state: RootState) => state.talismans)
  const dispatch = useDispatch<ThunkDispatch<RootState, null, Action>>()
  const [isOpenDescription, setIsOpenDescription] = useState({} as boolean[])

  useEffect(() => {
    dispatch(fetchTalismans())
  }, [dispatch])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div className="text-danger">{error}</div>
  }

  const handleClickToggleDescription = (id: number) => {
    setIsOpenDescription((prev) => {
      // Проверяем, открыта ли карточка уже
      if (prev[id]) {
        // Если да, то закрываем ее
        return { ...prev, [id]: false };
      } else {
        // Если нет, то закрываем все остальные карточки и открываем эту
        const newPrev = { ...prev };
        Object.keys(prev).forEach((key) => {
          if (key !== String(id)) {
            delete newPrev[Number(key)];
          }
        });
        newPrev[id] = true;
        return newPrev;
      }
    });
  };

  const talismans = posts.map((item: IPropsItems) => <ItemEsotericCard
    key={item.id}
    post={item}
    handleClickToggleDescription={handleClickToggleDescription}
    isOpenDescription={isOpenDescription[item.id]} />)

  return (
    <div className="section-items" id="talismans">
      <div className="section-items__body">
        <div className="section-items__header-box">
          <div className="section-items__title _title-with-back">
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
  )
}
