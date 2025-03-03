import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import Slider from 'react-slick';
import { sliderSettings } from './sliderSettings';
import { toggleDescription } from '../../helpers/toggleDescription';
import { closeDescription } from '../../helpers/closeDescription';
import { ItemEsotericCard } from '../ItemEsotericCard/ItemEsotericCard';
import { IconAndTitle } from '../IconAndTitle/IconAndTitle';
import { RootState } from '../../redux/store';
import { fetchRunes } from '../../redux/runesSlice';
import { ReturnBack } from '../ReturnBack/ReturnBack';
import { Loading } from '../Loading/Loading';
import { IPropsFuncReturnBack, IPropsItems } from '../../types/interfaces';
import './SectionItems.scss';

export const RunesItems = ({ handleClickReturnBack }: IPropsFuncReturnBack) => {
  const { data: posts, loading, error } = useSelector((state: RootState) => state.runes);
  const dispatch = useDispatch<ThunkDispatch<RootState, null, Action>>();
  const [isOpenDescription, setIsOpenDescription] = useState({} as boolean[]);

  const handleClickToggleDescription = (id: number) => {
    setIsOpenDescription((prev) => toggleDescription(prev, id));
  };

  useEffect(() => {
    const handleClickCloseDescription = (event: MouseEvent | React.MouseEvent) => {
      closeDescription(event, setIsOpenDescription);
    };
    document.addEventListener('click', handleClickCloseDescription);
    return () => document.removeEventListener('click', handleClickCloseDescription);
  }, []);

  useEffect(() => {
    dispatch(fetchRunes());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  const runes = posts.map((item: IPropsItems) => (
    <ItemEsotericCard
      key={item.id}
      post={item}
      handleClickToggleDescription={handleClickToggleDescription}
      isOpenDescription={isOpenDescription[item.id]}
    />
  ));

  return (
    <div className="section-items" id="runes">
      <div className="section-items__body">
        <div className="section-items__header-box">
          <div className="section-items__title _title-with-back">
            <IconAndTitle>Руны</IconAndTitle>
          </div>
          <div className="section-items__return-back">
            <ReturnBack handleClickReturnBack={handleClickReturnBack} />
          </div>
        </div>
        <div className="section-items__slider slider-items">
          <div className="slider-items slider">
            <Slider {...sliderSettings}>{runes}</Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
