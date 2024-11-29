import { NavLink } from 'react-router'
import KasaHome from '../assets/images/kasa_desktop.svg'

export default function Header() {
  return (
    <header className="header">
      <h1>
        <img src={KasaHome} alt="Logo Kasa" className="header__img" />
      </h1>
      <nav className="header__navBar">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/a-propos">À propos</NavLink>
      </nav>
    </header>
  )
}
