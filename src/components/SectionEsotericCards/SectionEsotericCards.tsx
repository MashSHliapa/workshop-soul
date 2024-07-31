import Slider from 'react-slick'
import { sliderSettings } from './sliderSettings'
import { SectionEsotericCard } from '../SectionEsotericCard/SectionEsotericCard'
import { IconAndTitle } from '../IconAndTitle/IconAndTitle'
import amulets from '../images/esoterics/amulet.jpg'
import runes from '../images/esoterics/runes.jpg'
import talismans from '../images/esoterics/talisman.jpg'
import dreamCatcher from '../images/esoterics/dream_catcher.jpg'
import './SectionEsotericCards.scss'

export const SectionEsotericCards = () => {
  return (
    <div className="sectionEsotericCards">
      <div className="sectionEsotericCards__container">
        <div className="sectionEsotericCards__body">
          <div className="sectionEsotericCards__title _title-catalog">
            <IconAndTitle>Эзотерика</IconAndTitle>
          </div>
          <div className="sectionEsotericCards__slider slider-sectionEsotericCards">
            <div className="slider-sectionEsotericCards slider">
              <Slider
                {...sliderSettings}
              >
                <div className="sectionEsotericCards__card">
                  <SectionEsotericCard
                    image={amulets}
                    item="Обереги"
                    description="Оберег может охранять не только человека, но и предметы – дом, скот, автомобиль, офис" />
                </div>

                <div className="sectionEsotericCards__card">
                  <SectionEsotericCard
                    image={runes}
                    item="Руны"
                    description="Руны считаются настолько мощными артефактами, что одно лишь их изображение притворяет в жизнь их чудотворные свойства" />
                </div>

                <div className="sectionEsotericCards__card">
                  <SectionEsotericCard
                    image={talismans}
                    item="Талисманы"
                    description="Талисман — предмет, который, приносит счастье, удачу и другие желанные вещи" />
                </div>

                <div className="sectionEsotericCards__card">
                  <SectionEsotericCard
                    image={dreamCatcher}
                    item="Ловцы снов"
                    description="Ловец снов — это особый талисман для защиты от негатива и создания счастливых сновидений" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
