import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/common/Card';
import InputField from '../components/common/InputField'; // Re-using InputField
import Button from '../components/common/Button';
import { useAuth } from '../context/AuthContext'; // To potentially use register/admin user creation API

const AddUserPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('user'); // Default role
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { userRole } = useAuth(); // To check if current user has permission

  // Basic permission check (can be expanded with a dedicated AdminRoute)
  if (userRole !== 'admin') {
    // You could redirect or show an access denied message
    return (
      <div className="p-8 bg-red-50 min-h-screen flex items-center justify-center">
        <Card title="Accès Refusé" className="text-center shadow-lg rounded-xl p-6 bg-white">
          <p className="text-red-700 mb-4 text-lg">
            Vous n'avez pas la permission d'accéder à cette page.
          </p>
          <Button onClick={() => navigate('/dashboard')} className="bg-gray-500 text-white px-6 py-2 rounded-lg shadow-md">
            Retour au Tableau de Bord
          </Button>
        </Card>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      setLoading(false);
      return;
    }

    try {
      // Here you would call an API endpoint to create a user by an admin
      // This is different from the public /register endpoint, as it might
      // allow setting roles directly.
      console.log(`Creating user: ${email}, Role: ${role}`);
      // await adminCreateUserApi(email, password, role); // Call your admin-specific API
      alert(`Utilisateur ${email} avec le rôle ${role} créé avec succès ! (Simulé)`);

      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setRole('user');
      navigate('/dashboard/users'); // Redirect to user management list or dashboard
    } catch (err) {
      console.error("Erreur lors de l'ajout de l'utilisateur:", err);
      setError(err.message || "Échec de l'ajout de l'utilisateur. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 p-6">
      <Card title="Ajouter un Nouvel Utilisateur" className="w-full max-w-md shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-4 animate-pulse">
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          <InputField
            id="email"
            label="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="nouvel.utilisateur@example.com"
            required
            className="shadow-sm"
          />
          <InputField
            id="password"
            label="Mot de passe"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mot de passe"
            required
            className="shadow-sm"
          />
          <InputField
            id="confirmPassword"
            label="Confirmer le mot de passe"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirmer le mot de passe"
            required
            className="shadow-sm"
          />
          <div className="mb-4">
            <label htmlFor="role" className="block text-gray-700 text-sm font-bold mb-2">
              Rôle de l'utilisateur
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="user">Utilisateur Standard</option>
              <option value="manager">Manager</option>
              <option value="admin">Administrateur</option>
            </select>
          </div>
          <Button type="submit" disabled={loading} className="w-full mt-4">
            {loading ? "Création en cours..." : "Créer l'utilisateur"}
          </Button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          <button
            onClick={() => navigate('/dashboard/users')}
            className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
          >
            Retour à la gestion des utilisateurs
          </button>
        </p>
      </Card>
    </div>
  );
};

export default AddUserPage;