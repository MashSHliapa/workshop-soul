import { useContext, useEffect, useState } from 'react'
import { catalogSectionsScroll } from '../../helpers/catalogSectionsScroll'
import { pathnameMainPage } from '../../helpers/pathnameMainPage'
import { CatalogCardsEven } from '../../components/CatalogCardsEven/CatalogCardsEven'
import { CatalogCardsOdd } from '../../components/CatalogCardsOdd/CatalogCardsOdd'
import { BijouterieItems } from '../../components/Sections/BijouterieItems'
import { DecorItems } from '../../components/Sections/DecorItems'
import { SectionEsotericCards } from '../../components/SectionEsotericCards/SectionEsotericCards'
import { MusicItems } from '../../components/Sections/MusicItems'
import { LightingItems } from '../../components/Sections/LightingItems'
import { ForderProducts } from '../../components/Sections/ForgedProducts'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'
import { GoToTop } from '../../components/GoToTop/GoToTop'
import { NavbarCategories } from '../../components/NavbarCategories/NavbarCategories'
import { SliderContext } from '../../components/Context/SliderContext'
import background from '../../components/images/background_catalog.png'
import bijouterie from '../../components/images/catalog/bijouterie.jpg'
import decor from '../../components/images/catalog/decor.jpg'
import esoteric from '../../components/images/catalog/esoterics.jpg'
import lighting from '../../components/images/catalog/light.jpg'
import music from '../../components/images/catalog/music.jpg'
import forgedProducts from '../../components/images/catalog/forged_products.jpg'
import vectorExpland from '../../components/images/esoterics/vector_expland.svg'
import vectorRollUp from '../../components/images/esoterics/vector_rollup.svg'
import './Catalog.scss'

