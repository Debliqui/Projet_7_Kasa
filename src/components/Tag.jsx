import PropTypes from 'prop-types'

export default function Tag({ tags }) {
  return (
    <>
      {tags.map((tag) => (
        <p className="tag">{tag}</p>
      ))}
    </>
  )
}

Tag.propTypes = {
  tags: PropTypes.array.isRequired,
}
