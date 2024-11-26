import Banner from '../../components/Banner/Banner.jsx'
import Card from '../../components/Card/Card.jsx'
import accommodationList from '../../assets/logement.json'

export default function Home() {
  return (
    <main className="home">
      <Banner />
      <section className="card_container">
        {accommodationList.map((accommodation) => (
          <Card
            key={`${accommodation.id}`}
            cover={accommodation.cover}
            title={accommodation.title}
          />
        ))}
      </section>
    </main>
  )
}
