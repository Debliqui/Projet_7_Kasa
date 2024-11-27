import accommodationList from '../assets/accommodation.json'
import Slider from '../components/Slider'
import Collapse from '../components/Collapse'

export default function AccommodationPages() {
  const currentPage = accommodationList[0]
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
            <h1 className="description__information__title">
              {currentPage.title}
            </h1>
            <p className="description__information__location">
              {currentPage.location}
            </p>
          </div>
          <div className="description__host">
            <p className="description__host__name">{currentPage.host.name}</p>
            <img
              className="description__host__picture"
              src={currentPage.host.picture}
              alt={currentPage.host.name}
            />
          </div>
          <div className="description__tag"></div>
          <div className="description__rate"></div>
        </div>
        <div className="description__collapse">
          <Collapse
            key={`"description"${currentPage.id}`}
            title={'Description'}
            content={currentPage.description}
          />
          <Collapse
            key={`"equipments"${currentPage.id}`}
            title={'Équipements'}
            content={currentPage.equipments}
          />
        </div>
      </section>
    </main>
  )
}
