import Banner from '../components/Banner'
import Collapse from '../components/Collapse'

export default function APropos() {
  return (
    <main className="about-us">
      <section className="banner-aboutUs">
        <Banner />
      </section>
      <section className="collapse-liste">
        <Collapse />
      </section>
    </main>
  )
}
