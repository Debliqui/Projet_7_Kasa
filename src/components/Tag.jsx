import PropTypes from 'prop-types'

/**
 * Tag Component
 * Generate housing tags
 * @param {String} props.tags
 */
export default function Tag({ tags }) {
  return (
    <ul aria-label="tag" className="tag-liste">
      {tags.map((tag, index) => (
        <li key={index} className="tag">
          {tag}
        </li>
      ))}
    </ul>
  )
}

Tag.propTypes = {
  tags: PropTypes.array.isRequired,
}
