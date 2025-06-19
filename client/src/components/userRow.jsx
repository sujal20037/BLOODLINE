// src/components/UserRow.jsx
import React from "react";

const UserRow = ({ user }) => {
  return (
    <tr className="hover:bg-gray-50">
      <td className="p-4 border-b">{user.name}</td>
      <td className="p-4 border-b">{user.email}</td>
      <td className="p-4 border-b">{user.role}</td>
      <td className="p-4 border-b">{user.status}</td>
      <td className="p-4 border-b text-center">
        <button className="px-3 py-1 bg-blue-500 text-white rounded-md mr-2 hover:bg-blue-600">
          Edit
        </button>
        <button className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
