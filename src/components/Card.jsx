import PropTypes from 'prop-types'
import DefaultPicture from '../assets/images/default-picture.svg'

function Card({ cover = DefaultPicture, title = 'Titre de la location', id }) {
  return (
    <article className="card" id={id}>
      <img className="card__img" src={cover} alt="Logement" />
      <h3 className="card__title">{title}</h3>
    </article>
  )
}

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Card
