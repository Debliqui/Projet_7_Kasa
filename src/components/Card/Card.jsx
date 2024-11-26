import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/images/default-picture.svg'

function Card({ cover, title }) {
  return (
    <div className="card">
      <img className="card__img" src={cover} alt="Logement" />
      <h2 className="card__title">{title}</h2>
    </div>
  )
}

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

Card.defaultProps = {
  cover: DefaultPicture,
  title: 'Titre de la location',
}

export default Card
