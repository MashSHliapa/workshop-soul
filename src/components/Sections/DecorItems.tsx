import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import Slider from 'react-slick';
import { sliderSettings } from './sliderSettings';
import { closeCatalogSections } from '../../helpers/closeCatalogSections';
import { ItemCard } from '../ItemCard/ItemCard';
import { IconAndTitle } from '../IconAndTitle/IconAndTitle';
import { RootState } from '../../redux/store';
import { fetchDecor } from '../../redux/decorSlice';
import { ReturnBack } from '../ReturnBack/ReturnBack';
import { Loading } from '../Loading/Loading';
import { IPropsFuncReturnBack, IPropsItems } from '../../types/interfaces';
import './SectionItems.scss';

export function DecorItems({ handleClickReturnBack }: IPropsFuncReturnBack) {
  const { data: posts, loading, error } = useSelector((state: RootState) => state.decor);
  const dispatch = useDispatch<ThunkDispatch<RootState, null, Action>>();

  useEffect(() => {
    dispatch(fetchDecor());
  }, [dispatch]);

  useEffect(() => {
    const handleClickOutsideCatalog = (event: MouseEvent | React.MouseEvent) => {
      closeCatalogSections(event, handleClickReturnBack);
    };
    document.addEventListener('click', handleClickOutsideCatalog);
    return () => {
      document.removeEventListener('click', handleClickOutsideCatalog);
    };
  }, [handleClickReturnBack]);

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

  const decor = posts.map((item: IPropsItems) => <ItemCard key={item.id} post={item} />);

  return (
    <div className="section-items" id="decor">
      <div className="section-items__body">
        <div className="section-items__header-box">
          <div className="section-items__title _title-with-back">
            <IconAndTitle>Декор</IconAndTitle>
          </div>
          <div className="section-items__return-back">
            <ReturnBack handleClickReturnBack={handleClickReturnBack} />
          </div>
        </div>

        <div className="section-items__slider slider-items">
          <div className="slider-items slider">
            <Slider {...sliderSettings}>{decor}</Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
