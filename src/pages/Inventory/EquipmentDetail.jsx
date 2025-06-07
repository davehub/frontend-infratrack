import React from 'react';
import { useParams } from 'react-router-dom';

const EquipmentDetail = () => {
  useParams();
  // En réalité, vous feriez une requête API ici
  const equipment = {
    id: 1,
    name: 'Serveur Principal',
    type: 'Serveur',
    status: 'Actif',
    location: 'Salle 101',
    ipAddress: '192.168.1.100',
    lastMaintenance: '2023-05-15'
  };

  return (
    <div className="equipment-detail">
      <h1>Détails de l'Équipement</h1>
      <div className="detail-card">
        <h2>{equipment.name}</h2>
        <p><strong>Type:</strong> {equipment.type}</p>
        <p><strong>Statut:</strong> {equipment.status}</p>
        <p><strong>Localisation:</strong> {equipment.location}</p>
        <p><strong>Adresse IP:</strong> {equipment.ipAddress}</p>
        <p><strong>Dernière Maintenance:</strong> {equipment.lastMaintenance}</p>
      </div>
    </div>
  );
};

export default EquipmentDetail;