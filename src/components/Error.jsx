import { Link } from 'react-router-dom'

/**
 * Error Component
 * Generate the contents of the 404 error page
 */
export default function Error() {
  return (
    <main>
      <section className="error">
        <h1 className="error__title">404</h1>
        <p className="error__message">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </section>
    </main>
  )
}
