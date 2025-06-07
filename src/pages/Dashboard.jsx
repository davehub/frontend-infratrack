import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button'; // Assuming you have a Button component
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom'; // To navigate to other pages

const Dashboard = () => {
  const { currentUser, userRole, userId, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login'); // Redirect to login after logout
    } catch (error) {
      console.error("Failed to log out:", error);
      alert("Échec de la déconnexion.");
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4 rounded-lg shadow-lg text-center">
        Tableau de Bord
      </h1>

      {currentUser ? (
        <>
          <Card title="Bienvenue !" className="mb-6 shadow-lg rounded-xl bg-white p-6">
            <p className="text-gray-700 text-lg mb-2">
              Bonjour, <span className="font-semibold">{currentUser.email}</span> !
            </p>
            <p className="text-gray-600 text-lg mb-1">
              Votre rôle : <span className="font-semibold capitalize">{userRole || 'Non défini'}</span>
            </p>
            <p className="text-gray-600 text-sm font-mono mt-2">ID Utilisateur : {userId}</p>
            {userRole === 'admin' && (
              <p className="mt-4 text-blue-600 font-medium">
                En tant qu'administrateur, vous avez accès à toutes les fonctionnalités de gestion.
              </p>
            )}
            <div className="mt-6">
              <Button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-colors"
              >
                Se déconnecter
              </Button>
            </div>
          </Card>

          {/* KPI Cards (Key Performance Indicators) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <Card title="Total Utilisateurs" className="bg-indigo-100 border-l-4 border-indigo-500 shadow-lg rounded-xl transition-transform hover:scale-105">
              <p className="text-5xl font-bold text-indigo-700">1,234</p>
              <p className="text-gray-600 mt-2">Utilisateurs enregistrés dans le système</p>
            </Card>
            <Card title="Matériaux en Stock" className="bg-green-100 border-l-4 border-green-500 shadow-lg rounded-xl transition-transform hover:scale-105">
              <p className="text-5xl font-bold text-green-700">567</p>
              <p className="text-gray-600 mt-2">Différents types de matériaux</p>
            </Card>
            <Card title="Approbations en attente" className="bg-yellow-100 border-l-4 border-yellow-500 shadow-lg rounded-xl transition-transform hover:scale-105">
              <p className="text-5xl font-bold text-yellow-700">12</p>
              <p className="text-gray-600 mt-2">Articles en attente de révision</p>
            </Card>
          </div>

          {/* --- NEW: Action/Navigation Cards --- */}
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Actions Rapides & Gestion</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* User Management (Admin only) */}
            {userRole === 'admin' && (
              <Card title="Gestion des Utilisateurs" className="bg-blue-50 border-l-4 border-blue-500 shadow-lg rounded-xl transition-transform hover:scale-105 cursor-pointer" onClick={() => navigate('/dashboard/users')}>
                <p className="text-gray-700">Ajouter, modifier ou supprimer des comptes utilisateurs.</p>
                <div className="mt-4 text-blue-600 font-semibold">Gérer <span className="text-xl">➡️</span></div>
              </Card>
            )}

            {/* Equipment Management */}
            <Card title="Gestion des Équipements" className="bg-teal-50 border-l-4 border-teal-500 shadow-lg rounded-xl transition-transform hover:scale-105 cursor-pointer" onClick={() => navigate('/dashboard/equipment')}>
              <p className="text-gray-700">Suivre, ajouter ou modifier les équipements et leurs stocks.</p>
              <div className="mt-4 text-teal-600 font-semibold">Gérer <span className="text-xl">➡️</span></div>
            </Card>

            {/* Maintenance Management */}
            <Card title="Gestion de la Maintenance" className="bg-orange-50 border-l-4 border-orange-500 shadow-lg rounded-xl transition-transform hover:scale-105 cursor-pointer" onClick={() => navigate('/dashboard/maintenance')}>
              <p className="text-gray-700">Planifier, suivre et enregistrer les opérations de maintenance.</p>
              <div className="mt-4 text-orange-600 font-semibold">Gérer <span className="text-xl">➡️</span></div>
            </Card>

            {/* If you have a separate "Add User" page, for non-admins to register, or admin directly */}
            {(userRole === 'admin' || userRole === 'manager') && ( // Example: managers can also add users
                <Card title="Ajouter un Nouvel Utilisateur" className="bg-purple-50 border-l-4 border-purple-500 shadow-lg rounded-xl transition-transform hover:scale-105 cursor-pointer" onClick={() => navigate('/dashboard/add-user')}>
                  <p className="text-gray-700">Créer un nouveau compte utilisateur avec un rôle spécifique.</p>
                  <div className="mt-4 text-purple-600 font-semibold">Ajouter <span className="text-xl">➕</span></div>
                </Card>
            )}

            {/* Add more action cards here, e.g., for reporting, settings, etc. */}
            <Card title="Rapports & Statistiques" className="bg-gray-50 border-l-4 border-gray-500 shadow-lg rounded-xl transition-transform hover:scale-105 cursor-pointer" onClick={() => navigate('/dashboard/reports')}>
                <p className="text-gray-700">Accédez aux rapports et visualisez les données du système.</p>
                <div className="mt-4 text-gray-600 font-semibold">Voir <span className="text-xl">📊</span></div>
            </Card>

          </div>

          {/* Recent Activity Card */}
          <Card title="Activité Récente" className="mt-8 p-6 bg-white shadow-lg rounded-xl">
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <span className="text-green-500">✅</span>
                <p className="text-gray-700">L'utilisateur <span className="font-medium">Jane Doe</span> a ajouté un nouveau matériau.</p>
                <span className="text-sm text-gray-500 ml-auto">Il y a 2 heures</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-blue-500">🔵</span>
                <p className="text-gray-700">Les permissions du rôle <span className="font-medium">Administrateur</span> ont été mises à jour.</p>
                <span className="text-sm text-gray-500 ml-auto">Hier</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-red-500">❌</span>
                <p className="text-gray-700">La catégorie <span className="font-medium">Électronique</span> a été supprimée.</p>
                <span className="text-sm text-gray-500 ml-auto">Il y a 3 jours</span>
              </li>
            </ul>
          </Card>

          {/* System Overview Card (for charts) */}
          <Card title="Aperçu du système" className="mt-8 p-6 bg-white shadow-lg rounded-xl">
  <p className="text-gray-700 text-lg">
    Intégrer une bibliothèque de graphiques comme Recharts ou Chart.js pour visualiser les données ici.
  </p>
  <div className="mt-4 h-auto bg-gray-100 rounded-lg flex flex-col items-center justify-center text-gray-500 text-center p-4">
    {/* Espace réservé pour le graphique : ex. Répartition des matériaux, Historique des maintenances */}

    <div className="w-full h-64 mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        Répartition des matériaux (Exemple de graphique circulaire)
      </h3>
      {/* Ici, vous intégreriez votre composant de graphique circulaire */}
      <div className="bg-white rounded shadow-md p-4 h-full flex items-center justify-center">
        <p className="text-gray-500">
          Votre graphique de répartition des matériaux (ex: Pie Chart de Recharts)
        </p>
        {/*
          Exemple de code Recharts pour un Pie Chart (nécessiterait l'importation de Recharts)
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={dataMateriaux}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {dataMateriaux.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        */}
      </div>
    </div>

    <div className="w-full h-64">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        Historique des maintenances (Exemple de graphique en barres)
      </h3>
      {/* Ici, vous intégreriez votre composant de graphique en barres ou en lignes */}
      <div className="bg-white rounded shadow-md p-4 h-full flex items-center justify-center">
        <p className="text-gray-500">
          Votre graphique d'historique des maintenances (ex: Bar Chart de Recharts)
        </p>
        {/*
          Exemple de code Recharts pour un Bar Chart (nécessiterait l'importation de Recharts)
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={dataMaintenances}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="maintenances" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        */}
      </div>
    </div>

  </div>
</Card>
        </>
      ) : (
        <Card title="Veuillez vous connecter" className="text-center shadow-lg rounded-xl p-6 bg-white">
          <p className="text-gray-700 mb-4 text-lg">
            Connectez-vous pour accéder au tableau de bord et aux fonctionnalités de gestion.
          </p>
          <Button onClick={() => navigate('/login')} className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition-all">
            Aller à la page de connexion
          </Button>
        </Card>
      )}
    </div>
  );
};

export default Dashboard;