// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Action, ThunkDispatch } from '@reduxjs/toolkit'
import Slider from 'react-slick'
import { sliderSettings } from './sliderSettings'
import { ItemCard } from '../ItemCard/ItemCard'
import { IconAndTitle } from '../../components/IconAndTitle/IconAndTitle'
import { RootState } from '../../redux/store'
// import { fetchBijouterie } from '../../redux/bijouterieSlice'
import { ReturnBack } from '../ReturnBack/ReturnBack'
import { IPropsFuncReturnBack, IPropsItems } from '../../types/interfaces'
import './SectionItems.scss'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { closeCatalogSections } from '../../helpers/closeCatalogSections'

export function BijouterieItems({ handleClickReturnBack }: IPropsFuncReturnBack) {
  const { data: posts } = useSelector((state: RootState) => state.bijouterie)
  // const dispatch = useDispatch<ThunkDispatch<RootState, null, Action>>()

  // useEffect(() => {
  //   dispatch(fetchBijouterie())
  // }, [dispatch])

  // if (loading) {
  //   return <div>Loading...</div>
  // }

  // if (error) {
  //   return <div className="text-danger">{error}</div>
  // }

  const bijouterie = posts.map((item: IPropsItems) => <ItemCard key={item.id} post={item} />)

  useEffect(() => {
    const handleClickOutsideCatalog = (event: MouseEvent | React.MouseEvent) => {
      closeCatalogSections(event, handleClickReturnBack)
    }
    document.addEventListener('click', handleClickOutsideCatalog)
    return () => {
      document.removeEventListener('click', handleClickOutsideCatalog)
    }
  }, [handleClickReturnBack])

  return (
    <div className="section-items section-items_first" id="bijouterie">
      <div className="section-items__body">
        <div className="section-items__header-box">
          <div className="section-items__title _title-with-back">
            <IconAndTitle>Бижутерия</IconAndTitle>
          </div>
          <div className="section-items__return-back">
            <ReturnBack handleClickReturnBack={handleClickReturnBack} />
          </div>
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
  )
}
