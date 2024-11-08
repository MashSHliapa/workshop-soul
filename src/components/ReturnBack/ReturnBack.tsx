import { IPropsFuncReturnBack } from '../../types/interfaces';
import './ReturnBack.scss';

export const ReturnBack = ({ handleClickReturnBack }: IPropsFuncReturnBack) => {
  return (
    <div className="return-back" onClick={handleClickReturnBack}>
      <div className="return-back__text">назад</div>
      <div className="return-back__vector">
        <svg width="60" height="16" viewBox="0 0 60 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.290771 7.29289C-0.0997505 7.68342 -0.0997505 8.31658 0.290771 8.70711L6.65473 15.0711C7.04526 15.4616 7.67842 15.4616 8.06895 15.0711C8.45947 14.6805 8.45947 14.0474 8.06895 13.6569L2.41209 8L8.06895 2.34315C8.45947 1.95262 8.45947 1.31946 8.06895 0.928932C7.67842 0.538408 7.04526 0.538408 6.65473 0.928932L0.290771 7.29289ZM60 7L0.997879 7V9L60 9V7Z"
            fill="#18362B"
          />
        </svg>
      </div>
    </div>
  );
};
