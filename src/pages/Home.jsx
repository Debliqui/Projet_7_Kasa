import { NavLink } from 'react-router'
import Banner from '../components/Banner.jsx'
import Card from '../components/Card.jsx'
import accommodationList from '../assets/accommodation.json'

export default function Home() {
  document.title = 'Accueil'
  return (
    <main className="home">
      <section className="banner-home">
        <Banner>
          <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
        </Banner>
      </section>

      <section className="card_container">
        {accommodationList.map((accommodation) => (
          <NavLink key={accommodation.id} to={`/logement/${accommodation.id}`}>
            <Card
              key={`${accommodation.id}`}
              id={accommodation.id}
              cover={accommodation.cover}
              title={accommodation.title}
            />
          </NavLink>
        ))}
      </section>
    </main>
  )
}
