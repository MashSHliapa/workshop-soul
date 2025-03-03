import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { useParams } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { fetchNewItemsAdd } from '../../redux/newItemsAddSlice';
import { Loading } from '../Loading/Loading';
import { IPropsItems } from '../../types/interfaces';
import label from '../../components/images/newitems/new_label.png';
import './NewItem.scss';

export function NewItem() {
  const {
    data: posts,
    loading,
    error,
  } = useSelector((state: RootState) => state.newItemsAdd) as {
    data: IPropsItems[];
    loading: boolean;
    error: string | null | undefined | [];
  };
  const { newItemId } = useParams<string>();
  const selectedNewItem = posts.find((item: IPropsItems) => item.id == Number(newItemId));
  const dispatch = useDispatch<ThunkDispatch<RootState, null, Action>>();

  useEffect(() => {
    dispatch(fetchNewItemsAdd());
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

  return (
    <div className="new-item">
      <div className="new-item__body">
        <div className="new-item__image">
          <img src={selectedNewItem?.image} alt="newitem" />
        </div>
        <div className="new-item__image-label">
          <img src={label} alt="label" />
        </div>
        <div className="new-item__data">
          <h4 className="new-item__title _title">
            {selectedNewItem?.item} <span>{selectedNewItem?.name}</span>
          </h4>
          <div className="new-item__separator _separator"></div>
          <div className="new-item__text-size">Размер: {selectedNewItem?.size}мм</div>
          <div className="new-item__text-material">Материал: {selectedNewItem?.material}</div>
        </div>
      </div>
    </div>
  );
}
