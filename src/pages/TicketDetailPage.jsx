import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getTicket } from '../api/tickets';
import { formatDate } from '../utils/helpers';
import { TICKET_STATUS, PRIORITY_LEVELS } from '../utils/constants';
import '../styles/animations.css';

export function TicketDetailPage() {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const data = await getTicket(id);
        setTicket(data);
      } catch (error) {
        console.error('Error fetching ticket:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTicket();
  }, [id]);

  if (loading) return <div className="container">Chargement...</div>;
  if (!ticket) return <div className="container">Ticket non trouvé</div>;

  return (
    <div className="container fade-in">
      <Link to="/tickets" className="btn btn-secondary btn-hover">
        Retour à la liste
      </Link>

      <div className="ticket-detail">
        <h1>{ticket.title}</h1>
        <p className="ticket-meta">
          <span>Statut: {TICKET_STATUS[ticket.status]}</span>
          <span>Priorité: {PRIORITY_LEVELS[ticket.priority]}</span>
          <span>Créé le: {formatDate(ticket.createdAt)}</span>
        </p>

        <div className="ticket-description">
          <h2>Description</h2>
          <p>{ticket.description}</p>
        </div>

        <div className="ticket-actions">
          <button className="btn btn-primary btn-hover">
            Modifier
          </button>
        </div>
      </div>
    </div>
  );
}