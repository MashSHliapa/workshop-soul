import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Action, ThunkDispatch } from '@reduxjs/toolkit'
import { EventCard } from '../../components/EventCard/EventCard'
import { TitleBlog } from '../../components/TitleBlog/TitleBlog'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'
import { NoneEventsCard } from '../../components/NoneEventsCard/NoneEventsCard'
import { RootState } from '../../redux/store'
import { fetchTradeFairs } from '../../redux/tradeFairsSlice'
import { IPropsEventCard } from '../../types/interfaces'
import './Events.scss'

export function TradeFairs() {
  const { data: posts, loading, error } = useSelector((state: RootState) => state.tradeFairs)
  const dispatch = useDispatch<ThunkDispatch<RootState, null, Action>>()

  useEffect(() => {
    dispatch(fetchTradeFairs())
  }, [dispatch])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div className="text-danger">{error}</div>
  }

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
          <div className="events__subtitle">Ярмарки имеют давние традиции, восходящие еще к средневековью. «Где двое, там рынок, трое – базар, а семеро – ярмарка». Это изречение, дошедшее до нас из глубины истории, может даже навести на мысль, что само слово «ярмарка» русского происхождения. Но его германские корни очевидны – jahr-markt – ежегодный рынок, регулярные торжества широкого значения.</div>
          <ul className="cakes__list d-flex flex-wrap justify-content-center gap-5 m-3">
            {tradeFairsPage}
          </ul>
          {posts.length === 0 && <NoneEventsCard />}
        </div>
      </div>
    </div>
  )
}

