import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const ReportsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
        Rapports et Statistiques
      </h1>

      <Card title="Générer des Rapports" className="mb-8 shadow-lg rounded-xl bg-white p-6">
        <p className="text-lg text-gray-700 mb-4">
          Accédez à des aperçus détaillés des données de votre système. Vous pouvez :
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
          <li>Visualiser les statistiques d'utilisation des équipements.</li>
          <li>Analyser les performances de maintenance.</li>
          <li>Obtenir des informations sur l'activité des utilisateurs.</li>
          <li>Exporter des données pour une analyse plus approfondie.</li>
        </ul>
        <Button
          onClick={() => console.log("Action: Generate Equipment Report")}
          className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-lg shadow-md transition-colors mr-4"
        >
          Rapport Équipements
        </Button>
        <Button
          onClick={() => console.log("Action: Generate Maintenance Report")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg shadow-md transition-colors"
        >
          Rapport Maintenance
        </Button>
      </Card>

      <Card title="Visualisation des Données" className="shadow-lg rounded-xl bg-white p-6">
        <p className="text-gray-600">
          Cet espace est idéal pour intégrer des graphiques dynamiques (barres, lignes, camemberts) utilisant des bibliothèques comme Chart.js ou Recharts pour représenter visuellement vos données.
        </p>
        <div className="mt-6 p-4 border border-dashed border-gray-300 rounded-lg text-gray-500 text-center h-48 flex items-center justify-center">
          [Espace réservé pour les graphiques et tableaux de données]
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

export default ReportsPage;