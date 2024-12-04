import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import AboutUsContentList from '../assets/aboutUsContent.json'

/**
 * About us Page
 * Generates the content of the about us page by importing Banner and Collapse using the aboutUsContentList
 */
export default function APropos() {
  document.title = 'À propos'
  return (
    <main className="about-us">
      {/** Hero Banner  */}
      <section className="banner-aboutUs">
        <Banner>
          <h2 className="sr-only">À propos de nous</h2>
        </Banner>
      </section>
      {/** Collapse List */}
      <section className="collapse-list">
        {AboutUsContentList.map((AboutUsContent, index) => (
          <Collapse
            key={`${AboutUsContent.title}-${index}`}
            id={AboutUsContent.title}
            title={AboutUsContent.title}
          >
            <p>{AboutUsContent.content}</p>
          </Collapse>
        ))}
      </section>
    </main>
  )
}
