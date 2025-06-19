// src/pages/ManageDonations.jsx
import React from "react";
import DonationTable from "../components/donationTable";
import Sidebar from "../components/sidebar";

const ManageDonations = () => {
  // Static data for donations
  const donations = [
    {
      id: 1,
      donor: "John Doe",
      bloodGroup: "A+",
      location: "Mumbai",
      date: "2025-01-10",
      status: "Verified",
    },
    {
      id: 2,
      donor: "Jane Smith",
      bloodGroup: "O-",
      location: "Delhi",
      date: "2025-01-12",
      status: "Pending",
    },
    {
      id: 3,
      donor: "Alice Johnson",
      bloodGroup: "B+",
      location: "Chennai",
      date: "2025-01-11",
      status: "Pending",
    },
  ];

  const handleVerify = (id) => {
    console.log(`Verify donation ID: ${id}`);
    // Future implementation for marking donations as verified
  };

  return (
    <div className="grid grid-cols-[1fr_10fr]">
      {/* Sidebar */}
      <Sidebar />
    <div className="p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Manage Donations</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <DonationTable donations={donations} onVerify={handleVerify} />
      </div>
    </div>
    </div>
  );
};

export default ManageDonations;
