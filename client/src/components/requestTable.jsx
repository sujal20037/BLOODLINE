// src/components/RequestTable.jsx
import React from "react";
import RequestRow from "./requestRow";

const RequestTable = ({ requests }) => {
  return (
    <table className="min-w-full border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-4 text-left font-medium border-b">Requester</th>
          <th className="p-4 text-left font-medium border-b">Blood Group</th>
          <th className="p-4 text-left font-medium border-b">Location</th>
          <th className="p-4 text-left font-medium border-b">Date</th>
          <th className="p-4 text-left font-medium border-b">Status</th>
          <th className="p-4 text-center font-medium border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        {requests.map((request) => (
          <RequestRow key={request.id} request={request} />
        ))}
      </tbody>
    </table>
  );
};

export default RequestTable;
