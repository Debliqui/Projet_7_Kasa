import { useState } from 'react'
import PropTypes from 'prop-types'
import Arrow from '../assets/icon/arrow_back.svg'

export default function Collapse({ title, content }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        className="toggleBtn"
        onClick={() => {
          setOpen(!open)
        }}
      >
        <h2 className="toggleBtn__title">{title}</h2>
        <img
          src={Arrow}
          alt="Fleche vers le bas"
          className={open ? 'toggleBtn__icon' : 'toggleBtn__icon__rotate'}
        />
      </button>
      {open && (
        <div className="toggle">
          <p className="toggle__content">{content}</p>
        </div>
      )}
    </>
  )
}

Collapse.protoType = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}
