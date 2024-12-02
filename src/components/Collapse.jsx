import { useState } from 'react'
import PropTypes from 'prop-types'
import Arrow from '../assets/icon/arrow_back.svg'

/**
 * Collapse Component
 * Generate a collapse with a title and contents
 * @param {String} props.id
 * @param {String} props.title - Button title
 * @param {String} props.content - Contents of the collapse
 */
export default function Collapse({ id, title, content }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="toggle-container">
      <button
        className="toggleBtn"
        onClick={() => {
          setOpen(!open)
        }}
        aria-expanded={open}
        aria-controls={id}
      >
        <h3 className="toggleBtn__title">{title}</h3>
        <img
          src={Arrow}
          alt="Fleche vers le bas"
          className={open ? 'toggleBtn__icon__rotate' : 'toggleBtn__icon'}
        />
      </button>
      {/** Condition that compares whether content in the .json file contains one or more contents. */}
      {open &&
        (typeof content === 'string' ? (
          <div className="toggle" id={id}>
            <p className="toggle__content">{content}</p>
          </div>
        ) : (
          <ul className="toggle" id={id}>
            {content.map((item, index) => (
              <li key={index} className="toggle__object">
                {item}
              </li>
            ))}
          </ul>
        ))}
    </div>
  )
}
// Defining props types for the Collapse component
Collapse.protoType = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}
