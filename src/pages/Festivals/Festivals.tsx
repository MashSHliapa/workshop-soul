import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { EventCard } from '../../components/EventCard/EventCard';
import { TitleBlog } from '../../components/TitleBlog/TitleBlog';
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs';
import { NoneEventsCard } from '../../components/NoneEventsCard/NoneEventsCard';
import { Loading } from '../../components/Loading/Loading';
import { RootState } from '../../redux/store';
import { fetchFestivals } from '../../redux/festivalsSlice';
import { IPropsEventCard } from '../../types/interfaces';

export function Festivals() {
  const { data: posts, loading, error } = useSelector((state: RootState) => state.festivals);
  const dispatch = useDispatch<ThunkDispatch<RootState, null, Action>>();

  useEffect(() => {
    dispatch(fetchFestivals());
  }, [dispatch]);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

  const festivalsPage = posts.map((item: IPropsEventCard) => <EventCard key={item.id} post={item} />);

  const breadCrumbs = [
    { name: 'Главная', path: '/' },
    { name: 'Блог', path: '/blog' },
    { name: 'Фестивали', path: '/festivals' },
  ];

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
          <h5 className="events__subtitle">
            Мировая культура знала фестивали ещё с античных времен. С одной стороны - это своего рода обзор достижений
            каких-либо видов искусств. А с другой - фестивали носят развлекательный характер. Пожалуй, на сегодняший
            день, их можно отнести к одному и к другому направлению. Таким образом фестиваль — это яркий праздник, на
            котором можно встретить ценителей различных видов искусств и ремёсел.
          </h5>
          <ul className="cakes__list d-flex flex-wrap justify-content-center gap-5 m-3">{festivalsPage}</ul>
          {posts.length === 0 && <NoneEventsCard />}
        </div>
      </div>
    </div>
  );
}
