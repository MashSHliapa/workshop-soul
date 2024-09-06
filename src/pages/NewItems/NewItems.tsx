import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Action, ThunkDispatch } from '@reduxjs/toolkit'
import Slider from 'react-slick'
import { sliderSettings } from './sliderSettings'
import { pathnameMainPage } from '../../helpers/pathnameMainPage'
import { NewItemAdd } from '../../components/NewItemAdd/NewItemAdd'
import { NewItem } from '../../components/NewItem/NewItem'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'
import { RootState } from '../../redux/store'
import { fetchNewItemsAdd } from '../../redux/newItemsAddSlice'
import { IPropsItems } from '../../types/interfaces'
import './NewItems.scss'

export function NewItems() {
  const { data: posts, loading, error } = useSelector((state: RootState) => state.newItemsAdd) as {
    data: IPropsItems[],
    loading: boolean,
    error: string | null
  }
  const dispatch = useDispatch<ThunkDispatch<RootState, null, Action>>()
  const { newItemId } = useParams<{ newItemId: string }>()

  useEffect(() => {
    dispatch(fetchNewItemsAdd())
  }, [dispatch])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div className="text-danger">{error}</div>
  }

  const newItemsAdd = posts.map((item) => <NewItemAdd key={item.id} post={item} />)
  const numberItemInArr: number = Number(newItemId ?? 0) - 1;

  const itemsWithoutReceivedItem = newItemsAdd.filter((item) => item.props.post.id !== posts[numberItemInArr].id)

  const breadCrumbs = [
    { name: 'Главная', path: '/' },
    { name: 'Новинки', path: '/new-items' }
  ]

  return (
    <div className="new-items" id="new-items">
      <div className="new-items__container _container">
        <div className="new-items__body">
          {!pathnameMainPage(location) && (
            <div className="new-items__breadCrumbs">
              <BreadCrumbs crumbs={breadCrumbs} />
            </div>
          )}
          <div className="new-items__box">
            <NewItem />
            <div className="new-items__info info">
              <div className="info__body">
                <div className="info__chapter">
                  <div className="info__text">Новинки</div>
                  <div className="info__separator"></div>
                </div>
                <div className="info__description">
                  <h3 className="info__title">{posts[numberItemInArr]?.item} <span> {posts[numberItemInArr]?.name}</span></h3>
                  <div className="info__subtitle">
                    {posts[numberItemInArr]?.description}
                  </div>
                </div>
              </div>
              <div className="info__slider slider-newItems">
                <div className="slider-newItems slider">
                  <Slider
                    {...sliderSettings}>
                    {itemsWithoutReceivedItem}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
