import KasaFooter from '../assets/images/kasa_white.svg'

/**
 * Footer Component
 * Generate footer page content with logo and copirite
 */
export default function Footer() {
  const copirite = '© 2020 Kasa. All rights reserved'
  return (
    <footer className="footer-conatiner">
      <img
        className="footer-conatiner__kasa_white"
        src={KasaFooter}
        alt="Logo Kasa"
      />
      <p>{copirite}</p>
    </footer>
  )
}
