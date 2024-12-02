import PropTypes from 'prop-types'
import DefaultPicture from '../assets/images/default-picture.svg'

/**
 * Card Component
 * Generate a card with a cover image and title
 * @param {string} props.cover - The URL of the cover image. By default, a default image is used.
 * @param {string} props.title - Card title. By default, “Titre de la location” is used.
 * @param {string} props.id
 */
function Card({ cover = DefaultPicture, title = 'Titre de la location', id }) {
  return (
    <article className="card" id={id}>
      <img className="card__img" src={cover} alt="Logement" />
      <h3 className="card__title">{title}</h3>
    </article>
  )
}

// Defining props types for the Card component
Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Card
