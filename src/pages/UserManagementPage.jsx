import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/common/Card'; // Assuming you have a Card component
import Button from '../components/common/Button'; // Assuming you have a Button component

const UserManagementPage = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
        Gestion des Utilisateurs
      </h1>

      <Card title="Vue d'ensemble des utilisateurs" className="mb-8 shadow-lg rounded-xl bg-white p-6">
        <p className="text-lg text-gray-700 mb-4">
          C'est ici que vous gérerez tous les comptes utilisateurs de votre système. Vous pourrez :
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
          <li>Afficher la liste de tous les utilisateurs.</li>
          <li>Ajouter de nouveaux utilisateurs.</li>
          <li>Modifier les informations ou les rôles des utilisateurs existants.</li>
          <li>Supprimer des utilisateurs.</li>
        </ul>
        <Button
          onClick={() => console.log("Action: Add new user form/modal")}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg shadow-md transition-colors mr-4"
        >
          Ajouter un Nouvel Utilisateur
        </Button>
        <Button
          onClick={() => console.log("Action: Load user list")}
          className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-lg shadow-md transition-colors"
        >
          Voir la Liste des Utilisateurs
        </Button>
      </Card>

      <Card title="Outils de gestion" className="shadow-lg rounded-xl bg-white p-6">
        <p className="text-gray-600">
          Vous pouvez intégrer ici des composants tels que des tableaux de données (avec des filtres, des options de tri), des formulaires modaux pour l'ajout/modification, et des barres de recherche.
        </p>
        <div className="mt-6 p-4 border border-dashed border-gray-300 rounded-lg text-gray-500 text-center h-32 flex items-center justify-center">
          [Espace réservé pour la table des utilisateurs ou le formulaire]
        </div>
      </Card>

      <div className="mt-10 text-center">
        <Button
          onClick={() => navigate('/dashboard')}
          className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-6 rounded-lg shadow-md transition-colors"
        >
          Retour au Tableau de Bord
        </Button>
      </div>
    </div>
  );
};

export default UserManagementPage;