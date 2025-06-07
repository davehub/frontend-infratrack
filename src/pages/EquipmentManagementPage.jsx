import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

const EquipmentManagementPage = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
        Gestion des Équipements
      </h1>

      <Card
        title="Inventaire des équipements"
        className="mb-8 shadow-lg rounded-xl bg-white p-6"
      >
        <p className="text-lg text-gray-700 mb-4">
          Cette page vous permet de gérer l'intégralité de votre inventaire
          d'équipements. Vous pouvez :
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
          <li>Ajouter de nouveaux équipements au stock.</li>
          <li>
            Mettre à jour les détails ou l'état des équipements existants.
          </li>
          <li>Suivre l'emplacement et la disponibilité des équipements.</li>
          <li>Générer des rapports sur l'utilisation de l'équipement.</li>
        </ul>
        <Button
          onClick={() => console.log("Action: Add new equipment form/modal")}
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg shadow-md transition-colors mr-4"
        >
          Ajouter un Équipement
        </Button>
        <Button
          onClick={() => console.log("Action: View equipment list")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg shadow-md transition-colors"
        >
          Voir l'Inventaire
        </Button>
      </Card>

      <Card
        title="Détails et Suivi"
        className="shadow-lg rounded-xl bg-white p-6"
      >
        <p className="text-gray-600">
          Considérez l'ajout de filtres par type d'équipement, statut (en
          service, en maintenance, hors service), ainsi que des options
          d'import/export pour les données d'inventaire.
        </p>
        <div className="mt-6 p-4 border border-dashed border-gray-300 rounded-lg text-gray-500 text-center h-32 flex items-center justify-center">
          [Espace réservé pour la liste d'équipements ou le formulaire]
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

export default EquipmentManagementPage;
