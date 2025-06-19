import React from "react";

const TransactionTable = ({ transactions, onView }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Transaction ID</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Amount (₹)</th>
            <th className="border border-gray-300 px-4 py-2">Donor Name</th>
            <th className="border border-gray-300 px-4 py-2">Requester Name</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn) => (
            <tr key={txn.id}>
              <td className="border border-gray-300 px-4 py-2">{txn.id}</td>
              <td className="border border-gray-300 px-4 py-2">{txn.date}</td>
              <td className="border border-gray-300 px-4 py-2">{txn.amount}</td>
              <td className="border border-gray-300 px-4 py-2">{txn.donor}</td>
              <td className="border border-gray-300 px-4 py-2">{txn.requester}</td>
              <td
                className={`border border-gray-300 px-4 py-2 font-bold ${
                  txn.status === "Completed"
                    ? "text-green-500"
                    : txn.status === "Pending"
                    ? "text-yellow-500"
                    : "text-red-500"
                }`}
              >
                {txn.status}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  onClick={() => onView(txn)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
