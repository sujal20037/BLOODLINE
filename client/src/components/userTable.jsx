// src/components/UserTable.jsx
import React from "react";
import UserRow from "./userRow";

const UserTable = ({ users }) => {
  return (
    <table className="min-w-full border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-4 text-left font-medium border-b">Name</th>
          <th className="p-4 text-left font-medium border-b">Email</th>
          <th className="p-4 text-left font-medium border-b">Role</th>
          <th className="p-4 text-left font-medium border-b">Status</th>
          <th className="p-4 text-center font-medium border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserRow key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
