import { NavLink } from 'react-router'
import KasaHome from '../../assets/images/kasa_desktop.svg'

export default function Header() {
  return (
    <header className="header">
      <img src={KasaHome} alt="" className="header__img" />
      <nav className="header__navBar">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/a-propos">À propos</NavLink>
      </nav>
    </header>
  )
}
