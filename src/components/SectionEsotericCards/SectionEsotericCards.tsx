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
import { DreamCathers } from '../Sections/DreamCatchers'
import { Talismans } from '../Sections/Talismans'

export const SectionEsotericCards = () => {
  const [openSectionRunes, setOpenSectionRunes] = useState(false)
  const [openSectionAmulets, setOpenSectionAmulets] = useState(false)
  const [openSectionDreamCatcher, setOpenSectionDreamCatcher] = useState(false)
  const [openSectionTalismans, setOpenSectionTalismans] = useState(false)

  const handleClickOpenSection = (section: string) => {
    if (section === 'amulets') {
      setOpenSectionAmulets(prevState => !prevState)
      setOpenSectionRunes(false)
      setOpenSectionDreamCatcher(false)
      setOpenSectionTalismans(false)
    }
    if (section === 'runes') {
      setOpenSectionRunes(prevState => !prevState)
      setOpenSectionAmulets(false)
      setOpenSectionDreamCatcher(false)
      setOpenSectionTalismans(false)
    }
    if (section === 'dreamCatchers') {
      setOpenSectionDreamCatcher(prevState => !prevState)
      setOpenSectionRunes(false)
      setOpenSectionAmulets(false)
      setOpenSectionTalismans(false)
    }
    if (section === 'talismans') {
      setOpenSectionTalismans(prevState => !prevState)
      setOpenSectionRunes(false)
      setOpenSectionAmulets(false)
      setOpenSectionDreamCatcher(false)
    }
  }

  return (
    <div className="sectionEsotericCards">
      <div className="sectionEsotericCards__container">
        {(!openSectionRunes && !openSectionAmulets && !openSectionDreamCatcher && !openSectionTalismans) ? (
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
          (openSectionRunes && <RunesItems />) ||
          (openSectionAmulets && <BijouterieItems />) ||
          (openSectionDreamCatcher && <DreamCathers />) ||
          (openSectionTalismans && <Talismans />)
        )}
      </div>
    </div>
  )
}
