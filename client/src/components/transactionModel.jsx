import React from "react";

const TransactionModal = ({ transaction, onClose }) => {
  if (!transaction) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
        <h2 className="text-xl font-bold mb-4">
          Transaction Details - {transaction.id}
        </h2>
        <p>
          <strong>Date:</strong> {transaction.date}
        </p>
        <p>
          <strong>Amount:</strong> ₹{transaction.amount}
        </p>
        <p>
          <strong>Donor:</strong> {transaction.donor}
        </p>
        <p>
          <strong>Requester:</strong> {transaction.requester}
        </p>
        <p>
          <strong>Status:</strong>{" "}
          <span
            className={`font-bold ${
              transaction.status === "Completed"
                ? "text-green-500"
                : transaction.status === "Pending"
                ? "text-yellow-500"
                : "text-red-500"
            }`}
          >
            {transaction.status}
          </span>
        </p>
        <p className="mt-4">{transaction.details}</p>
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default TransactionModal;
