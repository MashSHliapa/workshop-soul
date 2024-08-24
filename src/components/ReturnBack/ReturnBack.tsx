import { IPropsFuncReturnBack } from '../../types/interfaces'
import './ReturnBack.scss'

export const ReturnBack = ({ handleClickReturnBack }: IPropsFuncReturnBack) => {
  return (
    <div className="return-back" onClick={handleClickReturnBack}>
      <div className="return-back__text">назад</div>
      <div className="return-back__vector"></div>
    </div>
  )
}
