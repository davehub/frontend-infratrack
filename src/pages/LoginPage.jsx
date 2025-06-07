import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../api/auth';
import { validateAuthForm } from '../utils/validate';
import '../styles/animations.css';

export function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateAuthForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitting(true);
      try {
        await login(formData);
        navigate('/tickets');
      } catch (error) {
        setErrors({ api: error.message });
      } finally {
        setSubmitting(false);
      }
    }
  };

  return (
    <div className="container slide-up">
      <h1>Connexion</h1>
      
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? 'error' : ''}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>

        {errors.api && <div className="api-error">{errors.api}</div>}

        <button 
          type="submit" 
          className="btn btn-primary btn-hover"
          disabled={submitting}
        >
          {submitting ? 'Connexion...' : 'Se connecter'}
        </button>
      </form>

      <p>
        Pas de compte? <Link to="/register">S'inscrire</Link>
      </p>
    </div>
  );
}