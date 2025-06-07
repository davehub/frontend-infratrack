// src/pages/Dashboard/Dashboard.jsx
import React from "react";
import StatsCard from "./Widgets/StatsCard";
import AlertFeed from "./Widgets/AlertFeed";

export default function Dashboard() {
  const stats = [
    { title: "Équipements", value: 124, trend: "+5%", icon: "🖥️" },
    { title: "Tickets ouverts", value: 8, trend: "-2%", icon: "⚠️" },
    { title: "Utilisateurs", value: 42, trend: "+10%", icon: "👥" },
  ];

  const alerts = [
    { id: 1, message: "Serveur #42 nécessite maintenance", level: "high" },
    { id: 2, message: "Licence Windows expirée", level: "medium" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Tableau de Bord</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Alertes Récentes</h2>
        <AlertFeed alerts={alerts} />
      </div>
    </div>
  );
}