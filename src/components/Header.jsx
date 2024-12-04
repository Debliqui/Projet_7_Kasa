import { NavLink } from 'react-router'
import KasaHome from '../assets/images/kasa_header.svg'

/**
 * Header Component
 * Generate header with logo and navBar using NavLink hook
 */
export default function Header() {
  return (
    <header className="header">
      <h1>
        <img src={KasaHome} alt="Kasa" className="header__logo" />
      </h1>
      <nav className="header__navBar">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/a-propos">A propos</NavLink>
      </nav>
    </header>
  )
}
