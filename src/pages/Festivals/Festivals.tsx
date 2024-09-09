// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Action, ThunkDispatch } from '@reduxjs/toolkit'
import { EventCard } from '../../components/EventCard/EventCard'
import { TitleBlog } from '../../components/TitleBlog/TitleBlog'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'
import { NoneEventsCard } from '../../components/NoneEventsCard/NoneEventsCard'
import { RootState } from '../../redux/store'
// import { fetchFestivals } from '../../redux/festivalsSlice'
import { IPropsEventCard } from '../../types/interfaces'
import { useSelector } from 'react-redux'

export function Festivals() {
  const { data: posts } = useSelector((state: RootState) => state.festivals)
  // const dispatch = useDispatch<ThunkDispatch<RootState, null, Action>>()

  // useEffect(() => {
  //   dispatch(fetchFestivals())
  // }, [dispatch])

  // if (loading) {
  //   return <div>Loading...</div>
  // }

  // if (error) {
  //   return <div className="text-danger">{error}</div>
  // }

  const festivalsPage = posts.map((item: IPropsEventCard) => <EventCard key={item.id} post={item} />)

  const breadCrumbs = [
    { name: 'Главная', path: '/' },
    { name: 'Блог', path: '/blog' },
    { name: 'Фестивали', path: '/festivals' }
  ]

  return (
    <div className="events">
      <div className="events__container _container">
        <div className="events__body">
          <div className="events__breadCrumbs">
            <BreadCrumbs crumbs={breadCrumbs} />
          </div>
          <div className="events__title">
            <TitleBlog>Фестивали</TitleBlog>
          </div>
          <div className="events__subtitle">Фестивали имеют давние традиции, восходящие еще к средневековью. «Где двое, там рынок, трое – базар, а семеро – ярмарка». Это изречение, дошедшее до нас из глубины истории, может даже навести на мысль, что само слово «ярмарка» русского происхождения.</div>
          <ul className="cakes__list d-flex flex-wrap justify-content-center gap-5 m-3">
            {festivalsPage}
          </ul>
          {posts.length === 0 && <NoneEventsCard />}
        </div>
      </div>
    </div>
  )
}
