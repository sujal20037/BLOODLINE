const DonorList = () => {
    const donors = [
      {
        id: 1,
        name: "Jeet Pal",
        city: "Howrah",
        state: "West Bengal",
        phone: "+91 7003955911",
        availability: "Available",
      },
      {
        id: 2,
        name: "Ankan Biswas",
        city: "Kolkata",
        state: "West Bengal",
        phone: "+91 8017456984",
        availability: "Unavailable",
      },
      {
        id: 3,
        name: "Arif Islam",
        city: "Hoogly",
        state: "West Bengal",
        phone: "+91 8017457884",
        availability: "Available",
      },
    ];
  
    const handleShowDetails = (id) => {
      alert(`Showing details for donor ID: ${id}`);
    };
  
    return (
      <div className="bg-white shadow-md rounded-md mb-8">
        <h2 className="text-center text-2xl font-bold text-red-500 px-6 py-4">
          Available Donors
        </h2>
        <div className="overflow-x-auto">
          <table className="text-center min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b">Name</th>
                <th className="px-6 py-3 border-b">City</th>
                <th className="px-6 py-3 border-b">State</th>
                <th className="px-6 py-3 border-b">Phone</th>
                <th className="px-6 py-3 border-b">Availability</th>
                <th className="px-6 py-3 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {donors.map((donor) => (
                <tr key={donor.id}>
                  <td className="px-6 py-3 border-b">{donor.name}</td>
                  <td className="px-6 py-3 border-b">{donor.city}</td>
                  <td className="px-6 py-3 border-b">{donor.state}</td>
                  <td className="px-6 py-3 border-b">{donor.phone}</td>
                  <td className="px-6 py-3 border-b">{donor.availability}</td>
                  <td className="px-6 py-3 border-b">
                    <button
                      onClick={() => handleShowDetails(donor.id)}
                      className={`bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition ${donor.availability === "Unavailable" ? "opacity-50 cursor-not-allowed" : ""}`}
                      disabled={donor.availability === "Unavailable"}
                    >
                      Show Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default DonorList;
  