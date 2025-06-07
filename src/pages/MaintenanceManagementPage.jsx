import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

const MaintenanceManagementPage = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
        Gestion de la Maintenance
      </h1>

      <Card
        title="Planification et Suivi"
        className="mb-8 shadow-lg rounded-xl bg-white p-6"
      >
        <p className="text-lg text-gray-700 mb-4">
          Gérez toutes les opérations de maintenance de vos équipements. Vous
          pouvez :
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
          <li>
            Planifier de nouvelles tâches de maintenance (préventive,
            corrective).
          </li>
          <li>Suivre l'état des maintenances en cours.</li>
          <li>Enregistrer l'historique des maintenances effectuées.</li>
          <li>Attribuer des tâches de maintenance à des techniciens.</li>
        </ul>
        <Button
          onClick={() => console.log("Action: Schedule new maintenance")}
          className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-6 rounded-lg shadow-md transition-colors mr-4"
        >
          Planifier une Maintenance
        </Button>
        <Button
          onClick={() => console.log("Action: View maintenance history")}
          className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-6 rounded-lg shadow-md transition-colors"
        >
          Historique des Maintenances
        </Button>
      </Card>

      <Card
        title="Tableau de bord des maintenances"
        className="shadow-lg rounded-xl bg-white p-6"
      >
        <p className="text-gray-600">
          Un calendrier des maintenances, des filtres par équipement ou statut,
          et des indicateurs de performance (KPI) pour la maintenance seraient
          utiles ici.
        </p>
        <div className="mt-6 p-4 border border-dashed border-gray-300 rounded-lg text-gray-500 text-center h-32 flex items-center justify-center">
          [Espace réservé pour la liste des tâches ou le calendrier]
        </div>
      </Card>

      <div className="mt-10 text-center">
        <Button
          onClick={() => navigate("/dashboard")}
          className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-6 rounded-lg shadow-md transition-colors"
        >
          Retour au Tableau de Bord
        </Button>
      </div>
    </div>
  );
};

export default MaintenanceManagementPage;
