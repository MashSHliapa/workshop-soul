import { useSelector } from 'react-redux'
import { TradeFairsCard } from '../../components/TradeFairsCard'
import './TradeFairs.scss'

export function TradeFairs() {
  const { data: posts } = useSelector((state) => state.tradeFairs)

  const tradeFairsPage = posts.map((item) => <TradeFairsCard key={item.id} post={item} />)

  return (
    <div className="trade-fairs">
      <div className="trade-fairs__container _container">
        <div className="trade-fairs__body">
          <div className="trade-fairs__title">ярмарки</div>
          <div className="trade-fairs__subtitle">Ярмарки имеют давние традиции, восходящие еще к средневековью. «Где двое, там рынок, трое – базар, а семеро – ярмарка». Это изречение, дошедшее до нас из глубины истории, может даже навести на мысль, что само слово «ярмарка» русского происхождения. Но его германские корни очевидны – jahr-markt – ежегодный рынок, регулярные торжища широкого значения.</div>
          <ul className="cakes__list d-flex flex-wrap justify-content-center gap-5 m-3">
            {tradeFairsPage}
          </ul>
        </div>
      </div>
    </div>
  )
}

