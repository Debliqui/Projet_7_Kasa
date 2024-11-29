import { useParams, useNavigate } from 'react-router-dom'
import accommodationList from '../assets/accommodation.json'
import Slider from '../components/Slider'
import Collapse from '../components/Collapse'
import Tag from '../components/Tag'
import Rate from '../components/Rate'
import { useEffect } from 'react'

export default function AccommodationPages() {
  const { id } = useParams()
  const currentPage = accommodationList.find((item) => item.id === id)

  let navigate = useNavigate()
  useEffect(() => {
    if (!currentPage) {
      navigate('/')
    }
  }, [currentPage, navigate])

  if (!currentPage) {
    return <div>Hébergement non trouvé</div>
  }
  return (
    <main>
      <section className="accommodation-slider">
        {currentPage && (
          <Slider
            key={currentPage.id}
            pictures={currentPage.pictures}
            title={currentPage.title}
          />
        )}
      </section>
      <section className="accommodation-description">
        <div className="description">
          <div className="description__information">
            <div className="description__information__name">
              <h2 className="description__information__name__title">
                {currentPage.title}
              </h2>
              <p className="description__information__name__location">
                {currentPage.location}
              </p>
            </div>
            <div className="description__information__tag">
              <Tag tags={currentPage.tags} />
            </div>
          </div>
          <div className="description__host">
            <div className="description__host__username">
              <p className="description__host__username__name">
                {currentPage.host.name}
              </p>
              <img
                className="description__host__username__picture"
                src={currentPage.host.picture}
                alt={currentPage.host.name}
              />
            </div>
            <div className="description__host__rate">
              <Rate scaleValue={currentPage.rating} />
            </div>
          </div>
        </div>
        <div className="description__collapse">
          <Collapse
            key={`description${currentPage.id}`}
            title={'Description'}
            content={currentPage.description}
          />
          <Collapse
            key={`equipments${currentPage.id}`}
            title={'Équipements'}
            content={currentPage.equipments}
          />
        </div>
      </section>
    </main>
  )
}
