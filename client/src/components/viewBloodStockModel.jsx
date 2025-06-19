// src/components/ViewBloodStockModal.jsx
import React from "react";

const ViewBloodStockModal = ({ stock, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Blood Stock Details</h2>
        <ul>
          {Object.keys(stock).map((bloodType) => (
            <li key={bloodType} className="mb-2">
              <span className="font-bold">{bloodType}:</span> {stock[bloodType]} units
            </li>
          ))}
        </ul>
        <button
          className="mt-4 px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ViewBloodStockModal;
