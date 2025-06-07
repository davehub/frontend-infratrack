import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTickets } from '../api/tickets';
import { formatDate } from '../utils/helpers';
import { TICKET_STATUS } from '../utils/constants';
import '../styles/animations.css';

export function TicketsPage() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const data = await getTickets();
        setTickets(data);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  if (loading) return <div className="container">Chargement...</div>;

  return (
    <div className="container slide-up">
      <h1>Liste des Tickets</h1>
      <Link to="/" className="btn btn-secondary btn-hover">
        Retour à l'accueil
      </Link>

      <div className="tickets-list">
        {tickets.length > 0 ? (
          tickets.map(ticket => (
            <div key={ticket.id} className="ticket-card">
              <h3>
                <Link to={`/tickets/${ticket.id}`}>{ticket.title}</Link>
              </h3>
              <p>Statut: {TICKET_STATUS[ticket.status]}</p>
              <p>Créé le: {formatDate(ticket.createdAt)}</p>
            </div>
          ))
        ) : (
          <p>Aucun ticket trouvé</p>
        )}
      </div>
    </div>
  );
}