import { NavLink } from 'react-router'
import Banner from '../components/Banner.jsx'
import Card from '../components/Card.jsx'
import accommodationList from '../assets/accommodation.json'

/**
 * Home Page
 * Generates home page content using the Banner and Card components in relation to accommodationList
 */
export default function Home() {
  document.title = 'Accueil'
  return (
    <main className="home">
      {/** Hero Banner  */}
      <section className="banner-home">
        <Banner>
          <h2 className="banner__title">Chez vous, partout et ailleurs</h2>
        </Banner>
      </section>
      {/** Card grid with link to associated pages */}
      <section className="card_container">
        {accommodationList.map((accommodation) => (
          <NavLink
            className="card__link"
            key={accommodation.id}
            to={`/logement/${accommodation.id}`}
          >
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
