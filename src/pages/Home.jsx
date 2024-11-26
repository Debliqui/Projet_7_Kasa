import Banner from '../components/Banner.jsx'
import Card from '../components/Card.jsx'
import accommodationList from '../assets/logement.json'

export default function Home() {
  return (
    <main className="home">
      <section className="banner-home">
        <Banner>
          <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
        </Banner>
      </section>

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
