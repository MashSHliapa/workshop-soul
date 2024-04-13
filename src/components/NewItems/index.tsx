import { useSelector } from 'react-redux'
import { NewItemAdd } from '../NewItemAdd/NewItemAdd'
import { RootState } from '../../redux/store'
import newitems4 from '../../components/images/newitems/picture6.jpg'
import label from '../../components/images/newitems/new_label.png'
import './NewItems.scss'

export function NewItems() {

  const { data: posts } = useSelector((state: RootState) => state.newItemsAdd)

  const newItems = posts.map((item) => <NewItemAdd key={item.id} post={item} />)

  return (
    <div className="new-items">
      <div className="new-items__container _container">
        <div className="new-items__body">

          <div className="new-items__card card">
            <div className="card__body">
              <div className="card__image">
                <img src={newitems4} alt="newitems1" />
              </div>
              <div className="card__image-label">
                <img src={label} alt="label" />
              </div>
              <div className="card__data">
                <h4 className="card__title">ОБЕРЕГ <span>“ночной лес”</span></h4>
                <div className="card__separator"></div>
                <div className="card__text-size">Размер: 40х25мм</div>
                <div className="card__text-material">Материал: серебряная цепочка, природный камень и  дерево хвойных пород</div>
              </div>
            </div>
          </div>

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
