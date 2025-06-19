import React, { useState } from "react";
import TransactionTable from "../components/transactionTable";
import TransactionModal from "../components/transactionModel";
import Sidebar from "../components/sidebar";


// Dummy data for transactions
const transactionData = [
  {
    id: "TXN001",
    date: "2025-01-01",
    amount: "500",
    donor: "John Doe",
    requester: "Alice Smith",
    status: "Completed",
    details: "This transaction was successfully processed for blood donation.",
  },
  {
    id: "TXN002",
    date: "2025-01-10",
    amount: "700",
    donor: "Jane Roe",
    requester: "Bob Brown",
    status: "Pending",
    details: "This transaction is pending verification and processing.",
  },
  {
    id: "TXN003",
    date: "2025-01-15",
    amount: "300",
    donor: "Alex Johnson",
    requester: "Charlie Green",
    status: "Failed",
    details: "This transaction failed due to insufficient funds.",
  },
];

const ManageTransactions = () => {
  const [transactions] = useState(transactionData);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const handleViewTransaction = (transaction) => {
    setSelectedTransaction(transaction);
  };

  const closeModal = () => {
    setSelectedTransaction(null);
  };

  return (
    <div className="grid grid-cols-[1fr_10fr]">
      {/* Sidebar */}
      <Sidebar />
        <div className="p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Manage Transactions</h1>
        <TransactionTable transactions={transactions} onView={handleViewTransaction} />
        <TransactionModal transaction={selectedTransaction} onClose={closeModal} />
        </div>
    </div>
  );
};

export default ManageTransactions;
