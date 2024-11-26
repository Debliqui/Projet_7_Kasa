import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import AboutUsContentList from '../assets/aboutUsContent.json'

export default function APropos() {
  return (
    <main className="about-us">
      <section className="banner-aboutUs">
        <Banner />
      </section>
      <section className="collapse-liste">
        {AboutUsContentList.map((AboutUsContent, index) => (
          <Collapse
            key={`${AboutUsContent.title}-${index}`}
            title={AboutUsContent.title}
            content={AboutUsContent.content}
          />
        ))}
      </section>
    </main>
  )
}
