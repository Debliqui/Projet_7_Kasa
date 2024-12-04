import { useState } from 'react'
import PropTypes from 'prop-types'
import Arrow from '../assets/icon/arrow_back.svg'

/**
 * Collapse Component
 * Generate a collapse with a title and contents
 * @param {String} props.id
 * @param {String} props.title - Button title
 * @param {React.ReactNode} props.children
 */
export default function Collapse({ id, title, children }) {
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
      {open && (
        <div className="toggle" id={id}>
          {children}
        </div>
      )}
    </div>
  )
}
// Defining props types for the Collapse component
Collapse.protoType = {
  title: PropTypes.string.isRequired,
}
