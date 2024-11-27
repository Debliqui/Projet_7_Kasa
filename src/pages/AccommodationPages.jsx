// import accommodationList from '../assets/accommodation.json'
import Slider from '../components/Slider'

export default function AccommodationPages() {
  // {accommodationList.map((accommodation) => (

  // ))}
  const pictures = [
    <img
      src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
      alt=""
    />,
    <img
      src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg"
      alt=""
    />,
    <img
      src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg"
      alt=""
    />,
    <img
      src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg"
      alt=""
    />,
    <img
      src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
      alt=""
    />,
  ]

  return (
    <section className="accommodation">
      <Slider pictures={pictures} />
    </section>
  )
}
