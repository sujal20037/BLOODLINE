import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import StatsCarousel from "../components/statsCarousel";
import RequestBloodSection from "../components/requestblood";
import FindDonorSection from "../components/findadonor";
import NotificationSidebar from "../components/notificationSidebar";
import axios from "axios";

const RequesterDashboard = () => {
  const navigate = useNavigate();
  const [bloodRequests, setBloodRequests] = useState([]);
  const [stats, setStats] = useState({
    totalDonors: 150,
    bloodBanks: 20,
    successfulRequests: 300,
    totalBloodUnits: 500,
  });
  const getCookieValue = (name) => {
    const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
    return match ? decodeURIComponent(match[2]) : "";
  };
  const [showSidebar, setShowSidebar] = useState(false);
  const [notifications, setNotifications] = useState([
    "Your blood request for O+ blood group is received by JEET PAL from Kolkata.",
    "Your blood request for A+ blood group is Declined by JEET PAL.",
    "Your blood request has been fulfilled.",
  ]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/requester/request/${getCookieValue("id")}/status`)
      .then((response) => {
        // Assuming response data is an array of requests
        console.log(response.data);
        
        setBloodRequests(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blood requests:", error);
        // Optionally handle the error
      });
  }, []);

  const handleLogout = () => {
    document.cookie = "role=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "id=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    localStorage.removeItem("auth");
    navigate("/");
  };

  const handleNotifications = () => {
    setShowSidebar((prevState) => !prevState);
  };

  const handleResponse = (index, response) => {
    console.log(`Donor response to notification #${index + 1}: ${response}`);
    setNotifications((prev) => prev.filter((_, i) => i !== index));
  };
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 bg-red-500 text-white">
        <h1 className="text-2xl font-bold">Requester Dashboard</h1>
        <div>
          <button
            onClick={handleNotifications}
            className="bg-white text-red-500 mr-5 px-1 py-2 rounded hover:bg-gray-100 transition"
          >
            🔔 Notifications
          </button>
          <button
            onClick={handleLogout}
            className="bg-white text-red-500 px-4 py-2 rounded hover:bg-gray-100 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Notification Sidebar */}
      {showSidebar && (
        <NotificationSidebar
          notifications={notifications}
          onClose={() => {
            console.log("Closing notification sidebar...");
            setShowSidebar(false);
          }}
          handleResponse={handleResponse}
        />
      )}

      {/* Main Content */}
      <div className="min-h-screen bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="bg-white shadow-md rounded-md mb-8">
            <h2 className="text-center text-2xl font-bold text-red-500 px-6 py-4">
              Platform Statistics
            </h2>
            <div className="flex space-x-4 px-6 py-4">
              <StatsCarousel stats={stats} />
            </div>
          </div>
          <h1 className="text-5xl font-semibold text-center text-red-600 py-2 bg-gray-300 mb-0">
            Post a Blood Request
          </h1>
          <div className="grid grid-cols-2 items-center bg-gray-300 mt-0">
            <FindDonorSection />
            <RequestBloodSection />
          </div>
          <div className="bg-white shadow-md rounded-md mb-8">
            <h2 className="text-center text-2xl font-bold text-red-500 px-6 py-4">
              Your Blood Requests
            </h2>
            <div className="overflow-x-auto">
              <table className="text-center min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b">Date</th>
                    <th className="px-6 py-3 border-b">Blood Group</th>
                    <th className="px-6 py-3 border-b">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {bloodRequests.map((request) => (
                    <tr key={request.id}>
                      <td className="px-6 py-3 border-b">{formatDate(request.created_at)}</td>
                      <td className="px-6 py-3 border-b">{request.blood_group}</td>
                      <td className="px-6 py-3 border-b">{request.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default RequesterDashboard;
