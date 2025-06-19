// src/components/BloodBankTable.jsx
import React from "react";

const BloodBankTable = ({ bloodBanks, onViewStock, onEdit, onDelete }) => {
  return (
    <table className="w-full text-center border-collapse border border-gray-200">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">ID</th>
          <th className="border border-gray-300 px-4 py-2">Name</th>
          <th className="border border-gray-300 px-4 py-2">Location</th>
          <th className="border border-gray-300 px-4 py-2">Contact</th>
          <th className="border border-gray-300 px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {bloodBanks.map((bank) => (
          <tr key={bank.id}>
            <td className="border border-gray-300 px-4 py-2">{bank.id}</td>
            <td className="border border-gray-300 px-4 py-2">{bank.name}</td>
            <td className="border border-gray-300 px-4 py-2">{bank.location}</td>
            <td className="border border-gray-300 px-4 py-2">{bank.contact}</td>
            <td className="border border-gray-300 gap-7 px-4 py-2">
              <button
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 mr-8"
                onClick={() => onViewStock(bank)}
              >
                View
              </button>
              <button
                className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 mr-8"
                onClick={() => onEdit(bank)}
              >
                Edit
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                onClick={() => onDelete(bank.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BloodBankTable;
