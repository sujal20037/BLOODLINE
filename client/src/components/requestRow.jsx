// src/components/RequestRow.jsx
import React from "react";

const RequestRow = ({ request }) => {
  return (
    <tr className="hover:bg-gray-50">
      <td className="p-4 border-b">{request.requester}</td>
      <td className="p-4 border-b">{request.bloodGroup}</td>
      <td className="p-4 border-b">{request.location}</td>
      <td className="p-4 border-b">{request.date}</td>
      <td className="p-4 border-b">{request.status}</td>
      <td className="p-4 border-b text-center">
        <button className="px-3 py-1 bg-green-500 text-white rounded-md mr-2 hover:bg-green-600">
          Approve
        </button>
        <button className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600">
          Reject
        </button>
      </td>
    </tr>
  );
};

export default RequestRow;
