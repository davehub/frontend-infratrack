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
  <div className="mt-6 p-4 border border-dashed border-gray-300 rounded-lg text-gray-500 flex flex-col space-y-6">
    {/* Espace réservé pour les graphiques et tableaux de données */}

    {/* Section pour un graphique en barres */}
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Statistiques Mensuelles (Graphique en Barres)
      </h3>
      <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
        <p className="text-gray-500">
          Intégrez ici votre composant de graphique en barres (ex: BarChart de Recharts, ou Chart.js Bar)
        </p>
        {/*
          Exemple d'intégration Recharts pour un graphique en barres:
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dataBarres}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="valeur" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        */}
      </div>
    </div>

    {/* Section pour un graphique circulaire (Camembert) */}
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Répartition par Catégorie (Graphique Camembert)
      </h3>
      <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
        <p className="text-gray-500">
          Intégrez ici votre composant de graphique circulaire (ex: PieChart de Recharts, ou Chart.js Doughnut)
        </p>
        {/*
          Exemple d'intégration Recharts pour un graphique circulaire:
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={dataCamembert} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#82ca9d" label />
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        */}
      </div>
    </div>

    {/* Section pour un tableau de données */}
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Détails des Données
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Libellé
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Valeur
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Statut
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                Donnée A
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                120
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                Actif
              </td>
            </tr>
            <tr>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                Donnée B
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                75
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                En attente
              </td>
            </tr>
            {/* Ajoutez d'autres lignes de données ici */}
          </tbody>
        </table>
      </div>
    </div>

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