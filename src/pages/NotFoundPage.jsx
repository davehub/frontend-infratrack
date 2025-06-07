import { Link } from 'react-router-dom';
import '../styles/animations.css';

export function NotFoundPage() {
  return (
    <div className="container fade-in">
      <h1>404 - Page non trouvée</h1>
      <p>La page que vous recherchez n'existe pas ou a été déplacée.</p>
      <Link to="/" className="btn btn-primary btn-hover">
        Retour à l'accueil
      </Link>
    </div>
  );
}