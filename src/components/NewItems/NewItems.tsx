import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { RootState } from '../../redux/store'
import Slider from 'react-slick';
import { sliderSettings } from './sliderSettings';
import { NewItemAdd } from '../NewItemAdd/NewItemAdd'
import { NewItem } from '../NewItem/NewItem'
import { IPropsNewItems } from '../../types/interfaces';
import './NewItems.scss'

export function NewItems() {
  const [newItem, setNewItem] = useState<IPropsNewItems>()
  const { newItemId } = useParams<{ newItemId: string }>()

  const { data: posts } = useSelector((state: RootState) => state.newItemsAdd)
  const newItemsAdd = posts.map((item) => <NewItemAdd key={item.id} post={item} />)

  useEffect(() => {
    const currentItem = posts.find((item) => item.id === newItemId)
    if (currentItem) {
      setNewItem(currentItem)
    }
  }, [newItemId, posts])

  const itemsWithoutReceivedItem = newItemsAdd.filter((item) => item.props.post.id !== newItemId)

  return (
    <div className="new-items" id="new-items">
      <div className="new-items__container _container">
        <div className="new-items__body">
          <NewItem />
          <div className="new-items__info info">
            <div className="info__body">
              <div className="info__chapter">
                <div className="info__text">Новинки</div>
                <div className="info__separator"></div>
              </div>
              <div className="info__description">
                <h3 className="info__title">{newItem?.item} <span>{newItem?.name}</span></h3>
                <div className="info__subtitle">
                  {newItem?.description}
                </div>
              </div>
            </div>
            <div className="info__new-cards">
              <div className="slider">
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
  )
}
