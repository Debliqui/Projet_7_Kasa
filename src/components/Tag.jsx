import PropTypes from 'prop-types'

/**
 * Tag Component
 * Generate housing tags
 * @param {String} props.tags
 */
export default function Tag({ tags }) {
  return (
    <>
      {tags.map((tag, index) => (
        <p key={index} className="tag">
          {tag}
        </p>
      ))}
    </>
  )
}

Tag.propTypes = {
  tags: PropTypes.array.isRequired,
}
