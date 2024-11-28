import PropTypes from 'prop-types'
import DefaultPicture from '../assets/images/default-picture.svg'

function Card({ cover = DefaultPicture, title = 'Titre de la location', id }) {
  return (
    <div className="card" id={id}>
      <img className="card__img" src={cover} alt="Logement" />
      <h2 className="card__title">{title}</h2>
    </div>
  )
}

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Card
