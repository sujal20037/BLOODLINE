const StatsCarousel = ({ stats, onClickTotalDonors }) => {
  const { totalDonors, bloodBanks, successfulRequests, totalBloodUnits } = stats;

  return (
    <>
      {/* Total Donors Card */}
      <div
        className="flex-1 h-40 text-center bg-red-500 text-white rounded-md shadow-md p-6 cursor-pointer hover:bg-red-400 transition"
        onClick={onClickTotalDonors}
      >
        <h1 className="text-3xl font-bold mb-2">Total Donors</h1>
        <p className="text-2xl font-bold">{totalDonors}</p>
      </div>

      {/* Blood Banks Card */}
      <div className="flex-1 h-40 text-center bg-green-500 text-white rounded-md shadow-md p-6">
        <h3 className="text-3xl font-bold">Blood Banks</h3>
        <p className="text-2xl font-bold">{bloodBanks}</p>
      </div>

      {/* Successful Requests Card */}
      <div className="flex-1 h-40 text-center bg-blue-500 text-white rounded-md shadow-md p-6">
        <h3 className="text-3xl font-bold">Successful Requests</h3>
        <p className="text-2xl font-bold">{successfulRequests}</p>
      </div>

      {/* Total Blood Units Card */}
      <div className="flex-1 h-40 text-center bg-yellow-500 text-white rounded-md shadow-md p-6">
        <h3 className="text-3xl font-bold">Total Blood Units</h3>
        <p className="text-2xl font-bold">{totalBloodUnits}</p>
      </div>
    </>
  );
};

export default StatsCarousel;
