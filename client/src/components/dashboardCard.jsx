// src/components/DashboardCard.jsx
import React from "react";

const DashboardCard = ({ title, count }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-shadow hover:shadow-lg transition-300">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold mt-2">{count}</p>
    </div>
  );
};

export default DashboardCard;
