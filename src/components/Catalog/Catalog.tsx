import { useEffect, useState } from 'react'
import { CatalogCardsEven } from '../CatalogCardsEven/CatalogCardsEven'
import { CatalogCardsOdd } from '../CatalogCardsOdd/CatalogCardsOdd'
import { BijouterieItems } from '../Sections/BijouterieItems'
import { DecorItems } from '../Sections/DecorItems'
import { SectionEsotericCards } from '../SectionEsotericCards/SectionEsotericCards'
import background from '../images/background_catalog.png'
import bijouterie from '../images/catalog/bijouterie.jpg'
import decor from '../images/catalog/decor.jpg'
import esoteric from '../images/catalog/esoterics.jpg'
import lighting from '../images/catalog/light.jpg'
import music from '../images/catalog/music.jpg'
import forgedProducts from '../images/catalog/forged_products.jpg'

import './Catalog.scss'
import { ForderProducts } from '../Sections/forgedProducts'

export function Catalog() {
  const [isSectionBijouterieOpen, setIsSectionBijouterieOpen] = useState(false)
  const [isSectionDecorOpen, setIsSectionDecorOpen] = useState(false)
  const [isSectionEsotericOpen, setIsSectionEsotericOpen] = useState(false)
  const [ isSectionforgedProductsOpen, setIsSectionforgedProductsOpen ] = useState(false)

  const handleClickOpenSection = (cardId: string) => {
    if (cardId === 'bijouterie') {
      setIsSectionBijouterieOpen(prevState => !prevState);
      setIsSectionDecorOpen(false);
      setIsSectionEsotericOpen(false);
      setIsSectionforgedProductsOpen(false);
    } if (cardId === 'decor') {
      setIsSectionDecorOpen(prevState => !prevState);
      setIsSectionBijouterieOpen(false);
      setIsSectionEsotericOpen(false);
      setIsSectionforgedProductsOpen(false);
    }
    if (cardId === 'esoteric') {
      setIsSectionEsotericOpen(prevState => !prevState);
      setIsSectionBijouterieOpen(false);
      setIsSectionDecorOpen(false);
      setIsSectionforgedProductsOpen(false);
    }
    if (cardId === 'forgedProducts') {
      setIsSectionforgedProductsOpen(prevState => !prevState);
      setIsSectionBijouterieOpen(false);
      setIsSectionDecorOpen(false);
      setIsSectionEsotericOpen(false);
    }
  }

  useEffect(() => {
    if (isSectionBijouterieOpen) {
      const element = document.getElementById('bijouterie');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } if (isSectionDecorOpen) {
      const element = document.getElementById('decor');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } if (isSectionEsotericOpen) {
      const element = document.getElementById('esoteric');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [isSectionBijouterieOpen, isSectionDecorOpen, isSectionEsotericOpen])

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
              {!isSectionBijouterieOpen ? <CatalogCardsOdd handleClickOpenSection={() => handleClickOpenSection('bijouterie')} name="Бижутерия" image={bijouterie} description="В каждом завершенном образе можно увидеть 'изюминку'- украшение, подчёркивающее характер. Это необходимая часть гардероба стильного человека. Здесь Вы найдёте уникальную бижутерию для любого образа." /> : <div className="catalog__section">
                <BijouterieItems />
              </div>}
            </div>

            {!isSectionEsotericOpen ? <CatalogCardsEven handleClickOpenSection={() => handleClickOpenSection('esoteric')} name="Эзотерика" image={esoteric} description="С древних времён и до наших дней, шаманы всего мира передают тайную силы природы через различные символы. Крепкая связь наших предков поможет в сложных ситуациях и даст ответы на сложные вопросы через атрибуты и руны представленные в разделе." /> :
              <div className="catalog__section">
                <SectionEsotericCards />
              </div>}

            <div className="catalog__card">
              {!isSectionDecorOpen ? <CatalogCardsOdd handleClickOpenSection={() => handleClickOpenSection('decor')} name="Декор" image={decor} description="Дом - это то место, куда хочется возвращаться каждый день, место, где отдыхаешь душой и телом. А домашний уют создают вещи, которые нас окружают. Создай свой уют в гармонии с природой." /> : <div
                className="catalog__section">
                <DecorItems />
              </div>}
            </div>

            <CatalogCardsEven handleClickOpenSection={() => handleClickOpenSection('lighting')} name="Освещение" image={lighting} description="Свет наполняет людей спокойствием и теплом. Он нас завораживает, даёт ощущение праздника и наполняет сердце тайной.
            Насладитесь мягким светом неповторимых ночников 'Soul'" />

            <CatalogCardsOdd handleClickOpenSection={() => handleClickOpenSection('music')} name="МУЗЫКАЛЬНЫЕ ИНСТРУМЕНТЫ" image={music} description="В бушующем потоке жизни мы слышим бесконечный шум города. Остановись, нажать на паузу! И послушай настоящие звуки природы. И ощутить релакс вместе с 'шумами дождя' от мастерской 'Soul'" />

            {!isSectionforgedProductsOpen ? <CatalogCardsEven handleClickOpenSection={() => handleClickOpenSection('forgedProducts')} name="Кованные изделия" image={forgedProducts} description="Работа мастера кузнечного дела - Артема Кирашёва. Придумайте собственные изделия с использованием кованого металла! У нас Вы найдете много вариантов предметов домашнего обихода" /> :
              <div className="catalog__section">
                <ForderProducts />
              </div>}
          </div>
        </div>
      </div>
      <div className="catalog__background _ibg">
        <img src={background} alt="background" />
      </div>
    </div>
  )
}
