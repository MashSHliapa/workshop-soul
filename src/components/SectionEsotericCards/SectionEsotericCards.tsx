import { useState } from 'react'
import Slider from 'react-slick'
import { sliderSettings } from './sliderSettings'
import { SectionEsotericCard } from '../SectionEsotericCard/SectionEsotericCard'
import { IconAndTitle } from '../IconAndTitle/IconAndTitle'
import { BijouterieItems } from '../Sections/BijouterieItems'
import { RunesItems } from '../Sections/RunesItems'
import amulets from '../images/esoterics/amulet.jpg'
import runes from '../images/esoterics/runes.jpg'
import talismans from '../images/esoterics/talisman.jpg'
import dreamCatcher from '../images/esoterics/dream_catcher.jpg'

export const SectionEsotericCards = () => {
  const [openSectionRunes, setOpenSectionRunes] = useState(false)
  const [openSectionAmulets, setOpenSectionAmulets] = useState(false)

  const handleClickOpenSection = (section: string) => {
    if (section === 'amulets') {
      setOpenSectionAmulets(prevState => !prevState);
      setOpenSectionRunes(false);
    }
    if (section === 'runes') {
      setOpenSectionRunes(prevState => !prevState);
      setOpenSectionAmulets(false);
    }
  }

  return (
    <div className="sectionEsotericCards">
      <div className="sectionEsotericCards__container">
        {(!openSectionRunes && !openSectionAmulets) ? (
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
                      handleClickOpenSection={() => handleClickOpenSection('dreamCatcher')}
                      image={dreamCatcher}
                      item="Ловцы снов"
                      description="Ловец снов — это особый талисман для защиты от негатива и создания счастливых сновидений" />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        ) : (
          (openSectionRunes && <RunesItems />) ||
          (openSectionAmulets && <BijouterieItems />)
        )}
      </div>
    </div>
  )
}
