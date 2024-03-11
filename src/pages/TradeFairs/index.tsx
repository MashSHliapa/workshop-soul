import { TradeFairsCard } from '../../components/TradeFairsCard'
import './TradeFairs.scss'

export function TradeFairs() {
  return (
    <div className="trade-fairs">
      <div className="trade-fairs__container _container">
        <div className="trade-fairs__body">
          <div className="trade-fairs__title">ярмарки</div>
          <div className="trade-fairs__subtitle">Ярмарки имеют давние традиции, восходящие еще к средневековью. «Где двое, там рынок, трое – базар, а семеро – ярмарка». Это изречение, дошедшее до нас из глубины истории, может даже навести на мысль, что само слово «ярмарка» русского происхождения. Но его германские корни очевидны – jahr-markt – ежегодный рынок, регулярные торжища широкого значения.</div>

          <TradeFairsCard />
        </div>
      </div>
    </div>
  )
}

