// src/pages/Dashboard/Widgets/StatsCard.jsx
import React from "react";

export default function StatsCard({ title, value, trend, icon }) {
  const isPositive = trend.startsWith("+");

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between">
        <div>
          <p className="text-gray-500">{title}</p>
          <p className="text-3xl font-bold">{value}</p>
        </div>
        <span className="text-2xl">{icon}</span>
      </div>
      <p className={`mt-2 text-sm ${
        isPositive ? "text-green-600" : "text-red-600"
      }`}>
        {trend} vs mois dernier
      </p>
    </div>
  );
}