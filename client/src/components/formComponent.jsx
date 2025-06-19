import { useState, useEffect } from "react";
import axios from "axios";

const FormComponent = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "",
    state: "",
    city: "",
    address: "",
    age: "",
    bloodGroup: "",
    previousDonations: "",
  });
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [loadingStates, setLoadingStates] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);
  

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
    if (onSubmit) onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Role */}
      <div className="mb-4">
        <label htmlFor="role" className="block text-gray-700 font-semibold mb-2">
          Role
        </label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500"
          required
        >
          <option value="">Select Role</option>
          <option value="donor">Donor</option>
          <option value="requester">Requester</option>
        </select>
      </div>

      {/* Conditional Fields for Donor */}
      {formData.role === "donor" && (
  <>
    {/* Age */}
    <div className="mb-4">
      <label htmlFor="age" className="block text-gray-700 font-semibold mb-2">
        Age
      </label>
      <input
        type="number"
        id="age"
        name="age"
        value={formData.age}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500"
        required
      />
    </div>

    {/* Blood Group */}
    <div className="mb-4">
      <label htmlFor="bloodGroup" className="block text-gray-700 font-semibold mb-2">
        Blood Group
      </label>
      <select
        id="bloodGroup"
        name="bloodGroup"
        value={formData.bloodGroup}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500"
        required
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

    {/* Previous Blood Donation Number */}
    <div className="mb-4">
      <label htmlFor="previousDonations" className="block text-gray-700 font-semibold mb-2">
        Number of Previous Blood Donations
      </label>
      <input
        type="number"
        id="previousDonations"
        name="previousDonations"
        value={formData.previousDonations}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500"
        required
      />
    </div>

    {/* Last Donation Date */}
    <div className="mb-4">
      <label htmlFor="lastDonationDate" className="block text-gray-700 font-semibold mb-2">
        Last Donation Date
      </label>
      <input
        type="date"
        id="lastDonationDate"
        name="lastDonationDate"
        value={formData.lastDonationDate}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500"
        required
      />
    </div>
  </>
)}

      {/* Name */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500"
          required
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500"
          required
        />
      </div>

      {/* Password */}
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500"
          required
        />
      </div>

      {/* Phone */}
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
          Phone
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500"
          required
        />
      </div>

      {/* State */}
      <div className="mb-4">
        <label htmlFor="state" className="block text-gray-700 font-semibold mb-2">
          State
        </label>
        <select
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500"
          required
        >
          <option value="">Select State</option>
          {states.map((state) => (
            <option key={state.id} value={state.id}>
              {state.name}
            </option>
          ))}
        </select>
      </div>

      {/* City */}
      <div className="mb-4">
        <label htmlFor="city" className="block text-gray-700 font-semibold mb-2">
          City
        </label>
        <select
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500"
          required
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

      {/* Address */}
      <div className="mb-4">
        <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">
          Address
        </label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500"
          required
        />
      </div>

      

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-500"
      >
        Register
      </button>
      {/* Login Redirect */}
      <div className="mt-4 text-center">
              <p className="text-gray-600">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-red-500 hover:underline font-semibold"
                >
                  Login here
                </a>
              </p>
            </div>
    </form>
  );
};

export default FormComponent;
