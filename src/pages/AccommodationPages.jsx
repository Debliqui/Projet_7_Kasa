import accommodationList from '../assets/accommodation.json'
import Slider from '../components/Slider'

export default function AccommodationPages() {
  const pageActive = accommodationList[1]
  return (
    <section className="accommodation">
      {pageActive && (
        <Slider
          key={pageActive.id}
          pictures={pageActive.pictures}
          title={pageActive.title}
        />
      )}
    </section>
  )
}
