// src/components/BloodBankRow.jsx
import React from "react";

const BloodBankRow = ({ bloodBank }) => {
  const handleEdit = (id) => {
    console.log(`Edit blood bank ID: ${id}`);
    // Static functionality for editing
  };

  const handleDelete = (id) => {
    console.log(`Delete blood bank ID: ${id}`);
    // Static functionality for deleting
  };

  return (
    <tr className="hover:bg-gray-50">
      <td className="p-4 border-b">{bloodBank.name}</td>
      <td className="p-4 border-b">{bloodBank.location}</td>
      <td className="p-4 border-b">{bloodBank.contact}</td>
      <td className="p-4 border-b">{bloodBank.stock}</td>
      <td className="p-4 border-b text-center">
        <button
          className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
          onClick={() => handleEdit(bloodBank.id)}
        >
          Edit
        </button>
        <button
          className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 ml-2"
          onClick={() => handleDelete(bloodBank.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default BloodBankRow;
