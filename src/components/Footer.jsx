import KasaFooter from '../assets/images/kasa_white.svg'

export default function Footer() {
  const copirite = '© 2020 Kasa. All rights reserved'
  return (
    <footer className="footer">
      <img className="footer__kasa_white" src={KasaFooter} alt="Logo Kasa" />
      <p>{copirite}</p>
    </footer>
  )
}
