import { useEffect, useState } from 'react'
import { CatalogCardsEven } from '../CatalogCardsEven/CatalogCardsEven'
import { CatalogCardsOdd } from '../CatalogCardsOdd/CatalogCardsOdd'
import { BijouterieItems } from '../Sections/BijouterieItems'
import background from '../images/background_catalog.png'
import { DecorItems } from '../Sections/DecorItems'
import './Catalog.scss'
import { SectionEsotericCard } from '../SectionEsotericCard/SectionEsotericCard'

export function Catalog() {
  const [isSectionBijouterieOpen, setIsSectionBijouterieOpen] = useState(false)
  const [isSectionDecorOpen, setIsSectionDecorOpen] = useState(false)

  const handleClickOpenSection = (cardId: string) => {
    if (cardId === 'bijouterie') {
      setIsSectionBijouterieOpen(prevState => !prevState);
      setIsSectionDecorOpen(false);
    } else if (cardId === 'decor') {
      setIsSectionDecorOpen(prevState => !prevState);
      setIsSectionBijouterieOpen(false);
    }
  }

  useEffect(() => {
    if (isSectionBijouterieOpen) {
      const element = document.getElementById('bijouterie');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (isSectionDecorOpen) {
      const element = document.getElementById('decor');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
    , [isSectionBijouterieOpen, isSectionDecorOpen])

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
              {!isSectionBijouterieOpen ? <CatalogCardsOdd handleClickOpenSection={() => handleClickOpenSection('bijouterie')} name="Бижутерия" description="В каждом завершенном образе можно увидеть 'изюминку'- украшение, подчёркивающее характер. Это необходимая часть гардероба стильного человека. Здесь Вы найдёте уникальную бижутерию для любого образа." /> : <div className="catalog__section">
                <BijouterieItems />
              </div>}
            </div>

            <CatalogCardsEven handleClickOpenSection={() => handleClickOpenSection('esoterics')} name="Эзотерика" description="С древних времён и до наших дней, шаманы всего мира передают тайную силы природы через различные символы. Крепкая связь наших предков поможет в сложных ситуациях и даст ответы на сложные вопросы через атрибуты и руны представленные в разделе." />

            <div className="catalog__card">
              {!isSectionDecorOpen ? <CatalogCardsOdd handleClickOpenSection={() => handleClickOpenSection('decor')} name="Декор" description="Дом - это то место, куда хочется возвращаться каждый день, место, где отдыхаешь душой и телом. А домашний уют создают вещи, которые нас окружают. Создай свой уют в гармонии с природой." /> : <div
                className="catalog__section">
                <DecorItems />
              </div>}
            </div>

            <CatalogCardsEven handleClickOpenSection={() => handleClickOpenSection('lighting')} name="Освещение" description="Свет наполняет людей спокойствием и теплом. Он нас завораживает, даёт ощущение праздника и наполняет сердце тайной.
            Насладитесь мягким светом неповторимых ночников 'Soul'" />

            <CatalogCardsOdd handleClickOpenSection={() => handleClickOpenSection('music')} name="МУЗЫКАЛЬНЫЕ ИНСТРУМЕНТЫ" description="В бушующем потоке жизни мы слышим бесконечный шум города. Остановись, нажать на паузу! И послушай настоящие звуки природы. И ощутить релакс вместе с 'шумами дождя' от мастерской 'Soul'" />
            <SectionEsotericCard />
          </div>
        </div>
      </div>
      <div className="catalog__background _ibg">
        <img src={background} alt="background" />
      </div>
    </div>
  )
}
