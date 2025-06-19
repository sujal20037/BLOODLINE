import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RequestBloodSection = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    contact: "",
    email: "",
    bloodGroup: "",
    state: "",
    city: "",
    status: "pending",
  });

  const navigate = useNavigate();
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [loadingStates, setLoadingStates] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);

  // Helper function to parse cookies
  const getCookieValue = (name) => {
    const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
    return match ? decodeURIComponent(match[2]) : "";
  };

  useEffect(() => {
    // Populate formData from cookies on component mount
    setFormData((prevFormData) => ({
      ...prevFormData,
      id: getCookieValue("id"),
      email: getCookieValue("email"),
    }));
  }, []);

  useEffect(() => {
    setLoadingStates(true);
    axios
      .get("http://localhost:8000/api/state-city/states")
      .then((response) => {
        const stateList = Object.keys(response.data).map((stateName) => ({
          name: stateName,
          id: response.data[stateName],
        }));
        setStates(stateList);
        setLoadingStates(false);
      })
      .catch((error) => {
        console.error("Error fetching states:", error);
        setLoadingStates(false);
      });
  }, []);

  useEffect(() => {
    if (formData.state) {
      setLoadingCities(true);
      axios
        .get(`http://localhost:8000/api/state-city/${formData.state}/cities`)
        .then((response) => {
          setCities(response.data);
          setLoadingCities(false);
        })
        .catch((error) => {
          console.error("Error fetching cities:", error);
          setLoadingCities(false);
        });
    } else {
      setCities([]);
    }
  }, [formData.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log(formData);
    axios
      .post("http://localhost:8000/api/requester/blood-request", formData)
      .then((response) => {
        console.log("Request submitted successfully:", response.data);
        alert("Blood request submitted successfully!");
        setFormData({
          name: "",
          contact: "",
          email: "",
          bloodGroup: "",
          state: "",
          city: "",
          status: "pending",
        });
        
      })
      .catch((error) => {
        console.error("Error submitting request:", error);
      });
  };

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto">
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-2.5">
              <label htmlFor="name" className="block text-gray-700 font-semibold">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              />
            </div>

            {/* Blood Group Field */}
            <div className="mb-2.5">
              <label htmlFor="bloodGroup" className="block text-gray-700 font-semibold">
                Blood Group
              </label>
              <select
                id="bloodGroup"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>

            {/* Contact Number Field */}
            <div className="mb-2.5">
              <label htmlFor="contact" className="block text-gray-700 font-semibold">
                Contact Number
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Enter your contact number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              />
            </div>

            {/* State Field */}
            <div className="mb-2.5">
              <label htmlFor="state" className="block text-gray-700 font-semibold">
                State
              </label>
              <select
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state.id} value={state.id}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>

            {/* City Field */}
            <div className="mb-2.5">
              <label htmlFor="city" className="block text-gray-700 font-semibold">
                City
              </label>
              <select
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
                disabled={loadingCities || !formData.state}
              >
                <option value="">Select City</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RequestBloodSection;
