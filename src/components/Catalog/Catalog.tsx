import { useState } from 'react'
import { CatalogCardsEven } from '../CatalogCardsEven/CatalogCardsEven'
import { CatalogCardsOdd } from '../CatalogCardsOdd/CatalogCardsOdd'
import { SectionBijouterie } from '../SectionBijouterie/SectionBijouterie'
import background from '../images/background_catalog.png'
import './Catalog.scss'

export function Catalog() {
  const [isSectionOpen, setIsSectionOpen] = useState(false)

  const handleClickOpenSection = () => {
    setIsSectionOpen(!isSectionOpen)
  }

  return (
    <div className="catalog" id="catalog">
      <div className="catalog__container _container">
        <div className="catalog__body">
          <div className="catalog__row">
            <div className="catalog__column">
              <div className="catalog__title">КАТАЛОГ <span> изделий</span></div>
            </div>
            <div className="catalog__column">
              <div className="catalog__subtitle">Анастасии Кирашёвой</div>
              <div className="catalog__separator"></div>
            </div>
          </div>
          <div className="catalog__cards">
            <div className="catalog__card">
              {!isSectionOpen ? <CatalogCardsOdd handleClickOpenSection={handleClickOpenSection} name="Бижутерия" description="В каждом завершенном образе можно увидеть 'изюминку'- украшение, подчёркивающее характер. Это необходимая часть гардероба стильного человека. Здесь Вы найдёте уникальную бижутерию для любого образа." /> : <div className="catalog__section">
                <SectionBijouterie />
              </div>}
            </div>

            <CatalogCardsEven handleClickOpenSection={handleClickOpenSection} name="Эзотерика" description="С древних времён и до наших дней, шаманы всего мира передают тайную силы природы через различные символы. Крепкая связь наших предков поможет в сложных ситуациях и даст ответы на сложные вопросы через атрибуты и руны представленные в разделе." />

            <CatalogCardsOdd handleClickOpenSection={handleClickOpenSection} name="Декор" description="Дом - это то место, куда хочется возвращаться каждый день, место, где отдыхаешь душой и телом. А домашний уют создают вещи, которые нас окружают. Создай свой уют в гармонии с природой." />

            <CatalogCardsEven handleClickOpenSection={handleClickOpenSection} name="Освещение" description="Свет наполняет людей спокойствием и теплом. Он нас завораживает, даёт ощущение праздника и наполняет сердце тайной.
            Насладитесь мягким светом неповторимых ночников 'Soul'" />

            <CatalogCardsOdd handleClickOpenSection={handleClickOpenSection} name="МУЗЫКАЛЬНЫЕ ИНСТРУМЕНТЫ" description="В бушующем потоке жизни мы слышим бесконечный шум города. Остановись, нажать на паузу! И послушай настоящие звуки природы. И ощутить релакс вместе с 'шумами дождя' от мастерской 'Soul'" />
          </div>
        </div>
      </div>
      <div className="catalog__background _ibg">
        <img src={background} alt="background" />
      </div>
    </div>
  )
}
