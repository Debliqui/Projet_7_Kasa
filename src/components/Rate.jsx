import StarFull from '../assets/icon/star-full.svg'
import StarEmpty from '../assets/icon/star-empty.svg'

/**
 * Rate Compinent
 * Show stars in relation to guest rating
 * @param {Number} props
 */
export default function Rate(props) {
  const scaleValue = props.scaleValue
  const range = [1, 2, 3, 4, 5]

  return (
    <div className="rate-container">
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span className="rate-container__star" key={rangeElem.toString()}>
            <img src={StarFull} alt="Etoile pleine" />
          </span>
        ) : (
          <span className="rate-container__star" key={rangeElem.toString()}>
            <img src={StarEmpty} alt="Etoile vide" />
          </span>
        ),
      )}
    </div>
  )
}
