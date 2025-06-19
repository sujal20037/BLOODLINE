// import React from "react";
import { Link } from "react-router-dom";
import donationFact from "../assets/images/donationFact.webp";

const DonationInfo = () => {
  const bloodCompatibility = [
    { type: "A+", donateTo: "A+ AB+", receiveFrom: "A+ A- O+ O-" },
    { type: "O+", donateTo: "O+ A+ B+ AB+", receiveFrom: "O+ O-" },
    { type: "B+", donateTo: "B+ AB+", receiveFrom: "B+ B- O+ O-" },
    { type: "AB+", donateTo: "AB+", receiveFrom: "Everyone" },
    { type: "A-", donateTo: "A+ A- AB+ AB-", receiveFrom: "A- O-" },
    { type: "O-", donateTo: "Everyone", receiveFrom: "O-" },
    { type: "B-", donateTo: "B+ B- AB+ AB-", receiveFrom: "B- O-" },
    { type: "AB-", donateTo: "AB+ AB-", receiveFrom: "AB- A- B- O-" },
  ];

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold text-center text-red-700 mb-4">
        Learn About Donation
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={donationFact}
            alt="Donation Fact"
            className="w-full rounded shadow"
          />
        </div>
        {/* Table Section */}
        <div className="md:w-1/2">
          <h3 className="text-xl font-bold text-red-700 mb-2">
            Compatible Blood Type Donors
          </h3>
          <table className="w-full border border-red-500">
            <thead>
              <tr className="bg-red-500 text-white">
                <th className="p-2 border">Blood Type</th>
                <th className="p-2 border">Donate Blood To</th>
                <th className="p-2 border">Receive Blood From</th>
              </tr>
            </thead>
            <tbody>
              {bloodCompatibility.map((row, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
                >
                  <td className="p-2 border text-center">{row.type}</td>
                  <td className="p-2 border text-center">{row.donateTo}</td>
                  <td className="p-2 border text-center">{row.receiveFrom}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Additional Info */}
      <p className="text-center text-gray-700 mt-8">
        After donating blood, the body works to replenish the blood loss. This
        stimulates the production of new blood cells and in turn, helps in
        maintaining good health.
      </p>
      {/* Donate Now Button */}
      <div className="text-center mt-4">
        <Link
          to="/login"
          className="bg-red-500 text-white px-6 py-2 rounded shadow hover:bg-red-600 transition"
        >
          Donate Now
        </Link>
      </div>
    </section>
  );
};

export default DonationInfo;