export function Catalog() {
  const [isSectionBijouterieOpen, setIsSectionBijouterieOpen] = useState(false)
  const [isSectionDecorOpen, setIsSectionDecorOpen] = useState(false)
  const [isSectionEsotericOpen, setIsSectionEsotericOpen] = useState(false)
  const [isSectionMusicOpen, setIsSectionMusicOpen] = useState(false)
  const [isSectionforgedProductsOpen, setIsSectionForgedProductsOpen] = useState(false)
  const [isSectionLightingOpen, setIsSectionLightingOpen] = useState(false)

  const [openCategories, setOpenCategories] = useState<null | string | boolean>(null)

  const buttonVector = openCategories ? vectorRollUp : vectorExpland

  const { setActiveIndex } = useContext(SliderContext)

  const handleClickOpenCategories = () => {
    setOpenCategories(prevState => !prevState)
    if (!openCategories) {
      setIsSectionBijouterieOpen(false)
      setIsSectionDecorOpen(false)
      setIsSectionEsotericOpen(false)
      setIsSectionMusicOpen(false)
      setIsSectionLightingOpen(false)
      setIsSectionForgedProductsOpen(false)
    }
  }

  useEffect(() => {
    const handleClickCloseCategories = (event: MouseEvent | React.MouseEvent<HTMLElement>) => {
      if (!(event.target as HTMLElement).closest('.categories__body')) {
        setOpenCategories(false)
      }
    }

    document.addEventListener('click', handleClickCloseCategories)
    return () => {
      document.removeEventListener('click', handleClickCloseCategories)
    }
  }, [])

  const handleClickOpenSection = (section: string) => {
    if (section === 'bijouterie') {
      setIsSectionBijouterieOpen(prevState => !prevState)
      setIsSectionDecorOpen(false)
      setIsSectionEsotericOpen(false)
      setIsSectionForgedProductsOpen(false)
      setIsSectionMusicOpen(false)
      setIsSectionLightingOpen(false)
      setOpenCategories(null)
    }
    if (section === 'decor') {
      setIsSectionDecorOpen(prevState => !prevState)
      setIsSectionBijouterieOpen(false)
      setIsSectionEsotericOpen(false)
      setIsSectionForgedProductsOpen(false)
      setIsSectionMusicOpen(false)
      setIsSectionLightingOpen(false)
      setOpenCategories(null)
    }
    if (section === 'esoteric') {
      setIsSectionEsotericOpen(prevState => !prevState)
      setIsSectionBijouterieOpen(false)
      setIsSectionDecorOpen(false)
      setIsSectionForgedProductsOpen(false)
      setIsSectionMusicOpen(false)
      setIsSectionLightingOpen(false)
      setOpenCategories(null)
      setActiveIndex(0)
    }
    if (section === 'music') {
      setIsSectionMusicOpen(prevState => !prevState)
      setIsSectionBijouterieOpen(false)
      setIsSectionDecorOpen(false)
      setIsSectionEsotericOpen(false)
      setIsSectionForgedProductsOpen(false)
      setIsSectionLightingOpen(false)
      setOpenCategories(null)
    }
    if (section === 'forgedProducts') {
      setIsSectionForgedProductsOpen(prevState => !prevState)
      setIsSectionBijouterieOpen(false)
      setIsSectionDecorOpen(false)
      setIsSectionEsotericOpen(false)
      setIsSectionMusicOpen(false)
      setIsSectionLightingOpen(false)
      setOpenCategories(null)
    }
    if (section === 'lighting') {
      setIsSectionLightingOpen(prevState => !prevState)
      setIsSectionBijouterieOpen(false)
      setIsSectionDecorOpen(false)
      setIsSectionEsotericOpen(false)
      setIsSectionForgedProductsOpen(false)
      setIsSectionMusicOpen(false)
      setOpenCategories(null)
    }
  }

  useEffect(() => {
    catalogSectionsScroll(isSectionBijouterieOpen, 'bijouterie')
    catalogSectionsScroll(isSectionDecorOpen, 'decor')
    catalogSectionsScroll(isSectionEsotericOpen, 'esoteric')
    catalogSectionsScroll(isSectionforgedProductsOpen, 'forgedProducts')
    catalogSectionsScroll(isSectionMusicOpen, 'music')
    catalogSectionsScroll(isSectionLightingOpen, 'lighting')
  }, [isSectionBijouterieOpen, isSectionDecorOpen, isSectionEsotericOpen, isSectionforgedProductsOpen, isSectionMusicOpen, isSectionLightingOpen])

  const handleCloseSection = () => {
    setIsSectionBijouterieOpen(false)
    setIsSectionDecorOpen(false)
    setIsSectionEsotericOpen(false)
    setIsSectionMusicOpen(false)
    setIsSectionLightingOpen(false)
    setIsSectionForgedProductsOpen(false)
  }

  const breadCrumbs = [
    { name: 'Главная', path: '/' },
    { name: 'Каталог', path: '/catalog' }
  ]

  return (
    <div className="catalog" id="catalog">
      <div className="catalog__container _container">
        <div className="catalog__body">
          {!pathnameMainPage(location) ? (
            <div className="catalog__breadCrumbs">
              <BreadCrumbs crumbs={breadCrumbs} />
            </div>
          ) : (
            <div className="catalog__goToTop">
              <GoToTop />
            </div>
          )}
          <div className="catalog__row">
            <div className="catalog__column">
              <div className="catalog__title">КАТАЛОГ <span> изделий</span></div>
            </div>
            <div className="catalog__column">
              <div className="catalog__subtitle">Анастасии Кирашёвой</div>
              <div className="catalog__separator"></div>
            </div>
          </div>
          <div className="catalog__categories categories" onClick={handleClickOpenCategories}>
            <div className={`categories ${openCategories ? 'categories__body categories__body_open' : 'categories__body'}`}>
              <div className="categories__text">Категории товаров</div>
              <div className="categories__vector">
                <img src={buttonVector} alt="vector" />
              </div>
            </div>
            {openCategories && (
              <div className="categories__navbar-categories">
                <NavbarCategories handleClickOpenSection={(section) => handleClickOpenSection(section)} />
              </div>
            )}
          </div>
          <div className="catalog__cards">
            <div className="catalog__card">
              {!isSectionBijouterieOpen ? <CatalogCardsOdd handleClickOpenSection={() => handleClickOpenSection('bijouterie')} name="Бижутерия" image={bijouterie} description="В каждом завершенном образе можно увидеть 'изюминку'- украшение, подчёркивающее характер. Это необходимая часть гардероба стильного человека. Здесь Вы найдёте уникальную бижутерию для любого образа." /> : <div className="catalog__section">
                <BijouterieItems handleClickReturnBack={handleCloseSection} />
              </div>}
            </div>

            {!isSectionEsotericOpen ? <CatalogCardsEven handleClickOpenSection={() => handleClickOpenSection('esoteric')} name="Эзотерика" image={esoteric} description="С древних времён и до наших дней, шаманы всего мира передают тайную силы природы через различные символы. Крепкая связь наших предков поможет в сложных ситуациях и даст ответы на сложные вопросы через атрибуты и руны представленные в разделе." /> :
              <div className="catalog__section">
                <SectionEsotericCards handleClickReturnBack={handleCloseSection} />
              </div>}

            <div className="catalog__card">
              {!isSectionDecorOpen ? <CatalogCardsOdd handleClickOpenSection={() => handleClickOpenSection('decor')} name="Декор" image={decor} description="Дом - это то место, куда хочется возвращаться каждый день, место, где отдыхаешь душой и телом. А домашний уют создают вещи, которые нас окружают. Создай свой уют в гармонии с природой." /> : <div
                className="catalog__section">
                <DecorItems handleClickReturnBack={handleCloseSection} />
              </div>}
            </div>

            <div className="catalog__card">
              {!isSectionLightingOpen ? <CatalogCardsEven handleClickOpenSection={() => handleClickOpenSection('lighting')} name="Освещение" image={lighting} description="Свет наполняет людей спокойствием и теплом. Он нас завораживает, даёт ощущение праздника и наполняет сердце тайной. Насладитесь мягким светом неповторимых ночников 'Soul'" /> :
                <div className="catalog__section">
                  <LightingItems handleClickReturnBack={handleCloseSection} />
                </div>}
            </div>

            <div className="catalog__card">
              {!isSectionMusicOpen ? < CatalogCardsOdd handleClickOpenSection={() => handleClickOpenSection('music')} name="МУЗЫКА" image={music} description="В бушующем потоке жизни мы слышим бесконечный шум города. Остановись, нажать на паузу! И послушай настоящие звуки природы. И ощутить релакс вместе с 'шумами дождя' от мастерской 'Soul'" /> :
                <div className="catalog__section">
                  <MusicItems handleClickReturnBack={handleCloseSection} />
                </div>}
            </div>

            {!isSectionforgedProductsOpen ? <CatalogCardsEven handleClickOpenSection={() => handleClickOpenSection('forgedProducts')} name="Кованные изделия" image={forgedProducts} description="Работа мастера кузнечного дела - Артема Кирашёва. Придумайте собственные изделия с использованием кованого металла! У нас Вы найдете много вариантов предметов домашнего обихода" /> :
              <div className="catalog__section">
                <ForderProducts handleClickReturnBack={handleCloseSection} />
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

