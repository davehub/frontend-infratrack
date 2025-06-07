import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Tickets = () => {
  const [tickets] = useState([
    { id: 1, title: 'Problème réseau', status: 'Ouvert', priority: 'Haute', createdAt: '2023-06-01' },
    { id: 2, title: 'Mise à jour requise', status: 'En cours', priority: 'Moyenne', createdAt: '2023-06-05' },
  ]);

  return (
    <div className="tickets">
      <h1>Gestion des Tickets</h1>
      <Link to="/tickets/new" className="btn">Créer un ticket</Link>
      <table>
        <thead>
          <tr>
            <th>Titre</th>
            <th>Statut</th>
            <th>Priorité</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map(ticket => (
            <tr key={ticket.id}>
              <td>{ticket.title}</td>
              <td><span className={`status ${ticket.status.toLowerCase()}`}>{ticket.status}</span></td>
              <td>{ticket.priority}</td>
              <td>{ticket.createdAt}</td>
              <td>
                <Link to={`/tickets/${ticket.id}`} className="btn-sm">Détails</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tickets;