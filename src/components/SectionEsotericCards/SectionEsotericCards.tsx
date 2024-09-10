import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { sliderSettings } from './sliderSettings'
import { catalogSectionsScroll } from '../../helpers/catalogSectionsScroll'
import { SectionEsotericCard } from '../SectionEsotericCard/SectionEsotericCard'
import { IconAndTitle } from '../IconAndTitle/IconAndTitle'
import { AmuletsItems } from '../Sections/AmuletsItems'
import { RunesItems } from '../Sections/RunesItems'
import { DreamCathers } from '../Sections/DreamCatchers'
import { Talismans } from '../Sections/Talismans'
import amulets from '../images/esoterics/amulet.jpg'
import runes from '../images/esoterics/runes.jpg'
import talismans from '../images/esoterics/talisman.jpg'
import dreamCatcher from '../images/esoterics/dream_catcher.jpg'

export const SectionEsotericCards = () => {
  const [openSection, setOpenSection] = useState<null | string>(null)

  const handleClickOpenSection = (section: string) => {
    setOpenSection(section)
  }

  const handleCloseSection = () => {
    setOpenSection(null)
  }

  useEffect(() => {
    const sections = ['runes', 'amulets', 'dreamCatchers', 'talismans']
    if (sections.includes(openSection as string)) {
      catalogSectionsScroll(openSection as null, openSection as string)
    }
  }, [openSection])

  return (
    <div className="sectionEsotericCards pt-5" id="esoteric">
      <div className="sectionEsotericCards__container">
        {openSection === null ? (
          <div className="sectionEsotericCards__body">
            <div className="sectionEsotericCards__title _title-catalog">
              <IconAndTitle>Эзотерика</IconAndTitle>
            </div>
            <div className="sectionEsotericCards__slider slider-items">
              <div className="slider-items slider">
                <Slider
                  {...sliderSettings}
                >
                  <div className="sectionEsotericCards__card">
                    <SectionEsotericCard
                      handleClickOpenSection={() => handleClickOpenSection('amulets')}
                      image={amulets}
                      item="Обереги"
                      description="Оберег может охранять не только человека, но и предметы – дом, скот, автомобиль, офис" />
                  </div>

                  <div className="sectionEsotericCards__card">
                    <SectionEsotericCard
                      handleClickOpenSection={() => handleClickOpenSection('runes')}
                      image={runes}
                      item="Руны"
                      description="Руны считаются настолько мощными артефактами, что одно лишь их изображение притворяет в жизнь их чудотворные свойства" />
                  </div>

                  <div className="sectionEsotericCards__card">
                    <SectionEsotericCard
                      handleClickOpenSection={() => handleClickOpenSection('talismans')}
                      image={talismans}
                      item="Талисманы"
                      description="Талисман — предмет, который, приносит счастье, удачу и другие желанные вещи" />
                  </div>

                  <div className="sectionEsotericCards__card">
                    <SectionEsotericCard
                      handleClickOpenSection={() => handleClickOpenSection('dreamCatchers')}
                      image={dreamCatcher}
                      item="Ловцы снов"
                      description="Ловец снов — это особый талисман для защиты от негатива и создания счастливых сновидений" />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {openSection === 'runes' && (
              <RunesItems handleClickReturnBack={handleCloseSection} />
            )}
            {openSection === 'amulets' && (
              <AmuletsItems handleClickReturnBack={handleCloseSection} />
            )}
            {openSection === 'dreamCatchers' && (
              <DreamCathers handleClickReturnBack={handleCloseSection} />
            )}
            {openSection === 'talismans' && (
              <Talismans handleClickReturnBack={handleCloseSection} />
            )}
          </div>
        )}
      </div>
    </div>
  )
}
