// src/pages/ManageBloodBanks.jsx
import React, { useState } from "react";
import BloodBankTable from "../components/bloodBankTable";
import AddBloodBankForm from "../components/addBloodBankForm";
import ViewBloodStockModal from "../components/viewBloodStockModel";
import Sidebar from "../components/sidebar";

const ManageBloodBanks = () => {
  const [bloodBanks, setBloodBanks] = useState([
    {
      id: 1,
      name: "City Blood Bank",
      location: "Mumbai",
      contact: "123-456-7890",
      stock: {
        "A+": 10,
        "A-": 5,
        "B+": 12,
        "B-": 3,
        "O+": 15,
        "O-": 2,
        "AB+": 8,
        "AB-": 1,
      },
    },
    {
      id: 2,
      name: "Health Blood Bank",
      location: "Delhi",
      contact: "234-567-8901",
      stock: {
        "A+": 5,
        "A-": 2,
        "B+": 10,
        "B-": 0,
        "O+": 8,
        "O-": 1,
        "AB+": 4,
        "AB-": 1,
      },
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [viewStock, setViewStock] = useState(null);

  // Add a new blood bank
  const handleAddBloodBank = (newBloodBank) => {
    setBloodBanks([...bloodBanks, { ...newBloodBank, id: bloodBanks.length + 1 }]);
    setShowAddForm(false);
  };

  return (
    <div className="grid grid-cols-[1fr_10fr]">
      {/* Sidebar */}
      <Sidebar />
    <div className="p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Manage Blood Banks</h1>
        <button
          className="px-4 py-2 mb-10 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={() => setShowAddForm(true)}
        >
          Add New Blood Bank
        </button>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <BloodBankTable bloodBanks={bloodBanks} onViewStock={setViewStock} />
      </div>
      {showAddForm && (
        <AddBloodBankForm
          onClose={() => setShowAddForm(false)}
          onAdd={handleAddBloodBank}
        />
      )}
      {viewStock && (
        <ViewBloodStockModal
          stock={viewStock.stock}
          onClose={() => setViewStock(null)}
        />
      )}
    </div>
    </div>
  );
};

export default ManageBloodBanks;
