import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { NewItemAdd } from '../NewItemAdd/NewItemAdd'
import { NewItem } from '../NewItem/NewItem'
import './NewItems.scss'

export function NewItems() {

  const { data: posts } = useSelector((state: RootState) => state.newItemsAdd)

  const newItems = posts.map((item) => <NewItemAdd key={item.id} post={item} />)

  return (
    <div className="new-items">
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
                <h3 className="info__title">ОБЕРЕГ <span>“ЛУНА”</span></h3>
                <div className="info__subtitle">Сказочна и богата природа. Какие разнообразные чувства переполняют нас при встрече с ней! В любое время года она открывает свои прелести по-разному, давая простор фантазии и творчеству, укрепляя нежные и добрые чувства в человеке.  Сказочна и богата природа. Какие разнообразные чувства переполняют нас при встрече с ней!
                </div>
              </div>
            </div>
            <div className="info__new-cards">
              {newItems}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
