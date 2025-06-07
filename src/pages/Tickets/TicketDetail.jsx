import React from 'react';
import { useParams } from 'react-router-dom';

const TicketDetail = () => {
  useParams();
  // En réalité, vous feriez une requête API ici
  const ticket = {
    id: 1,
    title: 'Problème réseau',
    description: 'Le réseau est lent dans le bâtiment A',
    status: 'Ouvert',
    priority: 'Haute',
    createdAt: '2023-06-01',
    createdBy: 'Jean Dupont',
    updates: [
      { date: '2023-06-02', message: 'Ticket assigné à l\'équipe réseau' },
      { date: '2023-06-03', message: 'Diagnostic en cours' }
    ]
  };

  return (
    <div className="ticket-detail">
      <h1>Détail du Ticket #{ticket.id}</h1>
      <div className="ticket-header">
        <h2>{ticket.title}</h2>
        <p><strong>Statut:</strong> <span className={`status ${ticket.status.toLowerCase()}`}>{ticket.status}</span></p>
        <p><strong>Priorité:</strong> {ticket.priority}</p>
        <p><strong>Créé le:</strong> {ticket.createdAt} par {ticket.createdBy}</p>
      </div>
      
      <div className="ticket-description">
        <h3>Description</h3>
        <p>{ticket.description}</p>
      </div>
      
      <div className="ticket-updates">
        <h3>Historique</h3>
        <ul>
          {ticket.updates.map((update, index) => (
            <li key={index}>
              <strong>{update.date}:</strong> {update.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TicketDetail;