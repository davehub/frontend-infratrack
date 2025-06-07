import { Link } from "react-router-dom";
import "../styles/animations.css";

export function HomePage() {
  return (
    <div className="container fade-in">
      <h1>Bienvenue sur notre application</h1>
      <p>Gérez vos tickets efficacement</p>

      <div className="btn-group">
        <Link to="/tickets" className="btn btn-primary btn-hover">
          Voir les tickets
        </Link>
        <Link to="/login" className="btn btn-secondary btn-hover">
          Se connecter
        </Link>
      </div>
    </div>
  );
}
