import React from 'react';

const AlertFeed = () => {
  const alerts = [
    { id: 1, message: 'Serveur XYZ haute charge', level: 'high' },
    { id: 2, message: 'Mise à jour disponible', level: 'medium' },
  ];

  return (
    <div className="alert-feed">
      <h3>Alertes Récentes</h3>
      <ul>
        {alerts.map(alert => (
          <li key={alert.id} className={`alert ${alert.level}`}>
            {alert.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlertFeed;