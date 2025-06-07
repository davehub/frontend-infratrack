// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import the useAuth hook

const Home = () => {
  const { currentUser } = useAuth(); // Get the current user from the authentication context

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6 animate-fade-in-down">
        Bienvenue sur l'Application !
      </h1>
      <p className="text-xl text-gray-700 mb-8 max-w-lg animate-fade-in">
        Ceci est la page d'accueil de notre application. Explorez nos fonctionnalités en vous connectant, en vous inscrivant, ou en accédant à votre tableau de bord si vous êtes déjà connecté.
      </p>

      <div className="space-x-4 flex flex-col sm:flex-row items-center animate-fade-in-up">
        {/* Conditional rendering based on authentication status */}
        {!currentUser ? (
          // If no user is logged in, show Login and Register links
          <>
            <Link to="/login">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg
                           transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl mb-4 sm:mb-0"
              >
                Se connecter
              </button>
            </Link>
            <Link to="/register">
              <button
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg
                           transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
              >
                S'inscrire
              </button>
            </Link>
          </>
        ) : (
          // If a user is logged in, show a link to the Dashboard
          <Link to="/dashboard">
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg
                         transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            >
              Aller au Tableau de Bord
            </button>
          </Link>
        )}
      </div>

      {/* Optional: A small footer or additional info */}
      <footer className="mt-12 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Votre Application. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default Home;