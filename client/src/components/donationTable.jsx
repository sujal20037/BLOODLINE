// src/components/DonationTable.jsx
import React from "react";

const DonationTable = ({ donations, onVerify }) => {
  return (
    <table className="min-w-full border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-4 text-left font-medium border-b">Donor</th>
          <th className="p-4 text-left font-medium border-b">Blood Group</th>
          <th className="p-4 text-left font-medium border-b">Location</th>
          <th className="p-4 text-left font-medium border-b">Date</th>
          <th className="p-4 text-left font-medium border-b">Status</th>
          <th className="p-4 text-center font-medium border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        {donations.map((donation) => (
          <tr key={donation.id} className="hover:bg-gray-50">
            <td className="p-4 border-b">{donation.donor}</td>
            <td className="p-4 border-b">{donation.bloodGroup}</td>
            <td className="p-4 border-b">{donation.location}</td>
            <td className="p-4 border-b">{donation.date}</td>
            <td
              className={`p-4 border-b ${
                donation.status === "Verified"
                  ? "text-green-500"
                  : "text-yellow-500"
              }`}
            >
              {donation.status}
            </td>
            <td className="p-4 border-b text-center">
              {donation.status === "Pending" ? (
                <button
                  className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
                  onClick={() => onVerify(donation.id)}
                >
                  Verify
                </button>
              ) : (
                <span className="text-gray-500">Verified</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DonationTable;
