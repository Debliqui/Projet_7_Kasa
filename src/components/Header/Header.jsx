import { NavLink } from 'react-router'

export default function Header() {
  return (
    <nav>
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/a-propos">À propos</NavLink>
    </nav>
  )
}
