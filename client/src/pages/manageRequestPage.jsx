// src/pages/ManageRequests.jsx
import React from "react";
import RequestTable from "../components/requestTable";
import Sidebar from "../components/sidebar";

const ManageRequests = () => {
  const requests = [
    { 
      id: 1, 
      requester: "John Doe", 
      bloodGroup: "A+", 
      location: "Mumbai", 
      date: "2025-01-15", 
      status: "Pending" 
    },
    { 
      id: 2, 
      requester: "Jane Smith", 
      bloodGroup: "B-", 
      location: "Delhi", 
      date: "2025-01-14", 
      status: "Approved" 
    },
    { 
      id: 3, 
      requester: "Alice Johnson", 
      bloodGroup: "O+", 
      location: "Chennai", 
      date: "2025-01-13", 
      status: "Rejected" 
    },
  ];

  return (
    <div className="grid grid-cols-[1fr_10fr]">
      {/* Sidebar */}
      <Sidebar />
    <div className="p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Manage Blood Requests</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <RequestTable requests={requests} />
      </div>
    </div>
    </div>
  );
};

export default ManageRequests;
