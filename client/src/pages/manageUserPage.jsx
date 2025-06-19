// src/pages/ManageUsers.jsx
import React from "react";
import UserTable from "../components/userTable";
import Sidebar from "../components/sidebar";

const ManageUsers = () => {
  const users = [
    { id: 1, name: "Jeet Pal", email: "jeetpal7804322@gmail.com.com", role: "Admin", status: "Active" },
    { id: 2, name: "Ankan Biswas", email: "ankan@gmail.com", role: "Requester", status: "Inactive" },
    { id: 3, name: "Arif Islam", email: "arif@gmail.com", role: "Donor", status: "Active" },
  ];

  return (
    <div className="grid grid-cols-[1fr_10fr]">
      {/* Sidebar */}
      <Sidebar />
    <div className="p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Manage Users</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <UserTable users={users} />
      </div>
    </div>
    </div>
  );
};

export default ManageUsers;
