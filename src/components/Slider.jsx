import { useState } from 'react'
import PropTypes from 'prop-types'
import ArrowPast from '../assets/icon/arraw_past.svg'
import ArrowNext from '../assets/icon/arrow_next.svg'

export default function Slider({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const pastSlide = () => {
    const newIndex = currentIndex - 1
    setCurrentIndex(newIndex < 0 ? pictures.length - 1 : newIndex)
  }

  const nextSlide = () => {
    const newIndex = currentIndex + 1

    setCurrentIndex(newIndex >= pictures.length ? 0 : newIndex)
  }

  const statusSlider = `${currentIndex + 1} /${pictures.length}`
  return (
    <div className="slider">
      <button className="arrow left" onClick={pastSlide}>
        <img src={ArrowPast} alt="Précédent" />
      </button>
      <div className="slider__content">
        {pictures.map((picture, index) => (
          <div
            key={index}
            className={`slider__picture ${index === currentIndex ? 'active' : ''}`}
          >
            <p>{statusSlider}</p>
            <img src={picture} alt={title} />
          </div>
        ))}
      </div>
      <button className="arrow right" onClick={nextSlide}>
        <img src={ArrowNext} alt="Suivant" />
      </button>
    </div>
  )
}
Slider.propTypes = {
  pictures: PropTypes.array,
  title: PropTypes.string.isRequired,
}
