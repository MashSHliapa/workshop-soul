// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Action, ThunkDispatch } from '@reduxjs/toolkit'
import { EventCard } from '../../components/EventCard/EventCard'
import { TitleBlog } from '../../components/TitleBlog/TitleBlog'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'
import { NoneEventsCard } from '../../components/NoneEventsCard/NoneEventsCard'
import { RootState } from '../../redux/store'
// import { fetchTradeFairs } from '../../redux/tradeFairsSlice'
import { IPropsEventCard } from '../../types/interfaces'
import './Events.scss'
import { useSelector } from 'react-redux'

export function TradeFairs() {
  const { data: posts } = useSelector((state: RootState) => state.tradeFairs)
  // const dispatch = useDispatch<ThunkDispatch<RootState, null, Action>>()

  // useEffect(() => {
  //   dispatch(fetchTradeFairs())
  // }, [dispatch])

  // if (loading) {
  //   return <div>Loading...</div>
  // }

  // if (error) {
  //   return <div className="text-danger">{error}</div>
  // }

  const tradeFairsPage = posts.map((item: IPropsEventCard) => <EventCard key={item.id} post={item} />)

  const breadCrumbs = [
    { name: 'Главная', path: '/' },
    { name: 'Блог', path: '/blog' },
    { name: 'Ярмарки', path: '/tradeFairs' }
  ]

  return (
    <div className="events">
      <div className="events__container _container">
        <div className="events__body">
          <div className="events__breadCrumbs">
            <BreadCrumbs crumbs={breadCrumbs} />
          </div>
          <div className="events__title">
            <TitleBlog>Ярмарки</TitleBlog>
          </div>
          <h5 className="events__subtitle">Ярмарка — мероприятие, организованное с целью покупки и продажи товаров и услуг.<br />
            Они имеют давние традиции, восходящие ещё к средневековью. Первые ярмарки появились на территории Западной Европы, затем в X—XII веках на Руси, а после и повсеместно.<br />
            Такое явление возникло из-за необходимости производить продажу и обмен товарами изготовленных собственными руками. В таком виде ярмарки дошли и до наших дней!<br />
            Сейчас появилось различное множество видов ярмарок. Наиболее распространённые среди ремесленников, являются - тематические ярмарки; ярмарки выходного дня; рождественские ярмарка; и многие другие</h5>
          <ul className="cakes__list d-flex flex-wrap justify-content-center gap-5 m-3">
            {tradeFairsPage}
          </ul>
          {posts.length === 0 && <NoneEventsCard />}
        </div>
      </div>
    </div>
  )
}

