import KasaFooter from '../../assets/images/kasa_white.svg'
import '../../utils/style/pages/Footer.scss'

export default function Footer() {
  const copirite = '© 2020 Kasa. All rights reserved'
  return (
    <footer className="footer">
      <img
        className="footer__kasa_white"
        src={KasaFooter}
        alt="Kasa avec la premiere lettre a en forme de maison"
      />
      <p>{copirite}</p>
    </footer>
  )
}
